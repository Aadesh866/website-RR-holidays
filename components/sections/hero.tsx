"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, MessageCircle, Globe, Users, Award, Headphones, ChevronLeft, ChevronRight, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80&auto=format&fit=crop",
    alt: "Tropical beach aerial view with turquoise waters",
  },
  {
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80&auto=format&fit=crop",
    alt: "Breathtaking mountain lake landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80&auto=format&fit=crop",
    alt: "Beautiful sunset over ocean horizon",
  },
  {
    src: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1920&q=80&auto=format&fit=crop",
    alt: "Swiss Alps mountain village scenery",
  },
]

const stats = [
  { icon: Globe, label: "Destinations", value: 500, suffix: "+" },
  { icon: Users, label: "Happy Travelers", value: 10000, suffix: "+" },
  { icon: Award, label: "Years Experience", value: 15, suffix: "+" },
  { icon: Headphones, label: "Support", value: 24, suffix: "/7" },
]

function StatCounter({ icon: Icon, label, value, suffix }: typeof stats[0]) {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#E31E24]/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-[#E31E24]" />
      </div>
      <div>
        <div className="text-2xl font-bold text-[#1a1f4e] font-heading">
          {value}{suffix}
        </div>
        <div className="text-sm text-[#4b5563]">{label}</div>
      </div>
    </div>
  )
}

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval>>(null)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    setAnimationKey((prev) => prev + 1)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
    setAnimationKey((prev) => prev + 1)
  }, [])

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 6000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [nextSlide])



  return (
    <>
    <section className="relative min-h-[90vh] md:h-[95vh] w-full overflow-hidden bg-[#0d1130]">
      {/* Background with subtle overlay */}
      <div className="absolute inset-0 w-full h-full opacity-60">
        <Image
          src="/diverse_travelers_hero.png"
          alt="Diverse travelers from various cultures exploring together"
          fill
          priority
          className="object-cover animate-kenburns"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f4e]/95 via-[#1a1f4e]/80 to-transparent" />
      </div>

      {/* Floating Airplanes Motif */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: ["-10vw", "110vw"], y: ["10vh", "-10vh"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-0 opacity-10 text-white"
        >
          <Plane className="w-16 h-16 -rotate-12" />
        </motion.div>
        <motion.div
          animate={{ x: ["110vw", "-10vw"], y: ["50vh", "30vh"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
          className="absolute top-[40%] right-0 opacity-5 text-white"
        >
          <Plane className="w-24 h-24 rotate-[190deg]" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center pt-[180px] pb-36">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Text */}
          <div className="max-w-2xl py-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6"
            >
              <span className="font-cursive text-4xl md:text-5xl text-[#FFD700] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                South India's No.1
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight mb-8">
              {["Premium", "Journeys", "Crafted", "For", "You"].map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.3 + index * 0.05,
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light"
            >
              Experience the world like never before. Handcrafted domestic & international holiday packages designed to create memories that last a lifetime.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Button asChild size="lg" rounded="full" className="bg-[#E31E24] hover:bg-[#c9171d] text-white shadow-lg shadow-[#E31E24]/20 border-0 h-14 px-10 text-[15px] whitespace-nowrap">
                <Link href="/packages">
                  Explore Packages
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" rounded="full" variant="outline" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-[#1a1f4e] h-14 px-10 text-[15px] whitespace-nowrap">
                <a href="https://wa.me/919842334325?text=Hi,%20I'm%20interested%20in%20RR%20Holidays%20packages.%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Plan My Trip
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right Image (Happy Traveler) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-end items-end h-[85vh] relative"
          >
            {/* Glow behind the image */}
            <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-[#E31E24]/30 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative w-full h-full max-w-[650px]">
              <Image
                src="/image.png"
                alt="Happy diverse travelers"
                fill
                className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>

    {/* Floating Stats Bar */}
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-20 -mt-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl shadow-gray-400/30 border border-gray-100 p-8 md:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCounter key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
    </>
  )
}
