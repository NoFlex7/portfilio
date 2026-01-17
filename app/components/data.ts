export type Lang = "uz" | "ru" | "en";

export const PROFILE = {
  fullName: "Salohiddin Sadullaev",
  location: "Toshkent, Uzbekistan",
  email: "sadullaernazarovich@gmail.com@gmail.com",
  phone: "+998 95 922 92 94",
  links: {
    github: "https://github.com/NoFlex7",
    linkedin: "https://linkedin.com/in/NoFlex7",
    telegram: "https://t.me/eosnwx",
    website: "https://salohiddin.dev",
  },
  title: {
    uz: "Full Stack Developer",
    ru: "Full Stack Разработчик",
    en: "Full Stack Developer",
  },
  hero: {
    uz: {
      badge: "Ish / freelance uchun ochiqman",
      headlineA: "Salom, men",
      headlineB: " — Full Stack Developer",
      desc:
        "Men modern web ilovalarni yarataman: frontend + backend, REST API, autentifikatsiya, database, admin panel, deploy. Fokus: tezlik, xavfsizlik va minimal UX.",
      cta1: "Loyihalarim",
      cta2: "Bog'lanish",
      cta3: "CV (PDF)",
    },
    ru: {
      badge: "Открыт для работы / фриланса",
      headlineA: "Привет, я",
      headlineB: " — Full Stack разработчик",
      desc:
        "Создаю современные веб-приложения: фронт + бэк, REST API, авторизация, база данных, админка, деплой. Фокус: скорость, безопасность и минимализм.",
      cta1: "Проекты",
      cta2: "Контакты",
      cta3: "Резюме (PDF)",
    },
    en: {
      badge: "Open to work / freelance",
      headlineA: "Hi, I’m",
      headlineB: " — Full Stack Developer",
      desc:
        "I build modern web apps: frontend + backend, REST APIs, authentication, databases, admin dashboards, and deployment. Focus: speed, security, minimal UX.",
      cta1: "Projects",
      cta2: "Contact",
      cta3: "Resume (PDF)",
    },
  },
};

export const COPY = {
  nav: {
    uz: { about: "Men haqimda", skills: "Ko'nikmalar", exp: "Tajriba", projects: "Loyihalar", services: "Xizmatlar", contact: "Aloqa" },
    ru: { about: "Обо мне", skills: "Навыки", exp: "Опыт", projects: "Проекты", services: "Услуги", contact: "Контакты" },
    en: { about: "About", skills: "Skills", exp: "Experience", projects: "Projects", services: "Services", contact: "Contact" },
  },
  sectionTitles: {
    uz: { about: "Men haqimda", skills: "Ko'nikmalar", exp: "Tajriba", projects: "Loyihalar", services: "Xizmatlar", testimonials: "Fikrlar", contact: "Aloqa" },
    ru: { about: "Обо мне", skills: "Навыки", exp: "Опыт", projects: "Проекты", services: "Услуги", testimonials: "Отзывы", contact: "Контакты" },
    en: { about: "About", skills: "Skills", exp: "Experience", projects: "Projects", services: "Services", testimonials: "Testimonials", contact: "Contact" },
  },
  about: {
    uz: {
      p1: "Men — Salohiddin Sadullaev, full stack yo‘nalishida ishlayman. Frontend’da zamonaviy UI, backend’da barqaror API va database arxitektura quraman.",
      p2: "Ko‘p ishlagan mavzularim: JWT/cookies auth, role-based access, CRUD, pagination, search, file upload, admin panel, payment integratsiya, logging.",
      p3: "Yondashuvim: toza kod, komponent arxitekturasi, performance va xavfsizlikka e’tibor.",
      highlights: ["Frontend + Backend", "REST API / Auth", "Database dizayn", "Deploy", "SEO / Performance"],
    },
    ru: {
      p1: "Я — Салохиддин Садуллаев, full stack разработчик. Делаю UI на фронтенде и надёжные API + БД на бэкенде.",
      p2: "Частые задачи: JWT/cookies auth, роли/права, CRUD, пагинация, поиск, загрузка файлов, админ-панель, оплаты, логирование.",
      p3: "Подход: чистый код, компонентная архитектура, фокус на производительность и безопасность.",
      highlights: ["Frontend + Backend", "REST API / Auth", "Дизайн БД", "Deploy", "SEO / Performance"],
    },
    en: {
      p1: "I’m Salohiddin Sadullaev, a full-stack developer. I build modern UI on the frontend and reliable APIs + databases on the backend.",
      p2: "Common tasks: JWT/cookies auth, role-based access, CRUD, pagination, search, file uploads, admin dashboards, payments, logging.",
      p3: "My approach: clean code, component architecture, strong focus on performance and security.",
      highlights: ["Frontend + Backend", "REST API / Auth", "DB Design", "Deploy", "SEO / Performance"],
    },
  },
};

export const SKILLS = [
  { group: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "UI/UX", "Responsive Design"] },
  { group: "Backend", items: ["Node.js", "Express/NestJS", "REST API", "Auth (JWT/Cookies)", "Validation", "Caching"] },
  { group: "Database", items: ["PostgreSQL", "MongoDB", "Prisma/ORM", "Indexes", "Migrations"] },
  { group: "DevOps", items: ["Docker", "CI/CD", "Vercel", "Linux basics", "Nginx basics"] },
];

export const EXPERIENCE = [
  {
    period: "2026 — hozir",
    role: "Full Stack Developer",
    company: "Freelance / Team Projects",
    bullets: [
      "Next.js + backend API asosida web ilovalar yaratish",
      "Auth, role-based access, admin panel va CRUD modullar",
      "PostgreSQL/MongoDB bilan ishlash, deploy qilish",
    ],
  },
  {
    period: "2023 — 2026",
    role: "Frontend Developer",
    company: "Pet Projects",
    bullets: [
      "Responsiv UI, komponentlar va dizayn sistemalar",
      "Performance va SEO optimizatsiya",
      "API integratsiya, state management",
    ],
  },
];

export const PROJECTS = [
  {
    name: "E-commerce Platform",
    desc: "Auth, cart, admin panel, product CRUD, orders, search & filter.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    links: { demo: "#", code: "#" },
  },
  {
    name: "CRM / Dashboard",
    desc: "Role-based access, analytics cards, table pagination, export.",
    stack: ["Next.js", "TypeScript", "REST API"],
    links: { demo: "#", code: "#" },
  },
  {
    name: "Portfolio + Blog",
    desc: "Multi-language, dark mode, SEO, content-ready structure.",
    stack: ["Next.js", "Tailwind", "MD-ready"],
    links: { demo: "#", code: "#" },
  },
];

export const SERVICES = [
  { title: "Full Stack Web App", desc: "Frontend + backend, auth, CRUD, admin panel, database." },
  { title: "API & Backend", desc: "REST API, validation, security, database design, integration." },
  { title: "Frontend UI/UX", desc: "Minimal UI, responsive design, performance, SEO." },
  { title: "Deploy & Setup", desc: "Vercel/Docker, env, CI/CD basics." },
];

export const TESTIMONIALS = [
  { name: "Mijoz / Hamkor", text: "Salohiddin vazifani tez va sifatli bajardi. Kod toza, UI chiroyli." },
  { name: "Team Lead", text: "Mas’uliyatli, muammo yechishda kuchli. Deadline’ga amal qiladi." },
];
