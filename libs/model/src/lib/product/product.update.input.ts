import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class ProductUpdateInput {
  @Field(() => ID, { nullable: false, description: "제품 아이디" })
  id!: string;

  // 필요 시 추가
}
