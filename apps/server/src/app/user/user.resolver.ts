import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserInfo, UserInput } from "@split/model";
import { UserService } from "./user.service";

@Resolver(() => UserInfo)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserInfo)
  register(@Args("input") registerInput: UserInput) {
    return this.userService.register(registerInput);
  }

  @Query(() => UserInfo)
  getUser(@Args("input") getUserInput: UserInput) {
    return this.userService.getUser(getUserInput);
  }
}
