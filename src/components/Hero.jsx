import React, { useEffect } from "react"; // useEffect is needed for AOS
// Import all required icons from fa6 for consistency
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Heroimg from "/images/Heroimg.png"; // Correct path for public folder assets
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS for text animations
  }, []);

  return (
    <section
      id="home"
      // min-h-screen: Ensures it takes at least full viewport height
      // relative overflow-hidden: Good practice for sections, explicitly prevents horizontal scrolling
      className="w-full h-auto bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white relative overflow-hidden overflow-x-hidden" // Removed px-5 sm:px-10 from here
    >
      {/* Main Content Container: Handles horizontal padding and overall layout */}
      {/* lg:gap-4 for 4px visual space between text and image on large screens */}
      <div className="max-w-7xl mx-auto px-5 sm:px-10 flex flex-col-reverse lg:flex-row items-center justify-between py-16 lg:py-24 lg:gap-4">
        {/* LEFT TEXT AREA */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 lg:space-y-6 z-10 mb-12 lg:mb-0"> {/* mb-12 for vertical spacing on small screens, lg:mb-0 removes it on large */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight" aria-label="Hi, I'm Krishna Gupta" data-aos="fade-up" data-aos-delay="100">
            Hi, I'm <span className="text-green-400">Krishna Gupta</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-200 mt-2" aria-label="MERN Stack Developer, React.js, UI/UX Designer" data-aos="fade-up" data-aos-delay="200">
            MERN Stack Developer | React.js | UI/UX
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mt-4" data-aos="fade-up" data-aos-delay="300">
            I'm Krishna Gupta, a skilled Web Developer with a strong foundation
            in UI/UX and modern tech stacks. Explore my work and journey below!
          </p>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="400">
            I build responsive, scalable, and user-friendly web applications using modern front-end tools. My goal is to learn and work on real-world problems with smart digital solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6" data-aos="fade-up" data-aos-delay="500">
            <a
              href="/images/KRISHNA_GUPTA-resume.pdf" // Updated path for resume
              target="_blank"
              rel="noopener noreferrer" // Security: Prevents tabnabbing
              download="KRISHNA_GUPTA-resume.pdf" // Updated filename for download
              aria-label="Download Krishna Gupta's Curriculum Vitae (PDF document)" // Accessibility: More descriptive for screen readers, mentions file type
              className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition-colors duration-200 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75" // Enhanced animations, focus states
            >
              Download CV
            </a>
            <a
              href="#projects"
              aria-label="Go to Projects section to see my work" // Accessibility: More descriptive
              className="border border-white text-white hover:bg-white hover:text-gray-900 font-medium px-6 py-3 rounded-lg transition-colors duration-200 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75" // Enhanced animations, focus states
            >
              Go to Projects
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-5 pt-6 justify-center lg:justify-start text-2xl text-gray-300" data-aos="fade-up" data-aos-delay="600">
            <a
              href="https://github.com/krishnaguptaa2003" // Corrected GitHub URL
              target="_blank"
              rel="noopener noreferrer" // Added noopener noreferrer
              aria-label="Visit Krishna Gupta's GitHub profile" // Accessibility: describes link purpose
              className="hover:text-white transition-colors duration-200 transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75" // Enhanced animations, focus states
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/krishnaguptaa2003/" // Corrected LinkedIn URL
              target="_blank"
              rel="noopener noreferrer" // Added noopener noreferrer
              aria-label="Visit Krishna Gupta's LinkedIn profile" // Accessibility: describes link purpose
              className="hover:text-white transition-colors duration-200 transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75" // Enhanced animations, focus states
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com" // Corrected Instagram URL if applicable, otherwise keep as is
              target="_blank"
              rel="noopener noreferrer" // Added noopener noreferrer
              aria-label="Visit Krishna Gupta's Instagram profile" // Accessibility: describes link purpose
              className="hover:text-white transition-colors duration-200 transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75" // Enhanced animations, focus states
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/MRKRISHNA_75" // Corrected X (Twitter) URL
              target="_blank"
              rel="noopener noreferrer" // Added noopener noreferrer
              aria-label="Visit Krishna Gupta's X (formerly Twitter) profile" // Accessibility: describes link purpose
              className="hover:text-white transition-colors duration-200 transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75" // Enhanced animations, focus states
            >
              <FaXTwitter /> {/* Corrected to FaXTwitter */}
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0 z-10" data-aos="zoom-in" data-aos-delay="200">
          <img
            src={Heroimg} // Correct path for public folder assets
            alt="Krishna Gupta - MERN Stack Developer and UI/UX Designer professional portrait" // More descriptive alt text for SEO and A11y
            width="420" // Explicit width for CLS prevention (performance)
            height="420" // Explicit height for CLS prevention (performance)
            loading="eager" // "eager" for above-the-fold images (performance)
            // Adjusted max-w for smaller screens to make the image less dominant
            // Increased max-w for xs and sm breakpoints
            className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[340px] lg:max-w-[420px] h-auto object-cover rounded-full shadow-2xl"
          />
        </div>
      </div>
    </section>
  );    
};

export default Hero;
