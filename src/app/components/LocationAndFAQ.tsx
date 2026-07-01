import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { MapPin, Car, Plane, Train } from "lucide-react";

export function LocationAndFAQ() {
  const faqs = [
    {
      question: "What is your booking process?",
      answer: "Our booking process is simple: 1) Check availability through our form or call us, 2) Visit the venue for a tour, 3) Choose your package and customize as needed, 4) Pay booking advance (20% of total), 5) Final payment 15 days before the event."
    },
    {
      question: "What are your payment terms?",
      answer: "We require a 20% booking advance to secure your date. The remaining 80% should be paid 15 days before your event. We accept bank transfers, cheques, and digital payments."
    },
    {
      question: "Can we bring our own decorators?",
      answer: "Yes, you can bring your own decorators. However, they must coordinate with our team for setup timings and venue guidelines. We also have preferred decorator partners if you need recommendations."
    },
    {
      question: "Do you provide catering services?",
      answer: "We have a pure vegetarian kitchen with experienced chefs. You can choose from our menu options or work with us to create a custom menu. We also allow external caterers with prior approval."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellations made 60+ days before the event: 50% refund of advance. Cancellations made 30-60 days: 25% refund. Cancellations within 30 days: No refund. Date changes are allowed once with 30 days notice."
    },
    {
      question: "Are there any restrictions on music and timings?",
      answer: "Music should end by 11 PM on weekdays and 12 AM on weekends as per local regulations. We provide professional sound systems and have partnerships with DJ services."
    },
    {
      question: "What COVID safety measures do you follow?",
      answer: "We follow all government guidelines including sanitization, capacity limits when applicable, and have contactless payment options. Our staff is fully vaccinated and follows safety protocols."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Location Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Location & Access</h2>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-yellow-600" />
                  Prime Kovilambakkam Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Interactive Map Coming Soon</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Plane className="w-5 h-5 text-yellow-600" />
                    <div>
                      <p className="font-semibold">Airport</p>
                      <p className="text-sm text-gray-600">12 km (20 mins)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Train className="w-5 h-5 text-yellow-600" />
                    <div>
                      <p className="font-semibold">Railway Station</p>
                      <p className="text-sm text-gray-600">8 km (15 mins)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-yellow-600" />
                    <div>
                      <p className="font-semibold">Parking</p>
                      <p className="text-sm text-gray-600">200+ vehicles</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-yellow-600" />
                    <div>
                      <p className="font-semibold">City Center</p>
                      <p className="text-sm text-gray-600">15 km (25 mins)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Complete Address</h4>
              <p className="text-gray-600 mb-4">
                Vijay Raja Thirumana Mandapam<br />
                123, Main Road, Kovilambakkam<br />
                Chennai - 600129, Tamil Nadu
              </p>
              <p className="text-sm text-gray-500">
                Easily accessible via GST Road and Inner Ring Road. Public transport available.
              </p>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-4">
                  <AccordionTrigger className="text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-6 bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Still have questions?</h4>
              <p className="text-sm text-gray-600 mb-4">
                Can't find what you're looking for? We're here to help! Contact our team for any specific questions about your event.
              </p>
              <div className="flex gap-3">
                <span className="text-sm font-semibold">Call:</span>
                <span className="text-sm text-gray-600">+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}