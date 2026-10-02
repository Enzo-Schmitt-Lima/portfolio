"use client";

import { useEffect, useState } from "react";
import {
  BookMarked,
  BookOpen,
  GitBranch,
  GitCommitHorizontal,
  GitPullRequest,
  Layers,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import {
  navLinks,
  personalInfo,
  projects,
  skillGroups,
  timeline,
} from "@/lib/resume";

const tabIcons: Record<string, LucideIcon> = {
  "#sobre": BookOpen,
  "#stack": Layers,
  "#trajetoria": GitCommitHorizontal,
  "#projetos": BookMarked,
  "#contato": GitPullRequest,
};

const tabCounts: Record<string, number> = {
  "#stack": skillGroups.reduce((total, group) => total + group.skills.length, 0),
  "#trajetoria": timeline.length,
  "#projetos": projects.length,
};

export default function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    // O Hero (#inicio) também é observado para nenhuma aba ficar ativa no topo.
    const sections = ["#inicio", ...navLinks.map((link) => link.href)]
      .map((href) => document.querySelector(href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-6">
        <a href="#inicio" className="flex min-w-0 items-center gap-3">
          <GithubIcon size={28} className="shrink-0 text-foreground" />
          <span className="truncate text-sm">
            <span className="text-foreground">Enzo-Schmitt-Lima</span>
            <span className="mx-1 text-muted">/</span>
            <span className="font-semibold text-foreground">portfolio</span>
          </span>
          <span className="hidden rounded-full border border-border px-2 py-0.5 text-xs text-muted sm:inline">
            Public
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-4">
          <span className="hidden items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-foreground sm:inline-flex">
            <GitBranch size={14} className="text-muted" />
            main
          </span>
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-foreground"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-foreground"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="E-mail"
            className="text-muted transition-colors hover:text-foreground"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <nav aria-label="Seções" className="mx-auto max-w-6xl px-4">
        <ul className="no-scrollbar flex gap-1 overflow-x-auto">
          {navLinks.map((link) => {
            const Icon = tabIcons[link.href];
            const count = tabCounts[link.href];
            const isActive = active === link.href;
            return (
              <li key={link.href} className="relative shrink-0 pb-2">
                <a
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-border/50 ${
                    isActive ? "font-semibold text-foreground" : "text-muted"
                  }`}
                >
                  {Icon && <Icon size={16} />}
                  {link.label}
                  {count !== undefined && (
                    <span className="rounded-full bg-border/70 px-1.5 text-xs font-medium text-foreground">
                      {count}
                    </span>
                  )}
                </a>
                <span
                  aria-hidden
                  className={`absolute inset-x-1 bottom-0 h-0.5 rounded-full bg-tab-active transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
