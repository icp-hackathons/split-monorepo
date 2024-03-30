import { useMutation } from "@apollo/client";
import type { GQLOptions } from "../../client/graphql";
import { gql } from "../__generated__/index";

export const setIncentivePool = gql(/* GraphQL */ `
  mutation SetIncentivePool($input: ProductUpdateInput!) {
    setIncentivePool(input: $input) {
      id
      userAddress
      name
      webLink
      twitterLink
      description
      apiKey
      isSdkIntegrated
      createdAt
      updatedAt
    }
  }
`);

export const useSetIncentivePool = (options?: GQLOptions<typeof setIncentivePool>) => {
  return useMutation(setIncentivePool, {
    ...options,
  });
};
