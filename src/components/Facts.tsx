'use client';

import React, { ReactNode } from 'react';
import CountUp from 'react-countup';

interface FactsProps {
  value: number;
  children: ReactNode;
}

const Fact: React.FC<FactsProps> = ({ value, children }) => {
  return (
    <div className="tw-flex tw-items-center tw-gap-1 tw-text-[1.1rem] md:tw-text-[1.7rem] tw-font-semibold tw-text-main-color">
      <CountUp
        end={value}
        duration={3}
        delay={2}
        className="tw-border-b-3px tw-border-solid tw-text-[4rem] lg:tw-text-[5rem] tw-font-bold tw-pr-4 tw-pt-[-2rem]"
      />
      {children}
    </div>
  );
};

export default Fact;
