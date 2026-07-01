import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Users, Building, Sparkles, ArrowLeft, Calendar, Clock, Star } from "lucide-react";
import { Button } from "./ui/button";

export function EventsWeHost() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: "Weddings",
      shortDesc: "Traditional & modern ceremonies",
      icon: Heart,
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
      borderColor: "border-red-300",
      textColor: "text-red-800",
      iconColor: "text-red-600",
      description: "Create magical moments with our traditional and contemporary wedding ceremonies. Our venue provides the perfect backdrop for your special day with elegant décor, spacious halls, and impeccable service.",
      features: [
        "Traditional Tamil & South Indian ceremonies",
        "Modern wedding setups",
        "Bridal suite with makeup room",
        "Photography & videography support",
        "Customizable décor packages",
        "Guest accommodation facilities"
      ],
      capacity: "Up to 2000 guests",
      duration: "Full day celebrations",
      pricing: "Starting from ₹4,50,000"
    },
    {
      id: 2,
      title: "Engagements",
      shortDesc: "Beautiful ring ceremonies",
      icon: Sparkles,
      color: "from-amber-500 to-yellow-500",
      bgColor: "from-amber-50 to-yellow-50",
      borderColor: "border-amber-300",
      textColor: "text-amber-800",
      iconColor: "text-amber-600",
      description: "Mark the beginning of your journey together with an elegant engagement ceremony. Our intimate settings create the perfect atmosphere for this special milestone celebration.",
      features: [
        "Intimate ceremony setups",
        "Beautiful floral arrangements",
        "Photography corners",
        "Traditional & modern themes",
        "Family seating arrangements",
        "Welcome drinks & refreshments"
      ],
      capacity: "50-500 guests",
      duration: "4-6 hours",
      pricing: "Starting from ₹1,50,000"
    },
    {
      id: 3,
      title: "Receptions",
      shortDesc: "Grand celebration parties",
      icon: Users,
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-300",
      textColor: "text-purple-800",
      iconColor: "text-purple-600",
      description: "Celebrate your union with a grand reception party. Dance the night away with family and friends in our spacious halls with premium sound systems and lighting arrangements.",
      features: [
        "Grand hall decorations",
        "DJ & sound systems",
        "Dance floor with lighting",
        "Multi-cuisine buffet",
        "Bar setup (optional)",
        "Entertainment arrangements"
      ],
      capacity: "200-2000 guests",
      duration: "Evening celebrations",
      pricing: "Starting from ₹3,50,000"
    },
    {
      id: 4,
      title: "Corporate Events",
      shortDesc: "Professional gatherings",
      icon: Building,
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-300",
      textColor: "text-emerald-800",
      iconColor: "text-emerald-600",
      description: "Host successful corporate events, conferences, and business gatherings. Our professional setup ensures your corporate functions run smoothly with all modern amenities.",
      features: [
        "Conference hall setup",
        "AV equipment & projection",
        "High-speed WiFi",
        "Business lunch arrangements",
        "Parking facilities",
        "Professional service staff"
      ],
      capacity: "50-1000 attendees",
      duration: "Flexible timing",
      pricing: "Starting from ₹2,00,000"
    }
  ];

  const handleClusterClick = () => {
    setIsExpanded(true);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleBackClick = () => {
    if (selectedEvent) {
      setSelectedEvent(null);
    } else {
      setIsExpanded(false);
    }
  };

  return (
    <section className="py-12 bg-gradient-to-b from-white to-red-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-24 h-24 border-2 border-red-200/30 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border border-amber-200/40 rounded-full"></div>
        <div className="absolute top-1/4 right-20 w-2 h-16 bg-gradient-to-b from-red-200/20 to-amber-200/20 rounded-full transform rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <p className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-3">Celebrations</p>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-red-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Events We Host at SS Mahal
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From intimate gatherings to grand celebrations — every occasion is made extraordinary
          </motion.p>
        </div>

        <div className="flex items-center justify-center" style={{ minHeight: selectedEvent ? 'auto' : isExpanded ? '500px' : '400px' }}>
          <AnimatePresence mode="wait">
            {!isExpanded ? (
              // Clustered State
              <motion.div
                key="cluster"
                className="relative cursor-pointer"
                onClick={handleClusterClick}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Main Cluster Circle */}
                <div className="relative w-56 h-56 bg-gradient-to-br from-red-900 via-red-800 to-red-900 rounded-full shadow-2xl flex items-center justify-center border-4 border-amber-400">
                  <div className="text-center text-amber-100">
                    <Calendar className="w-10 h-10 mx-auto mb-3 text-amber-300" />
                    <h3 className="text-xl font-bold mb-2">Events</h3>
                    <p className="text-amber-200 text-sm">Tap to explore</p>
                  </div>
                </div>

                {/* Floating Icons */}
                {events.map((event, index) => {
                  const Icon = event.icon;
                  const angle = (index * 90) * (Math.PI / 180);
                  const radius = 85;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.div
                      key={event.id}
                      className="absolute w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full shadow-lg flex items-center justify-center border-2 border-amber-300"
                      style={{
                        left: `calc(50% + ${x}px - 28px)`,
                        top: `calc(50% + ${y}px - 28px)`,
                      }}
                      animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, delay: index * 0.5 },
                      }}
                    >
                      <Icon className="w-7 h-7 text-red-900" />
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : selectedEvent ? (
              // Selected Event Detail View
              <motion.div
                key="detail"
                className="w-full max-w-4xl mt-4"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`bg-gradient-to-br ${selectedEvent.bgColor} rounded-3xl p-6 shadow-2xl border-2 ${selectedEvent.borderColor}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <Button
                      onClick={handleBackClick}
                      variant="outline"
                      size="sm"
                      className={`border-2 ${selectedEvent.borderColor} ${selectedEvent.textColor} hover:bg-white/50`}
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                    <div className={`w-14 h-14 bg-gradient-to-br ${selectedEvent.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <selectedEvent.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${selectedEvent.textColor}`}>{selectedEvent.title}</h3>
                      <p className="text-gray-600">{selectedEvent.shortDesc}</p>
                    </div>
                  </div>

                  <p className={`text-lg mb-6 ${selectedEvent.textColor}/80`}>
                    {selectedEvent.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className={`text-xl font-semibold mb-4 ${selectedEvent.textColor}`}>What's Included</h4>
                      <div className="space-y-2">
                        {selectedEvent.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <Star className={`w-4 h-4 ${selectedEvent.iconColor} flex-shrink-0`} />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className={`text-xl font-semibold mb-4 ${selectedEvent.textColor}`}>Event Details</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Users className={`w-5 h-5 ${selectedEvent.iconColor}`} />
                          <div>
                            <p className="font-medium text-gray-800 text-sm">Capacity</p>
                            <p className="text-gray-600 text-sm">{selectedEvent.capacity}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className={`w-5 h-5 ${selectedEvent.iconColor}`} />
                          <div>
                            <p className="font-medium text-gray-800 text-sm">Duration</p>
                            <p className="text-gray-600 text-sm">{selectedEvent.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Calendar className={`w-5 h-5 ${selectedEvent.iconColor}`} />
                          <div>
                            <p className="font-medium text-gray-800 text-sm">Pricing</p>
                            <p className="text-gray-600 text-sm">{selectedEvent.pricing}</p>
                          </div>
                        </div>
                      </div>

                      <Button className={`w-full mt-6 bg-gradient-to-r ${selectedEvent.color} text-white hover:opacity-90 shadow-lg`}>
                        Get Custom Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              // Expanded Grid View
              <motion.div
                key="grid"
                className="w-full mt-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-center mb-6">
                  <Button
                    onClick={handleBackClick}
                    variant="outline"
                    size="sm"
                    className="border-2 border-red-900 text-red-900 hover:bg-red-50"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Cluster
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                  {events.map((event, index) => {
                    const Icon = event.icon;
                    return (
                      <motion.div
                        key={event.id}
                        className={`cursor-pointer bg-gradient-to-br ${event.bgColor} p-5 rounded-2xl shadow-lg border-2 ${event.borderColor} hover:shadow-xl transition-all duration-300`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleEventClick(event)}
                      >
                        <div className={`w-14 h-14 bg-gradient-to-br ${event.color} rounded-xl mb-4 flex items-center justify-center shadow-lg mx-auto`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className={`text-lg font-bold mb-2 text-center ${event.textColor}`}>
                          {event.title}
                        </h3>
                        <p className="text-gray-600 text-center text-sm mb-3">{event.shortDesc}</p>
                        <div className="text-center">
                          <span className={`text-xs ${event.textColor} opacity-75`}>Tap for details</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}