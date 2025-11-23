import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <footer
      className="bg-gray-950 text-gray-400 py-6 text-center border-t border-gray-800 relative overflow-hidden"
      data-aos="fade-up"
    >
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse"></div>

      <p className="text-sm md:text-base">
        © {new Date().getFullYear()}{" "}
        <span className="text-cyan-400 font-semibold hover:text-cyan-300 transition">
          Jaisyurrahman
        </span>
        . All rights reserved.
      </p>
      <div className="flex justify-center mt-2">
        <span className="block w-8 h-[1px] bg-cyan-400/40 hover:w-16 transition-all duration-500"></span>
      </div>
    </footer>
  );
}

export default Footer;
