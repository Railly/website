"use client";
import Icon from "@/components/icons";
import { Other, Scheme } from "@/types/enums";
import { MENU_ITEMS } from "@/utils/data";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import HeaderLink from "../components/links/header-link";
import { SideMenu } from "@/components/layouts/side-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const menuVariants = {
    open: {
      y: 0,
      transition: {
        staggerChildren: 0.02,
        staggerDirection: 1,
      },
    },
    closed: {
      y: "-100%",
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 z-50 w-screen menu h-2/5 bg-hunter-black-100 dark:bg-hunter-black-800"
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <Icon
          className="fixed menu-button left-6 top-6"
          onClick={handleCloseMenu}
          name={Other.CloseMenu}
        />
        <ul className="flex sm:hidden flex-col items-center justify-between py-2 h-full [&>li]:w-full">
          {MENU_ITEMS.map((item) => (
            <motion.li key={item.path} variants={menuVariants}>
              <HeaderLink
                to={item.path}
                active={pathname === item.path}
                onNavigate={handleCloseMenu}
                full
              >
                {item.name}
              </HeaderLink>
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <SideMenu onClickMenu={handleOpenMenu} />
      <motion.div
        onClick={handleCloseMenu}
        className="fixed top-0 z-30 w-screen h-full min-h-screen transition-all duration-500 bg-hunter-black-800/40 backdrop-blur-sm"
        initial={{ display: "none", opacity: 0 }}
        animate={
          isOpen
            ? { display: "block", opacity: 1 }
            : { display: "none", opacity: 0 }
        }
        exit={{ display: "none", opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
    </>
  );
};

export default Header;
