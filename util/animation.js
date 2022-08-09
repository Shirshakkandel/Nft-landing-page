export const pageAnimation = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: 'easeOut', duration: 0.5 },
  },
};

export const fadeInUp = {
  hidden: { y: 60, opacity: 0 },
  show: { y: 0, opacity: 1, transition: {} },
};

export const fadeInDown = {
  hidden: { y: -60, opacity: 0 },
  show: { y: 0, opacity: 1, transition: {} },
};

export const boxVariant = {
  hidden: { opacity: 1, scale: 2 },
  show: { opacity: 0, scale: 0 },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.4 } },
};

export const staggerLate = {
  hidden: {},
  show: { transition: { staggerChildren: 0.8 } },
};

export const sectionAnimation = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.3, when: 'beforeChildren', duration: 0 } },
};

export const titleAnim = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: 'tween', ease: 'easeOut', duration: 0.75 },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { type: 'tween', ease: 'easeOut', duration: 1, delay: 0.5 },
  },
};

export const photoAnim = {
  hidden: { scale: 1.5, opacity: 0, overflow: 'hidden' },
  show: {
    scale: 1,
    opacity: 1,

    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 1,
      delay: 0.5,
    },
  },
};

export const reveal = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 1,
    },
  },
};
