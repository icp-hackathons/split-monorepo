import type { NormalizedCacheObject } from "@apollo/client";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { useState } from "react";
import type { CookieContext } from "@split/utils";

export const getApolloClient = (uri?: string, cookieContext?: CookieContext) => {
  const { req } = cookieContext || {};
  const ssrMode = !!req || typeof window === "undefined";
  const serverUrl = uri ?? process.env.NEXT_PUBLIC_SERVER_URL;

  // Apollo Client Links
  const serverLink = createHttpLink({
    uri: serverUrl?.concat("/graphql"),
    fetchOptions: {
      mode: "cors",
    },
    fetch,
  });

  const client = new ApolloClient({
    ssrMode,
    link: serverLink,
    cache: new InMemoryCache(),
  });

  return client;
};

export const getGraphqlClient = (uri?: string, cookieContext?: CookieContext) => {
  return getApolloClient(uri, cookieContext);
};

export const useGraphqlClient = (uri?: string, cookieContext?: CookieContext) => {
  const [client] = useState<ApolloClient<NormalizedCacheObject>>(getApolloClient(uri, cookieContext));
  return client;
};
