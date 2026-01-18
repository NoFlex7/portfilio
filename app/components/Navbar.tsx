"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";
import type { Lang } from "./data";
import { COPY, PROFILE } from "./data";

type NavDict = {
  about: string;
  skills: string;
  exp: string;
  projects: string;
  services: string;
  contact: string;
};

const FALLBACK_NAV: NavDict = {
  about: "About",
  skills: "Skills",
  exp: "Experience",
  projects: "Projects",
  services: "Services",
  contact: "Contact",
};

export default function Navbar({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  const nav: NavDict = (COPY as any)?.nav?.[lang] ?? (COPY as any)?.nav?.en ?? FALLBACK_NAV;

  const items = useMemo(
    () => [
      { href: "#about", label: nav.about },
      { href: "#skills", label: nav.skills },
      { href: "#experience", label: nav.exp },
      { href: "#projects", label: nav.projects },
      { href: "#services", label: nav.services },
      { href: "#contact", label: nav.contact },
    ],
    [nav.about, nav.skills, nav.exp, nav.projects, nav.services, nav.contact]
  );

  useEffect(() => {
    const sectionEls = items.map((i) => document.querySelector(i.href)).filter(Boolean) as HTMLElement[];

    const onScroll = () => {
      const y = window.scrollY + 140;
      let current = "#home";
      for (const sec of sectionEls) {
        if (sec.offsetTop <= y) current = `#${sec.id}`;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  const onNavClick = (href: string) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -14, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="sticky top-0 z-50"
    >
      <div className="border-b border-slate-200/60 dark:border-slate-800/60 bg-white/55 dark:bg-slate-950/45 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
          <a href="#home" onClick={() => onNavClick("#home")} className="group inline-flex items-center gap-2 font-semibold tracking-wide">
            <span className="text-slate-950 dark:text-white">{PROFILE.fullName.split(" ")[0]}</span> 
            <span className="text-slate-500 dark:text-slate-400">.dev</span>
            <span className="ml-1 h-1.5 w-1.5 rounded-full bg-emerald-500/80 opacity-70 group-hover:opacity-100 transition" />
          </a>

          <nav className="hidden md:flex items-center gap-1 text-sm">
            {items.map((item) => {
              const isActive = active === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => onNavClick(item.href)}
                  className="relative px-3 py-2 rounded-xl transition select-none text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                >
                  {isActive && (
                    <motion.span
                      layoutId="navActivePill"
                      className="absolute inset-0 rounded-xl bg-slate-950/5 dark:bg-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <LangToggle lang={lang} setLang={setLang} />
            <ThemeToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-900/30 px-3 py-2 text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-900 transition"
              aria-label="Menu"
              title="Menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden border-b border-slate-200/60 dark:border-slate-800/60 bg-white/55 dark:bg-slate-950/45 backdrop-blur-xl"
          >
            <div className="mx-auto max-w-6xl px-4 py-3">
              <div className="grid gap-1 text-sm">
                {items.map((item, idx) => {
                  const isActive = active === item.href;
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => onNavClick(item.href)}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.03, duration: 0.2 }}
                      className={[
                        "rounded-xl px-3 py-2 transition",
                        "text-slate-700 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white",
                        "hover:bg-slate-950/5 dark:hover:bg-white/10",
                        isActive ? "bg-slate-950/5 dark:bg-white/10 font-semibold" : "",
                      ].join(" ")}
                    >
                      {item.label}
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
