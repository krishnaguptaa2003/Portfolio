// src/components/About.jsx
import React, { useEffect } from "react";
import Aboutimg from "/images/Aboutimg.png"; // Correct path for public folder assets in Vite
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Reusable Tile Component
const InfoTile = ({ title, description }) => (
  <div
    className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300" // Added duration-300 for smoother hover
    data-aos="fade-up"
  >
    <h4 className="font-semibold text-gray-900 mb-2 text-lg">{title}</h4>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="about" className="w-full bg-white py-20 px-5 sm:px-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* LEFT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-right">
            <img
              src={Aboutimg}
              alt="Krishna Gupta - Professional portrait for About Me section" // More descriptive alt text for SEO & A11y
              width="610" // Explicit width for CLS prevention (Performance)
              height="616" // Explicit height for CLS prevention (Performance) - adjust to actual image size
              loading="lazy" // Lazy loading for off-screen images (Performance)
              // --- Responsive Image Classes ---
              // w-full: Takes full width of its parent container.
              // h-auto: Maintains aspect ratio, height adjusts automatically.
              // max-w-full: Ensures it never overflows its container.
              // lg:max-w-[610px]: On large screens and up, caps its maximum width to original design size.
              // object-cover: Ensures the image covers the area, cropping if necessary to maintain aspect ratio and fill space.
              // rounded-lg shadow-lg: Apply by default (for small screens)
              // md:rounded-none md:shadow-none: Remove rounded corners and shadow from medium screens and up
              className="w-full h-auto max-w-full lg:max-w-[610px] object-cover rounded-lg shadow-lg md:rounded-none md:shadow-none"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <h2 className="text-5xl font-bold text-[#ff6f00] mb-6" aria-label="About Krishna Gupta">About Me</h2> {/* Added aria-label for SEO/A11y */}

            <p className="text-gray-800 text-[17px] text-justify leading-relaxed mb-5">
              I’m <strong>Krishna Gupta</strong>, a B.Tech Computer Engineering graduate from RK University.
              I specialize in <strong>React.js</strong>, <strong>MongoDB</strong>, and <strong>UI/UX Design</strong>,
              and I'm passionate about building modern, human-centered digital solutions.
            </p>

            <p className="text-gray-800 text-[17px] text-justify leading-relaxed mb-5">
              I've interned at <strong>Welspun</strong> and <strong>Teque7</strong>, contributing to impactful real-world projects.
              Currently, I’m co-developing <strong>EduTech</strong> — a donation-based learning platform designed to make quality education accessible to everyone.
            </p>

            <p className="text-gray-800 text-[17px] text-justify leading-relaxed mb-5">
              Beyond code, I believe in purposeful design and meaningful user experiences. My goal is to continuously learn,
              collaborate, and solve real-world challenges through clean, scalable, and elegant code.
            </p>

            {/* Skills Summary */}
            <ul className="list-disc list-inside text-gray-800 mb-6 text-[16px] space-y-1" aria-label="Key Skills Summary"> {/* Added aria-label for accessibility */}
              <li>Core Stack: React.js, MongoDB, Node.js</li>
              <li>Real-world internship experience</li>
              <li>Strong foundation in UI/UX design & prototyping</li>
              <li>Developer of EduTech platform</li>
              <li>Soft skills: communication, problem-solving, adaptability</li>
            </ul>

            <blockquote className="italic text-justify text-gray-600 mb-6" aria-label="Quote by Krishna Gupta">
              “I love turning complex problems into elegant, functional designs.”
            </blockquote>

            <div className="flex">
              <a
                href="#contact" // Links directly to your contact section
                rel="noreferrer" // Good for security with target="_blank" (though not used here)
                // Button Animation Classes:
                // transition-all duration-300 ease-in-out: Smooth transition for all properties.
                // transform: Enables scale/translate transforms.
                // hover:scale-105: Zooms in slightly on hover.
                // hover:shadow-lg: Adds a larger shadow on hover.
                className="bg-[#ff6f00] hover:bg-[#e65c00] text-white px-6 py-3 rounded-md font-semibold shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#ff6f00] focus:ring-opacity-75" // Added focus states
                aria-label="Hire me or collaborate on a project" // Accessibility: Describes button purpose
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16" role="list"> {/* Added role="list" for accessibility */}
          <InfoTile
            title="Real-world Internship Experience"
            description="Worked at Welspun and Teque7, solving actual problems and collaborating in real teams."
          />
          <InfoTile
            title="User-Centered Design Thinking"
            description="Strong focus on clean, responsive interfaces using tools like Figma and Adobe XD."
          />
          <InfoTile
            title="Strong Technical Stack"
            description="Hands-on experience with React, MongoDB, Node.js, Tailwind, .NET Core, and GitHub."
          />
        </div>
      </div>
    </section>
  );
};

export default About;
