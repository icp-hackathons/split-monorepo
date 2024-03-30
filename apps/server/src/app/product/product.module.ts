import { Module } from "@nestjs/common";
import { ProductResolver } from "./product.resolver";
import { ProductService } from "./product.service";
import { ContractFactory } from "../../common/contract/contract.factory";
import { ApiKeyStrategy } from "../../common/strategy/api-key.strategy";

@Module({
  providers: [ProductResolver, ProductService, ContractFactory, ApiKeyStrategy],
  exports: [ProductService],
})
export class ProductModule {}
