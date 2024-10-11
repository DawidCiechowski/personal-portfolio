'use client';

import React from "react";

enum SkillType {
    Professional, 
    Personal
}

const Skills = () => {
    const [skillType, setSkillType] = React.useState(SkillType.Professional)

    return (
      <div className="tw-grid tw-grid-cols-2 tw-py-[10rem] tw-px-[12%] tw-w-screen">
        <div className="tw-items-center tw-justify-center tw-flex tw-flex-col tw-h-[50vh] tw-rounded-xl ">
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
        <div>World</div>
      </div>
    );
}

export default Skills;