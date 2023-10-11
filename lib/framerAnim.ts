import { Variants } from 'framer-motion';

// Variants for pages
export const pageVariant: Variants = {
  pageInitial: {
    opacity: 0,
    y: 100,
  },

  pageEnter: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
    },
  },

  pageDelayEnter: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      type: 'spring',
    },
  },

  projectList: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Variants for project cards
export const cardVariant: Variants = {
  projectCardInitial: {
    opacity: 0,
    y: 150,
  },

  projectCard: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      delay: i * 0.2,
    },
  }),
};

// Variants for Contact page
export const contactDuration: number = 0.5;
export const notifKeyframes = {
  opacity: [0, 1, 1, 1, 1, 1, 1, 0],
  y: [-200, -100, -100, -100, -100, -100, -200, -500],
};

export const notifVariants: Variants = {
  before: {
    opacity: 0,
    y: -200,
  },
  after: {
    opacity: notifKeyframes.opacity,
    y: notifKeyframes.y,
  },
};

// Friend request Variant
export const friendRequestVariant: Variants = {
  before: { opacity: 1, y: 100 },
  after: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
    },
  },
};

// Contact Card Variant
export const contactVariants: Variants = {
  before: { opacity: 0, y: 100 },
  after: {
    opacity: 1,
    y: 0,
    transition: {
      delay: contactDuration,
      type: 'spring',
    },
  },
};
