'use client';

import { usePathname } from 'next/navigation';
import { Icons, navigationLinks } from '@/utils/constants';
import React from 'react';
import Link from 'next/link';

const MobileNav = () => {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="tw-bg-black tw-text-[4rem] tw-p-4">
      <div className="tw-flex tw-justify-between tw-items-center">
        <div>
          <button
            className="tw-text-white tw-focus:outline-none z-50"
            onClick={toggleMenu}
          >
            <i className={`${isMenuOpen ? Icons.MENU_LEFT : Icons.MENU}`}></i>
          </button>
        </div>
      </div>
      <div
        className={`tw-absolute tw-left-0 tw-w-full tw-mt-[4rem] tw-bg-gradient-to-b tw-z-[6] tw-from-black tw-to-slate-800 tw-transition-all tw-duration-500 tw-ease-in-out tw-overflow-hidden ${
          isMenuOpen ? 'tw-top-16 tw-max-h-screen' : 'tw-top-16 tw-max-h-0'
        } z-40`}
      >
        {navigationLinks.map((link, index) => {
          return (
            <Link
              href={link.path}
              className={`tw-text-[1.8rem] tw-font-semibold tw-block tw-p-4 ${
                pathName === link.path
                  ? 'tw-text-main-color tw-border-b-[3px] tw-border-solid tw-border-main-color tw-duration-300 tw-ease-in-out tw'
                  : 'tw-text-text-color hover:tw-text-black hover:tw-border-secondary hover:tw-border-b-[3px] hover:tw-border-solid hover:tw-bg-gradient-to-r hover:tw-from-main-color hover:tw-to-slate-900 hover:tw-duration-300 tw-duration-300 tw-ease-linear tw-border-b-[3px] tw-border-solid tw-border-transparent'
              }`}
              key={index}
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
