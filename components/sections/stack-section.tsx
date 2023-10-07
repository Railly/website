import { ESectionTypes } from "@/types/enums";

export type StackSectionProps = {
  title: ESectionTypes;
  skills: Array<{
    tech: string;
    icon: (props: any) => JSX.Element;
  }>;
};

const StackSection = ({ title, skills }: StackSectionProps) => {
  return (
    <section className="mt-10">
      <h1 className="mb-6 text-2xl font-bold sm:text-3xl">{title}</h1>
      <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
    <div className="p-2 transition transform rounded-lg hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-800">
      <div className="flex items-center gap-2 font-medium">
        <Icon className="w-8 h-8" />
        <span className="max-w-full overflow-hidden select-none whitespace-nowrap text-ellipsis">{tech}</span>
      </div>
    </div>
  );
};

export default StackSection;
