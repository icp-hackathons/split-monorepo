import type { ConnectOptions, DisconnectOptions, WalletState } from "@web3-onboard/core";
import { useConnectWallet } from "@web3-onboard/react";
import { createContext, useContext, useMemo } from "react";

type WalletContextType = {
  wallet: null | WalletState;
  connecting: boolean;
  connect: (options?: ConnectOptions | undefined) => Promise<WalletState[]>;
  disconnect: (wallet: DisconnectOptions) => Promise<WalletState[]>;
};

const WalletContext = createContext<WalletContextType>({
  wallet: null,
  connecting: false,
  connect: () => new Promise<WalletState[]>(() => {}),
  disconnect: () => new Promise<WalletState[]>(() => {}),
});

const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  const providerValue = useMemo(
    () => ({
      wallet,
      connecting,
      connect,
      disconnect,
    }),
    [wallet, connecting, connect, disconnect],
  );

  return <WalletContext.Provider value={providerValue}>{children}</WalletContext.Provider>;
};

const useWalletContext = () => useContext(WalletContext);

export { WalletContext, WalletProvider, useWalletContext };
