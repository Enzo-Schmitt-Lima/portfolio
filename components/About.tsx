import { BookOpen, Pencil } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { personalInfo, timeline } from "@/lib/resume";

const currentJob = timeline.find(
  (entry) => entry.kind === "work" && entry.status === "open",
);
const currentStudy = timeline.find(
  (entry) => entry.kind === "education" && entry.status === "open",
);

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading command="cat README.md" title="Sobre mim" />

      <Reveal className="reveal overflow-hidden rounded-md border border-border">
        <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-3">
          <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <BookOpen size={16} className="text-muted" />
            README.md
          </span>
          <Pencil size={14} className="text-muted" aria-hidden />
        </div>

        <div className="p-6 sm:p-8">
          <h3 className="border-b border-border pb-2 text-2xl font-semibold text-foreground">
            Olá! 👋 Eu sou o Enzo
          </h3>
          <p className="mt-4 leading-relaxed text-muted">{personalInfo.about}</p>

          <ul className="mt-6 flex flex-col gap-2 text-sm text-foreground">
            {currentJob && (
              <li>
                💼 Atualmente: <strong>{currentJob.title}</strong> na{" "}
                {currentJob.org}
              </li>
            )}
            {currentStudy && (
              <li>
                🎓 Cursando: <strong>{currentStudy.title}</strong> —{" "}
                {currentStudy.org}
              </li>
            )}
            <li>📍 {personalInfo.location}</li>
            <li>
              📫 Fale comigo:{" "}
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-accent-blue hover:underline"
              >
                {personalInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
