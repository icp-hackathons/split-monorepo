import { Label } from "@split/ui";
import { Brief } from "../../components/Dashboard/Brief/Brief";
import { Eligibility, ProductCard, ProductCardType } from "../../components/Dashboard/ProductCard/ProductCard";

const mockBriefInfos = [
  { index: "김도연", value: "도연도연" },
  { index: "김도연", value: "도연도연" },
  { index: "김도연", value: "도연도연" },
];

export const Dashboard = () => {
  return (
    <div className="flex flex-col gap-10 px-[60px] py-[30px]">
      {/* Briefs */}
      <div className="flex items-center justify-between gap-8">
        <Brief description="In This Month" lastUpdated={new Date()} briefInfos={mockBriefInfos} />
        <Brief description="Entire Period" lastUpdated={new Date()} briefInfos={mockBriefInfos} />
      </div>
      {/* Products */}
      <div className="flex flex-col gap-[15px]">
        <Label description="Products" tooltip="도연도연" />
        {/* Product Cards */}
        <div className="flex items-center gap-5 self-stretch">
          <ProductCard type={ProductCardType.AFFILIATE} productName="김도연" totalEarned={100} totalClaimed={100} />
          <ProductCard
            type={ProductCardType.USER}
            productName="김도연"
            totalEarned={100}
            eligibility={Eligibility.AVAILABLE}
          />
          <ProductCard type={ProductCardType.AFFILIATE} productName="김도연" totalEarned={100} totalClaimed={100} />
        </div>
      </div>
    </div>
  );
};
