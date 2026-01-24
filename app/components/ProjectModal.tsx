"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconGithub, IconLink } from "./icons";
import { ui } from "./ui";

type Project = {
  name: string;
  desc: string;
  stack: string[];
  details?: string;
  images?: string[];
  links: { demo: string; code: string };
};

export default function ProjectModal({
  open,
  onClose,
  project,
}: {
  open: boolean;
  onClose: () => void;
  project: Project | null;
}) {
  const images = useMemo(() => project?.images ?? [], [project]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (open) setIdx(0);
  }, [open]);

  // ESC close + arrow navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (images.length > 1 && e.key === "ArrowRight") setIdx((p) => (p + 1) % images.length);
      if (images.length > 1 && e.key === "ArrowLeft") setIdx((p) => (p - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length, onClose]);

  const hasImages = images.length > 0;

  return (
    <AnimatePresence>
      {open && project && (
        <motion.div
          className="fixed inset-0 z-[70] bg-black/45 backdrop-blur-sm flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, y: 18, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 18, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="w-full max-w-3xl rounded-3xl bg-white dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {project.desc}
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-xl border border-slate-200/70 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition"
                aria-label="Close modal"
                title="Close"
              >
                ✕
              </button>
            </div>

            {/* Carousel */}
            <div className="mt-5">
              {hasImages ? (
                <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30">
                  <div className="aspect-[16/9] w-full relative">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={images[idx]}
                        src={images[idx]}
                        alt={`${project.name} screenshot ${idx + 1}`}
                        className="absolute inset-0 h-full w-full object-cover"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        draggable={false}
                      />
                    </AnimatePresence>
                  </div>

                  {/* Arrows */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={() => setIdx((p) => (p - 1 + images.length) % images.length)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-xl bg-black/35 text-white px-3 py-2 backdrop-blur hover:bg-black/45 transition"
                        aria-label="Previous"
                        title="Previous"
                      >
                        ‹
                      </button>
                      <button
                        onClick={() => setIdx((p) => (p + 1) % images.length)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl bg-black/35 text-white px-3 py-2 backdrop-blur hover:bg-black/45 transition"
                        aria-label="Next"
                        title="Next"
                      >
                        ›
                      </button>
                    </>
                  )}

                  {/* Dots */}
                  {images.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setIdx(i)}
                          className={[
                            "h-2 w-2 rounded-full transition",
                            i === idx ? "bg-white" : "bg-white/40 hover:bg-white/70",
                          ].join(" ")}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="rounded-2xl border border-slate-200/70 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30 p-6 text-sm text-slate-500">
                  Screenshotlar qo‘shilmagan. `PROJECTS` ga `images: [...]` qo‘shing.
                </div>
              )}
            </div>

            {/* Stack */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className={ui.pill}>
                  {s}
                </span>
              ))}
            </div>

            {/* Details */}
            <div className="mt-4">
              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                {project.details ??
                  "Bu loyiha performance, clean UI va scalability fokusida qurilgan."}
              </p>
            </div>

            {/* Links */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className={ui.btnPrimary}
              >
                <IconLink className="h-4 w-4" />
                Live
              </a>
              <a
                href={project.links.code}
                target="_blank"
                rel="noreferrer"
                className={ui.btnGhost}
              >
                <IconGithub className="h-4 w-4" />
                Code
              </a>
            </div>

            <div className="mt-3 text-[11px] text-slate-500">
              Tip: {images.length > 1 ? "← / →" : "ESC"} klavishlari ishlaydi
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
