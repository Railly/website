"use client";
import { useTheme } from "@wits/next-themes";
import { useEffect, useState } from "react";
import Link from "./Link";
import { motion } from "framer-motion";
import Dropdown from "./Dropdown";
import { usePathname } from "next/navigation";
import { links } from "@/utils/data";
import IconLogo from "@/icons";
import { Other, Scheme } from "@/types/enums";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  console.log({
    theme,
  });
  const pathname = usePathname();

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  useEffect(() => setMounted(true), []);

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

  const menuButtonVariants = {
    open: {
      rotate: 180,
    },
    closed: {
      rotate: 0,
    },
  };

  return (
    <>
      <motion.div
        className="fixed z-20 w-screen menu h-2/5 bg-hunter-black-100 dark:bg-hunter-black-500"
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        {/* <motion.button
          className="fixed menu-button left-6 top-6"
          onClick={handleCloseMenu}
          variants={menuButtonVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        > */}
        <IconLogo name={Other.CloseMenu} />
        {/* </motion.button> */}
        <ul className="flex sm:hidden flex-col items-center justify-between py-2 h-full [&>li]:w-full">
          <motion.li variants={menuVariants}>
            <Link
              to="/"
              active={pathname === "/"}
              onNavigate={handleCloseMenu}
              full
            >
              Home
            </Link>
          </motion.li>
          <motion.li variants={menuVariants}>
            <Link
              to="/about"
              active={pathname === "/about"}
              onNavigate={handleCloseMenu}
              full
            >
              About
            </Link>
          </motion.li>
          <motion.li variants={menuVariants}>
            <Link
              to="/portfolio"
              active={pathname === "/portfolio"}
              onNavigate={handleCloseMenu}
              full
            >
              Portfolio
            </Link>
          </motion.li>
          <motion.li variants={menuVariants}>
            <Link
              to="/blog"
              active={pathname === "/blog"}
              onNavigate={handleCloseMenu}
              full
            >
              Blog
            </Link>
          </motion.li>
          <motion.li variants={menuVariants}>
            <Link
              to="/stack"
              active={pathname === "/stack"}
              onNavigate={handleCloseMenu}
              full
            >
              Stack
            </Link>
          </motion.li>
        </ul>
      </motion.div>
      <header className="container flex items-center justify-between w-full pt-6 pb-3 mx-auto sm:py-6 md:py-10 px-7 md:pr-10 md:pl-7">
        {/* <motion.button
          className="flex menu-button md:hidden"
          onClick={handleOpenMenu}
          variants={menuButtonVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        > */}
        <IconLogo name={Other.OpenMenu} />
        {/* </motion.button> */}
        <ul className="justify-between hidden transition duration-100 rounded-lg ring-1 ring-black/20 dark:ring-white/20 hover:ring-2 hover:ring-hunter-blue-500 bg-white/10 dark:bg-hunter-black-900 backdrop-blur-sm md:flex">
          <div className="flex items-center [&>li]:h-full">
            <li>
              <Link start to="/" active={pathname === "/"}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" active={pathname === "/about"}>
                About
              </Link>
            </li>
            <li>
              <Link to="/portfolio" active={pathname === "/portfolio"}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/blog" active={pathname === "/blog"}>
                Blog
              </Link>
            </li>
            <li>
              <Link end to="/stack" active={pathname === "/stack"}>
                Stack
              </Link>
            </li>
          </div>
        </ul>
        <Dropdown options={links} />
        {mounted && (
          <>
            {theme === "light" ? (
              <IconLogo
                onClick={() => setTheme("dark")}
                name={Scheme.DarkMode}
              />
            ) : (
              <IconLogo
                onClick={() => setTheme("light")}
                name={Scheme.LightMode}
              />
            )}
          </>
        )}
      </header>
      <motion.div
        onClick={handleCloseMenu}
        className="fixed top-0 z-10 w-full h-full min-h-screen transition-all duration-500 bg-hunter-black-500/40 backdrop-blur-sm"
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
