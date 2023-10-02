"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Spotlight from "@/components/misc/spotlight";
import { IColor } from "@/types/interfaces";

interface IFramerCardProps {
  color?: keyof IColor;
  className?: string;
}

const FramerCard = ({
  className,
  children,
  color = "default",
}: React.PropsWithChildren<IFramerCardProps>) => {
  return (
    <Spotlight color={color}>
      <motion.div
        className={cn(
          "flex flex-col-reverse items-center p-4 border rounded-lg sm:flex-row",
          className
        )}
      >
        {children}
      </motion.div>
    </Spotlight>
  );
};

export default FramerCard;
