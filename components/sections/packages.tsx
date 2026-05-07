"use client"

import { packages } from "@/data/packages"
import { PackageCard } from "@/components/package-card"
import { useStaggerAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface PackagesProps {
  showAll?: boolean
  maxItems?: number
}

export function Packages({ showAll = false, maxItems }: PackagesProps) {
  const gridRef = useStaggerAnimation(0.1)
  const displayPackages = maxItems ? packages.slice(0, maxItems) : packages

  return (
    <section id="packages" className="py-20 md:py-24 bg-[#f8f9fc]">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-[#E31E24] text-sm font-medium uppercase tracking-[0.25em] mb-5">
              Curated For You
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1a1f4e] leading-[1.2]">
              Popular Tour Packages
            </h2>
          </div>
          {!showAll && (
            <Link
              href="/packages"
              className="hidden md:flex items-center text-[#E31E24] font-medium hover:underline group"
            >
              View All
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {/* Packages Grid */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {displayPackages.map((pkg) => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </div>

        {/* View All (mobile / home page) */}
        {!showAll && (
          <div className="text-center mt-14 md:hidden">
            <Link
              href="/packages"
              className="inline-flex items-center text-[#E31E24] font-medium text-lg hover:underline group"
            >
              View All Packages
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
