import { Icons  } from "@/utils/constants";
import Link from "next/link";
import React from "react";

interface SkillsTabProps {
    title: string;
    text: string;
    skills: unknown;
}

// TODO: Redefine all types to remove ts-ignore comments, once the website design is finalised. 
// To those interested I use TodoTree extension in VS code, so I can always easily comeback to those todos, so they won't disappear.
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
            //@ts-ignore
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
      //@ts-ignore
      skills: skills.programmingLanguages,
    },
    {
      name: "Backend",
      //@ts-ignore
      skills: skills.backend,
    },
    {
      name: "Frontend",
      //@ts-ignore
      skills: skills.frontend,
    },
    {
      name: "Databases",
      //@ts-ignore
      skills: skills.databases,
    },
    {
      name: "Test Frameworks",
      //@ts-ignore
      skills: skills.testFrameworks,
    },
    {
      name: "Data Science Frameworks",
      //@ts-ignore
      skills: skills.dataScience,
    },
    {
      name: "Mobile",
      //@ts-ignore
      skills: skills.mobile,
    },
    {
      name: "Containers",
      //@ts-ignore
      skills: skills.container,
    },
    {
      name: "Dependency Management Frameworks",
      //@ts-ignore
      skills: skills.dependencyManagement,
    },
    {
      name: "Runtime",
      //@ts-ignore
      skills: skills.runtime,
    },
    {
      name: "Web Servers",
      //@ts-ignore
      skills: skills.webServer,
    },
    {
      name: "Visualization Frameworks",
      //@ts-ignore
      skills: skills.visualization,
    },
    {
      name: "Other",
      //@ts-ignore
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