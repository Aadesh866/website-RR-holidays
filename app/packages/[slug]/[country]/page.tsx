import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CountryEnquiryForm } from "@/components/country-enquiry"
import { getPackagesByCountry } from "@/lib/packages"
import { MapPin, Clock } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface PageProps {
  params: Promise<{
    slug: string
    country: string
  }>
}

export default async function CountryPackagesPage({ params }: PageProps) {
  const resolvedParams = await params
  const countryData = getPackagesByCountry(resolvedParams.slug, resolvedParams.country)

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

        {/* Country Information Section */}
        {countryData.markdownContent && (
          <section className="bg-white py-16 border-b border-gray-100">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="prose-custom">
                <ReactMarkdown
                  components={{
                    h2: ({node, ...props}) => null, // Skip the main country heading since we have it in hero
                    h3: ({node, ...props}) => (
                      <h3 className="text-3xl font-serif font-medium text-[#1a1f4e] mt-16 mb-8 border-b pb-4" {...props} />
                    ),
                    p: ({node, ...props}) => (
                      <p className="text-gray-600 leading-relaxed mb-6 text-lg" {...props} />
                    ),
                    strong: ({node, ...props}) => (
                      <strong className="font-bold text-[#1a1f4e]" {...props} />
                    ),
                    ul: ({node, children, ...props}) => (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8" {...props}>
                        {children}
                      </ul>
                    ),
                    li: ({node, children, ...props}) => {
                      // Check if it's a key-value pair like **Capital:** Rome
                      let content = children;
                      
                      return (
                        <li className="bg-gray-50 border border-gray-100 rounded-lg p-5 flex items-start shadow-sm" {...props}>
                          <div className="w-2 h-2 bg-[#ffcc00] rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                          <div className="text-gray-700 text-[15px] leading-relaxed">
                            {content}
                          </div>
                        </li>
                      )
                    }
                  }}
                >
                  {countryData.markdownContent}
                </ReactMarkdown>
              </div>
            </div>
          </section>
        )}

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
                        href={`/packages/${resolvedParams.slug}/${resolvedParams.country}/${pkg.slug}`}
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
        
        <CountryEnquiryForm />
      </main>
      <Footer />
    </>
  )
}
