"use client";
import FramerCard from "./framer-card";
import { WORK_EXPERIENCE } from "@/utils/data";
import WorkExperienceSection from "../sections/work-experience-section";

const WorkExperienceCard = ({ className }: { className?: string }) => {
  return (
    <FramerCard className={className}>
      <ol className="relative ml-3 border-l border-gray-300 dark:border-gray-700">
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
    </FramerCard>
  );
};

export default WorkExperienceCard;
