import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CountryEnquiryForm } from "@/components/country-enquiry"
import { Accordion } from "@/components/accordion"
import { getPackagesByCountry, parseCountryMarkdown } from "@/lib/packages"
import { MapPin, Clock, Info, Shield, CreditCard, Camera, Users, Plane, CheckCircle2 } from "lucide-react"

export default async function IndiaRegionPage(props: { params: Promise<{ region: string }> }) {
  const params = await props.params;
  
  // Since 'India' is the continent and 'North India' (etc) is treated as the country in our JSON
  const regionData = getPackagesByCountry('india', params.region)
  
  if (!regionData || !regionData.packages || regionData.packages.length === 0) {
    notFound()
  }

  const packages = regionData.packages
  const parsedData = parseCountryMarkdown(regionData.markdownContent)

  // Map region slug back to a nice name for the hero text
  const regionNameMap: Record<string, string> = {
    'north-india': 'North India',
    'south-india': 'South India',
    'east-india': 'East India',
    'north-east-india': 'North East India',
    'west-india': 'West India',
    'central-india': 'Central India'
  }
  const displayRegion = regionNameMap[params.region] || regionData.name

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f9fafb] pb-20">
        
        {/* Stunning Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] w-full">
          <Image
            src={`https://picsum.photos/seed/india-${params.region}/1920/1080`}
            alt={`${displayRegion} Tour Packages`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2b]/90 via-[#0a0f2b]/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
            <div className="container mx-auto max-w-7xl">
              <span className="inline-block px-4 py-1.5 bg-[#E31E24] text-white text-sm font-bold tracking-wider uppercase rounded-full mb-6 shadow-lg">
                Explore Incredible India
              </span>
              <h1 className="text-5xl md:text-7xl font-serif text-white font-medium mb-4 drop-shadow-lg">
                {displayRegion} Packages
              </h1>
              <p className="text-xl text-white/90 max-w-2xl font-light drop-shadow-md">
                Discover the diverse heritage, culture, and unforgettable experiences waiting for you in {displayRegion}.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl mt-12 relative z-10">
          
          {/* Packages Grid */}
          <div className="mb-24">
            <div className="flex justify-between items-end mb-10 border-b border-gray-200 pb-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-[#1a1f4e] mb-2">Available {displayRegion} Packages</h2>
                <p className="text-gray-500">Select a package to view detailed itineraries.</p>
              </div>
              <span className="text-[#E31E24] font-bold text-xl">{packages.length} Packages</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <Link 
                  href={`/india/${params.region}/${pkg.slug}`} 
                  key={pkg.slug}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100 h-full"
                >
                  {/* Image Section */}
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={`https://picsum.photos/seed/${pkg.slug}/800/600`}
                      alt={pkg.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#1a1f4e] shadow-sm">
                      {pkg.duration}
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
                        <span className="truncate">{displayRegion}, India</span>
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
              ))}
            </div>
          </div>
          
        </div>
        
        {/* Unique Bespoke Enquiry Form */}
        <CountryEnquiryForm />

      </main>
      <Footer />
    </>
  )
}
