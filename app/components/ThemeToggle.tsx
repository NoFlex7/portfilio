"use client";

import { useEffect, useState } from "react";
import { IconMoon, IconSun } from "./icons";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefersDark;

    setDark(isDark);

    const root = document.documentElement;
    root.classList.remove("dark");
    if (isDark) root.classList.add("dark");
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => {
        const next = !dark;
        setDark(next);
        const root = document.documentElement;
        root.classList.remove("dark");
        if (next) root.classList.add("dark");
        localStorage.setItem("theme", next ? "dark" : "light");
      }}
      className="inline-flex items-center justify-center rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-2 hover:bg-white dark:hover:bg-slate-900 transition"
      aria-label="Theme toggle"
      title="Theme"
    >
      {dark ? <IconMoon className="h-5 w-5" /> : <IconSun className="h-5 w-5" />}
    </button>
  );
}
