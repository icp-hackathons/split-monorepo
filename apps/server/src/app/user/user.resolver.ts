import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Token, TokenInput, UserInfo, UserInput, UserReferralInfo, VerifyUserInput } from "@split/model";
import { UserService } from "./user.service";

@Resolver(() => UserInfo)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserInfo)
  requestLogin(@Args("input") userInput: UserInput) {
    return this.userService.requestLogin(userInput);
  }

  @Mutation(() => Token)
  verifyLogin(@Args("input") verifyUserInput: VerifyUserInput) {
    return this.userService.verifyLogin(verifyUserInput);
  }

  @Mutation(() => Token)
  refreshTokens(@Args("input") tokenInput: TokenInput) {
    return this.userService.refreshTokens(tokenInput);
  }

  @Query(() => UserInfo)
  findUserByAddress(@Args("input") userInput: UserInput) {
    return this.userService.findUserByAddress(userInput);
  }

  @ResolveField("userReferrals", () => [UserReferralInfo], { nullable: true })
  userReferrals(@Parent() userInfo: UserInfo) {
    return this.userService.findUserReferrals(userInfo.address);
  }
}
