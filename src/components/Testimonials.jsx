import React, { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const testimonials = [
  {
    feedback: "Krishna delivered the most UI-pleasing experience I’ve seen. Clean, fast, and effective.",
    name: "Sanket Thakur",
    role: "Founder",
    company: "ZOFTFLO",
    stars: 5,
  },
  {
    feedback: "Krishna quickly adapted to real client needs and delivered responsive UI with modern aesthetics.",
    name: "Smit Mavani",
    role: "Tech Lead",
    company: "Teque7, Bhuj",
    stars: 4,
  },
  {
    feedback: "Amazing communicator and designer. Delivered the work ahead of deadline with clarity.",
    name: "Ravi Mehta",
    role: "Sr. Dev",
    company: "Freelancer",
    stars: 5,
  },
  {
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
    if (direction === "left") {
      container.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      container.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section id="testimonials" className="py-20 md:px-16 bg-white text-black relative px-5 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Customer Testimonials</h2>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-[55%] transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-black p-3 rounded-full shadow-md z-10"
        >
          <FaAngleLeft size={20} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-[55%] transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-black p-3 rounded-full shadow-md z-10"
        >
          <FaAngleRight size={20} />
        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide py-2 px-1"
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-sm bg-gray-100 p-6 rounded-xl border border-gray-200 shadow-md relative flex-shrink-0"
            >
              <div className="text-yellow-400 text-lg mb-2">
                {"★".repeat(t.stars)}{"☆".repeat(5 - t.stars)}
              </div>
              <p className="italic text-gray-700 mb-4">“{t.feedback}”</p>
              <div className="text-sm text-gray-600 font-medium">
                — {t.name}, {t.role}, {t.company}
              </div>
              <div className="text-5xl absolute top-2 left-4 text-gray-200 font-serif select-none">“</div>
              <div className="text-5xl absolute bottom-2 right-4 text-gray-200 font-serif select-none">”</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
