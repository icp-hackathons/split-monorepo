import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class TokenInput {
  @Field(() => String, { nullable: true, description: "Access token" })
  accessToken?: string;

  @Field(() => String, { nullable: true, description: "Refresh token" })
  refreshToken?: string;
}
