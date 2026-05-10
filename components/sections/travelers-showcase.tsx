"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Users, Award, Globe, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Zero Rupees Interest",
    subtitle: "with GT",
    description: "Stress-free vacations with no upfront costs"
  },
  {
    icon: Award,
    title: "3 Months Easy EMI",
    subtitle: "Holidays with GT",
    description: "Flexible payment options for your dream trip"
  },
  {
    icon: Globe,
    title: "Zero Processing Fee",
    subtitle: "with GT",
    description: "Stress-free vacations with no hidden charges"
  },
  {
    icon: TrendingUp,
    title: "Zero Rupees Down Payment",
    subtitle: "with GT",
    description: "Book now, pay later with complete flexibility"
  }
]

export function TravelersShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#E31E24] via-[#c9171d] to-[#E31E24] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Stress-Free Holidays with RR
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Experience hassle-free travel with our exclusive benefits and flexible payment options
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
            >
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">
                {feature.title}
              </h3>
              <p className="text-white/80 text-sm text-center mb-3 font-medium">
                {feature.subtitle}
              </p>
              <p className="text-white/70 text-sm text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Travelers Collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          <div className="relative h-64 rounded-2xl overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80&auto=format&fit=crop"
              alt="Happy woman traveler with backpack ready for adventure"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80&auto=format&fit=crop"
              alt="Couple travelers with luggage at airport"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80&auto=format&fit=crop"
              alt="Family travelers with suitcases on vacation"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=400&q=80&auto=format&fit=crop"
              alt="Young traveler with backpack exploring"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="tel:+919842334325"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#E31E24] rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-xl"
          >
            Call Us at +91 9842334325
          </a>
        </motion.div>
      </div>
    </section>
  )
}
