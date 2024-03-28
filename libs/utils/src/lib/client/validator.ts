import { SupportedChainIds } from "../ethereum/network";

export const validateWalletNetwork = (walletAddress: string | undefined, rawChainId: string | undefined) => {
  if (walletAddress && rawChainId && rawChainId.toLowerCase() === SupportedChainIds.ETHEREUM_SEPOLIA.toLowerCase()) {
    return true;
  }
  return false;
};
