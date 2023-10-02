"use client";
import Icon from "@/components/icons";
import { Other, Scheme } from "@/types/enums";
import { MENU_ITEMS } from "@/utils/data";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import HeaderLink from "../components/links/header-link";
import { TopBar } from "@/components/layouts/top-bar";
import { Drawer } from "vaul";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  // const menuVariants = {
  //   open: { opacity: 1,  },
  //   closed: { opacity: 0,  },
  // };
  const menuVariants = {
    open: {
      height: "100vh",
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        staggerDirection: 1,
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };


  return (
    <>
      <TopBar onClickMenu={handleOpenMenu} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed flex items-center inset-x-0 top-0 bg-background/10 dark:bg-background/60 backdrop-blur-md z-50 overflow-y-auto"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            onClick={handleCloseMenu}
          >
            <div className="flex flex-col w-full bg-background/90 backdrop-blur-md border border-border shadow-md shadow-foreground/5 rounded-xl mx-6 p-2">
              {MENU_ITEMS.map((item, index) => (
                <HeaderLink
                  key={index}
                  to={item.path}
                  active={pathname === item.path}
                  onNavigate={handleCloseMenu}
                  full
                  className="h-14"
                >
                  {item.name}
                </HeaderLink>
              ))}
            </div>
            <Icon
              className="fixed menu-button left-6 top-6"
              onClick={handleCloseMenu}
              name={Other.CloseMenu}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
