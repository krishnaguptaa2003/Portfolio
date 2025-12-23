import React, { useState, useEffect } from "react";
import { ChevronUpIcon } from '@heroicons/react/24/solid';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-50 bg-[#ff6f00] hover:bg-[#e65c00] text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#ff6f00] focus:ring-opacity-75 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      style={{
        bottom: 'clamp(1rem, 3vw, 2rem)',
        right: 'clamp(1rem, 3vw, 2rem)',
        width: 'clamp(2.5rem, 6vw, 3rem)',
        height: 'clamp(2.5rem, 6vw, 3rem)'
      }}
      aria-label="Scroll to top"
    >
      <ChevronUpIcon className="w-full h-full" />
    </button>
  );
};

export default ScrollToTop;