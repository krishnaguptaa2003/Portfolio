import React from "react";
import Aboutimg from "/images/Aboutimg.png";

const InfoTile = ({ title, description }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
    <h4 className="font-semibold text-gray-900 mb-2 text-lg">{title}</h4>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="w-full bg-white py-16 px-5 sm:px-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* LEFT IMAGE - Mobile only background effect */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            {/* Mobile background animation */}
            <div className="lg:hidden absolute inset-0 overflow-hidden -z-10">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-[#ff6f00]/5"
                  style={{
                    width: `${Math.random() * 150 + 50}px`,
                    height: `${Math.random() * 150 + 50}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `float ${Math.random() * 15 + 10}s linear infinite`,
                    animationDelay: `${Math.random() * 5}s`
                  }}
                />
              ))}
            </div>
            
            <img
              src={Aboutimg}
              alt="Krishna Gupta - Professional portrait"
              width="610"
              height="616"
              loading="lazy"
              className="w-full h-auto max-w-full object-cover rounded-lg lg:rounded-none lg:shadow-none"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#ff6f00] mb-6">
              About Me
            </h2>

            <div className="space-y-4">
              <p className="text-gray-800 text-base md:text-[17px] text-justify leading-relaxed">
                I'm Krishna Gupta, a B.Tech Computer Engineering graduate from RK University.
                I specialize in React.js, MongoDB, and UI/UX Design,
                and I'm passionate about building modern, human-centered digital solutions.
              </p>

              <p className="text-gray-800 text-base md:text-[17px] text-justify leading-relaxed">
                I've interned at Welspun and Teque7, contributing to impactful real-world projects.
                Currently, I'm co-developing EduTech — a donation-based learning platform designed to make quality education accessible to everyone.
              </p>

              <p className="text-gray-800 text-base md:text-[17px] text-justify leading-relaxed">
                Beyond code, I believe in purposeful design and meaningful user experiences. My goal is to continuously learn,
                collaborate, and solve real-world challenges through clean, scalable, and elegant code.
              </p>
            </div>

            {/* Skills Summary */}
            <ul className="list-disc list-inside text-gray-800 my-6 text-[16px] space-y-1 pl-5 marker:text-[#ff6f00]">
              {[
                "Core Stack: React.js, MongoDB, Node.js",
                "Real-world internship experience",
                "Strong foundation in UI/UX design & prototyping",
                "Developer of EduTech platform",
                "Soft skills: communication, problem-solving, adaptability"
              ].map((item, index) => (
                <li key={index} className="pl-2">
                  {item}
                </li>
              ))}
            </ul>

            <blockquote className="italic text-gray-600 my-6">
              "I love turning complex problems into elegant, functional designs."
            </blockquote>

            <a
              href="#contact"
              rel="noreferrer"
              className="inline-block bg-[#ff6f00] hover:bg-[#e65c00] text-white px-6 py-3 rounded-md font-medium shadow transition-colors duration-300"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Bottom Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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