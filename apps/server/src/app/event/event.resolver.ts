import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { EventInfo, ReferralInfo, TransactionInfo } from "@split/model";
import { EventService } from "./event.service";

@Resolver(() => EventInfo)
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @ResolveField("transaction", () => TransactionInfo, { nullable: true })
  async resolveTransaction(@Parent() eventInfo: EventInfo) {
    return this.eventService.resolveTransaction(eventInfo.id);
  }

  @ResolveField("referrals", () => [ReferralInfo], { nullable: true })
  async resolveReferrals(@Parent() eventInfo: EventInfo) {
    return this.eventService.resolveReferrals(eventInfo.id);
  }
}
