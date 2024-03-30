import { Mutation, Resolver } from "@nestjs/graphql";
import { UserReferralInfo } from "@split/model";
import { UserReferralService } from "./user-referral.service";

@Resolver(() => UserReferralInfo)
export class UserReferralResolver {
  constructor(private readonly userReferralService: UserReferralService) {}

  @Mutation(() => [UserReferralInfo])
  async updateUserReferrals() {
    return this.userReferralService.updateUserReferrals();
  }
}
