import React, { useState } from "react";
import Logo from '/images/Logo.png';
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm h-[60px] border-b border-gray-100 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
      {/* Removed px-4 sm:px-6 lg:px-8 from here */}
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Krishna Gupta's Portfolio Logo"
            width={28}
            height={28}
            className="h-7 w-auto object-contain transition-transform duration-300 hover:scale-110"
          />
          <span className="text-xl font-semibold font-[cursive] whitespace-nowrap text-gray-900 transition-colors duration-300 hover:text-[#ff6f00]">
            Krishna Gupta
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden min-[860px]:flex items-center space-x-4 text-base text-gray-700 font-medium" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative px-3 py-1.5 rounded-md group transition-all duration-300"
              onClick={closeMenu}
              aria-label={`Navigate to ${item.label} section`}
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-0 bg-gray-100 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#ff6f00] transform -translate-x-1/2 group-hover:w-4/5 transition-all duration-300 ease-out"></span>
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden min-[860px]:block">
          <a
            href="#contact"
            className="relative bg-[#ff6f00] text-white text-sm px-4 py-2 rounded-md overflow-hidden group transition-all duration-300 hover:shadow-lg"
            aria-label="Contact Krishna Gupta"
          >
            <span className="relative z-10">Contact Me</span>
            <span className="absolute inset-0 bg-[#e65c00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="min-[860px]:hidden text-gray-700 p-1.5 rounded-md transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
          aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={menuOpen}
        >
          <svg
            className="w-6 h-6 transition-transform duration-300"
            style={{ transform: menuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`min-[860px]:hidden w-full bg-white/95 backdrop-blur-sm border-t border-gray-100 overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col px-6 py-4 space-y-2 text-sm font-medium text-gray-700" aria-label="Mobile Navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="px-3 py-2 rounded-md transition-all duration-300 hover:bg-gray-50 hover:text-[#ff6f00] focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-75"
              aria-label={`Navigate to ${item.label} section`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 bg-[#ff6f00] text-white px-4 py-2.5 rounded-md text-center transition-all duration-300 hover:bg-[#e65c00] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#ff6f00] focus:ring-opacity-75"
            aria-label="Contact Krishna Gupta"
            onClick={closeMenu}
          >
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
