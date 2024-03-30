/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation AddReferral($input: ReferralInput!) {\n    addReferral(input: $input) {\n      id\n      eventId\n      userReferrals {\n        id\n        referralId\n        userAddress\n        userReferralType\n        updated\n        claimed\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.AddReferralDocument,
    "\n  mutation CreateProduct($input: ProductCreateInput!) {\n    createProduct(input: $input) {\n      id\n      userAddress\n      name\n      webLink\n      twitterLink\n      description\n      isSdkIntegrated\n      createdAt\n      updatedAt\n    }\n  }\n": types.CreateProductDocument,
    "\n  mutation RefreshTokens($input: TokenInput!) {\n    refreshTokens(input: $input) {\n      accessToken\n      refreshToken\n    }\n  }\n": types.RefreshTokensDocument,
    "\n  mutation RequestLogin($input: UserInput!) {\n    requestLogin(input: $input) {\n      id\n      address\n      role\n      status\n      nonce\n      createdAt\n      updatedAt\n    }\n  }\n": types.RequestLoginDocument,
    "\n  mutation SetIncentivePool($input: ProductUpdateInput!) {\n    setIncentivePool(input: $input) {\n      id\n      userAddress\n      name\n      webLink\n      twitterLink\n      description\n      apiKey\n      isSdkIntegrated\n      createdAt\n      updatedAt\n    }\n  }\n": types.SetIncentivePoolDocument,
    "\n  mutation VerifyLogin($input: VerifyUserInput!) {\n    verifyLogin(input: $input) {\n      accessToken\n      refreshToken\n    }\n  }\n": types.VerifyLoginDocument,
    "\n  query FindProduct($id: String!) {\n    findProduct(id: $id) {\n      id\n      name\n      webLink\n      twitterLink\n      description\n      isSdkIntegrated\n      createdAt\n      updatedAt\n      events {\n        id\n        name\n        productId\n        providerAmountPerEvent\n        userAmountPerEvent\n        referrals {\n          id\n          eventId\n          userReferrals {\n            id\n            referralId\n            userAddress\n            userReferralType\n            updated\n            claimed\n          }\n        }\n        type\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.FindProductDocument,
    "\n  query FindUserByAddress($input: UserInput!) {\n    findUserByAddress(input: $input) {\n      id\n      address\n      createdAt\n      updatedAt\n    }\n  }\n": types.FindUserByAddressDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddReferral($input: ReferralInput!) {\n    addReferral(input: $input) {\n      id\n      eventId\n      userReferrals {\n        id\n        referralId\n        userAddress\n        userReferralType\n        updated\n        claimed\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddReferral($input: ReferralInput!) {\n    addReferral(input: $input) {\n      id\n      eventId\n      userReferrals {\n        id\n        referralId\n        userAddress\n        userReferralType\n        updated\n        claimed\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateProduct($input: ProductCreateInput!) {\n    createProduct(input: $input) {\n      id\n      userAddress\n      name\n      webLink\n      twitterLink\n      description\n      isSdkIntegrated\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation CreateProduct($input: ProductCreateInput!) {\n    createProduct(input: $input) {\n      id\n      userAddress\n      name\n      webLink\n      twitterLink\n      description\n      isSdkIntegrated\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation RefreshTokens($input: TokenInput!) {\n    refreshTokens(input: $input) {\n      accessToken\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation RefreshTokens($input: TokenInput!) {\n    refreshTokens(input: $input) {\n      accessToken\n      refreshToken\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation RequestLogin($input: UserInput!) {\n    requestLogin(input: $input) {\n      id\n      address\n      role\n      status\n      nonce\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation RequestLogin($input: UserInput!) {\n    requestLogin(input: $input) {\n      id\n      address\n      role\n      status\n      nonce\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SetIncentivePool($input: ProductUpdateInput!) {\n    setIncentivePool(input: $input) {\n      id\n      userAddress\n      name\n      webLink\n      twitterLink\n      description\n      apiKey\n      isSdkIntegrated\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation SetIncentivePool($input: ProductUpdateInput!) {\n    setIncentivePool(input: $input) {\n      id\n      userAddress\n      name\n      webLink\n      twitterLink\n      description\n      apiKey\n      isSdkIntegrated\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VerifyLogin($input: VerifyUserInput!) {\n    verifyLogin(input: $input) {\n      accessToken\n      refreshToken\n    }\n  }\n"): (typeof documents)["\n  mutation VerifyLogin($input: VerifyUserInput!) {\n    verifyLogin(input: $input) {\n      accessToken\n      refreshToken\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FindProduct($id: String!) {\n    findProduct(id: $id) {\n      id\n      name\n      webLink\n      twitterLink\n      description\n      isSdkIntegrated\n      createdAt\n      updatedAt\n      events {\n        id\n        name\n        productId\n        providerAmountPerEvent\n        userAmountPerEvent\n        referrals {\n          id\n          eventId\n          userReferrals {\n            id\n            referralId\n            userAddress\n            userReferralType\n            updated\n            claimed\n          }\n        }\n        type\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query FindProduct($id: String!) {\n    findProduct(id: $id) {\n      id\n      name\n      webLink\n      twitterLink\n      description\n      isSdkIntegrated\n      createdAt\n      updatedAt\n      events {\n        id\n        name\n        productId\n        providerAmountPerEvent\n        userAmountPerEvent\n        referrals {\n          id\n          eventId\n          userReferrals {\n            id\n            referralId\n            userAddress\n            userReferralType\n            updated\n            claimed\n          }\n        }\n        type\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FindUserByAddress($input: UserInput!) {\n    findUserByAddress(input: $input) {\n      id\n      address\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query FindUserByAddress($input: UserInput!) {\n    findUserByAddress(input: $input) {\n      id\n      address\n      createdAt\n      updatedAt\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;