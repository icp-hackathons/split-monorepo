import { registerEnumType } from "@nestjs/graphql";

export enum SupportedNetwork {
  NONE = "NONE",
  SEPOLIA_TESTNET = "SEPOLIA_TESTNET",
}

registerEnumType(SupportedNetwork, { name: "SupportedNetwork", description: "컨트랙트에서 지원하는 네트워크" });
