import Link from "next/link";
import React from "react";

interface SocialIconProps {
  icon: "linkedin" | "github";
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => {
  return (
    <Link
      href="/"
      className="tw-inline-flex tw-justify-center tw-items-center tw-w-[4.5rem] tw-h-[4.5rem] tw-bg-transparent tw-border-2 tw-border-solid tw-border-main-color tw-text-[2.5rem] tw-rounded-full tw-text-main-color tw-my-12 tw-mr-[1.5rem] tw-ml-0 tw-duration-300 tw-ease-in-out hover:tw-text-text-color hover:tw-scale-[1.3] hover:tw-translate-y-[-5px] hover:tw-shadow-glow-sm hover:tw-bg-main-color"
    >
      <i className={`bx bxl-${icon}`}></i>
    </Link>
  );
};

export default SocialIcon;
