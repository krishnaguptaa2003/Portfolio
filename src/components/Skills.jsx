import React from "react";
// Correct way to import images from the public folder in Vite
import Skillimg from "/images/Skillimg.png";
// Using Fa6 for consistency where applicable
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaFigma, FaGithub, FaLock } from "react-icons/fa6";
// Import FaAws from 'react-icons/fa' as it's typically found there
import { FaAws } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiAdobephotoshop, SiGraphql } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

const skills = [
  {
    category: "Frontend Development",
    items: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"], // Changed "Tailwind" to "Tailwind CSS" for clarity/SEO
    icon: <FaReact className="text-blue-400 text-3xl" />, // Adjusted icon size and color for better visibility
  },
  {
    category: "Backend Development",
    items: ["Node.js", "Express.js", "GraphQL", "ASP.NET", "Laravel"], // Moved ASP.NET and Laravel here for better categorization
    icon: <FaNodeJs className="text-green-500 text-3xl" />,
  },
  {
    category: "Databases", // New category for MongoDB
    items: ["MongoDB", "SQL"],
    icon: <SiMongodb className="text-green-400 text-3xl" />,
  },
  {
    category: "UI/UX Design",
    items: ["Figma", "Adobe Photoshop", "Wireframing", "Prototyping"],
    icon: <MdDesignServices className="text-pink-500 text-3xl" />,
  },
  {
    category: "Tools & Cloud", // Renamed for clarity
    items: ["GitHub", "Postman", "AWS (EC2, S3, SNS)"], // Clarified AWS services
    icon: <FaGithub className="text-gray-300 text-3xl" />,
  },
  {
    category: "Authentication & Security", // Renamed for clarity
    items: ["Firebase Auth", "OAuth", "JWT"],
    icon: <FaLock className="text-indigo-400 text-3xl" />,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-[#061018] text-white py-16 px-5 sm:px-10">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" aria-label="My Technical Skills and Expertise">Skills & Expertise</h2> {/* Enhanced heading and aria-label for SEO */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT: SKILLS GRID */}
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.category} // Using category as key, assuming unique categories
                className="bg-[#1c2331] p-6 rounded-xl shadow-md border border-[#2c3e50] hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:border-blue-500 cursor-default" // Added hover effects
                role="listitem" // Accessibility: indicates this is an item in a list
                aria-labelledby={`skill-category-${index}`} // Link to the category title
              >
                <div className="flex items-center gap-3 mb-4 text-xl font-semibold">
                  {skill.icon}
                  <h3 id={`skill-category-${index}`}>{skill.category}</h3> {/* Changed to h3 for semantic hierarchy */}
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="text-base"> {/* Added text-base for consistent sizing */}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* RIGHT: ILLUSTRATION */}
          <div className="hidden lg:block relative bg-[#1c2331] rounded-full">
            <img
              src={Skillimg}
              alt="Developer working on a laptop, illustrating coding skills"
              className="w-auto h-auto rounded-[259px] object-contain opacity-80 drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
