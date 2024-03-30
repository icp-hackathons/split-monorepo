import { Field, InputType } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { IsString, ValidateNested } from "class-validator";
import { UserReferralInput } from "./user-referral.input";

@InputType()
export class ReferralInput {
  @Field(() => String, { nullable: false, description: "이벤트 아이디" })
  @IsString()
  eventId!: string;

  @ValidateNested()
  @Type(() => UserReferralInput)
  @Field(() => UserReferralInput, { nullable: false, description: "추천인 정보" })
  referralProviderInput!: UserReferralInput;

  @ValidateNested()
  @Type(() => UserReferralInput)
  @Field(() => UserReferralInput, { nullable: false, description: "사용자 정보" })
  userInput!: UserReferralInput;
}
