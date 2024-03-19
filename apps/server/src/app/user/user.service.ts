import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { GraphQLError } from "graphql";
import { SiweMessage, generateNonce } from "siwe";
import { ErrorMessage } from "@split/constants";
import { ROLE } from "@split/model";
import type { TokenInput, UserInput, VerifyUserInput } from "@split/model";
import { AuthService } from "./auth/auth.service";
import { PrismaService } from "../../common/prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authService: AuthService,
  ) {}

  async requestLogin(userInput: UserInput) {
    /* 로그인용 논스 생성 */
    const nonce = generateNonce();

    const userInfo = await this.prisma.user.upsert({
      create: {
        address: userInput.address,
        role: ROLE.USER,
        nonce,
      },
      update: userInput,
      where: { address: userInput.address },
    });

    return userInfo;
  }

  async verifyLogin({ message, signature }: VerifyUserInput) {
    const siweMessage = new SiweMessage(message);
    const {
      data: { address, nonce },
    } = await siweMessage.verify({ signature });

    const user = await this.prisma.extended.user.findUnique({ where: { address } });
    if (!user || nonce !== user.nonce) {
      throw new GraphQLError(ErrorMessage.MSG_INVALID_SIGNATURE);
    }

    const { accessToken, refreshToken } = this.authService.generateTokens({ address: user.address });
    const saltOrRounds = 10;
    const encryptedRefreshToken = await bcrypt.hash(refreshToken, saltOrRounds);

    await this.prisma.authToken.upsert({
      create: {
        userId: user.id,
        accessToken,
        encryptedRefreshToken,
      },
      update: {
        accessToken,
        encryptedRefreshToken,
      },
      where: { userId: user.id },
    });

    return { accessToken, refreshToken };
  }

  async refreshTokens({ refreshToken }: TokenInput) {
    const { address } = this.authService.verifyRefreshToken(refreshToken);

    const user = await this.prisma.extended.user.findUnique({ where: { address } });
    if (!user) throw new GraphQLError(ErrorMessage.MSG_NOT_FOUND_USER);

    const { encryptedRefreshToken } = await this.prisma.authToken.findUnique({ where: { userId: user.id } });
    const isMatch = await bcrypt.compare(refreshToken, encryptedRefreshToken);
    if (!isMatch) {
      throw new Error();
    }

    const accessToken = this.authService.generateAccessToken({ address });
    await this.prisma.authToken.update({
      where: { userId: user.id },
      data: {
        accessToken,
      },
    });
  }

  async findUserByAddress(userInput: UserInput) {
    return this.prisma.extended.user.findUnique({ where: userInput });
  }
}
