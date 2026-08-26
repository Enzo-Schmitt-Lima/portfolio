import { Code2, Database, Languages, Wrench, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/lib/resume";

const icons: Record<string, LucideIcon> = {
  Code2,
  Database,
  Wrench,
  Languages,
};

export default function Skills() {
  return (
    <section id="habilidades" className="bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Habilidades"
          title="Stack e ferramentas"
          description="Tecnologias e práticas que uso no dia a dia para construir aplicações web e mobile de ponta a ponta."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = icons[group.icon];
            return (
              <div
                key={group.title}
                className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent-blue/50"
              >
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple text-white">
                  <Icon size={20} />
                </span>
                <h3 className="mb-4 text-base font-semibold text-foreground">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
