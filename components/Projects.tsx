import { BookMarked, Plus } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/resume";
import { techColor } from "@/lib/techColors";

// "React Native" -> "react-native", "Node.js" -> "nodejs", como os topics do GitHub.
function toTopic(tech: string) {
  return tech.toLowerCase().replace(/\./g, "").replace(/[\s/]+/g, "-");
}

export default function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        command="gh repo list --pinned"
        title="Repositórios em destaque"
        description="Um recorte dos projetos que venho desenvolvendo para colocar em prática front-end, back-end e integração com banco de dados."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            key={project.name}
            as="article"
            className="reveal flex flex-col rounded-md border border-border bg-background p-5 transition-colors hover:border-muted"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center gap-2">
              <BookMarked size={16} className="shrink-0 text-muted" />
              <h3 className="font-semibold text-accent-blue">{project.name}</h3>
              <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted">
                Public
              </span>
            </div>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-accent-blue/10 px-2.5 py-0.5 text-xs font-medium text-accent-blue"
                >
                  {toTopic(tech)}
                </li>
              ))}
            </ul>

            <p className="mt-4 flex items-center gap-1.5 text-xs text-muted">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: techColor(project.language) }}
              />
              {project.language}
            </p>
          </Reveal>
        ))}

        <Reveal
          className="reveal flex min-h-48 flex-col items-center justify-center gap-2 rounded-md border border-dashed border-border p-5 text-center"
          style={{ transitionDelay: `${projects.length * 80}ms` }}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted">
            <Plus size={18} />
          </span>
          <p className="text-sm font-semibold text-foreground">
            Novo repositório em breve
          </p>
          <p className="text-xs text-muted">
            Os próximos projetos já estão sendo commitados.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
