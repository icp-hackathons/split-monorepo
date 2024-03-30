import { Injectable } from "@nestjs/common";
import { GraphQLError } from "graphql";
import { ErrorMessage } from "@split/constants";
import type { UpdateReferralTransactionReq } from "@split/model";
import { UserReferralType } from "@split/model";
import type { Prisma } from "~/prisma/generated/client";
import { ContractFactory } from "../../common/contract/contract.factory";
import { GAS_PRICE, wallet } from "../../common/contract/contract.provider";
import { PrismaService } from "../../common/prisma/prisma.service";

@Injectable()
export class UserReferralService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly contractFactory: ContractFactory,
  ) {}

  async updateUserReferrals() {
    const notUpdatedReferrals = await this.prisma.extended.referral.findMany({
      where: { userReferrals: { every: { updated: false } } },
      include: { userReferrals: true },
    });
    if (!notUpdatedReferrals.length) return null;

    // 레퍼럴 데이터를 컨트랙트 input에 맞게 변환
    const parsedReferrals: UpdateReferralTransactionReq = {
      info: [],
    };
    const groupedData: { [poolAddress: string]: { affiliate: string; user: string }[] } = {};

    await Promise.all(
      notUpdatedReferrals.map(async (referral) => {
        const { eventId, userReferrals } = referral;
        const referralProvider = userReferrals.find((r) => r.userReferralType === UserReferralType.REFERRAL_PROVIDER);
        const user = userReferrals.find((r) => r.userReferralType === UserReferralType.USER);

        const { productId } = await this.prisma.extended.event.findUnique({ where: { id: eventId } });
        const { poolAddress } = await this.prisma.extended.incentivePool.findUnique({ where: { productId } });

        if (!groupedData[poolAddress]) {
          groupedData[poolAddress] = [];
        }

        groupedData[poolAddress].push({
          affiliate: referralProvider.userAddress,
          user: user.userAddress,
        });
      }),
    );

    Object.keys(groupedData).forEach((poolAddress) => {
      parsedReferrals.info.push({
        incentivePoolAddress: poolAddress,
        referrals: groupedData[poolAddress],
      });
    });

    return this.prisma.$transaction(async (prismaTransaction: Prisma.TransactionClient) => {
      // 데이터베이스 업데이트
      const userReferralInfo = await prismaTransaction.userReferral.updateMany({
        where: { referralId: { in: notUpdatedReferrals.map((r) => r.id) } },
        data: { updated: true },
      });

      // 업데이트 트랜잭션 실행
      const factoryContract = this.contractFactory.getIncentivePoolFactory();
      const receipt = await (
        await factoryContract.connect(wallet).updateIncentivePools(parsedReferrals, { gasPrice: GAS_PRICE })
      ).wait();
      if (receipt.status !== 1) {
        throw new GraphQLError(ErrorMessage.MSG_REFERRAL_UPDATE_FAILED);
      }

      return userReferralInfo;
    });
  }
}
