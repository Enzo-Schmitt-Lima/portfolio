// Cores no estilo do GitHub Linguist para os "language dots".
export const techColors: Record<string, string> = {
  TypeScript: "#3178c6",
  "Node.js": "#5fa04e",
  "Express.js": "#8d96a0",
  "React.js": "#61dafb",
  "React Native": "#61dafb",
  "Next.js": "#e6edf3",
  Angular: "#dd0031",
  MySQL: "#4479a1",
  MongoDB: "#47a248",
  PostgreSQL: "#4169e1",
  "Prisma ORM": "#5a67d8",
  "Git/GitHub": "#f05032",
  Figma: "#f24e1e",
  Postman: "#ff6c37",
  Insomnia: "#a259ff",
  Jest: "#c21325",
  "Clean Code": "#3fb950",
};

export function techColor(tech: string) {
  return techColors[tech] ?? "var(--muted)";
}
