import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Star, Users, MapPin, Award, Phone, Heart, Sparkles, ChevronRight, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Testimonials } from "../components/Testimonials";

const heroStats = [
  { icon: Star, label: "4.4/5 Rating", value: "50+ Reviews" },
  { icon: Users, label: "500+ Events", value: "Hosted" },
  { icon: Award, label: "Prime Venue", value: "Chennai" },
  { icon: MapPin, label: "Kumananchavadi", value: "Chennai" },
];

const quickFacts = [
  { label: "Capacity", value: "500–600 Guests", icon: Users },
  { label: "Open", value: "24 Hours", icon: Award },
  { label: "Location", value: "Kumananchavadi, Chennai", icon: MapPin },
  { label: "Phone", value: "098401 91283", icon: Phone },
];

const featuredEvents = [
  {
    title: "Traditional Weddings",
    desc: "Authentic South Indian wedding ceremonies with all customs honored beautifully.",
    img: "https://images.unsplash.com/photo-1680490961937-e933bf1ef920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    badge: "Most Popular",
  },
  {
    title: "Receptions & Parties",
    desc: "Grand celebration parties with premium sound, lighting, and décor arrangements.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    badge: "Grand Setup",
  },
  {
    title: "Engagements",
    desc: "Intimate and elegant engagement ceremonies to mark your new beginning.",
    img: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    badge: "Elegant",
  },
];

export function HomePage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1680490961937-e933bf1ef920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="SS Mahal wedding venue"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-red-950/75 via-red-900/55 to-black/70" />
        </div>

        {/* Decorative circles */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute top-24 left-10 w-40 h-40 border-2 border-amber-400/20 rounded-full animate-pulse" />
          <div className="absolute bottom-40 right-16 w-28 h-28 border border-amber-400/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/3 right-24 w-2 h-20 bg-amber-400/25 rounded-full transform rotate-45" />
          <div className="absolute bottom-1/3 left-24 w-2 h-16 bg-amber-400/20 rounded-full transform -rotate-12" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <div className="mb-6">
            <Badge className="bg-amber-600/90 text-red-950 border-amber-400 mb-4 px-5 py-2 text-sm font-semibold">
              ✦ Chennai's Premier Wedding Destination ✦
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Dream Wedding at{" "}
            <span className="text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text">
              SS Mahal
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-amber-100 max-w-3xl mx-auto">
            Where Tradition Meets Grandeur • Kumananchavadi, Chennai • Unforgettable Celebrations
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a href="tel:+919840191283">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-red-950 px-10 py-4 text-lg font-bold border border-amber-300 shadow-xl">
                <Phone className="w-5 h-5 mr-2" /> Call to Book
              </Button>
            </a>
            <Link to="/gallery">
              <Button size="lg" className="bg-white/20 border-2 border-white text-white hover:bg-white hover:text-red-900 px-10 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300">
                View Gallery
              </Button>
            </Link>
          </div>

          {/* Social Proof Bar */}
          <div className="bg-red-950/50 backdrop-blur-sm border border-amber-400/30 rounded-2xl p-5 max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-8">
              {heroStats.map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <stat.icon className="w-5 h-5 text-amber-400" />
                  <div className="text-left">
                    <p className="text-amber-100 text-sm font-semibold">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK FACTS BAR ── */}
      <section className="bg-gradient-to-r from-red-900 to-red-800 py-6 border-y border-amber-400/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickFacts.map((fact, i) => (
              <div key={i} className="flex items-center gap-3 text-amber-100">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center flex-shrink-0">
                  <fact.icon className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <p className="text-xs text-amber-300 uppercase tracking-wider">{fact.label}</p>
                  <p className="font-semibold text-sm">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-3">About SS Mahal</p>
              <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-6 leading-tight">
                Creating Memories That Last a Lifetime
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Nestled in the heart of Kumananchavadi, Chennai, SS Mahal stands as a beacon of elegance and tradition. We offer a magnificent space where your most cherished celebrations come to life — from grand weddings to intimate gatherings.
              </p>
              <div className="space-y-3 mb-8">
                {["Spacious halls for 500–600 guests", "Open 24 hours, 7 days a week", "500+ events successfully hosted", "In-house catering & decoration services"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about">
                <Button className="bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-amber-100 border border-amber-400/30 shadow-lg px-8">
                  Learn More About Us <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1747041807605-87a31a4b41e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="SS Mahal wedding mandapam decoration"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-amber-500 to-amber-600 text-red-900 p-6 rounded-2xl shadow-xl border-2 border-amber-300">
                <p className="font-black text-3xl">500+</p>
                <p className="text-sm font-bold">Events Hosted</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-red-900 text-amber-100 p-4 rounded-2xl shadow-xl border border-amber-400/30">
                <p className="font-black text-2xl">24/7</p>
                <p className="text-xs font-semibold text-amber-300">Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED EVENTS ── */}
      <section className="py-20 bg-gradient-to-b from-red-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-3">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">Events We Host</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">From intimate ceremonies to grand celebrations, we make every moment magical</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {featuredEvents.map((event, i) => (
              <Card key={i} className="overflow-hidden group border-2 border-transparent hover:border-amber-300 transition-all duration-300 shadow-lg hover:shadow-2xl">
                <div className="relative">
                  <ImageWithFallback
                    src={event.img}
                    alt={event.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-950/70 to-transparent" />
                  <Badge className="absolute top-3 right-3 bg-amber-500 text-red-900 border-none font-semibold">
                    {event.badge}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-red-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{event.desc}</p>
                  <Link to="/events">
                    <Button variant="outline" size="sm" className="border-red-200 text-red-900 hover:bg-red-50 hover:border-red-400">
                      Learn More <ChevronRight className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/events">
              <Button className="bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-amber-100 border border-amber-400/30 px-10 py-3 text-base font-semibold shadow-lg">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <Testimonials />

      {/* ── FINAL CTA ── */}
      <section className="py-20 bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-amber-100 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-amber-400/10 rounded-full" />
          <div className="absolute bottom-10 right-20 w-20 h-20 border border-amber-400/15 rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <Heart className="w-12 h-12 text-amber-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Plan Your Dream Wedding?
          </h2>
          <p className="text-xl mb-10 text-amber-200">
            Call us or visit SS Mahal — we're open 24 hours to make your celebration perfect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919840191283">
              <Button className="bg-amber-500 hover:bg-amber-400 text-red-950 px-10 py-4 text-lg font-bold shadow-xl">
                <Phone className="w-5 h-5 mr-2" /> Call Now
              </Button>
            </a>
            <Link to="/contact">
              <Button className="bg-transparent border-2 border-amber-300 text-amber-100 hover:bg-amber-100/20 px-10 py-4 text-lg font-semibold transition-all duration-300">
                <Sparkles className="w-5 h-5 mr-2" /> Send Enquiry
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
