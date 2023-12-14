"use client";
import RHProfileImage from "../images/rh-profile-image";
import NoisyCard from "./noisy-card";

const AboutCard = () => {
  return (
    <NoisyCard className="grid w-full gap-4 grid-cols-1 md:grid-cols-[2.5fr,1fr] items-center place-items-center">
      <div className="flex flex-col gap-1">
        <span className="text-2xl font-semibold text-center md:text-left">
          Who am I?
        </span>
        <p className="text-normal text-center md:text-left">
          <span className="font-semibold animated-yellow-gradient">
            Master&apos;s student
          </span>{" "}
          in <b>Artificial Intelligence</b>, experienced <b>UI Developer</b>, and{" "}
          <b>Software Engineer</b> specialized in{" "}
          <span className="font-semibold animated-blue-gradient">
            React, Next.js and TypeScript
          </span>
          .
        </p>
      </div>
      <RHProfileImage size={80} />
    </NoisyCard>
  );
};

export default AboutCard;
