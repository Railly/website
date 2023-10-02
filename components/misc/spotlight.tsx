"use client";
import { AnimatePresence } from "framer-motion";
import useMousePosition from "hooks/use-mouse-position";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@wits/next-themes";
import { IColor } from "@/types/interfaces";

const colorClassNames: IColor = {
  default: "bg-foreground/5 border-black/20 dark:border-white/20",
  blue: "bg-hunter-blue-100/30 border-hunter-blue-700 dark:border-hunter-blue-500/40 dark:bg-hunter-blue-900/30",
  rose: "bg-rose-100/30 border-hunter-rose-700 dark:border-hunter-rose-500/40 dark:bga-hunter-rose-900/30",
  teal: "bg-hunter-green-100/30 border-hunter-green-500/40 dark:bg-hunter-green-900/30",
  yellow:
    "bg-hunter-yellow-100/30 border-hunter-yellow-600 dark:border-hunter-yellow-500/40 dark:bg-hunter-yellow-900/30",
};

const Spotlight = ({
  children,
  className,
  color = "default",
}: React.PropsWithChildren<{
  className?: string;
  color?: keyof IColor;
}>) => {
  const { theme } = useTheme();
  const mousePosition = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const spotlightColor =
    theme === "dark" ? "hsla(220,50%,80%,0.35)" : "hsla(0,0%,100%,0.35)";

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-0 overflow-hidden bg-fixed"
          />
        )}
      </AnimatePresence>
      <div
        className={cn(
          "relative z-10 rounded-lg",
          colorClassNames[color],
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Spotlight;
