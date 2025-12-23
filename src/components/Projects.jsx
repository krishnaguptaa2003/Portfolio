import React, { useState, useEffect } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const allProjects = [
  {
    id: 1,
    title: "EduTech",
    description: "A donation-based learning platform offering free courses, secure donor tracking, and AI-based enhancements.",
    image: "/images/project1.png",
    alt: "Screenshot of EduTech learning platform",
    githubLink: "https://github.com/krishnaguptaa2003/EduTech-repo",
    comingSoon: true,
    technologies: ["React.js", "Node.js", "MongoDB", "Payment Gateway Integration"]
  },
  {
    id: 2,
    title: "Network Dashboard",
    description: "A smart internal network app using React and .NET for seamless management of employee data.",
    image: "/images/project2.png",
    alt: "Screenshot of Scrpcy Dashboard employee management system",
    liveLink: "https://networkdash.netlify.app/",
    githubLink: "https://github.com/krishnaguptaa2003/networkdash",
    comingSoon: true,
    technologies: ["React.js", ".NET Core", "SQL Server", "JWT Authentication"]
  },
  {
    id: 3,
    title: "Hospital Management",
    description: "Desktop-style system to manage hospital workflows and patient records with .NET backend and SQL.",
    image: "/images/project3.png",
    alt: "Screenshot of Hospital Management System",
    githubLink: "https://github.com/krishnaguptaa2003/Hostel-Management",
    comingSoon: true,
    technologies: [".NET", "SQL Server", "Windows Forms", "Entity Framework"]
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
    title: "Quiz App",
    description: "A dynamic quiz application with real-time score, built using React.js and Firebase.",
    image: "/images/project5.png",
    alt: "Screenshot of Quiz Application",
    liveLink: "https://knowledge-scape.vercel.app/",
    githubLink: "https://github.com/krishnaguptaa2003/KnowledgeScape",
    technologies: ["React.js", "Firebase", "Real-time Database", "Firebase Auth"]
  },
  {
    id: 6,
    title: "Employee Calibration",
    description: "Internal tool for HR to manage employee performance scores, built with .NET and React.",
    image: "/images/project6.png",
    alt: "Screenshot of Employee Calibration Tool",
    githubLink: "https://github.com/krishnaguptaa2003/Employee-Calibration-repo",
    comingSoon: true,
    technologies: [".NET", "React.js", "Chart.js", "REST API"]
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
    <section id="projects" className="py-20 bg-gray-50 px-5 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Latest Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.slice(0, visibleProjectCount).map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-gray-200 shadow-md p-6 hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 flex flex-col"
            >
              <img
                src="/images/project.jpg"
                alt={project.alt}
                width="400"
                height="240"
                loading="lazy"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                {project.comingSoon && (
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
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
                    className="flex-1 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md transition-colors duration-300"
                  >
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2" />
                    link
                  </a>
                ) : (
                  <button
                    className="flex-1 flex items-center justify-center bg-gray-200 text-gray-600 text-sm px-4 py-2 rounded-md cursor-not-allowed"
                    disabled
                  >
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2" />
                    Demo Soon
                  </button>
                )}
                
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center border border-gray-300 hover:bg-gray-100 text-sm px-4 py-2 rounded-md transition-colors duration-300"
                >
                  <CodeBracketIcon className="h-4 w-4 mr-2" />
                  Code
                </a>
                
                <button
                  onClick={() => openProjectModal(project)}
                  className="flex-1 flex items-center justify-center bg-gray-700 hover:bg-gray-800 text-white text-sm px-4 py-2 rounded-md transition-colors duration-300"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {allProjects.length > 3 && (
          <div className="text-center mt-10">
            <button
              onClick={toggleViewAllProjects}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md transition-colors duration-300"
            >
              {visibleProjectCount === allProjects.length ? "Show Less" : "View All Projects"}
            </button>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {showProjectModal && selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
          onClick={closeProjectModal}
        >
          <div 
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {selectedProject.title}
                </h3>
                {selectedProject.comingSoon && (
                  <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                    Demo Coming Soon
                  </span>
                )}
              </div>
              <button
                onClick={closeProjectModal}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <img
                src="/images/project.jpg"
                alt={selectedProject.alt}
                className="w-full h-auto rounded-lg mb-6"
                loading="lazy"
              />
              
              <p className="text-gray-700 mb-6">
                {selectedProject.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                {selectedProject.liveLink ? (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300"
                  >
                    <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2" />
                    Live Demo
                  </a>
                ) : (
                  <button
                    className="flex items-center bg-gray-200 text-gray-600 px-4 py-2 rounded-md cursor-not-allowed"
                    disabled
                  >
                    <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2" />
                    Demo Coming Soon
                  </button>
                )}
                
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-md transition-colors duration-300"
                >
                  <CodeBracketIcon className="h-5 w-5 mr-2" />
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