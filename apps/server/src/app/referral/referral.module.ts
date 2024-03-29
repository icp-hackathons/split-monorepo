import { Module } from "@nestjs/common";
import { ReferralResolver } from "./referral.resolver";
import { ReferralService } from "./referral.service";

@Module({
  providers: [ReferralResolver, ReferralService],
  exports: [ReferralService],
})
export class ReferralModule {}
