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
  {
    tech: "GraphQL",
    icon: () => <Icon name={ETech.GraphQL} raw />,
  },
  {
    tech: "Electron",
    icon: () => <Icon name={ETech.Electron} raw />,
  },
  {
    tech: "Arduino",
    icon: () => <Icon name={ETech.Arduino} raw />,
  },
];

export const WORK_EXPERIENCE = [
  {
    id: 1,
    position: "Associate Software UI Developer",
    company: {
      name: "PCI Energy Solutions",
      location: "Norman, OK",
      industry: "Energy Management | B2B",
      image_url: "/images/pci-logo.png",
    },
    workType: "Hybrid",
    startDate: "January 2023",
    endDate: "Present",
    responsibilities: [
      "Collaborated with international teams to design and develop UI for web applications using React, TypeScript, and AG-Grid, with the integration of @pci/kube-ui library.",
      "Developed a type-safe Axios client within @pci/kub-auth package by utilizing the OpenAPI specification, streamlining the workflow for UI teams.",
      "Initiated and developed an isolated contract-testing environment using Playwright Mock API, ensuring alignment between Backend and UI systems.",
      "Utilized AI-assisted tools for extensive code refactoring aligned with modern best practices, thereby improving overall code quality.",
    ],
  },
  {
    id: 2,
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
    id: 3,
    position: "Contract Frontend Developer",
    company: {
      name: "CINFO UNMSM",
      location: "Lima, PE",
      industry: "Educational Technology - B2C",
      image_url: "/images/cinfo-logo.png",
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
    id: 4,
    position: "Web Developer Intern",
    company: {
      name: "Central Library ‘Pedro Zulen’",
      location: "Lima, PE",
      industry: "Educational Institution",
      image_url: "/images/library-logo.png", // replace with the actual image URL
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
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Stack",
    path: "/stack",
  },
];
