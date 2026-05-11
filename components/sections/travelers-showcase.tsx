"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const travelerImages = [
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=95&auto=format&fit=crop",
    alt: "Happy travelers with backpacks"
  },
  {
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=95&auto=format&fit=crop",
    alt: "Young woman exploring map"
  },
  {
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=95&auto=format&fit=crop",
    alt: "Van trip in mountains"
  },
  {
    src: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&q=95&auto=format&fit=crop",
    alt: "Couple enjoying vacation"
  },
  {
    src: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800&q=95&auto=format&fit=crop",
    alt: "Friends on a trip"
  },
  {
    src: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=95&auto=format&fit=crop",
    alt: "Family on a road trip"
  },
  {
    src: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&q=95&auto=format&fit=crop",
    alt: "Group of friends traveling"
  },
  {
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=95&auto=format&fit=crop",
    alt: "Traveler standing on viewpoint"
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
