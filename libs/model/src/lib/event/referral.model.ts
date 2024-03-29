import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: "레퍼럴 정보" })
export class ReferralInfo {
  @Field(() => ID, { nullable: false, description: "아이디" })
  id!: string;

  @Field(() => String, { nullable: false, description: "이벤트 아이디" })
  eventId!: string;

  @Field(() => Date, { nullable: false, description: "생성 일시" })
  createdAt!: Date;

  @Field(() => Date, { nullable: false, description: "수정 일시" })
  updatedAt!: Date;
}
