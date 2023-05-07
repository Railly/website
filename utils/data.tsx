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
    position: "UI Developer",
    company: {
      name: "PCI Energy Solutions",
      image_url: "/images/pci-logo.png",
    },
    startDate: "January 2023",
    endDate: "Present",
    responsibilities: ["WIP, stay tuned"],
  },
  {
    id: 2,
    position: "Mid Frontend Developer",
    company: {
      name: "ID Business Intelligence",
      image_url: "/images/id-logo.jpg",
    },
    startDate: "January 2022",
    endDate: "December 2022",
    responsibilities: [
      "Design and develop medium to large size features from scratch using React, TypeScript, Styled Components, and Redux.",
      "Challenge the development workflow, which involved project documentation, testing, commit messages, PR structure, new libraries, etc.",
      "Seek continuous improvement of frontend micro-interactions and overall UX.",
      "Support other team members by attending to their technical questions and sharing my viewpoints when needed",
    ],
  },
  {
    id: 3,
    position: "Jr. Frontend Developer",
    company: {
      name: "CINFO UNMSM",
      image_url: "/images/cinfo-logo.png",
    },
    startDate: "June 2021",
    endDate: "December 2021",
    responsibilities: [
      "Design the UX/UI of the entire application with Figma (+30 screens), while interviewing real users.",
      "Develop an educational management system with 7 modules (administrator, professor, reports, supervisor, academic management, enrollment), using Next.js, TailwindCSS, and JavaScript.",
      "Deliver daily features based on continuous feedback received from the product owner.",
    ],
  },
];
