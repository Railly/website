"use client";
import { useTheme } from "@wits/next-themes";
import { useEffect, useState } from "react";
import HeaderLink from "../components/links/header-link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Icon from "@/icons";
import { Other, Scheme } from "@/types/enums";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
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
          <motion.li variants={menuVariants}>
            <HeaderLink
              to="/"
              active={pathname === "/"}
              onNavigate={handleCloseMenu}
              full
            >
              Home
            </HeaderLink>
          </motion.li>
          <motion.li variants={menuVariants}>
            <HeaderLink
              to="/about"
              active={pathname === "/about"}
              onNavigate={handleCloseMenu}
              full
            >
              About
            </HeaderLink>
          </motion.li>
          <motion.li variants={menuVariants}>
            <HeaderLink
              to="/blog"
              active={pathname === "/blog"}
              onNavigate={handleCloseMenu}
              full
            >
              Blog
            </HeaderLink>
          </motion.li>
          <motion.li variants={menuVariants}>
            <HeaderLink
              to="/projects"
              active={pathname === "/projects"}
              onNavigate={handleCloseMenu}
              full
            >
              Projects
            </HeaderLink>
          </motion.li>
          <motion.li variants={menuVariants}>
            <HeaderLink
              to="/stack"
              active={pathname === "/stack"}
              onNavigate={handleCloseMenu}
              full
            >
              Stack
            </HeaderLink>
          </motion.li>
        </ul>
      </motion.div>
      <header className="[--toolbarHeight:56px] [--floatingMargin:calc(var(--totalToolbarHeight)_-_var(--toolbarHeight))] [--baseActualHeight:calc(var(--toolbarHeight)+var(--floatingMargin))] md:max-w-prose fixed inset-x-0 top-4 z-40 flex items-center justify-between px-4 py-2 rounded-xl bg-hunter-black-800/5 dark:bg-hunter-black-800/30 backdrop-blur-md shadow-toolbar mx-4 md:mx-auto shadow-white/5 border border-black/10 dark:border-white/10 hover:shadow-toolbar-hover hover:shadow-white/10 transition-shadow">
        <Icon
          className="flex menu-button md:hidden"
          onClick={handleOpenMenu}
          name={Other.OpenMenu}
        />
        <ul className="justify-between hidden transition duration-100 bg-white rounded-lg ring-1 ring-black/20 dark:ring-white/20 hover:ring-2 hover:ring-hunter-blue-500 dark:bg-hunter-black-900 backdrop-blur-sm md:flex">
          <div className="flex items-center [&>li]:h-full">
            <li>
              <HeaderLink start to="/" active={pathname === "/"}>
                Home
              </HeaderLink>
            </li>
            <li>
              <HeaderLink to="/about" active={pathname === "/about"}>
                About
              </HeaderLink>
            </li>
            <li>
              <HeaderLink to="/blog" active={pathname === "/blog"}>
                Blog
              </HeaderLink>
            </li>
            <li>
              <HeaderLink to="/projects" active={pathname === "/projects"}>
                Projects
              </HeaderLink>
            </li>
            <li>
              <HeaderLink end to="/stack" active={pathname === "/stack"}>
                Stack
              </HeaderLink>
            </li>
          </div>
        </ul>
        {/* <Dropdown options={links} /> */}
        {mounted && (
          <>
            {theme === "light" ? (
              <Icon onClick={() => setTheme("dark")} name={Scheme.DarkMode} />
            ) : (
              <Icon onClick={() => setTheme("light")} name={Scheme.LightMode} />
            )}
          </>
        )}
      </header>
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
