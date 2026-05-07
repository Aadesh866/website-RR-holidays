"use client"

import { useState } from "react"
import { destinations } from "@/data/destinations"
import { DestinationCard } from "@/components/destination-card"
import { useStaggerAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = ["All", "International", "Domestic", "Honeymoon", "Beach", "Mountains"] as const
type Category = typeof categories[number]

interface DestinationsProps {
  showAll?: boolean
  maxItems?: number
}

export function Destinations({ showAll = false, maxItems }: DestinationsProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("All")
  const gridRef = useStaggerAnimation(0.1)

  const filteredDestinations = activeCategory === "All"
    ? destinations
    : destinations.filter((dest) => dest.categories.includes(activeCategory as any))

  const displayDestinations = maxItems ? filteredDestinations.slice(0, maxItems) : filteredDestinations

  return (
    <section id="destinations" className="py-20 md:py-24 bg-gradient-to-b from-[#f0f1fa] to-[#e8e9f5]">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#E31E24] text-sm font-medium uppercase tracking-[0.25em] mb-5">
            Explore the World
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1a1f4e] leading-[1.2] mb-5">
            Trending Destinations
          </h2>
          <p className="text-[#4b5563] text-lg max-w-2xl mx-auto leading-relaxed">
            Discover handpicked destinations across the globe, from tropical beaches to mountain peaks
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-7 py-3 rounded-full text-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-[#E31E24] text-white shadow-lg"
                  : "bg-white text-[#1a1f4e] hover:bg-white/80 border border-[#e5e7eb]"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
        >
          {displayDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        {/* View All Link (only on home page) */}
        {!showAll && maxItems && (
          <div className="text-center mt-14">
            <Link
              href="/destinations"
              className="inline-flex items-center text-[#E31E24] font-medium text-lg hover:underline group"
            >
              View All Destinations
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
