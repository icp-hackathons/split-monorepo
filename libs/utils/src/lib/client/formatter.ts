import { SupportedChainIds } from "../ethereum/network";

export const formatAddress = (walletAddress: string | undefined) => {
  if (!walletAddress) throw new Error();
  return walletAddress.slice(0, 6).concat("...").concat(walletAddress.slice(-4));
};

export const formatChainId = (rawChainId: number | undefined) => {
  if (!rawChainId) throw new Error();
  switch (rawChainId) {
    case 1:
      return SupportedChainIds.ETHEREUM_MAINNET;
    case 11155111:
      return SupportedChainIds.ETHEREUM_SEPOLIA;
    case 421614:
      return SupportedChainIds.ARBITRUM_SEPOLIA;
    case 355113:
      return SupportedChainIds.BITFINITY;
    default:
      return SupportedChainIds.UNSUPPORTED;
  }
};

export const formatChainIdToName = (chainId: SupportedChainIds) => {
  switch (chainId) {
    case SupportedChainIds.ETHEREUM_MAINNET:
      return "Ethereum Mainnet";
    case SupportedChainIds.ETHEREUM_SEPOLIA:
      return "Ethereum Sepolia";
    case SupportedChainIds.BITFINITY:
      return "Bitfinity Testnet";
    case SupportedChainIds.ARBITRUM_SEPOLIA:
      return "Arbitrum Sepolia";
    default:
      return "Unsupported";
  }
};
