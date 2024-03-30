import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class ProductCreateInput {
  @Field(() => String, { nullable: false, description: "제품 이름" })
  name!: string;

  @Field(() => String, { nullable: false, description: "웹 링크" })
  webLink!: string;

  @Field(() => String, { nullable: true, description: "트위터 링크" })
  twitterLink?: string;

  @Field(() => String, { nullable: false, description: "소개" })
  description!: string;
}
