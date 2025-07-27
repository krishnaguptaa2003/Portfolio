import React, { useState, useEffect } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid'; // Import X icon for closing modal
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'; // Icons for live demo and GitHub links

// Define your projects data
// IMPORTANT:
// 1. Replace '/images/project.png' with actual, unique project screenshot paths.
//    Optimized images (compressed JPEGs/WebPs) are crucial for performance.
// 2. Replace 'liveLink' and 'githubLink' with actual URLs to your deployed projects and GitHub repos.
const allProjects = [
  {
    id: 1,
    title: "EduTech",
    description: "A donation-based learning platform offering free courses, secure donor tracking, and AI-based enhancements.",
    image: "/images/project1.png", // Placeholder - replace with actual screenshot
    alt: "Screenshot of EduTech learning platform",
    liveLink: "https://edutech-demo.netlify.app", // Replace with actual live link
    githubLink: "https://github.com/krishnaguptaa2003/EduTech-repo", // Replace with actual GitHub link
  },
  {
    id: 2,
    title: "Scrpcy Dashboard",
    description: "A smart internal network app using React and .NET for seamless management of employee data.",
    image: "/images/project2.png", // Placeholder - replace with actual screenshot
    alt: "Screenshot of Scrpcy Dashboard employee management system",
    liveLink: "https://scrpcy-dashboard.netlify.app", // Replace with actual live link
    githubLink: "https://github.com/krishnaguptaa2003/Scrpcy-Dashboard-repo", // Replace with actual GitHub link
  },
  {
    id: 3,
    title: "Hospital Management",
    description: "Desktop-style system to manage hospital workflows and patient records with .NET backend and SQL.",
    image: "/images/project3.png", // Placeholder - replace with actual screenshot
    alt: "Screenshot of Hospital Management System",
    liveLink: "https://hospital-mgmt-demo.netlify.app", // Replace with actual live link
    githubLink: "https://github.com/krishnaguptaa2003/Hospital-Management-repo", // Replace with actual GitHub link
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Modern personal portfolio using React and Tailwind, fully responsive and Figma-aligned. This is the site you are currently viewing!",
    image: "/images/project4.png", // Placeholder - replace with actual screenshot
    alt: "Screenshot of Krishna Gupta's Portfolio Website",
    liveLink: "https://krishnaguptaportfolio.netlify.app", // This site's live link
    githubLink: "https://github.com/krishnaguptaa2003/Portfolio", // This site's GitHub link
  },
  {
    id: 5,
    title: "Quiz App",
    description: "A dynamic quiz application with real-time score, built using React.js and Firebase.",
    image: "/images/project5.png", // Placeholder - replace with actual screenshot
    alt: "Screenshot of Quiz Application",
    liveLink: "https://quiz-app-demo.netlify.app", // Replace with actual live link
    githubLink: "https://github.com/krishnaguptaa2003/Quiz-App-repo", // Replace with actual GitHub link
  },
  {
    id: 6,
    title: "Employee Calibration",
    description: "Internal tool for HR to manage employee performance scores, built with .NET and React.",
    image: "/images/project6.png", // Placeholder - replace with actual screenshot
    alt: "Screenshot of Employee Calibration Tool",
    liveLink: "https://employee-calibration-demo.netlify.app", // Replace with actual live link
    githubLink: "https://github.com/krishnaguptaa2003/Employee-Calibration-repo", // Replace with actual GitHub link
  },
];

const Projects = () => {
  // State for project modal
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // State for "View All Projects" functionality
  const initialProjectCount = 3; // Number of projects to show initially
  const [visibleProjectCount, setVisibleProjectCount] = useState(initialProjectCount);

  // Function to open the project modal
  const openProjectModal = (project) => {
    setSelectedProject(project);
    setShowProjectModal(true);
  };

  // Function to close the project modal
  const closeProjectModal = () => {
    setShowProjectModal(false);
    setSelectedProject(null);
  };

  // Function to toggle viewing all projects
  const toggleViewAllProjects = () => {
    if (visibleProjectCount === allProjects.length) {
      setVisibleProjectCount(initialProjectCount); // Show initial count
    } else {
      setVisibleProjectCount(allProjects.length); // Show all
    }
  };

  // Effect to handle body scroll when modal is open/closed (Accessibility/UX)
  useEffect(() => {
    if (showProjectModal) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    } else {
      document.body.style.overflow = 'unset'; // Allow scrolling when modal is closed
    }
    return () => {
      document.body.style.overflow = 'unset'; // Cleanup on component unmount
    };
  }, [showProjectModal]);

  return (
    <section id="projects" className="py-20 bg-gray-50 px-5 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900" aria-label="My Latest Projects and Portfolio">Latest Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.slice(0, visibleProjectCount).map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl border border-gray-200 shadow-md p-6 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col" // flex-col is crucial for consistent height
              role="listitem"
              aria-labelledby={`project-title-${project.id}`}
            >
              <img
                src="public\images\project.jpg"
                alt={project.alt || project.title}
                width="400"
                height="240"
                loading="lazy"
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 id={`project-title-${project.id}`} className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p> {/* flex-grow makes description fill available space */}
              
              {/* CTA Buttons for each project - Reverted to original structure */}
              <div className="flex gap-3 mt-auto justify-center items-end" style={{ minHeight: '48px' }}> {/* mt-auto pushes this div to bottom. minHeight reserves space for max buttons. */}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md font-medium transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2" /> Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center border border-gray-400 text-gray-800 hover:bg-gray-200 text-sm px-4 py-2 rounded-md font-medium transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    <CodeBracketIcon className="h-4 w-4 mr-2" /> GitHub
                  </a>
                )}
                <button
                  onClick={() => openProjectModal(project)}
                  className="inline-flex items-center bg-gray-600 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-md font-medium transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
                  aria-label={`View more details about ${project.title}`}
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All/Show Less Projects Button */}
        {allProjects.length > initialProjectCount && ( // Only show button if there are more projects
          <div className="text-center mt-10">
            <button
              onClick={toggleViewAllProjects}
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
              aria-label={visibleProjectCount === allProjects.length ? "Show fewer projects" : "View all projects"}
            >
              {visibleProjectCount === allProjects.length ? "Show Less" : "View All Projects"}
            </button>
          </div>
        )}
      </div>

      {/* Project Details Modal (remains the same as before) */}
      {showProjectModal && selectedProject && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          aria-describedby="project-modal-description"
        >
          <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-200">
              <h3 id="project-modal-title" className="text-2xl font-semibold text-gray-800">{selectedProject.title}</h3>
              <button
                onClick={closeProjectModal}
                className="text-gray-500 hover:text-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 rounded-full p-1"
                aria-label="Close project details"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Body - Image and Description */}
            <div className="flex-grow overflow-y-auto p-4">
              <img
                src={selectedProject.image}
                alt={selectedProject.alt || selectedProject.title}
                className="w-full h-auto object-cover rounded-lg shadow-md mb-4"
                width="800" // Example width for modal image
                height="480" // Example height for modal image (16:9 aspect)
              />
              <p id="project-modal-description" className="text-gray-700 text-base leading-relaxed">{selectedProject.description}</p>
              
              {/* Modal CTA Links */}
              <div className="flex gap-4 mt-6 justify-center">
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    aria-label={`View live demo of ${selectedProject.title}`}
                  >
                    <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2" /> Live Demo
                  </a>
                )}
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center border border-gray-400 text-gray-800 hover:bg-gray-200 px-6 py-3 rounded-md font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
                    aria-label={`View GitHub repository for ${selectedProject.title}`}
                  >
                    <CodeBracketIcon className="h-5 w-5 mr-2" /> GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;