import { Header } from "../../layouts/Common/Header/Header";
import DashSubHeader from "../../layouts/Common/SubHeader/DashSubHeader";
import { Dashboard } from "../../layouts/Dashboard/Dashboard";

export const User = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <Header />
      <DashSubHeader />
      <Dashboard />
    </div>
  );
};

export default User;
