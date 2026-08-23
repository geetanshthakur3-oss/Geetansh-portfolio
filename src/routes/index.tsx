import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  Achievements,
  Certifications,
  Contact,
  Education,
  Footer,
  GithubSection,
  Hobbies,
  ProblemSolving,
  Projects,
  Skills,
} from "@/components/portfolio/Sections";

const TITLE = "Geetansh Thakur | Software Development Intern";
const DESCRIPTION =
  "Portfolio of Geetansh Thakur, a BCA student and Software Development Intern skilled in C++, Python, Data Structures & Algorithms, OOP and DBMS.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Geetansh Thakur",
          jobTitle: "Software Development Intern",
          email: "mailto:geetanshthakur3@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Solan",
            addressRegion: "Himachal Pradesh",
            addressCountry: "IN",
          },
          alumniOf: { "@type": "CollegeOrUniversity", name: "CGC University, Mohali" },
          knowsAbout: [
            "C++",
            "Python",
            "Data Structures and Algorithms",
            "Object-Oriented Programming",
            "DBMS",
          ],
          sameAs: [
            "https://github.com/geetanshthakur3-oss",
            "https://leetcode.com/u/geetanshthakur3/",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <ProblemSolving />
        <GithubSection />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
