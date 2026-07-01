import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutVenue() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-900">
              Three Decades of Creating Perfect Weddings
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Since 1990, Vijay Raja Thirumana Mandapam has been Chennai's most trusted name in wedding celebrations. 
              Located in the heart of Kovilambakkam, our venue combines traditional elegance with modern luxury.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-red-900">Spacious & Elegant Halls</h4>
                  <p className="text-gray-600">Beautifully designed spaces that accommodate intimate gatherings to grand celebrations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-red-900">Premium Guest Amenities</h4>
                  <p className="text-gray-600">24 fully air-conditioned luxury rooms with modern amenities for your guests</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-red-900">Expert Event Management</h4>
                  <p className="text-gray-600">Dedicated team ensuring every detail is perfect for your special day</p>
                </div>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-amber-100 border border-amber-400/30 shadow-lg">
              Know More About Us
            </Button>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1747041807605-87a31a4b41e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwbWFuZGFwYW0lMjBkZWNvcmF0aW9ufGVufDF8fHx8MTc1NjI3NTczNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Wedding mandapam decoration"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-amber-500 to-amber-600 text-red-900 p-6 rounded-lg shadow-lg border-2 border-amber-300">
              <p className="font-bold text-xl">30+</p>
              <p className="text-sm font-semibold">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}