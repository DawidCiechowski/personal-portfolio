import Link from "next/link";
import React from "react";
interface HomePageButtonProps {
  index: number;
  children: React.ReactNode;
}
const HomePageButton: React.FC<HomePageButtonProps> = ({ index, children }) => {
  return (
    <Link
      href="/home"
      className={`tw-inline-block tw-py-4 tw-px-8 tw-shadow-glow-sm  tw-text-[1.6rem]  tw-rounded-[4rem] tw-font-semibold tw-cursor-pointer tw-duration-300 tw-ease-in-out hover:tw-scale-105 hover:tw-shadow-glow-md ${
        (index & 1) === 1
          ? "tw-bg-black tw-text-main-color tw-border-2 tw-border-solid tw-border-main-color tw-shadow-transparent hover:tw-shadow-glow-sm hover:tw-text-black hover:tw-bg-main-color"
          : "tw-bg-main-color tw-border-transparent tw-border-2 tw-border-solid tw-text-black"
      }`}
    >
      {children}
    </Link>
  );
};

export default HomePageButton;
