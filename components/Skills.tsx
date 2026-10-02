import { FolderOpen } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/lib/resume";
import { techColor } from "@/lib/techColors";

export default function Skills() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        command="ls ~/stack"
        title="Stack e ferramentas"
        description="Tecnologias e práticas que uso no dia a dia para construir aplicações web e mobile de ponta a ponta."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.folder}
            className="reveal overflow-hidden rounded-md border border-border bg-background transition-colors hover:border-muted"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-3">
              <span className="flex items-center gap-2 font-mono text-sm text-foreground">
                <FolderOpen size={16} className="text-accent-blue" />
                {group.folder}/
              </span>
              <span className="text-xs text-muted">
                {group.skills.length}{" "}
                {group.skills.length === 1 ? "item" : "itens"}
              </span>
            </div>
            <div className="p-4">
              <h3 className="sr-only">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs text-foreground"
                  >
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: techColor(skill) }}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
