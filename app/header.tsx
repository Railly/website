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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


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
    <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <TopBar
        triggerComponent={
          <DialogTrigger>
            <Icon
              className="flex menu-button md:hidden"
              name={Other.OpenMenu}
            />
          </DialogTrigger>
        }
      />
      <DialogContent
        className="flex items-center bg-transparent border-none shadow-none"
        onClick={handleCloseMenu}
      >
        <div className="flex flex-col w-full bg-background/90 backdrop-blur-md border border-border shadow-md shadow-foreground/5 rounded-xl mx-6 p-4">
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
      </DialogContent>
    </Dialog>
  );
};

{/* <AnimatePresence>
        {isOpen && (
        )}
      </AnimatePresence> */}

export default Header;
