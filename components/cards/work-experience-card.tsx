"use client";
import { WORK_EXPERIENCE } from "@/utils/data";
import WorkExperienceSection from "../sections/work-experience-section";

const WorkExperienceCard = () => {
  return (
    <div className="border border-border bg-gray-100/70 dark:bg-background/90 p-4 shadow-md shadow-foreground/5 rounded-xl">
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
    </div>
  );
};

export default WorkExperienceCard;
