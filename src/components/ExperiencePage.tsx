'use client'

import React from "react";
import CountUp from "react-countup";

interface ExpProps {
    startYear: number;
    endYear?: number | 'Current';
    role: string;
    institution: string;
}

const ExperiencePage: React.FC<ExpProps> = (props) => {
    return (
      <div className="tw-flex tw-w-3/4 tw-ml-16 tw-flex-col tw-pl-[3rem] tw-pr-[8rem] tw-py-[3rem] tw-bg-secondary tw-rounded-lg tw-min-h-[100px] tw-shadow-glow-sm tw-cursor-pointer hover:tw-shadow-glow-md tw-duration-300 hover:tw-scale-110">
        <div className="tw-flex tw-gap-6 tw-text-main-color tw-text-[1.2rem] md:tw-text-[1.8rem] tw-font-semibold">
          <CountUp
            end={props.startYear}
            delay={1.5}
            duration={3}
            className="md:tw-text-[1.8rem] tw-font-semibold"
          />

          {props.endYear && <p>-</p>}
          {props.endYear && typeof props.endYear !== 'string' && (
            <CountUp
              end={props.endYear}
              delay={1.5}
              duration={3}
              className="tmd:tw-text-[1.8rem] tw-font-semibold"
            />
          )}
          {props.endYear && typeof props.endYear === 'string' && <p>{props.endYear}</p>}
        </div>

        <div className="tw-pt-4">
          <h1 className="tw-text-white tw-font-semibold tw-text-[1.3rem] md:tw-text-[2rem]">
            {props.role}
          </h1>
        </div>

        <p className="tw-text-[1.1rem] md:tw-text-[1.7rem] tw-text-text-color tw-pt-[1rem]">
          <span className="tw-text-main-color">•</span> {props.institution}
        </p>
      </div>
    );
}

export default ExperiencePage;