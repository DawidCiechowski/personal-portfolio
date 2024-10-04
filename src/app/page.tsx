import Facts from "@/components/Facts";
import HomePageButton from "@/components/HomePageButton";
import SocialIcon from "@/components/SocialIcons";
import Image from "next/image";

export default function Home() {
  const homePageButtons: Array<string> = ["Download CV", "Contact"];
  return (
    <div className="tw-flex tw-items-center tw-justify-center md:tw-gap-[15rem] tw-py-[8rem] xl:tw-py-[12rem] tw-px-[8%]">
      <div className="tw-flex tw-flex-col tw-items-baseline tw-text-left tw-justify-center tw-mt-12">
        <h1 className="tw-text-[7rem] tw-font-bold tw-mt-6 tw-leading-none">
          Hey I&apos;m \<br />
          <span className="tw-text-main-color">Dawid Ciechowski;</span>
        </h1>
        <h3 className="tw-text-[34px] tw-font-semibold tw-min-w-[280px]">
          I&apos;m a <span className="tw-relative text-animation-span"></span>
        </h3>
        <p className="tw-text-[1.5rem] tw-font-medium tw-leading[1.8] tw-max-w-[1000px] tw-pt-32 lg:tw-pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sunt
          laudantium, reprehenderit et omnis beatae ipsa ratione quae animi
          architecto, impedit exercitationem. Excepturi consequuntur nulla
          temporibus exercitationem voluptatibus reprehenderit nesciunt.
        </p>

        <div>
          <SocialIcon icon="linkedin"></SocialIcon>
          <SocialIcon icon="github"></SocialIcon>
        </div>

        <div className="tw-flex tw-items-center tw-gap-[1.5rem]">
          {homePageButtons.map((item, index) => (
            <HomePageButton index={index} key={index}>
              {item}
            </HomePageButton>
          ))}
        </div>

        <div className="tw-flex tw-items-center tw-gap-[5rem] tw-pt-[6rem]">
          <Facts value={"5"}>
            <p>
              Years of <br />
              Experience
            </p>
          </Facts>
          <Facts value={"5"}>
            <p>
              Technologies <br /> Mastered
            </p>
          </Facts>
          <Facts value={"5"}>
            <p>
              Projects
              <br />
              Started
            </p>
          </Facts>
        </div>
      </div>
      <div className="tw-rounded-full tw-invisible md:tw-visible">
        <Image
          className="tw-relative tw-top-12 tw-border-background tw-w-[32vw] tw-rounded-full tw-shadow-glow-sm tw-cursor-pointer tw-duration-[0.4s] tw-ease-in-out hover:tw-shadow-glow-xl"
          src="/dwarf.jpg"
          width={614}
          height={614}
          alt="dwarf"
        />
      </div>
    </div>
  );
}
