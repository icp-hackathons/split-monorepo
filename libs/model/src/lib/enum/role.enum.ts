import { registerEnumType } from "@nestjs/graphql";

export enum ROLE {
  USER = "USER",
  AFFILIATE = "AFFILIATE",
  ADMIN = "ADMIN",
}

registerEnumType(ROLE, { name: "ROLE", description: "사용자 역할" });
