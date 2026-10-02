import { GithubIcon } from "@/components/BrandIcons";
import { personalInfo } from "@/lib/resume";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-muted sm:flex-row">
        <p className="flex items-center gap-2">
          <GithubIcon size={16} />© {year} {personalInfo.name}
        </p>
        <p>Feito com Next.js, TypeScript e Tailwind CSS.</p>
      </div>
    </footer>
  );
}
