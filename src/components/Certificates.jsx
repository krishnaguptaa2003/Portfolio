import React, { useState, useEffect } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid'; // Import an X icon for closing modal

// Define your certificates data
// IMPORTANT: Replace '/images/certi.png' with actual, unique certificate image paths.
// For best performance and SEO, use optimized image files (e.g., compressed JPEGs or WebPs).
// Ensure these images are in your public/images folder if referenced directly like this.
const allCertificates = [
  { id: 1, title: "Infosys – JavaScript", image: "/images/certi.png", alt: "Infosys JavaScript Certificate" },
  { id: 2, title: "Infosys – React", image: "/images/certi.png", alt: "Infosys React Certificate" },
  { id: 3, title: "Infosys – HTML & CSS", image: "/images/certi.png", alt: "Infosys HTML & CSS Certificate" },
  { id: 4, title: "Infosys – UI/UX Basics", image: "/images/certi.png", alt: "Infosys UI/UX Basics Certificate" },
  { id: 5, title: "Infosys – SQL", image: "/images/certi.png", alt: "Infosys SQL Certificate" },
  { id: 6, title: "Infosys – Git & GitHub", image: "/images/certi.png", alt: "Infosys Git & GitHub Certificate" },
  // Add more certificates here if you have them
  // { id: 7, title: "Another Certificate", image: "/images/another-cert.png", alt: "Another Certificate Description" },
];

const Certificates = () => {
  // State for mod
  const [showModal, setShowModal] = useState(false);
  const [selectedCertImage, setSelectedCertImage] = useState(null);
  const [selectedCertTitle, setSelectedCertTitle] = useState("");

  // State for "View All Certificates" functionality
  const initialCertCount = 3; // Number of certificates to show initially
  const [visibleCertCount, setVisibleCertCount] = useState(initialCertCount);

  // Function to open the certificate modal
  const openCertificateModal = (cert) => {
    setSelectedCertImage(cert.image);
    setSelectedCertTitle(cert.title);
    setShowModal(true);
  };

  // Function to close the certificate modal
  const closeCertificateModal = () => {
    setShowModal(false);
    setSelectedCertImage(null);
    setSelectedCertTitle("");
  };

  // Function to toggle viewing all certificates
  const toggleViewAllCertificates = () => {
    if (visibleCertCount === allCertificates.length) {
      setVisibleCertCount(initialCertCount); // Show initial count
    } else {
      setVisibleCertCount(allCertificates.length); // Show all
    }
  };

  // Effect to handle body scroll when modal is open/closed (Accessibility/UX)
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    } else {
      document.body.style.overflow = 'unset'; // Allow scrolling when modal is closed
    }
    return () => {
      document.body.style.overflow = 'unset'; // Cleanup on component unmount
    };
  }, [showModal]);

  return (
    <section id="certificates" className="py-20 bg-[#1a1a2e] text-white px-5 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" aria-label="My Certifications and Achievements">Certificates</h2> {/* Added aria-label for SEO/A11y */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCertificates.slice(0, visibleCertCount).map((cert) => ( // Slice to show only visible certificates
            <div
              key={cert.id} // Use unique ID for key
              className="bg-[#1e1e30] rounded-xl border border-[#2f2f45] shadow-md p-4 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1" // Added subtle hover effect
              role="listitem" // Accessibility: indicates this is an item in a list
              aria-labelledby={`cert-title-${cert.id}`} // Links to the certificate title
            >
              {/* Certificate Image */}
              <img
                src={cert.image}
                alt={cert.alt || cert.title} // Use more specific alt text if available
                width="400" // Explicit width for CLS prevention (Performance)
                height="300" // Explicit height for CLS prevention (Performance) - Adjust based on actual image aspect ratio
                loading="lazy" // Lazy loading for off-screen images (Performance)
                className="w-full h-auto object-contain rounded-t-lg" // Added mb-3 for spacing
              />

              {/* Title Bar */}
              <div className="text-center py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-b-lg mb-4"> {/* Increased mb for button spacing */}
                <p id={`cert-title-${cert.id}`} className="text-sm font-semibold text-white">{cert.title}</p> {/* Added id for aria-labelledby */}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <button
                  onClick={() => openCertificateModal(cert)}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md font-medium transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" // Enhanced animations, focus states
                  aria-label={`View full certificate for ${cert.title}`} // Accessibility: Describes button purpose
                >
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All/Show Less Button */}
        {allCertificates.length > initialCertCount && ( // Only show button if there are more certificates
          <div className="text-center mt-10">
            <button
              onClick={toggleViewAllCertificates}
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75" // Enhanced animations, focus states
              aria-label={visibleCertCount === allCertificates.length ? "Show fewer certificates" : "View all certificates"} // Dynamic aria-label
            >
              {/* PROFESSIONAL CORRECTION FOR BUTTON TEXT BELOW */}
              {visibleCertCount === allCertificates.length ? "Show Less" : "View All Certificates"}
            </button>
          </div>
        )}
      </div>

      {/* Certificate Modal */}
      {showModal && selectedCertImage && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          aria-describedby="cert-modal-description"
        >
          <div className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-200">
              <h3 id="cert-modal-title" className="text-xl font-semibold text-gray-800">{selectedCertTitle}</h3>
              <button
                onClick={closeCertificateModal}
                className="text-gray-500 hover:text-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 rounded-full p-1"
                aria-label="Close certificate view"
              >
                <XMarkIcon className="h-6 w-6" /> {/* Heroicons X icon */}
              </button>
            </div>

            {/* Modal Body - Image */}
            <div className="flex-grow overflow-y-auto p-4 flex items-center justify-center">
              <img
                src={selectedCertImage}
                alt={selectedCertTitle}
                className="max-w-full max-h-full object-contain rounded-lg shadow-md"
                id="cert-modal-description" // Linked for aria-describedby
                width="800" // Example width for modal image
                height="600" // Example height for modal image - adjust based on common cert dimensions
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
