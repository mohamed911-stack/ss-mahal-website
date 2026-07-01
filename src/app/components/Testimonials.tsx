import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

export function Testimonials() {
  const testimonials = [
    {
      name: "Priya & Rajesh",
      rating: 5,
      text: "SS Mahal made our dream wedding come true! The venue was breathtaking, the staff incredibly helpful, and our guests couldn't stop praising the beautiful setup. Best wedding venue in Chennai!",
      event: "Traditional Tamil Wedding",
      initials: "PR"
    },
    {
      name: "Meera & Arun",
      rating: 5,
      text: "From the first call to the final send-off, everything was seamless. The team at SS Mahal handled every detail perfectly. The catering was exceptional and our guests absolutely loved it!",
      event: "South Indian Wedding",
      initials: "MA"
    },
    {
      name: "Kavitha & Suresh",
      rating: 5,
      text: "The attention to detail and professional service at SS Mahal is unmatched in Chennai. They allowed us to enjoy our special day completely stress-free. Highly recommend!",
      event: "Engagement Ceremony",
      initials: "KS"
    },
    {
      name: "Deepa & Vikram",
      rating: 5,
      text: "Beautiful venue with excellent amenities. The location in Kumananchavadi was easy to reach for all our guests, and the ample parking was a huge plus. Thank you SS Mahal!",
      event: "Reception Party",
      initials: "DV"
    },
    {
      name: "Lakshmi & Ravi",
      rating: 5,
      text: "We hosted our son's wedding at SS Mahal and it exceeded all expectations. The grand hall, the lighting, the food — everything was perfect. Our family still talks about it!",
      event: "Grand Wedding",
      initials: "LR"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-red-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-3">Reviews</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-900">What Our Couples Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what happy families say about their SS Mahal experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-2 border-red-100 hover:border-amber-300 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                
                {/* Customer Info */}
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-br from-red-100 to-amber-100 text-red-900 font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-red-900">{testimonial.name}</p>
                    <p className="text-sm text-amber-700">{testimonial.event}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-3">Read more reviews on Google</p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-red-900 text-lg">4.4/5</span>
            <span className="text-gray-600">(50+ reviews)</span>
          </div>
        </div>
      </div>
    </section>
  );
}