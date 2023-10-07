import { EXPERTISE_LEVELS, ITech } from "@/utils/data";

interface ITechSectionProps {
  title: string;
  techArray: Array<ITech>;
}

const TechSection: React.FC<ITechSectionProps> = ({ title, techArray }) => (
  <section>
    <h2>{title}</h2>
    <div className="tech-cards">
      {techArray.sort((a, b) => EXPERTISE_LEVELS[a.expertise] - EXPERTISE_LEVELS[b.expertise]).map(tech => (
        <div className="tech-card" key={tech.tech}>
          <tech.icon />
          <p>{tech.tech}</p>
          {/* <ExpertiseBar level={tech.expertise} /> */}
          {/* Optionally, add a description or tooltip trigger here */}
        </div>
      ))}
    </div>
  </section>
);

export default TechSection;