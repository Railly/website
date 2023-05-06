"use client";
import dynamic from "next/dynamic";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Other, Scheme, ESocialMedia, ETech } from "@/types/enums";
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
    case ETech.GraphQL:
      return <GraphQL width={24} height={24} />;
    case ETech.MongoDB:
      return <MongoDB width={24} height={24} />;
    case ETech.NextJS:
      return <NextJS width={24} height={24} />;
    case ETech.NodeJS:
      return <NodeJS width={24} height={24} />;
    case ETech.PostgreSQL:
      return <PostgreSQL width={24} height={24} />;
    case ETech.ReactJS:
      return <ReactJS width={24} height={24} />;
    case ETech.TailwindCSS:
      return <TailwindCSS width={24} height={24} />;
    case ETech.TypeScript:
      return <TypeScript width={24} height={24} />;
    case ETech.Redux:
      return <Redux width={24} height={24} />;
    case ETech.Golang:
      return <Golang width={24} height={24} />;
    case ETech.Rust:
      return <Rust width={24} height={24} />;
    case ETech.Storybook:
      return <Storybook width={24} height={24} />;
    case ETech.Laravel:
      return <Laravel width={24} height={24} />;
    case ETech.VSCode:
      return <VSCode width={24} height={24} />;
    case ETech.Turborepo:
      return <Turborepo width={24} height={24} />;
    case ETech.Electron:
      return <Electron width={24} height={24} />;
    case ETech.Arduino:
      return <Arduino width={24} height={24} />;
    case ESocialMedia.Github:
      return <Github />;
    case ESocialMedia.Twitter:
      return <Twitter />;
    case ESocialMedia.LinkedIn:
      return <LinkedIn />;
    case Scheme.DarkMode:
      return <DarkMode width={24} height={24} />;
    case Scheme.LightMode:
      return <LightMode width={24} height={24} />;
    case Other.OpenMenu:
      return <OpenMenu width={24} height={24} />;
    case Other.CloseMenu:
      return <CloseMenu width={24} height={24} />;
    case Other.Arrow:
      return <Arrow width={24} height={24} />;
    case Other.Schedule:
      return <Schedule />;
    default:
      return <div />;
  }
};

interface IconProps {
  name: ETech | Scheme | ESocialMedia | Other;
  href?: string;
  className?: string;
  raw?: boolean;
  onClick?: () => void;
}

const Icon = ({ name, href, className, onClick, raw }: IconProps) => {
  if (raw) return renderLogo(name);
  const component = href ? (
    <a
      id={name}
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
