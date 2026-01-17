"use client";
import { useState } from "react";

export default function CopyText({ text }: { text: string }) {
  const [ok, setOk] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(text);
        setOk(true);
        setTimeout(() => setOk(false), 1200);
      }}
      className="text-xs text-slate-500 hover:text-slate-950 dark:hover:text-white"
      aria-label="Copy"
      title="Copy"
    >
      {ok ? "Copied ✓" : "Copy"}
    </button>
  );
}
