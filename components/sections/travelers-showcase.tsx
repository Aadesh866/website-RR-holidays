"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Users, Award, Globe, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Zero Rupees Interest",
    subtitle: "with RR",
    description: "Stress-free vacations with no upfront costs"
  },
  {
    icon: Award,
    title: "3 Months Easy EMI",
    subtitle: "Holidays with RR",
    description: "Flexible payment options for your dream trip"
  },
  {
    icon: Globe,
    title: "Zero Processing Fee",
    subtitle: "with RR",
    description: "Stress-free vacations with no hidden charges"
  },
  {
    icon: TrendingUp,
    title: "Zero Rupees Down Payment",
    subtitle: "with RR",
    description: "Book now, pay later with complete flexibility"
  }
]

const travelerImages = [
  {
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80&auto=format&fit=crop",
    alt: "Happy woman traveler with backpack"
  },
  {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80&auto=format&fit=crop",
    alt: "Couple travelers at airport"
  },
  {
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80&auto=format&fit=crop",
    alt: "Family on vacation"
  },
  {
    src: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=400&q=80&auto=format&fit=crop",
    alt: "Young traveler exploring"
  },
  {
    src: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=400&q=80&auto=format&fit=crop",
    alt: "Couple enjoying vacation"
  },
  {
    src: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400&q=80&auto=format&fit=crop",
    alt: "Happy family travelers"
  }
]

export function TravelersShowcase() {
  // Duplicate images for seamless loop
  const duplicatedImages = [...travelerImages, ...travelerImages]

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

        {/* Auto-Scrolling Travelers Carousel */}
        <div className="relative overflow-hidden">
          {/* Gradient fades on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#E31E24] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#E31E24] to-transparent z-10 pointer-events-none" />
          
          <motion.div
            animate={{
              x: [0, -50 * travelerImages.length + "%"]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear"
              }
            }}
            className="flex gap-6"
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-[280px] h-[400px] rounded-2xl overflow-hidden group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            ))}
          </motion.div>
        </div>

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
