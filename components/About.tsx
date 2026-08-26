import { Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { personalInfo } from "@/lib/resume";

const infoItems = [
  { icon: MapPin, label: personalInfo.location },
  { icon: Phone, label: personalInfo.phone },
  { icon: Mail, label: personalInfo.email },
];

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Sobre mim" title="Quem é Enzo Schmitt Lima" />

      <div className="grid gap-10 md:grid-cols-5 md:items-center">
        <div className="md:col-span-3">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            {personalInfo.about}
          </p>
        </div>

        <div className="md:col-span-2">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gradient">
              Contato
            </h3>
            <ul className="flex flex-col gap-4">
              {infoItems.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-background text-accent-blue">
                    <Icon size={16} />
                  </span>
                  <span className="text-sm text-foreground">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
