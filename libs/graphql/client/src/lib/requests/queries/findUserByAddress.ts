import { useMutation } from "@apollo/client";
import type { GQLOptions } from "../../client/graphql";
import { gql } from "../__generated__/index";

export const findUserByAddress = gql(/* GraphQL */ `
  query FindUserByAddress($input: UserInput!) {
    findUserByAddress(input: $input) {
      id
      address
      createdAt
      updatedAt
    }
  }
`);

export const useFindUserByAddress = (options?: GQLOptions<typeof findUserByAddress>) => {
  return useMutation(findUserByAddress, {
    ...options,
  });
};
