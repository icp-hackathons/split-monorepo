import { Injectable } from "@nestjs/common";
import * as crypto from "crypto";
import { GraphQLError } from "graphql";
import { ErrorMessage } from "@split/constants";
import type { ProductCreateInput, ProductUpdateInput } from "@split/model";
import { ContractFactory } from "../../common/contract/contract.factory";
import { PrismaService } from "../../common/prisma/prisma.service";

@Injectable()
export class ProductService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly contractFactory: ContractFactory,
  ) {}

  async createProduct(userAddress: string, productInput: ProductCreateInput) {
    const product = await this.prisma.product.create({
      data: {
        name: productInput.name,
        userAddress,
        webLink: productInput.webLink,
        twitterLink: productInput.twitterLink,
        description: productInput.description,
      },
    });

    return product;
  }

  private generateApiKey(): string {
    const apiBuffer: Buffer = crypto.randomBytes(16);
    const apiKey = apiBuffer.toString("hex").slice(0, 32);
    return apiKey;
  }

  async setIncentivePool(userAddress: string, productInput: ProductUpdateInput) {
    const product = await this.prisma.extended.product.findFirst({ where: { id: productInput.id } });
    if (!product) throw new GraphQLError(ErrorMessage.MSG_NOT_FOUND_PRODUCT);
    if (product.userAddress !== userAddress) throw new GraphQLError(ErrorMessage.MSG_UNAUTHORIZED);

    const incentivePoolFactoryContract = this.contractFactory.getIncentivePoolFactory();

    const [deployers, poolAddress] = await Promise.all([
      incentivePoolFactoryContract.getDeployers(),
      incentivePoolFactoryContract.deployerToIncentivePool(userAddress),
    ]);

    const isDeployerExist = deployers.some((deployer) => deployer.toLowerCase() === product.userAddress);
    if (!isDeployerExist || !poolAddress) throw new GraphQLError(ErrorMessage.MSG_NOT_FOUND_INCENTIVE_POOL);

    const apiKey = this.generateApiKey();
    const updatedProduct = await this.prisma.product.update({
      where: { id: productInput.id },
      data: { apiKey, isSdkIntegrated: true },
    });

    return updatedProduct;
  }
}
