"use client";
import { useEffect, useState } from "react";
import { IconArrowRight } from "./icons";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 rounded-full border border-slate-200/70 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-3 shadow-sm hover:shadow"
      aria-label="Back to top"
      title="Back to top"
    >
      <IconArrowRight className="h-4 w-4 rotate-[-90deg]" />
    </button>
  );
}
