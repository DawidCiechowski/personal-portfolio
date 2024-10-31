'use client';

import Fact from '@/components/Facts';
import SocialIcon from '@/components/SocialIcons';
import Image from 'next/image';
import { Icons } from '@/utils/constants';
import Link from 'next/link';

export default function Home() {
  const downloadCv = () => {
    const url = '/dawid-ciechowski-cv-2024.pdf';
    const link = document.createElement('a');
    link.href = url;
    link.download = 'dawid-ciechowski-cv-2024.pdf';
    link.click();
  };
  return (
    <div className="md:tw-flex-row tw-w-screen tw-items-center tw-flex tw-flex-col-reverse tw-justify-center md:tw-gap-[15rem] tw-py-[8rem] lg:tw-py-[12rem] tw-px-[8%]">
      <div className="tw-flex tw-flex-col tw-items-center lg:tw-items-baseline lg:tw-text-left tw-justify-center tw-mt-12">
        <h1 className="tw-text-[7rem] tw-py-4 tw-font-bold tw-mt-6 tw-leading-none">
          Hey I&apos;m \<br />
          <span className="tw-text-main-color">Dawid Ciechowski;</span>
        </h1>
        <h3 className="tw-text-[2.5rem] md:tw-text-[2.5rem] lg:tw-text-[3rem] tw-font-semibold tw-min-w-[280px] tw-mt-[4rem]">
          I&apos;m a <span className="tw-relative text-animation-span"></span>
        </h3>
        <p className="tw-text-[1.5rem] tw-font-medium tw-leading[1.8] tw-max-w-[1000px] tw-pt-16 sm:tw-pt-16 lg:tw-pt-4">
          I have 5 years of commercial experience spanning from{' '}
          <span className="tw-relative tw-text-main-color tw-font-semibold">
            backend to some frontend, through full-stack development and
            automation testing
          </span>
          . I thrive on turning ideas into reality through code, learning new
          frameworks and expanding my current knowledge. Beyond programming,
          I&apos;m a huge{' '}
          <span className="tw-relative tw-text-main-color tw-font-semibold">
            gaming enthusiast
          </span>{' '}
          — whether it&apos;s diving into tabletop RPGs like DnD, immersing
          myself in epic MMORPGs, or even crafting my own games. I&apos;m
          excited to bring my technical skills and love for learning new
          technologies together to create something amazing!
        </p>
        <div className="">
          <SocialIcon
            href={'https://www.linkedin.com/in/dawid-ciechowski/'}
            icon={Icons.LINKEDIN}
          ></SocialIcon>
          <SocialIcon
            href={'https://github.com/DawidCiechowski/'}
            icon={Icons.GITHUB}
          ></SocialIcon>
        </div>

        <div className="tw-flex tw-items-center tw-gap-[1.5rem]">
          <button
            onClick={downloadCv}
            className={`tw-py-4 tw-px-8 tw-shadow-glow-sm  tw-text-[1.6rem] tw-flex tw-items-center tw-justify-center tw-rounded-[4rem] tw-font-semibold tw-cursor-pointer tw-duration-300 tw-ease-in-out hover:tw-scale-105 hover:tw-shadow-glow-md ${
              //  "tw-bg-black tw-text-main-color tw-border-2 tw-border-solid tw-border-main-color tw-shadow-transparent hover:tw-shadow-glow-sm hover:tw-text-black hover:tw-bg-main-color"
              'tw-bg-main-color tw-border-transparent tw-border-2 tw-border-solid tw-text-black'
            }`}
          >
            {'Download CV'}
            {
              <i
                className={`tw-text-[2rem] tw-pl-4 tw-mt-[3px] ${Icons.DOWNLOAD}`}
                id="menu-icon"
              ></i>
            }
          </button>
          <Link
            href={'/contact'}
            className={`tw-py-4 tw-px-8 tw-shadow-glow-sm  tw-text-[1.6rem] tw-flex tw-items-center tw-justify-center tw-rounded-[4rem] tw-font-semibold tw-cursor-pointer tw-duration-300 tw-ease-in-out hover:tw-scale-105 hover:tw-shadow-glow-md ${'tw-bg-black tw-text-main-color tw-border-2 tw-border-solid tw-border-main-color tw-shadow-transparent hover:tw-shadow-glow-sm hover:tw-text-black hover:tw-bg-main-color'}`}
          >
            {'Contact'}
          </Link>
        </div>

        <div className="tw-flex tw-items-center tw-gap-[5rem] tw-pt-[6rem]">
          <Fact value={5}>
            <p>
              Years of <br />
              Experience
            </p>
          </Fact>
          <Fact value={40}>
            <p>
              Technologies <br /> Learned
            </p>
          </Fact>
          <Fact value={50}>
            <p>
              Projects
              <br />
              Started 😅
            </p>
          </Fact>
        </div>
      </div>
      <div className="tw-rounded-full">
        <Image
          className="tw-rounded-[50%] tw-relative tw-mb-[2rem] tw-min-w-[220px] tw-h-80 tw-w-80 md:tw-block md:tw-h-fit md:tw-w-fit tw-border-background tw-shadow-glow-sm tw-cursor-pointer tw-duration-[0.4s] tw-ease-in-out hover:tw-shadow-glow-xl"
          src="/self-portrait.jpg"
          width={500}
          height={500}
          alt="dwarf"
        />
      </div>
    </div>
  );
}
