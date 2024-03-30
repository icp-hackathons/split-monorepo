import { useMutation } from "@apollo/client";
import type { GQLOptions } from "../../client/graphql";
import { gql } from "../__generated__/index";

export const findProduct = gql(/* GraphQL */ `
  query FindProduct($id: String!) {
    findProduct(id: $id) {
      id
      name
      webLink
      twitterLink
      description
      isSdkIntegrated
      createdAt
      updatedAt
      events {
        id
        name
        productId
        providerAmountPerEvent
        userAmountPerEvent
        referrals {
          id
          eventId
          userReferrals {
            id
            referralId
            userAddress
            userReferralType
            updated
            claimed
          }
        }
        type
        createdAt
        updatedAt
      }
    }
  }
`);

export const useFindProduct = (options?: GQLOptions<typeof findProduct>) => {
  return useMutation(findProduct, {
    ...options,
  });
};
