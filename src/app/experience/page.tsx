import TimelineItem from "@/components/TimelineItem";
import { workExperience } from "@/utils/constants";
const Experience = () => {
    return (
      <div className="tw-py-[100px] tw-px-[15px] tw-w-screen tw-h-screen">
        <h2 className="tw-text-[4rem] md:tw-text-[8rem] tw-text-center tw-my-[5rem] tw-mx-0 tw-text-main-color">My experience<span className="tw-text-text-color">;</span></h2>

        <div className="tw-max-w-[1200px] tw-m-auto tw-flex tw-flex-wrap tw-relative before:tw-content-[''] before:tw-absolute before:tw-w-[5px] before:tw-h-full before:tw-bg-main-color before:tw-left-half-n1px">
          {workExperience.map((item, index) => <TimelineItem key={index} index={index} date={item.date} role={item.role} companyName={item.company} description={item.description} techStack={item.techStack} nda={item.nda}/>
          )}
        </div>
      </div>
    );
}

export default Experience;