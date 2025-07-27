import React, { useState } from "react";
import Logo from '/images/Logo.png'; // Correct path for public folder assets in Vite
import { FaXTwitter } from "react-icons/fa6"; // Import FaXTwitter for consistency

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[64px] flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Krishna Gupta's Portfolio Logo" // More descriptive alt text for SEO & A11y
            width="32" // Explicit width for CLS prevention
            height="32" // Explicit height for CLS prevention
            className="h-8 w-auto object-contain" // object-contain to ensure logo fits
          />
          <span className="text-xl font-semibold font-[cursive] whitespace-nowrap text-gray-900"> {/* Ensure text color for contrast */}
            Krishna Gupta
          </span>
        </div>

        {/* Desktop Navigation */}
        {/* Changed 'md:flex' to 'min-[860px]:flex' as per your original code */}
        <nav className="hidden min-[860px]:flex items-center space-x-6 text-base text-gray-700 font-medium" aria-label="Main Navigation"> {/* Added aria-label */}
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-[#ff6f00] transition-colors duration-200 px-2 py-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-75" // Enhanced transitions, focus states
              onClick={closeMenu}
              aria-label={`Navigate to ${item.label} section`} // Accessibility: describes link purpose
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        {/* Changed 'md:block' to 'min-[860px]:block' as per your original code */}
        <div className="hidden min-[860px]:block">
          <a
            href="#contact"
            className="bg-[#ff6f00] text-white text-sm px-4 py-2 rounded hover:bg-[#e65c00] transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-[#ff6f00] focus:ring-opacity-75" // Enhanced transitions, focus states
            aria-label="Contact Krishna Gupta" // Accessibility: describes button purpose
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        {/* Changed 'md:hidden' to 'min-[860px]:hidden' as per your original code */}
        <button
          onClick={toggleMenu}
          className="min-[860px]:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 rounded-md p-1" // Added focus states
          aria-label={menuOpen ? "Close Menu" : "Open Menu"} // Dynamic aria-label
          aria-expanded={menuOpen} // ARIA attribute for current state
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {/* Changed 'md:hidden' to 'min-[860px]:hidden' as per your original code */}
      {/* Added Tailwind transition for a smoother slide-down/up effect */}
      {menuOpen && (
        <div className="min-[860px]:hidden w-full bg-white border-t shadow-sm transition-all duration-300 ease-in-out transform origin-top animate-slideDown"> {/* Removed animate__animated */}
          <nav className="flex flex-col px-6 py-4 space-y-3 text-sm font-medium text-gray-700" aria-label="Mobile Navigation"> {/* Added aria-label */}
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="hover:text-[#ff6f00] transition-colors duration-200 px-2 py-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-75" // Enhanced transitions, focus states
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[#ff6f00] text-white px-4 py-2 rounded text-center hover:bg-[#e65c00] transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-[#ff6f00] focus:ring-opacity-75" // Enhanced transitions, focus states
              aria-label="Contact Krishna Gupta"
              onClick={closeMenu} // Ensure menu closes on click
            >
              Contact Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
