"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Shield, CreditCard, Percent, BadgeCheck, Phone } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"

const offers = [
  {
    title: "ZERO RUPEES INTEREST",
    subtitle: "STRESS-FREE VACATION WITH RR",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&auto=format&fit=crop",
    highlights: [
      { icon: Shield, label: "Easy Processing", desc: "Get approval within 4 days" },
      { icon: CreditCard, label: "Best EMI Option", desc: "No hidden charges, No processing fees, No interest" },
    ],
  },
  {
    title: "6 MONTHS EASY EMI",
    subtitle: "HOLIDAYS WITH RR HOLIDAYS",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=600&q=80&auto=format&fit=crop",
    highlights: [
      { icon: Shield, label: "Easy Processing", desc: "Get approval within 4 days" },
      { icon: CreditCard, label: "Best EMI Option", desc: "No hidden charges, No processing fees, No interest" },
    ],
  },
  {
    title: "ZERO PROCESSING FEE",
    subtitle: "STRESS-FREE VACATION WITH RR",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=600&q=80&auto=format&fit=crop",
    highlights: [
      { icon: Shield, label: "Easy Processing", desc: "Get approval within 4 days" },
      { icon: CreditCard, label: "Best EMI Option", desc: "No hidden charges, No processing fees, No interest" },
    ],
  },
  {
    title: "ZERO RUPEES DOWN PAYMENT",
    subtitle: "STRESS-FREE VACATION WITH RR",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80&auto=format&fit=crop",
    highlights: [
      { icon: Shield, label: "Easy Processing", desc: "Get approval within 4 days" },
      { icon: CreditCard, label: "Best EMI Option", desc: "No hidden charges, No processing fees, No interest" },
    ],
  },
]

export function EmiOffers() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const el = scrollRef.current
    if (el) {
      el.addEventListener("scroll", checkScroll)
      checkScroll()
      return () => el.removeEventListener("scroll", checkScroll)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector(".emi-card")?.clientWidth || 320
      scrollRef.current.scrollBy({
        left: direction === "left" ? -(cardWidth + 24) : cardWidth + 24,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-20 bg-[#f8f9fe] overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-bold text-[#E31E24] tracking-widest uppercase">Flexible Payment Options</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#1a1f4e] mt-3 mb-4">
            Stress-Free Holidays with RR
          </h2>
          <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
            Book your dream vacation today and pay in easy monthly installments. No hidden charges, no surprises.
          </p>
        </motion.div>

        {/* Cards Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-xl shadow-gray-200/50 border border-gray-100 flex items-center justify-center text-[#1a1f4e] hover:bg-[#E31E24] hover:text-white hover:border-[#E31E24] transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-xl shadow-gray-200/50 border border-gray-100 flex items-center justify-center text-[#1a1f4e] hover:bg-[#E31E24] hover:text-white hover:border-[#E31E24] transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="emi-card snap-start flex-shrink-0 w-[300px] sm:w-[320px] bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:border-[#E31E24]/20 transition-all group"
              >
                {/* Card Image */}
                <div className="relative h-[220px] overflow-hidden bg-gradient-to-br from-[#f8f9fe] to-[#e8e9f4]">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="320px"
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
                </div>

                {/* Card Content */}
                <div className="p-6 -mt-4 relative">
                  <h3 className="text-lg font-heading font-extrabold text-[#E31E24] leading-tight mb-1 tracking-wide">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-[#4b5563] font-semibold tracking-wider uppercase mb-5">
                    {offer.subtitle}
                  </p>

                  {/* Highlights */}
                  <div className="flex gap-4 mb-5">
                    {offer.highlights.map((hl, i) => (
                      <div key={i} className="flex-1 flex items-start gap-2">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#1a1f4e]/5 flex items-center justify-center mt-0.5">
                          <hl.icon className="w-4 h-4 text-[#1a1f4e]" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#1a1f4e] leading-tight">{hl.label}</div>
                          <div className="text-[10px] text-[#9ca3af] leading-tight mt-0.5">{hl.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href="tel:+919842334325"
                    className="flex items-center justify-center w-full py-3 rounded-full bg-[#1a1f4e] text-white text-sm font-bold hover:bg-[#E31E24] transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    CALL US AT 9842334325
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
