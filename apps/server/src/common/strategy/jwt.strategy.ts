import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { GraphQLError } from "graphql";
import { ExtractJwt, Strategy, type VerifiedCallback } from "passport-jwt";
import { ErrorMessage } from "@split/constants";
import type { JwtPayload } from "@split/model";
import { UserService } from "../../app/user/user.service";
import type { JwtConfig } from "../config/config.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<JwtConfig>("jwt").secret,
    });
  }

  async validate(payload: JwtPayload, done: VerifiedCallback) {
    // TODO: DB 직접 확인 안하고 redis에 저장된 accessToken을 확인하도록 수정
    const user = await this.userService.findUserByAddress({ address: payload.address });
    if (!user) {
      return done(new GraphQLError(ErrorMessage.MSG_NOT_FOUND_USER), false);
    }
    return done(null, user);
  }
}
