import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getPackageBySlug } from "@/lib/packages"
import { MapPin, Clock, Check, ChevronRight, Calendar } from "lucide-react"

interface PageProps {
  params: {
    slug: string
    country: string
    packageSlug: string
  }
}

export default function PackageDetailPage({ params }: PageProps) {
  const data = getPackageBySlug(params.slug, params.country, params.packageSlug)

  if (!data) {
    notFound()
  }

  const { country, pkg } = data

  // Placeholder hero image based on package title
  const heroImage = `https://source.unsplash.com/1920x1080/?${pkg.title.replace(/\s+/g, ',')},travel`

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pb-20">
        {/* Breadcrumb & Hero */}
        <div className="relative h-[50vh] md:h-[60vh] min-h-[500px] w-full bg-[#1a1f4e] flex items-end pb-16 overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={heroImage}
              alt={pkg.title}
              fill
              className="object-cover opacity-50"
              priority
              unoptimized
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f4e] via-[#1a1f4e]/50 to-transparent" />
          
          <div className="relative z-10 container mx-auto px-4 max-w-7xl">
            <div className="flex items-center text-sm text-white/80 font-medium mb-6 uppercase tracking-wider">
              <Link href="/packages" className="hover:text-white transition-colors">Packages</Link>
              <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
              <Link href={`/packages/${params.slug}/${params.country}`} className="hover:text-white transition-colors">{country.name}</Link>
              <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
              <span className="text-white truncate max-w-[200px] sm:max-w-none">{pkg.title}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 leading-tight drop-shadow-xl max-w-4xl">
              {pkg.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-white font-medium">
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg">
                <Clock className="w-4 h-4 mr-2 text-[#E31E24]" />
                {pkg.duration}
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg">
                <MapPin className="w-4 h-4 mr-2 text-[#E31E24]" />
                {country.name}
              </div>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="container mx-auto px-4 mt-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Overview */}
              <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1a1f4e] mb-6 flex items-center">
                  Overview
                  <div className="h-1 w-12 bg-[#E31E24] ml-4 rounded-full" />
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {pkg.overview}
                </p>
              </section>

              {/* Highlights & Inclusions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section className="bg-[#1a1f4e] rounded-2xl p-8 text-white shadow-lg">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    Trip Highlights
                  </h3>
                  <ul className="space-y-4">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="bg-[#E31E24] p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </span>
                        <span className="text-white/90 leading-tight">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </section>
                
                <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-[#1a1f4e] mb-6 flex items-center">
                    What's Included
                  </h3>
                  <ul className="space-y-4">
                    {pkg.inclusions.map((inclusion, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="bg-green-100 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600" />
                        </span>
                        <span className="text-gray-700 font-medium leading-tight">{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Itinerary Timeline */}
              <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-[#1a1f4e] mb-10 flex items-center">
                  Detailed Itinerary
                  <div className="h-1 w-12 bg-[#E31E24] ml-4 rounded-full" />
                </h2>
                
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[19px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                  {pkg.itinerary.map((day, idx) => (
                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#1a1f4e] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 transition-transform duration-300 group-hover:scale-110">
                        <span className="text-xs font-bold">{idx + 1}</span>
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-bold text-[#1a1f4e] text-lg">{day.title}</h4>
                        </div>
                        <ul className="space-y-3 text-gray-600 text-sm">
                          {day.activities.map((act, actIdx) => (
                            <li key={actIdx} className="leading-relaxed">
                              {act}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-[#1a1f4e] p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Interested?</h3>
                  <p className="text-white/80 text-sm">Get a free quote for this amazing journey.</p>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <Calendar className="w-5 h-5 text-[#E31E24] mr-3" />
                    <span className="font-bold text-gray-800">Duration:</span>
                    <span className="ml-auto text-gray-600 font-medium">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center mb-8">
                    <MapPin className="w-5 h-5 text-[#E31E24] mr-3" />
                    <span className="font-bold text-gray-800">Destinations:</span>
                    <span className="ml-auto text-gray-600 font-medium text-right max-w-[120px] truncate">{country.name}</span>
                  </div>
                  
                  <Link href="/contact" className="block w-full text-center bg-gradient-to-r from-[#E31E24] to-[#ff3a40] hover:from-[#c21419] hover:to-[#E31E24] text-white font-bold py-4 px-6 rounded-xl uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#E31E24]/30 hover:shadow-xl hover:-translate-y-1">
                    Enquire Now
                  </Link>
                  
                  <p className="text-center text-xs text-gray-400 mt-4">
                    No booking fees • Best price guarantee
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
