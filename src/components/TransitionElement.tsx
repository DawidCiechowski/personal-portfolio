import { motion } from 'framer-motion';
const stairAnimation = {
  initial: {
    bottom: '0%',
  },
  animate: {
    bottom: '100%',
  },
  exit: {
    bottom: ['100%', '0%'],
  },
};

const reverseIndex = (index: number) => {
  const totalSteps = 8;
  return totalSteps - index - 1;
};

const TransitionElement = () => {
  return (
    <>
      {[...Array(8)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
              delay: reverseIndex(index) * 0.1,
            }}
            className="tw-h-full tw-w-full tw-bg-gradient-to-b tw-from-slate-900 tw-to-slate-800 tw-relative"
          />
        );
      })}
    </>
  );
};

export default TransitionElement;
