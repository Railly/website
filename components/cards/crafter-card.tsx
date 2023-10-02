
"use client";
import { cn } from "@/lib/utils";
import { ESocialMedia, Other } from "@/types/enums";
import Image from "next/image";
import React from "react";
import Icon from "../icons";

type CrafterCardProps = {
};

const CrafterCard: React.FC<CrafterCardProps> = ({
}) => {
  return (
    <section className={cn("flex rounded-xl border border-border bg-gray-100/70 dark:bg-background/90 shadow-md shadow-foreground/5 overflow-hidden relative w-full transition-all")}>
      <div className="relative p-[calc(1.5rem-1px)] rounded-lg bg-center bg-no-repeat bg-cover w-full blur-lg h-full" style={{
        backgroundImage: `url("/images/crafter-station-logo.png")`,
      }} />
      <article className="absolute flex flex-col justify-center items-center inset-0 p-4 gap-2 bg-background/90 dark:bg-background/70" >
        <header className="flex flex-col justify-center gap-2">
          <div className="flex items-center justify-center">
            <h1 className="flex font-semibold gap-2 items-center text-xl">
              <Image
                src={"/images/crafter-station-logo.png"}
                alt="Crafter Station Logo"
                width={40}
                height={40}
                className="transition-transform rounded-lg ring-hunter-yellow-400 dark:ring-hunter-yellow-500 group-hover:ring-2 group-hover:scale-110"
              />
              <span>Crafter Station</span>
            </h1>
          </div>
        </header>
        <div className="flex justify-center items-center w-full gap-4">
          <span className="text-center">
            Web Development Agency & Open Source Organization
          </span>
          <div className="flex flex-col gap-2">
            <Icon
              href="https://crafter-station.com"
              name={Other.Play}
            >
              Website
            </Icon>
            <Icon
              href="https://github.com/crafter-station"
              name={ESocialMedia.Github}
            >
              GitHub
            </Icon>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CrafterCard;