import CopyEmailButton from "./components/CopyEmailButton";
import Typewriter from "./components/Typewriter";

const EMAIL = "sidra.saqib712@gmail.com";

const roles = ["Frontend Developer", "Web Application Developer"];

const coreStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Redux Toolkit",
  "Tailwind CSS",
];

// TODO: replace with real profile URLs
const profileLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/your-profile" },
  { label: "GitHub", href: "https://github.com/your-username" },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const stats = [
  { value: "2.5+", label: "Years Experience" },
  { value: "4+", label: "Projects Shipped" },
  { value: "15+", label: "Technologies" },
];

const experience = [
  {
    company: "Expert System Solution",
    role: "Associate Software Engineer",
    period: "Jan 2025 – Present",
    location: "Lahore",
    points: [
      "Building responsive and interactive web applications using HTML, CSS, JavaScript, React, and TypeScript",
      "Translating UI/UX designs into functional and reusable front-end components",
      "Integrating REST APIs in collaboration with backend developers",
      "Ensuring cross-browser compatibility and optimized performance across devices",
      "Following scalable architecture practices for maintainable code structure",
    ],
  },
  {
    company: "Fairchance Software",
    role: "Associate Software Engineer",
    period: "Jul 2024 – Dec 2024",
    location: "Lahore",
    points: [
      "Developed and maintained responsive web applications using HTML, CSS, JavaScript, and React",
      "Collaborated with cross-functional teams to implement user-friendly and interactive UI components",
      "Improved web application performance by optimizing pages for speed, accessibility, and responsiveness",
      "Worked closely with designers and backend developers to integrate APIs and ensure seamless functionality",
    ],
  },
];

const skillGroups = [
  {
    title: "Languages",
    icon: "</>",
    accent: "from-violet-500/20",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    title: "Frameworks & Libraries",
    icon: "◆",
    accent: "from-fuchsia-500/20",
    items: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    title: "Tools",
    icon: "⚙",
    accent: "from-cyan-500/20",
    items: ["Git", "GitHub", "VS Code", "Figma", "Chrome DevTools", "Postman"],
  },
  {
    title: "Architecture",
    icon: "▦",
    accent: "from-emerald-500/20",
    items: [
      "Nx Monorepo",
      "REST APIs",
      "Component-Based Architecture",
      "Responsive Web Design",
    ],
  },
];

type Project = {
  title: string;
  tag: string;
  description: string;
  highlights: string[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  privateRepo?: boolean;
};

// TODO: set liveUrl / repoUrl for each project. Buttons without a URL are
// shown as disabled ("Coming soon"), so no broken links go live.
const projects: Project[] = [
  {
    title: "GO Turtle",
    tag: "Germany-based Project",
    description:
      "Front-End Developer on an international platform — building reusable UI components and managing complex application state.",
    highlights: [
      "Reusable UI components including tables, modals, and filters",
      "Application state managed with Redux Toolkit and efficient API integration",
    ],
    stack: ["React", "TypeScript", "Redux Toolkit", "Material UI", "REST APIs"],
    privateRepo: true,
  },
  {
    title: "Yourself Pilates",
    tag: "Fitness Website",
    description:
      "A modern, responsive fitness website with a clean and engaging UI, built mobile-first.",
    highlights: [
      "Mobile-first design using Tailwind CSS",
      "Focused on performance optimization and smooth user experience",
    ],
    stack: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Fisioactif Gym Management",
    tag: "Web Application",
    description:
      "A responsive gym management web app for member registration, subscription plans, and class scheduling.",
    highlights: [
      "REST API integration for dynamic data handling",
      "Optimized performance and mobile responsiveness",
    ],
    stack: ["React", "JavaScript", "CSS", "REST APIs"],
  },
  {
    title: "Salon Management System",
    tag: "Final Year Project",
    description:
      "A comprehensive salon management web app for bookings, staff scheduling, services, and customer records.",
    highlights: [
      "Responsive, user-friendly interfaces",
      "Structured workflows that improve operational efficiency",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
  },
];

const education = [
  {
    title: "BS Computer Science (BSCS)",
    institution: "Govt College University Faisalabad",
    period: "2019 – 2024",
  },
  {
    title: "Hifz-e-Quran",
    institution: "Madrasa Tul Madina",
  },
];

const glass =
  "rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]";

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-sm tracking-widest text-violet-400 uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-px w-24 bg-gradient-to-r from-violet-500 to-transparent" />
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
  primary,
  icon,
}: {
  href?: string;
  label: string;
  disabledLabel: string;
  primary?: boolean;
  icon?: React.ReactNode;
}) {
  const base =
    "inline-flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition";
  if (!href) {
    return (
      <span
        aria-disabled
        className={`${base} cursor-not-allowed border border-dashed border-white/10 text-zinc-500`}
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
      className={`${base} ${
        primary
          ? "bg-violet-500 text-white shadow-lg shadow-violet-500/20 hover:bg-violet-400"
          : "border border-white/15 text-white hover:border-white/30 hover:bg-white/5"
      }`}
    >
      {icon}
      {label}
    </a>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-zinc-950 text-zinc-300">
      {/* Background: glow blobs + faint grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-600/30 via-fuchsia-500/10 to-cyan-500/20 blur-3xl" />
        <div className="absolute top-[45%] -right-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-[75%] -left-40 h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)] bg-[size:64px_64px]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-mono text-lg font-semibold text-white">
            sidra<span className="text-violet-400">.dev</span>
          </a>
          <ul className="hidden gap-8 text-sm md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
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

      <main id="top" className="relative mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section className="flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20">
          <p className="text-xl text-violet-400 sm:text-2xl">Hello, I&apos;m</p>
          <h1 className="mt-3 text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
            Sidra Tufail
          </h1>
          <h2 className="mt-4 min-h-[1.25em] text-3xl font-bold sm:text-5xl">
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
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 py-24">
          <SectionHeading eyebrow="01 · About" title="About Me" />
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="space-y-5 text-lg leading-relaxed lg:col-span-3">
              <p>
                I&apos;m a creative and detail-oriented Frontend Developer with{" "}
                <span className="text-white">2.5+ years of experience</span>{" "}
                building responsive and user-friendly web applications —
                currently as an Associate Software Engineer at Expert System
                Solution, and on GO Turtle, an international platform for a
                Germany-based team.
              </p>
              <p>
                I work with HTML, CSS, JavaScript, TypeScript, React, and
                Next.js, with experience in modern UI libraries, REST API
                integration, and{" "}
                <span className="text-white">scalable architectures</span>. I&apos;m
                passionate about creating intuitive user experiences and
                optimizing web performance.
              </p>
              <p>
                Based in Lahore, Pakistan and open to relocating to Dubai.
              </p>
              <div className="pt-2">
                <p className="font-mono text-sm tracking-widest text-violet-400 uppercase">
                  Core stack
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {coreStack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-zinc-300 backdrop-blur"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 self-start lg:col-span-2 lg:grid-cols-1">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`${glass} p-5 transition hover:border-violet-400/30`}
                >
                  <p className="bg-gradient-to-r from-white to-violet-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-24 py-24">
          <SectionHeading eyebrow="02 · Experience" title="Where I've Worked" />
          <ol className="relative space-y-10 border-l border-white/10 pl-8">
            {experience.map((job) => (
              <li key={job.company} className="relative">
                <span className="absolute top-1.5 -left-[37px] h-3 w-3 rounded-full border-2 border-violet-400 bg-zinc-950 shadow-[0_0_12px_rgba(167,139,250,0.8)]" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-xl font-bold text-white">
                    {job.role}{" "}
                    <span className="text-violet-300">@ {job.company}</span>
                  </h3>
                  <p className="font-mono text-sm text-zinc-500">
                    {job.period} · {job.location}
                  </p>
                </div>
                <ul className="mt-4 space-y-2">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-violet-400">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-24 py-24">
          <SectionHeading eyebrow="03 · Skills" title="Tech Stack" />
          <div className="grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className={`${glass} group relative overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40`}
              >
                <div
                  aria-hidden
                  className={`absolute inset-0 bg-gradient-to-br ${group.accent} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div className="relative">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/15 font-mono text-violet-300 transition group-hover:scale-110 group-hover:bg-violet-500/25">
                      {group.icon}
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="cursor-default rounded-md border border-white/10 bg-zinc-900/70 px-3 py-1.5 text-sm transition hover:border-violet-400/50 hover:text-white"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24 py-24">
          <SectionHeading eyebrow="04 · Work" title="Featured Projects" />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <article
                key={project.title}
                className={`${glass} group relative flex flex-col overflow-hidden p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40`}
              >
                <div
                  aria-hidden
                  className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-violet-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative flex items-start justify-between">
                  <span className="font-mono text-sm text-zinc-500">
                    0{i + 1}
                  </span>
                  <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
                    {project.tag}
                  </span>
                </div>
                <h3 className="relative mt-4 text-2xl font-bold text-white transition-colors group-hover:text-violet-300">
                  {project.title}
                </h3>
                <p className="relative mt-3 leading-relaxed text-zinc-400">
                  {project.description}
                </p>
                <ul className="relative mt-4 flex-1 space-y-2 text-sm text-zinc-400">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="text-violet-400">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <ul className="relative mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-cyan-400/10 px-2.5 py-1 font-mono text-xs text-cyan-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="relative mt-6 flex gap-3 border-t border-white/10 pt-5">
                  <ProjectButton
                    href={project.liveUrl}
                    label="Live Demo ↗"
                    disabledLabel="Demo coming soon"
                    primary
                  />
                  <ProjectButton
                    href={project.repoUrl}
                    label="GitHub"
                    disabledLabel={project.privateRepo ? "Private repo" : "Coming soon"}
                    icon={<ProfileIcon label="GitHub" />}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="scroll-mt-24 py-24">
          <SectionHeading eyebrow="05 · Education" title="Education" />
          <div className="grid gap-6 sm:grid-cols-2">
            {education.map((item) => (
              <div key={item.title} className={`${glass} p-6`}>
                {item.period && (
                  <p className="font-mono text-sm text-zinc-500">
                    {item.period}
                  </p>
                )}
                <h3 className="mt-1 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-zinc-400">{item.institution}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 py-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/25 via-zinc-900/80 to-cyan-600/15 px-6 py-16 text-center backdrop-blur-xl sm:px-16">
            <div
              aria-hidden
              className="absolute -top-32 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl"
            />
            <div className="relative">
              <p className="font-mono text-sm tracking-widest text-violet-400 uppercase">
                06 · Contact
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-5xl">
                Let&apos;s build something great
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-zinc-400">
                I&apos;m open to frontend roles — in Lahore, remote, or in Dubai.
              </p>
              <div className="mt-8">
                <CopyEmailButton email={EMAIL} />
              </div>
              <p className="mt-6 text-sm text-zinc-500">
                📍 Lahore, Pakistan · Open to relocation to Dubai
              </p>
              <div className="mt-8 flex justify-center gap-4">
                {profileLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-2 text-sm text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
                  >
                    <ProfileIcon label={link.label} />
                    {link.label}
                  </a>
                ))}
              </div>
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
