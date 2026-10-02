import type { CSSProperties } from "react";
import { CircleDot, GitBranch, GitMerge } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { timeline, type TimelineEntry } from "@/lib/resume";

const laneColors: Record<TimelineEntry["kind"], string> = {
  work: "var(--accent-green)",
  education: "var(--accent-purple)",
  course: "var(--accent-orange)",
};

const kindLabels: Record<TimelineEntry["kind"], string> = {
  work: "experiência",
  education: "formação",
  course: "curso",
};

// Hash FNV-1a curto, só para dar cara de commit a cada item.
function shortHash(text: string) {
  let hash = 0x811c9dc5;
  for (const char of text) {
    hash ^= char.charCodeAt(0);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(16).padStart(8, "0").slice(0, 7);
}

export default function Timeline() {
  return (
    <section id="trajetoria" className="mx-auto max-w-4xl px-6 py-20">
      <SectionHeading
        command="git log --graph --all"
        title="Trajetória"
        description="Formação e experiência como branches: as concluídas já foram mergeadas na main, as abertas ainda estão em andamento."
      />

      <ol>
        {timeline.map((entry) => (
          <TimelineRow key={entry.branch} entry={entry} />
        ))}

        <Reveal as="li" className="grid grid-cols-[3.5rem_1fr] gap-2">
          <div className="relative h-12" aria-hidden>
            <span className="git-main absolute left-[11px] top-0 h-4 w-0.5 bg-[var(--main-lane)]" />
            <span className="git-dot absolute left-[5px] top-4 h-3.5 w-3.5 rounded-full border-2 border-[var(--main-lane)] bg-background" />
          </div>
          <p className="git-card pt-3 font-mono text-sm text-muted">
            <span className="text-accent-orange">{shortHash("init")}</span>{" "}
            Initial commit — Hello, World!
          </p>
        </Reveal>
      </ol>
    </section>
  );
}

function TimelineRow({ entry }: { entry: TimelineEntry }) {
  const merged = entry.status === "merged";

  return (
    <Reveal
      as="li"
      className="grid grid-cols-[3.5rem_1fr] gap-2"
      style={{ "--lane": laneColors[entry.kind] } as CSSProperties}
    >
      <div className="relative" aria-hidden>
        <span className="git-main absolute bottom-0 left-[11px] top-0 w-0.5 bg-[var(--main-lane)]" />

        {merged && (
          <>
            <svg className="absolute left-0 top-0" width="48" height="28" fill="none">
              <path
                className="git-curve"
                d="M12 0 C12 18 40 10 40 28"
                stroke="var(--lane)"
                strokeWidth="2"
              />
            </svg>
            <span className="git-dot absolute left-[6px] top-[-6px] h-3 w-3 rounded-full bg-[var(--main-lane)] ring-4 ring-background" />
          </>
        )}

        <span
          className="git-lane absolute left-[39px] w-0.5 bg-[var(--lane)]"
          style={{ top: merged ? 28 : 51, bottom: 28 }}
        />

        {merged ? (
          <span className="git-dot absolute left-[33px] top-[44px] h-3.5 w-3.5 rounded-full border-2 border-[var(--lane)] bg-background" />
        ) : (
          <span className="git-dot absolute left-[33px] top-[44px] flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lane)] opacity-60" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-[var(--lane)] ring-4 ring-background" />
          </span>
        )}

        <svg className="absolute bottom-0 left-0" width="48" height="28" fill="none">
          <path
            className="git-curve git-curve-late"
            d="M40 0 C40 18 12 10 12 28"
            stroke="var(--lane)"
            strokeWidth="2"
          />
        </svg>
      </div>

      <article className="git-card my-6 rounded-md border border-border bg-surface p-5 transition-colors hover:border-[var(--lane)]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex max-w-full items-center gap-1 truncate rounded-md bg-[color-mix(in_srgb,var(--lane)_15%,transparent)] px-2 py-0.5 font-mono text-xs text-[var(--lane)]">
            <GitBranch size={12} className="shrink-0" />
            <span className="truncate">{entry.branch}</span>
          </span>
          {merged ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-merged px-2 py-0.5 text-xs font-medium text-white">
              <GitMerge size={12} />
              Merged
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full bg-btn-green px-2 py-0.5 text-xs font-medium text-white">
              <CircleDot size={12} />
              Em andamento
            </span>
          )}
        </div>

        <h3 className="mt-3 text-base font-semibold text-foreground">
          {entry.title}
        </h3>
        <p className="mt-1 text-sm text-muted">{entry.org}</p>
        {entry.description && (
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {entry.description}
          </p>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-border pt-3 font-mono text-xs text-muted">
          <span className="text-accent-orange">{shortHash(entry.branch)}</span>
          <span>{entry.date}</span>
          <span>{kindLabels[entry.kind]}</span>
        </div>
      </article>
    </Reveal>
  );
}
