import "./globals.css";

export const metadata = {
  title: "Salohiddin Sadullaev | Full Stack Developer",
  description:
    "Salohiddin Sadullaev — Full Stack Developer. Next.js, Node.js, API, database, UI/UX, deploy va real loyihalar.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
