import React from "react";

const SubHeader: React.FC = () => {
  return (
    <div className="px-15 flex w-full flex-col gap-3 bg-blue-900 py-10 text-white">
      <p className="pl-[60px] text-30/bold">Register Products</p>
      <p className="pl-[60px] text-16/regular">
        Enlist your product on Split and start promoting it to a broader audience.
      </p>
    </div>
  );
};

export default SubHeader;
