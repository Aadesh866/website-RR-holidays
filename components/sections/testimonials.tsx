"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { testimonials, Testimonial } from "@/data/testimonials"

function ReviewCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="p-5 md:p-6 rounded-2xl border border-[#1a1f4e]/10 bg-white shadow-sm hover:shadow-lg transition-all duration-500 hover:border-[#E31E24]/30 group relative overflow-hidden mb-5">
      {/* Quote Text */}
      <p className="text-base md:text-lg italic font-heading text-[#1a1f4e] leading-relaxed mb-6 text-balance relative z-10">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Bottom Row: User Info */}
      <div className="flex items-center gap-3 relative z-10">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1a1f4e] to-[#2E3192] flex items-center justify-center text-white font-heading text-sm flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-500">
          {testimonial.initials}
        </div>
        <div>
          <div className="font-bold text-[#1a1f4e] text-sm">
            {testimonial.name}
          </div>
          <div className="text-[9px] font-semibold tracking-wider uppercase text-[#E31E24] mt-0.5">
            {testimonial.location.toUpperCase()} TRAVELER
          </div>
        </div>
      </div>

      {/* Subtle Quote Icon in Background */}
      <Quote className="absolute top-4 right-4 w-12 h-12 text-[#1a1f4e]/[0.03] -z-0 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#f0f1fa] relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-gradient-to-b from-white/40 to-transparent blur-3xl pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="text-[#E31E24] text-sm font-medium uppercase tracking-[0.25em] mb-5">
            Real Stories
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-[#1a1f4e] leading-[1.1] tracking-tight">
            Stories from Our Travelers
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="break-inside-avoid"
            >
              <ReviewCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
