import { ApolloProvider } from "@apollo/client";
import { Web3OnboardProvider } from "@web3-onboard/react";
import type { AppProps } from "next/app";
import { useGraphqlClient } from "@split/graphql";
import { WalletProvider } from "@split/ui";
import { web3OnboardConfig } from "@split/utils";
import "../../public/shared/styles/globals.css";

const App = ({ Component, pageProps: { sessions, ...pageProps } }: AppProps) => {
  const client = useGraphqlClient();

  return (
    <ApolloProvider client={client}>
      <Web3OnboardProvider web3Onboard={web3OnboardConfig}>
        <WalletProvider>
          <Component {...pageProps} />
        </WalletProvider>
      </Web3OnboardProvider>
    </ApolloProvider>
  );
};

export default App;
