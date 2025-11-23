import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const services = [
    {
      title: "Web Development",
      desc: "Build responsive and modern websites with optimized performance.",
      icon: "💻",
    },
    {
      title: "UI/UX Design",
      desc: "Design clean, intuitive, and user-friendly interfaces for the best experience.",
      icon: "🎨",
    },
    {
      title: "Mobile Apps",
      desc: "Develop cross-platform mobile applications with React Native.",
      icon: "📱",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen bg-gray-800 text-white py-20 px-6"
      data-aos="fade-up"
    >
      <h2
        className="text-4xl font-bold text-center mb-12 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
        data-aos="fade-down"
      >
        Services
      </h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transform hover:-translate-y-2 transition-all duration-300"
            data-aos="zoom-in-up"
            data-aos-delay={index * 150}
          >
            <div className="text-5xl mb-4 text-cyan-400">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-cyan-300">
              {service.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
