import { registerEnumType } from "@nestjs/graphql";

export enum UserReferralType {
  USER = "USER",
  REFERRAL_PROVIDER = "REFERRAL_PROVIDER",
}

registerEnumType(UserReferralType, { name: "UserReferralType", description: "레퍼럴 사용자 타입" });
