import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { personalInfo } from "@/lib/resume";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-1/4 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-accent-purple/20 blur-[120px]"
      />

      <span className="mb-6 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted">
        Olá, eu sou
      </span>

      <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
        {personalInfo.name}
      </h1>

      <p className="mt-5 max-w-2xl text-lg font-medium text-gradient sm:text-xl">
        {personalInfo.role}
      </p>

      <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">
        Transformando ideias em produtos digitais com código limpo,
        aprendizado constante e atenção aos detalhes.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <a
          href="#projetos"
          className="rounded-full bg-gradient-to-r from-accent-blue to-accent-purple px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-purple/20 transition-transform hover:scale-105"
        >
          Ver Projetos
        </a>
        <a
          href="#contato"
          className="rounded-full border border-border px-8 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent-blue hover:text-accent-blue"
        >
          Fale Comigo
        </a>
      </div>

      <div className="mt-10 flex items-center gap-6">
        <a
          href={personalInfo.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-muted transition-colors hover:text-foreground"
        >
          <GithubIcon size={22} />
        </a>
        <a
          href={personalInfo.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-muted transition-colors hover:text-foreground"
        >
          <LinkedinIcon size={22} />
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          aria-label="E-mail"
          className="text-muted transition-colors hover:text-foreground"
        >
          <Mail size={22} />
        </a>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para a próxima seção"
        className="absolute bottom-10 animate-bounce text-muted transition-colors hover:text-foreground"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
