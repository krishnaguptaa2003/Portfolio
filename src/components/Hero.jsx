import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Heroimg from "/images/Heroimg.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  // AOS.init is handled globally in App.jsx
  // useEffect(() => {
  //   AOS.init({ duration: 1000, once: true });
  // }, []);

  return (
    <section
      id="home"
      className="w-full min-h-screen px-5 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white relative overflow-hidden overflow-x-hidden"
    >
      {/* Animated background elements (re-added as per your previous code) */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Main Content Container: Removed px-5 sm:px-10 */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between py-16 lg:py-24 lg:gap-8 gap-8 relative z-10">
        {/* LEFT TEXT AREA */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-5 lg:space-y-7 mb-12 lg:mb-0">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
            aria-label="Hi, I'm Krishna Gupta"
            style={{
              animation: 'fadeInUp 0.8s ease-out both',
              animationDelay: '0.1s'
            }}
          >
            Hi, I'm <span className="text-green-400 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-300">Krishna Gupta</span>
          </h1>

          <h2
            className="text-xl md:text-2xl font-semibold text-gray-200 mt-2"
            aria-label="MERN Stack Developer, React.js, UI/UX Designer"
            style={{
              animation: 'fadeInUp 0.8s ease-out both',
              animationDelay: '0.2s'
            }}
          >
            MERN Stack Developer | React.js | UI/UX
          </h2>

          <p
            className="text-gray-300 text-base md:text-lg leading-relaxed"
            style={{
              animation: 'fadeInUp 0.8s ease-out both',
              animationDelay: '0.3s'
            }}
          >
            I'm Krishna Gupta, a skilled Web Developer with a strong foundation
            in UI/UX and modern tech stacks. Explore my work and journey below!
          </p>

          <p
            className="text-gray-300 text-base md:text-lg leading-relaxed"
            style={{
              animation: 'fadeInUp 0.8s ease-out both',
              animationDelay: '0.4s'
            }}
          >
            I build responsive, scalable, and user-friendly web applications using modern front-end tools. My goal is to learn and work on real-world problems with smart digital solutions.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6"
            style={{
              animation: 'fadeInUp 0.8s ease-out both',
              animationDelay: '0.5s'
            }}
          >
            <a
              href="/images/KRISHNA_GUPTA-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="KRISHNA_GUPTA-resume.pdf"
              aria-label="Download Krishna Gupta's Curriculum Vitae (PDF document)"
              className="relative overflow-hidden group bg-gradient-to-r from-green-500 to-teal-500 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
            >
              <span className="relative z-10">Download CV</span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
            <a
              href="#projects"
              aria-label="Go to Projects section to see my work"
              className="relative overflow-hidden group border border-white/50 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
            >
              <span className="relative z-10">Go to Projects</span>
              <span className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </div>

          {/* Social Icons */}
          <div
            className="flex space-x-5 pt-6 justify-center lg:justify-start text-2xl text-gray-300"
            style={{
              animation: 'fadeInUp 0.8s ease-out both',
              animationDelay: '0.6s'
            }}
          >
            {[
              { icon: <FaGithub />, href: "https://github.com/krishnaguptaa2003", label: "GitHub" },
              { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/krishnaguptaa2003/", label: "LinkedIn" },
              { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
              { icon: <FaXTwitter />, href: "https://x.com/MRKRISHNA_75", label: "X (Twitter)" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Krishna Gupta's ${social.label} profile`}
                className="p-2 rounded-full transition-all duration-300 hover:text-white hover:bg-white/10 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                style={{
                  animation: `bounceIn 0.6s ease-out both`,
                  animationDelay: `${0.7 + index * 0.1}s`
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0"
          style={{
            animation: 'fadeInRight 0.8s ease-out both',
            animationDelay: '0.3s'
          }}
        >
          <div className="relative group">
            <img
              src={Heroimg}
              alt="Krishna Gupta - MERN Stack Developer and UI/UX Designer professional portrait"
              width="420"
              height="420"
              loading="eager"
              className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[340px] lg:max-w-[420px] h-auto object-cover rounded-full shadow-2xl border-4 border-white/10 group-hover:border-green-400/30 transition-all duration-500"
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-green-400/20 group-hover:scale-105 transition-all duration-500 pointer-events-none"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
