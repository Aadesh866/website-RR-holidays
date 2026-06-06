"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const mediaItems = [
  {
    type: "video",
    src: "/hero-video.mp4",
  },
  {
    type: "image",
    src: "https://images.pexels.com/photos/6130011/pexels-photo-6130011.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    type: "image",
    src: "https://images.pexels.com/photos/1915894/pexels-photo-1915894.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop",
  }
]

export function RotatingHero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaItems.length)
    }, 5000) // Rotate every 5 seconds
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0 bg-[#1a1f4e]"
        >
          {mediaItems[currentIndex].type === "video" ? (
            <video
              ref={(el) => { if(el) el.play().catch(e => console.log("Autoplay blocked", e)) }}
              src={mediaItems[currentIndex].src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-90"
            />
          ) : (
            <Image
              src={mediaItems[currentIndex].src}
              alt="Premium Travel Experiences"
              fill
              className="object-cover"
              priority
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Very light overlay to increase brightness but keep text legible */}
      <div className="absolute inset-0 bg-black/10 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 z-0" />
      
      <div className="container relative z-10 mx-auto px-4 max-w-5xl text-center">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-medium mb-6 drop-shadow-2xl leading-tight"
        >
          Design Your Dream Vacay
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white font-medium mb-10 max-w-2xl mx-auto drop-shadow-lg"
        >
          Experience the world with RR Holidays.
        </motion.p>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/packages" className="inline-flex items-center justify-center bg-[#E31E24] hover:bg-[#c21419] text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
            Explore Destinations
          </Link>
        </motion.div>
      </div>

      {/* Rotation Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {mediaItems.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-12 h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === idx ? "bg-white" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
