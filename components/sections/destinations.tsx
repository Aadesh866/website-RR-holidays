"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useStaggerAnimation } from "@/hooks/use-scroll-animation"
import { getAllCountries } from "@/lib/packages"
import { ArrowRight } from "lucide-react"

// Define the categories to display on the homepage
const popularCategories = [
  {
    id: "Domestic",
    title: "India Tour Packages",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80&auto=format&fit=crop", // India (Taj Mahal)
    href: "/india",
  },
  {
    id: "International",
    title: "International Tour Packages",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80&auto=format&fit=crop", // Italy
    href: "/packages",
  },
  {
    id: "Honeymoon",
    title: "International Honeymoon Packages",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80&auto=format&fit=crop", // Maldives
    href: "/honeymoon",
  },
]

export function Destinations() {
  const gridRef = useStaggerAnimation(0.1)

  // Calculate the number of tours per category from all-packages.json
  const getTourCount = (categoryId: string) => {
    const countries = getAllCountries()
    
    if (categoryId === "Domestic") {
      // Count all India packages (regions ending with "INDIA")
      return countries
        .filter(country => country.name.includes("INDIA"))
        .reduce((sum, country) => sum + country.packages.length, 0)
    }
    
    if (categoryId === "International") {
      // Count all non-India packages
      return countries
        .filter(country => !country.name.includes("INDIA"))
        .reduce((sum, country) => sum + country.packages.length, 0)
    }
    
    if (categoryId === "Honeymoon") {
      // Use keyword matching for honeymoon packages
      const honeymoonKeywords = ['honeymoon', 'romantic', 'couple', 'maldives', 'bali', 'mauritius', 'seychelles', 'santorini', 'venice', 'paris']
      let count = 0
      
      for (const country of countries) {
        for (const pkg of country.packages) {
          const searchableText = `${pkg.title} ${pkg.overview} ${pkg.highlights.join(' ')}`.toLowerCase()
          const isMatch = honeymoonKeywords.some(keyword => searchableText.includes(keyword))
          if (isMatch) count++
        }
      }
      
      return count
    }
    
    return 0
  }

  return (
    <section id="destinations" className="py-24 bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1f4e] leading-tight mb-2">
            Popular Packages
          </h2>
          <div className="w-20 h-1 bg-[#E31E24] mx-auto md:mx-0"></div>
        </div>

        {/* Categories Grid (GT Holidays Style) */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {popularCategories.map((category) => {
            const displayCount = getTourCount(category.id);
            
            return (
              <Link href={category.href} key={category.id}>
                <div className="group relative w-full aspect-square overflow-hidden bg-[#1a1f4e] cursor-pointer">
                  {/* Background Image */}
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 ease-in-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Dark Vignette/Overlay for Text Legibility */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Content (Centered) */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4 drop-shadow-md">
                      {category.title}
                    </h3>
                    <div className="bg-[#E31E24] text-white text-sm font-bold tracking-widest uppercase px-6 py-2 shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300">
                      {displayCount} TOURS
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* View All Link */}
        <div className="mt-16 text-center">
          <Link
            href="/packages"
            className="inline-flex items-center justify-center bg-[#1a1f4e] hover:bg-[#E31E24] text-white font-bold py-4 px-10 tracking-widest uppercase text-sm transition-colors duration-300 shadow-xl"
          >
            Explore All Packages
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
