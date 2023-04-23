"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Spotlight from "@/components/Spotlight";

const colorClassNames = {
  default:
    "bg-hunter-black-100/30 border-hunter-black-700 dark:bg-hunter-black-900/30",
  blue: "bg-hunter-blue-100/30 border-hunter-blue-700 dark:border-hunter-blue-500/40 dark:bg-hunter-blue-900/20",
  rose: "bg-rose-100/30 border-hunter-rose-700 dark:border-hunter-rose-500/40 dark:bga-hunter-rose-900/20",
  teal: "bg-hunter-green-100/30 border-hunter-green-500/40 dark:bg-hunter-green-900/20",
  yellow:
    "bg-hunter-yellow-100/30 border-hunter-yellow-600 dark:border-hunter-yellow-500/40 dark:bg-hunter-yellow-500/10",
};

interface IFramerCardProps {
  color?: keyof typeof colorClassNames;
  className?: string;
}

const FramerCard = ({
  className,
  children,
  color = "default",
}: React.PropsWithChildren<IFramerCardProps>) => {
  return (
    <Spotlight>
      <motion.div
        className={cn(
          "flex flex-col-reverse items-center p-4 border rounded-lg sm:flex-row h-full",
          colorClassNames[color],
          className
        )}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.div>
    </Spotlight>
  );
};

export default FramerCard;
