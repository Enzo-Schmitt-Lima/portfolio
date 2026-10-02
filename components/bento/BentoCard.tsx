import type { ReactNode } from "react";

type BentoCardProps = {
  className?: string;
  children: ReactNode;
};

export default function BentoCard({ className = "", children }: BentoCardProps) {
  return (
    <section
      className={`rounded-3xl border border-neutral-800 bg-neutral-900 p-6 shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-[1.02] sm:p-8 ${className}`}
    >
      {children}
    </section>
  );
}

export function CardLabel({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-500">
      {children}
    </h2>
  );
}
