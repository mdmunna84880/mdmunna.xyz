"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Professional from "../../assets/Professional.jpg";
import { navLinks } from "../../utils/navigation";
import { siteMetadata } from "../../data/metadata";
import { cn } from "../../utils/cn";

/**
 * Shared Layout: Navbar Component
 * Handles responsive navigation, scroll-based active link highlighting, and mobile menu state.
 */
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handles highlighting the active section in the navbar based on scroll position
  useEffect(() => {
    const handleActiveLink = () => {
      const internalLinks = navLinks.filter(link => link.href.startsWith('#'));
      const sections = internalLinks.map((link) => document.querySelector(link.href) as HTMLElement | null);
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
    handleActiveLink();

    return () => {
      window.removeEventListener("scroll", handleActiveLink);
    };
  }, []);

  // Closes the mobile menu when the user scrolls
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
  }, [isMenuOpen]);

  // Closes the mobile menu when clicking outside of the menu container
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
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
  }, [isMenuOpen]);

  const renderLinks = () =>
    navLinks.map((link) => {
      const isInternal = link.href.startsWith('#');
      const href = isInternal && pathname !== "/" ? `/${link.href}` : link.href;
      
      return (
        <li key={link.text}>
          <Link
            href={href}
            target={isInternal ? "_self" : "_blank"}
            rel={isInternal ? "" : "noopener noreferrer"}
            onClick={() => setIsMenuOpen(false)}
            className={cn(
              "px-3 py-2 rounded-md text-lg md:text-base transition-colors duration-300",
              isInternal && activeSection === link.href.substring(1) && pathname === "/"
                ? "text-cyan-500 font-bold"
                : "text-indigo-900 hover:text-cyan-500"
            )}
          >
            {link.text}
          </Link>
        </li>
      );
    });

  return (
    <header className="h-24 w-full bg-gray-50/80 backdrop-blur-md text-indigo-900 sticky top-0 z-50">
      <nav className="w-full h-full flex justify-between items-center max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex gap-3 items-center">
          <Link href={pathname !== "/" ? "/#home" : "#home"} onClick={() => {
            setActiveSection('home');
            setIsMenuOpen(false);
          }}>
            <Image
              src={Professional}
              alt={`Professional headshot of ${siteMetadata.name}`}
              className="h-14 w-14 rounded-full object-cover border-2 border-transparent hover:border-cyan-400 transition-all duration-300"
            />
          </Link>
          <Link href={pathname !== "/" ? "/#home" : "#home"} onClick={() => {
            setActiveSection('home');
            setIsMenuOpen(false);
          }} className="font-bold text-lg hover:text-cyan-500 transition-colors">
            {siteMetadata.name}
          </Link>
        </div>

        <button
          ref={buttonRef}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={toggleMenu}
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


