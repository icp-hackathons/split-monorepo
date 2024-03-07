import clsx from "clsx";
import Image from "next/image";
import type { ComponentProps } from "react";
import type { ClassNamesConfig } from "react-select";
import ReactSelect, { components as ReactSelectComponents } from "react-select";
import ArrowDown from "~/ui/public/icons/ArrowDown.png";
import ArrowUp from "~/ui/public/icons/ArrowUp.png";

const DropdownIndicator = ({
  selectProps,
  ...props
}: Parameters<typeof ReactSelectComponents.DropdownIndicator>[0]) => {
  return (
    <ReactSelectComponents.DropdownIndicator selectProps={selectProps} {...props}>
      {selectProps.menuIsOpen ? (
        <Image src={ArrowUp} alt="ArrowUp" width={20} height={12} />
      ) : (
        <Image src={ArrowDown} alt="ArrowDown" width={20} height={12} />
      )}
    </ReactSelectComponents.DropdownIndicator>
  );
};

const dropdownClasses: ClassNamesConfig = {
  control: ({ menuIsOpen }) =>
    clsx(
      "flex justify-center items-center p-2.5 mb-1.5 border rounded-[5px] text-13/semi-bold",
      menuIsOpen ? "border-theme-blue" : " border-theme-gray",
    ),
  menu: () => "!static border-none",
  menuList: () => "border border-theme-gray rounded-[5px] text-13/semi-bold",
  option: ({ isFocused }) => clsx("p-2.5 text-13/semi-bold", isFocused && "bg-gray-25"),
  input: () => "",
  placeholder: () => "",
  singleValue: () => "",
};

export const Dropdown = ({ components, ...props }: ComponentProps<typeof ReactSelect>) => {
  return (
    <ReactSelect
      classNames={dropdownClasses}
      unstyled
      isSearchable={false}
      components={{
        ...(components ?? {}),
        DropdownIndicator,
      }}
      {...props}
    />
  );
};

export default Dropdown;
