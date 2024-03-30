import { Field, InputType } from "@nestjs/graphql";
import { IsEnum, IsEthereumAddress } from "class-validator";
import { UserReferralType } from "../enum/user-referral-type.enum";

@InputType()
export class UserReferralInput {
  @Field(() => String, { nullable: false, description: "사용자 지갑 주소" })
  @IsEthereumAddress()
  userAddress!: string;

  @Field(() => UserReferralType, { nullable: false, description: "레퍼럴 사용자 타입" })
  @IsEnum(UserReferralType)
  userReferralType!: keyof typeof UserReferralType;
}
