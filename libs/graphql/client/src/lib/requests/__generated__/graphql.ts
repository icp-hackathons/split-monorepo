/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: { input: any; output: any; }
};

/** 이벤트 정보 */
export type EventInfo = {
  /** 생성 일시 */
  createdAt: Scalars['DateTime']['output'];
  /** 아이디 */
  id: Scalars['ID']['output'];
  /** 이름 */
  name: Scalars['String']['output'];
  /** 제품 아이디 */
  productId: Scalars['String']['output'];
  /** 이벤트당 추천인 수령 금액 */
  providerAmountPerEvent: Scalars['String']['output'];
  referrals?: Maybe<Array<ReferralInfo>>;
  transaction?: Maybe<TransactionInfo>;
  /** 이벤트 타입 */
  type: EventType;
  /** 수정 일시 */
  updatedAt: Scalars['DateTime']['output'];
  /** 이벤트당 사용자 수령 금액 */
  userAmountPerEvent?: Maybe<Scalars['String']['output']>;
};

export type EventInput = {
  /** 이벤트 이름 */
  name: Scalars['String']['input'];
  /** 이벤트당 추천인 수령 금액 */
  providerAmountPerEvent: Scalars['String']['input'];
  /** 트랜잭션 입력값 */
  transaction?: InputMaybe<TransactionInput>;
  /** 이벤트 타입 */
  type?: InputMaybe<EventType>;
  /** 이벤트당 사용자 수령 금액 */
  userAmountPerEvent?: InputMaybe<Scalars['String']['input']>;
};

/** 이벤트 종류 */
export type EventType =
  | 'NON_TRANSACTION'
  | 'TRANSACTION';

export type Mutation = {
  addReferral: ReferralInfo;
  createProduct: ProductInfo;
  refreshTokens: Token;
  requestLogin: UserInfo;
  setIncentivePool: ProductInfo;
  updateUserReferrals: Array<UserReferralInfo>;
  verifyLogin: Token;
};


export type MutationAddReferralArgs = {
  input: ReferralInput;
};


export type MutationCreateProductArgs = {
  input: ProductCreateInput;
};


export type MutationRefreshTokensArgs = {
  input: TokenInput;
};


export type MutationRequestLoginArgs = {
  input: UserInput;
};


export type MutationSetIncentivePoolArgs = {
  input: ProductUpdateInput;
};


export type MutationVerifyLoginArgs = {
  input: VerifyUserInput;
};

export type ProductCreateInput = {
  /** 소개 */
  description: Scalars['String']['input'];
  /** 제품 이름 */
  name: Scalars['String']['input'];
  /** 트위터 링크 */
  twitterLink?: InputMaybe<Scalars['String']['input']>;
  /** 웹 링크 */
  webLink: Scalars['String']['input'];
};

/** 제품 정보 */
export type ProductInfo = {
  /** API 키 */
  apiKey?: Maybe<Scalars['String']['output']>;
  /** 생성 일시 */
  createdAt: Scalars['DateTime']['output'];
  /** 소개 */
  description: Scalars['String']['output'];
  events?: Maybe<Array<EventInfo>>;
  /** 아이디 */
  id: Scalars['ID']['output'];
  /** SDK 설치 여부 */
  isSdkIntegrated: Scalars['Boolean']['output'];
  /** 제품 이름 */
  name: Scalars['String']['output'];
  /** 트위터 링크 */
  twitterLink?: Maybe<Scalars['String']['output']>;
  /** 수정 일시 */
  updatedAt: Scalars['DateTime']['output'];
  /** 사용자 지갑 주소 */
  userAddress: Scalars['String']['output'];
  /** 웹 링크 */
  webLink: Scalars['String']['output'];
};

export type ProductUpdateInput = {
  /** 트랜잭션 입력값 */
  events?: InputMaybe<Array<EventInput>>;
  /** 제품 아이디 */
  id: Scalars['ID']['input'];
};

export type Query = {
  findUserByAddress: UserInfo;
};


export type QueryFindUserByAddressArgs = {
  input: UserInput;
};

/** 레퍼럴 정보 */
export type ReferralInfo = {
  /** 생성 일시 */
  createdAt: Scalars['DateTime']['output'];
  /** 이벤트 아이디 */
  eventId: Scalars['String']['output'];
  /** 아이디 */
  id: Scalars['ID']['output'];
  /** 수정 일시 */
  updatedAt: Scalars['DateTime']['output'];
  userReferrals?: Maybe<Array<ReferralInfo>>;
};

export type ReferralInput = {
  /** 이벤트 아이디 */
  eventId: Scalars['String']['input'];
  /** 추천인 정보 */
  referralProviderInput: UserReferralInput;
  /** 사용자 정보 */
  userInput: UserReferralInput;
};

/** 사용자 역할 */
export type Role =
  | 'ADMIN'
  | 'AFFILIATE'
  | 'USER';

/** 사용자 상태 */
export type Status =
  | 'ACTIVE'
  | 'DELETE'
  | 'INACTIVE';

export type Token = {
  /** Access token */
  accessToken: Scalars['JWT']['output'];
  /** Refresh token */
  refreshToken: Scalars['JWT']['output'];
};

export type TokenInput = {
  /** Access token */
  accessToken?: InputMaybe<Scalars['String']['input']>;
  /** Refresh token */
  refreshToken?: InputMaybe<Scalars['String']['input']>;
};

/** 트랜잭션 정보 */
export type TransactionInfo = {
  /** 생성 일시 */
  createdAt: Scalars['DateTime']['output'];
  /** 이벤트 아이디 */
  eventId: Scalars['String']['output'];
  /** 아이디 */
  id: Scalars['ID']['output'];
  /** 함수 코드 */
  methodId: Scalars['String']['output'];
  /** 대상 주소 */
  targetAddress: Scalars['String']['output'];
  /** 수정 일시 */
  updatedAt: Scalars['DateTime']['output'];
};

export type TransactionInput = {
  /** 함수 코드 */
  methodId: Scalars['String']['input'];
  /** 대상 주소 */
  targetAddress: Scalars['String']['input'];
};

/** 사용자 정보 */
export type UserInfo = {
  /** 지갑 주소 */
  address: Scalars['String']['output'];
  /** 생성 일시 */
  createdAt: Scalars['DateTime']['output'];
  /** 아이디 */
  id: Scalars['ID']['output'];
  /** 로그인용 일회용 논스 */
  nonce: Scalars['String']['output'];
  /** 역할 */
  role: Role;
  /** 역할 */
  status: Status;
  /** 수정 일시 */
  updatedAt: Scalars['DateTime']['output'];
};

export type UserInput = {
  /** 지갑 주소 */
  address: Scalars['String']['input'];
};

/** 사용자의 레퍼럴 정보 */
export type UserReferralInfo = {
  /** 보상 수령 여부 */
  claimed: Scalars['Boolean']['output'];
  /** 생성 일시 */
  createdAt: Scalars['DateTime']['output'];
  /** 아이디 */
  id: Scalars['ID']['output'];
  /** 레퍼럴 아이디 */
  referralId: Scalars['String']['output'];
  /** 컨트랙트 업데이트 여부 */
  updated: Scalars['Boolean']['output'];
  /** 수정 일시 */
  updatedAt: Scalars['DateTime']['output'];
  /** 사용자 지갑 주소 */
  userAddress: Scalars['String']['output'];
  /** 레퍼럴 사용자 타입 */
  userReferralType: UserReferralType;
};

export type UserReferralInput = {
  /** 사용자 지갑 주소 */
  userAddress: Scalars['String']['input'];
  /** 레퍼럴 사용자 타입 */
  userReferralType: UserReferralType;
};

/** 레퍼럴 사용자 타입 */
export type UserReferralType =
  | 'REFERRAL_PROVIDER'
  | 'USER';

export type VerifyUserInput = {
  /** 메시지 */
  message: Scalars['String']['input'];
  /** 서명 */
  signature: Scalars['String']['input'];
};

export type CreateProductMutationVariables = Exact<{
  input: ProductCreateInput;
}>;


export type CreateProductMutation = { createProduct: { id: string, userAddress: string, name: string, webLink: string, twitterLink?: string | null, description: string, isSdkIntegrated: boolean, createdAt: any, updatedAt: any } };

export type RefreshTokensMutationVariables = Exact<{
  input: TokenInput;
}>;


export type RefreshTokensMutation = { refreshTokens: { accessToken: any, refreshToken: any } };

export type RequestLoginMutationVariables = Exact<{
  input: UserInput;
}>;


export type RequestLoginMutation = { requestLogin: { id: string, address: string, role: Role, status: Status, nonce: string, createdAt: any, updatedAt: any } };

export type SetIncentivePoolMutationVariables = Exact<{
  input: ProductUpdateInput;
}>;


export type SetIncentivePoolMutation = { setIncentivePool: { id: string, userAddress: string, name: string, webLink: string, twitterLink?: string | null, description: string, apiKey?: string | null, isSdkIntegrated: boolean, createdAt: any, updatedAt: any } };

export type VerifyLoginMutationVariables = Exact<{
  input: VerifyUserInput;
}>;


export type VerifyLoginMutation = { verifyLogin: { accessToken: any, refreshToken: any } };

export type FindUserByAddressQueryVariables = Exact<{
  input: UserInput;
}>;


export type FindUserByAddressQuery = { findUserByAddress: { id: string, address: string, createdAt: any, updatedAt: any } };


export const CreateProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userAddress"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"webLink"}},{"kind":"Field","name":{"kind":"Name","value":"twitterLink"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isSdkIntegrated"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateProductMutation, CreateProductMutationVariables>;
export const RefreshTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshTokens"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TokenInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshTokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<RefreshTokensMutation, RefreshTokensMutationVariables>;
export const RequestLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RequestLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"nonce"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<RequestLoginMutation, RequestLoginMutationVariables>;
export const SetIncentivePoolDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetIncentivePool"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setIncentivePool"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userAddress"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"webLink"}},{"kind":"Field","name":{"kind":"Name","value":"twitterLink"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"apiKey"}},{"kind":"Field","name":{"kind":"Name","value":"isSdkIntegrated"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<SetIncentivePoolMutation, SetIncentivePoolMutationVariables>;
export const VerifyLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VerifyUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<VerifyLoginMutation, VerifyLoginMutationVariables>;
export const FindUserByAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindUserByAddress"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findUserByAddress"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<FindUserByAddressQuery, FindUserByAddressQueryVariables>;