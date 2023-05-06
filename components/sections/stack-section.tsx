import { ESectionTypes } from "@/types/enums";
import FramerCard from "../cards/framer-card";

export type StackSectionProps = {
  title: ESectionTypes;
  skills: Array<{
    tech: string;
    icon: (props: any) => JSX.Element;
  }>;
};

const StackSection = ({ title, skills }: StackSectionProps) => {
  return (
    <section className="mt-8">
      <div className="flex items-center mb-4">
        <h1 className="text-xl font-semibold sm:text-2xl">{title}</h1>
      </div>
      <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill) => (
          <li key={skill.tech}>
            <TechCard tech={skill.tech} icon={skill.icon} />
          </li>
        ))}
      </ul>
    </section>
  );
};

interface TechCardProps {
  tech: string;
  icon: (props: any) => JSX.Element;
}

const TechCard = ({ tech, icon: Icon }: TechCardProps) => {
  return (
    <FramerCard className="p-1">
      <div className="flex items-center gap-2 px-2 py-1 font-medium transition rounded-lg">
        <Icon className="w-8 h-8" />
        <span
          title={tech}
          className="max-w-full overflow-hidden select-none whitespace-nowrap text-ellipsis"
        >
          {tech}
        </span>
      </div>
    </FramerCard>
  );
};

export default StackSection;
