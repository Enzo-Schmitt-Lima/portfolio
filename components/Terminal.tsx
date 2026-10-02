"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/lib/resume";

type Line = { kind: "cmd" | "out"; text: string };

const script: Line[] = [
  { kind: "cmd", text: `git clone ${personalInfo.githubUrl}/portfolio.git` },
  { kind: "out", text: "Cloning into 'portfolio'... done." },
  { kind: "cmd", text: "cd portfolio && git checkout -b sua-empresa" },
  { kind: "out", text: "Switched to a new branch 'sua-empresa'" },
  { kind: "cmd", text: "npm run dev" },
  { kind: "out", text: "✓ Ready — Desenvolvedor Full-Stack Web" },
  { kind: "out", text: "✓ Aberto a novas oportunidades" },
];

const TYPE_DELAY = 35;
const AFTER_CMD_DELAY = 450;
const AFTER_OUT_DELAY = 200;

export default function Terminal() {
  // line = linha sendo digitada; char = quantos caracteres dela já apareceram.
  const [pos, setPos] = useState({ line: 0, char: 0 });

  useEffect(() => {
    if (pos.line >= script.length) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      const id = setTimeout(() => setPos({ line: script.length, char: 0 }), 0);
      return () => clearTimeout(id);
    }

    const current = script[pos.line];
    const typing = current.kind === "cmd" && pos.char < current.text.length;
    const delay = typing
      ? TYPE_DELAY
      : current.kind === "cmd"
        ? AFTER_CMD_DELAY
        : AFTER_OUT_DELAY;

    const id = setTimeout(() => {
      setPos(
        typing
          ? { line: pos.line, char: pos.char + 1 }
          : { line: pos.line + 1, char: 0 },
      );
    }, delay);
    return () => clearTimeout(id);
  }, [pos]);

  const done = pos.line >= script.length;

  return (
    <div className="overflow-hidden rounded-md border border-border bg-background shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-xs text-muted">
          enzo@portfolio: ~
        </span>
      </div>

      <div
        className="min-h-[15rem] p-4 font-mono text-[13px] leading-6 break-all"
        aria-label="Terminal animado"
      >
        {script.slice(0, Math.min(pos.line + 1, script.length)).map((line, i) => {
          const isCurrent = i === pos.line;
          if (line.kind === "out") {
            if (isCurrent) return null;
            return (
              <p
                key={i}
                className={
                  line.text.startsWith("✓") ? "text-accent-green" : "text-muted"
                }
              >
                {line.text}
              </p>
            );
          }
          const text = isCurrent ? line.text.slice(0, pos.char) : line.text;
          return (
            <p key={i} className="text-foreground">
              <span className="text-accent-green">➜</span>{" "}
              <span className="text-accent-blue">~</span> {text}
              {isCurrent && <Cursor />}
            </p>
          );
        })}
        {(done || script[pos.line]?.kind === "out") && (
          <p className="text-foreground">
            <span className="text-accent-green">➜</span>{" "}
            <span className="text-accent-blue">~</span> <Cursor />
          </p>
        )}
      </div>
    </div>
  );
}

function Cursor() {
  return (
    <span className="cursor-blink ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-foreground" />
  );
}
