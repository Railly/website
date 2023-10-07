"use client";
import { MENU_ITEMS } from "@/utils/data";
import { LayoutGroup } from "framer-motion";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useTheme } from "@wits/next-themes";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MenuIcon, MoonIcon, SunIcon } from "lucide-react";
import { GlowButton } from "@/components/buttons/glow-button";
import HeaderLink from "@/components/links/header-link";
import RHLogo from "@/components/icons/RHLogo";

const Header = () => {
  const segment = useSelectedLayoutSegment();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  return (
    <>
      <LayoutGroup>
        <header
          className={cn(
            "flex mx-4",
            "[--toolbarHeight:56px] [--floatingMargin:calc(var(--totalToolbarHeight)_-_var(--toolbarHeight))] [--baseActualHeight:calc(var(--toolbarHeight)+var(--floatingMargin))] md:max-w-prose fixed inset-x-0 top-4 z-40 flex items-center justify-between rounded-xl mx-auto",
            "w-[calc(100%-2rem)]"
          )}
        >
          <div className="bg-gray-100/70 dark:bg-background/90 backdrop-blur-sm w-full border border-border rounded-[16px]">
            <div
              aria-hidden="true"
              className="relative top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-muted-foreground to-transparent"
            />
            <div className="flex justify-between items-center overflow-hidden p-2 relative z-2 w-full min-w-0 rounded-xl">
              <div className="hidden sm:flex text-muted-foreground">
                {MENU_ITEMS.map((item, index) => (
                  <GlowButton
                    index={index}
                    onClick={() => router.push(item.path)}
                    isActive={segment === item.segment}
                    key={index}
                  >
                    {item.name}
                  </GlowButton>
                ))}
              </div>
              <RHLogo
                className="flex sm:hidden cursor-pointer"
                onClick={
                  () => router.push("/")
                }
                size={36}
              />
              {isMounted && (
                <>
                  {theme === "light" ? (
                    <MoonIcon
                      className={cn("bg-hunter-black-50 gap-2 hover:bg-hunter-black-100  dark:bg-background dark:hover:bg-[#202121] relative z-10 cursor-pointer rounded-lg w-10 h-10 flex shadow-lg p-[6px] duration-150 ease-out transition-all justify-center items-center border-[hsl(0_0%_20.5%)] border select-none stroke-current")}
                      onClick={() => setTheme("dark")}
                    />
                  ) : (
                    <SunIcon
                      className={cn("bg-hunter-black-50 gap-2 hover:bg-hunter-black-100  dark:bg-background dark:hover:bg-[#202121] relative z-10 cursor-pointer rounded-lg w-10 h-10 flex shadow-lg p-[6px] duration-150 ease-out transition-all justify-center items-center border-[hsl(0_0%_20.5%)] border select-noe stroke-current")}
                      onClick={() => setTheme("light")}
                    />
                  )}
                </>
              )}


              <Dialog>
                <DialogTrigger
                  className={cn("sm:hidden bg-hunter-black-50 gap-2 hover:bg-hunter-black-100  dark:bg-background dark:hover:bg-[#202121] relative z-10 cursor-pointer rounded-lg w-10 h-10 flex shadow-lg p-[6px] duration-150 ease-out transition-all justify-center items-center border-border border select-none")}
                  asChild
                >
                  <MenuIcon />
                </DialogTrigger>
                <DialogContent
                  className="flex items-center bg-transparent border-none shadow-none"
                >
                  <div className="flex flex-col w-full bg-background/90 backdrop-blur-md border border-border shadow-md shadow-foreground/5 rounded-xl mx-6 p-4">
                    {MENU_ITEMS.map((item, index) => (
                      <HeaderLink
                        key={index}
                        to={item.path}
                        active={segment === item.segment}
                        full
                        className="h-14"
                      >
                        {item.name}
                      </HeaderLink>
                    ))}
                    <DialogClose>
                    </DialogClose>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </header>
      </LayoutGroup>
    </>
  );
};


export default Header;
