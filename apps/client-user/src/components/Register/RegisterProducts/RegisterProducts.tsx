import Image from "next/image";
import React from "react";
import bar from "../../../../public/shared/icons/Bar.svg";
import status from "../../../../public/shared/icons/Status.svg";
import statusChecked from "../../../../public/shared/icons/StatusChecked.svg";

interface RegisterProductsProps {
  step: number;
}

const RegisterProducts: React.FC<RegisterProductsProps> = ({ step }) => {
  let title = "";
  switch (step) {
    case 1:
      title = "Register product information";
      break;
    case 2:
      title = "Deploy incentive pool";
      break;
    case 3:
      title = "Get API keys and integrate it";
      break;
    case 4:
      title = "Complete guide";
      break;
    default:
      title = "Unknown step";
  }
  return (
    <div>
      <div className="flex w-[360px] flex-col gap-[60px]">
        <p className=" pt-[30px] text-20/semi-bold">{title}</p>
        <div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-2 align-middle">
              <Image
                src={step > 1 ? statusChecked : status}
                alt="status"
                width={step > 1 ? 25 : 22}
                height={step > 1 ? 25 : 22}
              />
              <Image src={bar} alt="bar" height={30} />
            </div>
            <p className={step === 1 ? "text-16/semi-bold text-theme-black" : "text-theme-gray"}>
              Register product information
            </p>
          </div>

          <div className="mt-2 flex flex-row gap-4">
            <div className="flex flex-col gap-2 align-middle">
              <Image
                src={step > 2 ? statusChecked : status}
                alt="status"
                width={step > 2 ? 25 : 22}
                height={step > 2 ? 25 : 22}
              />
              <Image src={bar} alt="bar" height={30} />
            </div>
            <p className={step === 2 ? "text-16/semi-bold text-theme-black" : "text-theme-gray"}>
              Deploy incentive pool
            </p>
          </div>

          <div className="mt-2 flex flex-row gap-4">
            <div className="flex flex-col gap-2 align-middle">
              <Image
                src={step > 3 ? statusChecked : status}
                alt="status"
                width={step > 3 ? 25 : 22}
                height={step > 3 ? 25 : 22}
              />
              <Image src={bar} alt="bar" height={30} />
            </div>
            <p className={step === 3 ? "text-16/semi-bold text-theme-black" : "text-theme-gray"}>
              Get API keys and integrate it
            </p>
          </div>

          <div className="mt-2 flex flex-row gap-4 align-middle">
            <Image
              src={step > 4 ? statusChecked : status}
              alt="status"
              width={step > 4 ? 25 : 22}
              height={step > 4 ? 25 : 22}
            />
            <p className={step === 4 ? "text-16/semi-bold text-theme-black" : "text-theme-gray"}>Complete guide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterProducts;
