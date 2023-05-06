import Icon from "@/components/icons";
import { Tech } from "@/types/enums";

export const myCurrentSkills = [
  {
    tech: "Next.js",
    icon: () => <Icon name={Tech.NextJS} />,
  },
  {
    tech: "React",
    icon: () => <Icon name={Tech.ReactJS} />,
  },
  {
    tech: "TypeScript",
    icon: () => <Icon name={Tech.TypeScript} />,
  },
  {
    tech: "TailwindCSS",
    icon: () => <Icon name={Tech.TailwindCSS} />,
  },
  {
    tech: "Node.js",
    icon: () => <Icon name={Tech.NodeJS} />,
  },
  {
    tech: "Redux",
    icon: () => <Icon name={Tech.Redux} />,
  },
  {
    tech: "Turborepo",
    icon: () => <Icon name={Tech.Turborepo} />,
  },
  {
    tech: "PostgreSQL",
    icon: () => <Icon name={Tech.PostgreSQL} />,
  },
];

export const learningInProgress = [
  {
    tech: "Rust",
    icon: () => <Icon name={Tech.Rust} />,
  },
  {
    tech: "Golang",
    icon: () => <Icon name={Tech.Golang} />,
  },
  {
    tech: "MongoDB",
    icon: () => <Icon name={Tech.MongoDB} />,
  },
  {
    tech: "Storybook",
    icon: () => <Icon name={Tech.Storybook} />,
  },
];

export const learningSomeday = [
  {
    tech: "React Native",
    icon: () => <Icon name={Tech.ReactJS} />,
  },
  {
    tech: "GraphQL",
    icon: () => <Icon name={Tech.GraphQL} />,
  },
  {
    tech: "Electron",
    icon: () => <Icon name={Tech.Electron} />,
  },
  {
    tech: "Arduino",
    icon: () => <Icon name={Tech.Arduino} />,
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
