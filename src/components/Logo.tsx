import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="tw-font-pixelated tw-animate-pulse tw-text-[3rem] tw-text-main-color tw-font-bold tw-cursor-pointer t tw-duration-300 tw-ease-linear hover:tw-scale-110"
    >
      <span className="tw-text-[4rem] tw-font-bold tw-text-main-color">{`\{`}</span>
      <span className="">DAWID</span>
      <span className="tw-text-[4rem] tw-font-bold tw-text-main-color">{`\}`}</span>
    </Link>
  );
};

export default Logo;
