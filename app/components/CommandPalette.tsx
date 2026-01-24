"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Lang } from "./data";
import { PROFILE } from "./data";
import { ui } from "./ui";

type Item = { label: string; action: () => void; hint?: string };

export default function CommandPalette({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  const isMac =
    typeof navigator !== "undefined" &&
    typeof navigator.platform === "string" &&
    navigator.platform.toLowerCase().includes("mac");

  // ✅ FIX: e.key undefined bo‘lishi mumkin (Windows/IME) → safe lowercasing
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const key = typeof e.key === "string" ? e.key.toLowerCase() : "";

      if ((e.ctrlKey || e.metaKey) && key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }

      if (key === "escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const items: Item[] = useMemo(() => {
    const go = (id: string) => () => {
      setOpen(false);
      setQ("");
      document
        .querySelector(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const t = {
      open: lang === "uz" ? "Ochish" : lang === "ru" ? "Открыть" : "Open",
      contact:
        lang === "uz" ? "Kontakt" : lang === "ru" ? "Контакты" : "Contact",
      projects:
        lang === "uz" ? "Loyihalar" : lang === "ru" ? "Проекты" : "Projects",
      about:
        lang === "uz" ? "Men haqimda" : lang === "ru" ? "Обо мне" : "About",
      skills:
        lang === "uz"
          ? "Ko'nikmalar"
          : lang === "ru"
          ? "Навыки"
          : "Skills",
      exp: lang === "uz" ? "Tajriba" : lang === "ru" ? "Опыт" : "Experience",
      services:
        lang === "uz" ? "Xizmatlar" : lang === "ru" ? "Услуги" : "Services",
      copyEmail:
        lang === "uz"
          ? "Email nusxa olish"
          : lang === "ru"
          ? "Скопировать email"
          : "Copy email",
      copyPhone:
        lang === "uz"
          ? "Telefon nusxa olish"
          : lang === "ru"
          ? "Скопировать telefon"
          : "Copy phone",
      telegram: "Telegram",
      github: "GitHub",
    };

    return [
      { label: `${t.open}: ${t.about}`, hint: "about", action: go("#about") },
      { label: `${t.open}: ${t.skills}`, hint: "skills", action: go("#skills") },
      {
        label: `${t.open}: ${t.exp}`,
        hint: "experience",
        action: go("#experience"),
      },
      {
        label: `${t.open}: ${t.projects}`,
        hint: "projects",
        action: go("#projects"),
      },
      {
        label: `${t.open}: ${t.services}`,
        hint: "services",
        action: go("#services"),
      },
      {
        label: `${t.open}: ${t.contact}`,
        hint: "contact",
        action: go("#contact"),
      },
      {
        label: t.copyEmail,
        hint: PROFILE.email,
        action: async () => {
          await navigator.clipboard.writeText(PROFILE.email);
          setOpen(false);
        },
      },
      {
        label: t.copyPhone,
        hint: PROFILE.phone,
        action: async () => {
          await navigator.clipboard.writeText(PROFILE.phone);
          setOpen(false);
        },
      },
      {
        label: t.telegram,
        hint: "open",
        action: () =>
          window.open(PROFILE.links.telegram, "_blank", "noreferrer"),
      },
      {
        label: t.github,
        hint: "open",
        action: () => window.open(PROFILE.links.github, "_blank", "noreferrer"),
      },
    ];
  }, [lang]);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return items;
    return items.filter((i) =>
      (i.label + " " + (i.hint ?? "")).toLowerCase().includes(s)
    );
  }, [q, items]);

  return (
    <>
      {/* Hint button (desktop) */}
      <button
        onClick={() => setOpen(true)}
        className="hidden md:inline-flex items-center gap-2 rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 px-3 py-2 text-xs text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-900 transition"
        title={isMac ? "⌘ + K" : "Ctrl + K"}
      >
        {isMac ? "⌘ K" : "Ctrl K"}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] bg-black/45 backdrop-blur-sm flex items-start justify-center px-4 pt-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 14, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 14, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="w-full max-w-xl rounded-3xl border border-slate-200/70 dark:border-slate-800 bg-white/85 dark:bg-slate-950/70 backdrop-blur-xl p-3"
            >
              <div className="flex items-center gap-2 px-2">
                <input
                  autoFocus
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder={
                    lang === "uz"
                      ? "Qidirish..."
                      : lang === "ru"
                      ? "Поиск..."
                      : "Search..."
                  }
                  className="w-full bg-transparent outline-none px-3 py-3 text-sm text-slate-950 dark:text-slate-100"
                />
                <span className="text-xs text-slate-500 px-2">Esc</span>
              </div>

              <div className="mt-2 max-h-[360px] overflow-auto">
                {filtered.length === 0 ? (
                  <div className="px-4 py-6 text-sm text-slate-500">
                    {lang === "uz"
                      ? "Hech narsa topilmadi"
                      : lang === "ru"
                      ? "Ничего не найдено"
                      : "No results"}
                  </div>
                ) : (
                  <div className="grid gap-1 p-1">
                    {filtered.map((it) => (
                      <button
                        key={it.label}
                        onClick={it.action}
                        className={`text-left rounded-2xl px-4 py-3 hover:bg-slate-950/5 dark:hover:bg-white/10 transition ${ui.textSub}`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-sm text-slate-950 dark:text-slate-100">
                            {it.label}
                          </span>
                          {it.hint && (
                            <span className="text-xs text-slate-500">
                              {it.hint}
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="px-3 pt-2 pb-1 text-[11px] text-slate-500 flex items-center justify-between">
                <span>
                  {isMac ? "⌘ + K" : "Ctrl + K"} —{" "}
                  {lang === "uz"
                    ? "ochish/yopish"
                    : lang === "ru"
                    ? "открыть/закрыть"
                    : "toggle"}
                </span>
                <span>Esc</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
