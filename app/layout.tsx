import "./globals.css";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

export const metadata = {
  title: "Salohiddin Sadullaev | Full Stack Developer",
  description:
    "Salohiddin Sadullaev — Full Stack Developer. Next.js, Node.js, API, database, deploy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" suppressHydrationWarning className="dark">
      <body className="min-h-screen bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-100 antialiased">
        <ScrollProgress />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
