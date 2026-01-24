"use client";

import { useMemo, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section from "./components/Section";

import { Stagger, MotionItem, Reveal } from "./components/Motion";
import CopyText from "./components/CopyText";
import ParallaxBlobs from "./components/ParallaxBlobs";
import ProjectModal from "./components/ProjectModal";
import Counter from "./components/Counter";
import ContactForm from "./components/ContactForm";

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

type Project = (typeof PROJECTS)[number];

export default function Page() {
  const [lang, setLang] = useState<Lang>("uz");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const t = useMemo(() => {
    return {
      titles: COPY.sectionTitles[lang],
      hero: PROFILE.hero[lang],
      about: COPY.about[lang],
      job: PROFILE.title[lang],
      contactText:
        lang === "uz"
          ? "Telegram yoki email orqali yozing yoki formani to‘ldiring."
          : lang === "ru"
          ? "Пишите в Telegram, email или заполните форму."
          : "Reach me via Telegram, email or the form.",
    };
  }, [lang]);

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} setLang={setLang} />

      {/* HERO */}
      <section id="home" className="relative">
        <ParallaxBlobs />

        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <Stagger className="space-y-5">
              <MotionItem>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-950/40 px-4 py-2 text-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
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
                <p className={ui.textSub}>{t.hero.desc}</p>
              </MotionItem>

              <MotionItem>
                <div className="flex gap-3 flex-wrap">
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
            </Stagger>

            {/* RIGHT */}
            <Reveal>
              <div className={`${ui.card} p-6`}>
                <p className="font-semibold">{PROFILE.fullName}</p>
                <p className={ui.textSub}>
                  {t.job} • {PROFILE.location}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3">
  <div className="rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/50 dark:bg-slate-950/35 backdrop-blur px-4 py-3">
    <p className="text-xl font-bold leading-none">
      <Counter to={10} />+
    </p>
    <p className="mt-1 text-[11px] text-slate-500">Projects</p>
  </div>

  <div className="rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/50 dark:bg-slate-950/35 backdrop-blur px-4 py-3">
    <p className="text-xl font-bold leading-none">
      <Counter to={2} />y+
    </p>
    <p className="mt-1 text-[11px] text-slate-500">Experience</p>
  </div>

  <div className="rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-white/50 dark:bg-slate-950/35 backdrop-blur px-4 py-3">
    <p className="text-xl font-bold leading-none">Clean</p>
    <p className="mt-1 text-[11px] text-slate-500">Code</p>
  </div>
</div>


                <div className="mt-6 flex gap-3">
                  <a
                    href={PROFILE.links.github}
                    target="_blank"
                    className={ui.btnGhost}
                  >
                    <IconGithub className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href={PROFILE.links.website}
                    target="_blank"
                    className={ui.btnGhost}
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
        <Reveal>
          <div className={`${ui.card} p-6 space-y-4`}>
            <p>{t.about.p1}</p>
            <p className={ui.textSub}>{t.about.p2}</p>
            <p className={ui.textSub}>{t.about.p3}</p>
          </div>
        </Reveal>
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
        {EXPERIENCE.map((e) => (
          <Reveal key={e.period}>
            <div className={`${ui.card} p-6`}>
              <p className="font-semibold">{e.role}</p>
              <p className={ui.textSub}>{e.company}</p>
              <ul className="list-disc pl-5 mt-3 text-sm">
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title={t.titles.projects}>
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <Reveal key={p.name}>
              <button
                onClick={() => setActiveProject(p)}
                className={`${ui.card} p-6 text-left`}
              >
                <p className="font-semibold">{p.name}</p>
                <p className={ui.textSub}>{p.desc}</p>
              </button>
            </Reveal>
          ))}
        </div>

        <ProjectModal
          open={!!activeProject}
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </Section>

      {/* SERVICES */}
      <Section id="services" title={t.titles.services}>
        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <Reveal key={s.title}>
              <div className={`${ui.card} p-6`}>
                <p className="font-semibold">{s.title}</p>
                <p className={ui.textSub}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title={t.titles.contact}>
        <Reveal>
          <div className={`${ui.card} p-6 max-w-xl`}>
            <p className={ui.textSub}>{t.contactText}</p>

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

            {/* FORM */}
            <div className="mt-6">
              <ContactForm lang={lang} />
            </div>
          </div>
        </Reveal>
      </Section>

      <Footer />
    </div>
  );
}
