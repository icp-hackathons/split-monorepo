import Image from "next/image";
import Dashboard from "~/client-user/public/shared/icons/tab/Dashboard.png";
import Demo from "~/client-user/public/shared/icons/tab/Demo.png";
import Developers from "~/client-user/public/shared/icons/tab/Developers.png";
import Products from "~/client-user/public/shared/icons/tab/Products.png";
import Register from "~/client-user/public/shared/icons/tab/Register.png";
import { ServiceTypes } from "~/client-user/src/types/user";

export const TabDropdownIcon = ({ type }: { type: ServiceTypes }) => {
  switch (type) {
    case ServiceTypes.USER_DASHBOARD:
      return <Image src={Dashboard} alt={ServiceTypes.USER_DASHBOARD} width={40} height={40} />;
    case ServiceTypes.ADMIN_DASHBOARD:
      return <Image src={Dashboard} alt={ServiceTypes.ADMIN_DASHBOARD} width={40} height={40} />;
    case ServiceTypes.ALL_PRODUCTS:
      return <Image src={Products} alt={ServiceTypes.ALL_PRODUCTS} width={40} height={40} />;
    case ServiceTypes.REGISTER_PRODUCT:
      return <Image src={Register} alt={ServiceTypes.REGISTER_PRODUCT} width={40} height={40} />;
    case ServiceTypes.DEVELOPERS:
      return <Image src={Developers} alt={ServiceTypes.DEVELOPERS} width={40} height={40} />;
    case ServiceTypes.DEMO_WEBSITE:
      return <Image src={Demo} alt={ServiceTypes.DEMO_WEBSITE} width={40} height={40} />;
    default:
      return <Image src={Dashboard} alt={ServiceTypes.USER_DASHBOARD} width={40} height={40} />;
  }
};
