import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Check } from "lucide-react";

export function Packages() {
  const packages = [
    {
      name: "Classic Wedding",
      price: "Starting from ₹2,50,000",
      description: "Perfect for intimate celebrations",
      features: [
        "Main hall for 4 hours",
        "Basic decoration",
        "Sound system",
        "Parking for 100 vehicles",
        "12 AC guest rooms",
        "Pure veg catering setup"
      ],
      popular: false
    },
    {
      name: "Premium Wedding",
      price: "Starting from ₹4,50,000",
      description: "Our most popular package",
      features: [
        "Full day venue access",
        "Premium decoration",
        "Professional sound & lighting",
        "Parking for 200 vehicles",
        "24 AC guest rooms",
        "Premium veg catering",
        "Bridal room access",
        "Photography area"
      ],
      popular: true
    },
    {
      name: "Royal Wedding",
      price: "Starting from ₹7,50,000",
      description: "Ultimate luxury experience",
      features: [
        "2-day venue access",
        "Royal decoration package",
        "Professional AV setup",
        "Valet parking service",
        "All 24 luxury rooms",
        "Multi-cuisine catering",
        "Bridal suite with makeup room",
        "Dedicated event coordinator",
        "Red carpet entrance"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-red-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-900">Wedding Packages</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package for your dream wedding. All packages are customizable to your needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative transition-all duration-300 hover:shadow-xl ${
              pkg.popular 
                ? 'border-2 border-amber-500 scale-105 bg-gradient-to-b from-white to-amber-50' 
                : 'border border-red-200 hover:border-amber-300 bg-white'
            }`}>
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-red-900 px-4 py-1 rounded-full text-sm font-semibold border border-amber-300">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-red-900">{pkg.name}</CardTitle>
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent mt-2">{pkg.price}</div>
                <p className="text-gray-600">{pkg.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                
                <Button 
                  className={`w-full mt-6 ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-amber-100 border border-amber-400/30' 
                      : 'bg-red-900 hover:bg-red-800 text-amber-100'
                  }`}
                >
                  Get Full Pricing Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need a custom package? We're here to help!</p>
          <Button variant="outline" className="border-2 border-red-900 text-red-900 hover:bg-red-900 hover:text-amber-100 px-8 py-3">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}