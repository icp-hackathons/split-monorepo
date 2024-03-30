import Image from "next/image";
import { useAuth } from "@split/graphql";
import { useConnectWallet } from "@split/hooks";
import { Button, NetworkStatus } from "@split/ui";
import { formatAddress, formatChainId } from "@split/utils";
import MetamaskIcon from "~/client-user/public/shared/icons/MetamaskIcon.png";
import { ServiceTypes } from "~/client-user/src/types/user";
import Logo from "~/ui/public/images/Logo.png";
import { Tab } from "../Tab/Tab";
import { TabDropdown } from "../Tab/TabDropdown/TabDropdown";

const tabs = [
  {
    name: "Earn",
    element: (
      <TabDropdown
        items={[
          {
            type: ServiceTypes.USER_DASHBOARD,
            title: "Dashboard",
            description: "Check your earnings so far through affiliate activities and transactions.",
            targetUrl: "/dashboard/user",
          },
          {
            type: ServiceTypes.ALL_PRODUCTS,
            title: "All Products",
            description: "Promote and earn rewards by endorsing the products affiliated with Split.",
            targetUrl: "/products",
          },
        ]}
      />
    ),
  },
  {
    name: "Advertise",
    element: (
      <TabDropdown
        items={[
          {
            type: ServiceTypes.ADMIN_DASHBOARD,
            title: "Dashboard",
            description: "Monitor the advertising performance of your registered products and manage the reward pool.",
            targetUrl: "/dashboard/admin",
          },
          {
            type: ServiceTypes.REGISTER_PRODUCT,
            title: "Register Product",
            description: "Enlist your product on Split and start promoting it to a broader audience.",
            targetUrl: "/register",
          },
          {
            type: ServiceTypes.DEVELOPERS,
            title: "Developers",
            description:
              "Manage your API keys and learn how to integrate the Split SDK into your product for enhanced functionality.",
            targetUrl: "/developers",
          },
        ]}
      />
    ),
  },
  {
    name: "Resource",
    element: (
      <TabDropdown
        items={[
          {
            type: ServiceTypes.DEMO_WEBSITE,
            title: "Demo Website",
            description: "Check out our demo website to see how Split works for affiliates and users.",
            targetUrl: "/demo",
          },
        ]}
      />
    ),
  },
];

export const Header = () => {
  const { isAuthenticated } = useAuth();
  const { address, chain, handleConnect, handleDisconnect } = useConnectWallet();
  const chainId = chain?.id;

  const handleWalletConnect = () => {
    if (!address) {
      handleConnect();
    } else {
      handleDisconnect();
    }
  };

  return (
    <div className="flex w-full items-start justify-between bg-theme-white px-10 py-[26px]">
      <div className="flex items-center justify-center gap-[130px]">
        <Image src={Logo} alt="logo" width={80} height={48} />
        <Tab tabs={tabs} />
      </div>
      <div className="flex items-center gap-[30px]">
        {isAuthenticated ? (
          <div className="flex items-center gap-[30px]">
            <NetworkStatus chainId={formatChainId(chainId)} />
            <Button icon={MetamaskIcon} description={formatAddress(address)} onClick={handleWalletConnect} />
          </div>
        ) : (
          <Button description="Sign in" onClick={handleWalletConnect} />
        )}
      </div>
    </div>
  );
};
