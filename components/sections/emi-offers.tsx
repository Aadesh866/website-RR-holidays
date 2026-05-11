"use client"

import { motion } from "framer-motion"
import { Shield, CreditCard, Percent, Wallet, Clock, HeartHandshake, Phone, BadgeCheck, Plane, Umbrella } from "lucide-react"
import Image from "next/image"

const offers = [
  {
    title: "100% SECURE BOOKING",
    subtitle: "TRUSTED BY 10,000+ TRAVELERS",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80&auto=format&fit=crop",
    highlights: [
      { icon: Shield, label: "Bank-Grade Security", desc: "Safe & encrypted transactions" },
      { icon: BadgeCheck, label: "Verified Partners", desc: "Only trusted global vendors" },
    ],
  },
  {
    title: "ZERO INTEREST EMI",
    subtitle: "STRESS-FREE VACATION WITH RR",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&auto=format&fit=crop",
    highlights: [
      { icon: Clock, label: "Easy Processing", desc: "Get approval within 4 days" },
      { icon: CreditCard, label: "Best EMI Option", desc: "0% interest on 6-month plans" },
    ],
  },
  {
    title: "ZERO PROCESSING FEE",
    subtitle: "TRANSPARENT PRICING GUARANTEE",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=600&q=80&auto=format&fit=crop",
    highlights: [
      { icon: Percent, label: "No Hidden Costs", desc: "The price you see is final" },
      { icon: HeartHandshake, label: "Honest Deals", desc: "No last-minute surprises" },
    ],
  },
  {
    title: "ZERO DOWN PAYMENT",
    subtitle: "START YOUR JOURNEY TODAY",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80&auto=format&fit=crop",
    highlights: [
      { icon: Wallet, label: "Pay As You Go", desc: "Travel now, pay later" },
      { icon: Plane, label: "Instant Booking", desc: "Lock in prices immediately" },
    ],
  },
  {
    title: "24/7 TRAVEL SUPPORT",
    subtitle: "WE ARE ALWAYS WITH YOU",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=600&q=80&auto=format&fit=crop",
    highlights: [
      { icon: Phone, label: "Round the Clock", desc: "Dedicated global helpline" },
      { icon: HeartHandshake, label: "Personal Guide", desc: "Assistance at every step" },
    ],
  },
  {
    title: "COMPLIMENTARY INSURANCE",
    subtitle: "PEACE OF MIND GUARANTEED",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80&auto=format&fit=crop",
    highlights: [
      { icon: Umbrella, label: "Full Coverage", desc: "Medical & trip cancellation" },
      { icon: Shield, label: "Safety First", desc: "Included on all global trips" },
    ],
  },
]

export function EmiOffers() {
  // Duplicate the array to create a seamless infinite loop
  const duplicatedOffers = [...offers, ...offers, ...offers]

  return (
    <section className="py-20 bg-[#f8f9fe] overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 mb-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-bold text-[#E31E24] tracking-widest uppercase">Why Travelers Choose Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#1a1f4e] mt-3 mb-4">
            Premium Features for a Flawless Journey
          </h2>
          <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
            From zero-interest EMI to 24/7 support — we combine affordability with world-class service to make your dream holiday effortless.
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Container */}
      <div className="relative w-full">
        {/* Gradient fades on the edges for smooth entry/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#f8f9fe] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#f8f9fe] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: [0, `-${100 / 3}%`] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50, // Slow and smooth scrolling
              ease: "linear",
            },
          }}
          className="flex gap-6 w-max"
        >
          {duplicatedOffers.map((offer, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] sm:w-[340px] bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:border-[#E31E24]/20 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Card Image */}
              <div className="relative h-[220px] overflow-hidden bg-gradient-to-br from-[#f8f9fe] to-[#e8e9f4]">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="340px"
                />
                {/* Gradient overlay at bottom of image */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
              </div>

              {/* Card Content */}
              <div className="p-6 -mt-6 relative z-10 bg-white">
                <h3 className="text-lg font-heading font-extrabold text-[#E31E24] leading-tight mb-1 tracking-wide">
                  {offer.title}
                </h3>
                <p className="text-[11px] text-[#4b5563] font-semibold tracking-wider uppercase mb-5">
                  {offer.subtitle}
                </p>

                {/* Highlights */}
                <div className="flex flex-col gap-4 mb-6">
                  {offer.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#1a1f4e]/5 flex items-center justify-center mt-0.5">
                        <hl.icon className="w-4 h-4 text-[#1a1f4e]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#1a1f4e] leading-tight">{hl.label}</div>
                        <div className="text-xs text-[#6b7280] leading-tight mt-1">{hl.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="tel:+919842334325"
                  className="flex items-center justify-center w-full py-3 rounded-xl bg-gray-50 border border-gray-100 text-[#1a1f4e] text-sm font-bold hover:bg-[#E31E24] hover:text-white hover:border-[#E31E24] transition-all"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  CALL 9842334325
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
