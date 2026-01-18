    "use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxBlobs() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 700], [0, 140]);
  const y2 = useTransform(scrollY, [0, 700], [0, -110]);
  const y3 = useTransform(scrollY, [0, 700], [0, 90]);

  const opacity = useTransform(scrollY, [0, 700], [1, 0.35]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute -top-24 -left-28 h-72 w-72 rounded-full bg-slate-200/70 dark:bg-slate-800/45 blur-3xl"
      />
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute top-8 -right-28 h-80 w-80 rounded-full bg-emerald-200/60 dark:bg-emerald-900/25 blur-3xl"
      />
      <motion.div
        style={{ y: y3, opacity }}
        className="absolute -bottom-16 left-1/3 h-72 w-72 rounded-full bg-indigo-200/50 dark:bg-indigo-900/20 blur-3xl"
      />
    </div>
  );
}
