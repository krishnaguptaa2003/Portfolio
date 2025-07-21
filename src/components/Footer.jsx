import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900 pt-12 pb-0">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
        {/* Logo + Name */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/Logo.png"
            alt="Krishna Gupta Logo"
            className="h-10 w-10 object-contain rounded-md"
          />
          <span className="text-2xl font-semibold font-[cursive]">Krishna Gupta</span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-8 text-lg font-medium">
          <a href="#home" className="hover:text-[#ff6f00]">Home</a>
          <a href="#about" className="hover:text-[#ff6f00]">About Me</a>
          <a href="#skills" className="hover:text-[#ff6f00]">Skills</a>
          <a href="#projects" className="hover:text-[#ff6f00]">Projects/Portfolio</a>
          {/* <a href="#testimonials" className="hover:text-[#ff6f00]">Testimonials</a> */}
          <a href="#contact" className="hover:text-[#ff6f00]">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-8 text-2xl mt-4">
          <a href="https://github.com/krishna-gupta" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/krishna-gupta" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:krishnagupta.design@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaXTwitter />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 bg-gray-700 text-white text-sm py-4 px-[100px] flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 Krishna Gupta. All Rights Reserved.</p>
        <p className="space-x-2 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <span>|</span>
          <a href="#" className="hover:underline">Services</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
