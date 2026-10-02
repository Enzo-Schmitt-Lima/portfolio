import { Briefcase, Download, Mail, MapPin } from "lucide-react";
import BentoCard from "@/components/bento/BentoCard";
import { personalInfo, timeline } from "@/lib/resume";

const currentJob = timeline.find(
  (entry) => entry.kind === "work" && entry.status === "open",
);

export default function HeroCard() {
  return (
    <BentoCard className="relative flex flex-col justify-between gap-10 overflow-hidden md:col-span-2 lg:row-span-2">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl"
      />

      <div className="relative">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Disponível para estágio
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {personalInfo.name}
        </h1>
        <p className="mt-3 text-lg font-medium text-blue-400 sm:text-xl">
          {personalInfo.title}
        </p>
        <p className="mt-5 max-w-2xl leading-relaxed text-neutral-400">
          {personalInfo.summary}
        </p>

        <ul className="mt-6 flex flex-col gap-2 text-sm text-neutral-400 sm:flex-row sm:flex-wrap sm:gap-x-6">
          <li className="flex items-center gap-2">
            <MapPin size={16} className="text-neutral-500" />
            {personalInfo.location}
          </li>
          {currentJob && (
            <li className="flex items-center gap-2">
              <Briefcase size={16} className="text-neutral-500" />
              {currentJob.title} · {currentJob.org}
            </li>
          )}
        </ul>
      </div>

      <div className="relative flex flex-col gap-3 sm:flex-row">
        {/* Caminho relativo para funcionar também com o basePath do GitHub Pages. */}
        <a
          href="curriculo.pdf"
          download="Curriculo-Enzo-Schmitt-Lima.pdf"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-neutral-950 shadow-lg shadow-white/10 transition-colors hover:bg-blue-100"
        >
          <Download size={18} />
          Baixar CV
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-700 px-7 py-3.5 text-sm font-semibold text-neutral-200 transition-colors hover:border-neutral-500 hover:text-white"
        >
          <Mail size={18} />
          Fale comigo
        </a>
      </div>
    </BentoCard>
  );
}
