"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Spotlight from "@/components/Spotlight";

const colorClassNames = {
  default:
    "bg-hunter-black-100/80 border-hunter-black-700 dark:bg-hunter-black-900/30",
  blue: "bg-hunter-blue-100/80 border-hunter-blue-700 dark:bg-hunter-blue-900/30",
  rose: "bg-rose-100/80 border-rose-900 dark:bg-rose-900/30",
  teal: "bg-hunter-green-100/80 border-hunter-green-700 dark:bg-hunter-green-900/30",
  yellow:
    "bg-hunter-yellow-100/80 border-hunter-yellow-700 dark:bg-hunter-yellow-900/30",
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
