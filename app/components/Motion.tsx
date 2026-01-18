"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";

export const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

type Props = { children: React.ReactNode; className?: string };

export function Stagger({ children, className }: Props) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({ children, className }: Props) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}

export const MotionItem = motion.div;
