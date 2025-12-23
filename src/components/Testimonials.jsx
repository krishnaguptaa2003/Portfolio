import React, { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

// Add unique IDs to testimonials for better React keying and potential future use
const testimonials = [
  {
    id: 1, // Added unique ID
    feedback: "Krishna delivered the most UI-pleasing experience I’ve seen. Clean, fast, and effective.",
    name: "Sanket Thakur",
    role: "Founder",
    company: "ZOFTFLO",
    stars: 5,
  },
  {
    id: 2, // Added unique ID
    feedback: "Krishna quickly adapted to real client needs and delivered responsive UI with modern aesthetics.",
    name: "Smit Mavani",
    role: "Tech Lead",
    company: "Teque7, Bhuj",
    stars: 4,
  },
  {
    id: 3, // Added unique ID 
    feedback: "Amazing communicator and designer. Delivered the work ahead of deadline with clarity.",
    name: "Ravi Mehta",
    role: "Sr. Dev",
    company: "Freelancer",
    stars: 5,
  },
  {
    id: 4, // Added unique ID
    feedback: "Krishna has a clear understanding of UX principles and works fast.",
    name: "Alok Patel",
    role: "UI Designer",
    company: "DesignSpark",
    stars: 4,
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) { // Ensure container exists before attempting to scroll
      if (direction === "left") {
        container.scrollBy({ left: -300, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 300, behavior: "smooth" });
      }
    }
  };

  return (
    <section id="testimonials" className="py-20 md:px-16 bg-white text-black relative px-5 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12" aria-label="What my clients and colleagues say about my work">Customer Testimonials</h2> {/* Enhanced aria-label for SEO/A11y */}

        {/* Scroll Buttons - Changed to <button> for semantics and added A11y/effects */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-black p-3 rounded-full shadow-md z-10 transition-all duration-200 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
          aria-label="Scroll testimonials left" // Accessibility: Describes button purpose
          type="button" // Explicitly define as a button
        >
          <FaAngleLeft size={20} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-black p-3 rounded-full shadow-md z-10 transition-all duration-200 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
          aria-label="Scroll testimonials right" // Accessibility: Describes button purpose
          type="button" // Explicitly define as a button
        >
          <FaAngleRight size={20} />
        </button>

        {/* Scrollable Cards Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide py-2 px-1 snap-x snap-mandatory" // Added snap-x and snap-mandatory for better scroll experience
          role="region" // Accessibility: Defines a perceivable region of the content
          aria-label="Customer Testimonials Carousel" // Accessibility: Labels the region
        >
          {testimonials.map((t) => ( // Use t.id for key
            <div
              key={t.id} // Using unique ID for key
              className="min-w-[300px] max-w-sm bg-gray-100 p-6 rounded-xl border border-gray-200 shadow-md relative flex-shrink-0 snap-center hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1" // Added hover effect, snap-center
              role="listitem" // Accessibility: Indicates this is an item in a list
              aria-labelledby={`testimonial-name-${t.id}`} // Links to the person's name
              aria-describedby={`testimonial-feedback-${t.id}`} // Links to the feedback
            >
              <div className="text-yellow-400 text-lg mb-2" aria-label={`${t.stars} out of 5 stars`}> {/* Accessibility: Describes star rating */}
                {"★".repeat(t.stars)}{"☆".repeat(5 - t.stars)}
              </div>
              <p id={`testimonial-feedback-${t.id}`} className="italic text-gray-700 mb-4">“{t.feedback}”</p> {/* Added id for aria-describedby */}
              <div className="text-sm text-gray-600 font-medium">
                <span id={`testimonial-name-${t.id}`}>— {t.name}</span>, {t.role}, {t.company} {/* Added id for aria-labelledby */}
              </div>
              {/* Decorative quotes hidden from screen readers */}
              <div className="text-5xl absolute top-2 left-4 text-gray-200 font-serif select-none" aria-hidden="true">“</div>
              <div className="text-5xl absolute bottom-2 right-4 text-gray-200 font-serif select-none" aria-hidden="true">”</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
