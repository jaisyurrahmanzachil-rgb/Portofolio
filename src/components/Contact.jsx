import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-800 text-white py-20 px-6 flex flex-col items-center"
    >
      <h2
        className="text-4xl font-bold text-cyan-400 mb-10 text-center"
        data-aos="fade-up"
      >
        Contact Me
      </h2>

      <p
        className="text-gray-300 text-center max-w-2xl mb-10"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Have a question or want to collaborate? Feel free to reach out via the
        form below or connect with me on social media.
      </p>

      <form
        action="https://getform.io/f/bzygzmea"  
        method="POST"
        className="w-full max-w-lg bg-gray-900 p-8 rounded-xl shadow-lg"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="message" className="block text-sm font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg hover:bg-cyan-300 transition"
        >
          Send Message
        </button>
      </form>

      <div
        className="flex gap-6 mt-10"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <a
          href="https://github.com/reezganteng1116-cyber"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          <i className="fab fa-github text-2xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/rahman-z-242330377?utm_source=share&utm_campaign=share_via
          utm_content=profile&utm_medium=android_app"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          <i className="fab fa-linkedin text-2xl"></i>
        </a>
        <a
          href="https://www.instagram.com/ez_zet07?utm_source=qr&igsh=b3Z2YXJxY3VxN2Zl"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          <i className="fab fa-instagram text-2xl"></i>
        </a>
        <a
          href="https://wa.me/6285784725547?text=Halo%20Jaisyurrahman,%20saya%20tertarik%20dengan%20portofoliomu!"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          <i className="fab fa-whatsapp text-2xl"></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;
