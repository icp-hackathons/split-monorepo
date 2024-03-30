import { Header } from "../../layouts/Common/Header/Header";
import { Dashboard } from "../../layouts/Dashboard/Dashboard";

export const User = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <Header />
      <Dashboard />
    </div>
  );
};

export default User;
