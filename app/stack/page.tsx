import StackSection from "@/components/sections/stack-section";
import TechSection from "@/components/sections/tech-section";
import { ESectionTypes } from "@/types/enums";
import {
  languages,
  frontendDevelopment,
  backendDevelopment,
  databasesAndOrm,
  testingAndQA,
  cloudAndDevOps,
  devTools,
  productivityTools,
  learningInProgress,
  learningSomeday,
  myCurrentSkills,
} from "@/utils/data";

export default async function Stack() {
  return (
    <>
      {/* <StackSection skills={myCurrentSkills} title={ESectionTypes.Stack} />
      <StackSection
        skills={learningInProgress}
        title={ESectionTypes.Learning}
      />
      <StackSection skills={learningSomeday} title={ESectionTypes.Planning} /> */}
      <TechSection title="Languages" techArray={languages} />
      <TechSection title="Frontend Development" techArray={frontendDevelopment} />
      <TechSection title="Backend Development" techArray={backendDevelopment} />
      <TechSection title="Databases & ORM" techArray={databasesAndOrm} />
      <TechSection title="Testing & QA" techArray={testingAndQA} />
      <TechSection title="Cloud & DevOps" techArray={cloudAndDevOps} />
      <TechSection title="Dev Tools" techArray={devTools} />
      <TechSection title="Productivity Tools" techArray={productivityTools} />
    </>
  );
}
