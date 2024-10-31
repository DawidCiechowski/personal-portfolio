'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationLinks } from '@/utils/constants';

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="tw-hidden md:tw-flex">
      {navigationLinks.map((link, index) => {
        return (
          <Link
            href={link.path}
            className={`tw-text-[1.8rem] tw-ml-16 tw-font-semibold  ${
              pathname === link.path
                ? 'tw-text-main-color tw-border-b-[3px] tw-border-solid tw-border-main-color tw-duration-300 tw-ease-in-out tw'
                : 'tw-text-text-color hover:tw-text-main-color hover:tw-border-main-color hover:tw-border-b-[3px] hover:tw-border-solid tw-duration-300 tw-ease-linear tw-border-b-[3px] tw-border-solid tw-border-transparent'
            }`}
            key={index}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
