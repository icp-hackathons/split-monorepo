/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import { EventFragment, FunctionFragment, Result } from "@ethersproject/abi";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  CallOverrides,
  ContractTransaction,
  EventFilter,
  PopulatedTransaction,
  Signer,
  ethers,
} from "ethers";
import { TypedEvent, TypedEventFilter, TypedListener } from "./commons";

interface IncentivePoolInterfaceInterface extends ethers.utils.Interface {
  functions: {
    "affiliateToClaimedTransactionNum(address)": FunctionFragment;
    "affiliateToLeftTransactionNum(address)": FunctionFragment;
    "getIncentiveInfo()": FunctionFragment;
    "userToClaimedTransactionNum(address)": FunctionFragment;
    "userToLeftTransactionNum(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "affiliateToClaimedTransactionNum", values: [string]): string;
  encodeFunctionData(functionFragment: "affiliateToLeftTransactionNum", values: [string]): string;
  encodeFunctionData(functionFragment: "getIncentiveInfo", values?: undefined): string;
  encodeFunctionData(functionFragment: "userToClaimedTransactionNum", values: [string]): string;
  encodeFunctionData(functionFragment: "userToLeftTransactionNum", values: [string]): string;

  decodeFunctionResult(functionFragment: "affiliateToClaimedTransactionNum", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "affiliateToLeftTransactionNum", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getIncentiveInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userToClaimedTransactionNum", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userToLeftTransactionNum", data: BytesLike): Result;

  events: {
    "AddLeftTransactionNum(uint256,uint256,uint256)": EventFragment;
    "ClaimIncentive(address,uint8,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddLeftTransactionNum"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ClaimIncentive"): EventFragment;
}

export class IncentivePoolInterface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IncentivePoolInterfaceInterface;

  functions: {
    affiliateToClaimedTransactionNum(affiliate: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    affiliateToLeftTransactionNum(affiliate: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    getIncentiveInfo(overrides?: CallOverrides): Promise<
      [
        [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
          incentiveToken: string;
          incentiveAmountPerTransaction: BigNumber;
          affiliateAmountPerTransaction: BigNumber;
          userAmountPerTransaction: BigNumber;
          leftTransactionNum: BigNumber;
          maxTransactionNumPerWallet: BigNumber;
          endTimeStamp: BigNumber;
        },
      ]
    >;

    userToClaimedTransactionNum(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    userToLeftTransactionNum(user: string, overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  affiliateToClaimedTransactionNum(affiliate: string, overrides?: CallOverrides): Promise<BigNumber>;

  affiliateToLeftTransactionNum(affiliate: string, overrides?: CallOverrides): Promise<BigNumber>;

  getIncentiveInfo(overrides?: CallOverrides): Promise<
    [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      incentiveToken: string;
      incentiveAmountPerTransaction: BigNumber;
      affiliateAmountPerTransaction: BigNumber;
      userAmountPerTransaction: BigNumber;
      leftTransactionNum: BigNumber;
      maxTransactionNumPerWallet: BigNumber;
      endTimeStamp: BigNumber;
    }
  >;

  userToClaimedTransactionNum(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  userToLeftTransactionNum(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    affiliateToClaimedTransactionNum(affiliate: string, overrides?: CallOverrides): Promise<BigNumber>;

    affiliateToLeftTransactionNum(affiliate: string, overrides?: CallOverrides): Promise<BigNumber>;

    getIncentiveInfo(overrides?: CallOverrides): Promise<
      [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        incentiveToken: string;
        incentiveAmountPerTransaction: BigNumber;
        affiliateAmountPerTransaction: BigNumber;
        userAmountPerTransaction: BigNumber;
        leftTransactionNum: BigNumber;
        maxTransactionNumPerWallet: BigNumber;
        endTimeStamp: BigNumber;
      }
    >;

    userToClaimedTransactionNum(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    userToLeftTransactionNum(user: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    AddLeftTransactionNum(
      addedTransactionNum?: null,
      totalTransactionNum?: null,
      addedIncentiveAmount?: null,
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      {
        addedTransactionNum: BigNumber;
        totalTransactionNum: BigNumber;
        addedIncentiveAmount: BigNumber;
      }
    >;

    ClaimIncentive(
      caller?: string | null,
      claimType?: BigNumberish | null,
      claimTransactionNum?: null,
      claimedValue?: null,
    ): TypedEventFilter<
      [string, number, BigNumber, BigNumber],
      {
        caller: string;
        claimType: number;
        claimTransactionNum: BigNumber;
        claimedValue: BigNumber;
      }
    >;
  };

  estimateGas: {
    affiliateToClaimedTransactionNum(affiliate: string, overrides?: CallOverrides): Promise<BigNumber>;

    affiliateToLeftTransactionNum(affiliate: string, overrides?: CallOverrides): Promise<BigNumber>;

    getIncentiveInfo(overrides?: CallOverrides): Promise<BigNumber>;

    userToClaimedTransactionNum(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    userToLeftTransactionNum(user: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    affiliateToClaimedTransactionNum(affiliate: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    affiliateToLeftTransactionNum(affiliate: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getIncentiveInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userToClaimedTransactionNum(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userToLeftTransactionNum(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
