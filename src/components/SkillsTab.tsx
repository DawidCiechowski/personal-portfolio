import { Icons  } from "@/utils/constants";
import Link from "next/link";
import React from "react";

interface SkillsTabProps {
    title: string;
    text: string;
    skills: unknown;
}

const SkillShowcase: React.FC<{item: {icon: Icons, refs: string}, index: number}> = ({item, index})=> {
  const icon = item.icon;
  const ref = item.refs;
  return (
    <Link
      href={ref}
      key={index}
      className="tw-flex tw-flex-col tw-cursor-pointer tw-justify-center tw-items-center tw-w-[5rem] tw-h-[5rem] tw-bg-transparent tw-border-2 tw-border-solid tw-border-main-color tw-text-[2.5rem] tw-rounded-full tw-text-main-color tw-mt-[1rem] tw-ml-0 tw-duration-300 tw-ease-in-out hover:tw-text-text-color hover:tw-scale-[1.3] hover:tw-translate-y-[-5px] hover:tw-shadow-glow-sm hover:tw-bg-main-color"
    >
      <i className={`${icon}`}></i>
      <div className="tw-text-[6px]">
        {icon.includes("bxl")
          ? icon.split("bxl-")[1].toUpperCase()
          : icon.split("-")[1].toUpperCase()}
      </div>
    </Link>
  )
}

const SkillTab: React.FC<{skillType: string, items: Array<unknown>}> = ({skillType, items}) => {
  return (
    <div className="">
      <h1 className="tw-font-bold tw-text-[1.5rem] lg:tw-text-[2rem] tw-pt-4 lg:tw-pt-8">{skillType}</h1>
      <div className="tw-pt-3 tw-grid tw-grid-cols-3 tw-gap-16 md:tw-gap-0 md:tw-grid-cols-4 tw-items-center tw-justify-center tw-text-main-color tw-font-semibold tw-text-[5rem]">
        {items.map((item, index) => {
          return (
            <SkillShowcase key={index} item={item} index={index} />
          )
        })}
      </div>
    </div>
  );
}

const SkillsTab: React.FC<SkillsTabProps> = ({title, text, skills}) => {
  const skillTypes = [
    {
      name: "Programming Languages",
      skills: skills.programmingLanguages,
    },
    {
      name: "Backend",
      skills: skills.backend,
    },
    {
      name: "Frontend",
      skills: skills.frontend,
    },
    {
      name: "Databases",
      skills: skills.databases,
    },
    {
      name: "Test Frameworks",
      skills: skills.testFrameworks,
    },
    {
      name: "Data Science Frameworks",
      skills: skills.dataScience,
    },
    {
      name: "Mobile",
      skills: skills.mobile,
    },
    {
      name: "Containers",
      skills: skills.container,
    },
    {
      name: "Runtime",
      skills: skills.runtime,
    },
    {
      name: "Web Servers",
      skills: skills.webServer,
    },
    {
      name: "Visualization Frameworks",
      skills: skills.visualization,
    },
    {
      name: "Other",
      skills: skills.other,
    },
  ];
  return (
    <div className="tw-overflow-auto tw-pl-[6%]">
      <h1 className="tw-text-white tw-font-bold tw-text-[3rem] tw-border-b-2 tw-border-b-main-color">
        {title}
      </h1>
      <p className="tw-font-semibold tw-text-[1.3rem] md:tw-text-[1.5rem] tw-text-slate-400 tw-my-4">
        {text}
      </p>
      {skillTypes
        .filter((item) => item.skills.length > 0)
        .map((item, index) => {
          return (
            <SkillTab key={index} skillType={item.name} items={item.skills} />
          );
        })}
    </div>
  );
}

export default SkillsTab;