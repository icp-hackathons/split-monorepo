import { Module } from "@nestjs/common";
import { ProductResolver } from "./product.resolver";
import { ProductService } from "./product.service";
import { ContractFactory } from "../../common/contract/contract.factory";

@Module({
  providers: [ProductResolver, ProductService, ContractFactory],
  exports: [ProductService],
})
export class ProductModule {}
