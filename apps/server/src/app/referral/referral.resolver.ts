import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { ReferralInfo, ReferralInput, UserReferralInfo } from "@split/model";
import { ReferralService } from "./referral.service";
import { ApiKeyGuard } from "../../common/guard/api-key.guard";

@Resolver(() => ReferralInfo)
export class ReferralResolver {
  constructor(private readonly referralService: ReferralService) {}

  @UseGuards(ApiKeyGuard)
  @Mutation(() => ReferralInfo)
  async addReferral(@Args("input") referralInput: ReferralInput) {
    return this.referralService.addReferral(referralInput);
  }

  @ResolveField("userReferrals", () => [UserReferralInfo], { nullable: true })
  async resolveUserReferral(@Parent() referralInfo: ReferralInfo) {
    return this.referralService.resolveUserReferral(referralInfo.id);
  }
}
