"use client"

import { MapPinned, BadgeCheck, Headphones, CreditCard } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const features = [
  {
    icon: MapPinned,
    title: "Handcrafted Itineraries",
    description: "Every journey is tailor-made by our travel experts to match your style, pace, and budget.",
  },
  {
    icon: BadgeCheck,
    title: "Best Price Guarantee",
    description: "We match any comparable quote. Transparent pricing with no hidden costs, ever.",
  },
  {
    icon: Headphones,
    title: "24/7 Travel Support",
    description: "From booking to boarding, our team is just a call or WhatsApp away — anytime, anywhere.",
  },
  {
    icon: CreditCard,
    title: "Zero EMI Holidays",
    description: "Book your dream vacation with easy EMI options. Zero down payment, zero processing fees.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 md:py-32 w-full overflow-hidden">
      {/* Background Image with Parallax effect */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1920&q=80&auto=format&fit=crop"
          alt="Pristine Tropical Beach"
          fill
          className="object-cover scale-105"
        />
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-[#0d1130]/80" />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div className="text-[#E31E24] text-sm font-medium uppercase tracking-[0.25em] mb-5">
            The RR Difference
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-[1.1] tracking-tight">
            Why Travelers Trust Us
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                key={index}
                className="group p-8 rounded-[1.5rem] bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 text-center relative overflow-hidden"
              >
                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E31E24]/0 to-[#E31E24]/0 group-hover:from-[#E31E24]/10 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E31E24] to-[#c9171d] shadow-lg shadow-[#E31E24]/30 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
