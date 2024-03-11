import clsx from "clsx";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { forwardRef } from "react";
import ArrowRightBlue from "~/ui/public/icons/ArrowRightBlue.svg";
import ArrowRightWhite from "~/ui/public/icons/ArrowRightWhite.svg";
import type { UIProps } from "../../../props";

export interface ButtonProps extends UIProps.Button {
  size?: "small" | "large";
  color?: "white" | "blue";
  icon?: StaticImageData;
  description?: string;
}

export const ButtonSizes = {
  small: clsx("h-[40px]"),
  large: clsx("h-[55px] border-theme-white"),
};

export const ButtonColors = {
  blue: clsx(
    "border-theme-blue bg-theme-blue text-theme-white",
    "hover:text-theme-whiteHover",
    "disabled:bg-theme-gray",
  ),
  white: clsx(
    "border-theme-blue bg-theme-white text-theme-blue",
    "hover:bg-theme-whiteHover",
    "disabled:bg-theme-gray",
  ),
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { type = "button", color = "blue", size = "small", icon, description, className, children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type === "button" ? "button" : "submit"}
      className={clsx(
        "inline-flex flex-row items-center justify-center gap-2.5 rounded-[5px] border py-4 text-center text-16/semi-bold",
        ButtonColors[color],
        ButtonSizes[size],
        icon ? "px-5" : "px-[30px]",
        className,
      )}
      {...props}
    >
      {!!icon && <Image src={icon} alt="icon" width={18} height={18} />}
      {!!description && <span>{description}</span>}
      {size === "large" && (
        <Image src={color === "blue" ? ArrowRightWhite : ArrowRightBlue} alt="ArrowRight" width={16} height={16} />
      )}
    </button>
  );
});

export default Button;
