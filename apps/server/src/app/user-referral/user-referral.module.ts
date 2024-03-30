import { Module } from "@nestjs/common";
import { UserReferralResolver } from "./user-referral.resolver";
import { UserReferralService } from "./user-referral.service";
import { ContractFactory } from "../../common/contract/contract.factory";

@Module({
  providers: [UserReferralResolver, UserReferralService, ContractFactory],
  exports: [UserReferralService],
})
export class UserReferralModule {}
