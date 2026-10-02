import { FolderGit2, Smartphone } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import BentoCard, { CardLabel } from "@/components/bento/BentoCard";
import { personalInfo, projects } from "@/lib/resume";

const [featured] = projects;

export default function ProjectsCard() {
  return (
    <BentoCard className="md:col-span-2">
      <CardLabel>
        <FolderGit2 size={14} />
        Projeto em destaque
      </CardLabel>

      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="flex h-28 w-full shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500/30 via-indigo-500/20 to-emerald-500/20 sm:h-36 sm:w-36">
          <Smartphone size={44} className="text-white" />
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-white">{featured.name}</h3>
          <p className="mt-3 leading-relaxed text-neutral-400">
            {featured.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {featured.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1 text-xs text-neutral-300"
              >
                {tech}
              </li>
            ))}
          </ul>

          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-800 px-5 py-2.5 text-sm font-semibold text-neutral-100 transition-colors hover:bg-neutral-700"
          >
            <GithubIcon size={18} />
            Ver no GitHub
          </a>
        </div>
      </div>
    </BentoCard>
  );
}
