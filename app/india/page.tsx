import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CountryEnquiryForm } from "@/components/country-enquiry"
import { getContextualImage } from "@/lib/image-utils"
import { MapPin } from "lucide-react"

const indiaRegions = [
  {
    id: "north-india",
    title: "North India",
    description: "Explore the majestic Himalayas, historical monuments, and vibrant culture.",
    packageCount: 13
  },
  {
    id: "south-india",
    title: "South India",
    description: "Discover serene backwaters, ancient temples, and lush hill stations.",
    packageCount: 14
  },
  {
    id: "east-india",
    title: "East India",
    description: "Experience untouched nature, tribal heritage, and spiritual awakening.",
    packageCount: 6
  },
  {
    id: "north-east-india",
    title: "North East India",
    description: "Journey through misty mountains, living root bridges, and tea gardens.",
    packageCount: 8
  },
  {
    id: "west-india",
    title: "West India",
    description: "Immerse in desert safaris, golden beaches, and royal palaces.",
    packageCount: 7
  },
  {
    id: "central-india",
    title: "Central India",
    description: "Dive into rich wildlife, ancient forts, and the heart of Indian heritage.",
    packageCount: 5
  }
]

export default function IndiaLandingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f9fafb] pb-20">
        
        {/* Stunning Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] w-full">
          <Image
            src={getContextualImage("taj-mahal-india", 0, "hero")}
            alt="Incredible India Tour Packages"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2b]/90 via-[#0a0f2b]/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
            <div className="container mx-auto max-w-7xl">
              <span className="inline-block px-4 py-1.5 bg-[#E31E24] text-white text-sm font-bold tracking-wider uppercase rounded-full mb-6 shadow-lg">
                Domestic Tours
              </span>
              <h1 className="text-5xl md:text-7xl font-serif text-white font-medium mb-4 drop-shadow-lg">
                Incredible India
              </h1>
              <p className="text-xl text-white/90 max-w-2xl font-light drop-shadow-md">
                From the snow-capped peaks of the Himalayas to the sun-kissed beaches of the South. Explore the diverse beauty, culture, and heritage of India.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl mt-12 relative z-10">
          
          {/* Regions Grid */}
          <div className="mb-24">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 border-b border-gray-200 pb-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-[#1a1f4e] mb-2">Explore By Region</h2>
                <p className="text-gray-500">Select a region to view our curated itineraries and packages.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {indiaRegions.map((region) => {
                return (
                  <Link 
                    href={`/india/${region.id}`} 
                    key={region.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100 h-full"
                  >
                    {/* Image Section */}
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={getContextualImage(region.id, 0, "card")}
                        alt={region.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#1a1f4e] shadow-sm">
                        {region.packageCount} Packages
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-serif text-[#1a1f4e] font-medium mb-3 group-hover:text-[#E31E24] transition-colors">
                        {region.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                        {region.description}
                      </p>
                      
                      <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="w-4 h-4 mr-1.5 text-[#E31E24]" />
                          Explore Region
                        </div>
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
          </div>
          
        </div>
        
        {/* Enquiry Form */}
        <CountryEnquiryForm />

      </main>
      <Footer />
    </>
  )
}
