import type { Transition, Variants } from "framer-motion";

const EASE_OUT = [0.25, 0.46, 0.45, 0.94] as const;

const enter = (duration: number, delay = 0): Transition => ({
  duration,
  delay,
  ease: EASE_OUT,
});

export const STAGGER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

export const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: enter(0.6) },
};

export const SLIDE_FROM_LEFT: Variants = {
  hidden: { opacity: 0, x: -50, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1, transition: enter(0.7) },
};

export const SLIDE_FROM_RIGHT: Variants = {
  hidden: { opacity: 0, x: 50, scale: 0.9 },
  visible: { opacity: 1, x: 0, scale: 1, transition: enter(0.8, 0.2) },
};

const HOVER_TRANSITION = { duration: 0.2 };

export const HOVER_EFFECTS = {
  lift: { y: -5, scale: 1.02, transition: HOVER_TRANSITION },
  tilt: { scale: 1.1, rotate: 5, transition: HOVER_TRANSITION },
  grow: { scale: 1.05, transition: HOVER_TRANSITION },
};

export type HoverEffect = keyof typeof HOVER_EFFECTS;

export const IN_VIEW_OPTIONS = { once: true, margin: "-100px" } as const;
