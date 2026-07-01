import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import {
  Phone, MapPin, Clock, Instagram, Calendar, MessageCircle,
  Gift, Navigation, Car, Users
} from "lucide-react";

const selectStyle: React.CSSProperties = {
  width: "100%",
  padding: "8px 12px",
  marginTop: "4px",
  border: "1px solid #fca5a5",
  borderRadius: "6px",
  fontSize: "14px",
  color: "#374151",
  background: "white",
  cursor: "pointer",
  height: "40px",
};

const faqs = [
  {
    question: "What is your booking process?",
    answer: "Simple! Call us or fill the enquiry form. We'll confirm availability, arrange a site visit, finalize the package, and secure your date with an advance payment.",
  },
  {
    question: "What is the guest capacity of the hall?",
    answer: "SS Mahal comfortably accommodates 500 to 600 guests, making it ideal for weddings, receptions, and large family celebrations.",
  },
  {
    question: "How many events have you hosted so far?",
    answer: "We have successfully hosted 500+ events and counting — from intimate ceremonies to grand weddings — each one a memorable occasion.",
  },
  {
    question: "Is SS Mahal open 24/7?",
    answer: "Yes! SS Mahal is open 24 hours, 7 days a week, giving you the flexibility to plan your event at any time that suits you best.",
  },
  {
    question: "Is parking available?",
    answer: "Yes — we have convenient parking available for your guests' vehicles. Valet parking is also available.",
  },
  {
    question: "Do you provide catering services?",
    answer: "Yes! We have an in-house catering team offering authentic South Indian cuisine. Our experienced chefs ensure your guests enjoy a delicious, satisfying meal.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "Please note that we do not offer refunds on advance payments once a booking is confirmed. We strongly recommend finalizing your date carefully before booking.",
  },
  {
    question: "What are your payment terms?",
    answer: "We require an advance payment to block your date. The remaining balance is due before the event. We accept bank transfers, UPI, and cheques.",
  },
];

export function ContactPage() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "", email: "",
    date: "", eventType: "", guests: "", message: "",
  });

  const handleChange = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = () => {
    const name = `${form.firstName} ${form.lastName}`.trim() || "Not provided";
    const lines = [
      `🏛️ *SS Mahal — New Booking Enquiry*`,
      ``,
      `👤 *Name:* ${name}`,
      `📞 *Phone:* ${form.phone || "Not provided"}`,
      `📧 *Email:* ${form.email || "Not provided"}`,
      `📅 *Event Date:* ${form.date || "Not specified"}`,
      `🎉 *Event Type:* ${form.eventType || "Not specified"}`,
      `👥 *Guest Count:* ${form.guests || "Not specified"}`,
      `📝 *Additional Requirements:*`,
      form.message || "None",
      ``,
      `_Sent via SS Mahal Website_`,
    ];
    const message = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/919840191283?text=${message}`, "_blank");
  };

  return (
    <div>
      {/* ── PAGE HERO ── */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Contact SS Mahal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-red-950/85 to-red-900/75" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3">Get In Touch</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-amber-200 text-lg max-w-2xl mx-auto">
            We'd love to hear about your celebration. Reach out and let's make it extraordinary.
          </p>
        </div>
      </section>

      {/* ── QUICK CONTACT STRIP ── */}
      <section className="bg-gradient-to-r from-red-900 to-red-800 py-6 border-y border-amber-400/20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-amber-100">
            <a href="tel:+919840191283" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/40 transition-colors">
                <Phone className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <p className="text-xs text-amber-400 uppercase tracking-wider">Call Us Directly</p>
                <p className="font-bold text-lg group-hover:text-amber-300 transition-colors">098401 91283</p>
              </div>
            </a>
            <a
              href="https://wa.me/919840191283"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/40 transition-colors">
                <MessageCircle className="w-5 h-5 text-green-300" />
              </div>
              <div>
                <p className="text-xs text-amber-400 uppercase tracking-wider">WhatsApp Us</p>
                <p className="font-bold text-lg group-hover:text-green-300 transition-colors">Quick Response</p>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <p className="text-xs text-amber-400 uppercase tracking-wider">Working Hours</p>
                <p className="font-bold text-lg">Open 24 Hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* ── BOOKING FORM ── */}
            <div>
              <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-2">Send an Enquiry</p>
              <h2 className="text-3xl font-bold text-red-900 mb-6">Book Your Date at SS Mahal</h2>

              <Card className="border-2 border-red-100 shadow-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-red-900 to-red-800 text-amber-100 py-5">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Calendar className="w-5 h-5 text-amber-300" />
                    Request Availability &amp; Quote
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-red-900 text-sm font-semibold">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" className="border-red-200 focus:border-amber-500 mt-1" value={form.firstName} onChange={(e) => handleChange("firstName", e.target.value)} />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-red-900 text-sm font-semibold">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" className="border-red-200 focus:border-amber-500 mt-1" value={form.lastName} onChange={(e) => handleChange("lastName", e.target.value)} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-red-900 text-sm font-semibold">Phone Number</Label>
                      <Input id="phone" placeholder="+91 98765 43210" className="border-red-200 focus:border-amber-500 mt-1" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-red-900 text-sm font-semibold">Email Address</Label>
                      <Input id="email" type="email" placeholder="your@email.com" className="border-red-200 focus:border-amber-500 mt-1" value={form.email} onChange={(e) => handleChange("email", e.target.value)} />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="eventDate" className="text-red-900 text-sm font-semibold">Preferred Date</Label>
                      <Input id="eventDate" type="date" className="border-red-200 focus:border-amber-500 mt-1" value={form.date} onChange={(e) => handleChange("date", e.target.value)} />
                    </div>
                    <div>
                      <Label htmlFor="eventType" className="text-red-900 text-sm font-semibold">Event Type</Label>
                      <select id="eventType" style={selectStyle} value={form.eventType} onChange={(e) => handleChange("eventType", e.target.value)}>
                        <option value="">Select type</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Reception">Reception</option>
                        <option value="Birthday Party">Birthday Party</option>
                        <option value="Baby Shower / Seemantham">Baby Shower / Seemantham</option>
                        <option value="Cradle Ceremony">Cradle Ceremony</option>
                        <option value="Thread Ceremony">Thread Ceremony</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Corporate Event">Corporate Event</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="guests" className="text-red-900 text-sm font-semibold">Estimated Guest Count</Label>
                    <select id="guests" style={selectStyle} value={form.guests} onChange={(e) => handleChange("guests", e.target.value)}>
                      <option value="">Number of guests</option>
                      <option value="Below 50">Below 50 guests</option>
                      <option value="50–100">50–100 guests</option>
                      <option value="100–300">100–300 guests</option>
                      <option value="300–500">300–500 guests</option>
                      <option value="500–1000">500–1000 guests</option>
                      <option value="1000+">1000+ guests</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-red-900 text-sm font-semibold">Additional Requirements</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your vision — theme, decorations, catering preferences, special requests..."
                      rows={4}
                      className="border-red-200 focus:border-amber-500 mt-1"
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    style={{ width:"100%", background:"#16a34a", color:"white", padding:"14px", borderRadius:"8px", border:"none", fontSize:"16px", fontWeight:"700", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:"10px", boxShadow:"0 4px 20px rgba(0,0,0,0.15)" }}
                    onMouseOver={(e) => (e.currentTarget.style.background = "#15803d")}
                    onMouseOut={(e) => (e.currentTarget.style.background = "#16a34a")}
                  >
                    <svg viewBox="0 0 24 24" style={{ width:20, height:20, fill:"white", flexShrink:0 }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Send Enquiry via WhatsApp
                  </button>

                  <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl flex items-center justify-center gap-2 pt-2">
                    <Clock className="w-4 h-4 text-red-900 flex-shrink-0" />
                    <p className="text-xs text-red-800 font-medium">
                      <strong>2-hour</strong> response guarantee
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* ── RIGHT COLUMN: CONTACT INFO + MAP ── */}
            <div className="space-y-6">
              {/* Contact Details Card */}
              <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-red-50 shadow-lg">
                <CardContent className="p-6 space-y-5">
                  <h3 className="text-xl font-bold text-red-900 mb-2">SS Mahal — Contact Details</h3>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-amber-300" />
                    </div>
                    <div>
                      <p className="font-semibold text-red-900">Address</p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        24V8+Q43, MSS Nagar, Indrani Nagar,<br />
                        Kumananchavadi, Chennai, Tamil Nadu 600056
                      </p>
                      <a
                        href="https://maps.google.com/?q=SS+Mahal+A/c+Kumananchavadi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-amber-600 hover:text-amber-700 font-semibold mt-1 inline-flex items-center gap-1 transition-colors"
                      >
                        <Navigation className="w-3 h-3" /> Get Directions
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-red-900">WhatsApp</p>
                      <a
                        href="https://wa.me/919840191283"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-green-600 transition-colors"
                      >
                        Chat on WhatsApp →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-red-900">Instagram</p>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-pink-600 transition-colors"
                      >
                        instagram.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Embedded Google Map */}
              <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-amber-200">
                <div className="bg-gradient-to-r from-red-900 to-red-800 px-4 py-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-300" />
                  <span className="text-amber-100 font-semibold text-sm">SS Mahal Location — Kumananchavadi, Chennai</span>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.7159655704172!2d80.1150914586063!3d13.04433630029451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526100469a71bb%3A0x4528f443db536190!2sSS%20Mahal%20A%2Fc!5e0!3m2!1sen!2sin!4v1782887488519!5m2!1sen!2sin"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SS Mahal Location"
                />
                <div className="bg-amber-50 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Car className="w-3 h-3 text-amber-600" /> Ample parking
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-amber-600" /> 500–600 capacity
                    </span>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/pwyfQbr5tHgYxEXT9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-red-900 font-bold hover:text-amber-600 transition-colors"
                  >
                    Open in Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-gradient-to-b from-red-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know about booking SS Mahal</p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white rounded-xl px-5 border-2 border-transparent hover:border-amber-200 transition-all duration-200 shadow-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline text-red-900 font-semibold py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 bg-gradient-to-r from-amber-100 to-amber-50 border border-amber-200 p-6 rounded-2xl text-center">
            <p className="text-red-900 font-semibold mb-2">Still have questions?</p>
            <p className="text-gray-600 text-sm mb-4">We're available 24 hours — just give us a call!</p>
            <a href="tel:+919840191283">
              <Button className="bg-gradient-to-r from-red-900 to-red-800 text-amber-100 hover:from-red-800 hover:to-red-700 border border-amber-400/30 px-6">
                <Phone className="w-4 h-4 mr-2" /> Call 098401 91283
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
