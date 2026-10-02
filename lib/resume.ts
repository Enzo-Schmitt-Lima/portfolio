export const personalInfo = {
  name: "Enzo Schmitt Lima",
  role: "Desenvolvedor de Sistemas / Desenvolvedor Full-Stack Web",
  location: "São Bernardo do Campo - SP",
  phone: "(11) 97487-2524",
  email: "enzo.schmitt03lima@gmail.com",
  github: "github.com/Enzo-Schmitt-Lima",
  githubUrl: "https://github.com/Enzo-Schmitt-Lima",
  linkedin: "linkedin.com/in/enzo-schmitt-lima/",
  linkedinUrl: "https://www.linkedin.com/in/enzo-schmitt-lima/",
  about:
    "Desenvolvedor Full-Stack Web apaixonado por tecnologia, com conhecimentos em TypeScript, Next.js, Node.js, Express.js, REST APIs, Prisma ORM, MySQL, PostgreSQL, MongoDB, React, React Native, Figma, Tailwind, oAuth, Angular e Jest. Meu objetivo é iniciar minha carreira colocando em prática meus conhecimentos em programação, análise de requisitos e resolução de problemas.",
};

export const skillGroups = [
  {
    title: "Linguagens & Frameworks",
    folder: "linguagens-e-frameworks",
    skills: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "React.js",
      "React Native",
      "Next.js",
      "Angular",
    ],
  },
  {
    title: "Banco de Dados",
    folder: "banco-de-dados",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Prisma ORM"],
  },
  {
    title: "Ferramentas & Processos",
    folder: "ferramentas",
    skills: ["Git/GitHub", "Figma", "Postman", "Insomnia", "Jest", "Clean Code"],
  },
  {
    title: "Idiomas",
    folder: "idiomas",
    skills: ["Inglês — Avançado (Access International School, Yázigi)"],
  },
];

export type TimelineEntry = {
  branch: string;
  title: string;
  org: string;
  date: string;
  kind: "work" | "education" | "course";
  status: "open" | "merged";
  description?: string;
};

// Mais recente primeiro, como um `git log`.
export const timeline: TimelineEntry[] = [
  {
    branch: "feat/analise-desenvolvimento-sistemas",
    title: "Superior em Análise e Desenvolvimento de Sistemas",
    org: "SENAI Armando de Arruda Pereira",
    date: "Cursando",
    kind: "education",
    status: "open",
  },
  {
    branch: "feat/assistente-administrativo",
    title: "Assistente Administrativo",
    org: "SENAI Almirante Tamandaré",
    date: "Cursando",
    kind: "course",
    status: "open",
  },
  {
    branch: "work/proeng-jovem-aprendiz",
    title: "Jovem Aprendiz Administrativo",
    org: "Proeng Montagens e Manutenção Industrial",
    date: "jan. 2026 – atual",
    kind: "work",
    status: "open",
    description:
      "Atuação no setor de TI, realizando suporte técnico e apoio aos processos administrativos, organizacionais e de TI, incluindo a manutenção de sistemas e suporte em rotinas de escritório.",
  },
  {
    branch: "feat/power-bi",
    title: "Curso de Power BI",
    org: "SENAI Almirante Tamandaré",
    date: "2026",
    kind: "course",
    status: "merged",
  },
  {
    branch: "feat/tecnico-desenvolvimento-sistemas",
    title: "Técnico em Desenvolvimento de Sistemas",
    org: "SENAI Almirante Tamandaré",
    date: "2025",
    kind: "education",
    status: "merged",
  },
  {
    branch: "feat/ensino-medio",
    title: "Ensino Médio Completo",
    org: "SESI SP",
    date: "2025",
    kind: "education",
    status: "merged",
  },
];

export const projects = [
  {
    name: "App mobile para pizzaria",
    language: "TypeScript",
    description:
      "Desenvolvido em React Native e TypeScript, com cadastro de produtos, carrinho de pedidos e back-end em Node.js/Express integrado a banco de dados PostgreSQL via Prisma ORM.",
    stack: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
    ],
  },
];

export const navLinks = [
  { label: "README", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];
