export type Lang = "uz" | "ru" | "en";

export const PROFILE = {
  fullName: "Salohiddin Sadullaev",
  title: {
    uz: "Full Stack Developer",
    ru: "Full Stack Разработчик",
    en: "Full Stack Developer",
  },
  location: "Toshkent, Uzbekistan",
  email: "youremail@gmail.com",
  phone: "+998 90 000 00 00",
  links: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    telegram: "https://t.me/username",
  },
  hero: {
    uz: {
      badge: "Ish / freelance uchun ochiqman",
      headlineA: "Salom, men",
      headlineB: " — Full Stack Developer",
      desc:
        "Men modern web ilovalarni yarataman: frontend + backend, REST API, autentifikatsiya, database, admin panel, deploy. Maqsadim — tez, xavfsiz va chiroyli mahsulot.",
      cta1: "Loyihalarim",
      cta2: "Bog'lanish",
      cta3: "CV yuklab olish",
    },
    ru: {
      badge: "Открыт для работы / фриланса",
      headlineA: "Привет, я",
      headlineB: " — Full Stack разработчик",
      desc:
        "Создаю современные веб-приложения: фронтенд + бэкенд, REST API, авторизация, база данных, админ-панель и деплой. Фокус — скорость, безопасность и UX.",
      cta1: "Проекты",
      cta2: "Контакты",
      cta3: "Скачать резюме",
    },
    en: {
      badge: "Open to work / freelance",
      headlineA: "Hi, I’m",
      headlineB: " — Full Stack Developer",
      desc:
        "I build modern web apps: frontend + backend, REST APIs, authentication, databases, admin dashboards, and deployment. Focused on speed, security, and great UX.",
      cta1: "Projects",
      cta2: "Contact",
      cta3: "Download CV",
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
      p2: "Ko‘p ishlagan mavzularim: autentifikatsiya (JWT/cookies), role-based access, CRUD, pagination, search, file upload, admin panel, payment integratsiya, logging va monitoring.",
      p3: "Yondashuvim: toza kod, komponent arxitekturasi, testga tayyor dizayn, performance va xavfsizlikka e’tibor.",
      highlights: ["Frontend + Backend", "REST API / Auth", "Database dizayn", "Deploy & CI/CD", "SEO / Performance"],
    },
    ru: {
      p1: "Я — Салохиддин Садуллаев, работаю как full stack разработчик. Делаю современный UI на фронтенде и надёжные API + базы данных на бэкенде.",
      p2: "Частые задачи: авторизация (JWT/cookies), роли и права, CRUD, пагинация, поиск, загрузка файлов, админ-панель, интеграция оплат, логирование и мониторинг.",
      p3: "Подход: чистый код, компонентная архитектура, готовность к тестированию, фокус на производительность и безопасность.",
      highlights: ["Frontend + Backend", "REST API / Auth", "Дизайн БД", "Deploy & CI/CD", "SEO / Performance"],
    },
    en: {
      p1: "I’m Salohiddin Sadullaev, a full-stack developer. I build modern UIs on the frontend and reliable APIs + database systems on the backend.",
      p2: "Common tasks: authentication (JWT/cookies), role-based access, CRUD, pagination, search, file uploads, admin dashboards, payments, logging and monitoring.",
      p3: "My approach: clean code, component architecture, test-ready design, strong focus on performance and security.",
      highlights: ["Frontend + Backend", "REST API / Auth", "DB Design", "Deploy & CI/CD", "SEO / Performance"],
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
    period: "2024 — hozir",
    role: "Full Stack Developer",
    company: "Freelance / Team Projects",
    bullets: [
      "Next.js + Node.js asosida web ilovalar yaratish",
      "Auth, role-based access, admin panel va CRUD modullar",
      "PostgreSQL/MongoDB bilan ishlash, deploy qilish",
    ],
  },
  {
    period: "2023 — 2024",
    role: "Frontend Developer",
    company: "Pet Projects",
    bullets: [
      "Responsiv UI, komponentlar kutubxonasi",
      "Performance va SEO optimizatsiya",
      "API integratsiya va state management",
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
  { title: "Web App (Full Stack)", desc: "Frontend + backend, auth, CRUD, admin panel, database." },
  { title: "API & Backend", desc: "REST API, validation, security, database design, integration." },
  { title: "Frontend UI/UX", desc: "Next.js UI, responsive design, performance, SEO." },
  { title: "Deploy & Setup", desc: "Vercel/Docker, env, CI/CD, monitoring basics." },
];

export const TESTIMONIALS = [
  { name: "Mijoz / Hamkor", text: "Salohiddin vazifani tez va sifatli bajardi. Kod toza, UI chiroyli." },
  { name: "Team Lead", text: "Mas’uliyatli, muammo yechishda kuchli. Deadline’ga amal qiladi." },
];
