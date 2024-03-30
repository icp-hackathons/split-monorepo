/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import Image from "next/image";
import Success from "~/client-demo/public/shared/icons/Success.png";
import { useToastContext } from "~/client-demo/src/context/ToastContext";

export interface ToastProps {
  message: string;
}

export const Toast = ({ message }: ToastProps) => {
  const { setToastContext } = useToastContext();
  const clearToast = () => {
    setToastContext(null);
  };

  return (
    <div
      className="fixed top-7 z-50 inline-flex w-full justify-center"
      tabIndex={0}
      style={{
        animationName: "fadeout",
        animationDuration: "4s",
        animationIterationCount: "1",
        animationFillMode: "both",
      }}
      onAnimationEnd={clearToast}
    >
      <style>
        {`
          @keyframes fadeout {
            0% {
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            80% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
        `}
      </style>
      <div className="flex items-center justify-center gap-3 rounded-[20px] bg-theme-blackTransparent px-5 py-3">
        <Image src={Success} alt="Success" width={15} height={15} />
        <div className="text-16/regular text-theme-white">{message}</div>
      </div>
    </div>
  );
};
