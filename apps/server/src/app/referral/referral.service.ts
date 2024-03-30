import { Injectable } from "@nestjs/common";
import { GraphQLError } from "graphql";
import { ErrorMessage } from "@split/constants";
import { type ReferralInput, Role, UserReferralType } from "@split/model";
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
    if (existingReferral) throw new GraphQLError(ErrorMessage.MSG_DUPLICATE_REFERRAL);

    return this.prisma.$transaction(async (prismaTransaction: Prisma.TransactionClient) => {
      const { eventId, referralProviderInput, userInput } = referralInput;
      const referralInfo = await prismaTransaction.referral.create({
        data: {
          eventId,
        },
      });

      const referralProvider = await this.prisma.extended.user.findUnique({
        where: { address: referralProviderInput.userAddress },
      });
      if (!referralProvider) throw new GraphQLError(ErrorMessage.MSG_INVALID_REFERRAL_PROVIDER);

      const user = await prismaTransaction.user.upsert({
        create: {
          address: userInput.userAddress,
          role: Role.USER,
          status: "ACTIVE",
          nonce: "",
        },
        update: {},
        where: {
          address: userInput.userAddress,
        },
      });

      await prismaTransaction.userReferral.create({
        data: {
          referralId: referralInfo.id,
          userAddress: referralProvider.address,
          userReferralType: UserReferralType.REFERRAL_PROVIDER,
        },
      });
      await prismaTransaction.userReferral.create({
        data: {
          referralId: referralInfo.id,
          userAddress: user.address,
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
