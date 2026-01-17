"use client";

import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section from "./components/Section";
import FadeIn from "./components/FadeIn";
import CopyText from "./components/CopyText";
import type { Lang } from "./components/data";
import { COPY, EXPERIENCE, PROFILE, PROJECTS, SERVICES, SKILLS, TESTIMONIALS } from "./components/data";
import { ui } from "./components/ui";
import { IconArrowRight, IconGithub, IconLink, IconMail, IconPhone } from "./components/icons";

export default function Page() {
  const [lang, setLang] = useState<Lang>("uz");

  const t = useMemo(() => {
    return {
      nav: COPY.nav[lang],
      titles: COPY.sectionTitles[lang],
      hero: PROFILE.hero[lang],
      about: COPY.about[lang],
      jobTitle: PROFILE.title[lang],
    };
  }, [lang]);

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} setLang={setLang} />

      {/* HERO */}
      <section id="home">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-950/40 px-4 py-2 text-sm text-slate-600 dark:text-slate-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                {t.hero.badge}
              </div>

              <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">
                {t.hero.headlineA}{" "}
                <span className="text-slate-950 dark:text-white">{PROFILE.fullName}</span>
                <span className="text-slate-600 dark:text-slate-300">{t.hero.headlineB}</span>
              </h1>

              <p className={`mt-4 leading-relaxed ${ui.textSub}`}>{t.hero.desc}</p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#projects" className={ui.btnPrimary}>
                  {t.hero.cta1} <IconArrowRight className="h-4 w-4" />
                </a>
                <a href="#contact" className={ui.btnGhost}>
                  {t.hero.cta2}
                </a>
                <a href="/resume.pdf" className={ui.btnGhost}>
                  {t.hero.cta3}
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span className={ui.pill}>{PROFILE.location}</span>
                <span className={ui.pill}>{PROFILE.phone}</span>
                <span className={ui.pill}>{PROFILE.email}</span>
              </div>
            </div>

            {/* Profile card */}
            <FadeIn>
              <div className={`${ui.card} p-6`}>
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-950/40 flex items-center justify-center text-xl">
                    SS
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{PROFILE.fullName}</p>
                    <p className={`text-sm ${ui.textSub}`}>{t.jobTitle} • {PROFILE.location}</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { k: "10+", v: lang === "uz" ? "Loyiha" : lang === "ru" ? "Проектов" : "Projects" },
                    { k: "2y+", v: lang === "uz" ? "Tajriba" : lang === "ru" ? "Опыт" : "Experience" },
                    { k: "Clean", v: lang === "uz" ? "Kod" : lang === "ru" ? "Код" : "Code" },
                  ].map((x) => (
                    <div key={x.v} className="rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-950/40 p-4">
                      <p className="text-xl font-bold">{x.k}</p>
                      <p className={`text-xs ${ui.textSub}`}>{x.v}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <a className={ui.btnGhost} href={PROFILE.links.github} target="_blank" rel="noreferrer">
                    <IconGithub className="h-4 w-4" /> GitHub
                  </a>
                  <a className={ui.btnGhost} href={PROFILE.links.website} target="_blank" rel="noreferrer">
                    <IconLink className="h-4 w-4" /> Website
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section
        id="about"
        title={t.titles.about}
        subtitle={lang === "uz" ? "Ko‘proq ma’lumot (minimal, lekin mazmunli)" : lang === "ru" ? "Подробнее (минимализм, но по делу)" : "More about me (minimal, but meaningful)"}
      >
        <div className="grid md:grid-cols-3 gap-6">
          <FadeIn>
            <div className={`${ui.card} p-6 md:col-span-2`}>
              <p className="leading-relaxed">{t.about.p1}</p>
              <p className={`mt-4 leading-relaxed ${ui.textSub}`}>{t.about.p2}</p>
              <p className={`mt-4 leading-relaxed ${ui.textSub}`}>{t.about.p3}</p>

              <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                {t.about.highlights.map((h) => (
                  <div key={h} className="rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-950/40 p-4">
                    ✅ {h}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className={`${ui.card} p-6`}>
              <p className="text-sm font-semibold">
                {lang === "uz" ? "Kontakt" : lang === "ru" ? "Контакты" : "Contacts"}
              </p>
              <div className={`mt-4 space-y-3 text-sm ${ui.textSub}`}>
                <p className="flex items-center gap-2">
                  <IconMail className="h-4 w-4" />
                  <span className="text-slate-700 dark:text-slate-200">{PROFILE.email}</span>
                  <CopyText text={PROFILE.email} />
                </p>
                <p className="flex items-center gap-2">
                  <IconPhone className="h-4 w-4" />
                  <span className="text-slate-700 dark:text-slate-200">{PROFILE.phone}</span>
                  <CopyText text={PROFILE.phone} />
                </p>
              </div>

              <div className="mt-6">
                <a href="#contact" className={ui.btnPrimary}>
                  {lang === "uz" ? "Yozish" : lang === "ru" ? "Написать" : "Message"}{" "}
                  <IconArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* SKILLS */}
      <Section
        id="skills"
        title={t.titles.skills}
        subtitle={lang === "uz" ? "Stack (asosiy yo‘nalishlar)" : lang === "ru" ? "Стек (ключевые направления)" : "Stack (key areas)"}
      >
        <div className="grid md:grid-cols-2 gap-6">
          {SKILLS.map((g) => (
            <FadeIn key={g.group}>
              <div className={`${ui.card} p-6`}>
                <p className="font-semibold">{g.group}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((x) => (
                    <span key={x} className={ui.pill}>{x}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section
        id="experience"
        title={t.titles.exp}
        subtitle={lang === "uz" ? "Qisqa va aniq tajriba" : lang === "ru" ? "Краткий опыт" : "Short experience"}
      >
        <div className="grid gap-6">
          {EXPERIENCE.map((e) => (
            <FadeIn key={e.period}>
              <div className={`${ui.card} p-6`}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-lg font-semibold">{e.role}</p>
                    <p className={ui.textSub}>{e.company}</p>
                  </div>
                  <span className={ui.pill}>{e.period}</span>
                </div>
                <ul className={`mt-4 list-disc pl-5 space-y-2 ${ui.textSub}`}>
                  {e.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section
        id="projects"
        title={t.titles.projects}
        subtitle={lang === "uz" ? "Tanlangan loyihalar" : lang === "ru" ? "Избранные проекты" : "Selected projects"}
      >
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <FadeIn key={p.name}>
              <div className={`${ui.card} p-6 flex flex-col h-full`}>
                <p className="text-lg font-semibold">{p.name}</p>
                <p className={`mt-2 ${ui.textSub}`}>{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className={ui.pill} title={s}>{s}</span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a className={ui.btnPrimary} href={p.links.demo}>
                    Demo <IconArrowRight className="h-4 w-4" />
                  </a>
                  <a className={ui.btnGhost} href={p.links.code}>
                    Code
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section
        id="services"
        title={t.titles.services}
        subtitle={lang === "uz" ? "Qanday yordam beraman" : lang === "ru" ? "Чем могу помочь" : "How I can help"}
      >
        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <FadeIn key={s.title}>
              <div className={`${ui.card} p-6`}>
                <p className="text-lg font-semibold">{s.title}</p>
                <p className={`mt-2 ${ui.textSub}`}>{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section
        id="testimonials"
        title={t.titles.testimonials}
        subtitle={lang === "uz" ? "Qisqa fikrlar (sample)" : lang === "ru" ? "Отзывы (пример)" : "Testimonials (sample)"}
      >
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((x) => (
            <FadeIn key={x.name}>
              <div className={`${ui.card} p-6`}>
                <p className="leading-relaxed">“{x.text}”</p>
                <p className={`mt-4 text-sm ${ui.textSub}`}>— {x.name}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section
        id="contact"
        title={t.titles.contact}
        subtitle={lang === "uz" ? "Tez bog‘lanish" : lang === "ru" ? "Быстрая связь" : "Quick contact"}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <FadeIn>
            <div className={`${ui.card} p-6`}>
              <p className={ui.textSub}>
                {lang === "uz"
                  ? "Telegram yoki email orqali yozing. Tez javob beraman."
                  : lang === "ru"
                  ? "Пишите в Telegram или на email — отвечаю быстро."
                  : "Reach me via Telegram or email — I reply quickly."}
              </p>

              <div className={`mt-4 space-y-3 text-sm ${ui.textSub}`}>
                <p className="flex items-center gap-2">
                  <IconMail className="h-4 w-4" />
                  <span className="text-slate-700 dark:text-slate-200">{PROFILE.email}</span>
                  <CopyText text={PROFILE.email} />
                </p>
                <p className="flex items-center gap-2">
                  <IconPhone className="h-4 w-4" />
                  <span className="text-slate-700 dark:text-slate-200">{PROFILE.phone}</span>
                  <CopyText text={PROFILE.phone} />
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <a className={ui.btnPrimary} href={PROFILE.links.telegram} target="_blank" rel="noreferrer">
                  Telegram <IconArrowRight className="h-4 w-4" />
                </a>
                <a className={ui.btnGhost} href={`mailto:${PROFILE.email}`}>
                  Email
                </a>
              </div>
            </div>
          </FadeIn>

          {/* mailto form */}
          <FadeIn>
            <form
              className={`${ui.card} p-6`}
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const name = String(fd.get("name") || "");
                const msg = String(fd.get("message") || "");
                const subject = encodeURIComponent(`Portfolio contact from ${name}`);
                const body = encodeURIComponent(msg);
                window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
              }}
            >
              <p className="text-lg font-semibold">
                {lang === "uz" ? "Xabar yuborish" : lang === "ru" ? "Отправить сообщение" : "Send a message"}
              </p>

              <div className="mt-4 space-y-3">
                <input
                  name="name"
                  required
                  placeholder={lang === "uz" ? "Ismingiz" : lang === "ru" ? "Ваше имя" : "Your name"}
                  className={ui.input}
                />
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder={lang === "uz" ? "Xabaringiz..." : lang === "ru" ? "Сообщение..." : "Message..."}
                  className={ui.input}
                />
                <button className={ui.btnPrimary} type="submit">
                  {lang === "uz" ? "Email orqali yuborish" : lang === "ru" ? "Отправить через email" : "Send via email"}
                  <IconArrowRight className="h-4 w-4" />
                </button>
                <p className={`text-xs ${ui.textSub}`}>
                  {lang === "uz"
                    ? "Eslatma: bu forma mailto ishlatadi (server kerak emas)."
                    : lang === "ru"
                    ? "Примечание: форма использует mailto (без сервера)."
                    : "Note: this form uses mailto (no server required)."}
                </p>
              </div>
            </form>
          </FadeIn>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
