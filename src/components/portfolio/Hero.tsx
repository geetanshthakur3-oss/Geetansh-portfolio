import { ArrowRight, Github, Code2, Sparkles, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { PROFILE, STATS } from "./data";

const CODE_LINES = [
  { n: 1, content: <span className="text-muted-foreground">// solve.cpp</span> },
  {
    n: 2,
    content: (
      <>
        <span className="text-brand">#include</span> &lt;bits/stdc++.h&gt;
      </>
    ),
  },
  { n: 3, content: <span className="text-muted-foreground">using namespace std;</span> },
  { n: 4, content: <span /> },
  {
    n: 5,
    content: (
      <>
        <span className="text-brand">int</span> main() {"{"}
      </>
    ),
  },
  {
    n: 6,
    content: (
      <span className="pl-4">
        vector&lt;int&gt; dsa = {"{"}1, 2, 3{"}"};
      </span>
    ),
  },
  {
    n: 7,
    content: (
      <span className="pl-4">
        <span className="text-brand">for</span> (auto &amp;day : dsa) practice(day);
      </span>
    ),
  },
  {
    n: 8,
    content: (
      <span className="pl-4">
        cout &lt;&lt; <span className="text-accent-foreground">"keep building"</span>;
      </span>
    ),
  },
  { n: 9, content: <>{"}"}</> },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div
        aria-hidden="true"
        className="grid-glow pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles className="size-3.5 text-brand" />
              Software Development Intern • BCA Student
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl leading-[1.08] font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Hi, I'm <span className="text-gradient">Geetansh Thakur</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 max-w-xl font-display text-lg font-semibold text-foreground/90 sm:text-xl">
              Building strong foundations in Software Development, C++ and Data Structures &
              Algorithms.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              I'm a BCA student passionate about software development and problem solving. I enjoy
              building practical applications, understanding core programming concepts, and
              continuously improving my DSA skills.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="bg-gradient-brand">
                <a href="#projects">
                  View My Projects <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">
                  <Mail className="size-4" /> Connect With Me
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                <Github className="size-4" /> GitHub
              </a>
              <a
                href={PROFILE.leetcodeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                <Code2 className="size-4" /> LeetCode
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="lg:justify-self-end">
          <div className="w-full max-w-md rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="size-2.5 rounded-full bg-destructive/70" />
              <span className="size-2.5 rounded-full bg-chart-5/80" />
              <span className="size-2.5 rounded-full bg-chart-2/80" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">solve.cpp</span>
            </div>
            <pre className="overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-6 text-foreground/90">
              <code>
                {CODE_LINES.map((line) => (
                  <div key={line.n} className="flex gap-4">
                    <span className="w-4 shrink-0 text-right text-muted-foreground/60">
                      {line.n}
                    </span>
                    <span>{line.content}</span>
                  </div>
                ))}
              </code>
            </pre>
            <div className="border-t border-border px-4 py-3 font-mono text-xs text-muted-foreground">
              <span className="text-brand">$</span> g++ solve.cpp -o solve &amp;&amp; ./solve
              <span className="ml-1 inline-block h-3.5 w-1.5 translate-y-0.5 animate-pulse bg-brand" />
            </div>
            <dl className="grid grid-cols-2 gap-px border-t border-border bg-border">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-card px-4 py-4">
                  <dt className="text-[11px] tracking-wide text-muted-foreground uppercase">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-display text-lg font-bold">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
