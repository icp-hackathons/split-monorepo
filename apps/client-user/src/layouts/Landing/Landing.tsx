import Image from "next/image";
import { Button } from "@split/ui";
import SplitMan from "~/client-user/public/shared/images/SplitMan.png";

export const Landing = () => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-[50px] self-stretch bg-theme-blue px-[60px] pt-[100px]">
      <div className="flex flex-col items-center justify-center gap-[30px] text-theme-white">
        <p className="text-60/bold">The First Web3 Affiliate Marketing</p>
        <p className="text-30/semi-bold">Generate Link, Share to Others, and Earn Tokens.</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-[50px]">
        <div className="flex items-center justify-center gap-[30px]">
          <Button size="large" color="white" description="Get Started" />
          <Button size="large" color="blue" description="Read Guide" />
        </div>
        <Image src={SplitMan} alt="SplitMan" />
      </div>
    </div>
  );
};
