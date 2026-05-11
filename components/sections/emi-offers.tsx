"use client"

import { motion } from "framer-motion"
import { Shield, CreditCard, Percent, BadgeCheck, Wallet, Clock, HeartHandshake, Sparkles, MapPin, Plane, Umbrella, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "100% Secure Booking",
    description: "Your payments are protected with bank-grade encryption and trusted payment gateways.",
    color: "#E31E24",
  },
  {
    icon: CreditCard,
    title: "Zero Interest EMI",
    description: "Split your dream vacation into easy monthly installments with absolutely zero interest charges.",
    color: "#1a1f4e",
  },
  {
    icon: Percent,
    title: "Zero Processing Fee",
    description: "No hidden charges or surprise processing fees. The price you see is the price you pay.",
    color: "#E31E24",
  },
  {
    icon: BadgeCheck,
    title: "Best Price Guarantee",
    description: "We promise the lowest prices. Found it cheaper? We'll match it and give you 10% extra off.",
    color: "#1a1f4e",
  },
  {
    icon: Wallet,
    title: "Zero Down Payment",
    description: "Start your holiday journey today without paying anything upfront. Pay as you go.",
    color: "#E31E24",
  },
  {
    icon: Clock,
    title: "24/7 Travel Support",
    description: "Our dedicated team is available round the clock to assist you before, during, and after your trip.",
    color: "#1a1f4e",
  },
  {
    icon: HeartHandshake,
    title: "15+ Years of Trust",
    description: "Over a decade of crafting unforgettable journeys for 10,000+ happy travelers across India.",
    color: "#E31E24",
  },
  {
    icon: Sparkles,
    title: "Handcrafted Itineraries",
    description: "Every trip is personally curated by our travel experts to match your interests and budget.",
    color: "#1a1f4e",
  },
  {
    icon: MapPin,
    title: "500+ Destinations",
    description: "From Maldives to Switzerland, Kashmir to Bali — we cover the world's most stunning destinations.",
    color: "#E31E24",
  },
  {
    icon: Plane,
    title: "Flight + Hotel Combos",
    description: "Save big with our bundled flight and accommodation packages. Everything taken care of.",
    color: "#1a1f4e",
  },
  {
    icon: Umbrella,
    title: "Travel Insurance",
    description: "Complimentary travel insurance included with every international package for peace of mind.",
    color: "#E31E24",
  },
  {
    icon: Users,
    title: "Group Tour Discounts",
    description: "Traveling with friends or family? Get exclusive group discounts on fixed departure tours.",
    color: "#1a1f4e",
  },
]

export function EmiOffers() {
  // Triple the features for seamless infinite loop
  const duplicatedFeatures = [...features, ...features, ...features]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f8f9fe] overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-bold text-[#E31E24] tracking-widest uppercase">Why Travelers Choose Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#1a1f4e] mt-3 mb-4">
            Everything You Need, All in One Place
          </h2>
          <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
            From zero-interest EMI to 24/7 support — we make your dream holiday effortless, affordable, and unforgettable.
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Feature Cards — Row 1 (Left to Right) */}
      <div className="relative mb-6">
        {/* Gradient fades on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f8f9fe] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: [0, `-${100 / 3}%`] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          className="flex gap-6"
        >
          {duplicatedFeatures.map((feature, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 w-[300px] bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/40 border border-gray-100 hover:shadow-xl hover:border-[#E31E24]/20 transition-all duration-300 group cursor-default"
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                  style={{ backgroundColor: `${feature.color}10` }}
                >
                  <feature.icon className="w-6 h-6 transition-colors duration-300" style={{ color: feature.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-heading font-bold text-[#1a1f4e] mb-1 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-[#6b7280] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Infinite Scrolling Feature Cards — Row 2 (Right to Left) */}
      <div className="relative">
        {/* Gradient fades on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f8f9fe] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: [`-${100 / 3}%`, 0] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 45,
              ease: "linear",
            },
          }}
          className="flex gap-6"
        >
          {[...duplicatedFeatures].reverse().map((feature, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 w-[300px] bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/40 border border-gray-100 hover:shadow-xl hover:border-[#1a1f4e]/20 transition-all duration-300 group cursor-default"
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                  style={{ backgroundColor: `${feature.color}10` }}
                >
                  <feature.icon className="w-6 h-6 transition-colors duration-300" style={{ color: feature.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-heading font-bold text-[#1a1f4e] mb-1 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-[#6b7280] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
