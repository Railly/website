"use client"
import { motion, Variants } from "framer-motion";

interface FadeInProps {
  delay?: number;
  children: React.ReactNode;
}

const fadeInVariants: Variants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const FadeIn: React.FC<FadeInProps> = ({ delay = 0, children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={fadeInVariants}
      transition={{
        duration: 0.3,
        delay: delay / 500,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
