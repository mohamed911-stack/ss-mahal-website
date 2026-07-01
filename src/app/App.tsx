import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { EventsPage } from "./pages/EventsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ContactPage } from "./pages/ContactPage";
import ssmahalLogo from "../assets/ss_mahal_logo.png";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();
  const [fadeClass, setFadeClass] = useState("opacity-0 pointer-events-none");

  useEffect(() => {
    // Show loader on page transition
    setFadeClass("opacity-100 pointer-events-auto");

    const timer = setTimeout(() => {
      // Fade out loader after 600ms
      setFadeClass("opacity-0 pointer-events-none");
    }, 600);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen">
      {/* ── PREMIUM TRANSITION PAGE LOADER ── */}
      <div
        className={`fixed inset-0 z-[9999] bg-red-950 flex flex-col items-center justify-center transition-opacity duration-300 ${fadeClass}`}
      >
        <div className="flex flex-col items-center justify-center animate-pulse">
          <img
            src={ssmahalLogo}
            alt="SS Mahal Logo"
            className="h-28 md:h-36 w-auto object-contain mb-6 drop-shadow-[0_4px_12px_rgba(217,119,6,0.3)]"
          />
          <div className="w-16 h-1 bg-amber-500 rounded-full animate-bounce" />
        </div>
      </div>

      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </div>
  );
}