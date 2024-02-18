import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { useGraphqlClient } from "@split/graphql";
import "../../public/shared/styles/globals.css";

const App = ({ Component, pageProps: { sessions, ...pageProps } }: AppProps) => {
  const client = useGraphqlClient();

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
