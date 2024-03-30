import clsx from "clsx";
import Image from "next/image";
import { Button } from "@split/ui";
import ArrowRight from "~/client-user/public/shared/icons/ArrowRight.svg";
import DefaultImage from "~/client-user/public/shared/icons/DefaultImage.png";

export enum ProductCardType {
  AFFILIATE = "AFFILIATE",
  USER = "USER",
}

export enum Eligibility {
  AVAILABLE = "AVAILABLE",
  CLAIMED = "CLAIMED",
}

export interface ProductCardProps {
  type: ProductCardType;
  productName: string;
  totalEarned: number;
  totalClaimed?: number;
  eligibility?: Eligibility;
}

export const ProductInfoElement = ({ index, value }: { index: string; value: string }) => {
  return (
    <div className="flex items-center justify-between self-stretch">
      <p className="text-10/regular">{index}</p>
      <p className="text-13/semi-bold">{value}</p>
    </div>
  );
};

export const ProductCard = ({ type, productName, totalEarned, totalClaimed, eligibility }: ProductCardProps) => {
  return (
    <div className="flex h-[370px] w-[230px] flex-col items-start justify-between rounded-[5px] border border-theme-blue p-[15px]">
      {/* Product Image */}
      <div className="flex h-[150px] items-center justify-center self-stretch bg-gray-25">
        <Image src={DefaultImage} alt="DefaultImage" width={23} height={20} />
      </div>
      {/* Tag */}
      <div
        className={clsx(
          "flex items-center gap-2.5 rounded-[5px] px-2 py-1",
          "text-10/regular text-theme-white",
          type === ProductCardType.AFFILIATE ? "bg-theme-blue" : "bg-violet-700",
        )}
      >
        {type === ProductCardType.AFFILIATE ? "Worked as Affiliate" : "Participated at User"}
      </div>
      {/* ProductInfo */}
      <div className="flex flex-col items-end justify-center gap-2.5 self-stretch">
        <div className="flex flex-col items-start gap-[6px] self-stretch">
          <ProductInfoElement index="Product" value={productName} />
          {type ? (
            <>
              <ProductInfoElement index="Total Earned" value={totalEarned.toString()} />
              <ProductInfoElement index="Total Claimed" value={totalClaimed ? totalClaimed.toString() : "-"} />
            </>
          ) : (
            <>
              <ProductInfoElement index="Eligibility" value={eligibility ?? Eligibility.AVAILABLE} />
              <ProductInfoElement index="Claimable Reward" value={totalEarned.toString()} />
            </>
          )}
        </div>
        {/* Show details */}
        <div className="flex items-center justify-end">
          <p className="text-10/regular text-theme-gray">Show Details</p>
          <Image src={ArrowRight} alt="right" width={12} height={12} />
        </div>
        {/* Claim Button */}
        <Button className="w-full" description="Claim Reward" />
      </div>
    </div>
  );
};
