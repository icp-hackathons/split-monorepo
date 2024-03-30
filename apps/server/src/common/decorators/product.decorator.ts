import type { ExecutionContext } from "@nestjs/common";
import { createParamDecorator } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

export const ProductDecoded = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  return GqlExecutionContext.create(ctx).getContext().req.product;
});
