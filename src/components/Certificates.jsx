import React, { useState } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid';

const allCertificates = [
  { 
    id: 1, 
    title: "JavaScript",
    issuer: "Infosys Springboard",
    date: "Tuesday, January 17th 2023",
    image: "/images/Certificates/JavaScript.jpg",
    alt: "JavaScript Course Completion Certificate from Infosys Springboard",
    skills: ["Fundamentals", "Functions", "Objects", "Arrays", "DOM Manipulation"]
  },
  { 
    id: 2, 
    title: "Java Language Features",
    issuer: "Infosys Springboard",
    date: "Thursday, March 2nd 2023",
    image: "/images/Certificates/Java Language Features.jpg",
    alt: "Java Language Features Course Completion Certificate from Infosys Springboard",
    skills: ["Core Java Concepts", "Data Types", "Control Flow", "Object-Oriented Programming (OOP)"]
  },
  { 
    id: 3, 
    title: "Data Structures in C", 
    issuer: "Great Learning Academy",
    date: "December 2022",
    image: "/images/Certificates/Data Structures in C.jpg",
    alt: "Data Structures in C Certificate from Great Learning Academy",
    skills: ["Pointers", "Arrays", "Linked Lists", "Stacks", "Queues", "Binary Trees"]
  },
  { 
    id: 4, 
    title: "CSS3", 
    issuer: "Infosys Springboard",
    date: "Tuesday, January 17th 2023",
    image: "/images/Certificates/CSS3.jpg",
    alt: "CSS3 Course Completion Certificate from Infosys Springboard",
    skills: ["Advanced Selectors", "Flexbox", "Grid Layout", "Animations", "Responsive Design"]
  },
  { 
    id: 5,
    title: "HTML5 - The Language",
    issuer: "Infosys Springboard",
    date: "Tuesday, January 17th 2023",
    image: "/images/Certificates/HTML5 - The Language.jpg",
    alt: "HTML5 Course Completion Certificate from Infosys Springboard",
    skills: ["Semantic HTML5", "Multimedia Elements", "Forms and Input Types", "APIs"]
  },
  { 
    id: 6, 
    title: "CSS", 
    issuer: "SoloLearn",
    date: "18 June, 2022",
    image: "/images/Certificates/CSS.jpg",
    alt: "CSS Course Certificate from SoloLearn",
    skills: ["Styling", "Cascading", "Box Model", "Selectors", "Layout"]
  },
  {
    id: 7,
    title: "HTML",
    issuer: "SoloLearn",
    date: "18 June, 2022",
    image: "/images/Certificates/HTML.jpg",
    alt: "HTML Course Certificate from SoloLearn",
    skills: ["Structure", "Tags", "Attributes", "Lists", "Tables"]
  }
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
  };

  const toggleViewAllCertificates = () => {
    setVisibleCertCount(prev => 
      prev === allCertificates.length ? 3 : allCertificates.length
    );
  };

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
                <div className="overflow-hidden rounded-lg mb-4 bg-gray-800 h-48">
                  <img
                    src={cert.image}
                    alt={cert.alt}
                    width="400"
                    height="300"
                    loading="lazy"
                    className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
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
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeCertificateModal}
        >
          <div 
            className="bg-[#1e1e30] rounded-xl shadow-2xl border border-[#2f2f45] max-w-4xl w-full max-h-[90vh] overflow-y-auto"
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
                  src={selectedCert.image}
                  alt={selectedCert.alt}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
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