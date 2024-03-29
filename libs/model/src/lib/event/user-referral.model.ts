import { Field, ID, ObjectType } from "@nestjs/graphql";
import { UserReferralType } from "../enum/user-referral-type.enum";

@ObjectType({ description: "사용자의 레퍼럴 정보" })
export class UserReferralInfo {
  @Field(() => ID, { nullable: false, description: "아이디" })
  id!: string;

  @Field(() => String, { nullable: false, description: "사용자 지갑 주소" })
  userAddress!: string;

  @Field(() => String, { nullable: false, description: "레퍼럴 아이디" })
  referralId!: string;

  @Field(() => UserReferralType, { nullable: false, description: "레퍼럴 사용자 타입" })
  userReferralType!: keyof typeof UserReferralType;

  @Field(() => Boolean, { nullable: false, description: "보상 수령 여부" })
  claimed!: boolean;

  @Field(() => Date, { nullable: false, description: "생성 일시" })
  createdAt!: Date;

  @Field(() => Date, { nullable: false, description: "수정 일시" })
  updatedAt!: Date;
}
