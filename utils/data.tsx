import Icon from "@/components/icons";
import { ETech } from "@/types/enums";

export const myCurrentSkills = [
  {
    tech: "Next.js",
    icon: () => <Icon name={ETech.NextJS} raw />,
  },
  {
    tech: "React",
    icon: () => <Icon name={ETech.ReactJS} raw />,
  },
  {
    tech: "TypeScript",
    icon: () => <Icon name={ETech.TypeScript} raw />,
  },
  {
    tech: "TailwindCSS",
    icon: () => <Icon name={ETech.TailwindCSS} raw />,
  },
  {
    tech: "Node.js",
    icon: () => <Icon name={ETech.NodeJS} raw />,
  },
  {
    tech: "Redux",
    icon: () => <Icon name={ETech.Redux} raw />,
  },
  {
    tech: "Turborepo",
    icon: () => <Icon name={ETech.Turborepo} raw />,
  },
  {
    tech: "PostgreSQL",
    icon: () => <Icon name={ETech.PostgreSQL} raw />,
  },
];

export const learningInProgress = [
  {
    tech: "Rust",
    icon: () => <Icon name={ETech.Rust} raw />,
  },
  {
    tech: "Golang",
    icon: () => <Icon name={ETech.Golang} raw />,
  },
  {
    tech: "MongoDB",
    icon: () => <Icon name={ETech.MongoDB} raw />,
  },
  {
    tech: "Storybook",
    icon: () => <Icon name={ETech.Storybook} raw />,
  },
];

export const learningSomeday = [
  {
    tech: "React Native",
    icon: () => <Icon name={ETech.ReactJS} raw />,
  },
  // {
  //   tech: "GraphQL",
  //   icon: () => <Icon name={ETech.GraphQL} raw />,
  // },
  // {
  //   tech: "Electron",
  //   icon: () => <Icon name={ETech.Electron} raw />,
  // },
  // {
  //   tech: "Arduino",
  //   icon: () => <Icon name={ETech.Arduino} raw />,
  // },
];

export const EXPERTISE_LEVELS = {
  template: -1,
  aspiring: 0,
  beginner: 1,
  intermediate: 2,
  advanced: 3,
  expert: 4,
};

export interface ITech {
  tech: string;
  icon: () => JSX.Element;
  expertise: keyof typeof EXPERTISE_LEVELS;
}

export const languages: ITech[] = [
  {
    tech: "JavaScript",
    icon: () => <Icon name={ETech.JavaScript} raw />,
    expertise: "expert",
  },
  {
    tech: "TypeScript",
    icon: () => <Icon name={ETech.TypeScript} raw />,
    expertise: "expert",
  },
  {
    tech: "C++",
    icon: () => <Icon name={ETech.CPlusPlus} raw />,
    expertise: "intermediate",
  },
  {
    tech: "Python",
    icon: () => <Icon name={ETech.Python} raw />,
    expertise: "beginner",
  },
  {
    tech: "Golang",
    icon: () => <Icon name={ETech.Golang} raw />,
    expertise: "beginner",
  },
  {
    tech: "Rust",
    icon: () => <Icon name={ETech.Rust} raw />,
    expertise: "aspiring",
  },
];

export const frontendDevelopment: ITech[] = [
  {
    tech: "Next.js",
    icon: () => <Icon name={ETech.NextJS} raw />,
    expertise: "expert",
  },
  {
    tech: "React",
    icon: () => <Icon name={ETech.ReactJS} raw />,
    expertise: "expert",
  },
  {
    tech: "Astro",
    icon: () => <Icon name={ETech.Astro} raw />,
    expertise: "beginner",
  },
  {
    tech: "TailwindCSS",
    icon: () => <Icon name={ETech.TailwindCSS} raw />,
    expertise: "expert",
  },
  {
    tech: "Redux",
    icon: () => <Icon name={ETech.Redux} raw />,
    expertise: "advanced",
  },
  {
    tech: "React Native",
    icon: () => <Icon name={ETech.ReactJS} raw />,
    expertise: "beginner",
  },
  {
    tech: "Framer Motion",
    icon: () => <Icon name={ETech.FramerMotion} raw />,
    expertise: "intermediate",
  },
  {
    tech: "Styled Components",
    icon: () => <Icon name={ETech.StyledComponents} raw />,
    expertise: "advanced",
  },
  {
    tech: "Bootstrap",
    icon: () => <Icon name={ETech.Bootstrap} raw />,
    expertise: "intermediate",
  },
  {
    tech: "SaSS",
    icon: () => <Icon name={ETech.SaSS} raw />,
    expertise: "beginner",
  },
  {
    tech: "StoryBook",
    icon: () => <Icon name={ETech.Storybook} raw />,
    expertise: "advanced",
  },
];

export const backendDevelopment: ITech[] = [
  {
    tech: "Node.js",
    icon: () => <Icon name={ETech.NodeJS} raw />,
    expertise: "advanced",
  },
  {
    tech: "Express.js",
    icon: () => <Icon name={ETech.ExpressJS} raw />,
    expertise: "advanced",
  },
  {
    tech: "NestJS",
    icon: () => <Icon name={ETech.NestJS} raw />,
    expertise: "aspiring",
  },
  {
    tech: "FastAPI",
    icon: () => <Icon name={ETech.FastAPI} raw />,
    expertise: "beginner",
  },
  {
    tech: "Hono",
    icon: () => <Icon name={ETech.Hono} raw />,
    expertise: "aspiring",
  },
];

export const databasesAndOrm: ITech[] = [
  {
    tech: "PostgreSQL",
    icon: () => <Icon name={ETech.PostgreSQL} raw />,
    expertise: "intermediate",
  },
  {
    tech: "Drizzle ORM",
    icon: () => <Icon name={ETech.DrizzleORM} raw />,
    expertise: "advanced",
  },
  {
    tech: "Sequelize",
    icon: () => <Icon name={ETech.Sequelize} raw />,
    expertise: "intermediate",
  },
  {
    tech: "Prisma",
    icon: () => <Icon name={ETech.Prisma} raw />,
    expertise: "beginner",
  },
  {
    tech: "Supabase",
    icon: () => <Icon name={ETech.Supabase} raw />,
    expertise: "advanced",
  },
  {
    tech: "Firebase",
    icon: () => <Icon name={ETech.Firebase} raw />,
    expertise: "intermediate",
  },
  {
    tech: "MongoDB",
    icon: () => <Icon name={ETech.MongoDB} raw />,
    expertise: "aspiring",
  },
];

export const testingAndQA: ITech[] = [
  {
    tech: "Playwright",
    icon: () => <Icon name={ETech.Playwright} raw />,
    expertise: "expert",
  },
  {
    tech: "Jest",
    icon: () => <Icon name={ETech.Jest} raw />,
    expertise: "intermediate",
  },
  {
    tech: "React Testing Library",
    icon: () => <Icon name={ETech.ReactTestingLibrary} raw />,
    expertise: "intermediate",
  },
  {
    tech: "Swagger",
    icon: () => <Icon name={ETech.Swagger} raw />,
    expertise: "intermediate",
  },
];

export const cloudAndDevOps: ITech[] = [
  {
    tech: "AWS",
    icon: () => <Icon name={ETech.AWS} raw />,
    expertise: "aspiring",
  },
  {
    tech: "Azure",
    icon: () => <Icon name={ETech.Azure} raw />,
    expertise: "aspiring",
  },
];

export const devTools: ITech[] = [
  {
    tech: "OpenAI",
    icon: () => <Icon name={ETech.OpenAI} raw />,
    expertise: "beginner",
  },
  {
    tech: "Anthropic",
    icon: () => <Icon name={ETech.Anthropic} raw />,
    expertise: "advanced",
  },
  {
    tech: "GitHub Copilot",
    icon: () => <Icon name={ETech.GitHubCopilot} raw />,
    expertise: "advanced",
  },
  {
    tech: "Figma",
    icon: () => <Icon name={ETech.Figma} raw />,
    expertise: "advanced",
  },
  {
    tech: "VSCode",
    icon: () => <Icon name={ETech.VSCode} raw />,
    expertise: "advanced",
  },
  {
    tech: "Git",
    icon: () => <Icon name={ETech.Git} raw />,
    expertise: "advanced",
  },
  {
    tech: "Github",
    icon: () => <Icon name={ETech.Github} raw />,
    expertise: "advanced",
  },
  {
    tech: "Gitlab",
    icon: () => <Icon name={ETech.Gitlab} raw />,
    expertise: "advanced",
  },
  {
    tech: "Vercel",
    icon: () => <Icon name={ETech.Vercel} raw />,
    expertise: "advanced",
  },
  {
    tech: "Vite",
    icon: () => <Icon name={ETech.Vite} raw />,
    expertise: "advanced",
  },
  {
    tech: "Vim",
    icon: () => <Icon name={ETech.Vim} raw />,
    expertise: "advanced",
  },
  {
    tech: "Turborepo",
    icon: () => <Icon name={ETech.Turborepo} raw />,
    expertise: "advanced",
  },
  {
    tech: "Docker",
    icon: () => <Icon name={ETech.Docker} raw />,
    expertise: "advanced",
  },
  {
    tech: "NPM",
    icon: () => <Icon name={ETech.Npm} raw />,
    expertise: "advanced",
  },
  {
    tech: "PNPM",
    icon: () => <Icon name={ETech.Pnpm} raw />,
    expertise: "advanced",
  },
];

export const productivityTools: ITech[] = [
  {
    tech: "Excalidraw",
    icon: () => <Icon name={ETech.Excalidraw} raw />,
    expertise: "advanced",
  },
  {
    tech: "Notion",
    icon: () => <Icon name={ETech.Notion} raw />,
    expertise: "advanced",
  },
  {
    tech: "Linear",
    icon: () => <Icon name={ETech.Linear} raw />,
    expertise: "advanced",
  },
  {
    tech: "PowerShell",
    icon: () => <Icon name={ETech.PowerShell} raw />,
    expertise: "advanced",
  },
  {
    tech: "Slack",
    icon: () => <Icon name={ETech.Slack} raw />,
    expertise: "advanced",
  },
  {
    tech: "Zoom",
    icon: () => <Icon name={ETech.Zoom} raw />,
    expertise: "advanced",
  },
  {
    tech: "Discord",
    icon: () => <Icon name={ETech.Discord} raw />,
    expertise: "advanced",
  },
  {
    tech: "Google Suite",
    icon: () => <Icon name={ETech.GoogleSuite} raw />,
    expertise: "advanced",
  },
  {
    tech: "Windows",
    icon: () => <Icon name={ETech.Windows} raw />,
    expertise: "advanced",
  },
  {
    tech: "Thunder Client",
    icon: () => <Icon name={ETech.ThunderClient} raw />,
    expertise: "advanced",
  },
  {
    tech: "Windows Terminal",
    icon: () => <Icon name={ETech.WindowsTerminal} raw />,
    expertise: "advanced",
  },
  {
    tech: "Obsidian",
    icon: () => <Icon name={ETech.Obsidian} raw />,
    expertise: "advanced",
  },
  {
    tech: "ChatGPT",
    icon: () => <Icon name={ETech.ChatGPT} raw />,
    expertise: "advanced",
  },
  {
    tech: "Claude 3",
    icon: () => <Icon name={ETech.Anthropic} raw />,
    expertise: "advanced",
  },
  {
    tech: "Cron",
    icon: () => <Icon name={ETech.Cron} raw />,
    expertise: "advanced",
  },
];

export const getTechsByExpertise = (
  expertise: keyof typeof EXPERTISE_LEVELS
) => {
  const techs = [
    ...languages,
    ...frontendDevelopment,
    ...backendDevelopment,
    ...databasesAndOrm,
    ...testingAndQA,
    ...cloudAndDevOps,
  ];

  return techs.filter((tech) => tech.expertise === expertise);
};

export const techSections = {
  "programming-languages": {
    title: "Programming Languages",
    data: languages,
  },
  "frontend-development": {
    title: "Frontend",
    data: frontendDevelopment,
  },
  "backend-development": {
    title: "Backend",
    data: backendDevelopment,
  },
  "databases-orm": {
    title: "Databases & ORM",
    data: databasesAndOrm,
  },
  "testing-qa": {
    title: "Testing & QA",
    data: testingAndQA,
  },
  "cloud-devops": {
    title: "Cloud & DevOps",
    data: cloudAndDevOps,
  },
  "dev-tools": {
    title: "Dev Tools",
    data: devTools,
  },
  "productivity-tools": {
    title: "Productivity Tools",
    data: productivityTools,
  },
  expert: {
    title: "Expert",
    data: getTechsByExpertise("expert"),
  },
  advanced: {
    title: "Advanced",
    data: getTechsByExpertise("advanced"),
  },
  intermediate: {
    title: "Intermediate",
    data: getTechsByExpertise("intermediate"),
  },
  beginner: {
    title: "Beginner",
    data: getTechsByExpertise("beginner"),
  },
  aspiring: {
    title: "Aspiring",
    data: getTechsByExpertise("aspiring"),
  },
} as const;

export const WORK_EXPERIENCE = [
  {
    id: 1,
    position: "Web UI Developer - Semi-Senior",
    company: {
      name: "Globant",
      location: "Lima, PE",
      industry: "Technology | B2B",
      image_url: "/images/globant-logo.png",
    },
    workType: "Remote",
    startDate: "February 2024",
    endDate: "Present",
    responsibilities: ["Stay tuned for updates!"],
  },
  {
    id: 2,
    position: "Associate Software UI Developer",
    company: {
      name: "PCI Energy Solutions",
      location: "Norman, OK",
      industry: "Energy Management | B2B",
      image_url: "/images/pci-logo.png",
    },
    workType: "Hybrid",
    startDate: "January 2023",
    endDate: "February 2024",
    responsibilities: [
      "Collaborated with international teams to design and develop UI for web applications using React, TypeScript, and AG-Grid, with the integration of @pci/kube-ui library.",
      "Developed a type-safe Axios client within @pci/kub-auth package by utilizing the OpenAPI specification, streamlining the workflow for UI teams.",
      "Initiated and developed an isolated contract-testing environment using Playwright Mock API, ensuring alignment between Backend and UI systems.",
      "Utilized AI-assisted tools for extensive code refactoring aligned with modern best practices, thereby improving overall code quality.",
    ],
  },
  {
    id: 3,
    position: "Mid Frontend Developer",
    company: {
      name: "ID Business Intelligence",
      location: "Lima, PE",
      industry: "Business Management Startup | B2B",
      image_url: "/images/id-logo.jpg",
    },
    workType: "Remote",
    startDate: "January 2022",
    endDate: "December 2022",
    responsibilities: [
      "Designed and developed medium to large-sized UI features using React, TypeScript, and Styled Components.",
      "Revamped development workflow, enhancing documentation, testing, commit messages, pull requests structure, and integrating new libraries.",
      "Built and open-sourced @idbi/components, improving communication between designers and developers.",
      "Created and owned the SSO authentication UI, enabling session continuity across the company's digital domain.",
      "Re-architected the global state management by transitioning to Redux, reducing technical debt and enhancing system scalability.",
    ],
  },
  {
    id: 4,
    position: "Contract Frontend Developer",
    company: {
      name: "CINFO UNMSM",
      location: "Lima, PE",
      industry: "Educational Technology - B2C",
      image_url: "/svg/cinfo-logo.svg",
    },
    workType: "Remote",
    startDate: "June 2021",
    endDate: "December 2021",
    responsibilities: [
      "Designed the UX/UI of the entire application with Figma (+30 screens), while interviewing real users.",
      "Developed a 7-module educational management system using Next.js, TailwindCSS, and JavaScript.",
      "Delivered daily feature updates through agile workflows, adapting to continuous feedback from the product owner.",
    ],
  },
  {
    id: 5,
    position: "Web Developer Intern",
    company: {
      name: "Central Library ‘Pedro Zulen’",
      location: "Lima, PE",
      industry: "Educational Institution",
      image_url: "/images/unmsm-logo.png",
    },
    workType: "Remote",
    startDate: "June 2021",
    endDate: "December 2021",
    responsibilities: [
      "Managed and maintained the central library's website, utilizing PHP, JavaScript, and Google Analytics.",
      "Crafted Figma screens for dashboards and developed a Next.js application to spotlight the University of San Marcos’ history during COVID-19.",
      "Actively updated calendar events and image uploads for new events and books.",
      "Conducted regular database updates using PHPMyAdmin, enhancing site functionality and UX.",
    ],
  },
];

export const MENU_ITEMS = [
  {
    name: "Home",
    path: "/",
    segment: null,
  },
  {
    name: "About",
    path: "/about",
    segment: "about",
  },
  {
    name: "Blog",
    path: "/blog",
    segment: "blog",
  },
  {
    name: "Projects",
    path: "/projects",
    segment: "projects",
  },
  {
    name: "Stack",
    path: "/stack",
    segment: "stack",
  },
];
