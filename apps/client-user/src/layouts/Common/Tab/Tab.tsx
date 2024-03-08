import { useEffect, useRef, useState } from "react";

interface TabProps {
  tabs: Array<{
    name: string;
    element: JSX.Element;
  }>;
}

export const Tab = ({ tabs }: TabProps) => {
  const [openMenuNum, setOpenMenuNum] = useState<number>(-1);
  const [{ left, top }, setMenuPosition] = useState<{ left: number; top: number }>({ left: 0, top: 0 });

  const lineRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lineRef.current && menuRef.current) {
      const lineRect = lineRef.current.getBoundingClientRect();
      console.log(lineRect);
      const menuRect = menuRef.current.getBoundingClientRect();
      const newLeft = lineRect.left + lineRect.width / 2 - menuRect.width / 2;
      const newTop = lineRect.bottom;
      setMenuPosition({ left: newLeft, top: newTop });
    }
  }, [openMenuNum]);

  return (
    <ul className="flex-start inline-flex h-8 gap-[50px]">
      {tabs.map((tab, index) => {
        return (
          <li
            key={tab.name}
            className="align-center flex flex-col justify-start gap-[5px] text-center text-20/semi-bold text-theme-black"
            onMouseEnter={() => setOpenMenuNum(index)}
          >
            {tab.name}
            {openMenuNum === index && (
              <>
                <div ref={lineRef} className="h-0.5 self-stretch bg-theme-black" />
                <div
                  ref={menuRef}
                  className="absolute mt-[34px] w-[425px]"
                  style={{ left, top }}
                  onMouseLeave={() => setOpenMenuNum(-1)}
                >
                  {tab.element}
                </div>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
};
