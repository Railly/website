"use client";
import RHProfileImage from "../images/rh-profile-image";

const AboutCard = () => {
  return (
    <header className="grid w-full gap-6 grid-cols-1 md:grid-cols-[2.5fr,1fr] items-center border border-border bg-gray-100/70 dark:bg-background/90 p-4 shadow-md shadow-foreground/5 rounded-xl">
      <div className="flex flex-col gap-1">
        <span className="text-2xl font-semibold animated-gray-gradient">
          Railly Hugo
        </span>
        <p className="text-normal">
          <span className="font-semibold animated-yellow-gradient">
            Master&apos;s student
          </span>{" "}
          in <b>Artificial Intelligence</b>, seasoned <b>UI Developer</b>, and{" "}
          <b>Software Engineer</b> specialized in{" "}
          <span className="font-semibold animated-blue-gradient">
            React, Next.js and TypeScript
          </span>
          .
        </p>
      </div>
      <RHProfileImage size={80} />
    </header>
  );
};

export default AboutCard;
