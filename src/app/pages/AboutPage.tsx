import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CheckCircle, Users, Award, MapPin, Star, Clock, Sparkles, ChevronRight, Phone } from "lucide-react";

import ss1 from "../../assets/ssmahal_1.jpg";
import ss2 from "../../assets/ssmahal_2.jpg";
import ss3 from "../../assets/ssmahal_3.jpg";
import ss4 from "../../assets/ssmahal_4.jpg";
import ss5 from "../../assets/ssmahal_5.jpg";

const stats = [
  { value: "500+", label: "Events Hosted" },
  { value: "500–600", label: "Guest Capacity" },
  { value: "24/7", label: "Open Hours" },
  { value: "4.4★", label: "Google Rating" },
];

const amenities = [
  { title: "Grand AC Halls", desc: "Fully air-conditioned spacious halls designed for grand celebrations with royal décor.", icon: "🏛️" },
  { title: "Parking", desc: "Parking available for your guests at the venue. Valet parking available.", icon: "🚗" },
  { title: "Catering", desc: "Catering with experienced chefs crafting authentic South Indian cuisine.", icon: "🍛" },
  { title: "Bridal Suite", desc: "Luxurious bridal preparation room with makeup stations and modern amenities.", icon: "👰" },
  { title: "Stage & Lighting", desc: "Professional stage setups with premium lighting and audio systems.", icon: "✨" },
  { title: "Generator Backup", desc: "Uninterrupted power supply with full generator backup throughout your event.", icon: "⚡" },
  { title: "Security Services", desc: "Round-the-clock security personnel ensuring safety and peace of mind.", icon: "🛡️" },
  { title: "Floral Decoration", desc: "Expert decoration team to transform the venue into your dream setting.", icon: "💐" },
];

const values = [
  { icon: Star, title: "Excellence", desc: "We maintain the highest standards in service, décor, and hospitality." },
  { icon: Clock, title: "Always Available", desc: "Open 24 hours — we're always here to answer your questions and concerns." },
  { icon: Sparkles, title: "Custom Experiences", desc: "Every event is uniquely tailored to reflect your family's traditions and vision." },
];

export function AboutPage() {
  return (
    <div>
      {/* ── PAGE HERO ── */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1521543387600-c745f8e83d77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="SS Mahal about page"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-red-950/80 to-red-900/70" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Our Story</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About SS Mahal</h1>
          <p className="text-amber-200 text-lg max-w-2xl mx-auto">
            A legacy of love, tradition, and unforgettable celebrations in the heart of Chennai
          </p>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-gradient-to-r from-red-900 to-red-800 py-8 border-y border-amber-400/20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i} className="text-amber-100">
                <p className="text-4xl font-black text-amber-300">{s.value}</p>
                <p className="text-sm text-amber-200 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY SECTION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <ImageWithFallback
                src={ss5}
                alt="SS Mahal venue interior"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-amber-500 to-amber-600 p-6 rounded-2xl shadow-xl border-2 border-amber-300">
                <MapPin className="w-6 h-6 text-red-900 mb-1" />
                <p className="font-bold text-red-900 text-sm">MSS Nagar</p>
                <p className="text-red-900/80 text-xs">Kumananchavadi, Chennai</p>
              </div>
            </div>

            <div>
              <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-3">Who We Are</p>
              <h2 className="text-4xl font-bold text-red-900 mb-6 leading-tight">
                SS Mahal — Where Every Celebration Is Sacred
              </h2>
              <p className="text-gray-600 text-lg mb-5 leading-relaxed">
                Located in MSS Nagar, Kumananchavadi, Chennai, SS Mahal is one of the city's most trusted names for weddings, receptions, and cultural celebrations. Our venue combines the warmth of tradition with the luxury of modern amenities.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We believe every wedding is a sacred union, and every celebration deserves to be grand. Our dedicated team works tirelessly to ensure that your event exceeds your expectations and creates memories your family will cherish forever.
              </p>
              <div className="space-y-3 mb-8">
                {["Traditional South Indian ceremonies honored", "Modern luxury facilities", "Experienced event management team", "Open 24 hours — always at your service"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <a href="tel:+919840191283">
                <Button className="bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-amber-100 border border-amber-400/30 shadow-lg px-8">
                  <Phone className="w-4 h-4 mr-2" /> Call Us: 098401 91283
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ── */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-3">What Drives Us</p>
            <h2 className="text-4xl font-bold text-red-900">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-50 hover:border-amber-200 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-900 to-red-800 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <v.icon className="w-8 h-8 text-amber-300" />
                </div>
                <h3 className="text-xl font-bold text-red-900 mb-3">{v.title}</h3>
                <p className="text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AMENITIES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-3">Facilities & Amenities</p>
            <h2 className="text-4xl font-bold text-red-900 mb-4">Everything You Need</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              SS Mahal is fully equipped to make your celebration effortless and extraordinary
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((a, i) => (
              <div key={i} className="group p-6 rounded-2xl border-2 border-red-50 hover:border-amber-300 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-amber-50/30">
                <div className="text-4xl mb-4">{a.icon}</div>
                <h3 className="text-lg font-bold text-red-900 mb-2">{a.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY STRIP ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-red-900 mb-2">A Glimpse of SS Mahal</h2>
            <p className="text-gray-600">See the beauty that awaits your celebration</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              ss3,
              ss4,
              ss1,
              ss5,
            ].map((src, i) => (
              <div key={i} className="relative group overflow-hidden rounded-xl shadow-md">
                <ImageWithFallback
                  src={src}
                  alt={`SS Mahal venue photo ${i + 1}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-red-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/gallery">
              <Button className="bg-gradient-to-r from-red-900 to-red-800 text-amber-100 border border-amber-400/30 px-8">
                View Full Gallery <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-red-800 text-amber-100">
        <div className="max-w-3xl mx-auto text-center px-4">
          <Users className="w-12 h-12 text-amber-400 mx-auto mb-5" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Come See SS Mahal in Person</h2>
          <p className="text-amber-200 text-lg mb-8">
            Schedule a free site visit and let us show you why hundreds of families trust us with their most special day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919840191283">
              <Button className="bg-amber-500 hover:bg-amber-400 text-red-950 px-8 py-3 font-bold shadow-xl">
                <Phone className="w-4 h-4 mr-2" /> Call 098401 91283
              </Button>
            </a>
            <Link to="/contact">
              <Button className="bg-transparent border-2 border-amber-300 text-amber-100 hover:bg-amber-100/20 px-8 py-3 font-semibold transition-all duration-300">
                Send Enquiry <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
