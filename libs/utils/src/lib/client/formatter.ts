import { SupportedChainIds } from "../ethereum/network";

export const formatAddress = (walletAddress: string) => {
  return walletAddress.slice(0, 6).concat("...").concat(walletAddress.slice(-4));
};

export const formatChainId = (rawChainId: string) => {
  switch (rawChainId.toLowerCase()) {
    case "0xaa36a7":
      return SupportedChainIds.ETHEREUM_SEPOLIA;
    case "0x66eee":
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
