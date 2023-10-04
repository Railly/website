"use client";
import { MENU_ITEMS } from "@/utils/data";
import { LayoutGroup } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { GlowButton } from "../buttons/glow-button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useTheme } from "@wits/next-themes";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Other } from "@/types/enums";
import HeaderLink from "../links/header-link";
import Icon from "@/components/icons";
import { MenuIcon, MoonIcon, SunIcon } from "lucide-react";
import { buttonVariants } from "../ui/button";

interface TopBarProps extends React.PropsWithChildren {
}

export const TopBar: React.FC<TopBarProps> = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
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
            <div className="flex justify-between overflow-hidden p-2 relative z-2 w-full min-w-0 rounded-xl">
              <div className="hidden sm:flex text-muted-foreground">
                {MENU_ITEMS.map((item, index) => (
                  <GlowButton
                    index={index}
                    onClick={() => router.push(item.path)}
                    isActive={pathname === item.path}
                    key={index}
                  >
                    {item.name}
                  </GlowButton>
                ))}
              </div>
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
              <DialogTrigger
                className={cn("sm:hidden bg-hunter-black-50 gap-2 hover:bg-hunter-black-100  dark:bg-background dark:hover:bg-[#202121] relative z-10 cursor-pointer rounded-lg w-10 h-10 flex shadow-lg p-[6px] duration-150 ease-out transition-all justify-center items-center border-[hsl(0_0%_20.5%)] border select-none")}
              >
                <MenuIcon />
              </DialogTrigger>
              <DialogContent
                className="flex items-center bg-transparent border-none shadow-none"
                onClick={handleCloseMenu}
              >
                <div className="flex flex-col w-full bg-background/90 backdrop-blur-md border border-border shadow-md shadow-foreground/5 rounded-xl mx-6 p-4">
                  {MENU_ITEMS.map((item, index) => (
                    <HeaderLink
                      key={index}
                      to={item.path}
                      active={pathname === item.path}
                      onNavigate={handleCloseMenu}
                      full
                      className="h-14"
                    >
                      {item.name}
                    </HeaderLink>
                  ))}
                </div>
              </DialogContent>
            </div>
          </div>
        </header>
      </LayoutGroup>
    </Dialog>
  );
};
