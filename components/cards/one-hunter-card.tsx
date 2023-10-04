"use client"
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Icon from "@/components/icons";
import { ETech } from "@/types/enums";
import NoisyCard from "./noisy-card";

const OneHunterCard = () => {
  return (
    <NoisyCard className="cursor-pointer group hover:shadow-md border border-border hover:border-foreground/50 dark:hover:shadow-foreground/5 dark:hover:border-foreground/30 transition-all">
      <div
        onClick={() => window.open("https://marketplace.visualstudio.com/items?itemName=RaillyHugo.one-hunter", "_blank")}
        className="grid w-full grid-cols-1 gap-2 mb-2 md:grid-cols-2 place-items-center">
        <div className="flex flex-col gap-2 p-4">
          <div className="flex items-center gap-2">
            <Image
              className="border-2 rounded-full border-white/50 no-drag"
              src="/images/one-hunter-logo.png"
              alt="One Hunter Theme Logo"
              width={45}
              height={45}
            />
            <h3 className="text-lg font-medium sm:text-xl ">
              One Hunter Theme
            </h3>
          </div>
          <p className="mb-2 text-base">
            A VSCode theme inspired by Vercel Theme ▲ and One Dark Pro 🎨.
          </p>
          <p className="flex items-center justify-center gap-4 pt-2">
            <a
              href="https://marketplace.visualstudio.com/items?itemName=RaillyHugo.one-hunter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-hunter-blue-500"
            >
              <Icon name={ETech.VSCode} />
            </a>
            <a
              href="https://github.com/Railly/one-hunter-vscode/stargazers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="no-drag"
                src="https://img.shields.io/github/stars/Railly/one-hunter-vscode?colorA=363a4f&colorB=f9c35a&style=for-the-badge"
                alt="GitHub stars"
                width={104}
                height={28}
              />
            </a>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=RaillyHugo.one-hunter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="no-drag"
                src="https://img.shields.io/visual-studio-marketplace/azure-devops/installs/total/RaillyHugo.one-hunter?colorA=363a4f&colorB=5BDfff&style=for-the-badge"
                alt="Visual Studio Marketplace Installs"
                width={137}
                height={28}
              />
            </a>
          </p>
        </div>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=RaillyHugo.one-hunter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="border no-drag rounded-lg h-52 border-white/50 w-72"
            src="/svg/one-hunter-theme.svg"
            alt="One Hunter Theme"
            width={400}
            height={225}
          />
        </a>
      </div>
    </NoisyCard>
  );
};

export default OneHunterCard;
