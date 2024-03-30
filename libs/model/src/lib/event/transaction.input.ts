import { Field, InputType } from "@nestjs/graphql";
import { IsEthereumAddress, IsString, Length } from "class-validator";

@InputType()
export class TransactionInput {
  @Field(() => String, { nullable: false, description: "대상 주소" })
  @IsEthereumAddress()
  targetAddress!: string;

  @Field(() => String, { nullable: false, description: "함수 코드" })
  @IsString()
  @Length(10, 10)
  methodId!: string;
}
