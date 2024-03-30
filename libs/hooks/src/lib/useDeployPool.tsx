/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { type BigNumber, ethers } from "ethers";
import { getEthersProvider, getEthersSigner } from "@split/utils";
import type { IncentivePoolFactory } from "./IncentivePoolFactory";
import { IncentivePoolFactory__factory } from "./IncentivePoolFactory__factory";

interface IncentiveInfo {
  incentiveToken: string;
  incentiveAmountPerTransaction: BigNumber;
  affiliateAmountPerTransaction: BigNumber;
  userAmountPerTransaction: BigNumber;
  leftTransactionNum: number;
  maxTransactionNumPerWallet: number;
  endTimeStamp: BigNumber;
}

interface CreateIncentivePoolType {
  incentiveInfo: IncentiveInfo;
}

export const POOL_CREATION_FEE = ethers.utils.parseEther("0.0001"); // 0.0001 ETH
export const GAS_PRICE = 1000000000;

export const CONTRACT_ABI = [
  {
    inputs: [
      {
        components: [
          {
            name: "incentiveToken",
            type: "string",
          },
          {
            name: "incentiveAmountPerTransaction",
            type: "uint256",
          },
          {
            name: "affiliateAmountPerTransaction",
            type: "uint256",
          },
          {
            name: "userAmountPerTransaction",
            type: "uint256",
          },
          {
            name: "leftTransactionNum",
            type: "uint256",
          },
          {
            name: "maxTransactionNumPerWallet",
            type: "uint256",
          },
          {
            name: "endTimeStamp",
            type: "uint256",
          },
        ],
        internalType: "struct IncentiveInfo",
        name: "incentiveInfo",
        type: "tuple",
      },
    ],
    name: "createIncentivePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
    ],
    name: "deployerToIncentivePool",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

export const useDeployPool = () => {
  const handleDeployContract = async (createIncentivePoolReq: CreateIncentivePoolType) => {
    const provider = getEthersProvider({ chainId: 11155111 });
    const wallet = (await getEthersSigner({ chainId: 11155111 })) as ethers.providers.JsonRpcSigner;
    // const incentivePoolFactory = new ethers.Contract(
    //   "0x446DBf937666F0bCbeF44347977a44A6F34D176c",
    //   CONTRACT_ABI,
    //   provider,
    // );

    const incentivePoolFactory: IncentivePoolFactory = IncentivePoolFactory__factory.connect(
      "0x446DBf937666F0bCbeF44347977a44A6F34D176c",
      provider,
    );

    await (
      await incentivePoolFactory.connect(wallet).createIncentivePool(createIncentivePoolReq, {
        value: POOL_CREATION_FEE,
        gasPrice: GAS_PRICE,
        gasLimit: 10000000,
      })
    ).wait();

    const address = await wallet.getAddress();
    const poolAddress = await incentivePoolFactory.deployerToIncentivePool(address);
    return poolAddress;
  };

  return { handleDeployContract };
};
