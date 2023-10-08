import { cn } from "@/lib/utils";
import { EXPERTISE_LEVELS, ITech } from "@/utils/data";
import { CatIcon } from "lucide-react";
import NoisyCard from "../cards/noisy-card";
import Soon from "../icons/Soon";

interface ITechSectionProps {
  title: string;
  techArray: Array<ITech>;
}

const EXPERTISE_LEVELS_MAP = {
  "template": "T",
  "beginner": "C",
  "intermediate": "B",
  "advanced": "A",
  "expert": "S",
  "aspiring": <Soon className="fill-background" />
} as const;

const EXPERTISE_CLASSNAMES = {
  "template": "bg-gradient-to-br from-gray-200 to-gray-300 py-1 px-1",
  "beginner": "bg-gradient-to-br from-red-400 to-red-500 dark:from-rose-400 dark:to-rose-500",
  "intermediate": "bg-gradient-to-br from-yellow-500 to-yellow-600 dark:from-amber-400 dark:to-amber-600",
  "advanced": "bg-gradient-to-br from-green-400 to-green-600 dark:from-emerald-400 dark:to-emerald-600",
  "expert": "bg-gradient-to-br from-blue-400 to-blue-600 dark:from-sky-400 dark:to-sky-600",
  "aspiring": "bg-gradient-to-br p-1 from-gray-600 to-gray-700 dark:from-gray-200 dark:to-gray-300",
} as const;

const getLengthToFill = (techArray: Array<ITech>) => {
  const length = techArray.length;
  if (length <= 12) {
    return 12 - length;
  }

  const remainder = length % 4;

  if (remainder === 0) {
    return 0;
  }
  return 4 - remainder;
};

const TechSection: React.FC<ITechSectionProps> = ({ title, techArray }) => (
  <section className="flex flex-col gap-2 mt-2">
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {techArray.sort((a, b) => EXPERTISE_LEVELS[b.expertise] - EXPERTISE_LEVELS[a.expertise]).map(tech => (
        <NoisyCard
          className="relative flex flex-col justify-center items-center gap-2 h-[7rem] transition-transform transform-gpu hover:scale-105"
          key={tech.tech}
        >
          <tech.icon />
          <p className="text-center text-sm font-medium">{tech.tech}</p>
          {
            (title !== "Dev Tools" && title !== "Productivity Tools") &&
            <p className={cn("absolute top-1 right-1 z-40 text-center text-xs font-semibold text-background px-2 rounded-md transition-transform transform-gpu hover:scale-110", EXPERTISE_CLASSNAMES[tech.expertise])}>
              {EXPERTISE_LEVELS_MAP[tech.expertise]}
            </p>
          }
        </NoisyCard>
      ))}
      {
        Array.from({ length: getLengthToFill(techArray) }).map((_, index) => (
          <div
            className="relative rounded-xl flex border border-border border-dashed flex-col justify-center items-center gap-2 h-[7rem] transition-transform transform-gpu hover:scale-105"
            key={index}
          >
            <CatIcon className="stroke-muted-foreground" />
          </div>
        ))
      }
    </div>
  </section>
);

export default TechSection;
