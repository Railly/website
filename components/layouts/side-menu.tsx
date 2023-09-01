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

interface SideMenuProps extends React.PropsWithChildren {
  onClickMenu?: () => void;
}

export const SideMenu: React.FC<SideMenuProps> = ({ onClickMenu }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <LayoutGroup>
      <header
        className={cn(
          "w-full flex justify-center",
          "[--toolbarHeight:56px] [--floatingMargin:calc(var(--totalToolbarHeight)_-_var(--toolbarHeight))] [--baseActualHeight:calc(var(--toolbarHeight)+var(--floatingMargin))] md:max-w-prose fixed inset-x-0 top-4 z-40 flex items-center justify-between rounded-xl mx-auto"
        )}
      >
        <div className="bg-gray-100/70 dark:bg-background/90 backdrop-blur-sm w-full border border-border rounded-[16px]">
          <div
            aria-hidden="true"
            className="relative top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-muted-foreground to-transparent"
          />
          <div className="flex justify-between overflow-hidden p-2 relative z-2 w-full min-w-0 rounded-xl">
            <Icon
              className="flex menu-button md:hidden"
              onClick={onClickMenu}
              name={Other.OpenMenu}
            />
            <div className="flex text-muted-foreground">
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
          </div>
        </div>
      </header>
    </LayoutGroup>
  );
};
