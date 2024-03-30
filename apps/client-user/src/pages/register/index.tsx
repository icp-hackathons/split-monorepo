import clsx from "clsx";
import { ethers } from "ethers";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useCreateProduct, useSetIncentivePool } from "@split/graphql";
import { useDeployPool } from "@split/hooks";
import type { ProductUpdateInput } from "@split/model";
import { Button, Dropdown, TextField } from "@split/ui";
import close from "../../../public/shared/icons/Group 6.svg";
import addItem from "../../../public/shared/icons/addItem.svg";
import copy from "../../../public/shared/icons/copy.svg";
import rightArrow from "../../../public/shared/icons/rightArrow.svg";
import Congrat from "../../../public/shared/images/Congrat.png";
import USDC from "../../../public/shared/images/USDC.png";
import RegisterProducts from "../../components/Register/RegisterProducts/RegisterProducts";
import { Header } from "../../layouts/Common/Header/Header";
import SubHeader from "../../layouts/Common/SubHeader/SubHeader";

export const Register = () => {
  const router = useRouter();

  const [step, setStep] = useState<number>(1);
  const [productInfo, setProductInfo] = useState({
    name: "",
    webLink: "",
    twitterLink: "",
    description: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventType, setEventType] = useState("Transaction");
  const [eventInfo, setEventInfo] = useState({
    eventName: "",
    address: "",
    affiliateAmount: "",
    userAmount: "",
    totalTxs: "",
  });
  const [isEventAdded, setIsEventAdded] = useState(false);
  const [id, setId] = useState<string>("");

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

  const [createProduct] = useCreateProduct({
    onCompleted: () => {
      handleNextStep();
      console.log("success create product");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleCreateProduct = async () => {
    const { data } = await createProduct({
      variables: {
        input: {
          ...productInfo,
        },
      },
    });
    const createdProductId = data?.createProduct?.id;

    if (createdProductId) {
      setId(createdProductId);
    }
  };

  const [setIncentivePool] = useSetIncentivePool({
    onCompleted: () => {
      console.log("success create product");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const { handleDeployContract } = useDeployPool();

  const handleSetIncentivePool = async () => {
    const input: ProductUpdateInput = {
      events: [
        {
          name: eventInfo.eventName,
          providerAmountPerEvent: eventInfo.affiliateAmount,
          type: eventType === "Transaction" ? "TRANSACTION" : "NON_TRANSACTION",
          userAmountPerEvent: eventInfo.userAmount,
        },
      ],
      id,
      incentivePool: {
        incentiveAddress: "",
        poolAddress: "",
      },
    };

    await setIncentivePool({
      variables: {
        input,
      },
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const { value } = e.target;
    setProductInfo((prevProductInfo) => ({
      ...prevProductInfo,
      [fieldName]: value,
    }));
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
    { value: "Near Protocol", label: "Near Protocol" },
  ];

  const handleModalInputChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string): void => {
    const { value } = e.target;
    setEventInfo((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleAddEvent = () => {
    console.log("Selected Event Type:", eventType);
    console.log("Event Info:", eventInfo);
    setIsEventAdded(true);
    setIsModalOpen(false);
  };

  const renderContentsField = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="flex w-[400px] flex-col gap-[10px]">
              <TextField
                label="Product Name"
                placeholder="e.g. Split"
                value={productInfo.name}
                onChange={(e) => handleInputChange(e, "name")}
              />
            </div>
            <div className="flex w-[400px] flex-col gap-[10px]">
              <TextField
                label="Web Link"
                placeholder="e.g. https://split.io"
                value={productInfo.webLink}
                onChange={(e) => handleInputChange(e, "webLink")}
              />
            </div>
            <div className="flex w-[400px] flex-col gap-[10px]">
              <TextField
                label="Twitter Link"
                placeholder="e.g. https://twitter.com/split_official"
                value={productInfo.twitterLink}
                onChange={(e) => handleInputChange(e, "twitterLink")}
              />
            </div>
            <div className="flex w-[800px] flex-col gap-[10px]">
              <TextField
                label="Product Description"
                placeholder="e.g. Split is an affiliate marketing service for Web3 apps."
                value={productInfo.description}
                onChange={(e) => handleInputChange(e, "description")}
              />
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
            <div className="text-16/semi-bold">Configure Event</div>
            <div className="flex flex-row gap-5">
              <div className="flex flex-row justify-between bg-gray-200 px-5 py-3">
                <div className="mr-[30px] flex flex-col gap-2">
                  <p className="text-13/semi-bold">Connect Wallet</p>
                  <p className="text-10/regular">Click to edit</p>
                </div>
                <Image src={rightArrow} alt="arrow" />
              </div>
              <div className="flex flex-row justify-between bg-gray-200 px-5 py-3">
                <div className="mr-[30px] flex flex-col gap-2">
                  <p className="text-13/semi-bold">Add Liquidity</p>
                  <p className="text-10/regular">Click to edit</p>
                </div>
                <Image src={rightArrow} alt="arrow" />
              </div>
              <button
                type="button"
                className="justify-betwee flex flex-row border border-black px-5 py-3"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="mr-[30px] flex flex-col gap-2">
                  <p className="text-left text-13/semi-bold">Add Event</p>
                  <p className="text-10/regular">Configure event option</p>
                </div>
                <Image src={addItem} alt="addItem" />
              </button>
              {isModalOpen && (
                <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-50">
                  <div className="flex flex-col gap-[10px] rounded-lg bg-white p-8">
                    <div>
                      <div className="mb-[30px] flex flex-row justify-between">
                        <p className="semi-bold  text-[24px] ">Add Event</p>
                        <Image src={close} alt="close" onClick={() => setIsModalOpen(false)} />
                      </div>
                      <p className="mb-[10px] text-16/semi-bold">Event Type</p>
                      <button
                        type="button"
                        className={`mr-[10px] rounded-[16px] px-4 py-2 text-white ${
                          eventType === "Transaction" ? "bg-blue-800" : "bg-gray-200 text-gray-700"
                        }`}
                        onClick={() => setEventType("Transaction")}
                      >
                        Transaction
                      </button>
                      <button
                        type="button"
                        className={`rounded-[16px] px-4 py-2 ${
                          eventType === "Non-Transaction" ? "bg-blue-800 text-white" : "bg-gray-200 text-gray-700"
                        }`}
                        onClick={() => setEventType("Non-Transaction")}
                      >
                        Non-Transaction
                      </button>
                    </div>
                    <div className="flex w-[400px] flex-col gap-[10px]">
                      <TextField
                        label="Event Name"
                        placeholder="e.g. Click"
                        value={eventInfo.eventName}
                        onChange={(e) => handleModalInputChange(e, "eventName")}
                      />
                    </div>
                    <div className="flex w-[400px] flex-col gap-[10px]">
                      <TextField
                        label="Address for Incentive Token"
                        placeholder="e.g. 0x1a2b3c4d5e6f..."
                        value={eventInfo.address}
                        onChange={(e) => handleModalInputChange(e, "address")}
                      />
                    </div>
                    <div className="flex flex-row gap-[30px]">
                      <div className="flex w-[400px] flex-col gap-[10px]">
                        <TextField
                          label="Incentive Amount for Affiliate (per Tx)"
                          placeholder=""
                          value={eventInfo.affiliateAmount}
                          onChange={(e) => handleModalInputChange(e, "affiliateAmount")}
                        />
                      </div>
                      <div className="flex w-[400px] flex-col gap-[10px]">
                        <TextField
                          label="Incentive Amount for User (per Tx)"
                          placeholder=""
                          value={eventInfo.userAmount}
                          onChange={(e) => handleModalInputChange(e, "userAmount")}
                        />
                      </div>
                    </div>

                    <div className="flex w-[400px] flex-col gap-[10px]">
                      <TextField
                        label="Total Txs"
                        placeholder=""
                        value={eventInfo.totalTxs}
                        onChange={(e) => handleModalInputChange(e, "totalTxs")}
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="rounded-[16px] bg-blue-800 px-4 py-2 text-white"
                        onClick={handleAddEvent}
                      >
                        Add Event
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {isEventAdded && (
              <>
                <div className="text-13/regular text-gray-600">This is the amounts required to configure:</div>
                <div className="flex w-[400px] flex-row justify-between">
                  <div className="flex flex-row align-middle">
                    <Image src={USDC} alt="USDC" className="h-[33px] w-[33px]" />
                    <div className="ml-[10px] flex flex-col">
                      <p className="text-16/semi-bold">USDC</p>
                      <p className="text-13/regular">USD coin</p>
                    </div>
                  </div>
                  <p className="text-16/semi-bold">10000.00</p>
                </div>
              </>
            )}
          </>
        );
      case 3:
        return (
          <>
            <p className="text-16/semi-bold">API Key</p>
            <div className="bg-gray-25 p-[10px]">
              <div className="flex flex-row justify-between">
                <p className="text-13/regular">7d0a3cdeca88a00c07b2caf712b2621f</p>
                <Image src={copy} alt="copy" />
              </div>
            </div>
            <p className="text-16/semi-bold">Integration Guide</p>
            <p className="text-13/regular text-gray-700">
              First, copy and add the script below to the page you want to track for user incoming.
            </p>
            <div className="bg-gray-25 p-[10px]">
              <div className="flex flex-row justify-between">
                <p className="mb-[10px] text-10/regular">HTML</p>
                <Image src={copy} alt="copy" />
              </div>
              <div className="flex w-[497px]">
                <p className="flex-grow text-[12px] font-medium leading-[normal] tracking-[0] text-transparent [font-family:'Source_Code_Pro-Medium',Helvetica]">
                  <span className="text-black">&lt;script </span>
                  <span className="text-[#ff0000]">type=</span>
                  <span className="text-[#23974b]">&#34;text/javascript&#34;</span>
                  <span className="text-black">&nbsp;</span>
                  <span className="text-[#ff0000]">src=</span>
                  <span className="text-[#23974b]">&#34;./splitsdk/splitsdk.js&#34;</span>
                  <span className="text-black">&gt;&lt;/script&gt;</span>
                </p>
              </div>
            </div>
            <p className="text-13/regular text-gray-700">
              The code below sends the referrer and user&apos;s wallet address data (encrypted for the referrer) to
              Split when a user referred by a referral link connects their wallet. Insert the code below into your
              existing wallet linking logic.
            </p>
            <div className="bg-gray-25 p-[10px]">
              <div className="flex flex-row justify-between">
                <p className="mb-[10px] text-10/regular">Javascript</p>
                <Image src={copy} alt="copy" />
              </div>

              <div className="w-auto">
                <p className="h-[45px] text-[12px] font-medium leading-[normal] tracking-[0] text-transparent [font-family:'Source_Code_Pro-Medium',Helvetica]">
                  <span className="text-black">const referralWalletCode = urlParams.</span>
                  <span className="text-[#0868b9]">get</span>
                  <span className="text-black">(</span>
                  <span className="text-[#23974b]">&quot;affiliate&quot;</span>
                  <span className="text-black">
                    );
                    <br />
                    const split = window.
                  </span>
                  <span className="text-[#0868b9]">split</span>
                  <span className="text-black">
                    ;<br />
                    const res ={" "}
                  </span>
                  <span className="text-[#ff0000]">await</span>
                  <span className="text-black"> split.</span>
                  <span className="text-[#0868b9]">referral</span>
                  <span className="text-black">(API_KEY, userWalletAddr, referralWalletCode);</span>
                </p>
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <div className="mb-10 mt-10">
            <Image src={Congrat} alt="congratulations" width={300} height={300} />
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
            onClick={handleCreateProduct}
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
              onClick={async () => {
                await handleDeployContract({
                  incentiveInfo: {
                    incentiveToken: eventInfo.address,
                    incentiveAmountPerTransaction: ethers.utils.parseEther(eventInfo.userAmount), // 0.101 USDC
                    affiliateAmountPerTransaction: ethers.utils.parseEther(eventInfo.affiliateAmount), // 0.1 USDC
                    userAmountPerTransaction: ethers.utils.parseEther(eventInfo.userAmount), // 0.001 USDC
                    leftTransactionNum: 1000, // Total 101 USDC
                    maxTransactionNumPerWallet: 100,
                    endTimeStamp: ethers.constants.MaxUint256,
                  },
                });
              }} // deploy pool
              description="Deploy Pool"
              disabled={!isEventAdded}
            />
            <Button
              type="button"
              color="blue"
              className="rounded-[5px] px-[30px] py-[16px] text-theme-white"
              onClick={handleNextStep}
              description="Next"
              disabled={!isEventAdded}
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
            onClick={() => {
              router.push("/");
            }}
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
