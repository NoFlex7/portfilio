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
    <div className="inline-flex rounded-xl border border-slate-800 bg-slate-900/40 p-1">
      {items.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-2 text-sm rounded-lg ${
            lang === l ? "bg-sky-500 text-slate-950 font-semibold" : "text-slate-200 hover:bg-slate-900"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
