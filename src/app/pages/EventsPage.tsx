import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router";
import { Phone, ChevronRight } from "lucide-react";

const events = [
  {
    title: "Weddings & Marriages",
    desc: "Grand traditional Tamil & South Indian wedding ceremonies with authentic customs, floral mandapams, and world-class hospitality.",
    img: "https://images.unsplash.com/photo-1680490961937-e933bf1ef920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    badge: "Most Popular",
    badgeColor: "bg-amber-500 text-red-950",
  },
  {
    title: "Receptions & Parties",
    desc: "Celebrate your union with a grand reception. Dance floors, premium sound, stunning lighting, and elegant décor for your big night.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    badge: "Grand Setup",
    badgeColor: "bg-red-700 text-white",
  },
  {
    title: "Engagements",
    desc: "Mark the beginning of your forever with an intimate and elegant engagement ceremony — beautifully decorated, perfectly planned.",
    img: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    badge: "Elegant",
    badgeColor: "bg-pink-500 text-white",
  },
  {
    title: "Birthday Celebrations",
    desc: "From kids' birthdays to milestone 60th & 80th birthdays, we create unforgettable celebrations with décor, catering, and entertainment.",
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    badge: "All Ages",
    badgeColor: "bg-purple-500 text-white",
  },
  {
    title: "Baby Shower & Seemantham",
    desc: "Celebrate the joy of motherhood with traditional Valaikappu or Seemantham ceremonies in a warm, festive atmosphere.",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    badge: "Joyful",
    badgeColor: "bg-rose-400 text-white",
  },
  {
    title: "Cradle Ceremonies",
    desc: "Welcome your little one into the world with a beautifully arranged Thottil / Cradle ceremony filled with love and tradition.",
    img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    badge: "Traditional",
    badgeColor: "bg-teal-500 text-white",
  },
  {
    title: "Thread Ceremonies",
    desc: "Conduct sacred Upanayanam / Thread Ceremony functions with all traditional customs in our spacious, serene halls.",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    badge: "Sacred",
    badgeColor: "bg-orange-500 text-white",
  },
  {
    title: "Anniversary Celebrations",
    desc: "Celebrate 25th, 50th, and milestone anniversaries with your loved ones — we'll make it as grand as your wedding day.",
    img: "https://images.unsplash.com/photo-1529636798458-92182e662485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    badge: "Special",
    badgeColor: "bg-amber-500 text-red-950",
  },
  {
    title: "Corporate Events",
    desc: "Conferences, product launches, team events, and business gatherings — our venue is fully equipped with AV and WiFi.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    badge: "Professional",
    badgeColor: "bg-slate-600 text-white",
  },
];


export function EventsPage() {
  return (
    <div>
      {/* ── PAGE HERO ── */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Events at SS Mahal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-red-950/80 to-red-900/70" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">
            All Celebrations Welcome
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Events at SS Mahal</h1>
          <p className="text-amber-200 text-lg max-w-2xl mx-auto">
            From sacred ceremonies to grand celebrations — we host every occasion with love, tradition & elegance
          </p>
        </div>
      </section>

      {/* ── EVENTS GRID ── */}
      <section className="py-20 bg-gradient-to-b from-white to-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-3">
              What We Host
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">Events We Host</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From intimate ceremonies to grand celebrations — we make every moment magical
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-transparent hover:border-amber-300 hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={event.img}
                    alt={event.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge
                    className={`absolute top-3 right-3 border-none text-xs font-bold shadow-lg ${event.badgeColor}`}
                  >
                    {event.badge}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-red-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">{event.desc}</p>
                  <a href="tel:+919840191283">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-200 text-red-900 hover:bg-red-900 hover:text-amber-100 hover:border-red-900 transition-all duration-200"
                    >
                      Enquire Now <ChevronRight className="w-3 h-3 ml-1" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-gradient-to-r from-red-900 to-red-800 text-amber-100">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Event? Just Call Us!</h2>
          <p className="text-amber-200 mb-8">
            We host all kinds of celebrations. Call us and we'll make it happen — 24 hours, 7 days a week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919840191283">
              <Button className="bg-amber-500 hover:bg-amber-400 text-red-950 px-8 py-3 font-bold shadow-xl">
                <Phone className="w-4 h-4 mr-2" /> Call 098401 91283
              </Button>
            </a>
            <Link to="/contact">
              <Button
                className="bg-transparent border-2 border-amber-300 text-amber-100 hover:bg-amber-100/20 px-8 py-3 font-semibold transition-all duration-300"
              >
                Send Enquiry <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
