import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-gray-800 text-white flex flex-col md:flex-row items-center justify-center px-6 py-20 gap-10"
      data-aos="fade-up"
    >
      <div
        className="flex-shrink-0"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <img
          src="images/gw-1.jpg"
          alt="Profile"
          className="w-60 h-60 object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.5)] hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div
        className="max-w-xl text-center md:text-left"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <h1 className="text-5xl font-extrabold mb-4 leading-snug">
          Hi, I’m{" "}
          <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">
            Jaisyurrahman
          </span>
        </h1>

        <h2
          className="text-3xl font-semibold mb-4 text-cyan-400"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          Full-Stack Developer
        </h2>

        <p
          className="text-gray-300 leading-relaxed mb-6"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          I’m a passionate Full-Stack Developer with a love for creating clean,
          responsive, and user-friendly websites and applications. I enjoy
          learning new technologies and improving my coding skills.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <a
            href=" https://reezganteng1116-cyber.github.io/CV/"
            className="px-6 py-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.7)] transition-all duration-300"
          >
            View My CV
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-900 hover:shadow-[0_0_20px_rgba(34,211,238,0.7)] transition-all duration-300"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
