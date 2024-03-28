import { useMutation } from "@apollo/client";
import type { GQLOptions } from "../../client/graphql";
import { gql } from "../__generated__/index";

export const createProduct = gql(/* GraphQL */ `
  mutation CreateProduct($input: ProductCreateInput!) {
    createProduct(input: $input) {
      id
      userId
      name
      webLink
      twitterLink
      description
      isSdkIntegrated
      createdAt
      updatedAt
    }
  }
`);

export const useCreateProduct = (options?: GQLOptions<typeof createProduct>) => {
  return useMutation(createProduct, {
    ...options,
  });
};
