import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      img: "images/project_1.jpeg",
      link: " https://reezganteng1116-cyber.github.io/portofolio/",
      sneakPeak: "Ini adalah contoh landing page portofolio waktu pertama kali saya belajar menggunakan HTML dan CSS sederhana",
    },
    {
      title: "E-commerce App",
      img: "images/project_2.jpeg",
      link: "https://www.canva.com/design/DAG0u3oxbr4/JNlYdl5CT-3DJTAzekpjZw/edit?utm_content=DAG0u3oxbr4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      sneakPeak: "Ini adalah project mobile app yang sedang saya kembangkan, dengan menggunakan teknology Expo dan React Native, saya targetkan tahun depan sudah rilis di playstore",
    },
    {
      title: "Chat Application",
      img: "images/project_3.jpeg",
      link: "http://127.0.0.1:5500/index.html",
      sneakPeak: "Ini adalah project database menggunakan teknology JavaScript dan Python, dan menggunakan fitur AI lebah sederhana",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 text-white py-20 px-6"
      data-aos="fade-up"
    > 
      <h2
        className="text-4xl font-bold text-center mb-12 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
        data-aos="fade-down"
      >
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transform hover:-translate-y-2 transition-all duration-300"
            data-aos="zoom-in-up"
            data-aos-delay={index * 150}
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-52 object-cover transition-transform duration-500 hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">
                {project.title}
              </h3>
              <p
              className="text-white-400 font-semibold">{project.sneakPeak}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-500 font-semibold"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
