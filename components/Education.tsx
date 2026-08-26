import { GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { education } from "@/lib/resume";

export default function Education() {
  return (
    <section id="educacao" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Educação" title="Formação e cursos" />

      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((item) => (
          <div
            key={item.degree}
            className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent-blue/50"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple text-white">
              <GraduationCap size={20} />
            </span>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                {item.degree}
              </h3>
              <p className="mt-1 text-sm text-muted">{item.institution}</p>
              <span className="mt-3 inline-block rounded-full bg-accent-blue/10 px-3 py-1 text-xs font-medium text-accent-blue">
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
