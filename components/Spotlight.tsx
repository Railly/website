"use client";
import { AnimatePresence } from "framer-motion";
import useMousePosition from "hooks/use-mouse-position";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Spotlight = ({
  children,
  className,
}: React.PropsWithChildren<{
  className?: string;
}>) => {
  const mousePosition = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-full"
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layoutId="spotlight"
            className="absolute inset-0 z-0 overflow-hidden bg-fixed"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, hsla(220,50%,80%,0.15) 0%,transparent 10%,transparent) fixed`,
            }}
          />
        )}
      </AnimatePresence>
      <div className={cn("relative z-10 h-full", className)}>{children}</div>
    </div>
  );
};

export default Spotlight;
