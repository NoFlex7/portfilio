"use client";

import { useState } from "react";
import { ui } from "./ui";
import type { Lang } from "./data";

export default function ContactForm({ lang }: { lang: Lang }) {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [err, setErr] = useState<string>("");

  const t = {
    title:
      lang === "uz"
        ? "Xabar yuborish"
        : lang === "ru"
        ? "Отправить сообщение"
        : "Send a message",
    name: lang === "uz" ? "Ism" : lang === "ru" ? "Имя" : "Name",
    email: "Email",
    msg: lang === "uz" ? "Xabar" : lang === "ru" ? "Сообщение" : "Message",
    send: lang === "uz" ? "Yuborish" : lang === "ru" ? "Отправить" : "Send",
    sent:
      lang === "uz"
        ? "Yuborildi! Tez orada javob beraman ✅"
        : lang === "ru"
        ? "Отправлено! Скоро отвечу ✅"
        : "Sent! I’ll reply soon ✅",
    via:
      lang === "uz"
        ? "Xabar Telegram’ga tushadi (server orqali)."
        : lang === "ru"
        ? "Сообщение придет в Telegram (через сервер)."
        : "Message will arrive to Telegram (via server).",
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setOk(null);
    setErr("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || "Request failed");
      }

      setOk(true);
      (e.target as HTMLFormElement).reset();
    } catch (e: any) {
      setOk(false);
      setErr(e?.message || "Error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <p className="font-semibold">{t.title}</p>

      <div className="grid sm:grid-cols-2 gap-3">
        <input
          name="name"
          required
          minLength={2}
          placeholder={t.name}
          className="w-full rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-950/40 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-800"
        />
        <input
          name="email"
          type="email"
          required
          placeholder={t.email}
          className="w-full rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-950/40 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-800"
        />
      </div>

      <textarea
        name="message"
        required
        minLength={10}
        placeholder={t.msg}
        rows={5}
        className="w-full rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/70 dark:bg-slate-950/40 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-800"
      />

      <div className="flex items-center gap-3">
        <button disabled={loading} className={ui.btnPrimary}>
          {loading ? "..." : t.send}
        </button>

        {ok === true && (
          <span className="text-sm text-emerald-600 dark:text-emerald-400">
            {t.sent}
          </span>
        )}
        {ok === false && (
          <span className="text-sm text-rose-600 dark:text-rose-400">{err}</span>
        )}
      </div>

      <p className="text-xs text-slate-500">{t.via}</p>
    </form>
  );
}
