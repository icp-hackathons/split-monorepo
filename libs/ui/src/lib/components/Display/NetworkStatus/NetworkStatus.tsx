import clsx from "clsx";
import Image from "next/image";
import { SupportedChainIds, formatChainIdToName } from "@split/utils";
import ActiveNetwork from "~/ui/public/icons/ActiveNetwork.svg";
import InvalidNetwork from "~/ui/public/icons/InvalidNetwork.svg";
import type { UIProps } from "../../../props";

export interface NetworkStatusProps extends UIProps.Div {
  chainId: SupportedChainIds;
}

export const NetworkStatus = ({ chainId }: NetworkStatusProps) => {
  const isSupported = chainId !== SupportedChainIds.UNSUPPORTED;
  const chainName = formatChainIdToName(chainId);

  return (
    <div className="flex w-[160px] items-center justify-between">
      <p className={clsx("text-16/semi-bold", isSupported ? "text-theme-black" : "text-theme-error")}>
        {isSupported ? chainName : "Invalid Network"}
      </p>
      <Image src={isSupported ? ActiveNetwork : InvalidNetwork} alt="status" width={17} height={17} />
    </div>
  );
};
