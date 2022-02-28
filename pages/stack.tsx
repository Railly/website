import TechCard from "components/TechCard";
import { learningInProgress, myCurrentSkills } from "utils/data";
import { useState } from "react";

const Stack = () => {
  const [showAllCurrentStack, setShowAllCurrentStack] = useState(false);
  const [showAllInProgress, setShowAllInProgress] = useState(false);
  return (
    <>
      <section className="mt-4">
        <div className="flex items-center mb-4">
          <h1 className="text-3xl font-bold font-gilmer">My Stack</h1>
          <button
            className="ml-4"
            onClick={() => setShowAllCurrentStack(!showAllCurrentStack)}
          >
            <span>
              {showAllCurrentStack
                ? "Show less"
                : `Show ${myCurrentSkills.length - 4} more`}
            </span>
          </button>
        </div>
        <ul className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-4">
          {myCurrentSkills
            .map((skill, index) => (
              <li key={index}>
                <TechCard key={index} tech={skill.tech} icon={skill.icon} />
              </li>
            ))
            .slice(0, showAllCurrentStack ? myCurrentSkills.length : 4)}
        </ul>
      </section>
      <section className="mt-4">
        <div className="flex items-center mb-4">
          <h1 className="text-3xl font-bold font-gilmer">In progress</h1>
          {!showAllInProgress && myCurrentSkills.length > 4 && (
            <button
              className="ml-4"
              onClick={() => setShowAllInProgress(!showAllInProgress)}
            >
              <span>
                {showAllInProgress
                  ? "Show less"
                  : `Show (${myCurrentSkills.length - 4}) more`}
              </span>
            </button>
          )}
        </div>
        <ul className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-4">
          {learningInProgress
            .map((skill, index) => (
              <li key={index}>
                <TechCard key={index} tech={skill.tech} icon={skill.icon} />
              </li>
            ))
            .slice(0, showAllInProgress ? learningInProgress.length : 4)}
        </ul>
      </section>
    </>
  );
};

export default Stack;
