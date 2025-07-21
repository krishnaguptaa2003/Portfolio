import React, { useEffect } from "react";
import Aboutimg from "../../public/images/Aboutimg.png";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Reusable Tile Component
const InfoTile = ({ title, description }) => (
  <div
    className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
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
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* LEFT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-right">
            <img
              src={Aboutimg}
              alt="Krishna - About Section"
              className="w-[610px] h-[616px] object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <h2 className="text-5xl font-bold text-[#ff6f00] mb-6">About Me</h2>

            <p className="text-gray-800 text-[17px] leading-relaxed mb-5">
              I’m <strong>Krishna Gupta</strong>, a B.Tech Computer Engineering graduate from RK University.
              I specialize in <strong>React.js</strong>, <strong>MongoDB</strong>, and <strong>UI/UX Design</strong>,
              and I'm passionate about building modern, human-centered digital solutions.
            </p>

            <p className="text-gray-800 text-[17px] leading-relaxed mb-5">
              I've interned at <strong>Welspun</strong> and <strong>Teque7</strong>, contributing to impactful real-world projects.
              Currently, I’m co-developing <strong>EduTech</strong> — a donation-based learning platform designed to make quality education accessible to everyone.
            </p>

            <p className="text-gray-800 text-[17px] leading-relaxed mb-5">
              Beyond code, I believe in purposeful design and meaningful user experiences. My goal is to continuously learn,
              collaborate, and solve real-world challenges through clean, scalable, and elegant code.
            </p>

            {/* Skills Summary */}
            <ul className="list-disc list-inside text-gray-800 mb-6 text-[16px] space-y-1">
              <li>Core Stack: React.js, MongoDB, Node.js</li>
              <li>Real-world internship experience</li>
              <li>Strong foundation in UI/UX design & prototyping</li>
              <li>Developer of EduTech platform</li>
              <li>Soft skills: communication, problem-solving, adaptability</li>
            </ul>

            <blockquote className="italic text-gray-600 mb-6">
              “I love turning complex problems into elegant, functional designs.”
            </blockquote>

            <div className="flex">
              <a
                href="/Krishna_Gupta_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="bg-[#ff6f00] hover:bg-[#e65c00] text-white px-6 py-3 rounded-md font-semibold shadow-md transition"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
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
