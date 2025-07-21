import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import Heroimg from "../../public/images/Heroimg.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-5 sm:px-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between py-[100px]">
        {/* LEFT TEXT AREA */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-green-400">Krishna Gupta</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-200">
            MERN Stack Developer | React.js | UI/UX
          </h2>
          <p className="text-gray-300 text-justify text-base md:text-lg leading-relaxed">
            I'm Krishna Gupta, a skilled Web Developer with a strong foundation
            in UI/UX and modern tech stacks. Explore my work and journey below!
          </p>

          <p className="text-gray-300 text-justify text-base md:text-lg leading-relaxed">
          I build responsive, scalable, and user-friendly web applications using modern front-end tools. My goal is to learn and work on real-world problems with smart digital solutions.
        </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <a
              href="/Krishna_Gupta_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg shadow-md transition"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="border border-white text-white hover:bg-white hover:text-black font-medium px-6 py-3 rounded-lg transition"
            >
              Go to Projects
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-4 justify-center lg:justify-start text-xl text-gray-300">
            <a
              href="https://github.com/krishna-gupta"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="hover:text-white" />
            </a>
            <a
              href="https://linkedin.com/in/krishna-gupta"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="hover:text-white" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="hover:text-white" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="hover:text-white" />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={Heroimg}
            alt="Krishna Gupta Illustration"
            className="w-64 sm:w-80 md:w-96 lg:w-[420px] h-auto rounded-full shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
