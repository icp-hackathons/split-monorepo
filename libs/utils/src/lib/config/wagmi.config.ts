import { configureChains, createConfig, mainnet, sepolia } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, sepolia],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY || "" }), publicProvider()],
);

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    // new MetaMaskConnector({ chains }),
    new WalletConnectConnector({ chains, options: { projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "" } }),
  ],
  publicClient,
  webSocketPublicClient,
});
