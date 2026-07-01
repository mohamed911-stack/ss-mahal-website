import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar, Phone, Users, MessageCircle, Gift, Clock } from "lucide-react";

export function BookingForm() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-900">Check Availability & Book Your Date</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to make your dream wedding a reality? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Booking Form */}
          <Card className="border-2 border-red-100 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-red-900 to-red-800 text-amber-100 rounded-t-lg">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-300" />
                Request Availability
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-red-900">First Name</Label>
                  <Input id="firstName" placeholder="Enter first name" className="border-red-200 focus:border-amber-500" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-red-900">Last Name</Label>
                  <Input id="lastName" placeholder="Enter last name" className="border-red-200 focus:border-amber-500" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="text-red-900">Phone Number</Label>
                  <Input id="phone" placeholder="+91 98765 43210" className="border-red-200 focus:border-amber-500" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-red-900">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="border-red-200 focus:border-amber-500" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="eventDate" className="text-red-900">Preferred Event Date</Label>
                  <Input id="eventDate" type="date" className="border-red-200 focus:border-amber-500" />
                </div>
                <div>
                  <Label htmlFor="eventType" className="text-red-900">Event Type</Label>
                  <Select>
                    <SelectTrigger className="border-red-200 focus:border-amber-500">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="engagement">Engagement</SelectItem>
                      <SelectItem value="reception">Reception</SelectItem>
                      <SelectItem value="birthday">Birthday Party</SelectItem>
                      <SelectItem value="corporate">Corporate Event</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="guestCount" className="text-red-900">Estimated Guest Count</Label>
                <Select>
                  <SelectTrigger className="border-red-200 focus:border-amber-500">
                    <SelectValue placeholder="Select guest count" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50-100">50-100 guests</SelectItem>
                    <SelectItem value="100-300">100-300 guests</SelectItem>
                    <SelectItem value="300-500">300-500 guests</SelectItem>
                    <SelectItem value="500-1000">500-1000 guests</SelectItem>
                    <SelectItem value="1000-2000">1000-2000 guests</SelectItem>
                    <SelectItem value="2000+">2000+ guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message" className="text-red-900">Additional Requirements</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your special requirements, decorations, catering preferences, etc."
                  rows={4}
                  className="border-red-200 focus:border-amber-500"
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-amber-100 py-3 text-lg font-semibold border border-amber-400/30">
                Check Availability & Get Quote
              </Button>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-red-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-4 text-red-900">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-amber-600" />
                    <div>
                      <p className="font-semibold text-red-900">Call Us Directly</p>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <p className="text-gray-600">+91 87654 32109</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-amber-600" />
                    <div>
                      <p className="font-semibold text-red-900">WhatsApp</p>
                      <p className="text-gray-600">Quick response on WhatsApp</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-amber-600" />
                    <div>
                      <p className="font-semibold text-red-900">Site Visit</p>
                      <p className="text-gray-600">Schedule a personal tour</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-gradient-to-r from-amber-100 to-amber-200 p-6 rounded-lg border border-amber-300">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-red-900" />
                <h4 className="font-semibold text-red-900">Quick Response Guarantee</h4>
              </div>
              <p className="text-sm text-red-800">
                We respond to all inquiries within 2 hours during business hours (9 AM - 9 PM). 
                For urgent requests, please call us directly.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-red-100 to-red-200 p-6 rounded-lg border border-red-300">
              <div className="flex items-center gap-2 mb-2">
                <Gift className="w-5 h-5 text-red-900" />
                <h4 className="font-semibold text-red-900">Book Early & Save</h4>
              </div>
              <p className="text-sm text-red-800">
                Book 6 months in advance and get up to 15% discount on your wedding package. 
                Limited time offer!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}