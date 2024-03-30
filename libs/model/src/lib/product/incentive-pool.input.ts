import { Field, InputType } from "@nestjs/graphql";
import { IsEthereumAddress } from "class-validator";

@InputType()
export class IncentivePoolInput {
  @Field(() => String, { nullable: false, description: "보상 풀 주소" })
  @IsEthereumAddress()
  poolAddress!: string;

  @Field(() => String, { nullable: false, description: "보상 풀 토큰 주소" })
  @IsEthereumAddress()
  incentiveAddress!: string;
}
