import { Icon } from "icons";
import { useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";
import Link from "./Link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isHidden, setIsHidden] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
    setIsHidden(true);
  };

  const handleOpenMenu = () => {
    setIsOpen(true);
    setIsHidden(false);
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <div
        className={`absolute z-20 w-screen h-1/5 bg-zinc-500/400 ${
          isOpen
            ? "translate-y-0 ease-out duration-500"
            : "-translate-y-full ease-in duration-500"
        }`}
      >
        <header className="relative w-screen h-full transition blur-none bg-zinc-50 dark:bg-zinc-800">
          <button className="absolute left-6 top-6" onClick={handleCloseMenu}>
            <Icon.CloseMenu />
          </button>
          <ul className="flex flex-col items-center justify-between h-full py-6 ">
            <li>
              <Link to="/" onNavigate={handleCloseMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onNavigate={handleCloseMenu}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/blog" onNavigate={handleCloseMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" onNavigate={handleCloseMenu}>
                About
              </Link>
            </li>
          </ul>
        </header>
      </div>
      <header className="container flex justify-between max-w-2xl p-10 mx-auto">
        <ul className="flex justify-between invisible md:visible">
          <div className="flex items-center">
            <button className="visible md:hidden" onClick={handleOpenMenu}>
              <Icon.OpenMenu />
            </button>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </div>
        </ul>
        <div className="flex items-center visible">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Icon.DarkMode /> : <Icon.LightMode />}
          </button>
        </div>
      </header>
      <div
        onClick={handleCloseMenu}
        className={`absolute top-0 z-10 h-full w-screen transition-all duration-500 bg-zinc-500/40 backdrop-blur-sm ${
          isOpen ? "opacity-100" : "opacity-0"
        } ${isHidden ? "invisible" : "visible"}`}
      ></div>
    </>
  );
};

export default Header;
