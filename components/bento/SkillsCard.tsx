import { Sparkles } from "lucide-react";
import BentoCard, { CardLabel } from "@/components/bento/BentoCard";
import { skillGroups } from "@/lib/resume";
import { techColor } from "@/lib/techColors";

// Idiomas ficam fora dos badges: são frases, não tecnologias.
const skills = skillGroups
  .filter((group) => group.folder !== "idiomas")
  .flatMap((group) => group.skills);

export default function SkillsCard() {
  return (
    <BentoCard className="md:col-span-2 lg:col-span-1">
      <CardLabel>
        <Sparkles size={14} />
        Skills
      </CardLabel>

      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-xs font-medium text-neutral-200"
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: techColor(skill) }}
            />
            {skill}
          </li>
        ))}
      </ul>

      <p className="mt-5 border-t border-neutral-800 pt-4 text-sm text-neutral-400">
        🌎 Inglês avançado
      </p>
    </BentoCard>
  );
}
