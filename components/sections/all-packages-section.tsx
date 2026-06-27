"use client"

import { useState } from "react"
import { Package } from "@/lib/packages"
import { getContextualImage } from "@/lib/image-utils"
import { ArrowRight, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface AllPackagesSectionProps {
  countries: any[]; // Country[] from lib/packages
}

export function AllPackagesSection({ countries }: AllPackagesSectionProps) {
  const [displayCount, setDisplayCount] = useState(12);

  // Flatten all packages across all countries
  const allPackages = countries.flatMap(country => 
    country.packages.map((pkg: Package) => ({
      ...pkg,
      countryName: country.name,
      continent: country.continent
    }))
  );
  
  // Sort or shuffle if desired, but for now we'll just display them as they are
  const visiblePackages = allPackages.slice(0, displayCount);
  const hasMore = displayCount < allPackages.length;

  const handleLoadMore = () => {
    setDisplayCount(prev => Math.min(prev + 12, allPackages.length));
  };

  return (
    <section id="packages" className="py-20 md:py-24 bg-[#f8f9fc]">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-[#E31E24] text-sm font-medium uppercase tracking-[0.25em] mb-5">
              Explore The World
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1a1f4e] leading-[1.2]">
              All Tour Packages
            </h2>
          </div>
          <div className="hidden md:flex text-gray-500 font-medium">
            Showing {visiblePackages.length} of {allPackages.length} packages
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {visiblePackages.map((pkg) => {
            const isIndia = pkg.continent.toLowerCase() === 'india';
            // India packages route differently: /india/[region]/[slug] vs /packages/[slug]
            // We'll use /packages/[slug] as the global fallback, but the India mega menu uses /packages/india/[region]/[slug]
            // Wait, the dynamic route for international packages is /packages/[slug]
            const href = `/packages/${pkg.slug}`;
            
            return (
              <Link 
                href={href} 
                key={`${pkg.countryName}-${pkg.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100 h-full"
              >
                {/* Image Section */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={getContextualImage(pkg.slug, 0, "card")}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#1a1f4e] shadow-sm">
                    {pkg.duration}
                  </div>
                  <div className="absolute top-4 left-4 bg-[#E31E24] px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm">
                    {pkg.countryName}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-serif text-[#1a1f4e] font-medium mb-3 group-hover:text-[#E31E24] transition-colors line-clamp-2">
                    {pkg.title}
                  </h3>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="truncate">{pkg.countryName}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{pkg.duration}</span>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[#1a1f4e] font-medium text-sm">View Details</span>
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-[#E31E24] transition-colors">
                      <svg className="w-4 h-4 text-[#1a1f4e] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-16">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 rounded-full bg-[#1a1f4e] text-white font-medium hover:bg-[#0d1130] transition-colors flex items-center group"
            >
              Load More Packages
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
