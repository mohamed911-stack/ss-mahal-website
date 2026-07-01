import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { Phone, MapPin, Youtube, X, Menu, Calendar } from "lucide-react";
import { BookingModal } from "./BookingModal";
import ssmahalLogo from "../../assets/ss_mahal_logo.png";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-red-950/97 backdrop-blur-sm shadow-lg z-50 border-b border-amber-700/40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={ssmahalLogo}
                alt="SS Mahal Logo"
                className="h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium transition-all duration-200 relative group ${
                    isActive(link.href)
                      ? "text-amber-400"
                      : "text-amber-100 hover:text-amber-400"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${
                      isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Book Now Button */}
            <div className="flex items-center gap-3">
              <Button
                onClick={() => setIsBookingOpen(true)}
                className="bg-amber-500 hover:bg-amber-400 text-red-950 font-bold border-none shadow-lg hidden md:flex"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Now
              </Button>
              {/* Mobile menu toggle */}
              <button
                className="md:hidden text-amber-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-red-950 border-t border-amber-700/40 px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block py-2 font-medium transition-colors ${
                  isActive(link.href) ? "text-amber-400" : "text-amber-100 hover:text-amber-400"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={() => { setIsBookingOpen(true); setIsMobileMenuOpen(false); }}
              className="w-full bg-amber-500 hover:bg-amber-400 text-red-950 font-bold mt-2"
            >
              Book Now
            </Button>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="pt-20">{children}</main>

      {/* Floating Side Book Now Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <button
          onClick={() => setIsBookingOpen(true)}
          className="bg-gradient-to-b from-red-900 to-red-800 text-amber-100 px-2 py-6 rounded-l-xl shadow-2xl border border-amber-400/30 flex flex-col items-center gap-2 hover:from-red-800 hover:to-red-700 transition-all duration-300 group"
        >
          <span className="[writing-mode:vertical-rl] rotate-180 text-xs font-bold tracking-widest text-amber-300 group-hover:text-amber-200">
            BOOK NOW
          </span>
          <div className="w-px h-6 bg-amber-400/40" />
          <Calendar className="w-4 h-4 text-amber-400" />
        </button>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/919840191283"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 rounded-full w-14 h-14 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          title="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-red-950 text-amber-100 py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <img
                src={ssmahalLogo}
                alt="SS Mahal Logo"
                className="h-16 w-auto object-contain mb-4"
              />
              <p className="text-amber-200 text-sm mb-4 leading-relaxed">
                Chennai's beloved wedding destination in Kumananchavadi — where every celebration becomes a cherished memory.
              </p>
              <div className="flex gap-4">
                <a href="https://youtube.com/@ssmahal-b4o?si=fZWNNjIiNzbrBn3z" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5 cursor-pointer hover:text-amber-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-amber-300 uppercase tracking-wider text-sm">Quick Links</h4>
              <div className="space-y-2 text-amber-200">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <Link to={link.href} className="hover:text-amber-400 cursor-pointer transition-colors text-sm">
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>


            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-amber-300 uppercase tracking-wider text-sm">Contact Info</h4>
              <div className="space-y-3 text-amber-200 text-sm">
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-400" />
                  <div>
                    <a href="tel:+919840191283" className="hover:text-amber-400 transition-colors">
                      098401 91283
                    </a>
                    <p className="text-amber-400 text-xs">Open 24 Hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-400" />
                  <div>
                    <p>24V8+Q43, MSS Nagar,</p>
                    <p>Indrani Nagar, Kumananchavadi,</p>
                    <p>Chennai, Tamil Nadu 600056</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Youtube className="w-4 h-4 flex-shrink-0 text-amber-400" />
                  <a href="https://youtube.com/@ssmahal-b4o?si=fZWNNjIiNzbrBn3z" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-red-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-amber-300 text-sm">
              © 2025 SS Mahal. All rights reserved.
            </p>
            <a
              href="https://maps.google.com/?q=SS+Mahal+A/c+Kumananchavadi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 text-sm flex items-center gap-1 transition-colors"
            >
              <MapPin className="w-3 h-3" />
              Get Directions
            </a>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
