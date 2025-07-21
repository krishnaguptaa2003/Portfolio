import React from "react";
import Skillimg from "../../public/images/Skillimg.png"
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaFigma, FaAws, FaGithub, FaLock } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiAdobephotoshop, SiGraphql } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

const skills = [
  {
    category: "Frontend Development",
    items: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind", "ASP.NET", "Laravel"],
    icon: <FaReact className="text-blue-500" />,
  },
  {
    category: "Backend Development",
    items: ["Node.js", "Express.js", "GraphQL"],
    icon: <FaNodeJs className="text-green-600" />,
  },
  {
    category: "UI/UX Design",
    items: ["Figma", "Adobe Photoshop", "Wireframing", "Prototyping"],
    icon: <MdDesignServices className="text-pink-600" />,
  },
  {
    category: "Tools & DevOps",
    items: ["GitHub", "Postman", "AWS EC2, S3, SNS"],
    icon: <FaGithub className="text-gray-800" />,
  },
  {
    category: "Authentication",
    items: ["Firebase Auth", "OAuth", "JWT"],
    icon: <FaLock className="text-indigo-600" />,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-[#061018] text-white py-16 px-5 sm:px-10">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills Section</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT: SKILLS GRID */}
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-[#1c2331] p-6 rounded-xl shadow-md border border-[#2c3e50]">
                <div className="flex items-center gap-3 mb-4 text-xl font-semibold">
                  {skill.icon}
                  {skill.category}
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {skill.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* RIGHT: ILLUSTRATION */}
          <div className="hidden lg:block relative bg-[#1c2331] rounded-full">  
            <img
              src={Skillimg}
              alt="Developer Illustration"
              className="w-auto h-auto rounded-[259px] object-contain opacity-70 drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
