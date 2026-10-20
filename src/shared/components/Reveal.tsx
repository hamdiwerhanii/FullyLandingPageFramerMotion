"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { FADE_UP, IN_VIEW_OPTIONS, STAGGER } from "@/shared/constants/motion";

const GROUP_TAGS = { div: motion.div, ul: motion.ul } as const;
const ITEM_TAGS = { div: motion.div, li: motion.li } as const;

type RevealGroupProps = {
  children: ReactNode;
  as?: keyof typeof GROUP_TAGS;
  className?: string;
  playOnMount?: boolean;
  variants?: Variants;
};

export function RevealGroup({
  children,
  as = "div",
  className,
  playOnMount = false,
  variants = STAGGER,
}: RevealGroupProps) {
  const Tag = GROUP_TAGS[as];

  return (
    <Tag
      className={className}
      variants={variants}
      initial="hidden"
      {...(playOnMount
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: IN_VIEW_OPTIONS })}
    >
      {children}
    </Tag>
  );
}

type RevealItemProps = {
  children: ReactNode;
  as?: keyof typeof ITEM_TAGS;
  className?: string;
  variants?: Variants;
};

export function RevealItem({ children, as = "div", className, variants = FADE_UP }: RevealItemProps) {
  const Tag = ITEM_TAGS[as];

  return (
    <Tag className={className} variants={variants}>
      {children}
    </Tag>
  );
}
