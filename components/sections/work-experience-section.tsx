import { cn } from "@/lib/utils";
import { Briefcase } from "lucide-react";

/* eslint-disable @next/next/no-img-element */
interface IProps {
  position: string;
  company: {
    name: string;
    image_url: string;
  };
  startDate: string;
  endDate: string;
  responsibilities: string[];
  isLatest?: boolean;
  withoutSeparator?: boolean;
}

const WorkExperience: React.FC<IProps> = ({
  position,
  company,
  startDate,
  endDate,
  responsibilities,
  isLatest,
  withoutSeparator,
}) => {
  return (
    <li className="relative mb-10 ml-6">
      <div className="separator absolute h-full w-px -left-6 top-8 bg-border" />
      <span
        className={cn(
          "absolute flex items-center justify-center w-6 h-6 ml-3 rounded-full -left-12 ring-8",
          {
            "bg-hunter-green-100 dark:bg-hunter-green-900 ring-hunter-green-200/80 dark:ring-hunter-green-900/30":
              isLatest,
          },
          {
            "bg-hunter-blue-100 dark:bg-hunter-blue-900 ring-hunter-blue-200/80 dark:ring-hunter-blue-900/30":
              !isLatest,
          }
        )}
      >
        <Briefcase
          className={cn(
            {
              "w-3 h-3 text-hunter-green-600 dark:text-hunter-green-400":
                isLatest,
            },
            {
              "w-3 h-3 text-hunter-blue-600 dark:text-hunter-blue-400":
                !isLatest,
            }
          )}
        />
      </span>
      <div className="flex flex-col gap-2 mb-2 sm:mb-1 sm:items-center sm:flex-row">
        <h3 className="flex items-center text-lg font-semibold text-zinc-900 dark:text-white">
          {position}
          {isLatest && (
            <span className="bg-hunter-green-100 shadow-lg shadow-hunter-green-400/20 text-green-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-hunter-green-200 dark:text-hunter-green-800 ml-3">
              Latest
            </span>
          )}
        </h3>
        <span className="hidden sm:block">·</span>
        <h4 className="flex items-center text-sm font-medium text-hunter-black-500 dark:text-hunter-black-300">
          @{company.name}
          <img
            src={company.image_url}
            alt={company.name}
            className="inline-block w-6 h-6 ml-2 rounded-md"
          />
        </h4>
      </div>
      <time className="block mb-2 text-sm font-normal leading-none text-muted-foreground">
        {startDate} - {endDate}
      </time>
      <ul className="mb-4 text-base font-normal">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="mb-3 ml-6 list-disc leading-7">
            {responsibility}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default WorkExperience;
