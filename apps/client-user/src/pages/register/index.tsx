import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { Button, Dropdown, TextField } from "@split/ui";
import Congrats from "../../../public/shared/images/Congrats.png";
import RegisterProducts from "../../components/Register/RegisterProducts/RegisterProducts";
import { Header } from "../../layouts/Common/Header/Header";
import SubHeader from "../../layouts/Common/SubHeader/SubHeader";

export const Register = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const getTitleAndSubtitle = (currentStep: number): { title: string; subtitle: string } => {
    let title: string;
    let subtitle: string;
    switch (currentStep) {
      case 1:
        title = "First, give us your product’s information.";
        subtitle =
          "The product information you provide will be used to help your referrals choose a service, so please take that into consideration.";
        break;
      case 2:
        title = "Next, create your product’s incentive pool.";
        subtitle = "Create your own incentive pool for your product’s referrers.";
        break;
      case 3:
        title = "Next, integrate the Split SDK to track the transactions.";
        subtitle =
          "In order for Split to track transactions made by users on your service, you'll need to integrate the SDK. You can do later with a developer on your team.";
        break;
      default:
        title = "Congratulations!";
        subtitle = "All steps are completed! Thank you for registering your product with Split.";
    }
    return { title, subtitle };
  };

  const { title, subtitle } = getTitleAndSubtitle(step);

  const options = [
    { value: "Ethereum", label: "Ethereum" },
    { value: "ICP", label: "ICP" },
    { value: "Viction", label: "Viction" },
  ];

  const renderContentsField = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="flex w-[400px] flex-col gap-[10px]">
              <p>Product Name</p>
              <TextField placeholder="e.g. Split" />
            </div>
            <div className="flex w-[400px] flex-col gap-[10px]">
              <p>Web Link</p>
              <TextField placeholder="e.g. https://split.io" />
            </div>
            <div className="flex w-[400px] flex-col gap-[10px]">
              <p>Twitter Link</p>
              <TextField placeholder="e.g. https://twitter.com/split_official" />
            </div>
            <div className="flex w-[800px] flex-col gap-[10px]">
              <p>Product Description</p>
              <TextField placeholder="e.g. Split is an affiliate marketing service for Web3 apps." />
            </div>
            <div className="flex w-[200px] flex-col gap-[10px]">
              <p>Network</p>
              <Dropdown options={options} />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="flex w-[400px] flex-col gap-[10px]">
              <p>Address for Incentive Token</p>
              <TextField placeholder="e.g. 0x1a2b3c4d5e6f..." />
            </div>
            <div className="flex w-[400px] flex-col gap-[10px]">
              <p>Incentive Amount for Tx </p>
              <TextField placeholder="e.g. https://split.io" />
            </div>
            <div className="flex w-[400px] flex-col gap-[10px]">
              <p>Total Txs</p>
              <TextField placeholder="e.g. https://twitter.com/split_official" />
            </div>
          </>
        );
      case 3:
        return <div>get API Keys</div>;
      case 4:
        return (
          <div className="mb-10 mt-10">
            <Image src={Congrats} alt="congratulations" />
          </div>
        );
      default:
        return null;
    }
  };
  const renderButtons = () => {
    switch (step) {
      case 1:
        return (
          <Button
            type="button"
            color="blue"
            className="rounded-[5px] px-[30px] py-[16px] text-theme-white"
            onClick={handleNextStep}
            description="Next"
          />
        );
      case 2:
        return (
          <>
            <Button
              type="button"
              color="blue"
              className="mr-2 rounded-[5px] px-[30px] py-[16px] text-theme-white"
              onClick={handlePrevStep}
              description="Deploy Pool"
            />
            <Button
              type="button"
              color="blue"
              className="rounded-[5px] px-[30px] py-[16px] text-theme-white"
              onClick={handleNextStep}
              description="Next"
            />
          </>
        );
      case 3:
        return (
          <>
            <Button
              type="button"
              color="blue"
              className="mr-2 rounded-[5px] px-[30px] py-[16px] text-theme-white"
              onClick={handlePrevStep}
              description="Integration Test"
            />
            <Button
              type="button"
              color="blue"
              className="rounded-[5px] px-[30px] py-[16px] text-theme-white"
              onClick={handleNextStep}
              description="Next"
            />
          </>
        );
      case 4:
        return (
          <Button
            type="button"
            color="blue"
            className="rounded-[5px] px-[30px] py-[16px] text-theme-white"
            onClick={handlePrevStep}
            description="Go to dashboard"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-full w-full flex-col">
      <Header />
      <SubHeader />
      <div className={clsx("flex flex-row gap-[60px] pl-[60px] pr-[60px]")}>
        <RegisterProducts step={step} />
        <div className="mt-[30px] h-full w-[2px] bg-gray-200" />
        <div className="mt-[30px] flex h-full  w-full flex-col gap-10">
          <div className="flex flex-col gap-5">
            <p className="text-[24px] font-semibold">{title}</p>
            <p className="text-16/regular">{subtitle}</p>
            <div className="flex w-full flex-col gap-5">{renderContentsField()}</div>
          </div>
          <div className="flex justify-end">{renderButtons()}</div>
        </div>
      </div>
    </div>
  );
};

export default Register;
