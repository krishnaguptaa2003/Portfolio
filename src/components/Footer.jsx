import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    // Semantic footer tag for SEO and accessibility
    <footer className="bg-gray-100 text-gray-900 pt-12 pb-0">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6 px-5 sm:px-0"> {/* Added px for mobile padding */}
        {/* Logo + Name: Crucial for branding and recognition */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/Logo.png"
            alt="Krishna Gupta's MERN Stack Developer Portfolio Logo" // More descriptive alt text for SEO & A11y
            width="40" // Explicit width for CLS prevention (performance)
            height="40" // Explicit height for CLS prevention (performance)
            loading="lazy" // Lazy loading for off-screen images (performance)
            className="h-10 w-10 object-contain rounded-md"
          />
          <span className="text-2xl font-semibold font-[cursive] text-gray-900">Krishna Gupta</span> {/* Ensure text color for contrast */}
        </div>

        {/* Main Navigation: Semantic <nav> for SEO and accessibility */}
        <nav className="flex flex-wrap justify-center gap-6 sm:gap-8 text-lg font-medium"> {/* Adjusted gap for responsiveness */}
          <a href="#home" className="hover:text-[#ff6f00] transition-colors duration-200 ease-in-out px-2 py-1 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75" aria-label="Navigate to Home section">Home</a>
          <a href="#about" className="hover:text-[#ff6f00] transition-colors duration-200 ease-in-out px-2 py-1 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75" aria-label="Navigate to About Me section">About Me</a>
          <a href="#skills" className="hover:text-[#ff6f00] transition-colors duration-200 ease-in-out px-2 py-1 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75" aria-label="Navigate to Skills section">Skills</a>
          <a href="#projects" className="hover:text-[#ff6f00] transition-colors duration-200 ease-in-out px-2 py-1 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75" aria-label="Navigate to Projects and Portfolio section">Projects</a>
          <a href="#contact" className="hover:text-[#ff6f00] transition-colors duration-200 ease-in-out px-2 py-1 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75" aria-label="Navigate to Contact section">Contact</a>
        </nav>

        {/* Social Icons: Add hover effects and aria-labels for accessibility */}
        <div className="flex space-x-6 sm:space-x-8 text-2xl mt-4"> {/* Adjusted space for responsiveness */}
          <a href="https://github.com/krishnaguptaa2003" target="_blank" rel="noopener noreferrer" aria-label="Visit Krishna Gupta's GitHub profile" className="text-gray-800 hover:text-black transition-all duration-300 transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/krishnaguptaa2003/" target="_blank" rel="noopener noreferrer" aria-label="Visit Krishna Gupta's LinkedIn profile" className="text-[#0A66C2] hover:text-[#004182] transition-all duration-300 transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            <FaLinkedin />
          </a>
          <a href="mailto:krishnaguptaa2003@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Send an email to Krishna Gupta at krishnaguptaa2003@gmail.com" className="text-[#D44638] hover:text-red-600 transition-all duration-300 transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
            <FaEnvelope />
          </a>
          <a href="https://x.com/MRKRISHNA_75" target="_blank" rel="noopener noreferrer" aria-label="Visit Krishna Gupta's X (Twitter) profile" className="text-black hover:text-gray-800 transition-all duration-300 transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75">
            <FaXTwitter />
          </a>
        </div>
      </div>

      {/* Bottom Bar: Copyright and Policy Links */}
      <div className="mt-12 bg-gray-700 text-white text-sm py-4 px-5 sm:px-10 flex flex-col md:flex-row justify-between items-center text-center"> {/* Added px for mobile padding, text-center for small screens */}
        <p className="mb-2 md:mb-0">© 2025 Krishna Gupta. All Rights Reserved.</p>
        <p className="space-x-2">
          {/* IMPORTANT: Replace '#' with actual URLs for SEO and functionality */}
          <a href="/privacy-policy" className="hover:underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75" aria-label="Read Privacy Policy">Privacy Policy</a>
          <span aria-hidden="true">|</span> {/* aria-hidden for decorative separator */}
          <a href="/terms-of-service" className="hover:underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75" aria-label="Read Terms & Conditions">Terms & Conditions</a>
          <span aria-hidden="true">|</span>
          <a href="/services" className="hover:underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75" aria-label="Learn about Services offered">Services</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
