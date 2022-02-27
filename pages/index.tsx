import type { NextPage } from "next";
import Image from "next/image";
import TechCard from "components/TechCard";
import { learningInProgress, myCurrentSkills } from "utils/data";
import { useState } from "react";

const Home: NextPage = () => {
  const [showAllCurrentStack, setShowAllCurrentStack] = useState(false);
  const [showAllInProgress, setShowAllInProgress] = useState(false);

  return (
    <>
      <section className="flex flex-col-reverse items-center sm:flex-row">
        <div className="grid flex-1 mt-4 sm:mr-4 grid-row-3 sm:mt-0">
          <h1 className="mb-4 text-3xl font-bold sm:text-5xl font-gilmer">
            Railly Hugo
          </h1>
          <p className="flex items-center">
            <span className="mr-2 text-lg font-bold">
              Frontend Developer at ID BI
            </span>
            <Image
              className="rounded-md"
              src="/images/id-logo.jpg"
              alt="ID BI Logo"
              width={20}
              height={20}
            />
          </p>
          <span className="mt-4">
            Hi, welcome to my digital space. Here I share my side projects,
            tutorials & what I learn over time. I am looking to grow my career
            in tech 🚀
          </span>
        </div>
        <div className="flex justify-center p-2 rounded-full from-indigo-500 to-cyan-600 bg-gradient-to-tr w-max">
          <div className="flex justify-center p-0.5 bg-white rounded-full">
            <Image
              className="rounded-full"
              src="/images/profile.png"
              alt="A profile photo of Railly Hugo"
              width={150}
              height={150}
            />
          </div>
        </div>
      </section>
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

export default Home;
