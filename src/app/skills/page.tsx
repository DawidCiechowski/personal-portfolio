'use client';

import SkillsTab from "@/components/SkillsTab";
import { skills } from "@/utils/constants";
import React from "react";

enum SkillType {
    Professional, 
    Personal
}

const Skills = () => {
    const [skillType, setSkillType] = React.useState(SkillType.Professional);
    const professional = skills.professional;
    const personal = skills.personal;

    return (
      <div className="tw-flex tw-flex-col lg:tw-grid lg:tw-grid-cols-2 lg:tw-py-[10rem] tw-px-[12%] tw-min-h-[70vh] tw-w-screen">
        <div className="tw-items-center tw-justify-center tw-flex tw-flex-col tw-pt-[4rem] lg:tw-pt-0 lg:tw-h-[50vh]">
          <button
            onClick={() => setSkillType(SkillType.Professional)}
            className={`${
              skillType === SkillType.Professional
                ? "active-skill-button"
                : "inactive-skill-button"
            }`}
          >
            Professional
          </button>
          <button
            onClick={() => setSkillType(SkillType.Personal)}
            className={`${
              skillType === SkillType.Personal
                ? "active-skill-button"
                : "inactive-skill-button"
            }`}
          >
            Personal
          </button>
        </div>
        <div className="tw-items-center tw-justify-center tw-flex tw-flex-col tw-mt-10 lg:tw-h-[50vh]">
          {skillType === SkillType.Professional && (
            <SkillsTab title={professional.title} text={professional.text} skills={professional.skills}/>
          )}
          {skillType === SkillType.Personal && <SkillsTab title={personal.title} text={personal.text} skills={personal.skills} />}
        </div>
      </div>
    );
}

export default Skills;