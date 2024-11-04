'use client';

import React from 'react';
import { Icons } from '@/utils/constants';

interface TimelineItemProps {
  index: number;
  date: string;
  role: string;
  companyName: string;
  description: Array<string>;
  techStack: Array<Icons>;
  nda: boolean;
}
const TimelineItem: React.FC<TimelineItemProps> = props => {
  const isOdd = ((props.index + 1) & 1) === 1;
  return (
    <div
      className={`tw-mb-[40px] tw-w-full tw-relative ${isOdd ? 'md:tw-pr-half-30px' : 'md:tw-pl-half-30px'}`}
    >
      <div className="tw-hidden md:tw-block tw-h-[21px] tw-w-[21px] tw-bg-main-color tw-shadow-glow-lg tw-absolute tw-left-half-n8px tw-rounded-full tw-top-[10px]"></div>
      <div className="tw-text-[20px] tw-font-bold tw-text-white tw-mt-[6px] tw-mx-0 tw-mb-[15px]">
        {props.date}
      </div>
      <div className="tw-bg-background tw-border-[3px] tw-py-[30px] tw-px-[50px] tw-rounded-[4rem] tw-shadow-glow-tiny tw-border-solid tw-border-main-color tw-duration-300 tw-ease-in-out hover:tw-scale-105 hover:tw-shadow-glow-sm">
        <h2 className="tw-text-[24px] tw-text-white tw-mt-0 tw-mx-0 tw-mb-[10px] tw-border-b-4 tw-rounded-lg tw-border-main-color">
          {props.role}
        </h2>
        <h3 className="tw-text-[20px] tw-font-semibold tw-pb-2">
          {props.companyName}
        </h3>
        <ul className="tw-list-disc">
          {props.description.map((item, index) => {
            return (
              <li
                key={index}
                className="tw-text-white tw-text-[16px] tw-font-light tw-leading-[22px]"
              >
                {item}
              </li>
            );
          })}
        </ul>
        {props.nda ? (
          <div className="tw-text-white tw-text-[1.2rem] tw-italic tw-py-2">
            NDA - cannot disclose further details
          </div>
        ) : (
          <></>
        )}
        <div className="tw-pt-3 tw-grid tw-gap-16 md:tw-gap-0 tw-grid-cols-4 tw-items-center tw-justify-center tw-text-main-color tw-font-semibold tw-text-[5rem]">
          {props.techStack.map((item, index) => {
            return (
              <div
                key={index}
                className="tw-flex tw-flex-col tw-cursor-pointer tw-justify-center tw-items-center tw-w-[5rem] tw-h-[5rem] tw-bg-transparent tw-border-2 tw-border-solid tw-border-main-color tw-text-[2.5rem] tw-rounded-full tw-text-main-color tw-my-12 tw-mr-[1.5rem] tw-ml-0 tw-duration-300 tw-ease-in-out hover:tw-text-text-color hover:tw-scale-[1.3] hover:tw-translate-y-[-5px] hover:tw-shadow-glow-sm hover:tw-bg-main-color"
              >
                <i className={`${item}`}></i>
                <div className="tw-text-[6px]">
                  {item.includes('bxl')
                    ? item.split('bxl-')[1].toUpperCase()
                    : item.split('-')[1].toUpperCase()}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
