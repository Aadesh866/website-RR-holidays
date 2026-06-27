"use client"

import { useState } from "react"
import { packages } from "@/data/packages"
import { PackageCard } from "@/components/package-card"
import { useStaggerAnimation } from "@/hooks/use-scroll-animation"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface PackagesProps {
  showAll?: boolean
  maxItems?: number
  isIndiaContext?: boolean
}

export function Packages({ showAll = false, maxItems, isIndiaContext = false }: PackagesProps) {
  const gridRef = useStaggerAnimation(0.1)
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    const element = document.getElementById("packages")
    if (element) {
      // Small delay to ensure render is complete before scrolling
      setTimeout(() => {
        const yOffset = -80; // Offset for navbar
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 50);
    }
  }
  
  const itemsPerPage = 9
  const totalPackages = showAll ? packages.length : (maxItems || packages.length)
  const totalPages = Math.ceil(totalPackages / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const displayPackages = showAll 
    ? packages.slice(startIndex, endIndex)
    : (maxItems ? packages.slice(0, maxItems) : packages)

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
              href={isIndiaContext ? "/india" : "/packages"}
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

        {/* Pagination */}
        {showAll && totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-16">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="rounded-full w-12 h-12 border-[#1a1f4e]/20 text-[#1a1f4e] hover:bg-[#1a1f4e] hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-10 h-10 rounded-full font-medium transition-colors ${
                    currentPage === i + 1 
                      ? 'bg-[#E31E24] text-white' 
                      : 'bg-white text-[#1a1f4e] hover:bg-gray-200'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="rounded-full w-12 h-12 border-[#1a1f4e]/20 text-[#1a1f4e] hover:bg-[#1a1f4e] hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        )}

        {/* View All (mobile / home page) */}
        {!showAll && (
          <div className="text-center mt-14 md:hidden">
            <Link
              href={isIndiaContext ? "/india" : "/packages"}
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
