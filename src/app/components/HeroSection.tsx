import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star, Users, MapPin, Award } from "lucide-react";
import heroImage from 'figma:asset/d6f8369465df07c96baac63140d8c23182e1c75a.png';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Traditional South Indian wedding ceremony at Vijay Raja Thirumana Mandapam"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/60 via-red-900/40 to-black/60"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-amber-400/30 rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-amber-400/20 rounded-full"></div>
        <div className="absolute top-1/3 right-20 w-2 h-16 bg-amber-400/30 rounded-full transform rotate-45"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        <div className="mb-6">
          <Badge className="bg-amber-600/90 text-red-900 border-amber-400 mb-4 px-4 py-2">
            Since 1990 • Premium Wedding Venue
          </Badge>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
          Your Dream Kalyanamandapam Awaits at <br />
          <span className="text-transparent bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text">
            Vijay Raja Thirumana Mandapam
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-amber-100 max-w-3xl mx-auto not-italic">
          Where Tradition Meets Luxury • Chennai's Most Elegant Wedding Destination • Unforgettable Celebrations
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-red-900 px-8 py-4 text-lg font-semibold border border-amber-300 shadow-lg">
            Book Your Site Visit
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-amber-300 text-[rgba(155,0,0,1)] hover:bg-amber-100 hover:text-red-900 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
            Download Brochure
          </Button>
        </div>
        
        {/* Social Proof */}
        <div className="bg-red-900/40 backdrop-blur-sm border border-amber-400/30 rounded-2xl p-6 max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              <span className="text-amber-100">4.8/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-400" />
              <span className="text-amber-100">2000+ Events Hosted</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span className="text-amber-100">Prime Venue</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-400" />
              <span className="text-amber-100">Prime Kovilambakkam Location</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}