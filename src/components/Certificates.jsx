import React, { useState, useEffect } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid';

const allCertificates = [
  { 
    id: 1, 
    title: "JavaScript Fundamentals", 
    issuer: "Infosys Springboard",
    date: "June 2023",
    image: "/images/cert-js.png", 
    alt: "JavaScript Fundamentals Certificate from Infosys",
    skills: ["ES6 Syntax", "DOM Manipulation", "Async Programming"]
  },
  { 
    id: 2, 
    title: "React.js Development", 
    issuer: "Infosys Springboard",
    date: "July 2023",
    image: "/images/cert-react.png", 
    alt: "React.js Development Certificate from Infosys",
    skills: ["Components", "Hooks", "Context API", "React Router"]
  },
  { 
    id: 3, 
    title: "HTML & CSS Mastery", 
    issuer: "Infosys Springboard",
    date: "May 2023",
    image: "/images/cert-html-css.png", 
    alt: "HTML & CSS Certificate from Infosys",
    skills: ["Semantic HTML", "CSS Grid", "Flexbox", "Responsive Design"]
  },
  { 
    id: 4, 
    title: "UI/UX Principles", 
    issuer: "Infosys Springboard",
    date: "August 2023",
    image: "/images/cert-uiux.png", 
    alt: "UI/UX Basics Certificate from Infosys",
    skills: ["Wireframing", "Prototyping", "User Research", "Figma"]
  },
  { 
    id: 5, 
    title: "Database Fundamentals", 
    issuer: "Infosys Springboard",
    date: "September 2023",
    image: "/images/cert-sql.png", 
    alt: "SQL Certificate from Infosys",
    skills: ["SQL Queries", "Database Design", "Normalization", "Indexing"]
  },
  { 
    id: 6, 
    title: "Version Control with Git", 
    issuer: "Infosys Springboard",
    date: "October 2023",
    image: "/images/cert-git.png", 
    alt: "Git & GitHub Certificate from Infosys",
    skills: ["Branching", "Merging", "GitHub", "Collaborative Workflows"]
  },
];

const Certificates = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [visibleCertCount, setVisibleCertCount] = useState(3);

  const openCertificateModal = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  const closeCertificateModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedCert(null), 300);
  };

  const toggleViewAllCertificates = () => {
    setVisibleCertCount(prev => 
      prev === allCertificates.length ? 3 : allCertificates.length
    );
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showModal]);

  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-[#0a0e17] to-[#1a1a2e] px-5 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-4xl font-bold text-center mb-16"
          aria-label="My Certifications and Achievements"
          style={{
            animation: 'fadeInUp 0.8s ease-out both',
            animationDelay: '0.1s'
          }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Certifications
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCertificates.slice(0, visibleCertCount).map((cert, index) => (
            <div
              key={cert.id}
              className="relative overflow-hidden group bg-[#1e1e30] rounded-xl border border-[#2f2f45] hover:border-blue-400/30 p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              style={{
                animation: 'fadeInUp 0.8s ease-out both',
                animationDelay: `${0.2 + index * 0.1}s`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src="/images/certi.png"
                    alt={cert.alt}
                    width="400"
                    height="300"
                    loading="lazy"
                    className="w-full h-48 object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-300">{cert.issuer}</p>
                  <p className="text-xs text-gray-400 mt-1">{cert.date}</p>
                </div>
                
                <button
                  onClick={() => openCertificateModal(cert)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 rounded-md transition-all duration-300"
                >
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>

        {allCertificates.length > 3 && (
          <div 
            className="text-center mt-12"
            style={{
              animation: 'fadeInUp 0.8s ease-out both',
              animationDelay: '0.5s'
            }}
          >
            <button
              onClick={toggleViewAllCertificates}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-md transition-all duration-300 hover:shadow-lg"
            >
              {visibleCertCount === allCertificates.length ? "Show Less" : "View All Certificates"}
            </button>
          </div>
        )}
      </div>

      {/* Certificate Modal */}
      {showModal && selectedCert && (
        <div 
          className={`fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${
            showModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeCertificateModal}
        >
          <div 
            className={`bg-[#1e1e30] rounded-xl shadow-2xl border border-[#2f2f45] max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
              showModal ? 'scale-100' : 'scale-95'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-[#2f2f45]">
              <div>
                <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
                <p className="text-gray-300 text-sm">{selectedCert.issuer} • {selectedCert.date}</p>
              </div>
              <button
                onClick={closeCertificateModal}
                className="p-1 rounded-full hover:bg-[#2f2f45] text-gray-300"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex justify-center mb-6">
                <img
                  src="/images/certi.png"
                  alt={selectedCert.alt}
                  className="max-w-full max-h-[60vh] object-contain rounded-lg"
                  loading="eager"
                />
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold text-white mb-3">Skills Validated:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-[#2f2f45] text-blue-300 text-xs px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Certificates;