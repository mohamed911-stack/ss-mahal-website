import { Users, Home, MapPin, Car, ChefHat, Clock } from "lucide-react";

export function QuickFacts() {
  const facts = [
    {
      icon: Users,
      title: "Up to 2000 Guests",
      description: "Spacious hall capacity"
    },
    {
      icon: Home,
      title: "24 Luxury AC Rooms",
      description: "Guest accommodation"
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Kovilambakkam, Chennai"
    },
    {
      icon: Car,
      title: "Parking",
      description: "Available at the venue. Valet parking available."
    },
    {
      icon: ChefHat,
      title: "Catering",
      description: "Authentic South Indian cuisine"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Dedicated event team"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-red-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-900">Why Choose Vijay Raja?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of luxury, tradition, and modern amenities at Chennai's premier wedding venue.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {facts.map((fact, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border-2 border-amber-400/20">
                <fact.icon className="w-8 h-8 text-amber-300" />
              </div>
              <h3 className="font-semibold mb-2 text-red-900">{fact.title}</h3>
              <p className="text-sm text-gray-600">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}