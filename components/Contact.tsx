import { Check, GitMerge, GitPullRequest, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { personalInfo } from "@/lib/resume";

const checks = [
  "Disponível para novas oportunidades",
  "Inglês avançado",
  `Baseado em ${personalInfo.location}`,
];

const secondaryButton =
  "inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-muted";

export default function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-4xl px-6 py-20">
      <SectionHeading command="gh pr create" title="Vamos trabalhar juntos?" />

      <Reveal className="reveal">
        <h3 className="text-2xl text-foreground">
          Nova oportunidade <span className="font-light text-muted">#1</span>
        </h3>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted">
          <span className="inline-flex items-center gap-1 rounded-full bg-btn-green px-3 py-1 font-medium text-white">
            <GitPullRequest size={14} />
            Open
          </span>
          <span>
            <strong className="text-foreground">você</strong> quer fazer merge em{" "}
            <code className="rounded-md bg-accent-blue/10 px-1.5 py-0.5 font-mono text-xs text-accent-blue">
              enzo:main
            </code>{" "}
            a partir de{" "}
            <code className="rounded-md bg-accent-blue/10 px-1.5 py-0.5 font-mono text-xs text-accent-blue">
              sua-empresa:oportunidade
            </code>
          </span>
        </div>

        <div className="mt-8 overflow-hidden rounded-md border border-border">
          <div className="border-b border-border bg-surface px-4 py-2.5 text-sm text-muted">
            <strong className="text-foreground">Enzo-Schmitt-Lima</strong>{" "}
            comentou
          </div>
          <p className="p-4 text-sm leading-relaxed text-foreground">
            Estou em busca de novas oportunidades para colocar em prática meus
            conhecimentos em desenvolvimento. Se você tem uma vaga ou um projeto
            em mente, vamos conversar!
          </p>
        </div>

        <div className="mt-4 overflow-hidden rounded-md border border-border">
          <ul className="divide-y divide-border">
            {checks.map((check) => (
              <li
                key={check}
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground"
              >
                <Check size={16} className="shrink-0 text-accent-green" />
                {check}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 border-t border-border bg-surface p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-btn-green text-white">
                <GitMerge size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Pronto para merge
                </p>
                <p className="text-xs text-muted">
                  Nenhum conflito com a sua equipe.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-btn-green px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-btn-green-hover"
              >
                <Mail size={16} />
                Merge via e-mail
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryButton}
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryButton}
              >
                <GithubIcon size={16} />
                GitHub
              </a>
              <a
                href={`tel:+55${personalInfo.phone.replace(/\D/g, "")}`}
                className={secondaryButton}
              >
                <Phone size={16} />
                {personalInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
