// src\components\Projects.jsx
import React, { useState, useEffect } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const allProjects = [
  {
    id: 1,
    title: "Academex",
    description: "A comprehensive learning platform featuring interactive courses, progress tracking, and student management system.",
    image: "/images/Academex.png",
    alt: "Screenshot of Academex Learning Platform",
    liveLink: "https://academe-x.vercel.app/",
    githubLink: "https://github.com/krishnaguptaa2003/Employee-Calibration-repo",
    technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "JWT Authentication"]
  },
  {
    id: 2,
    title: "KnowledgeScape",
    description: "A dynamic quiz application with real-time score, built using React.js and Firebase.",
    image: "/images/Knowledgescape.png",
    alt: "Screenshot of Quiz Application",
    liveLink: "https://knowledge-scape.vercel.app/",
    githubLink: "https://github.com/krishnaguptaa2003/KnowledgeScape",
    technologies: ["React.js", "Firebase", "Real-time Database", "Firebase Auth"]
  },
  {
    id: 3,
    title: "Network Dashboard",
    description: "A smart internal network app using React and .NET for seamless management of employee data.",
    image: "/images/Networkdash.png",
    alt: "Screenshot of Scrpcy Dashboard employee management system",
    liveLink: "https://networkdash.netlify.app/",
    githubLink: "https://github.com/krishnaguptaa2003/networkdash",
    technologies: ["React.js", ".NET Core", "SQL Server", "JWT Authentication"]
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Modern personal portfolio using React and Tailwind, fully responsive and Figma-aligned. This is the site you are currently viewing!",
    image: "/images/project4.png",
    alt: "Screenshot of Krishna Gupta's Portfolio Website",
    liveLink: "https://krishnaguptaportfolio.netlify.app",
    githubLink: "https://github.com/krishnaguptaa2003/Portfolio",
    technologies: ["React.js", "Tailwind CSS", "Figma", "Netlify"]
  },
  {
    id: 5,
    title: "Hospital Management",
    description: "Desktop-style system to manage hospital workflows and patient records with .NET backend and SQL.",
    image: "/images/project3.png",
    alt: "Screenshot of Hospital Management System",
    githubLink: "https://github.com/krishnaguptaa2003/Hostel-Management",
    technologies: [".NET", "SQL Server", "Windows Forms", "Entity Framework"]
  },
  {
    id: 6,
    title: "EduTech",
    description: "A donation-based learning platform offering free courses, secure donor tracking, and AI-based enhancements.",
    image: "/images/project1.png",
    alt: "Screenshot of EduTech learning platform",
    githubLink: "https://github.com/krishnaguptaa2003/EduTech-repo",
    comingSoon: true,
    technologies: ["React.js", "Node.js", "MongoDB", "Payment Gateway Integration"]
  },
];

const Projects = () => {
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjectCount, setVisibleProjectCount] = useState(3);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setShowProjectModal(true);
  };

  const closeProjectModal = () => {
    setShowProjectModal(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const toggleViewAllProjects = () => {
    setVisibleProjectCount(prev => 
      prev === allProjects.length ? 3 : allProjects.length
    );
  };

  useEffect(() => {
    if (showProjectModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showProjectModal]);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 px-5 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Latest Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.slice(0, visibleProjectCount).map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-300 shadow-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2 flex flex-col"
            >
              {/* Image container with subtle border and shadow */}
              <div className="relative w-full h-40 rounded-md mb-4 overflow-hidden border border-gray-200 shadow-inner">
                <img
                  src={project.image}
                  alt={project.alt}
                  width="400"
                  height="240"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Subtle overlay to ensure image visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent"></div>
              </div>
              
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                  {project.title}
                </h3>
                {project.comingSoon && (
                  <span className="text-xs bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 px-3 py-1 rounded-full font-medium border border-yellow-300">
                    Coming Soon
                  </span>
                )}
              </div>
              
              <p className="text-gray-700 text-sm mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="flex gap-3 mt-auto">
                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm px-4 py-2.5 rounded-md transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2" />
                    Link
                  </a>
                ) : project.comingSoon ? (
                  <button
                    className="flex-1 flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 text-sm px-4 py-2.5 rounded-md cursor-not-allowed border border-gray-300"
                    disabled
                  >
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2" />
                    Demo Soon
                  </button>
                ) : (
                  <button
                    className="flex-1 flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 text-sm px-4 py-2.5 rounded-md cursor-not-allowed border border-gray-300"
                    disabled
                  >
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2" />
                    No Demo
                  </button>
                )}
                
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-sm px-4 py-2.5 rounded-md transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <CodeBracketIcon className="h-4 w-4 mr-2" />
                  Code
                </a>
                
                <button
                  onClick={() => openProjectModal(project)}
                  className="flex-1 flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white text-sm px-4 py-2.5 rounded-md transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {allProjects.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={toggleViewAllProjects}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
            >
              {visibleProjectCount === allProjects.length ? "Show Less" : "View All Projects"}
            </button>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {showProjectModal && selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all duration-300"
          onClick={closeProjectModal}
        >
          <div 
            className="bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-7 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {selectedProject.title}
                </h3>
                {selectedProject.comingSoon && (
                  <span className="text-sm bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 px-3 py-1.5 rounded-full font-medium border border-yellow-300 mt-2 inline-block">
                    Demo Coming Soon
                  </span>
                )}
              </div>
              <button
                onClick={closeProjectModal}
                className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
              >
                <XMarkIcon className="h-7 w-7 text-gray-700" />
              </button>
            </div>
            
            <div className="p-7">
              {/* Enhanced image container */}
              <div className="relative rounded-xl overflow-hidden border border-gray-300 shadow-lg mb-8">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.alt}
                  className="w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              
              <p className="text-gray-800 text-lg mb-8 leading-relaxed">
                {selectedProject.description}
              </p>
              
              <div className="mb-10">
                <h4 className="font-bold text-gray-900 text-xl mb-4">Technologies Used:</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 text-sm px-4 py-2 rounded-full font-medium border border-gray-300 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-5 justify-center">
                {selectedProject.liveLink ? (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                  >
                    <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-3" />
                    Live Demo
                  </a>
                ) : selectedProject.comingSoon ? (
                  <button
                    className="flex items-center bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 px-6 py-3.5 rounded-lg cursor-not-allowed border border-gray-400 font-medium"
                    disabled
                  >
                    <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-3" />
                    Demo Coming Soon
                  </button>
                ) : (
                  <button
                    className="flex items-center bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 px-6 py-3.5 rounded-lg cursor-not-allowed border border-gray-400 font-medium"
                    disabled
                  >
                    <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-3" />
                    No Demo Available
                  </button>
                )}
                
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center border-2 border-gray-300 hover:border-gray-500 bg-white hover:bg-gray-50 px-6 py-3.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                >
                  <CodeBracketIcon className="h-5 w-5 mr-3" />
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;