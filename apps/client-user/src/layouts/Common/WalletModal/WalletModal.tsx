import Image from "next/image";
import { WalletType, useConnectWallet } from "@split/hooks";
import { Button, useModalContext } from "@split/ui";
import close from "../../../../public/shared/icons/Group 6.svg";
import meta from "../../../../public/shared/icons/MetamaskIcon.png";
import wallet from "../../../../public/shared/icons/wallet.svg";
import neopin from "../../../../public/shared/images/neopin.png";

const WalletModal = () => {
  const { setModalContext } = useModalContext();
  const closeModal = () => {
    setModalContext(null);
  };
  const { address, chain, handleConnect, handleDisconnect } = useConnectWallet();

  const metaConnect = () => {
    handleConnect(WalletType.METAMASK);
  };

  const neoConnect = () => {
    handleConnect(WalletType.NEOPIN);
  };

  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="flex w-[450px] flex-col gap-[10px] rounded-lg bg-white p-8">
        <div>
          <div className="mb-[30px] flex flex-row justify-between">
            <div className="flex flex-row gap-2">
              <Image src={wallet} alt="close" className="h-5 w-5" />
              <p className="text-20/semi-bold">Connect Wallet</p>
            </div>
            <Image src={close} alt="close" onClick={() => closeModal()} />
          </div>
          <p>Choose a wallet to connect</p>
          <div className="mb-5 mt-5 flex flex-col gap-4">
            <Button
              type="button"
              color="blue"
              size="large"
              icon={meta}
              description="Metamask"
              onClick={() => metaConnect()}
            />
            <Button
              type="button"
              color="blue"
              size="large"
              icon={neopin}
              description="Neopin"
              className=""
              onClick={() => {
                neoConnect();
              }}
            />
          </div>
          <p>By using Split, you agree to our Terms of Service and our Privacy Policy.</p>

          {/* <button
            type="button"
            className={}
            onClick={() => setEventType("Transaction")}
          >
            MetaMask
          </button>
          <button
            type="button"
            className="rounded-[16px] px-4 py-2"
            onClick={() => ()}
          >
            Neopin
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default WalletModal;
