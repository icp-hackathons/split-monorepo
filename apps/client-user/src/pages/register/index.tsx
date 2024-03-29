import RegisterProducts from "../../components/Register/RegisterProducts/RegisterProducts";
import { Header } from "../../layouts/Common/Header/Header";
import SubHeader from "../../layouts/Common/SubHeader/SubHeader";

export const Register = () => {
  return (
    <div className="flex h-full w-full flex-col ">
      <Header />
      <SubHeader />
      <div className="flex flex-col gap-[60px] pl-[60px]">
        <p className=" pt-[30px] text-20/semi-bold">Register Product Information</p>
        <RegisterProducts step={2} />
      </div>
    </div>
  );
};

export default Register;
