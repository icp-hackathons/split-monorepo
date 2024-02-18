import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import TooltipIcon from "~/ui/public/icons/TooltipIcon.png";
import TooltipTail from "~/ui/public/icons/TooltipTail.png";
import type { UIProps } from "../../../props";

export interface TooltipProps extends UIProps.Div {
  message: string;
}

export const Tooltip = ({ message }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [{ left, top }, setTooltipPosition] = useState<{ left: number; top: number }>({ left: 0, top: 0 });

  const iconRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  useEffect(() => {
    if (iconRef.current && tooltipRef.current) {
      const iconRect = iconRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const newLeft = iconRect.left + iconRect.width / 2 - tooltipRect.width / 2;
      const newTop = iconRect.bottom + 5;
      setTooltipPosition({ left: newLeft, top: newTop });
    }
  }, [showTooltip]);

  return (
    <div ref={iconRef} className="inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Image src={TooltipIcon} alt="TooltipIcon" width={12} height={12} />
      {showTooltip && (
        <div className="absolute flex flex-col items-center" style={{ maxWidth: 200, left, top }}>
          <Image src={TooltipTail} alt="TooltipTail" width={11} height={8} />
          <div
            ref={tooltipRef}
            className={clsx(
              "flex items-center justify-center whitespace-pre-wrap break-words rounded-[5px] px-3 py-1",
              "bg-theme-blackTransparent text-10/regular text-theme-white",
            )}
          >
            {message}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
