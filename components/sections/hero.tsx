"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, MessageCircle, Globe, Users, Award, Headphones, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCountUp } from "@/hooks/use-count-up"
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
  const { count, elementRef } = useCountUp(value, 2)

  return (
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#E31E24]/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-[#E31E24]" />
      </div>
      <div>
        <div
          ref={elementRef as React.RefObject<HTMLDivElement>}
          className="text-2xl font-bold text-[#1a1f4e] font-heading"
        >
          {count}{suffix}
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
    <section className="relative h-screen w-full overflow-hidden">
      {/* Carousel Background with Ken Burns */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={animationKey}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute inset-0 w-full h-full animate-kenburns">
            <Image
              src={heroImages[currentSlide].src}
              alt={heroImages[currentSlide].alt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f4e]/40 via-[#1a1f4e]/50 to-[#1a1f4e]/85" />
        </motion.div>
      </AnimatePresence>

      {/* Slide Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-6 pointer-events-none">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all pointer-events-auto"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all pointer-events-auto"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => { setCurrentSlide(index); setAnimationKey((p) => p + 1) }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-[#E31E24]" : "w-4 bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#E31E24] text-sm font-medium uppercase tracking-[0.25em] mb-8"
            >
              Discover the Extraordinary
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight mb-8">
              {["Crafting", "Journeys", "That", "Last", "a", "Lifetime"].map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.3 + index * 0.05,
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                  style={{ marginRight: '0.25em' }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
            >
              From the backwaters of Kerala to the peaks of Switzerland — curated domestic & international holiday packages across 500+ destinations.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Button asChild size="lg" rounded="full" className="bg-[#E31E24] hover:bg-[#c9171d]">
                <Link href="#packages">
                  Explore Packages
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" rounded="full" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-[#1a1f4e]">
                <a href="https://wa.me/919842334325?text=Hi,%20I'm%20interested%20in%20RR%20Holidays%20packages.%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Plan My Trip
                </a>
              </Button>
            </motion.div>
          </div>
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
