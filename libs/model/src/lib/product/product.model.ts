import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: "제품 정보" })
export class ProductInfo {
  @Field(() => ID, { nullable: false, description: "아이디" })
  id!: string;

  @Field(() => String, { nullable: false, description: "사용자 아이디" })
  userId!: string;

  @Field(() => String, { nullable: false, description: "제품 이름" })
  name!: string;

  @Field(() => String, { nullable: false, description: "웹 링크" })
  webLink!: string;

  @Field(() => String, { nullable: true, description: "트위터 링크" })
  twitterLink?: string;

  @Field(() => String, { nullable: false, description: "소개" })
  description!: string;

  @Field(() => String, { nullable: true, description: "API 키" })
  apiKey?: string;

  @Field(() => Boolean, { nullable: false, description: "SDK 설치 여부" })
  isSdkIntegrated!: boolean;

  @Field(() => Date, { nullable: false, description: "생성 일시" })
  createdAt!: Date;

  @Field(() => Date, { nullable: false, description: "수정 일시" })
  updatedAt!: Date;
}
