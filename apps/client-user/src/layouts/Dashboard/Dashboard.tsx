import { Label } from "@split/ui";
import { Brief } from "../../components/Dashboard/Brief/Brief";
import { Eligibility, ProductCard, ProductCardType } from "../../components/Dashboard/ProductCard/ProductCard";

const mockMonthBriefInfos = [
  { index: "Total Earned (in USDC)", value: "1" },
  { index: "Total Claimed (in USDC)", value: "0" },
  { index: "Total Products", value: "1" },
  { index: "Total Visits", value: "1" },
  { index: "Total Events", value: "1" },
  { index: "Conversion", value: "100%" },
];

const mockTotalBriefInfos = [
  { index: "Total Earned (in USDC)", value: "126" },
  { index: "Total Claimed (in USDC)", value: "125" },
  { index: "Total Products", value: "3" },
  { index: "Total Visits", value: "15" },
  { index: "Total Events", value: "101" },
  { index: "Conversion", value: "14.85%" },
];

export const Dashboard = () => {
  return (
    <div className="flex flex-col gap-10 px-[60px] py-[30px]">
      {/* Briefs */}
      <div className="flex items-center justify-between gap-8">
        <Brief description="In This Month" lastUpdated={new Date("2024-03-31")} briefInfos={mockMonthBriefInfos} />
        <Brief description="Entire Period" lastUpdated={new Date("2024-03-31")} briefInfos={mockTotalBriefInfos} />
      </div>
      {/* Products */}
      <div className="flex flex-col gap-[15px]">
        <Label description="Products" tooltip="도연도연" />
        {/* Product Cards */}
        <div className="flex items-center gap-5 self-stretch">
          <ProductCard type={ProductCardType.AFFILIATE} productName="DoPengSwap" totalEarned={1} totalClaimed={0} />
          <ProductCard
            type={ProductCardType.USER}
            productName="Shubit.xyz"
            totalEarned={1}
            eligibility={Eligibility.CLAIMED}
            disabled
          />
          <ProductCard
            type={ProductCardType.AFFILIATE}
            productName="BlockVal"
            totalEarned={124}
            totalClaimed={124}
            disabled
          />
        </div>
      </div>
    </div>
  );
};
