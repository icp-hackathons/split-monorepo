import { SupportedChainIds } from "../ethereum/network";

export const formatAddress = (walletAddress: string) => {
  return walletAddress.slice(0, 6).concat("...").concat(walletAddress.slice(-4));
};

export const formatChainId = (rawChainId: number) => {
  switch (rawChainId) {
    case 11155111:
      return SupportedChainIds.ETHEREUM_SEPOLIA;
    case 421614:
      return SupportedChainIds.ARBITRUM_SEPOLIA;
    default:
      return SupportedChainIds.UNSUPPORTED;
  }
};

export const formatChainIdToName = (chainId: SupportedChainIds) => {
  switch (chainId) {
    case SupportedChainIds.ETHEREUM_SEPOLIA:
      return "Ethereum Sepolia";
    case SupportedChainIds.ARBITRUM_SEPOLIA:
      return "Arbitrum Sepolia";
    default:
      return "Unsupported";
  }
};
