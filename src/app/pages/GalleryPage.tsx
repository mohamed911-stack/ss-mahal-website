import { useState } from "react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router";
import { X, ChevronRight, Phone } from "lucide-react";

import tourVideo from "../../assets/ssmahal_tour.mp4";
import ss1 from "../../assets/ssmahal_1.jpg";
import ss2 from "../../assets/ssmahal_2.jpg";
import ss3 from "../../assets/ssmahal_3.jpg";
import ss4 from "../../assets/ssmahal_4.jpg";
import ss5 from "../../assets/ssmahal_5.jpg";

const categories = ["All", "Halls", "Dining", "Exterior", "Decor"];

const galleryImages = [
  {
    src: ss3,
    title: "SS Mahal Building Facade",
    category: "Exterior",
    size: "large",
  },
  {
    src: ss4,
    title: "Ornate Golden Welcome Entrance Gateway",
    category: "Decor",
    size: "normal",
  },
  {
    src: ss5,
    title: "Spacious Seating Hall Interior",
    category: "Halls",
    size: "large",
  },
  {
    src: ss1,
    title: "Clean and Spacious Dining Hall Setup",
    category: "Dining",
    size: "normal",
  },
  {
    src: ss2,
    title: "Convenient Parking & Power Backup Generator",
    category: "Exterior",
    size: "normal",
  },
];

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<null | { src: string; title: string }>(null);

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div>
      {/* ── PAGE HERO ── */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={ss3}
            alt="SS Mahal Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-red-950/80 to-red-900/70" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Visual Journey</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
          <p className="text-amber-200 text-lg max-w-2xl mx-auto">
            Explore the layout, amenities, and real building views of SS Mahal
          </p>
        </div>
      </section>

      {/* ── VIDEO GALLERY SECTION ── */}
      <section className="py-16 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-2">Video Tour</p>
            <h2 className="text-3xl md:text-4xl font-bold text-red-900">Video Gallery</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-100 bg-black aspect-video relative">
            <video
              src={tourVideo}
              controls
              className="w-full h-full object-cover"
              poster={ss3}
            />
          </div>
        </div>
      </section>

      {/* ── PHOTOS GALLERY SECTION ── */}
      <section className="py-16 bg-white border-t border-amber-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-2">Real Views</p>
            <h2 className="text-3xl md:text-4xl font-bold text-red-900">Photos Gallery</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 border-2 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-red-900 to-red-800 text-amber-100 border-red-800 shadow-lg"
                    : "bg-white text-gray-600 border-gray-200 hover:border-amber-400 hover:text-red-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative border border-gray-100"
                onClick={() => setLightboxImg({ src: img.src, title: img.title })}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <Badge className="bg-amber-500 text-red-950 border-none text-xs mb-1">{img.category}</Badge>
                    <p className="text-white font-semibold">{img.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <button
            className="absolute top-6 right-6 text-white bg-red-900/60 hover:bg-red-900 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
            onClick={() => setLightboxImg(null)}
          >
            <X className="w-5 h-5" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImg.src}
              alt={lightboxImg.title}
              className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-amber-400/20"
            />
            <p className="text-amber-300 text-center mt-4 font-semibold text-lg">{lightboxImg.title}</p>
          </div>
        </div>
      )}

      {/* ── CTA ── */}
      <section className="py-14 bg-gradient-to-r from-red-900 to-red-800 text-amber-100">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Love What You See?</h2>
          <p className="text-amber-200 mb-8">
            Imagine your celebration here at SS Mahal. Book a site visit or call us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919840191283">
              <Button className="bg-amber-500 hover:bg-amber-400 text-red-950 px-8 py-3 font-bold shadow-xl">
                <Phone className="w-4 h-4 mr-2" /> Call Us Now
              </Button>
            </a>
            <Link to="/contact">
              <Button className="bg-transparent border-2 border-amber-300 text-amber-100 hover:bg-amber-100/20 px-8 py-3 font-semibold transition-all duration-300">
                Book a Visit <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
