import Image from "next/image";
import ContactForm from "./components/ContactForm";
import CopyEmailButton from "./components/CopyEmailButton";
import Globe from "./components/Globe";
import NavLinks from "./components/NavLinks";
import Typewriter from "./components/Typewriter";

const EMAIL = "sidra.saqib712@gmail.com";

const roles = ["Frontend Developer", "Web Application Developer"];

const coreStack = ["React", "Next.js", "TypeScript"];

// Links with an empty href are hidden
const profileLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sidra-tufail-88bab8372/" },
  { label: "GitHub", href: "https://github.com/sidratufail125" },
].filter((link) => link.href);

// Remove the Phone entry to keep your number off the public site
const contactDetails = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
  },
  {
    label: "Phone",
    value: "+92 325 4215596",
    href: "tel:+923254215596",
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    label: "Location",
    value: "Lahore, Pakistan",
    icon: (
      <>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
];

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const stats = [
  { value: "2.5+", label: "Years of Experience" },
  { value: "4+", label: "Projects Delivered" },
  { value: "15+", label: "Technologies Worked With" },
];

const experience = [
  {
    role: "Associate Software Engineer",
    company: "Expert System Solution",
    period: "Jan 2025 – Present",
    location: "Lahore, Pakistan",
    summary:
      "Building responsive, interactive web applications and turning UI/UX designs into reusable components. Integrating REST APIs with backend developers, with a focus on cross-browser compatibility and performance.",
    tags: ["React", "TypeScript", "JavaScript", "HTML/CSS", "REST APIs"],
  },
  {
    role: "Associate Software Engineer",
    company: "Fairchance Software",
    period: "Jul 2024 – Dec 2024",
    location: "Lahore, Pakistan",
    summary:
      "Developed responsive web applications and interactive UI components with cross-functional teams, optimized pages for speed, accessibility, and responsiveness, and integrated APIs.",
    tags: ["React", "JavaScript", "HTML/CSS", "REST APIs"],
  },
];

// TODO: these levels are placeholders, not from the CV — set your own
// self-assessed proficiency (0–100) for each skill.
const skillCards = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "JavaScript / TypeScript", level: 85 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Libraries & Architecture",
    skills: [
      { name: "Redux Toolkit", level: 80 },
      { name: "Material UI / Bootstrap", level: 85 },
      { name: "REST API Integration", level: 85 },
      { name: "Nx Monorepo", level: 70 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "Figma", level: 75 },
      { name: "Postman", level: 80 },
      { name: "Chrome DevTools", level: 85 },
    ],
  },
];

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux Toolkit",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
  "REST APIs",
  "Axios",
  "Nx Monorepo",
  "Git",
  "GitHub",
  "VS Code",
  "Figma",
  "Postman",
  "Chrome DevTools",
];

type Project = {
  title: string;
  tag: string;
  description: string;
  stack: string[];
  // Cover shown when there's no screenshot yet
  accent: string;
  icon: React.ReactNode;
  // Optional screenshot, e.g. "/projects/go-turtle.png" in public/projects/
  image?: string;
  // Defaults to "<title> screenshot"
  imageAlt?: string;
  liveUrl?: string;
  repoUrl?: string;
  privateRepo?: boolean;
  // Team project in someone else's GitHub account: shows a contributor note
  // and a "View on GitHub" button linking to the original repo
  repoOwner?: string;
  // Further repos for the same project, listed under the buttons; no url = private
  extraRepos?: { label: string; url?: string }[];
};

// TODO: set liveUrl / repoUrl for each project, and add a screenshot to
// public/projects/ via `image`. Buttons without a URL are shown as disabled.
const projects: Project[] = [
  {
    title: "GO Turtle",
    tag: "Maritime Recruitment Platform",
    description:
      "A Germany-based maritime recruitment platform connecting seafarers with vetted shipping companies. I build dynamic, reusable UI components like tables, modals, and filters, and manage application state.",
    stack: ["React 19", "JavaScript", "Nx", "Vite 6", "React Router 7", "SCSS", "Material UI"],
    accent: "from-emerald-500/40 via-teal-600/25 to-cyan-700/30",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
    image: "/projects/go-turtle.png",
    liveUrl: "https://www.go-turtle.com/",
    privateRepo: true,
  },
  {
    title: "Yourself Pilates",
    tag: "Pilates Coworking Studio",
    description:
      "A Pilates coworking studio in Portugal where instructors book equipment and studio time and clients buy class packs. Built with a clean, responsive, mobile-first UI and a focus on performance.",
    stack: ["Next.js 16", "React 19", "JavaScript", "Tailwind CSS 4", "shadcn/ui", "Axios"],
    image: "/projects/yourself-pilates.png",
    liveUrl: "https://www.yourselfpilates.pt/home",
    // github.com/SyedKamranGH/yourselfpilates is private — set repoUrl if it goes public
    privateRepo: true,
    repoOwner: "Kamran",
    accent: "from-pink-500/40 via-rose-600/25 to-fuchsia-700/30",
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  },
  {
    title: "Fisioactif",
    tag: "Physiotherapy & Wellness Clinic",
    description:
      "A physiotherapy and wellness clinic platform where clients explore services like rehabilitation, massage, and psychology, book consultations, and subscribe to session packs. Includes a React frontend and a Next.js gym app with an interactive calendar, authentication, and multilingual content.",
    stack: ["Next.js 15", "React", "JavaScript", "Tailwind CSS", "FullCalendar", "NextAuth"],
    image: "/projects/fisioactif.png",
    liveUrl: "https://fisioactif.netlify.app/",
    repoUrl: "https://github.com/SyedKamranGH/fisioactif-gym",
    repoOwner: "Kamran",
    // github.com/SyedKamranGH/fisioactif-frontend is private — set its url if it goes public
    extraRepos: [{ label: "Frontend repo" }],
    accent: "from-amber-500/40 via-orange-600/25 to-red-700/30",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4" />
      </>
    ),
  },
  {
    title: "Salon Management",
    tag: "Final Year Project",
    description:
      "A comprehensive salon management web app for bookings, staff scheduling, services, and customer records.",
    stack: ["HTML", "CSS", "JavaScript"],
    // Stock photo (not a screenshot): Greg Trowman on Unsplash, Unsplash License
    image: "/projects/salon-management.jpg",
    imageAlt: "Modern salon interior with round mirrors and styling chairs",
    accent: "from-violet-500/40 via-purple-600/25 to-indigo-700/30",
    icon: (
      <>
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
      </>
    ),
  },
];

const strengths = [
  {
    title: "Clean Code",
    description:
      "Building maintainable, reusable components with scalable architecture.",
    icon: <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />,
  },
  {
    title: "Performance Optimization",
    description:
      "Creating fast, accessible, and responsive web experiences across browsers and devices.",
    icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
  },
  {
    title: "Team Collaboration",
    description:
      "Collaborating with designers, backend developers, and cross-functional teams to deliver effective solutions.",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: "UI/UX Implementation",
    description:
      "Transforming Figma designs into pixel-perfect, responsive interfaces with a strong focus on usability and consistency.",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </>
    ),
  },
];

const education = [
  {
    title: "BS Computer Science (BSCS)",
    institution: "Govt College University Faisalabad",
    period: "2019 – 2024",
    summary:
      "Built a strong foundation in computer science, culminating in a Salon Management System web application as my final year project.",
  },
  {
    title: "Hifz-e-Quran",
    institution: "Madrasa Tul Madina",
  },
];

const languages = ["English", "Urdu"];

const card =
  "rounded-xl border border-violet-500/20 bg-[#0f1424]/90 p-6 shadow-[0_0_30px_-6px_rgba(168,85,247,0.45)]";

const tagPill =
  "rounded-full border border-violet-400/30 px-2.5 py-0.5 text-xs font-semibold text-pink-300";

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function SectionHeading({
  title,
  highlight,
  subtitle,
}: {
  title: string;
  highlight: string;
  subtitle: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-4xl text-center">
      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {title}{" "}
        <span className="bg-gradient-to-r from-pink-500 to-violet-400 bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>
      <p className="mt-3 leading-relaxed text-zinc-400">{subtitle}</p>
    </div>
  );
}

function ProfileIcon({ label }: { label: string }) {
  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3" />
    </svg>
  );
}

function ProjectButton({
  href,
  label,
  disabledLabel,
  disabledTitle = "Link coming soon",
  primary,
  icon,
}: {
  href?: string;
  label: string;
  disabledLabel: string;
  disabledTitle?: string;
  primary?: boolean;
  icon: React.ReactNode;
}) {
  const base =
    "inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition";
  const style = primary
    ? "bg-gradient-to-r from-violet-600 to-pink-500 text-white"
    : "bg-white text-violet-600";
  if (!href) {
    return (
      <span
        aria-disabled
        title={disabledTitle}
        className={`${base} ${style} cursor-not-allowed opacity-40`}
      >
        {icon}
        {disabledLabel}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${style} hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/30`}
    >
      {icon}
      {label}
    </a>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
      <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

export default function Home() {
  return (
    <div id="top" className="relative overflow-x-clip bg-zinc-950 text-zinc-300">
      {/* Background: glow blobs + faint grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-600/30 via-fuchsia-500/10 to-cyan-500/20 blur-3xl" />
        <div className="absolute top-[45%] -right-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-[75%] -left-40 h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)] bg-[size:64px_64px]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-end gap-8 px-6 py-4">
          <NavLinks links={navLinks} />
          <div className="flex items-center gap-2 md:border-l md:border-white/10 md:pl-6">
            {profileLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-violet-400/40 hover:text-white"
              >
                <ProfileIcon label={link.label} />
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="relative mx-auto max-w-7xl px-6">
        {/* Hero */}
        <section className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <div>
            <p className="text-xl text-violet-400 sm:text-2xl">Hello, I&apos;m</p>
            <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
              Sidra Tufail
            </h1>
            <h2 className="mt-4 min-h-[1.25em] whitespace-nowrap text-xl font-bold sm:text-4xl md:text-5xl lg:text-[2rem] xl:text-[2.5rem]">
              <Typewriter words={roles} />
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Creative and detail-oriented Frontend Developer with 2.5+ years of
              experience building responsive, scalable, and user-friendly web
              applications. Passionate about creating innovative web solutions,
              delivering exceptional user experiences, and embracing new
              challenges.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-lg bg-violet-500 px-6 py-3 font-medium text-white shadow-lg shadow-violet-500/30 transition hover:-translate-y-0.5 hover:bg-violet-400"
              >
                Contact Me
              </a>
              <a
                href="/Sidra-Tufail-CV.pdf"
                download
                className="rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
              >
                Download CV ↓
              </a>
            </div>
          </div>
          <div className="hidden justify-end lg:flex">
            <Globe />
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-16 pt-8 pb-16">
          <SectionHeading
            title="About"
            highlight="Me"
            subtitle="I'm a Frontend Developer passionate about building modern responsive and user-friendly web applications."
          />
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
            <div>
              <h3 className="text-2xl font-bold text-white">My Journey</h3>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed">
                <p>
                  My journey began with a Bachelor&apos;s degree in Computer
                  Science and grew into a passion for creating beautiful
                  functional user experiences. With over{" "}
                  <span className="text-white">2.5 years of experience</span>
                  I have worked on developing responsive web applications. I
                  currently work as an Associate Software Engineer at Expert
                  System Solution and contribute to GO Turtle as part of a
                  Germany-based team.
                </p>
                <p>
                  I specialize in modern web technologies, including{" "}
                  {coreStack.map((tech, i) => (
                    <span key={tech}>
                      <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text font-semibold text-transparent">
                        {tech}
                      </span>
                      {i < coreStack.length - 2 ? ", " : i === coreStack.length - 2 ? ", and " : ""}
                    </span>
                  ))}
                  , with experience in Redux Toolkit, REST API integration, and
                  building scalable, component-based applications.
                </p>
                <p>
                  I&apos;m continuously learning and keeping up with the latest
                  industry trends to build high-quality performant and
                  maintainable web applications. I&apos;m passionate about
                  creating seamless user experiences and continuously growing as
                  a frontend developer.
                </p>
              </div>
              <h4 className="mt-5 border-t border-white/10 pt-4 text-sm font-semibold tracking-widest text-violet-400 uppercase">
                My Highlights
              </h4>
              <dl className="mt-3 grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dd className="bg-gradient-to-r from-white to-violet-300 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                      {stat.value}
                    </dd>
                    <dt className="mt-1 text-sm text-zinc-400">{stat.label}</dt>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">What I Focus On</h3>
              <ul className="mt-3 grid gap-5 sm:grid-cols-2">
                {strengths.map((item) => (
                  <li
                    key={item.title}
                    className="flex flex-col items-center rounded-xl border border-violet-500/20 bg-[#0f1424]/90 px-5 py-5 text-center shadow-[0_0_30px_-6px_rgba(168,85,247,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_-4px_rgba(236,72,153,0.5)]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/25 to-pink-500/25 text-violet-300">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                        aria-hidden
                      >
                        {item.icon}
                      </svg>
                    </span>
                    <h4 className="mt-3 font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Experience & Education */}
        <section id="experience" className="scroll-mt-16 pt-8 pb-16">
          <SectionHeading
            title="Experience &"
            highlight="Education"
            subtitle="My professional journey and educational background"
          />
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-white">Work Experience</h3>
              <ol className="mt-4 space-y-4">
                {experience.map((job) => (
                  <li key={job.company} className={card}>
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                      <h4 className="text-lg font-semibold text-white">
                        {job.role}
                      </h4>
                      <p className="inline-flex items-center gap-1.5 text-sm text-violet-300">
                        <CalendarIcon />
                        {job.period}
                      </p>
                    </div>
                    <p className="mt-1 flex flex-wrap items-center gap-x-2 text-zinc-400">
                      {job.company}
                      <span aria-hidden>•</span>
                      <span className="inline-flex items-center gap-1">
                        <PinIcon />
                        {job.location}
                      </span>
                    </p>
                    <p className="mt-3 text-sm leading-relaxed">{job.summary}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <li key={tag} className={tagPill}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
              <ul className="mt-4 space-y-4">
                {education.map((item) => (
                  <li key={item.title} className={card}>
                    <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                      <h4 className="text-lg font-semibold text-white">
                        {item.title}
                      </h4>
                      {item.period && (
                        <p className="inline-flex items-center gap-1.5 text-sm text-violet-300">
                          <CalendarIcon />
                          {item.period}
                        </p>
                      )}
                    </div>
                    <p className="mt-1 text-zinc-400">{item.institution}</p>
                    {item.summary && (
                      <p className="mt-3 text-sm leading-relaxed">
                        {item.summary}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
              <h3 className="mt-6 text-2xl font-bold text-white">Languages</h3>
              <ul className="mt-4 space-y-3">
                {languages.map((language) => (
                  <li
                    key={language}
                    className="rounded-xl border border-violet-500/20 bg-[#0f1424]/90 px-6 py-3.5 text-white"
                  >
                    {language}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-16 pt-8 pb-16">
          <SectionHeading
            title="Skills &"
            highlight="Technologies"
            subtitle="Here are the technologies and tools I work with to bring ideas to life"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {skillCards.map((group) => (
              <div key={group.title} className={card}>
                <h3 className="text-center text-xl font-bold text-white">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-4">
                  {group.skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="flex justify-between text-sm">
                        <span className="text-zinc-200">{skill.name}</span>
                        <span className="text-violet-300">{skill.level}%</span>
                      </div>
                      <div
                        role="progressbar"
                        aria-label={skill.name}
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        className="mt-2 h-2 overflow-hidden rounded-full bg-white/10"
                      >
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <h3 className="mt-10 text-center text-xl font-bold text-white">
            Technologies I Work With
          </h3>
          <ul className="mx-auto mt-5 flex max-w-5xl flex-wrap justify-center gap-2.5">
            {technologies.map((tech) => (
              <li
                key={tech}
                className="cursor-default rounded-full border border-violet-400/30 px-4 py-1.5 text-sm text-violet-300 transition hover:border-pink-400/60 hover:text-pink-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-16 pt-8 pb-16">
          <SectionHeading
            title="Featured"
            highlight="Projects"
            subtitle="Here are some of my recent projects that showcase my skills and experience"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-violet-500/20 bg-[#0f1424]/90 shadow-[0_0_30px_-6px_rgba(168,85,247,0.45)] transition duration-300 hover:-translate-y-1"
              >
                <div className="relative h-36 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.imageAlt ?? `${project.title} screenshot`}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      aria-hidden
                      className={`flex h-full items-center justify-center bg-gradient-to-br ${project.accent} bg-[size:100%] transition duration-500 group-hover:scale-105`}
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
                      <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                          {project.icon}
                        </svg>
                      </span>
                    </div>
                  )}
                  <span className="absolute top-3 left-3 rounded-full bg-zinc-950/70 px-2.5 py-1 text-xs text-violet-200 backdrop-blur">
                    {project.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-white">
                    {project.title}
                  </h3>
                  {project.repoOwner && (
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-violet-300">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0" aria-hidden>
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      Team project · I contributed · Repo by {project.repoOwner}
                    </p>
                  )}
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <li key={tech} className={tagPill}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  {/* Stacked in the narrow 4-column layout so longer labels fit */}
                  <div className="mt-4 flex gap-2.5 xl:flex-col">
                    <ProjectButton
                      href={project.liveUrl}
                      label="Live Demo"
                      disabledLabel="Live Demo"
                      disabledTitle="No live demo available"
                      primary
                      icon={<ExternalIcon />}
                    />
                    <ProjectButton
                      href={project.repoUrl}
                      label={project.repoOwner ? "View on GitHub" : "Code"}
                      disabledLabel={
                        project.privateRepo
                          ? project.repoOwner ? "Private repo" : "Private"
                          : "Code"
                      }
                      disabledTitle={project.privateRepo ? "This repository is private" : undefined}
                      icon={<ProfileIcon label="GitHub" />}
                    />
                  </div>
                  {project.extraRepos && (
                    <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs">
                      {project.extraRepos.map((repo) => (
                        <li key={repo.label}>
                          {repo.url ? (
                            <a
                              href={repo.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-violet-300 transition hover:text-pink-300"
                            >
                              <ProfileIcon label="GitHub" />
                              {repo.label}
                            </a>
                          ) : (
                            <span title="This repository is private" className="inline-flex items-center gap-1.5 text-zinc-500">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden>
                                <rect x="3" y="11" width="18" height="11" rx="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                              </svg>
                              {repo.label}: private
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-16 pt-8 pb-16">
          <SectionHeading
            title="Get In"
            highlight="Touch"
            subtitle="I'm always open to discussing new opportunities and interesting projects"
          />
          <div className="grid items-start gap-10 md:gap-12 lg:grid-cols-2">
            <div className="min-w-0">
              <h3 className="text-2xl font-bold text-white">Let&apos;s Connect</h3>
              <p className="mt-4 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just
                want to say hello, I&apos;d love to hear from you. Let&apos;s
                create something amazing together!
              </p>
              <ul className="mt-8 space-y-5">
                {contactDetails.map((item) => (
                  <li key={item.label} className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/60 to-pink-500/40 text-white sm:h-12 sm:w-12">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
                        {item.icon}
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm text-zinc-400">{item.label}</p>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        {item.href ? (
                          <a
                            href={item.href}
                            aria-label={`${item.label === "Phone" ? "Call" : "Email"} ${item.value}`}
                            className="break-all py-1 font-medium text-white underline-offset-4 transition hover:text-pink-300 hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-pink-400"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-white">{item.value}</p>
                        )}
                        {item.label === "Email" && <CopyEmailButton email={EMAIL} />}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                {profileLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.label} profile (opens in a new tab)`}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white transition hover:border-white/30 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400"
                  >
                    <ProfileIcon label={link.label} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className={`${card} sm:p-8`}>
              <h3 className="mb-6 text-2xl font-bold text-white">Send Message</h3>
              <ContactForm email={EMAIL} />
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/5 py-8 text-center text-sm text-zinc-500">
        © 2026 Sidra Tufail · Built with Next.js, TypeScript & Tailwind CSS
      </footer>
    </div>
  );
}
