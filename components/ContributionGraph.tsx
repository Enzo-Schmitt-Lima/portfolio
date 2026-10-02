import type { CSSProperties } from "react";
import Reveal from "@/components/Reveal";

const WEEKS = 53;
const DAYS = 7;
const levelColors = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];

// Gerador pseudoaleatório com semente fixa: o gráfico sai igual em todo build.
function seeded(seed: number) {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

const random = seeded(2026);

// Gráfico ilustrativo: a atividade cresce ao longo do ano e é menor nos fins de semana.
const weeks = Array.from({ length: WEEKS }, (_, week) =>
  Array.from({ length: DAYS }, (_, day) => {
    const growth = week / WEEKS;
    const weekend = day === 0 || day === 6;
    const value = random() * (0.55 + growth * 0.9) - (weekend ? 0.35 : 0);
    if (value < 0.25) return 0;
    if (value < 0.5) return 1;
    if (value < 0.75) return 2;
    if (value < 1) return 3;
    return 4;
  }),
);

export default function ContributionGraph() {
  return (
    <Reveal className="rounded-md border border-border bg-background/60 p-4 backdrop-blur-sm">
      <p className="mb-3 text-sm text-foreground">
        Commitando aprendizado <span className="text-muted">todos os dias</span>
      </p>

      <div className="no-scrollbar overflow-x-auto" aria-hidden>
        <div className="grid min-w-[640px] grid-flow-col grid-cols-[repeat(53,minmax(0,1fr))] grid-rows-7 gap-[3px]">
          {weeks.map((days, week) =>
            days.map((level, day) => (
              <span
                key={`${week}-${day}`}
                className="contrib-cell aspect-square w-full rounded-[2px] outline outline-1 -outline-offset-1 outline-white/5"
                style={
                  {
                    backgroundColor: levelColors[level],
                    "--w": week,
                    "--d": day,
                  } as CSSProperties
                }
              />
            )),
          )}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-end gap-1.5 text-xs text-muted">
        Menos
        {levelColors.map((color) => (
          <span
            key={color}
            className="h-[10px] w-[10px] rounded-[2px]"
            style={{ backgroundColor: color }}
          />
        ))}
        Mais
      </div>
    </Reveal>
  );
}
