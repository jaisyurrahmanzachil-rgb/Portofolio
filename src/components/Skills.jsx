import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  const [progress, setProgress] = useState(Array(10).fill(0));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });

    const timer = setTimeout(() => {
      setProgress([100, 97, 93, 80, 78, 80, 75, 70, 60, 70, 80, 45]);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: "HTML", img: "images/Icon_HTML.png" },
    { name: "CSS", img: "images/Icon_CSS.png" },
    { name: "JavaScript", img: "images/Icon_JS.png" },
    { name: "React-JS", img: "images/Icon_ReactJS.png" },
    { name: "Tailwind", img: "images/Icon_Tailwind.png" },
    { name: "Node.js", img: "images/Icon_NodeJS.png" },
    { name: "Vite", img: "images/Icon_Vite.png" },
    { name: "React-Native", img: "images/Icon_ReactNative.png" },
    { name: "Dart", img: "images/Icon_Dart.png"},
    { name: "Bootstrap", img: "images/Icon_Bootstrap.png"},
    { name: "Python", img: "images/Icon_Python.png"},
    { name: "PHP", img: "images/Icon_Php.png"},
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-900 text-white py-20 px-6"
      data-aos="fade-up"
    >
      <h2
        className="text-4xl font-bold text-center mb-12 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
        data-aos="fade-down"
      >
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-20 h-20 object-contain mb-3"
            />
            <p className="text-lg font-semibold text-cyan-300 mb-2">
              {skill.name}
            </p>
            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
              <div
                className="bg-cyan-400 h-2 rounded-full transition-all duration-[5000ms] ease-out"
                style={{ width: `${progress[index]}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400 mt-1">{progress[index]}%</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
