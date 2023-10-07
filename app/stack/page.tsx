import TechSection from "@/components/sections/tech-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  languages,
  frontendDevelopment,
  backendDevelopment,
  databasesAndOrm,
  testingAndQA,
  cloudAndDevOps,
  devTools,
  productivityTools,
  getTechsByExpertise,
  ITech,
} from "@/utils/data";

const techSections = {
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
  "expert": {
    title: "Expert",
    data: getTechsByExpertise("expert"),
  },
  "advanced": {
    title: "Advanced",
    data: getTechsByExpertise("advanced"),
  },
  "intermediate": {
    title: "Intermediate",
    data: getTechsByExpertise("intermediate"),
  },
  "beginner": {
    title: "Beginner",
    data: getTechsByExpertise("beginner"),
  },
  "aspiring": {
    title: "Aspiring",
    data: getTechsByExpertise("aspiring"),
  },
} as const;

export default function Stack() {
  return (
    <div className="flex flex-col gap-4 min-h-max">
      <Tabs className="flex flex-col gap-2" defaultValue="programming-languages">
        <TabsList>
          {Object.keys(techSections).map((key) => (
            <TabsTrigger key={key} value={key}>{techSections[key as keyof typeof techSections].title}</TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(techSections).map(([key, value]) => (
          <TabsContent key={key} value={key}>
            <TechSection title={value.title} techArray={value.data} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
