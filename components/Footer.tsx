import { Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { personalInfo } from "@/lib/resume";

const contactItems = [
  { icon: MapPin, label: personalInfo.location, href: undefined },
  {
    icon: Phone,
    label: personalInfo.phone,
    href: `tel:+55${personalInfo.phone.replace(/\D/g, "")}`,
  },
  { icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" className="border-t border-border bg-surface/40 px-6 py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Vamos <span className="text-gradient">conversar?</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Estou em busca de novas oportunidades para colocar em prática meus
            conhecimentos em desenvolvimento. Entre em contato!
          </p>
        </div>

        <ul className="flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row sm:gap-8">
          {contactItems.map(({ icon: Icon, label, href }) => {
            const content = (
              <span className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground">
                <Icon size={16} className="text-accent-blue" />
                {label}
              </span>
            );
            return (
              <li key={label}>
                {href ? <a href={href}>{content}</a> : content}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-5">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent-blue hover:text-accent-blue"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent-blue hover:text-accent-blue"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>

        <div className="w-full border-t border-border pt-6">
          <p className="text-xs text-muted">
            © {year} {personalInfo.name}. Feito com Next.js, TypeScript e
            Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
