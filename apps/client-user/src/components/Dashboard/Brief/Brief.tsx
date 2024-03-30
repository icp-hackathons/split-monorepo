import { Label } from "@split/ui";

export interface BriefProps {
  description: string;
  lastUpdated: Date;
  briefInfos: {
    index: string;
    value: string;
  }[];
}

export const BriefElement = ({ index, value }: { index: string; value: string }) => {
  return (
    <div className="flex items-center justify-between self-stretch text-theme-black">
      <p className="text-13/semi-bold">{index}</p>
      <p className="text-16/semi-bold">{value}</p>
    </div>
  );
};

export const Brief = ({ description, lastUpdated, briefInfos }: BriefProps) => {
  return (
    <div className="flex w-full flex-col items-start gap-[15px]">
      {/* Label */}
      <div className="flex items-center justify-between self-stretch">
        <Label description={description} tooltip="도연도연" />
        <div className="text-13/regular text-theme-gray">{`Recent Update: ${lastUpdated}`}</div>
      </div>
      {/* Data */}
      <div className="flex flex-col items-start gap-5 self-stretch rounded-[5px] bg-gray-25 p-5">
        {briefInfos.map((info) => (
          <BriefElement key={info.index} index={info.index} value={info.value} />
        ))}
      </div>
    </div>
  );
};
