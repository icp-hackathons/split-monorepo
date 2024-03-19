import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class TokenInput {
  @Field(() => String, { description: "Access token" })
  accessToken?: string;

  @Field(() => String, { description: "Refresh token" })
  refreshToken?: string;
}
