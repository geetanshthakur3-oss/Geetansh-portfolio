import { useState, type ReactNode } from "react";
import {
  Award,
  BadgeCheck,
  Code2,
  Cpu,
  Database,
  Dumbbell,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  MessageSquare,
  ScrollText,
  Terminal,
  Trophy,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "./Reveal";
import { EDUCATION, HOBBIES, PROFILE, PROJECTS, SKILL_GROUPS, STATS } from "./data";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="font-mono text-xs tracking-[0.2em] text-brand uppercase">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 leading-relaxed text-muted-foreground">{description}</p>
      )}
    </Reveal>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" className="bg-surface">
      <SectionHeading eyebrow="Introduction" title="About Me" />
      <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            I'm a Bachelor of Computer Applications student at{" "}
            <span className="font-medium text-foreground">CGC University, Mohali</span>, focused on
            software development and problem solving. My strongest foundation is in{" "}
            <span className="font-medium text-foreground">C++</span>, where I apply
            Object-Oriented Programming and File Handling to build practical console applications.
          </p>
          <p>
            Alongside C++, I work with <span className="font-medium text-foreground">Python</span>{" "}
            and study core computer science subjects including{" "}
            <span className="font-medium text-foreground">
              Data Structures &amp; Algorithms, OOP and DBMS
            </span>
            . I use <span className="font-medium text-foreground">Git and GitHub</span> to version
            and share my work.
          </p>
          <p>
            I actively solve Data Structures &amp; Algorithms problems on LeetCode to sharpen my
            logical thinking, and I'm currently looking for{" "}
            <span className="font-medium text-foreground">
              software development internship opportunities
            </span>{" "}
            where I can learn from experienced engineers and contribute to real products.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <dl className="grid grid-cols-2 gap-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="surface-card p-5">
                <dd className="font-display text-xl font-bold text-gradient">{stat.value}</dd>
                <dt className="mt-1 text-xs text-muted-foreground">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}

const SKILL_ICONS = {
  code: Code2,
  cpu: Cpu,
  terminal: Terminal,
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Toolkit"
        title="Skills & Technologies"
        description="The languages, computer science fundamentals and tools I use every day."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {SKILL_GROUPS.map((group, i) => {
          const Icon = SKILL_ICONS[group.icon];
          return (
            <Reveal key={group.title} delay={i * 90}>
              <article className="surface-card h-full p-6">
                <div className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{group.title}</h3>
                <ul className="mt-4 space-y-4">
                  {group.skills.map((skill) => (
                    <li key={skill.name}>
                      <p className="text-sm font-semibold">{skill.name}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">{skill.note}</p>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" className="bg-surface">
      <SectionHeading
        eyebrow="Work"
        title="Projects"
        description="Console applications I built while learning C++, OOP and file handling."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={i * 100}>
            <article className="surface-card flex h-full flex-col p-6 sm:p-7">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-gradient-brand text-brand-foreground">{project.tech}</Badge>
                <Badge variant="secondary">{project.highlight}</Badge>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <h4 className="mt-6 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Key features
              </h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <BadgeCheck className="size-4 shrink-0 text-brand" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3 pt-1">
                <Button asChild variant="outline" size="sm">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer noopener">
                    <Github className="size-4" /> GitHub
                  </a>
                </Button>
                <Button asChild size="sm" className="bg-gradient-brand">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer noopener">
                    <ExternalLink className="size-4" /> View Project
                  </a>
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Academics" title="Education" />
      <ol className="relative mx-auto mt-12 max-w-3xl border-l border-border pl-8">
        {EDUCATION.map((item, i) => (
          <Reveal as="li" key={item.degree} delay={i * 110} className="relative pb-10 last:pb-0">
            <span className="absolute -left-[41px] mt-1.5 inline-flex size-6 items-center justify-center rounded-full bg-gradient-brand text-brand-foreground ring-4 ring-background">
              <GraduationCap className="size-3.5" />
            </span>
            <div className="surface-card p-5 sm:p-6">
              <p className="font-mono text-xs text-brand">{item.period}</p>
              <h3 className="mt-2 font-display text-lg font-semibold">{item.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
              <p className="mt-3 text-sm font-medium">{item.detail}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section id="certifications" className="bg-surface">
      <SectionHeading eyebrow="Credentials" title="Certification" />
      <Reveal className="mx-auto mt-12 max-w-2xl">
        <article className="surface-card p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground">
              <ScrollText className="size-5" />
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-xl font-semibold">Data Analytics</h3>
              <p className="mt-1 text-sm text-muted-foreground">CGC University, Mohali</p>
            </div>
          </div>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs tracking-wide text-muted-foreground uppercase">Duration</dt>
              <dd className="mt-1 text-sm font-medium">15 June 2026 – 15 July 2026</dd>
            </div>
            <div>
              <dt className="text-xs tracking-wide text-muted-foreground uppercase">
                Certificate ID
              </dt>
              <dd className="mt-1 font-mono text-sm font-medium">2241</dd>
            </div>
          </dl>
          <div className="mt-7">
            <Button variant="outline" size="sm" disabled title="Certificate link coming soon">
              <ExternalLink className="size-4" /> View Certificate
            </Button>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}

export function Achievements() {
  const items = [
    {
      icon: Trophy,
      title: "Scholarship Recipient",
      detail: "₹10,000 Scholarship",
    },
    {
      icon: Code2,
      title: "DSA Problem Solver",
      detail: "Active LeetCode DSA Problem Solver",
    },
  ];

  return (
    <Section id="achievements">
      <SectionHeading eyebrow="Recognition" title="Achievements" />
      <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 110}>
            <article className="surface-card relative h-full overflow-hidden p-6 sm:p-7">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-brand"
              />
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <item.icon className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function ProblemSolving() {
  return (
    <Section id="problem-solving" className="bg-surface">
      <Reveal className="surface-card mx-auto max-w-4xl p-8 text-center sm:p-12">
        <span className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground">
          <Cpu className="size-6" />
        </span>
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight">Problem Solving</h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
          Consistently improving my problem-solving skills through Data Structures &amp; Algorithms
          practice on LeetCode.
        </p>
        <div className="mt-7">
          <Button asChild size="lg" className="bg-gradient-brand">
            <a href={PROFILE.leetcodeUrl} target="_blank" rel="noreferrer noopener">
              View LeetCode Profile <ExternalLink className="size-4" />
            </a>
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}

export function GithubSection() {
  return (
    <Section id="github">
      <div className="mx-auto grid max-w-4xl items-center gap-8 sm:grid-cols-[1fr_auto]">
        <Reveal>
          <div className="surface-card flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-center gap-4">
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-foreground text-background">
                <Github className="size-6" />
              </span>
              <div>
                <p className="text-xs tracking-wide text-muted-foreground uppercase">GitHub</p>
                <p className="font-mono text-base font-semibold">{PROFILE.github}</p>
              </div>
            </div>
            <Button asChild variant="outline">
              <a href={PROFILE.githubUrl} target="_blank" rel="noreferrer noopener">
                View GitHub Profile <ExternalLink className="size-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Hobbies() {
  const icons = [Code2, MessageSquare, Dumbbell];
  return (
    <Section id="hobbies" className="bg-surface">
      <SectionHeading eyebrow="Beyond code" title="Hobbies" />
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {HOBBIES.map((hobby, i) => {
          const Icon = icons[i] ?? Code2;
          return (
            <Reveal key={hobby.name} delay={i * 90}>
              <article className="surface-card h-full p-6 text-center">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold">{hobby.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{hobby.note}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in every field.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success(`Thanks ${form.name.split(" ")[0]}! Please also reach me at ${PROFILE.email}.`);
    setForm({ name: "", email: "", message: "" });
  };

  const details = [
    { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: MapPin, label: "Location", value: PROFILE.location },
    { icon: Github, label: "GitHub", value: PROFILE.github, href: PROFILE.githubUrl },
    { icon: Code2, label: "LeetCode", value: PROFILE.leetcode, href: PROFILE.leetcodeUrl },
  ];

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Connect"
        description="I'm currently looking for Software Development Internship opportunities and would love to connect with recruiters, developers, and technology teams."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <ul className="grid gap-4">
            {details.map((item) => (
              <li key={item.label} className="surface-card flex items-center gap-4 p-5">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <item.icon className="size-[18px]" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs tracking-wide text-muted-foreground uppercase">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer noopener"
                      className="block truncate text-sm font-medium underline-offset-4 hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="truncate text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} noValidate className="surface-card grid gap-5 p-6 sm:p-8">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about the opportunity…"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>
            <Button type="submit" size="lg" className="bg-gradient-brand">
              <Award className="size-4" /> Send Message
            </Button>
            <p className="text-xs text-muted-foreground">
              This form is a demo — please email me directly at {PROFILE.email}.
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  const quick = ["Home", "About", "Skills", "Projects", "Contact"];
  return (
    <footer className="border-t border-border bg-surface py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold">{PROFILE.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Software Development Intern • BCA Student
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <h2 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            Quick links
          </h2>
          <ul className="mt-3 grid gap-2">
            {quick.map((label) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            Social
          </h2>
          <ul className="mt-3 flex gap-2">
            <li>
              <Button asChild variant="outline" size="icon" aria-label="GitHub profile">
                <a href={PROFILE.githubUrl} target="_blank" rel="noreferrer noopener">
                  <Github className="size-[18px]" />
                </a>
              </Button>
            </li>
            <li>
              <Button asChild variant="outline" size="icon" aria-label="LeetCode profile">
                <a href={PROFILE.leetcodeUrl} target="_blank" rel="noreferrer noopener">
                  <Code2 className="size-[18px]" />
                </a>
              </Button>
            </li>
            <li>
              <Button asChild variant="outline" size="icon" aria-label="Send an email">
                <a href={`mailto:${PROFILE.email}`}>
                  <Mail className="size-[18px]" />
                </a>
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-sm text-muted-foreground sm:px-6">
        © 2026 {PROFILE.name}. All rights reserved.
      </p>
    </footer>
  );
}
