export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-slate-200/70 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          {subtitle ? <p className="mt-2 text-slate-600 dark:text-slate-300">{subtitle}</p> : null}
          <div className="mt-4 h-px w-16 bg-slate-200 dark:bg-slate-800" />
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
