"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const travelerImages = [
  {
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=95&auto=format&fit=crop",
    alt: "Happy woman traveler with backpack"
  },
  {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=95&auto=format&fit=crop",
    alt: "Couple travelers at airport"
  },
  {
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=95&auto=format&fit=crop",
    alt: "Family on vacation"
  },
  {
    src: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&q=95&auto=format&fit=crop",
    alt: "Young traveler exploring"
  },
  {
    src: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&q=95&auto=format&fit=crop",
    alt: "Couple enjoying vacation"
  },
  {
    src: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=95&auto=format&fit=crop",
    alt: "Happy family travelers"
  },
  {
    src: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=95&auto=format&fit=crop",
    alt: "Group of friends traveling"
  },
  {
    src: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800&q=95&auto=format&fit=crop",
    alt: "Travelers with luggage"
  }
]

export function TravelersShowcase() {
  // Triple the images for ultra-smooth seamless loop
  const duplicatedImages = [...travelerImages, ...travelerImages, ...travelerImages]

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Auto-Scrolling Travelers Carousel */}
      <div className="relative overflow-hidden">
        {/* Gradient fades on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <motion.div
          animate={{
            x: [0, `-${100 / 3}%`]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
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
                sizes="280px"
                quality={95}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
