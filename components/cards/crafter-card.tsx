
"use client";
import { cn } from "@/lib/utils";
import { ESocialMedia, Other } from "@/types/enums";
import Image from "next/image";
import React from "react";
import Icon from "../icons";
import NoisyCard from "./noisy-card";

type CrafterCardProps = {
};

const CrafterCard: React.FC<CrafterCardProps> = ({
}) => {
  return (
    <NoisyCard>
      <div className="relative p-[calc(1.5rem-1px)] rounded-lg bg-center bg-no-repeat bg-cover w-full blur-lg h-full" style={{
        backgroundImage: `url("/images/crafter-station-logo.png")`,
      }} />
      <svg className="absolute inset-0 z-10 rounded-xl pointer-events-none opacity-70 mix-blend-soft-light" width="100%" height="100%">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch">
          </feTurbulence>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)"></rect>
      </svg>
      <article className="absolute rounded-xl flex flex-col justify-center items-center inset-0 p-4 gap-2 bg-background/90 dark:bg-background/70" >
        <header className="flex flex-col justify-center gap-2">
          <div className="flex items-center justify-center">
            <h1 className="flex font-semibold gap-2 items-center text-xl">
              <Image
                src={"/images/crafter-station-logo.png"}
                alt="Crafter Station Logo"
                width={40}
                height={40}
                className="transition-transform no-drag rounded-lg ring-hunter-yellow-400 dark:ring-hunter-yellow-500 group-hover:ring-2 group-hover:scale-110"
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
    </NoisyCard>
  );
};

export default CrafterCard;