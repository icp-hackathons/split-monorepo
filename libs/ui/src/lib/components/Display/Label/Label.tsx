import clsx from "clsx";
import type { UIProps } from "../../../props";
import { Tooltip } from "../../Feedback/Tooltip/Tooltip";

export interface LabelProps extends UIProps.Label {
  description?: string;
  tooltip?: string;
}

export const Label = ({ description, tooltip, className, children, htmlFor, ...props }: LabelProps) => {
  return (
    <div className={clsx("flex items-center gap-1 ")}>
      <label htmlFor={htmlFor} className={className} {...props}>
        {!!description && <p className="text-16/semi-bold text-theme-black">{description}</p>}
      </label>
      {/* ToolTip */}
      {!!tooltip && <Tooltip message={tooltip} />}
    </div>
  );
};

export default Label;
