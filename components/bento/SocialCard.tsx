import { ArrowUpRight, Share2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import BentoCard, { CardLabel } from "@/components/bento/BentoCard";
import { personalInfo } from "@/lib/resume";

const links = [
  {
    label: "LinkedIn",
    href: personalInfo.linkedinUrl,
    Icon: LinkedinIcon,
    className: "hover:border-[#0a66c2] hover:bg-[#0a66c2]/10 hover:text-[#5fa8ff]",
  },
  {
    label: "GitHub",
    href: personalInfo.githubUrl,
    Icon: GithubIcon,
    className: "hover:border-neutral-500 hover:bg-white/5 hover:text-white",
  },
];

export default function SocialCard() {
  return (
    <BentoCard>
      <CardLabel>
        <Share2 size={14} />
        Redes
      </CardLabel>

      <div className="grid grid-cols-2 gap-3">
        {links.map(({ label, href, Icon, className }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-950 text-neutral-300 transition-colors ${className}`}
          >
            <ArrowUpRight
              size={16}
              className="absolute right-3 top-3 text-neutral-600 transition-colors group-hover:text-current"
            />
            <Icon size={44} />
            <span className="text-sm font-medium">{label}</span>
          </a>
        ))}
      </div>
    </BentoCard>
  );
}
