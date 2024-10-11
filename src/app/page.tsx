import Facts from "@/components/Facts";
import HomePageButton from "@/components/HomePageButton";
import SocialIcon from "@/components/SocialIcons";
import Image from "next/image";
import { Icons } from "@/utils/constants";

export default function Home() {
  const homePageButtons: Array<{text: string, logo?: Icons}> = [{text: 'Download CV', logo: Icons.DOWNLOAD}, {text:"Contact"}];
  return (
    <div className="lg:tw-flex lg:tw-flex-row tw-items-center tw-flex-col-reverse tw-justify-center lg:tw-gap-[15rem] tw-py-[8rem] lg:tw-py-[12rem] tw-px-[8%]">
      <div className="tw-flex tw-flex-col tw-items-baseline tw-text-left tw-justify-center tw-mt-12">
        <h1 className="tw-text-[7rem] tw-py-4 tw-font-bold tw-mt-6 tw-leading-none">
          Hey I&apos;m \<br />
          <span className="tw-text-main-color">Dawid Ciechowski;</span>
        </h1>
        <h3 className="tw-text-[34px] tw-font-semibold tw-min-w-[280px]">
          I&apos;m a <span className="tw-relative text-animation-span"></span>
        </h3>
        <p className="tw-text-[1.5rem] tw-font-medium tw-leading[1.8] tw-max-w-[1000px] tw-pt-32 lg:tw-pt-4">
          I have 5 years of commercial experience spanning from{" "}
          <span className="tw-relative tw-text-main-color tw-font-semibold">
            backend to some frontend, through full-stack development and
            automation testing
          </span>
          . I thrive on turning ideas into reality through code, learning new
          frameworks and expanding my current knowledge. Beyond programming,
          I&apos;m a huge{" "}
          <span className="tw-relative tw-text-main-color tw-font-semibold">
            gaming enthusiast
          </span>{" "}
          — whether it&apos;s diving into tabletop RPGs like DnD, immersing
          myself in epic MMORPGs, or even crafting my own games. I&apos;m
          excited to bring my technical skills and love for learning new technologies together to
          create something amazing!
        </p>
        <div>
          <SocialIcon
            href={"https://www.linkedin.com/in/dawid-ciechowski/"}
            icon={Icons.LINKEDIN}
          ></SocialIcon>
          <SocialIcon
            href={"https://github.com/DawidCiechowski/"}
            icon={Icons.GITHUB}
          ></SocialIcon>
        </div>

        <div className="tw-flex tw-items-center tw-gap-[1.5rem]">
          {homePageButtons.map((item, index) => (
            <HomePageButton index={index} key={index} props={item} />
          ))}
        </div>

        <div className="tw-flex tw-items-center tw-gap-[5rem] tw-pt-[6rem]">
          <Facts value={5}>
            <p>
              Years of <br />
              Experience
            </p>
          </Facts>
          <Facts value={200}>
            <p>
              Technologies <br /> Mastered
            </p>
          </Facts>
          <Facts value={30}>
            <p>
              Projects
              <br />
              Started
            </p>
          </Facts>
        </div>
      </div>
      <div className="tw-rounded-full">
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
