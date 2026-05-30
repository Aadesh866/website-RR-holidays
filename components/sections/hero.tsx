"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const heroMedia = [
  {
    type: "video",
    src: "/broll-video.mp4", // User can drop an mp4 here later
    fallbackImg: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1920&q=80&auto=format&fit=crop",
    alt: "Group of friends traveling and exploring the world",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80&auto=format&fit=crop",
    alt: "Beautiful sunset over ocean horizon",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80&auto=format&fit=crop",
    alt: "Breathtaking mountain lake landscape",
  }
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval>>(null)
  
  // Track if video successfully plays
  const [videoError, setVideoError] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroMedia.length)
    setAnimationKey((prev) => prev + 1)
  }, [])

  useEffect(() => {
    // Only auto-slide if it's an image. If video, let the video play.
    if (heroMedia[currentSlide].type === "image" || videoError) {
      timerRef.current = setInterval(nextSlide, 6000)
    } else {
      // If video, we slide when the video ends (handled by onEnded)
      // or we just let it loop if we want one video. For now we loop the video.
      if (timerRef.current) clearInterval(timerRef.current)
    }
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [nextSlide, currentSlide, videoError])

  const media = heroMedia[currentSlide]

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0d1130] flex flex-col justify-center items-center">
      
      {/* Background Media */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={animationKey}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {media.type === "video" && !videoError ? (
              <video
                src={media.src}
                autoPlay
                muted
                loop
                playsInline
                onError={() => setVideoError(true)}
                className="object-cover w-full h-full animate-kenburns"
              />
            ) : (
              <Image
                src={(media.type === "video" ? media.fallbackImg : media.src) || ""}
                alt={media.alt}
                fill
                priority
                className="object-cover animate-kenburns"
                sizes="100vw"
              />
            )}
            {/* Dark overlay for text legibility */}
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1130]/80 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4"
        >
          <span className="font-cursive text-4xl md:text-5xl lg:text-6xl text-[#E31E24] drop-shadow-lg">
            South India's No.1
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-bold text-white leading-[1.1] tracking-tight mb-8 drop-shadow-xl">
          Premium Journeys <br className="hidden md:block" /> Crafted For You
        </h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/90 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light drop-shadow-md"
        >
          Experience the world like never before. Handcrafted domestic & international holiday packages designed to create memories that last a lifetime.
        </motion.p>
      </div>

      {/* Bottom Floating Elements */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 flex justify-between items-end z-20 pointer-events-none">
        
        {/* Bottom Left: WhatsApp Float */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="pointer-events-auto"
        >
          <Button asChild size="icon" rounded="full" className="w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] shadow-2xl hover:scale-110 transition-transform">
            <a href="https://wa.me/919842334325" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
              <MessageCircle className="h-7 w-7 text-white" />
            </a>
          </Button>
        </motion.div>

        {/* Bottom Right: CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="pointer-events-auto"
        >
          <Button asChild size="lg" className="bg-[#E31E24] hover:bg-[#c9171d] text-white shadow-2xl shadow-[#E31E24]/30 border-0 h-14 md:h-16 px-8 md:px-10 text-[15px] md:text-lg rounded-sm whitespace-nowrap">
            <Link href="/packages" className="inline-flex items-center justify-center gap-2 uppercase tracking-wider font-bold">
              Explore Packages
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>

      </div>
    </section>
  )
}
