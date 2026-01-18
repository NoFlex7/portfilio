"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const denom = h.scrollHeight - h.clientHeight;
      const scrolled = denom > 0 ? (h.scrollTop / denom) * 100 : 0;
      setP(scrolled);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-[2px] w-full z-[60]">
      <div className="h-full bg-slate-950 dark:bg-white transition-[width]" style={{ width: `${p}%` }} />
    </div>
  );
}
