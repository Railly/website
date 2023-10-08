"use client";
import { WORK_EXPERIENCE } from "@/utils/data";
import WorkExperienceSection from "../sections/work-experience-section";
import NoisyCard from "./noisy-card";

const WorkExperienceCard = () => {
  return (
    <NoisyCard className="">
      <ol className="ml-3 [&>li:last-child>.separator]:!hidden">
        {WORK_EXPERIENCE.map((workExperience, index) => (
          <WorkExperienceSection
            key={workExperience.id}
            position={workExperience.position}
            company={workExperience.company}
            startDate={workExperience.startDate}
            endDate={workExperience.endDate}
            responsibilities={workExperience.responsibilities}
            isLatest={index === 0}
          />
        ))}
      </ol>
    </NoisyCard>
  );
};

export default WorkExperienceCard;
