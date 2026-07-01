import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HallTour() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1521543387600-c745f8e83d77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmVudWUlMjBoYWxsfGVufDF8fHx8MTc1NjI3NTczNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Main Hall",
      description: "Spacious mandapam for ceremonies"
    },
    {
      src: "https://images.unsplash.com/photo-1751891076198-f1162574c39c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYmFucXVldCUyMGRpbmluZ3xlbnwxfHx8fDE3NTYyNzU3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Dining Area",
      description: "Elegant banquet setup"
    },
    {
      src: "https://images.unsplash.com/photo-1611679099138-65bc8ab31945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmVudWUlMjBicmlkYWwlMjByb29tfGVufDF8fHx8MTc1NjI3NTczN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Bridal Suite",
      description: "Luxury preparation room"
    },
    {
      src: "https://images.unsplash.com/photo-1677981316539-d2464643b1c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmVudWUlMjBleHRlcmlvcnxlbnwxfHx8fDE3NTYyNzU3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Exterior View",
      description: "Beautiful facade & entrance"
    },
    {
      src: "https://images.unsplash.com/photo-1680490961937-e933bf1ef920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzU2Mjc1NzM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Ceremony Setup",
      description: "Traditional wedding arrangement"
    },
    {
      src: "https://images.unsplash.com/photo-1747041807605-87a31a4b41e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwbWFuZGFwYW0lMjBkZWNvcmF0aW9ufGVufDF8fHx8MTc1NjI3NTczNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Night View",
      description: "Beautifully lit evening ambiance"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Take a Virtual Tour</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our stunning venues and envision your perfect celebration
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <ImageWithFallback
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-yellow-600 hover:bg-yellow-700">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}