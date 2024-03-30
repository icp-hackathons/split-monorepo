import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../common/prisma/prisma.service";

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}

  async resolveTransaction(eventId: string) {
    if (!eventId) return null;
    return this.prisma.extended.transaction.findUnique({ where: { eventId } });
  }

  async resolveReferrals(eventId: string) {
    if (!eventId) return null;
    return this.prisma.extended.referral.findMany({ where: { eventId }, orderBy: { createdAt: "desc" } });
  }
}
