import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { WagmiConfig } from "wagmi";
import { useGraphqlClient } from "@split/graphql";
import { wagmiConfig } from "@split/utils";
import "../../public/shared/styles/globals.css";

const App = ({ Component, pageProps: { sessions, ...pageProps } }: AppProps) => {
  const client = useGraphqlClient();

  return (
    <ApolloProvider client={client}>
      <WagmiConfig config={wagmiConfig}>
        <Component {...pageProps} />
      </WagmiConfig>
    </ApolloProvider>
  );
};

export default App;
