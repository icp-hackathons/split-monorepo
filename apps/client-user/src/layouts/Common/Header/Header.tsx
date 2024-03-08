import Image from "next/image";
import { Button } from "@split/ui";
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
            handleClick: () => {
              console.log("Dashboard");
            },
          },
          {
            type: ServiceTypes.ALL_PRODUCTS,
            title: "All Products",
            description: "Promote and earn rewards by endorsing the products affiliated with Split.",
            handleClick: () => {
              console.log("All Products");
            },
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
            handleClick: () => {
              console.log("Dashboard");
            },
          },
          {
            type: ServiceTypes.REGISTER_PRODUCT,
            title: "Register Product",
            description: "Enlist your product on Split and start promoting it to a broader audience.",
            handleClick: () => {
              console.log("Register Product");
            },
          },
          {
            type: ServiceTypes.DEVELOPERS,
            title: "Developers",
            description:
              "Manage your API keys and learn how to integrate the Split SDK into your product for enhanced functionality.",
            handleClick: () => {
              console.log("Developers");
            },
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
            handleClick: () => {
              console.log("Demo Website");
            },
          },
        ]}
      />
    ),
  },
];

export const Header = () => {
  return (
    <div className="flex w-full items-start justify-between bg-theme-white px-10 py-[26px]">
      <div className="flex items-center justify-center gap-[130px]">
        <Image src={Logo} alt="logo" width={80} height={48} />
        <Tab tabs={tabs} />
      </div>
      <div className="flex items-center gap-[30px]">
        <Button description="Sign in" />
      </div>
    </div>
  );
};
