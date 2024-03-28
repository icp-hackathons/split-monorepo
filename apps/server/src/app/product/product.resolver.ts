import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { JwtPayload, ProductCreateInput, ProductInfo, ProductUpdateInput } from "@split/model";
import { ProductService } from "./product.service";
import { UserDecoded } from "../../common/decorators/user.decorator";
import { JwtAuthGuard } from "../../common/guard/jwt.guard";

@Resolver(() => ProductInfo)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => ProductInfo)
  createProduct(@UserDecoded() payload: JwtPayload, @Args("input") productInput: ProductCreateInput) {
    return this.productService.createProduct(payload.address, productInput);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => ProductInfo)
  setIncentivePool(@UserDecoded() payload: JwtPayload, @Args("input") productInput: ProductUpdateInput) {
    return this.productService.setIncentivePool(payload.address, productInput);
  }
}
