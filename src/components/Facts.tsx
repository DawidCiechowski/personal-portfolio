import React, { ReactNode } from "react";

interface FactsProps {
  value: string;
  children: ReactNode;
}

const Facts: React.FC<FactsProps> = ({ value, children }) => {
  return (
    <div className="tw-flex tw-items-center tw-gap-1 tw-text-[1.7rem] tw-font-semibold tw-text-main-color">
      <span className="tw-border-b-3px tw-border-solid tw-text-[5rem] tw-font-bold tw-pr-4 tw-pt-[-2rem]">
        {value}
      </span>
      {children}
    </div>
  );
};

export default Facts;
