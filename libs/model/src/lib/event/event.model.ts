import { Field, ID, ObjectType } from "@nestjs/graphql";
import { EventType } from "../enum/event-type.enum";

@ObjectType({ description: "이벤트 정보" })
export class EventInfo {
  @Field(() => ID, { nullable: false, description: "아이디" })
  id!: string;

  @Field(() => String, { nullable: false, description: "이름" })
  name!: string;

  @Field(() => String, { nullable: false, description: "제품 아이디" })
  productId!: string;

  @Field(() => EventType, { nullable: false, description: "이벤트 타입" })
  type!: keyof typeof EventType;

  @Field(() => String, { nullable: false, description: "이벤트당 추천인 수령 금액" })
  providerAmountPerEvent!: string;

  @Field(() => String, { nullable: true, description: "이벤트당 사용자 수령 금액" })
  userAmountPerEvent?: string;

  @Field(() => Date, { nullable: false, description: "생성 일시" })
  createdAt!: Date;

  @Field(() => Date, { nullable: false, description: "수정 일시" })
  updatedAt!: Date;
}
