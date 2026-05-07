"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function GroupTours() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&q=80&auto=format&fit=crop"
          alt="Group of travelers at Paris Eiffel Tower"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f4e]/90 to-[#2E3192]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 text-center text-white">
        <div className="text-[#E31E24] text-sm font-medium uppercase tracking-[0.25em] mb-5">
          Fixed Departures
        </div>
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-[1.2]">
          Group Tours by RR Holidays
        </h2>
        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Join like-minded travelers on our premium group departures. Expert tour managers, fixed itineraries, unforgettable memories — at unbeatable prices.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Button asChild size="lg" rounded="full" className="bg-[#E31E24] hover:bg-[#c9171d]">
            <Link href="#packages">
              View Group Departures
            </Link>
          </Button>
          <Button asChild size="lg" rounded="full" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1a1f4e]">
            <a href="https://wa.me/919842334325?text=Hi,%20I'm%20interested%20in%20your%20group%20tour%20brochures." target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Download Brochure
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
