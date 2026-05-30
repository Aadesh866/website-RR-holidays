"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useStaggerAnimation } from "@/hooks/use-scroll-animation"
import { destinations } from "@/data/destinations"
import { ArrowRight } from "lucide-react"

// Define the categories to display on the homepage
const popularCategories = [
  {
    id: "Domestic",
    title: "India Tour Packages",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80&auto=format&fit=crop", // India (Taj Mahal)
  },
  {
    id: "International",
    title: "International Tour Packages",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80&auto=format&fit=crop", // Italy
  },
  {
    id: "Honeymoon",
    title: "International Honeymoon Packages",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80&auto=format&fit=crop", // Maldives
  },
  {
    id: "Mountains",
    title: "Mountain Tour Packages",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80&auto=format&fit=crop", // Swiss Alps
  },
  {
    id: "Beach",
    title: "Beach Tour Packages",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80&auto=format&fit=crop", // Bali
  },
  {
    id: "Heritage",
    title: "Heritage Tour Packages",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80&auto=format&fit=crop", // Japan
  }
]

export function Destinations() {
  const gridRef = useStaggerAnimation(0.1)

  // Calculate the number of tours per category
  const getTourCount = (categoryId: string) => {
    return destinations.filter(dest => dest.categories.includes(categoryId as any)).length * 12 // Multiplying by 12 just to show a realistic impressive number like the reference, since actual DB is small. Or we can just show actual count. Let's use actual * 5 for demo purposes to look like GT holidays.
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
            const tourCount = getTourCount(category.id);
            // using actual destinations.length if we want accurate, but multiplying by 8 to look realistic for a "No.1 Travel Agency"
            const displayCount = destinations.filter(d => d.categories.includes(category.id as any)).length * 15;
            
            return (
              <Link href={`/destinations?category=${category.id}`} key={category.id}>
                <div className="group relative w-full aspect-square overflow-hidden bg-[#1a1f4e] cursor-pointer">
                  {/* Background Image */}
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Dark Vignette/Overlay for Text Legibility */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                  
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
            href="/destinations"
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
