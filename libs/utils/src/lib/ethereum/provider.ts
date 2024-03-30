import { type PublicClient, type WalletClient, getPublicClient, getWalletClient } from "@wagmi/core";
import type { EIP1193Provider } from "@web3-onboard/core";
import { ethers, providers } from "ethers";
import { type HttpTransport } from "viem";
import { useChainId } from "wagmi";

/*
    About EIP-1193-Provider:
    https://onboard.blocknative.com/docs/overview/introduction
*/
export const getClientProvider = (walletProvider: EIP1193Provider) => {
  return new ethers.providers.Web3Provider(walletProvider);
};

export const getClientSigner = (walletProvider: EIP1193Provider) => {
  const provider = getClientProvider(walletProvider);
  return provider.getSigner();
};

export const getJsonRpcProvider = (rpcUrl: string) => {
  return new ethers.providers.JsonRpcProvider(rpcUrl);
};

export const getJsonRpcSigner = (rpcUrl: string) => {
  const provider = getJsonRpcProvider(rpcUrl);
  return provider.getSigner();
};

export function publicClientToProvider(publicClient: PublicClient) {
  const { chain, transport } = publicClient;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  if (transport.type === "fallback")
    return new providers.FallbackProvider(
      (transport.transports as ReturnType<HttpTransport>[]).map(
        ({ value }) => new providers.JsonRpcProvider(value?.url, network),
      ),
    );
  return new providers.JsonRpcProvider(transport.url, network);
}

/** Action to convert a viem Public Client to an ethers.js Provider. */
export function getEthersProvider({ chainId }: { chainId?: number } = {}) {
  const publicClient = getPublicClient({ chainId: 11155111 });
  return publicClientToProvider(publicClient);
}

export function walletClientToSigner(walletClient: WalletClient) {
  const { account, chain, transport } = walletClient;
  console.log(chain.contracts?.ensRegistry?.address);
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  const provider = new providers.Web3Provider(transport, network);
  const signer = provider.getSigner(account.address);
  return signer;
}

/** Action to convert a viem Wallet Client to an ethers.js Signer. */
export async function getEthersSigner({ chainId }: { chainId?: number } = {}) {
  const walletClient = await getWalletClient({ chainId: 11155111 });
  console.log(walletClient?.chain);
  if (!walletClient) return undefined;
  return walletClientToSigner(walletClient);
}
