import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Komponen wrapper agar AOS hanya dijalankan sekali
function Root() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi (ms)
      once: true, // animasi hanya jalan sekali
      easing: "ease-in-out", // gaya gerak animasi
    });
  }, []);

  return <App />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);

export default Root;