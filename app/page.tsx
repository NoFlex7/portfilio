"use client";

import { useMemo, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section from "./components/Section";

import { Stagger, MotionItem, Reveal } from "./components/Motion";
import CopyText from "./components/CopyText";
import ParallaxBlobs from "./components/ParallaxBlobs";

import type { Lang } from "./components/data";
import {
  COPY,
  PROFILE,
  SKILLS,
  EXPERIENCE,
  PROJECTS,
  SERVICES,
} from "./components/data";

import { ui } from "./components/ui";
import {
  IconArrowRight,
  IconGithub,
  IconLink,
  IconMail,
  IconPhone,
} from "./components/icons";

export default function Page() {
  const [lang, setLang] = useState<Lang>("uz");

  const t = useMemo(() => {
    return {
      nav: COPY.nav[lang],
      titles: COPY.sectionTitles[lang],
      hero: PROFILE.hero[lang],
      about: COPY.about[lang],
      job: PROFILE.title[lang],
    };
  }, [lang]);

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} setLang={setLang} />

      {/* HERO + PARALLAX */}
      <section id="home" className="relative">
        <ParallaxBlobs />

        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <Stagger className="space-y-5">
              <MotionItem>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-950/40 px-4 py-2 text-sm text-slate-600 dark:text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  {t.hero.badge}
                </div>
              </MotionItem>

              <MotionItem>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {t.hero.headlineA}{" "}
                  <span className="text-slate-950 dark:text-white">
                    {PROFILE.fullName}
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    {t.hero.headlineB}
                  </span>
                </h1>
              </MotionItem>

              <MotionItem>
                <p className={`leading-relaxed ${ui.textSub}`}>
                  {t.hero.desc}
                </p>
              </MotionItem>

              <MotionItem>
                <div className="flex flex-wrap gap-3">
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
              </MotionItem>

              <MotionItem>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className={ui.pill}>{PROFILE.location}</span>
                  <span className={ui.pill}>{PROFILE.phone}</span>
                  <span className={ui.pill}>{PROFILE.email}</span>
                </div>
              </MotionItem>
            </Stagger>

            {/* RIGHT CARD */}
            <Reveal>
              <div className={`${ui.card} p-6`}>
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-950/40 flex items-center justify-center text-xl font-bold">
                    SS
                  </div>
                  <div>
                    <p className="text-lg font-semibold">
                      {PROFILE.fullName}
                    </p>
                    <p className={ui.textSub}>
                      {t.job} • {PROFILE.location}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { k: "10+", v: "Projects" },
                    { k: "2y+", v: "Experience" },
                    { k: "Clean", v: "Code" },
                  ].map((x) => (
                    <div
                      key={x.v}
                      className="rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-950/40 p-4"
                    >
                      <p className="text-xl font-bold">{x.k}</p>
                      <p className="text-xs text-slate-500">{x.v}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={PROFILE.links.github}
                    target="_blank"
                    className={ui.btnGhost}
                    rel="noreferrer"
                  >
                    <IconGithub className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href={PROFILE.links.website}
                    target="_blank"
                    className={ui.btnGhost}
                    rel="noreferrer"
                  >
                    <IconLink className="h-4 w-4" /> Website
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" title={t.titles.about}>
        <div className="grid md:grid-cols-3 gap-6">
          <Reveal className="md:col-span-2">
            <div className={`${ui.card} p-6 space-y-4`}>
              <p>{t.about.p1}</p>
              <p className={ui.textSub}>{t.about.p2}</p>
              <p className={ui.textSub}>{t.about.p3}</p>

              <div className="grid sm:grid-cols-2 gap-3">
                {t.about.highlights.map((h) => (
                  <div key={h} className={`${ui.pill} text-sm`}>
                    ✅ {h}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className={`${ui.card} p-6`}>
              <p className="font-semibold mb-4">
                {lang === "uz" ? "Kontakt" : lang === "ru" ? "Контакты" : "Contacts"}
              </p>

              <div className="space-y-3 text-sm">
                <p className="flex items-center gap-2">
                  <IconMail className="h-4 w-4" />
                  {PROFILE.email}
                  <CopyText text={PROFILE.email} />
                </p>
                <p className="flex items-center gap-2">
                  <IconPhone className="h-4 w-4" />
                  {PROFILE.phone}
                  <CopyText text={PROFILE.phone} />
                </p>
              </div>

              <a href="#contact" className={`${ui.btnPrimary} mt-6`}>
                {lang === "uz" ? "Yozish" : lang === "ru" ? "Написать" : "Message"}{" "}
                <IconArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" title={t.titles.skills}>
        <div className="grid md:grid-cols-2 gap-6">
          {SKILLS.map((g) => (
            <Reveal key={g.group}>
              <div className={`${ui.card} p-6`}>
                <p className="font-semibold mb-3">{g.group}</p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className={ui.pill}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title={t.titles.exp}>
        <div className="space-y-6">
          {EXPERIENCE.map((e) => (
            <Reveal key={e.period}>
              <div className={`${ui.card} p-6`}>
                <div className="flex justify-between flex-wrap gap-2">
                  <div>
                    <p className="font-semibold">{e.role}</p>
                    <p className={ui.textSub}>{e.company}</p>
                  </div>
                  <span className={ui.pill}>{e.period}</span>
                </div>

                <ul className="list-disc pl-5 mt-4 space-y-2 text-sm">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title={t.titles.projects}>
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <Reveal key={p.name}>
              <div className={`${ui.card} p-6 flex flex-col`}>
                <p className="font-semibold">{p.name}</p>
                <p className={`${ui.textSub} mt-2`}>{p.desc}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.stack.map((s) => (
                    <span key={s} className={ui.pill}>
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a href={p.links.demo} className={ui.btnPrimary}>
                    Demo <IconArrowRight className="h-4 w-4" />
                  </a>
                  <a href={p.links.code} className={ui.btnGhost}>
                    Code
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" title={t.titles.services}>
        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <Reveal key={s.title}>
              <div className={`${ui.card} p-6`}>
                <p className="font-semibold">{s.title}</p>
                <p className={`${ui.textSub} mt-2`}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title={t.titles.contact}>
        <Reveal>
          <div className={`${ui.card} p-6 max-w-xl`}>
            <p className={ui.textSub}>
              {lang === "uz"
                ? "Telegram yoki email orqali yozing."
                : lang === "ru"
                ? "Пишите в Telegram или на email."
                : "Reach me via Telegram or email."}
            </p>

            <div className="mt-4 space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <IconMail className="h-4 w-4" />
                {PROFILE.email}
                <CopyText text={PROFILE.email} />
              </p>
              <p className="flex items-center gap-2">
                <IconPhone className="h-4 w-4" />
                {PROFILE.phone}
                <CopyText text={PROFILE.phone} />
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={PROFILE.links.telegram}
                target="_blank"
                className={ui.btnPrimary}
                rel="noreferrer"
              >
                Telegram <IconArrowRight className="h-4 w-4" />
              </a>
              <a href={`mailto:${PROFILE.email}`} className={ui.btnGhost}>
                Email
              </a>
            </div>
          </div>
        </Reveal>
      </Section>

      <Footer />
    </div>
  );
}
