import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getPackagesByCountry } from "@/lib/packages"
import { MapPin, Clock } from "lucide-react"

interface PageProps {
  params: {
    continent: string
    country: string
  }
}

export default function CountryPackagesPage({ params }: PageProps) {
  const countryData = getPackagesByCountry(params.continent, params.country)

  if (!countryData) {
    notFound()
  }

  // Placeholder hero image based on country name
  const heroImage = `https://source.unsplash.com/1920x1080/?${countryData.name.replace(/\s+/g, ',')},travel,landscape`

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pb-20">
        {/* Hero Section */}
        <div className="relative h-[40vh] md:h-[50vh] min-h-[400px] w-full bg-[#1a1f4e] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={heroImage}
              alt={countryData.name}
              fill
              className="object-cover opacity-60"
              priority
              unoptimized // Since we use unsplash source URL
            />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 uppercase tracking-wider drop-shadow-lg">
              {countryData.name} TOUR PACKAGES
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto drop-shadow-md">
              {countryData.packages.length} Premium {countryData.packages.length === 1 ? 'Package' : 'Packages'} Available
            </p>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="container mx-auto px-4 mt-16 max-w-7xl">
          {countryData.packages.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl text-gray-500 font-medium">Coming soon...</h2>
              <p className="text-gray-400 mt-2">We are currently crafting premium packages for this destination.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {countryData.packages.map((pkg) => (
                <div key={pkg.slug} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={`https://source.unsplash.com/800x600/?${pkg.title.replace(/\s+/g, ',')},${countryData.name},landmark`}
                      alt={pkg.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      unoptimized
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-[#1a1f4e] flex items-center shadow-sm">
                      <Clock className="w-3.5 h-3.5 mr-1.5" />
                      {pkg.duration}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-[#1a1f4e] mb-3 group-hover:text-[#E31E24] transition-colors line-clamp-2">
                      {pkg.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                      {pkg.overview}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center text-xs font-medium text-gray-500">
                        <MapPin className="w-3.5 h-3.5 mr-1 text-[#E31E24]" />
                        {countryData.name}
                      </div>
                      <Link 
                        href={`/packages/${params.continent}/${params.country}/${pkg.slug}`}
                        className="text-[#E31E24] font-bold text-sm hover:text-[#ff3a40] transition-colors flex items-center"
                      >
                        View Itinerary 
                        <span className="ml-1 text-lg leading-none">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
