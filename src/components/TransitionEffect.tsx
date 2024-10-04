"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import TransitionElement from "./TransitionElement";

const TransitionEffect = () => {
  const pathName = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathName}>
          <div className="tw-h-screen tw-w-screen tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-pointer-events-none tw-z-40 tw-flex">
            <TransitionElement />
          </div>

          <motion.div
            className="tw-h-screen tw-w-screen tw-fixed tw-bg-background tw-top-0 tw-pointer-events-none tw-z-[5]"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.3, ease: "easeInOut" },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default TransitionEffect;
