import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Calendar, Phone, MessageCircle, Gift, Clock, X } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const selectStyle: React.CSSProperties = {
  width: "100%",
  padding: "8px 12px",
  marginTop: "4px",
  border: "1px solid #fca5a5",
  borderRadius: "6px",
  fontSize: "14px",
  color: "#374151",
  background: "white",
  appearance: "auto",
  cursor: "pointer",
  height: "40px",
};

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    eventType: "",
    guests: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

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
    const url = `https://wa.me/919840191283?text=${message}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Slide-in Panel */}
      <div className="relative ml-auto w-full max-w-xl bg-white shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-900 to-red-800 text-amber-100 p-6 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-amber-300" />
            <div>
              <h2 className="text-xl font-bold">Book SS Mahal</h2>
              <p className="text-amber-300 text-sm">Fill in details — we'll reply on WhatsApp!</p>
            </div>
          </div>
          <button onClick={onClose} className="text-amber-200 hover:text-white transition-colors p-1">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Quick Contact Bar */}
          <div className="bg-gradient-to-r from-amber-50 to-red-50 border border-amber-200 rounded-xl p-4 flex flex-col sm:flex-row gap-3">
            <a href="tel:+919840191283" className="flex items-center gap-2 text-red-900 font-semibold hover:text-red-700 transition-colors">
              <Phone className="w-4 h-4 text-amber-600" />
              098401 91283
            </a>
            <span className="text-gray-300 hidden sm:block">|</span>
            <a href="https://wa.me/919840191283" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-700 font-semibold hover:text-green-600 transition-colors">
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us Directly
            </a>
          </div>

          {/* Name Row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="modal-firstName" className="text-red-900 text-sm">First Name</Label>
              <Input
                id="modal-firstName"
                placeholder="Your first name"
                className="border-red-200 focus:border-amber-500 mt-1"
                value={form.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="modal-lastName" className="text-red-900 text-sm">Last Name</Label>
              <Input
                id="modal-lastName"
                placeholder="Your last name"
                className="border-red-200 focus:border-amber-500 mt-1"
                value={form.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </div>
          </div>

          {/* Phone & Email */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="modal-phone" className="text-red-900 text-sm">Phone Number</Label>
              <Input
                id="modal-phone"
                placeholder="+91 98765 43210"
                className="border-red-200 focus:border-amber-500 mt-1"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="modal-email" className="text-red-900 text-sm">Email Address</Label>
              <Input
                id="modal-email"
                type="email"
                placeholder="your@email.com"
                className="border-red-200 focus:border-amber-500 mt-1"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
          </div>

          {/* Date & Event Type */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="modal-date" className="text-red-900 text-sm">Event Date</Label>
              <Input
                id="modal-date"
                type="date"
                className="border-red-200 focus:border-amber-500 mt-1"
                value={form.date}
                onChange={(e) => handleChange("date", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="modal-eventType" className="text-red-900 text-sm">Event Type</Label>
              <select
                id="modal-eventType"
                style={selectStyle}
                value={form.eventType}
                onChange={(e) => handleChange("eventType", e.target.value)}
              >
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

          {/* Guest Count */}
          <div>
            <Label htmlFor="modal-guests" className="text-red-900 text-sm">Estimated Guest Count</Label>
            <select
              id="modal-guests"
              style={selectStyle}
              value={form.guests}
              onChange={(e) => handleChange("guests", e.target.value)}
            >
              <option value="">Number of guests</option>
              <option value="Below 50">Below 50 guests</option>
              <option value="50–100">50–100 guests</option>
              <option value="100–300">100–300 guests</option>
              <option value="300–500">300–500 guests</option>
              <option value="500–1000">500–1000 guests</option>
              <option value="1000+">1000+ guests</option>
            </select>
          </div>

          {/* Additional Requirements */}
          <div>
            <Label htmlFor="modal-msg" className="text-red-900 text-sm">Additional Requirements</Label>
            <Textarea
              id="modal-msg"
              placeholder="Tell us about your vision — theme, decorations, catering preferences, special requests..."
              rows={3}
              className="border-red-200 focus:border-amber-500 mt-1"
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            style={{
              width: "100%",
              background: "#16a34a",
              color: "white",
              padding: "14px",
              borderRadius: "8px",
              border: "none",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#15803d")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#16a34a")}
          >
            <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, fill: "white", flexShrink: 0 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Send Enquiry via WhatsApp
          </button>

          {/* Guarantees */}
          <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-red-900 flex-shrink-0" />
            <p className="text-xs text-red-800">
              <strong>2-hour</strong> response guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
