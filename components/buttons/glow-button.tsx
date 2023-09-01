import { motion } from "framer-motion";
import { MENU_ITEMS } from "@/utils/data";
import { useTheme } from "@wits/next-themes";

const SPEED = 0.8;

interface GlowButtonProps {
  onClick?: () => void;
  index: number;
  isActive: boolean;
  children: React.ReactNode;
}

export const GlowButton: React.FC<GlowButtonProps> = ({
  index,
  onClick,
  isActive,
  children,
}) => {
  const { theme, setTheme } = useTheme();
  const borderRadiusAnimation = {
    borderBottomLeftRadius: index === MENU_ITEMS.length - 1 ? 0 : 16,
    borderBottomRightRadius: index === 0 ? 0 : 16,
    borderTopRightRadius: index === 0 ? 0 : 16,
    borderTopLeftRadius: index === MENU_ITEMS.length - 1 ? 0 : 16,
  };

  return (
    <motion.button
      style={{
        transition: "color 150ms ease 0s, text-shadow 250ms ease 0s",
        ...borderRadiusAnimation,
      }}
      animate={{
        textShadow: isActive
          ? theme === "dark"
            ? "rgba(255, 255, 255, 0.57) 1px 1px 12px"
            : "none"
          : "none",
        color: isActive ? "hsl(var(--foreground))" : "inherit",
        backgroundColor: isActive
          ? theme === "light"
            ? "hsl(var(--background))"
            : "transparent"
          : "transparent",
      }}
      transition={{
        delay: 0.02,
      }}
      className="rounded-xl z-50 relative flex items-center justify-center text-center outline-none cursor-pointer px-3 py-2 hover:!text-foreground"
      onClick={onClick}
    >
      {children}
      {isActive && (
        <>
          <motion.div
            layoutId="glow"
            initial={false}
            className="absolute z-20 w-full h-5 pointer-events-none rounded-xl bg-black dark:bg-white blur-[7px]"
            style={{
              scale: 2,
              rotate: 1e-5,
              opacity: theme === "dark" ? 0.11 : 0.09,
            }}
            transition={{
              delay: 0.03,
              type: "spring",
              stiffness: 120 / SPEED,
              damping: 20,
              mass: 1,
            }}
          />
          <motion.div
            layoutId="button"
            initial={false}
            animate={borderRadiusAnimation}
            style={{
              transition: "backdrop-filter 500ms ease 0s",
            }}
            className="absolute pointer-events-none inset-0 z-10 w-full h-full border border-border/80  dark:bg-foreground/5"
            transition={{
              type: "spring",
              stiffness: 120 / SPEED,
              damping: 20,
              mass: 1,
            }}
          />
        </>
      )}
    </motion.button>
  );
};
