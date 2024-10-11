import ExperiencePage from "@/components/ExperiencePage";
import { educationData } from "@/utils/constants";

const Education = () => {
  return (
    <div className=" tw-py-[10rem] tw-px-[12%] tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-screen tw-font-pixelated">
      <h1 className="tw-text-[4rem] md:tw-text-[8rem] tw-text-center tw-my-[5rem] tw-mx-0 tw-text-main-color">
        Education<span className="tw-text-text-color">;</span>
      </h1>

      <div className="md:tw-grid-cols-2 md:tw-grid tw-flex tw-flex-col tw-overflow-auto tw-gap-8 tw-w-full tw-min-w-[200px] tw-py-[6rem] tw-px-[3rem]">
        {educationData.map((item, key) => {
          return (
            <ExperiencePage
              key={key}
              startYear={item.startYear}
              endYear={item.endYear}
              institution={item.institution}
              role={item.role}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Education;
