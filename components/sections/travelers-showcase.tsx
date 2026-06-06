"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const travelerImages = [
  {
    src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1974&auto=format&fit=crop", // Santorini
    alt: "Happy travelers in Santorini"
  },
  {
    src: "https://images.unsplash.com/photo-1516483638261-f40af5eba324?q=80&w=1974&auto=format&fit=crop", // Cinque Terre
    alt: "Beautiful coastal town"
  },
  {
    src: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2068&auto=format&fit=crop", // Beach
    alt: "Tropical beach vacation"
  },
  {
    src: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop", // Paris
    alt: "Couple enjoying Paris"
  },
  {
    src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1968&auto=format&fit=crop", // Venice
    alt: "Gondola in Venice"
  },
  {
    src: "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?q=80&w=1964&auto=format&fit=crop", // Mountains
    alt: "Family in mountains"
  },
  {
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1920&auto=format&fit=crop", // Dubai
    alt: "City skyline"
  },
  {
    src: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1920&auto=format&fit=crop", // Taj Mahal
    alt: "Traveler at Taj Mahal"
  }
]

export function TravelersShowcase() {
  // Triple the images for ultra-smooth seamless loop
  const duplicatedImages = [...travelerImages, ...travelerImages, ...travelerImages]

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Auto-Scrolling High-Quality Travelers Carousel */}
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
              duration: 20,
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
