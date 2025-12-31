// src\components\Projects.jsx
import React, { useState, useEffect } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, ChevronDownIcon, ChevronUpIcon, FolderOpenIcon, StarIcon } from '@heroicons/react/24/outline';

const allProjects = [
  {
    id: 1,
    title: "Academex",
    description: "A comprehensive learning platform featuring interactive courses, progress tracking, and student management system.",
    image: "/images/Projects-Thumbnails/Academex.png",
    alt: "Screenshot of Academex Learning Platform",
    liveLink: "https://academe-x.vercel.app/",
    githubLink: "https://github.com/krishnaguptaa2003/Employee-Calibration-repo",
    technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "JWT Authentication"]
  },
  {
    id: 2,
    title: "KnowledgeScape",
    description: "A dynamic quiz application with real-time score, built using React.js and Firebase.",
    image: "/images/Projects-Thumbnails/Knowledgescape.png",
    alt: "Screenshot of Quiz Application",
    liveLink: "https://knowledge-scape.vercel.app/",
    githubLink: "https://github.com/krishnaguptaa2003/KnowledgeScape",
    technologies: ["React.js", "Firebase", "Real-time Database", "Firebase Auth"]
  },
  {
    id: 3,
    title: "Network Dashboard",
    description: "A smart internal network app using React and .NET for seamless management of employee data.",
    image: "/images/Projects-Thumbnails/Networkdash.png",
    alt: "Screenshot of Scrpcy Dashboard employee management system",
    liveLink: "https://networkdash.netlify.app/",
    githubLink: "https://github.com/krishnaguptaa2003/networkdash",
    technologies: ["React.js", ".NET Core", "SQL Server", "JWT Authentication"]
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Modern personal portfolio using React and Tailwind, fully responsive and Figma-aligned. This is the site you are currently viewing!",
    image: "/images/Projects-Thumbnails/Portfolio.png",
    alt: "Screenshot of Krishna Gupta's Portfolio Website",
    liveLink: "https://krishnaguptaportfolio.netlify.app",
    githubLink: "https://github.com/krishnaguptaa2003/Portfolio",
    technologies: ["React.js", "Tailwind CSS", "Figma", "Netlify"]
  },
  {
    id: 5,
    title: "EduTech",
    description: "A donation-based learning platform offering free courses, secure donor tracking, and AI-based enhancements.",
    image: "/images/Projects-Thumbnails/EduTech.png",
    alt: "Screenshot of EduTech learning platform",
    githubLink: "https://github.com/krishnaguptaa2003/EduTech-repo",
    technologies: ["React.js", "Node.js", "MongoDB", "Payment Gateway Integration"]
  },
];

const Projects = () => {
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const GITHUB_REPO_LINK = "https://github.com/krishnaguptaa2003?tab=repositories";

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setShowProjectModal(true);
  };

  const closeProjectModal = () => {
    setShowProjectModal(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  useEffect(() => {
    if (showProjectModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showProjectModal]);

  // Show 3 projects initially, all 5 when expanded
  const displayedProjects = showAllProjects ? allProjects : allProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 px-5 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Actual Project Cards */}
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-300 shadow-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2 flex flex-col group"
            >
              {/* Image container with subtle border and shadow */}
              <div className="relative w-full h-40 rounded-md mb-4 overflow-hidden border border-gray-200 shadow-inner group-hover:border-gray-300 transition-colors duration-300">
                <img
                  src={project.image}
                  alt={project.alt}
                  width="400"
                  height="240"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle overlay to ensure image visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/5 to-transparent"></div>
              </div>
              
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                  {project.title}
                </h3>
                {project.comingSoon && (
                  <span className="text-xs bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 px-3 py-1 rounded-full font-medium border border-yellow-300">
                    Coming Soon
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 text-sm mb-4 flex-grow">
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
                  className="flex-1 flex items-center justify-center border border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 hover:text-gray-900 text-sm px-4 py-2.5 rounded-md transition-all duration-300 shadow-sm hover:shadow-md"
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

          {/* Enhanced GitHub Card - Shows as the 6th card when all projects are shown */}
          {showAllProjects && (
            <div
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 shadow-lg p-6 hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2 flex flex-col items-center justify-center text-center group cursor-pointer relative overflow-hidden"
              onClick={() => window.open(GITHUB_REPO_LINK, '_blank', 'noopener noreferrer')}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500 rounded-full translate-y-12 -translate-x-12"></div>
              </div>
              
              {/* GitHub Icon Container */}
              <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-gray-600">
                <FolderOpenIcon className="h-10 w-10 text-gray-200" />
              </div>
              
              <h3 className="relative z-10 text-2xl font-bold text-white mb-3">
                Explore More
              </h3>
              
              <p className="relative z-10 text-gray-300 text-sm mb-6 max-w-xs">
                Discover all my repositories, contributions, and open-source projects
              </p>
              
              {/* Stars Indicator */}
              <div className="relative z-10 flex items-center gap-1 text-gray-400 text-xs mb-4">
                <StarIcon className="h-3 w-3" />
                <span>20+ Repositories</span>
              </div>
              
              <div className="relative z-10 flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm px-5 py-2.5 rounded-lg border border-gray-700 group-hover:bg-gray-900/70 transition-all duration-300">
                <span className="font-medium text-gray-200 group-hover:text-white">See More on GitHub</span>
                <ArrowTopRightOnSquareIcon className="h-4 w-4 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
            </div>
          )}
        </div>

        {/* Enhanced View All Projects Button */}
        <div className="text-center mt-12">
          {allProjects.length > 3 && (
            <div className="relative">
              <button
                onClick={toggleShowAllProjects}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-medium group relative overflow-hidden"
              >
                {/* Button Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <span className="relative z-10">
                  {showAllProjects ? "Show Less" : "View All Projects"}
                </span>
                
                <div className="relative z-10 w-6 h-6 flex items-center justify-center">
                  {showAllProjects ? (
                    <ChevronUpIcon className="h-5 w-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                  )}
                </div>
              </button>
            </div>
          )}
        </div>
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