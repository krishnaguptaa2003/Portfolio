
import React, { useState } from "react";
import Logo from '../../public/images/Logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm px-4 animate__animated animate__fadeInDown">
      <div className="max-w-7xl mx-auto py-5 flex justify-between items-center h-[60px]">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-8 w-auto" />
          <span className="text-xl font-semibold font-[cursive]">Krishna Gupta</span>
        </div>

        <nav className="hidden md:flex items-center space-x-4 text-base text-gray-700 font-medium">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-[#ff6f00] px-2 transition" onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-block bg-[#ff6f00] text-white text-sm px-4 py-2 rounded hover:bg-[#e65c00] transition">
          Contact Me
        </a>

        <button onClick={toggleMenu} className="md:hidden text-gray-700" aria-label="Toggle Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm animate__animated animate__fadeInDown">
          <nav className="flex flex-col px-6 py-4 space-y-3 text-sm font-medium text-gray-700">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={closeMenu} className="hover:text-[#ff6f00] transition">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="bg-[#ff6f00] text-white px-4 py-2 rounded text-center hover:bg-[#e65c00] transition">
              Contact Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
