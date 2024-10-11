"use client";

import { navigationLinks } from "@/utils/constants";
import { usePathname } from "next/navigation";
import React from "react";

const MobileNav = () => {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="lg:tw-px-16 tw-px-6 tw-bg-white tw-shadow-md tw-flex tw-flex-wrap tw-items-center lg:tw-py-0 tw-py-2">
      <label
        htmlFor="menu-toggle"
        className="tw-cursor-pointer lg:tw-hidden block"
      >
        <svg
          className="tw-fill-current tw-text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="tw-hidden" type="checkbox" id="menu-toggle" />
      <div
        className="tw-hidden lg:tw-flex lg:tw-items-center lg:tw-w-auto tw-w-full"
        id="menu"
      >
        <nav>
          <ul className="tw-text-xl tw-text-center tw-items-center tw-gap-x-5 tw-pt-4 md:tw-gap-x-4 lg:tw-text-lg lg:tw-flex  lg:tw-pt-0">
            <li className="tw-py-2 lg:tw-py-0 ">
              <a
                className="tw-text-red-600 hover:tw-pb-4 hover:tw-border-b-4 hover:tw-border-yellow-400"
                href="#"
              >
                Blog
              </a>
            </li>
            <li className="tw-py-2 lg:tw-py-0 ">
              <a
                className="tw-text-red-600 hovetw-r:pb-4 hover:tw-border-b-4 hover:tw-border-yellow-400"
                href="#"
              >
                Projects
              </a>
            </li>
            <li className="tw-py-2 lg:tw-py-0 ">
              <a
                className="tw-text-red-600 hover:tw-pb-4 hover:tw-border-b-4 hover:tw-border-yellow-400"
                href="#"
              >
                Apps
              </a>
            </li>
            <li className="tw-py-2 lg:tw-py-0 ">
              <a
                className="tw-text-red-600 hover:tw-pb-4 hover:tw-border-b-4 hover:tw-border-yellow-400"
                href="#"
              >
                Designs
              </a>
            </li>
            <li className="tw-py-2 lg:tw-py-0 ">
              <a
                className="tw-text-red-600 hover:tw-pb-4 hover:tw-border-b-4 hover:tw-border-yellow-400"
                href="#"
              >
                My Journey
              </a>
            </li>
            <li className="tw-py-2 lg:tw-py-0 ">
              <a
                className="tw-text-red-600 hover:tw-pb-4 hover:tw-border-b-4 hover:tw-border-yellow-400"
                href="#"
              >
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default MobileNav;
