import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { WagmiConfig } from "wagmi";
import { AuthProvider, useGraphqlClient } from "@split/graphql";
import { wagmiConfig } from "@split/utils";
import { ToastProvider } from "../context/ToastContext";
import "../../public/shared/styles/globals.css";

const App = ({ Component, pageProps: { sessions, ...pageProps } }: AppProps) => {
  const client = useGraphqlClient();

  return (
    <ApolloProvider client={client}>
      <WagmiConfig config={wagmiConfig}>
        <ToastProvider>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </ToastProvider>
      </WagmiConfig>
    </ApolloProvider>
  );
};

export default App;
