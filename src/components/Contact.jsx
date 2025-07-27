// src/components/Contact.jsx
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from "react-icons/fa6"; // Using FaXTwitter for consistency

const Contact = () => {
  const [messageStatus, setMessageStatus] = useState(null); // State to hold success/error message
  const [isSubmitting, setIsSubmitting] = useState(false); // State to disable button during submission
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable button
    setMessageStatus(null); // Clear previous messages
    setShowModal(false); // Hide any previous modal

    const formData = new FormData(e.target);
    const payload = {
      firstName: formData.get("firstName").trim(),
      lastName: formData.get("lastName").trim(),
      email: formData.get("email").trim(),
      phone: formData.get("phone").trim(),
      message: formData.get("message").trim(),
    };

    // --- Validation ---
    const nameRegex = /^[A-Za-z]{2,30}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Specific to Gmail as per your regex
    const phoneRegex = /^\d{10}$/;

    if (!payload.firstName || !nameRegex.test(payload.firstName)) {
      setMessageStatus({ type: 'error', text: "First name is required (letters only, 2-30 characters)." });
      setShowModal(true);
      setIsSubmitting(false);
      return;
    }
    if (!payload.lastName || !nameRegex.test(payload.lastName)) {
      setMessageStatus({ type: 'error', text: "Last name is required (letters only, 2-30 characters)." });
      setShowModal(true);
      setIsSubmitting(false);
      return;
    }
    if (!payload.email) {
      setMessageStatus({ type: 'error', text: "Email is required." });
      setShowModal(true);
      setIsSubmitting(false);
      return;
    }
    if (!emailRegex.test(payload.email)) {
      setMessageStatus({ type: 'error', text: "Please enter a valid Gmail address (example@gmail.com)." });
      setShowModal(true);
      setIsSubmitting(false);
      return;
    }
    if (payload.phone && !phoneRegex.test(payload.phone)) {
      setMessageStatus({ type: 'error', text: "Please enter a valid 10-digit phone number." });
      setShowModal(true);
      setIsSubmitting(false);
      return;
    }
    const wordCount = payload.message.split(/\s+/).filter(Boolean).length;
    if (wordCount < 3) {
      setMessageStatus({ type: 'error', text: "Message should have at least 3 words." });
      setShowModal(true);
      setIsSubmitting(false);
      return;
    }
    if (wordCount > 40) {
      setMessageStatus({ type: 'error', text: "Message should not exceed 40 words." });
      setShowModal(true);
      setIsSubmitting(false);
      return;
    }
    // --- End Validation ---

    try {
      const res = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let data = {};
      try {
        data = await res.json();
      } catch (jsonError) {
        console.error("Failed to parse JSON response:", jsonError);
        data = { success: false, error: `Server responded with non-JSON: ${res.status} ${res.statusText}` };
      }

      if (res.ok && data.success) {
        setMessageStatus({ type: 'success', text: "You have successfully sent details!" });
        e.target.reset(); // Clear form fields on success
      } else {
        if (res.status === 429) {
          setMessageStatus({ type: 'error', text: data.message || "Too many requests. Please try again later." });
        } else if (data.error) {
          setMessageStatus({ type: 'error', text: `Please try again: ${data.error}` });
        } else {
          setMessageStatus({ type: 'error', text: "Please try again, your form was not submitted." });
        }
      }
      setShowModal(true); // Show modal after processing response
    } catch (err) {
      console.error("An error occurred during form submission:", err);
      setMessageStatus({ type: 'error', text: `Please try again: ${err.message || "An unexpected error occurred."}` });
      setShowModal(true); // Show modal on network/unexpected error
    } finally {
      setIsSubmitting(false); // Re-enable button
    }
  };

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
                <a href="mailto:krishnaguptaa2003@gmail.com" className="text-blue-600 hover:underline" aria-label="Email Krishna Gupta at krishnaguptaa2003@gmail.com">
                  krishnaguptaa2003@gmail.com
                </a>
              </p>
              <p><strong>Phone:</strong> +91 9265709014</p>
              <p><strong>GitHub:</strong>{" "}
                <a href="https://github.com/krishnaguptaa2003" target="_blank" rel="noopener noreferrer" aria-label="Visit Krishna Gupta's GitHub profile">
                  https://github.com/krishnaguptaa2003
                </a>
              </p>
              <p><strong>LinkedIn:</strong>{" "}
                <a href="https://www.linkedin.com/in/krishnaguptaa2003/" target="_blank" rel="noopener noreferrer" aria-label="Visit Krishna Gupta's LinkedIn profile">
                  https://www.linkedin.com/in/krishnaguptaa2003/
                </a>
              </p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex space-x-5 pt-4 text-2xl">
              <a href="https://github.com/krishnaguptaa2003" target="_blank" rel="noopener noreferrer" aria-label="Visit Krishna Gupta's GitHub profile" className="text-gray-800 hover:text-black transition duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/krishnaguptaa2003/" target="_blank" rel="noopener noreferrer" aria-label="Visit Krishna Gupta's LinkedIn profile" className="text-[#0A66C2] hover:text-[#004182] transition duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                <FaLinkedin />
              </a>
              <a href="mailto:krishnaguptaa2003@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Send an email to Krishna Gupta" className="text-[#D44638] hover:text-red-600 transition duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
                <FaEnvelope />
              </a>
              <a href="https://x.com/MRKRISHNA_75" target="_blank" rel="noopener noreferrer" aria-label="Visit Krishna Gupta's X (Twitter) profile" className="text-black hover:text-gray-800 transition duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75">
                <FaXTwitter />
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            className="bg-white w-full max-w-[480px] rounded-lg shadow-lg border border-gray-200 px-5 py-6 space-y-4 animate-slideUp"
            onSubmit={handleSubmit}
          >
            <h3 className="text-xl font-semibold text-gray-800">Get in Touch</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                name="firstName"
                id="firstName" // Added id for label association
                placeholder="First Name"
                required
                className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                aria-label="First Name" // For accessibility
              />
              <input
                type="text"
                name="lastName"
                id="lastName" // Added id for label association
                placeholder="Last Name"
                required
                className="px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                aria-label="Last Name" // For accessibility
              />
            </div>
            <input
              type="email"
              name="email"
              id="email" // Added id for label association
              placeholder="Email"
              required
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              aria-label="Email Address" // For accessibility
            />
            <input
              type="tel"
              name="phone"
              id="phone" // Added id for label association
              placeholder="Phone (Optional)"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              aria-label="Phone Number (Optional)" // For accessibility
            />
            <textarea
              name="message"
              id="message" // Added id for label association
              placeholder="Your Message"
              rows="4"
              required
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              aria-label="Your Message" // For accessibility
            ></textarea>

            <div className="flex items-start gap-2 text-sm text-gray-600">
              <input type="checkbox" id="terms" required className="mt-1 accent-blue-500" />
              <label htmlFor="terms">I accept the terms & conditions</label>
            </div>

            <button
              type="submit"
              className={`w-full bg-[#ff6f00] text-white font-semibold py-2 rounded-md transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#e65c00]'} focus:outline-none focus:ring-2 focus:ring-[#ff6f00] focus:ring-opacity-75`} // Added focus states
              disabled={isSubmitting}
              aria-label={isSubmitting ? 'Sending message...' : 'Send Message'} // Dynamic aria-label
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Custom Modal for Feedback */}
      {showModal && messageStatus && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4" // Added p-4 for consistent padding from viewport edges
          role="dialog" // Accessibility: Defines the element as a dialog
          aria-modal="true" // Accessibility: Indicates that the dialog is modal
          aria-labelledby="modal-title" // Links to the modal's title
          aria-describedby="modal-description" // Links to the modal's message
        >
          <div className={`bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center ${
            messageStatus.type === 'success' ? 'border-t-4 border-green-500' : 'border-t-4 border-red-500'
          }`}>
            <h3 id="modal-title" className={`text-xl font-semibold mb-4 ${ // Added id for aria-labelledby
              messageStatus.type === 'success' ? 'text-green-700' : 'text-red-700'
            }`}>
              {messageStatus.type === 'success' ? 'Success!' : 'Error!'}
            </h3>
            <p id="modal-description" className="text-gray-700 mb-6">{messageStatus.text}</p> {/* Added id for aria-describedby */}
            <button
              onClick={() => setShowModal(false)}
              className={`px-4 py-2 rounded-md font-semibold transition duration-300 ${
                messageStatus.type === 'success' ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-red-500 hover:bg-red-600 text-white'
              } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75`} // Added focus states
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
