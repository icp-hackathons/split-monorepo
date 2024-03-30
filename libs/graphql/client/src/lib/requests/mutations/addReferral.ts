import { useMutation } from "@apollo/client";
import type { GQLOptions } from "../../client/graphql";
import { gql } from "../__generated__/index";

export const addReferral = gql(/* GraphQL */ `
  mutation AddReferral($input: ReferralInput!) {
    addReferral(input: $input) {
      id
      eventId
      userReferrals {
        id
        referralId
        userAddress
        userReferralType
        updated
        claimed
        createdAt
        updatedAt
      }
    }
  }
`);

export const useAddReferral = (options?: GQLOptions<typeof addReferral>) => {
  return useMutation(addReferral, {
    ...options,
  });
};
