import { cn } from "@/lib/utils";
import { ESocialMedia, ETech, Other } from "@/types/enums";
import { BanIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import Icon from "../icons";
import { RepoStars } from "../misc/repo-stars";
import NoisyCard from "./noisy-card";

type ProjectCardProps = {
  title: string;
  description: string;
  summary: string;
  linkDemo?: string;
  linkRepository?: string;
  logoUrl: string;
  className?: string;
  repoName?: string;
  stack?: string[];
  children?: React.ReactNode;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  summary,
  linkDemo,
  logoUrl = "/images/unknown-logo.png",
  linkRepository,
  repoName,
  stack,
  className,
}) => {
  return (
    <NoisyCard className={cn(className, "overflow-hidden")}>
      <div
        className={cn(
          "relative p-[calc(1.5rem-1px)] rounded-lg bg-center bg-no-repeat bg-cover w-full blur-xl h-full bg-opacity-30 opacity-30"
        )}
        style={{
          backgroundImage: `url("${logoUrl}")`,
        }}
      />
      <svg
        className="absolute inset-0 z-10 rounded-xl pointer-events-none opacity-70 mix-blend-soft-light"
        width="100%"
        height="100%"
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          ></feTurbulence>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)"></rect>
      </svg>
      <article
        className={cn(
          "absolute flex flex-col justify-between inset-0 p-4 bg-background/60 dark:bg-black/40",
          {
            "dark:bg-background/90": title === "Spotigen",
          }
        )}
      >
        <header className="flex flex-col justify-center sm:gap-2">
          <div className="relative flex items-center justify-between">
            <h1 className="flex font-semibold gap-2 items-center text-xl">
              <Image
                src={logoUrl || "/images/unknown-logo.png"}
                alt={title}
                width={40}
                height={40}
                className="transition-transform no-drag rounded-lg ring-hunter-yellow-400 dark:ring-hunter-yellow-500 group-hover:ring-2 group-hover:scale-110"
              />
              {title}
            </h1>
            <RepoStars repoName={repoName} />
          </div>
          <span className="font-normal border border-dashed border-border flex justify-center my-2 rounded-sm text-gray-400 text-sm py-1">
            {description}
          </span>
          <div className="flex flex-col gap-2 h-[8rem] sm:h-[10rem] justify-between">
            <div className="flex flex-col gap-1">
              <span className="font-normal flex rounded-sm text-gray-400 text-sm">
                Description
              </span>
              <p className="text-normal self-start w-full">{summary}</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-normal flex rounded-sm text-gray-400 text-sm">
                Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {stack?.map((tech: string) => (
                  <Icon name={ETech[tech as keyof typeof ETech]} key={tech} />
                ))}
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col justify-between items-center w-full gap-10 mt-5">
          <div className="flex sm:flex-col w-full gap-6 sm:gap-2">
            {linkDemo ? (
              <Icon href={linkDemo} name={Other.Play}>
                Demo
              </Icon>
            ) : (
              <span className="border-dashed border border-border rounded-sm flex justify-center items-center gap-2 h-[40px]">
                <BanIcon className="stroke-gray-400" />
                <span className="font-semibold text-gray-400 text-[14px]">
                  No Demo
                </span>
              </span>
            )}
            {linkRepository && (
              <Icon href={linkRepository} name={ESocialMedia.Github}>
                Repo
              </Icon>
            )}
          </div>
        </div>
      </article>
    </NoisyCard>
  );
};

export default ProjectCard;
