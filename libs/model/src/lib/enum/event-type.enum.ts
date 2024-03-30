import { registerEnumType } from "@nestjs/graphql";

export enum EventType {
  NON_TRANSACTION = "NON_TRANSACTION",
  TRANSACTION = "TRANSACTION",
}

registerEnumType(EventType, { name: "EventType", description: "이벤트 종류" });
