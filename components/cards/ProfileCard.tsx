/* eslint-disable @next/next/no-img-element */
"use client";
import "atropos/css";
import FramerCard from "../FramerCard";
import { Button } from "../ui/button";
import IconLogo from "@/icons";
import { Other, SocialMedia } from "@/types/enums";

const ProfileCard = ({ className }: { className?: string }) => {
  return (
    <FramerCard className={className}>
      <div className="flex flex-col items-center justify-center w-full gap-4">
        <div>
          <h1 className="mb-3 text-3xl font-semibold text-center sm:text-4xl ">
            Hey, I&apos;m Railly Hugo👋
          </h1>
          <p className="flex items-center justify-center gap-2">
            <span className="text-xl font-bold text-center sm:text-2xl">
              <span className="animated-blue-gradient">Software Engineer</span>
              <span className="text-gray-400">{" & "}</span>
              <span className="inline-flex gap-2 animated-yellow-gradient">
                <span>UI Developer</span>
                <img
                  className="rounded-lg no-drag"
                  src="/images/pci-logo.png"
                  alt="PCI Energy Solutions Logo"
                  width={30}
                  height={30}
                />
              </span>
            </span>
          </p>
        </div>
        <p className="text-base text-center">
          <span>Building products that truly matter to people since 2021.</span>
          <br />
          <span>
            I strive to build a better future for everyone through technology.
          </span>
          <br />
          <span>Currently located in Lima, Perú 🇵🇪</span>
        </p>
        <div className="flex justify-center gap-2 mt-2 mb-2">
          <IconLogo
            href="https://github.com/Railly"
            name={SocialMedia.Github}
          />
          <IconLogo
            href="https://www.linkedin.com/in/railly-hugo/"
            name={SocialMedia.LinkedIn}
          />
          <IconLogo
            href="https://twitter.com/raillyhugo"
            name={SocialMedia.Twitter}
          />
        </div>
      </div>
    </FramerCard>
  );
};

export default ProfileCard;
