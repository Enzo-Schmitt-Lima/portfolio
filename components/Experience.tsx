import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { experiences } from "@/lib/resume";

export default function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading
        eyebrow="Experiência"
        title="Trajetória profissional"
      />

      <ol className="relative border-l border-border pl-8">
        {experiences.map((exp) => (
          <li key={exp.role} className="relative pb-2">
            <span className="absolute -left-[2.35rem] flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-accent-purple text-white ring-4 ring-background">
              <Briefcase size={14} />
            </span>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-semibold text-foreground">
                  {exp.role}
                </h3>
                {exp.current && (
                  <span className="rounded-full bg-accent-blue/10 px-3 py-1 text-xs font-medium text-accent-blue">
                    Atual
                  </span>
                )}
              </div>
              <p className="mb-1 text-sm font-medium text-gradient">
                {exp.company}
              </p>
              <p className="mb-4 text-xs uppercase tracking-widest text-muted">
                {exp.period}
              </p>
              <p className="text-sm leading-relaxed text-muted">
                {exp.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
