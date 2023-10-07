"use client";
import React from "react";
import { Other, Scheme, ESocialMedia, ETech } from "@/types/enums";
import { cn } from "@/lib/utils";

import JavaScript from './JavaScript';
import TypeScript from './TypeScript';
import Python from './Python';
import CPlusPlus from './CPlusPlus';
import Golang from './Golang';
import Rust from './Rust';
import NextJS from './NextJS';
import ReactJS from './ReactJS';
import Astro from './Astro';
import TailwindCSS from './TailwindCSS';
import Redux from './Redux';
import FramerMotion from './FramerMotion';
import StyledComponents from './StyledComponents';
import Bootstrap from './Bootstrap';
import SaSS from './SaSS';
import Storybook from './Storybook';
import NodeJS from './NodeJS';
import ExpressJS from './ExpressJS';
import NestJS from './NestJS';
import Hono from './Hono';
import FastAPI from './FastAPI';
import PostgreSQL from './PostgreSQL';
import Sequelize from './Sequelize';
import Prisma from './Prisma';
import Supabase from './Supabase';
import Firebase from './Firebase';
import Playwright from './Playwright';
import Jest from './Jest';
import ReactTestingLibrary from './ReactTestingLibrary';
import Swagger from './Swagger';
import AWS from './AWS';
import Azure from './Azure';
import OpenAI from './OpenAI';
import GitHubCopilot from './GitHubCopilot';
import Figma from './Figma';
import VSCode from './VSCode';
import Git from './Git';
import Github from './Github';
import Gitlab from './Gitlab';
import Vercel from './Vercel';
import Vite from './Vite';
import Vim from './Vim';
import Turborepo from './Turborepo';
import Docker from './Docker';
import Npm from './Npm';
import Pnpm from './Pnpm';
import Excalidraw from './Excalidraw';
import Notion from './Notion';
import Linear from './Linear';
import { PowerShell } from './PowerShell';
import Slack from './Slack';
import Zoom from './Zoom';
import Discord from './Discord';
import GoogleSuite from './GoogleSuite';
import Windows from './Windows';
import ThunderClient from './ThunderClient';
import WindowsTerminal from './WindowsTerminal';
import Obsidian from './Obsidian';
import Cron from './Cron';

const renderLogo = (name: IconProps["name"]) => {
  switch (name) {
    case ETech.JavaScript:
      return <JavaScript width={24} height={24} />;
    case ETech.TypeScript:
      return <TypeScript width={24} height={24} />;
    case ETech.Python:
      return <Python width={24} height={24} />;
    case ETech.CPlusPlus:
      return <CPlusPlus width={24} height={24} />;
    case ETech.Golang:
      return <Golang width={24} height={24} />;
    case ETech.Rust:
      return <Rust width={24} height={24} />;
    case ETech.NextJS:
      return <NextJS width={24} height={24} />;
    case ETech.ReactJS:
      return <ReactJS width={24} height={24} />;
    case ETech.Astro:
      return <Astro />
    case ETech.TailwindCSS:
      return <TailwindCSS width={24} height={24} />;
    case ETech.Redux:
      return <Redux width={24} height={24} />;
    case ETech.ReactNative:
      return <ReactJS width={24} height={24} />;
    case ETech.FramerMotion:
      return <FramerMotion />;
    case ETech.StyledComponents:
      return <StyledComponents />;
    case ETech.Bootstrap:
      return <Bootstrap />;
    case ETech.SaSS:
      return <SaSS />;
    case ETech.Storybook:
      return <Storybook width={24} height={24} />;
    case ETech.NodeJS:
      return <NodeJS width={24} height={24} />;
    case ETech.ExpressJS:
      return <ExpressJS />;
    case ETech.NestJS:
      return <NestJS />;
    case ETech.Hono:
      return <Hono />;
    case ETech.FastAPI:
      return <FastAPI width={24} height={24} />;
    case ETech.PostgreSQL:
      return <PostgreSQL width={24} height={24} />;
    case ETech.Sequelize:
      return <Sequelize />;
    case ETech.Prisma:
      return <Prisma />;
    case ETech.Supabase:
      return <Supabase width={24} height={24} />;
    case ETech.Firebase:
      return <Firebase width={24} height={24} />;
    case ETech.Playwright:
      return <Playwright />;
    case ETech.Jest:
      return <Jest />;
    case ETech.ReactTestingLibrary:
      return <ReactTestingLibrary />;
    case ETech.Swagger:
      return <Swagger />;
    case ETech.AWS:
      return <AWS />;
    case ETech.Azure:
      return <Azure />;
    case ETech.OpenAI:
      return <OpenAI />;
    case ETech.GitHubCopilot:
      return <GitHubCopilot />;
    case ETech.Figma:
      return <Figma />;
    case ETech.VSCode:
      return <VSCode width={24} height={24} />;
    case ETech.Git:
      return <Git />;
    case ETech.Github:
      return <Github width={24} height={24} />;
    case ETech.Gitlab:
      return <Gitlab />;
    case ETech.Vercel:
      return <Vercel />;
    case ETech.Vite:
      return <Vite />;
    case ETech.Vim:
      return <Vim />;
    case ETech.Turborepo:
      return <Turborepo width={24} height={24} />;
    case ETech.Docker:
      return <Docker />;
    case ETech.Npm:
      return <Npm />;
    case ETech.Pnpm:
      return <Pnpm />;
    case ETech.Excalidraw:
      return <Excalidraw />;
    case ETech.Notion:
      return <Notion />;
    case ETech.Linear:
      return <Linear />;
    case ETech.PowerShell:
      return <PowerShell />;
    case ETech.Slack:
      return <Slack />;
    case ETech.Zoom:
      return <Zoom />;
    case ETech.Discord:
      return <Discord />
    case ETech.GoogleSuite:
      return <GoogleSuite />;
    case ETech.Windows:
      return <Windows />;
    case ETech.ThunderClient:
      return <ThunderClient />;
    case ETech.WindowsTerminal:
      return <WindowsTerminal />;
    case ETech.Obsidian:
      return <Obsidian />;
    case ETech.ChatGPT:
      return <OpenAI width={24} height={24} />;
    case ETech.Cron:
      return <Cron />;
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
