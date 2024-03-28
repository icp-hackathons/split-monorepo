import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ROLE } from "../enum/role.enum";
import { STATUS } from "../enum/status.enum";

@ObjectType({ description: "사용자 정보" })
export class UserInfo {
  @Field(() => ID, { nullable: false, description: "아이디" })
  id!: string;

  @Field(() => String, { nullable: false, description: "지갑 주소" })
  address!: string;

  @Field(() => ROLE, { nullable: false, description: "역할" })
  role!: keyof typeof ROLE;

  @Field(() => STATUS, { nullable: false, description: "역할" })
  status!: keyof typeof STATUS;

  @Field(() => String, { nullable: false, description: "로그인용 일회용 논스" })
  nonce!: string;

  @Field(() => Date, { nullable: false, description: "생성 일시" })
  createdAt!: Date;

  @Field(() => Date, { nullable: false, description: "수정 일시" })
  updatedAt!: Date;
}
