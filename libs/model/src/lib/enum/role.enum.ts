import { registerEnumType } from "@nestjs/graphql";

export enum Role {
  USER = "USER",
  AFFILIATE = "AFFILIATE",
  ADMIN = "ADMIN",
}

registerEnumType(Role, { name: "Role", description: "사용자 역할" });
