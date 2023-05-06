"use client";
import dynamic from "next/dynamic";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Other, Scheme, SocialMedia, Tech } from "@/types/enums";
import { cn } from "@/lib/utils";

const GraphQL = dynamic(() => import("./GraphQL"));
const MongoDB = dynamic(() => import("./MongoDB"));
const NextJS = dynamic(() => import("./NextJS"));
const NodeJS = dynamic(() => import("./NodeJS"));
const PostgreSQL = dynamic(() => import("./PostgreSQL"));
const ReactJS = dynamic(() => import("./ReactJS"));
const Redux = dynamic(() => import("./Redux"));
const TailwindCSS = dynamic(() => import("./TailwindCSS"));
const TypeScript = dynamic(() => import("./TypeScript"));
const DarkMode = dynamic(() => import("./DarkMode"));
const LightMode = dynamic(() => import("./LightMode"));
const OpenMenu = dynamic(() => import("./OpenMenu"));
const CloseMenu = dynamic(() => import("./CloseMenu"));
const Arrow = dynamic(() => import("./Arrow"));
const Golang = dynamic(() => import("./Golang"));
const Rust = dynamic(() => import("./Rust"));
const Storybook = dynamic(() => import("./Storybook"));
const Laravel = dynamic(() => import("./Laravel"));
const VSCode = dynamic(() => import("./VSCode"));
const Turborepo = dynamic(() => import("./Turborepo"));
const Electron = dynamic(() => import("./Electron"));
const Arduino = dynamic(() => import("./Arduino"));
const Github = dynamic(() => import("./Github"));
const Twitter = dynamic(() => import("./Twitter"));
const LinkedIn = dynamic(() => import("./Linkedin"));
const Schedule = dynamic(() => import("./Schedule"));

const renderLogo = (name: IconProps["name"]) => {
  switch (name) {
    case Tech.GraphQL:
      return <GraphQL />;
    case Tech.MongoDB:
      return <MongoDB />;
    case Tech.NextJS:
      return <NextJS />;
    case Tech.NodeJS:
      return <NodeJS />;
    case Tech.PostgreSQL:
      return <PostgreSQL />;
    case Tech.ReactJS:
      return <ReactJS />;
    case Tech.TailwindCSS:
      return <TailwindCSS />;
    case Tech.TypeScript:
      return <TypeScript />;
    case Tech.Redux:
      return <Redux />;
    case Tech.Golang:
      return <Golang />;
    case Tech.Rust:
      return <Rust />;
    case Tech.Storybook:
      return <Storybook />;
    case Tech.Laravel:
      return <Laravel />;
    case Tech.VSCode:
      return <VSCode />;
    case Tech.Turborepo:
      return <Turborepo />;
    case Tech.Electron:
      return <Electron />;
    case Tech.Arduino:
      return <Arduino />;
    case SocialMedia.Github:
      return <Github />;
    case SocialMedia.Twitter:
      return <Twitter />;
    case SocialMedia.LinkedIn:
      return <LinkedIn />;
    case Scheme.DarkMode:
      return <DarkMode />;
    case Scheme.LightMode:
      return <LightMode />;
    case Other.OpenMenu:
      return <OpenMenu />;
    case Other.CloseMenu:
      return <CloseMenu />;
    case Other.Arrow:
      return <Arrow />;
    case Other.Schedule:
      return <Schedule />;
    default:
      return <div />;
  }
};

interface IconProps {
  name: Tech | Scheme | SocialMedia | Other;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const Icon = ({ name, href, className, onClick }: IconProps) => {
  const component = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "bg-hunter-black-50 hover:bg-hunter-black-100  dark:bg-hunter-black-800 dark:hover:bg-hunter-black-600 relative z-10 cursor-pointer rounded-lg w-10 h-10 flex shadow-lg p-[6px] hover:pb-4 duration-150 ease-out transition-all justify-center items-center",
        className
      )}
    >
      {renderLogo(name)}
    </a>
  ) : (
    <TooltipTrigger
      id={name}
      className={cn(
        "bg-hunter-black-50 hover:bg-hunter-black-100  dark:bg-hunter-black-800 dark:hover:bg-hunter-black-600 relative z-10 cursor-pointer rounded-lg w-10 h-10 flex shadow-lg p-[6px] hover:pb-4 duration-150 ease-out transition-all justify-center items-center",
        className
      )}
      onClick={onClick}
    >
      {renderLogo(name)}
    </TooltipTrigger>
  );

  return (
    <TooltipProvider>
      <Tooltip>
        {component}
        <TooltipContent>{name}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Icon;
