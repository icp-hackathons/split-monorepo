import clsx from "clsx";
import { forwardRef, useEffect, useState } from "react";
import type { UIProps } from "../../../props";
import { Label } from "../../Display/Label/Label";

export interface TextFieldProps extends UIProps.Input {
  id?: string;
  type?: "text" | "number" | "password" | "email" | "tel" | "phone" | "search";
  label?: string;
  tooltip?: string;
  placeholder?: string;
  error?: string;
  value?: string | number;
  defaultValue?: string | number;
}

const getDefaultValue = (
  type?: "text" | "number" | "password" | "email" | "tel" | "phone" | "search",
  value?: string | number,
  defaultValue?: string | number,
) => {
  if (value !== undefined) return value;
  if (defaultValue !== undefined) return defaultValue;
  if (type === "number") return 0;
  return "";
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  { id, type = "text", label, tooltip, error, value, defaultValue, onChange, className, ...props },
  ref,
) {
  const [internalValue, setInternalValue] = useState(getDefaultValue(type, value, defaultValue));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
    onChange?.(e);
  };

  useEffect(() => {
    if (value === undefined) return;
    setInternalValue(value);
  }, [value]);

  return (
    <div className={clsx("inline-flex flex-col items-start gap-2.5", className)}>
      {!!label && <Label htmlFor={id} description={label} tooltip={tooltip} />}
      <div className="flex flex-col items-start gap-[3px] self-stretch">
        <div
          className={clsx(
            "flex h-10 items-center gap-2.5 self-stretch rounded-[5px] border border-theme-gray px-2.5",
            "focus-within:border-theme-blue",
            !!error && "border-theme-error",
          )}
        >
          <input
            id={id}
            className={clsx(
              "flex-1 text-13/regular text-theme-black placeholder:text-theme-lightGray",
              "bg-transparent autofill-hide focus:outline-none",
            )}
            type={type}
            ref={ref}
            value={internalValue}
            onChange={handleChange}
            {...props}
          />
        </div>
        {error && (
          <div className="flex items-center gap-2.5 self-stretch">
            <p className="text-10/regular text-theme-error">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
});

export default TextField;
