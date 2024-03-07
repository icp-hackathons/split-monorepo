import type { StaticImageData } from "next/image";
import Image from "next/image";
import type { OptionProps, SingleValueProps } from "react-select";
import { components as ReactSelectComponents } from "react-select";
import type ReactSelect from "react-select";
import { Dropdown, Label } from "@split/ui";

export interface NetworkSelectOption {
  value: string;
  label: string;
  icon: StaticImageData;
}

const SingleValue = ({ data, ...props }: SingleValueProps) => {
  const { value, label, icon } = data as NetworkSelectOption;
  return (
    <ReactSelectComponents.SingleValue data={data} {...props}>
      {value || value !== "" ? (
        <div className="inline-flex flex-row items-center justify-start gap-1">
          <Image src={icon} alt="icon" width={15} height={15} />
          <div className="text-13/semi-bold text-theme-black">{label}</div>
        </div>
      ) : (
        <div className="text-13/semi-bold text-theme-gray">Select Network</div>
      )}
    </ReactSelectComponents.SingleValue>
  );
};

const Option = ({ data, ...props }: OptionProps) => {
  const { label, icon } = data as NetworkSelectOption;
  return (
    <ReactSelectComponents.Option data={data} {...props}>
      <div className="inline-flex flex-row items-center justify-start gap-1">
        <Image src={icon} alt="icon" width={15} height={15} />
        <div className="text-13/semi-bold text-theme-black">{label}</div>
      </div>
    </ReactSelectComponents.Option>
  );
};

export interface NetworkDropdownProps extends React.ComponentProps<typeof ReactSelect> {
  options: { value: string; label: string; icon: StaticImageData }[];
  // TODO: 네트위크 타입 지정
  onNetworkSelect: (network: NetworkSelectOption) => void;
}

export const NetworkDropdown = ({ options, onNetworkSelect }: NetworkDropdownProps) => {
  return (
    <div className="flex flex-col items-start gap-2.5">
      <Label description="Network" />
      <Dropdown
        className="w-[200px]"
        components={{ SingleValue, Option }}
        defaultValue={options[0]}
        options={options}
        onChange={(option) => {
          if (option) {
            onNetworkSelect(option as NetworkSelectOption);
          }
        }}
      />
    </div>
  );
};

export default NetworkDropdown;
