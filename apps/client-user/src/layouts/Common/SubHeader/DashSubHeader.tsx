import React from "react";

const DashSubHeader: React.FC = () => {
  return (
    <div className="px-15 flex w-full flex-col gap-3 bg-blue-900 py-10 text-white">
      <p className="pl-[60px] text-30/bold">Dashboards</p>
      <p className="pl-[60px] text-16/regular">
        Check your earnings so far through affiliate activities and transactions.
      </p>
    </div>
  );
};

export default DashSubHeader;
