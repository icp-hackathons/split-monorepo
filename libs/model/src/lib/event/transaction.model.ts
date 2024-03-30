import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: "트랜잭션 정보" })
export class TransactionInfo {
  @Field(() => ID, { nullable: false, description: "아이디" })
  id!: string;

  @Field(() => String, { nullable: false, description: "대상 주소" })
  targetAddress!: string;

  @Field(() => String, { nullable: false, description: "함수 코드" })
  methodId!: string;

  @Field(() => String, { nullable: false, description: "이벤트 아이디" })
  eventId!: string;

  @Field(() => Date, { nullable: false, description: "생성 일시" })
  createdAt!: Date;

  @Field(() => Date, { nullable: false, description: "수정 일시" })
  updatedAt!: Date;
}
