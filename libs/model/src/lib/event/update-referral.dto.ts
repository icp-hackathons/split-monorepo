export class UpdateReferralTransactionReq {
  info!: {
    incentivePoolAddress: string;
    referrals: { affiliate: string; user: string }[];
  }[];
}
