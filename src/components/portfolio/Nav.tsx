import { useEffect, useState } from "react";
import { Github, Menu, Moon, Sun, X, FileText, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, PROFILE } from "./data";
import { cn } from "@/lib/utils";

function useTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("gt-theme");
    const prefers =
      stored === "dark" ||
      (stored === null && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(prefers);
    document.documentElement.classList.toggle("dark", prefers);
  }, []);

  const toggle = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      window.localStorage.setItem("gt-theme", next ? "dark" : "light");
      return next;
    });
  };

  return { dark, toggle };
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        <a
          href="#home"
          className="font-display text-base font-bold tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Geetansh<span className="text-gradient">.</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <Button asChild variant="ghost" size="icon" aria-label="GitHub profile">
            <a href={PROFILE.githubUrl} target="_blank" rel="noreferrer noopener">
              <Github className="size-[18px]" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="LeetCode profile">
            <a href={PROFILE.leetcodeUrl} target="_blank" rel="noreferrer noopener">
              <Code2 className="size-[18px]" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {dark ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
          </Button>
          <Button asChild size="sm" className="ml-1 hidden bg-gradient-brand sm:inline-flex">
            <a href="#contact">
              <FileText className="size-4" /> View Resume
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
        >
          <ul className="mx-auto grid max-w-6xl gap-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full bg-gradient-brand">
                <a href="#contact" onClick={() => setOpen(false)}>
                  <FileText className="size-4" /> View Resume
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
