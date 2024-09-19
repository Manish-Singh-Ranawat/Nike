import { headerLogo } from "../assets/images";
import { hamburger, xNavIcon } from "../assets/icons";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="padding-x py-8 absolute z-20 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        <ul
          className={`flex-1 flex justify-center items-center gap-16
            ${isMenuOpen ? "menu-open" : "max-lg:hidden"}`}
        >
          {navLinks.map((links) => (
            <li key={links.label} onClick={toggleMenu}>
              <a
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red"
                href={links.href}
              >
                {links.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block z-40 relative">
          <img
            className="cursor-pointer"
            src={isMenuOpen ? xNavIcon : hamburger}
            alt={isMenuOpen ? "close menu" : "open menu"}
            width={25}
            height={25}
            onClick={toggleMenu}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
