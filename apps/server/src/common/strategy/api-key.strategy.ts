import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { GraphQLError } from "graphql";
import Strategy from "passport-headerapikey";
import { ErrorMessage } from "@split/constants";
import { ProductService } from "../../app/product/product.service";

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(Strategy, "api-key") {
  constructor(private productService: ProductService) {
    super({ header: "api-key", prefix: "" }, true, async (apiKey, done) => {
      const product = await this.productService.findProductByApiKey(apiKey);
      if (!product) {
        return done(new GraphQLError(ErrorMessage.MSG_INVALID_API_KEY));
      }
      return done(null, product);
    });
  }
}
