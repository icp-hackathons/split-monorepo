import { Injectable } from "@nestjs/common";
import * as crypto from "crypto";
import { GraphQLError } from "graphql";
import { ErrorMessage } from "@split/constants";
import { type ProductCreateInput, type ProductUpdateInput, SupportedNetwork } from "@split/model";
import type { Prisma } from "~/prisma/generated/client";
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

    const isDeployerExist = deployers.some((deployer) => deployer === product.userAddress);
    if (!isDeployerExist || !poolAddress) throw new GraphQLError(ErrorMessage.MSG_NOT_FOUND_INCENTIVE_POOL);

    return this.prisma.$transaction(async (prismaTransaction: Prisma.TransactionClient) => {
      const { id, events, incentivePool, ...productInputs } = productInput;
      const apiKey = this.generateApiKey();

      const productInfo = await prismaTransaction.product.update({
        where: { id },
        data: { ...productInputs, apiKey },
      });

      await prismaTransaction.incentivePool.create({
        data: {
          ...incentivePool,
          poolNetwork: SupportedNetwork.SEPOLIA_TESTNET,
          productId: productInfo.id,
        },
      });

      // NOTE: 현재는 단일 이벤트만 등록 가능
      await Promise.all(
        events.map(async (event) => {
          const { transaction, type, ...eventInputs } = event;
          const eventInfo = await prismaTransaction.event.create({
            data: {
              ...eventInputs,
              type: "NON_TRANSACTION",
              productId: productInfo.id,
            },
          });
          if (transaction) {
            await prismaTransaction.transaction.create({
              data: {
                ...transaction,
                eventId: eventInfo.id,
              },
            });
          }
          return eventInfo;
        }),
      );
      return productInfo;
    });
  }

  async findProductById(id: string) {
    return this.prisma.extended.product.findUnique({ where: { id } });
  }

  async findProductByApiKey(apiKey: string) {
    return this.prisma.extended.product.findUnique({ where: { apiKey } });
  }

  async resolveEvents(productId: string) {
    if (!productId) return null;
    return this.prisma.extended.event.findMany({ where: { productId } });
  }
}
