"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface PageHeroProps {
  title: string
  subtitle: string
  image: string
}

export function PageHero({ title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative h-[65vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f4e]/40 via-[#1a1f4e]/60 to-[#1a1f4e]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-heading font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
