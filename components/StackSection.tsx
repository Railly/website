import { SectionTypes } from "utils/types";

type StackSectionProps = {
  title: SectionTypes;
  skills: Array<{
    tech: string;
    icon: (props: any) => JSX.Element;
  }>;
};

type TechCardProps = {
  tech: string;
  icon: (props: any) => JSX.Element;
  type: SectionTypes;
};

const StackSection = ({ title, skills }: StackSectionProps) => {
  return (
    <section className="mt-4">
      <div className="flex items-center mb-4">
        <h1 className="text-3xl font-bold ">{title}</h1>
      </div>
      <ul className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-4">
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
    "from-emerald-300 to-emerald-500 hover:shadow-emerald-500/30",
  [SectionTypes.Learning]:
    "from-amber-300 to-amber-500 hover:shadow-amber-500/30",
  [SectionTypes.Planning]:
    "from-indigo-300 to-indigo-500 hover:shadow-indigo-500/30",
};

const TechCard = ({ tech, icon: Icon, type }: TechCardProps) => {
  return (
    <div
      className={`p-1 bg-gradient-to-r rounded-xl hover:scale-[1.02] hover:shadow-lg dark:shadow-gray-200/40 transition ${styles[type]}`}
    >
      <div className="flex flex-col items-center py-1 font-medium transition bg-white rounded-lg dark:bg-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-600">
        <span>{tech}</span>
        <Icon className="w-8 h-8 m-1" />
      </div>
    </div>
  );
};

export default StackSection;
