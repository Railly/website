import { Icon } from "icons";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "./Link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const { pathname } = useRouter();

  const handleCloseMenu = () => {
    setIsOpen(false);
    setIsHidden(true);
  };

  const handleOpenMenu = () => {
    setIsOpen(true);
    setIsHidden(false);
  };

  return (
    <>
      {/* <div */}
      {/* <header className="relative w-screen h-full transition blur-none bg-[#191d21]">
          <button className="absolute left-6 top-6" onClick={handleCloseMenu}>
            <Icon.CloseMenu />
          </button>
          <ul className="flex flex-col items-center justify-between h-full pt-6 [&>li]:w-full">
            <li>
              <Link
                to="/"
                active={pathname === "/"}
                onNavigate={handleCloseMenu}
                full
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                active={pathname === "/about"}
                onNavigate={handleCloseMenu}
                full
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                active={pathname === "/portfolio"}
                onNavigate={handleCloseMenu}
                full
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                active={pathname === "/blog"}
                onNavigate={handleCloseMenu}
                full
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/stack"
                active={pathname === "/stack"}
                onNavigate={handleCloseMenu}
                full
              >
                Stack
              </Link>
            </li>
          </ul>
        </header> */}
      {/* </div> */}
      <header className="container flex justify-center max-w-3xl pt-6 pb-3 mx-auto sm:py-6 md:py-10 px-7 md:pr-10 md:pl-7">
        <button className="flex md:hidden" onClick={handleOpenMenu}>
          <Icon.OpenMenu />
        </button>
        <ul className="justify-between hidden transition duration-100 rounded-lg ring-1 ring-white/10 hover:ring-2 hover:ring-hunter-blue-500 bg-white/10 bg-hunter-black-900 backdrop-blur-sm md:flex">
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
      </header>
      {/* <div
        onClick={handleCloseMenu}
        className={`absolute top-0 z-10 h-full w-full transition-all duration-500 bg-hunter-black-500/40 backdrop-blur-sm ${
          isOpen ? "opacity-100" : "opacity-0"
        } ${isHidden ? "invisible" : "visible"}`}
      ></div> */}
    </>
  );
};

export default Header;
