import { Injectable } from "@nestjs/common";
import { type ReferralInput, UserReferralType } from "@split/model";
import type { Prisma } from "~/prisma/generated/client";
import { PrismaService } from "../../common/prisma/prisma.service";

@Injectable()
export class ReferralService {
  constructor(private readonly prisma: PrismaService) {}

  async addReferral(referralInput: ReferralInput) {
    const existingReferral = await this.prisma.extended.referral.findFirst({
      where: {
        eventId: referralInput.eventId,
        userReferrals: {
          every: {
            userAddress: {
              in: [referralInput.referralProviderInput.userAddress, referralInput.userInput.userAddress],
            },
          },
        },
      },
      include: {
        userReferrals: true,
      },
    });
    if (existingReferral) return existingReferral;

    return this.prisma.$transaction(async (prismaTransaction: Prisma.TransactionClient) => {
      const { eventId, referralProviderInput, userInput } = referralInput;
      const referralInfo = await prismaTransaction.referral.create({
        data: {
          eventId,
        },
      });
      await prismaTransaction.userReferral.create({
        data: {
          referralId: referralInfo.id,
          userAddress: referralProviderInput.userAddress,
          userReferralType: UserReferralType.REFERRAL_PROVIDER,
        },
      });
      await prismaTransaction.userReferral.create({
        data: {
          referralId: referralInfo.id,
          userAddress: userInput.userAddress,
          userReferralType: UserReferralType.USER,
        },
      });
      return referralInfo;
    });
  }

  async resolveUserReferral(referralId: string) {
    if (!referralId) return null;
    return this.prisma.extended.userReferral.findMany({ where: { referralId } });
  }
}
