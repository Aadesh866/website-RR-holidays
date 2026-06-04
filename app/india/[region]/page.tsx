import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CountryEnquiryForm } from "@/components/country-enquiry"
import { Accordion } from "@/components/accordion"
import { getPackagesByCountry, parseCountryMarkdown } from "@/lib/packages"
import { MapPin, Clock, Info, Shield, CreditCard, Camera, Users, Plane, CheckCircle2 } from "lucide-react"
import { getContextualImage } from "@/lib/image-utils"

export default async function IndiaRegionPage(props: { params: Promise<{ region: string }>, searchParams: Promise<{ state?: string }> }) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const stateQuery = searchParams.state;
  
  // Since 'India' is the continent and 'North India' (etc) is treated as the country in our JSON
  const regionData = getPackagesByCountry('india', params.region)
  
  if (!regionData || !regionData.packages || regionData.packages.length === 0) {
    notFound()
  }

  let packages = regionData.packages
  
  if (stateQuery) {
    packages = packages.filter(pkg => pkg.stateSlug === stateQuery);
  }
  
  if (!packages || packages.length === 0) {
    packages = regionData.packages; // fallback if no packages for that state
  }
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
  let displayRegion = regionNameMap[params.region] || regionData.name
  
  if (stateQuery && packages.length > 0 && packages[0].state) {
    displayRegion = packages[0].state;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f9fafb] pb-20">
        
        {/* Stunning Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] w-full">
          <Image
            src={getContextualImage(stateQuery || params.region, 0, "hero")}
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

        <div className="container mx-auto px-4 max-w-7xl pt-16 relative z-10">
          
          {/* At a Glance Section */}
          {parsedData.stats.length > 0 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-20 border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/3 text-center md:text-left">
                <h2 className="text-sm font-bold tracking-[0.2em] text-[#E31E24] uppercase mb-3">At A Glance</h2>
                <h3 className="text-3xl md:text-4xl font-serif text-[#1a1f4e] leading-tight">
                  South India's No.1 <br/><span className="italic text-gray-500 text-2xl">Travel Brand</span>
                </h3>
              </div>
              
              <div className="w-full md:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-8">
                {parsedData.stats.slice(0, 4).map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-[#1a1f4e] font-bold text-xl mb-1">{stat.value}</span>
                    <span className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Country Overview */}
          {parsedData.overview && (
            <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src={getContextualImage(stateQuery || params.region, 1, "card")} 
                  alt={`${displayRegion} Overview`} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-[#1a1f4e] mb-6 relative inline-block">
                  Everything You Need To Know
                  <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#E31E24]"></span>
                </h2>
                <div className="prose prose-lg text-gray-600 leading-relaxed">
                  <p>{parsedData.overview}</p>
                </div>
              </div>
            </div>
          )}

          {/* Travel Tips Section */}
          {parsedData.tips.length > 0 && (
            <div className="mb-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif text-[#1a1f4e] mb-4">Essential Travel Tips</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">Prepare for your journey with these handy tips and guidelines specifically curated for {displayRegion}.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {parsedData.tips.map((tip, idx) => {
                  const titleLower = tip.title.toLowerCase();
                  let Icon = Info;
                  if (titleLower.includes('visa') || titleLower.includes('passport')) Icon = Shield;
                  else if (titleLower.includes('currency') || titleLower.includes('money') || titleLower.includes('atm')) Icon = CreditCard;
                  else if (titleLower.includes('health') || titleLower.includes('safety')) Icon = CheckCircle2;
                  else if (titleLower.includes('transport')) Icon = Plane;
                  else if (titleLower.includes('attraction')) Icon = Camera;
                  else if (titleLower.includes('culture') || titleLower.includes('people')) Icon = Users;

                  return (
                    <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                      <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#E31E24] transition-colors">
                        <Icon className="w-8 h-8 text-[#1a1f4e] group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="text-xl font-serif text-[#1a1f4e] mb-3">{tip.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-sm">{tip.content}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

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
                      src={getContextualImage(pkg.slug, 0, "card")}
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
