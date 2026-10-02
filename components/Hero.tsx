import { ArrowDown, GitPullRequest, MapPin, BookMarked } from "lucide-react";
import ContributionGraph from "@/components/ContributionGraph";
import Terminal from "@/components/Terminal";
import { personalInfo } from "@/lib/resume";

const initials = personalInfo.name
  .split(" ")
  .slice(0, 2)
  .map((part) => part[0])
  .join("");

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden px-6 pt-36 pb-16 sm:pt-40"
    >
      <div aria-hidden className="bg-dots pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-1/4 -z-10 h-96 w-96 rounded-full bg-accent-blue/10 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-1/4 top-1/2 -z-10 h-80 w-80 rounded-full bg-accent-green/10 blur-[120px]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <div className="mb-6 flex items-center gap-4">
            <span className="rounded-full bg-linear-to-br from-accent-blue via-accent-purple to-accent-green p-[3px]">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-surface text-2xl font-bold text-foreground">
                {initials}
              </span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
              </span>
              Aberto a oportunidades
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {personalInfo.name}
          </h1>
          <p className="mt-1 font-mono text-lg text-muted">
            Enzo-Schmitt-Lima
          </p>

          <p className="mt-5 text-lg font-medium text-foreground">
            {personalInfo.role}
          </p>
          <p className="mt-3 max-w-lg text-muted">
            Transformando ideias em produtos digitais com código limpo,
            aprendizado constante e atenção aos detalhes.
          </p>

          <p className="mt-4 flex items-center gap-1.5 text-sm text-muted">
            <MapPin size={16} />
            {personalInfo.location}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projetos"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-btn-green px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-btn-green-hover"
            >
              <BookMarked size={16} />
              Ver projetos
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:border-muted"
            >
              <GitPullRequest size={16} />
              Abrir um PR
            </a>
          </div>
        </div>

        <Terminal />
      </div>

      <div className="mx-auto mt-14 max-w-6xl">
        <ContributionGraph />
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para a próxima seção"
        className="mx-auto mt-10 flex w-fit animate-bounce text-muted transition-colors hover:text-foreground"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
