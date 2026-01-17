"use client";

import type { Lang } from "./data";

export default function LangToggle({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const items: Lang[] = ["uz", "ru", "en"];

  return (
    <div className="inline-flex items-center rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 p-1">
      {items.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2 py-1 text-xs rounded-lg transition ${
            lang === l
              ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950 font-semibold"
              : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          }`}
          aria-label={`Change language to ${l}`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
