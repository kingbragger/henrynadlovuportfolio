import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/henry-portrait.png.asset.json";
import certWebDev from "@/assets/web-dev-fundamentals.png.asset.json";
import certDataLit from "@/assets/data-literacy.png.asset.json";
import certStanfordDS from "@/assets/stanford-data-science.png.asset.json";
import certStanfordAI from "@/assets/stanford-ai-ml.png.asset.json";
import certAlxFounder from "@/assets/alx-founder-academy.png.asset.json";
import certAlxAI from "@/assets/alx-ai-career.png.asset.json";
import certAlxSE from "@/assets/alx-software-eng.png.asset.json";
import projKasi from "@/assets/project-kasi-dash.jpg";
import projUnity from "@/assets/project-unity-logistics.jpg";
import projUnicorn from "@/assets/project-unicorn-finance.jpg";
import projSafeMed from "@/assets/project-safemed.jpg";
import projDream from "@/assets/project-dreamhouse.jpg";
import projTime from "@/assets/project-time-tracker.jpg";
import projBet from "@/assets/project-bet-intelligence.jpg";
import projIelts from "@/assets/project-ielts.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const projects = [
  {
    name: "Kasi Dash",
    tag: "Logistics Platform",
    blurb:
      "Full stack delivery dashboard with live order tracking, driver assignment, role based access and analytics.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    repo: "https://github.com/kingbragger/Kasi-Dash",
    image: projKasi,
  },
  {
    name: "Unity Logistics and Delivery",
    tag: "Delivery MVP",
    blurb:
      "Platform connecting customers, drivers and business operations with real time dispatch and route management.",
    stack: ["React", "TypeScript", "Supabase"],
    repo: "https://github.com/kingbragger/unity-logistics-and-delivery-mvp",
    image: projUnity,
  },
  {
    name: "Unicorn Finance Hub",
    tag: "Fintech Web App",
    blurb:
      "Personal finance tracker with budgeting, transaction categorisation, charts and secure authentication.",
    stack: ["React", "TypeScript", "Supabase"],
    repo: "https://github.com/kingbragger/Unicorn-Finance-Hub",
    image: projUnicorn,
  },
  {
    name: "SafeMed Dashboard",
    tag: "Healthtech",
    blurb:
      "Healthcare dashboard for managing patient information, prescriptions and clinical workflows.",
    stack: ["React", "TypeScript", "PostgreSQL"],
    repo: "https://github.com/kingbragger/SafeMedDashboard",
    image: projSafeMed,
  },
  {
    name: "DreamHouse",
    tag: "PropTech",
    blurb:
      "Property and housing application with rich search, media galleries and enquiry management.",
    stack: ["TypeScript", "React", "REST APIs"],
    repo: "https://github.com/kingbragger/Dreamhouse",
    image: projDream,
  },
  {
    name: "Design Time Tracker",
    tag: "Productivity",
    blurb:
      "Project time tracking application with reporting, billing summaries and team dashboards.",
    stack: ["TypeScript", "React", "Node.js"],
    repo: "https://github.com/kingbragger/DesignTimeTracker",
    image: projTime,
  },
  {
    name: "Bet Intelligence",
    tag: "Data Science",
    blurb:
      "Python analytics engine performing statistical modelling and predictive analysis on sports data.",
    stack: ["Python", "Pandas", "NumPy", "SciPy"],
    repo: "https://github.com/kingbragger/BetIntelligence",
    image: projBet,
  },
  {
    name: "IELTS Speaking Trainer",
    tag: "AI Learning Tool",
    blurb:
      "AI assisted speaking practice application scoring fluency, coherence and pronunciation for IELTS candidates.",
    stack: ["React", "TypeScript", "LLM APIs"],
    repo: "https://github.com/kingbragger/IELTSSpeakTrainer2.0",
    image: projIelts,
  },
];

const certifications = [
  { name: "Web Development Fundamentals", issuer: "IBM SkillsBuild", year: "2026", image: certWebDev.url },
  { name: "Data Literacy", issuer: "IBM SkillsBuild", year: "2026", image: certDataLit.url },
  { name: "Fundamentals of Data Science in Precision Medicine and Cloud Computing", issuer: "Stanford University Online", year: "2025", image: certStanfordDS.url },
  { name: "Fundamentals of AI and ML in Precision Medicine", issuer: "Stanford University Online", year: "2025", image: certStanfordAI.url },
  { name: "Software Engineering Professional Certificate", issuer: "ALX Africa", year: "2024", image: certAlxSE.url },
  { name: "AI Career Essentials", issuer: "ALX Africa", year: "2024", image: certAlxAI.url },
  { name: "Founder Academy Certificate of Completion", issuer: "ALX Ventures", year: "2024", image: certAlxFounder.url },
];

const additionalCerts = [
  { name: "IoT Wireless and Cloud Computing Emerging Technologies", issuer: "Yonsei University, Coursera", year: "2026" },
  { name: "Basic Information Literacy", issuer: "State University of New York, Coursera", year: "2026" },
  { name: "Google Workspace, Gmail", issuer: "Google Cloud, Coursera", year: "2026" },
];

const stacks = {
  "Languages and Frameworks": ["TypeScript", "JavaScript", "Python", "C#", "SQL", "React", "Node.js", "Express", "ASP.NET Core", "Tailwind CSS"],
  "AI, Data and Analytics": ["LLM Integration", "AI Ethics", "Pandas", "NumPy", "SciPy", "Power BI", "Statistical Analysis"],
  "Cloud, Databases and DevOps": ["Azure", "Cloudflare", "Supabase", "Firebase", "PostgreSQL", "MySQL", "MongoDB", "Docker", "GitHub Actions"],
  "IoT and Emerging Tech": ["IoT Wireless Systems", "Cloud Computing", "Edge Deployment", "Sensor Data Pipelines"],
};

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-2xl">
          <span className="text-ember">H</span>
          <span>Ndlovu</span>
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#work" className="transition-colors hover:text-foreground">Work</a>
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
          <a href="#stack" className="transition-colors hover:text-foreground">Stack</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </nav>
        <a
          href="https://github.com/kingbragger"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-ember/40 px-4 py-2 text-xs font-medium text-ember transition-colors hover:bg-ember hover:text-primary-foreground"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-ember/20 blur-[140px]" />
      </div>
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.4fr_1fr] md:items-center md:py-32">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-moss" />
            Available for freelance
          </div>
          <h1 className="font-display text-6xl leading-[0.95] md:text-8xl">
            Software that
            <br />
            <span className="italic text-ember">actually ships.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I am Henry Ndlovu, a full stack software engineer based in Pretoria. I design and build
            web, AI and cloud products across logistics, fintech, healthtech and small business.
            Over the past four years I have shipped more than fifty projects.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-full bg-ember px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Start a project
            </a>
          </div>
          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8 text-sm">
            <div>
              <dt className="text-muted-foreground">Years shipping</dt>
              <dd className="mt-1 font-display text-3xl text-ember">4+</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Projects</dt>
              <dd className="mt-1 font-display text-3xl text-ember">50+</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Repositories</dt>
              <dd className="mt-1 font-display text-3xl text-ember">45</dd>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-ember/60" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border">
            <img
              src={portrait.url}
              alt="Henry Ndlovu, software engineer, wearing headphones with code editors in the background"
              className="aspect-square w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink via-ink/40 to-transparent p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-ember">
                Pretoria, ZA
              </p>
              <p className="mt-1 font-display text-2xl">Henry Ndlovu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_2fr]">
        <div>
          <SectionLabel>01, Profile</SectionLabel>
          <h2 className="mt-4 font-display text-5xl leading-tight">
            Full stack, curious, relentlessly practical.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I am a results driven software engineer with four plus years of experience designing,
            building and maintaining scalable software across full stack web, artificial intelligence,
            cloud, IoT and data science.
          </p>
          <p>
            I have delivered production applications for logistics, fintech, healthtech and small
            business, architected REST APIs and third party integrations, and engineered LLM powered
            features using OpenAI and the Lovable AI Gateway. I also containerise with Docker and
            automate build, test and deploy pipelines on GitHub Actions and Azure DevOps.
          </p>
          <p>
            I care about accessibility, performance and shipping. If it does not run in production, it
            does not count.
          </p>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 flex items-end justify-between gap-8">
          <div>
            <SectionLabel>02, Selected Work</SectionLabel>
            <h2 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
              A few things
              <br />
              <span className="italic text-ember">I have built.</span>
            </h2>
          </div>
          <a
            href="https://github.com/kingbragger?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="hidden shrink-0 text-sm text-muted-foreground underline-offset-4 hover:text-ember hover:underline md:block"
          >
            All 45 repositories on GitHub, arrow right
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-ember/60"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                <img
                  src={p.image}
                  alt={`${p.name}, ${p.tag} cover artwork`}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <span className="absolute right-4 top-4 rounded-full bg-ink/80 px-2.5 py-1 font-mono text-[10px] tracking-widest text-muted-foreground backdrop-blur">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between p-8 pt-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-ember">
                    {p.tag}
                  </p>
                  <h3 className="mt-3 font-display text-3xl">{p.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {p.blurb}
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm text-ember opacity-0 transition-opacity group-hover:opacity-100">
                  View repository
                  <span aria-hidden>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionLabel>03, Core Competencies</SectionLabel>
        <h2 className="mt-4 max-w-3xl font-display text-5xl leading-tight">
          Tools I reach for.
        </h2>
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {Object.entries(stacks).map(([group, items]) => (
            <div key={group} className="border-t border-border pt-6">
              <p className="font-mono text-xs uppercase tracking-widest text-ember">
                {group}
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-display text-xl">
                {items.map((s, i) => (
                  <li key={s} className="flex items-center gap-4">
                    <span>{s}</span>
                    {i < items.length - 1 ? <span className="text-ember/50">•</span> : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-end justify-between gap-8">
          <div>
            <SectionLabel>04, Certifications</SectionLabel>
            <h2 className="mt-4 font-display text-5xl leading-tight">
              Always learning.
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm text-muted-foreground md:block">
            Credentials from Stanford, IBM, Google, ALX and more, spanning software,
            AI, data science and cloud.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <figure
              key={c.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-ember/60"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                <img
                  src={c.image}
                  alt={`${c.name} certificate awarded to Henry Ndlovu by ${c.issuer}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-ember backdrop-blur">
                  {c.year}
                </span>
              </div>
              <figcaption className="flex flex-1 flex-col justify-between gap-3 p-5">
                <h3 className="font-display text-xl leading-tight">{c.name}</h3>
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {c.issuer}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16">
          <p className="font-mono text-xs uppercase tracking-widest text-ember">
            Also completed
          </p>
          <ul className="mt-4 divide-y divide-border border-y border-border">
            {additionalCerts.map((c) => (
              <li
                key={c.name}
                className="grid grid-cols-[auto_1fr_auto] items-baseline gap-6 py-4 text-base"
              >
                <span className="font-mono text-sm text-ember">{c.year}</span>
                <span className="font-display text-xl">{c.name}</span>
                <span className="text-right text-sm text-muted-foreground">{c.issuer}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-32 text-center">
        <SectionLabel className="justify-center">05, Contact</SectionLabel>
        <h2 className="mx-auto mt-6 max-w-4xl font-display text-6xl leading-[1] md:text-8xl">
          Have a project?
          <br />
          <span className="italic text-ember">Let us build it.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground">
          Freelance, contract or full time. Web apps, dashboards, AI features and data pipelines.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:ndlovuhenry73@gmail.com"
            className="rounded-full bg-ember px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            ndlovuhenry73@gmail.com
          </a>
          <a
            href="mailto:unity@kasidash.co.za"
            className="rounded-full border border-border px-7 py-4 text-sm font-medium transition-colors hover:bg-secondary"
          >
            unity@kasidash.co.za
          </a>
          <a
            href="https://wa.me/27840640853"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-7 py-4 text-sm font-medium transition-colors hover:bg-secondary"
          >
            WhatsApp, +27 84 064 0853
          </a>
        </div>
        <div className="mx-auto mt-12 grid max-w-2xl gap-4 rounded-2xl border border-border bg-secondary/30 p-6 text-left md:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Enterprise Name</p>
            <p className="mt-1 font-display text-lg">KASIDASH AND BUILDFORGE</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Registration Number</p>
            <p className="mt-1 font-display text-lg">2026 / 362826 / 07</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Registration Date</p>
            <p className="mt-1 font-display text-lg">07/05/2026</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Company Type</p>
            <p className="mt-1 font-display text-lg">Private Company</p>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-lg justify-center gap-8 border-t border-border pt-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <a href="https://github.com/kingbragger" target="_blank" rel="noreferrer" className="hover:text-ember">
            GitHub
          </a>
          <a href="https://linkedin.com/in/henry-ndlovu" target="_blank" rel="noreferrer" className="hover:text-ember">
            LinkedIn
          </a>
          <a href="tel:+27713525409" className="hover:text-ember">
            +27 71 352 5409
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-muted-foreground md:flex-row">
        <p>© 2026 Henry Ndlovu. Pretoria, South Africa.</p>
        <p className="font-mono uppercase tracking-widest">Built with care.</p>
      </div>
    </footer>
  );
}

function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-ember ${className}`}>
      <span className="inline-block h-px w-8 bg-ember" />
      {children}
    </div>
  );
}
