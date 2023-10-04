"use client";
import { WORK_EXPERIENCE } from "@/utils/data";
import WorkExperienceSection from "../sections/work-experience-section";
import NoisyCard from "./noisy-card";

const WorkExperienceCard = () => {
  return (
    <NoisyCard>
      <ol className="relative ml-3 border-l border-border">
        {WORK_EXPERIENCE.map((workExperience, index) => (
          <li key={workExperience.id} className="mb-10 ml-6">
            <WorkExperienceSection
              position={workExperience.position}
              company={workExperience.company}
              startDate={workExperience.startDate}
              endDate={workExperience.endDate}
              responsibilities={workExperience.responsibilities}
              isLatest={index === 0}
            />
          </li>
        ))}
      </ol>
    </NoisyCard>
  );
};

export default WorkExperienceCard;
