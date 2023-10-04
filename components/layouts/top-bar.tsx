"use client";
import { MENU_ITEMS } from "@/utils/data";
import { LayoutGroup } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { GlowButton } from "../buttons/glow-button";
import { cn } from "@/lib/utils";
import Icon from "../icons";
import { Other, Scheme } from "@/types/enums";
import { useState, useEffect } from "react";
import { useTheme } from "@wits/next-themes";

interface TopBarProps extends React.PropsWithChildren {
  triggerComponent?: React.ReactNode;
}

export const TopBar: React.FC<TopBarProps> = ({ triggerComponent }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
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
            {mounted && (
              <>
                {theme === "light" ? (
                  <Icon
                    onClick={() => setTheme("dark")}
                    name={Scheme.DarkMode}
                  />
                ) : (
                  <Icon
                    onClick={() => setTheme("light")}
                    name={Scheme.LightMode}
                  />
                )}
              </>
            )}
            {triggerComponent}
          </div>
        </div>
      </header>
    </LayoutGroup>
  );
};
