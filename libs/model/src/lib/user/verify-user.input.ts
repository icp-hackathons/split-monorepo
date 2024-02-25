import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class VerifyUserInput {
  @Field(() => String, { nullable: false, description: "메시지" })
  message!: string;

  @Field(() => String, { nullable: false, description: "서명" })
  signature!: string;
}
