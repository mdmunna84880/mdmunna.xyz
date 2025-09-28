import { useState, useEffect, useRef } from "react";
import Professional from "./assets/Professional.jpg";

const navLinks = [
  { href: "#home", text: "Home" },
  { href: "#projects", text: "Projects" },
  { href: "#skills", text: "Skills" },
  { href: "#about", text: "About" },
  { href: "#contact", text: "Contact" },
  { href: "https://drive.google.com/file/d/1fX2aug3wcE0ylpVtwFww60vV0uyhjRP4/view?usp=drive_link", text: "Resume" }
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // --- HOOK 1: Handles ACTIVE LINK highlighting on scroll ---
  useEffect(() => {
    const handleActiveLink = () => {
      const internalLinks = navLinks.filter(link => link.href.startsWith('#'));
      const sections = internalLinks.map((link) => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
          return;
        }
      }
    };

    window.addEventListener("scroll", handleActiveLink);
    handleActiveLink(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleActiveLink);
    };
  }, []); // Runs only once on mount

  // --- HOOK 2: Handles CLOSING the menu on scroll ---
  useEffect(() => {
    const handleCloseOnScroll = () => {
      setIsMenuOpen(false);
    };
    
    if (isMenuOpen) {
      window.addEventListener("scroll", handleCloseOnScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleCloseOnScroll);
    };
  }, [isMenuOpen]); // Runs only when isMenuOpen changes

  // --- HOOK 3: Handles CLOSING the menu on click outside ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]); // Runs only when isMenuOpen changes


  const renderLinks = () =>
    navLinks.map((link) => {
      const isInternal = link.href.startsWith('#');
      return (
        <li key={link.text}>
          <a
            href={link.href}
            target={isInternal ? "_self" : "_blank"}
            rel={isInternal ? "" : "noopener noreferrer"}
            onClick={() => setIsMenuOpen(false)}
            className={`px-3 py-2 rounded-md text-lg md:text-base transition-colors duration-300 ${
              isInternal && activeSection === link.href.substring(1)
                ? "text-cyan-500 font-bold"
                : "text-indigo-900 hover:text-cyan-500"
            }`}
          >
            {link.text}
          </a>
        </li>
      );
    });

  return (
    <header className="h-24 w-full bg-gray-50/80 backdrop-blur-md text-indigo-900 sticky top-0 z-50">
      <nav className="w-full h-full flex justify-between items-center max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex gap-3 items-center">
          <a href="#home" onClick={() => setActiveSection('home')}>
            <img
              src={Professional}
              alt="Professional headshot of Md Munna"
              className="h-14 w-14 rounded-full object-cover border-2 border-transparent hover:border-cyan-400 transition-all duration-300"
            />
          </a>
          <a href="#home" onClick={() => setActiveSection('home')} className="font-bold text-lg hover:text-cyan-500 transition-colors">
            Md Munna
          </a>
        </div>

        <button
          ref={buttonRef}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={toggleMenu} // This will work correctly now
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <div className="space-y-1.5">
             <span className={`block w-8 h-1 rounded-sm bg-cyan-500 transition-transform duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
             <span className={`block w-8 h-1 rounded-sm bg-cyan-500 transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
             <span className={`block w-8 h-1 rounded-sm bg-cyan-500 transition-transform duration-300 ease-in-out ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></span>
          </div>
        </button>

        <ul className="hidden md:flex md:items-center md:gap-2 lg:gap-4 font-medium">
          {renderLinks()}
        </ul>
        
        <div
          ref={menuRef}
          id="mobile-menu"
          className={`absolute top-24 right-0 w-64 h-[calc(100vh-6rem)] bg-gray-50 shadow-lg md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <ul className="flex flex-col items-start gap-6 p-8 font-medium">
            {renderLinks()}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;