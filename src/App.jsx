import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // durasi animasi (ms)
      once: true, // animasi hanya muncul sekali
      offset: 100, // jarak trigger animasi
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="bg-gray-900 scroll-smooth">
      {/* Navbar tetap di atas */}
      <Navbar />

      {/* Konten utama */}
      <main className="pt-16">
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>

      {/* Footer di bawah */}
      <Footer />
    </div>
  );
}

export default App;
