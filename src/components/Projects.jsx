import React from "react";

const projects = [
  {
    title: "EduTech",
    description: "A donation-based learning platform offering free courses, secure donor tracking, and AI-based enhancements.",
    image: "/images/project.png",
    link: "#",
  },
  {
    title: "Scrpcy Dashboard",
    description: "A smart internal network app using React and .NET for seamless management of employee data.",
    image: "/images/project.png",
    link: "#",
  },
  {
    title: "Hospital Management",
    description: "Desktop-style system to manage hospital workflows and patient records with .NET backend and SQL.",
    image: "/images/project.png",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "Modern personal portfolio using React and Tailwind, fully responsive and Figma-aligned.",
    image: "/images/project.png",
    link: "#",
  },
  {
    title: "Quiz App",
    description: "A dynamic quiz application with real-time score, built using React.js and Firebase.",
    image: "/images/project.png",
    link: "#",
  },
  {
    title: "Employee Calibration",
    description: "Internal tool for HR to manage employee performance scores, built with .NET and React.",
    image: "/images/project.png",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 px-5 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Latest Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-md p-6 hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              <a
                href={project.link}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
