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
    icon: "Code2",
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
    icon: "Database",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Prisma ORM"],
  },
  {
    title: "Ferramentas & Processos",
    icon: "Wrench",
    skills: ["Git/GitHub", "Figma", "Postman", "Insomnia", "Jest", "Clean Code"],
  },
  {
    title: "Idiomas",
    icon: "Languages",
    skills: ["Inglês — Avançado (Access International School, Yázigi)"],
  },
];

export const experiences = [
  {
    role: "Jovem Aprendiz Administrativo",
    company: "Proeng Montagens e Manutenção Industrial",
    period: "jan. 2026 – atual",
    current: true,
    description:
      "Atuação no setor de TI, realizando suporte técnico e apoio aos processos administrativos, organizacionais e de TI, incluindo a manutenção de sistemas e suporte em rotinas de escritório.",
  },
];

export const projects = [
  {
    name: "App mobile para pizzaria",
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

export const education = [
  {
    degree: "Superior em Análise e Desenvolvimento de Sistemas",
    institution: "SENAI Armando de Arruda Pereira",
    status: "Cursando",
  },
  {
    degree: "Técnico em Desenvolvimento de Sistemas",
    institution: "SENAI Almirante Tamandaré",
    status: "2025",
  },
  {
    degree: "Curso de Power BI",
    institution: "SENAI Almirante Tamandaré",
    status: "2026",
  },
  {
    degree: "Assistente Administrativo",
    institution: "SENAI Almirante Tamandaré",
    status: "Cursando",
  },
  {
    degree: "Ensino Médio Completo",
    institution: "SESI SP",
    status: "2025",
  },
];

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Educação", href: "#educacao" },
  { label: "Contato", href: "#contato" },
];
