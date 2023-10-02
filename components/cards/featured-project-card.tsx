"use client";
import { useImmutableRequest } from "@/hooks/use-request";
import { cn } from "@/lib/utils";
import { ESocialMedia, ETech, Other } from "@/types/enums";
import { useTheme } from "@wits/next-themes";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Icon from "../icons";

type ProjectCardProps = {
  title: string;
  description: string;
  summary: string;
  linkDemo?: string;
  linkRepository?: string;
  logoUrl: string;
  className?: string;
  stack?: string[];
  repoName?: string;
  children?: React.ReactNode;
};

const FeaturedProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  summary,
  linkDemo,
  logoUrl,
  linkRepository,
  repoName,
  stack,
  className,
}) => {
  const { theme } = useTheme()
  const [bgStyle, setBgStyle] = useState<string>("linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))");
  const { data: repo } = useImmutableRequest<{
    success?: boolean;
    stars?: string;
  }>(`/api/stars/${repoName}`)

  useEffect(() => {
    console.log({ theme })
    if (theme === "dark") {
      setBgStyle(`linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${logoUrl})`);
    } else {
      setBgStyle(`linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${logoUrl})`);
    }
  }, [theme]);


  return (
    <section className={cn("flex rounded-xl border border-border bg-gray-100/70 dark:bg-background/90 shadow-md shadow-foreground/5 overflow-hidden relative w-full transition-all", className)}>
      <div className="relative p-[calc(1.5rem-1px)] rounded-lg bg-center bg-no-repeat bg-cover w-full blur-xl h-full" style={{
        backgroundImage: bgStyle
      }} />
      <article className="absolute flex flex-col justify-between inset-0 p-4" >
        <header className="flex flex-col justify-center gap-2">
          <div className="flex font-semibold gap-2 justify-between items-center text-xl">
            <h1 className="flex gap-2 items-center">
              <Image
                src={logoUrl || "/images/unknown-logo.png"}
                alt={title}
                width={40}
                height={40}
                className="transition-transform rounded-lg ring-hunter-yellow-400 dark:ring-hunter-yellow-500 group-hover:ring-2 group-hover:scale-110"
              />
              {title}
            </h1>
            <span className="font-normal border border-dashed border-border flex w-1/3 justify-center rounded-sm text-gray-400 text-sm py-1">{description}</span>
            <span className="flex items-center gap-1 px-2 transition-colors border-border border border-dashed rounded-sm">
              <StarIcon className="inline-block w-4 h-4 fill-amber-400 stroke-amber-400" />
              <span className="text-[14px]">{repo?.stars || 0}</span>
            </span>
          </div>
          <div className="flex gap-6">
            <div>
              <span className="font-normal flex rounded-sm text-gray-400 text-sm mt-1">Description</span>
              <p className="text-normal self-start w-full">{summary}</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-normal flex rounded-sm text-gray-400 text-sm mt-1">Stack</span>
              <div className="flex gap-2">
                {
                  stack?.map((tech: string) => (
                    <Icon name={ETech[tech as keyof typeof ETech]} key={tech} />
                  ))
                }
              </div>
            </div>
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
          </div>
        </header>
      </article>
    </section>
  );
};

export default FeaturedProjectCard;
