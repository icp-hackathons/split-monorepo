import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth/auth.service";
import { UserResolver } from "./user.resolver";
import { UserService } from "./user.service";
import type { JwtConfig } from "../../common/config/config.interface";
import { JwtStrategy } from "../../common/strategy/jwt.strategy";

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<JwtConfig>("jwt").secret,
        signOptions: { expiresIn: configService.get<JwtConfig>("jwt").expiredTime },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [UserResolver, AuthService, JwtStrategy, UserService],
  exports: [UserService],
})
export class UserModule {}
