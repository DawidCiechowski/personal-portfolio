"use client";

import { navigationLinks } from "@/utils/constants";
import { usePathname } from "next/navigation";
import React from "react";

const MobileNav = () => {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="">Motion</div>
  );
};

export default MobileNav;
