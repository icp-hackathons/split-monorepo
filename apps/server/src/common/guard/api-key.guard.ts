import { type ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";
import type { Observable } from "rxjs";
import { ErrorMessage } from "@split/constants";

@Injectable()
export class ApiKeyGuard extends AuthGuard("api-key") {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    return super.canActivate(context);
  }

  override getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }

  override handleRequest(err: any, product: any, info: any, context: ExecutionContext, status?: any) {
    if (err || !product) {
      throw err || new UnauthorizedException(ErrorMessage.MSG_UNAUTHORIZED);
    }
    return product;
  }
}
