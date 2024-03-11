import injectedModule from "@web3-onboard/injected-wallets";
import { init } from "@web3-onboard/react";
import { SupportedChainIds } from "../ethereum/network";

const injected = injectedModule();

const wallets = [injected];

const chains = [
  {
    id: SupportedChainIds.ETHEREUM_SEPOLIA,
    token: "ETH",
    label: "Ethereum Sepolia Testnet",
    rpcUrl: "https://ethereum-sepolia-rpc.allthatnode.com",
  },
];

const appMetadata = {
  name: "Split",
  description: "The First Web3 Affiliate Marketing",
  recommendedInjectedWallets: [{ name: "MetaMask", url: "https://metamask.io" }],
};

export const web3OnboardConfig = init({
  wallets,
  chains,
  appMetadata,
  connect: {
    autoConnectLastWallet: true,
    showSidebar: false,
  },
});
