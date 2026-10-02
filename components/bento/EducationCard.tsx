import { GraduationCap } from "lucide-react";
import BentoCard, { CardLabel } from "@/components/bento/BentoCard";
import { timeline } from "@/lib/resume";

// Formação técnica e acadêmica em destaque; cursos complementares em lista compacta.
const highlights = timeline.filter(
  (entry) => entry.kind === "education" && entry.title !== "Ensino Médio Completo",
);
const others = timeline.filter((entry) => !highlights.includes(entry) && entry.kind !== "work");

export default function EducationCard() {
  return (
    <BentoCard>
      <CardLabel>
        <GraduationCap size={14} />
        Educação
      </CardLabel>

      <ul className="flex flex-col gap-4">
        {highlights.map((entry) => (
          <li key={entry.branch} className="border-l-2 border-blue-500 pl-4">
            <p className="font-semibold leading-snug text-white">{entry.title}</p>
            <p className="mt-1 text-sm text-neutral-400">{entry.org}</p>
            <span
              className={`mt-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                entry.status === "open"
                  ? "bg-blue-500/10 text-blue-400"
                  : "bg-neutral-800 text-neutral-300"
              }`}
            >
              {entry.status === "open" ? "Cursando" : `Concluído em ${entry.date}`}
            </span>
          </li>
        ))}
      </ul>

      {others.length > 0 && (
        <ul className="mt-5 flex flex-col gap-1.5 border-t border-neutral-800 pt-4 text-sm text-neutral-400">
          {others.map((entry) => (
            <li key={entry.branch} className="flex justify-between gap-3">
              <span>{entry.title}</span>
              <span className="shrink-0 text-neutral-500">{entry.date}</span>
            </li>
          ))}
        </ul>
      )}
    </BentoCard>
  );
}
