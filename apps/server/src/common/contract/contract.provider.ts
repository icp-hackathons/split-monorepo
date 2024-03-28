import { ethers } from "ethers";

// Types
export type Network = "testnet";

// 배포 환경, 체인별 정보
export const rpcInfo: {
  [key in Network]: {
    url: string;
    chainId: string;
  };
} = {
  testnet: {
    url: process.env.PROVIDER_URL,
    chainId: process.env.CHAIN_ID,
  },
};

const account = process.env.DEVELOPER_ACCOUNT;
const privateKey = process.env.DEVELOPER_PRIVATE_KEY;

if (!privateKey) throw new Error("개인키를 불러올 수 없습니다. 환경변수를 확인하세요.");
if (!account) throw new Error("계정을 불러올 수 없습니다. 환경변수를 확인하세요.");

const getProvider = () => {
  const network = process.env.NETWORK as Network;
  return new ethers.providers.JsonRpcProvider(rpcInfo[network].url);
};

export const provider = getProvider();
export const wallet = new ethers.Wallet(privateKey, getProvider());
