"use client";
import { useImmutableRequest } from "@/hooks/use-request";
import { cn } from "@/lib/utils";
import { ESocialMedia, ETech, Other } from "@/types/enums";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import Icon from "../icons";
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
  const { data: repo } = useImmutableRequest<{
    success?: boolean;
    stars?: string;
  }>(`/api/stars/${repoName}`)

  return (
    <NoisyCard className={cn(className, "overflow-hidden")}>
      <div className={cn("relative p-[calc(1.5rem-1px)] rounded-lg bg-center bg-no-repeat bg-cover w-full blur-xl h-full",
      )} style={{
        backgroundImage: `url("${logoUrl}")`
      }} />
      <svg className="absolute inset-0 z-10 rounded-xl pointer-events-none opacity-70 mix-blend-soft-light" width="100%" height="100%">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch">
          </feTurbulence>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)"></rect>
      </svg>
      <article className={cn("absolute flex flex-col justify-between inset-0 p-4 bg-background/90 dark:bg-background/70",
        {
          "dark:bg-background/90": title === "Spotigen"
        }
      )} >
        <header className="flex flex-col justify-center sm:gap-2">
          <div className="flex items-center justify-between">
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
            {
              repo?.stars && Number(repo?.stars) > 0 && (
                <span className="flex py-1 items-center gap-1 px-2 transition-colors border-border border border-dashed rounded-sm">
                  <StarIcon className="inline-block w-4 h-4 fill-amber-400 stroke-amber-400" />
                  <span className="font-semibold text-[14px]">{repo?.stars || 0}</span>
                </span>
              )
            }
          </div>
          <span className="font-normal border border-dashed border-border flex justify-center rounded-sm text-gray-400 text-sm py-1">{description}</span>
          <div className="flex flex-col h-[8rem] sm:h-[11.5rem] justify-between">
            <div>
              <span className="font-normal flex rounded-sm text-gray-400 text-sm mt-1">Description</span>
              <p className="text-normal self-start w-full">{summary}</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-normal flex rounded-sm text-gray-400 text-sm mt-1">Stack</span>
              <div className="flex flex-wrap gap-2">
                {
                  stack?.map((tech: string) => (
                    <Icon name={ETech[tech as keyof typeof ETech]} key={tech} />
                  ))
                }
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col justify-between items-center w-full gap-10 mt-5">
          <div className="flex sm:flex-col w-full gap-6 sm:gap-2">
            {linkDemo && (
              <Icon
                href={linkDemo}
                name={Other.Play}>
                Demo
              </Icon>
            )}
            {linkRepository && (
              <Icon
                href={linkRepository}
                name={ESocialMedia.Github}>
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