import React from "react";

const certificates = [
  { title: "Infosys – JavaScript", image: "/images/certi.png", link: "#" },
  { title: "Infosys – React", image: "/images/certi.png", link: "#" },
  { title: "Infosys – HTML & CSS", image: "/images/certi.png", link: "#" },
  { title: "Infosys – UI/UX Basics", image: "/images/certi.png", link: "#" },
  { title: "Infosys – SQL", image: "/images/certi.png", link: "#" },
  { title: "Infosys – Git & GitHub", image: "/images/certi.png", link: "#" },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-[#1a1a2e] text-white px-5 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Certificates</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-[#1e1e30] rounded-xl border border-[#2f2f45] shadow-md p-4 hover:shadow-lg transition duration-300"
            >
              {/* Certificate Image (no bottom border radius) */}
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-auto object-contain rounded-t-lg"
              />

              {/* Title Bar (no top border radius) */}
              <div className="text-center py-2 bg-gradient-to-r from-blue-500 to-purple-600 mb-3 rounded-b-lg">
                <p className="text-sm font-semibold text-white">{cert.title}</p>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a
                  href={cert.link}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md font-medium transition"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-semibold transition"
          >
            View All Certificates
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
