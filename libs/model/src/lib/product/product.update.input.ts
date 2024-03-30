import { Field, ID, InputType } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { IncentivePoolInput } from "./incentive-pool.input";
import { EventInput } from "../event/event.input";

@InputType()
export class ProductUpdateInput {
  @Field(() => ID, { nullable: false, description: "제품 아이디" })
  id!: string;

  @ValidateNested()
  @Type(() => IncentivePoolInput)
  @Field(() => IncentivePoolInput, { nullable: true, description: "보상 풀 입력값" })
  incentivePool!: IncentivePoolInput;

  @ValidateNested()
  @Type(() => EventInput)
  @Field(() => [EventInput], { nullable: true, description: "트랜잭션 입력값" })
  events?: EventInput[];

  // 필요 시 추가
}
