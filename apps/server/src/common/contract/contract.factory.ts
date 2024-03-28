import { Injectable } from "@nestjs/common";
import { provider } from "./contract.provider";
import type { IncentivePoolFactory, TestToken } from "./typechain-types";
import { IncentivePoolFactory__factory } from "./typechain-types/factories/IncentivePoolFactory__factory";
import { TestToken__factory } from "./typechain-types/factories/TestToken__factory";

@Injectable()
export class ContractFactory {
  private incentivePoolFactory: IncentivePoolFactory;
  private testUSDC: TestToken;

  constructor() {
    this.incentivePoolFactory = IncentivePoolFactory__factory.connect(process.env.FACTORY_CONTRACT_ADDR, provider);
    this.testUSDC = TestToken__factory.connect(process.env.USDC_CONTRACT_ADDR, provider);
  }

  getIncentivePoolFactory() {
    return this.incentivePoolFactory;
  }

  getTestUSDC() {
    return this.testUSDC;
  }
}
