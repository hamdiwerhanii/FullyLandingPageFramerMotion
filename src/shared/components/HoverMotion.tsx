"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { HOVER_EFFECTS, type HoverEffect } from "@/shared/constants/motion";

const TAGS = { div: motion.div, figure: motion.figure } as const;

type HoverMotionProps = {
  effect: HoverEffect;
  as?: keyof typeof TAGS;
  className?: string;
  children: ReactNode;
};

export default function HoverMotion({ effect, as = "div", className, children }: HoverMotionProps) {
  const Tag = TAGS[as];

  return (
    <Tag whileHover={HOVER_EFFECTS[effect]} className={className}>
      {children}
    </Tag>
  );
}
