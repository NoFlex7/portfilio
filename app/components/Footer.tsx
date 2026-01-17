import { PROFILE } from "./data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 dark:border-slate-800 py-8">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} {PROFILE.fullName}. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="hover:text-slate-950 dark:hover:text-white" href={PROFILE.links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:text-slate-950 dark:hover:text-white" href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:text-slate-950 dark:hover:text-white" href={PROFILE.links.telegram} target="_blank" rel="noreferrer">Telegram</a>
        </div>
      </div>
    </footer>
  );
}
