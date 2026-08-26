import { Smartphone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/resume";

export default function Projects() {
  return (
    <section id="projetos" className="bg-surface/40 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projetos"
          title="Projetos em destaque"
          description="Um recorte dos projetos que venho desenvolvendo para colocar em prática front-end, back-end e integração com banco de dados."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent-purple/50"
            >
              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-accent-blue/20 to-accent-purple/20">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-blue to-accent-purple text-white shadow-lg shadow-accent-purple/20 transition-transform group-hover:scale-110">
                  <Smartphone size={28} />
                </span>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
