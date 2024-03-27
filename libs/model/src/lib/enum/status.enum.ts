import { registerEnumType } from "@nestjs/graphql";

export enum STATUS {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  DELETE = "DELETE",
}

registerEnumType(STATUS, { name: "STATUS", description: "사용자 상태" });
