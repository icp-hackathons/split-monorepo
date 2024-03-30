import Image from "next/image";
import { useState } from "react";
import ArrowDown from "~/client-demo/public/shared/icons/ArrowDown.png";
import MetamaskIcon from "~/client-demo/public/shared/icons/MetamaskIcon.png";
import DoPengSwap from "~/client-demo/public/shared/images/DoPengSwap.png";
import ShuFace from "~/client-demo/public/shared/images/ShuFace.png";
import { Popup } from "../components/Popup";
import { Toast } from "../components/Toast";
import { useToastContext } from "../context/ToastContext";
import { SCARY_TEXT } from "../secret/constants";

export const Dropdown = ({ token, isShu }: { token: string; isShu: boolean }) => {
  const [isHi, setIsHi] = useState(false);
  return (
    <div className="relative flex w-[100px] items-center justify-between gap-2 rounded-2xl bg-theme-white p-2">
      <Image src={isShu ? ShuFace : MetamaskIcon} alt="coin" width={20} height={20} className="rounded-3xl" />
      <p className="mt-[2px] text-13/semi-bold">{token}</p>
      <div className="w-4" />
      <Image
        src={ArrowDown}
        alt="arrow"
        width={20}
        height={20}
        onClick={() => {
          setIsHi(true);
        }}
      />
      {isHi && (
        <div className="absolute left-[-100px] flex h-screen w-screen items-center justify-center bg-theme-error text-60/bold text-theme-white">
          {SCARY_TEXT}
        </div>
      )}
    </div>
  );
};

export const DropdownTokenSelect = () => {
  return (
    <div className="flex w-[140px] items-center justify-center gap-2 rounded-2xl bg-violet-300 p-2 ">
      <p className="mt-[2px] text-13/regular text-theme-black">Select Token</p>
      <Image src={ArrowDown} alt="arrow" width={20} height={20} />
    </div>
  );
};

export const Index = () => {
  const { setToastContext } = useToastContext();
  return (
    <>
      <Popup />

      <div className="relative flex h-screen w-screen items-center justify-center">
        {/* DoPengSwap */}
        <div className="absolute left-5 top-5 flex items-center gap-3 text-20/semi-bold text-violet-800">
          <Image src={DoPengSwap} alt="alt" width={50} height={50} />
          <div className="flex items-center gap-3">
            <p>DoPengSwap</p>
            <p className="text-13/regular text-theme-lightGray">Feat: Shubit</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {/* 메뉴 */}
          <div className="flex items-center justify-start gap-2.5 text-16/regular text-theme-gray">
            <div className="flex w-[80px] items-center justify-center rounded-[20px] bg-violet-400 px-4 py-3 text-theme-white">
              Swap
            </div>
            <p className="w-[80px] text-center">Send</p>
            <p className="w-[80px] text-center">Buy</p>
          </div>
          {/* 전송 */}
          <div className="flex w-[400px] flex-col items-start gap-2 rounded-md bg-gray-25 p-5 shadow-md">
            <p className="text-13/regular text-theme-black">You Pay</p>
            <div className="flex items-center justify-between self-stretch">
              <p className="text-30/semi-bold text-theme-black">1</p>
              <Dropdown token="SHU" isShu />
            </div>
            <div className="flex justify-end gap-2 self-stretch">
              <p className="text-13/regular text-theme-gray">Amount: 10.93</p>
              <p className="text-13/regular text-violet-700"> Max</p>
            </div>
          </div>
          {/* 전송 */}
          <div className="flex w-[400px] flex-col items-start gap-2 rounded-md bg-gray-25 p-5 shadow-md">
            <p className="text-13/regular text-theme-black">You Receive</p>
            <div className="flex items-center justify-between self-stretch">
              <p className="text-30/semi-bold text-theme-gray">10.51</p>
              <Dropdown token="KITE" isShu={false} />
            </div>
            <div className="flex justify-end gap-2 self-stretch">
              <p className="text-13/regular text-theme-gray">Amount: 2.82</p>
              <p className="text-13/regular text-violet-700"> Max</p>
            </div>
          </div>
          {/* 버튼 */}
          <button
            type="button"
            className="flex h-[60px] w-[400px] items-center justify-center rounded-lg bg-violet-600"
            onClick={() => {
              setToastContext(<Toast message="Event done, you are rewarded by SPLIT." />);
            }}
          >
            <p className="text-20/semi-bold text-theme-white">Swap</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Index;
