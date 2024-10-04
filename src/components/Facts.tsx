'use client';

import React, { ReactNode } from "react";
import CountUp from "react-countup";

interface FactsProps {
  value: number;
  children: ReactNode;
}

const Facts: React.FC<FactsProps> = ({ value, children }) => {
  return (
    <div className="tw-flex tw-items-center tw-gap-1 tw-text-[1.7rem] tw-font-semibold tw-text-main-color">
      <CountUp end={value} duration={3} delay={2} className="tw-border-b-3px tw-border-solid tw-text-[5rem] tw-font-bold tw-pr-4 tw-pt-[-2rem]" />
      {children}
    </div>
  );
};

export default Facts;
