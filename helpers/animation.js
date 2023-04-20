export const headerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, duration: 0.8 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

export const firstContentVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", mass: 1.2, damping: 10, delay: 0.5 },
  },
  exit: {
    x: "100vw",
    transition: { type: "spring", mass: 1.2, damping: 10, delay: 0.5 },
  },
};

export const secondVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeIn",
      delay: 0.5,
      duration: 1.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeOut",
      delay: 0.3,
      duration: 0.3,
    },
  },
};

export const secondContentVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", mass: 1.2, damping: 12, delay: 0.8 },
  },
  exit: {
    x: "100vw",
    transition: { type: "spring", mass: 1.2, damping: 10, delay: 0.5 },
  },
};

export const linkVariants = {
  hover: {
    scale: 1.2,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      delay: 0.2,
    },
  },
};

