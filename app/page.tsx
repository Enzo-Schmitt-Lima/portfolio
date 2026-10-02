import HeroCard from "@/components/bento/HeroCard";
import SocialCard from "@/components/bento/SocialCard";
import EducationCard from "@/components/bento/EducationCard";
import ProjectsCard from "@/components/bento/ProjectsCard";
import SkillsCard from "@/components/bento/SkillsCard";
import { personalInfo } from "@/lib/resume";

// Grid bento: 1 coluna no mobile, 2 no tablet e 3 assimétricas no desktop.
// No desktop o Hero ocupa 2x2, com Redes e Educação empilhados ao lado;
// na última linha, Projetos (2 colunas) e Skills.
export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-16">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <HeroCard />
        <SocialCard />
        <EducationCard />
        <ProjectsCard />
        <SkillsCard />
      </div>

      <footer className="mt-10 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} {personalInfo.name} · Feito com Next.js e
        Tailwind CSS
      </footer>
    </main>
  );
}
