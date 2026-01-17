"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";
import type { Lang } from "./data";
import { COPY, PROFILE } from "./data";

export default function Navbar({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const [open, setOpen] = useState(false);
  const nav = COPY.nav[lang];

  const items = [
    { href: "#about", label: nav.about },
    { href: "#skills", label: nav.skills },
    { href: "#experience", label: nav.exp },
    { href: "#projects", label: nav.projects },
    { href: "#services", label: nav.services },
    { href: "#contact", label: nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-3">
        <a href="#home" className="font-semibold tracking-wide">
          <span className="text-slate-950 dark:text-white">
            {PROFILE.fullName.split(" ")[0]}
          </span>
          <span className="text-slate-500 dark:text-slate-400">.dev</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
          {items.map((x) => (
            <a key={x.href} href={x.href} className="hover:text-slate-950 dark:hover:text-white">
              {x.label}
            </a>
          ))}
        </nav>

  
        <div className="flex items-center gap-2">
          <LangToggle lang={lang} setLang={setLang} />
          <ThemeToggle />
          <button
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 px-3 py-2"
            onClick={() => setOpen((s) => !s)}
            aria-label="Menu"
            title="Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200/70 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-300">
            {items.map((x) => (
              <a key={x.href} href={x.href} onClick={() => setOpen(false)}>
                {x.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
