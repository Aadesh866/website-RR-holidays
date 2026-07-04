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
  const [currentPage, setCurrentPage] = useState(1);
  const [showAllPages, setShowAllPages] = useState(false);

  // Filter to show ONLY international packages (exclude India)
  const allPackages = countries
    .filter(country => !country.name.includes("INDIA"))
    .flatMap(country => 
      country.packages.map((pkg: Package) => ({
        ...pkg,
        countryName: country.name,
        continent: country.continent
      }))
    );
  
  const itemsPerPage = 9; // 3x3 grid
  const totalPages = Math.ceil(allPackages.length / itemsPerPage);
  const maxVisiblePages = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visiblePackages = allPackages.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const element = document.getElementById("packages");
    if (element) {
      setTimeout(() => {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 50);
    }
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
            Showing {Math.min(endIndex, allPackages.length)} of {allPackages.length} packages
          </div>
        </div>

        {/* Packages Grid - 3x3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{visiblePackages.map((pkg) => {
            const isIndia = pkg.continent.toLowerCase() === 'india';
            
            // Clean slugs
            const formatSlug = (str: string) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            const continentSlug = formatSlug(pkg.continent);
            const countrySlug = formatSlug(pkg.countryName);
            
            // Correct dynamic routing
            let href = `/packages/${continentSlug}/${countrySlug}/${pkg.slug}`;
            if (isIndia) {
               // Map stateSlug to region for India or just use stateSlug
               const regionSlug = pkg.stateSlug ? formatSlug(pkg.stateSlug) : 'south-india';
               href = `/india/${regionSlug}/${pkg.slug}`;
            }
            
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

        {/* Smart Pagination with Load More */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center gap-6 mt-16">
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="rounded-full flex items-center justify-center w-12 h-12 border border-[#1a1f4e]/20 text-[#1a1f4e] hover:bg-[#1a1f4e] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              
              <div className="flex gap-2">
                {/* Show pages 1-5 initially */}
                {Array.from({ length: Math.min(maxVisiblePages, totalPages) }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`w-10 h-10 rounded-full font-medium transition-colors flex items-center justify-center ${
                      currentPage === i + 1 
                        ? 'bg-[#E31E24] text-white' 
                        : 'bg-white text-[#1a1f4e] hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                
                {/* Show ellipsis and Load More if there are more than 5 pages and not expanded */}
                {totalPages > maxVisiblePages && !showAllPages && (
                  <>
                    <div className="flex items-center px-2 text-gray-400">...</div>
                    <button
                      onClick={() => setShowAllPages(true)}
                      className="px-4 h-10 rounded-full font-medium bg-[#1a1f4e] text-white hover:bg-[#E31E24] transition-colors flex items-center gap-2"
                    >
                      Load More Pages
                    </button>
                  </>
                )}
                
                {/* Show remaining pages after Load More is clicked */}
                {showAllPages && totalPages > maxVisiblePages && (
                  <>
                    {Array.from({ length: totalPages - maxVisiblePages }).map((_, i) => {
                      const pageNum = i + maxVisiblePages + 1;
                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          className={`w-10 h-10 rounded-full font-medium transition-colors flex items-center justify-center ${
                            currentPage === pageNum 
                              ? 'bg-[#E31E24] text-white' 
                              : 'bg-white text-[#1a1f4e] hover:bg-gray-200 border border-gray-200'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </>
                )}
              </div>

              <button
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="rounded-full flex items-center justify-center w-12 h-12 border border-[#1a1f4e]/20 text-[#1a1f4e] hover:bg-[#1a1f4e] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
            
            {/* Page info */}
            <div className="text-sm text-gray-500">
              Page {currentPage} of {totalPages}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
