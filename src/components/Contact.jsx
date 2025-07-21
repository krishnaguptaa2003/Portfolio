import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20 px-5 sm:px-10">
      <div className="max-w-screen-xl mx-auto">
        {/* SECTION HEADER */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 leading-tight text-gray-900">
          <span className="text-[#ff6f00]">Let’s Connect</span> & Collaborate
        </h2>

        {/* CONTACT BLOCK */}
        <div className="grid lg:grid-cols-[1fr_480px] gap-10 lg:gap-20 items-start">
          {/* LEFT BLOCK */}
          <div className="space-y-5 text-gray-700 text-[16px] text-justify">
            <p>
              Whether you have an opportunity, project, or internship — I'd love to hear from you.
              I'm currently seeking full-time developer roles and freelance collaborations.
            </p>

            <div className="space-y-2 text-[15px]">
              <p><strong>Email:</strong>{" "}
                <a href="mailto:krishnagupta.design@gmail.com" className="text-blue-600 hover:underline">
                  krishnagupta.design@gmail.com
                </a>
              </p>
              <p><strong>Phone:</strong> +91 8200021444</p>
              <p><strong>GitHub:</strong>{" "}
                <a href="https://github.com/krishna-gupta" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                  github.com/krishna-gupta
                </a>
              </p>
              <p><strong>LinkedIn:</strong>{" "}
                <a href="https://linkedin.com/in/krishna-gupta" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                  linkedin.com/in/krishna-gupta
                </a>
              </p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex space-x-5 pt-4 text-2xl">
              <a href="https://github.com/krishna-gupta" target="_blank" rel="noreferrer">
                <FaGithub className="text-gray-800 hover:text-black transition duration-300 hover:scale-110" />
              </a>
              <a href="https://linkedin.com/in/krishna-gupta" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-[#0A66C2] hover:text-[#004182] transition duration-300 hover:scale-110" />
              </a>
              <a href="mailto:krishnagupta.design@gmail.com" target="_blank" rel="noreferrer">
                <FaEnvelope className="text-[#D44638] hover:text-red-600 transition duration-300 hover:scale-110" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaXTwitter className="text-black hover:text-gray-800 transition duration-300 hover:scale-110" />
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            className="bg-white w-full max-w-[480px] rounded-lg shadow-lg border border-gray-200 px-5 py-6 space-y-4 animate-slideUp"
            onSubmit={(e) => {
              e.preventDefault();

              const formData = new FormData(e.target);
              const payload = {
                firstName: formData.get("firstName"),
                lastName: formData.get("lastName"),
                email: formData.get("email"),
                phone: formData.get("phone"),
                message: formData.get("message"),
              };

              fetch("/.netlify/functions/send-email", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json", // 👈 add this
                },
                body: JSON.stringify(payload),
              })

                .then((res) => res.json())
                .then((data) => {
                  if (data.success) {
                    alert("Message sent!");
                    e.target.reset();
                  } else {
                    alert("Failed to send message: " + data.error);
                  }
                })
                .catch((err) => {
                  alert("An error occurred: " + err.message);
                });
            }}

          >
            <h3 className="text-xl font-semibold text-gray-800">Get in Touch</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone (Optional)"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            ></textarea>

            <div className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" id="terms" required className="mt-1 accent-blue-500" />
              <label htmlFor="terms">I accept the terms & conditions</label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff6f00] hover:bg-[#e65c00] text-white font-semibold py-2 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
