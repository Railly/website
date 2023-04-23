import { SectionTypes } from "@/types/enums";

export type StackSectionProps = {
  title: SectionTypes;
  skills: Array<{
    tech: string;
    icon: (props: any) => JSX.Element;
  }>;
};

const StackSection = ({ title, skills }: StackSectionProps) => {
  return (
    <section className="mt-8">
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-semibold sm:text-3xl">{title}</h1>
      </div>
      <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill, index) => (
          <li key={index}>
            <TechCard
              key={index}
              tech={skill.tech}
              icon={skill.icon}
              type={title}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

const styles = {
  [SectionTypes.Stack]:
    "from-hunter-green-300 to-hunter-green-500 hover:shadow-hunter-green-500/30",
  [SectionTypes.Learning]:
    "from-hunter-yellow-300 to-hunter-yellow-500 hover:shadow-hunter-yellow-500/30",
  [SectionTypes.Planning]:
    "from-hunter-blue-300 to-hunter-blue-500 hover:shadow-hunter-blue-500/30",
};

interface TechCardProps {
  tech: string;
  icon: (props: any) => JSX.Element;
  type: SectionTypes;
}

const TechCard = ({ tech, icon: Icon, type }: TechCardProps) => {
  return (
    <div
      className={`p-1 bg-gradient-to-r rounded-xl hover:scale-[1.02] hover:shadow-lg dark:shadow-gray-200/40 transition ${styles[type]}`}
    >
      <div className="flex flex-col items-center py-1 font-medium transition rounded-lg bg-white/90 dark:bg-hunter-black-900 hover:bg-zinc-100 dark:hover:bg-hunter-black-600">
        <span
          title={tech}
          className="max-w-full overflow-hidden select-none whitespace-nowrap text-ellipsis"
        >
          {tech}
        </span>
        <Icon className="w-8 h-8 m-1" />
      </div>
    </div>
  );
};

export default StackSection;
