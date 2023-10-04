"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
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
const Play = dynamic(() => import("./Play"));
const Supabase = dynamic(() => import("./Supabase"));
const Firebase = dynamic(() => import("./Firebase"));
const JavaScript = dynamic(() => import("./JavaScript"));
const Python = dynamic(() => import("./Python"));
const OpenAI = dynamic(() => import("./OpenAI"));
const FastAPI = dynamic(() => import("./FastAPI"));

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
    case ETech.Supabase:
      return <Supabase width={24} height={24} />;
    case ETech.Firebase:
      return <Firebase width={24} height={24} />;
    case ETech.JavaScript:
      return <JavaScript width={24} height={24} />;
    case ETech.Python:
      return <Python width={24} height={24} />;
    case ETech.OpenAI:
      return <OpenAI width={24} height={24} />;
    case ETech.FastAPI:
      return <FastAPI width={24} height={24} />;
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
    case Other.Play:
      return <Play width={24} height={24} />;
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
  children?: React.ReactNode;
}

const ButtonIcon = ({ name, href, className, onClick, raw, children }: IconProps) => {
  if (raw) return renderLogo(name);
  const component = href ? (
    <a
      id={name}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "bg-hunter-black-50 gap-2 hover:bg-hunter-black-100  dark:bg-background dark:hover:bg-[#202121] relative z-10 cursor-pointer rounded-lg w-full h-10 flex shadow-lg p-[6px] duration-150 ease-out transition-all justify-center items-center border-[hsl(0_0%_20.5%)] border select-none",
        className
      )}
    >
      {renderLogo(name)}
      {children}
    </a>
  ) : (
    <button
      id={name}
      className={cn(
        "bg-hunter-black-50 gap-2 hover:bg-hunter-black-100  dark:bg-background dark:hover:bg-[#202121] relative z-10 cursor-pointer rounded-lg w-10 h-10 flex shadow-lg p-[6px] duration-150 ease-out transition-all justify-center items-center border-[hsl(0_0%_20.5%)] border select-none",
        className
      )}
      onClick={onClick}
    >
      {renderLogo(name)}
      {children}
    </button>
  );

  return <>{component}</>;
};

export default ButtonIcon;
