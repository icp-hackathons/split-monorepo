import { Injectable } from "@nestjs/common";
import type { UserInput } from "@split/model";
import { PrismaService } from "../../common/prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async register(registerInput: UserInput) {
    const userInfo = await this.prisma.user.create({ data: registerInput });
    return userInfo;
  }

  async getUser(getUserInput: UserInput) {
    return this.prisma.extended.user.findUnique({ where: getUserInput });
  }
}
