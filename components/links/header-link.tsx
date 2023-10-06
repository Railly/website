import { ReactNode } from "react";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@wits/next-themes";
import { DialogClose } from "../ui/dialog";

type Props = {
  to: string;
  active?: boolean;
  onNavigate?: () => void;
  children: ReactNode;
  start?: boolean;
  end?: boolean;
  full?: boolean;
  className?: string; // Additional className prop
};

const HeaderLink = ({
  to,
  active,
  onNavigate = () => { },
  start,
  end,
  full,
  className,
  children,
}: Props) => {
  const computedClassName = cn(
    "flex justify-center items-center text-normal",
    "p-2 rounded-xl",
    className,
    {
      "rounded-tl-lg rounded-bl-lg": start,
      "rounded-tr-lg rounded-br-lg": end,
      "w-full py-3": full,
      "w-24": !full,
    }
  );

  const { theme } = useTheme(); // Make sure to import useTheme


  return (
    <DialogClose asChild>
      <NextLink href={to} passHref>
        <motion.a
          onClick={onNavigate}
          className={computedClassName}
          initial={{ color: "inherit" }}
          animate={{
            textShadow: active
              ? theme === "dark"
                ? "rgba(255, 255, 255, 0.63) 1px 1px 25px"
                : "rgba(0, 0, 0, 0.5) 1px 1px 25px"
              : "none",
            color: active ? "hsl(var(--foreground))" : "inherit",
            backgroundColor: active
              ? theme === "light"
                ? "hsl(var(--background))"
                : "rgba(255, 255, 255, 0.05)"
              : "transparent",
            fontWeight: active ? 600 : 400,
            border: active ? "1px solid hsl(var(--border))" : "none",
          }}
          transition={{
            delay: 0.02,
          }}
        >
          {children}
        </motion.a>
      </NextLink>
    </DialogClose>
  );
};

export default HeaderLink;
