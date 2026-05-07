import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Check, MapPin, Calendar } from "lucide-react"
import { packages } from "@/data/packages"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Packages as PackagesSection } from "@/components/sections/packages"
import { Button } from "@/components/ui/button"
import { EnquiryForm } from "@/components/enquiry-form"

// Generate static params for all packages
export function generateStaticParams() {
  return packages.map((pkg) => ({
    slug: pkg.id,
  }))
}

export default async function PackagePage({ params }: { params: { slug: string } }) {
  // Await the params object before accessing properties
  const resolvedParams = await params;
  const pkg = packages.find((p) => p.id === resolvedParams.slug)

  if (!pkg) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="bg-[#f0f1fa] min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
          <Image
            src={pkg.image}
            alt={pkg.name}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f4e] via-[#1a1f4e]/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full z-10 pb-16">
            <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
              <Link 
                href="/packages" 
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium"
              >
                <ArrowLeft className="mr-2 h-5 w-5" /> Back to Packages
              </Link>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-[#E31E24] text-white text-xs font-bold uppercase tracking-wider rounded-full">
                  {pkg.category}
                </span>
                <span className="flex items-center text-white/90 font-medium">
                  <Clock className="w-4 h-4 mr-1.5 text-[#E31E24]" />
                  {pkg.duration}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
                {pkg.name}
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-2 space-y-12">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-2xl font-heading font-bold text-[#1a1f4e] mb-4">Overview</h2>
                  <p className="text-[#4b5563] text-lg leading-relaxed">
                    {pkg.description}. This handcrafted journey is designed to offer the best experiences at an unbeatable price, complete with luxury stays, guided tours, and 24/7 support from RR Holidays.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-2xl font-heading font-bold text-[#1a1f4e] mb-6">Key Highlights</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-[#10b981] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#4b5563] font-medium">{feature}</span>
                      </div>
                    ))}
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-[#10b981] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-[#4b5563] font-medium">Daily Breakfast Included</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-[#10b981] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-[#4b5563] font-medium">Airport Transfers</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-2xl font-heading font-bold text-[#1a1f4e] mb-6">Itinerary Summary</h2>
                  <div className="space-y-6">
                    {Array.from({ length: parseInt(pkg.duration.split(' ')[0]) }).map((_, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-[#1a1f4e] text-white flex items-center justify-center font-bold">
                            {i + 1}
                          </div>
                          {i !== parseInt(pkg.duration.split(' ')[0]) - 1 && (
                            <div className="w-0.5 h-full bg-gray-200 mt-2" />
                          )}
                        </div>
                        <div className="pt-2 pb-6">
                          <h3 className="text-lg font-bold text-[#1a1f4e] mb-2">Day {i + 1}</h3>
                          <p className="text-[#4b5563]">Exciting activities and sightseeing experiences planned for today. Reach out to our travel experts for the detailed day-by-day PDF itinerary.</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Booking/Enquiry Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-28 space-y-6">
                  {/* Price Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
                    <div className="mb-6">
                      <div className="text-[#4b5563] text-sm font-medium mb-1">Starting from</div>
                      <div className="flex items-end gap-2">
                        <div className="text-4xl font-heading font-bold text-[#1a1f4e]">
                          ₹{pkg.price.toLocaleString("en-IN")}
                        </div>
                        <div className="text-[#9ca3af] line-through mb-1">
                          ₹{pkg.originalPrice.toLocaleString("en-IN")}
                        </div>
                      </div>
                      <div className="text-sm text-[#4b5563] mt-1">per person</div>
                    </div>
                    
                    <div className="space-y-4 mb-6 pt-6 border-t border-gray-100">
                      <div className="flex items-center text-[#4b5563] text-sm">
                        <Calendar className="w-5 h-5 text-[#E31E24] mr-3" />
                        Flexible Departure Dates
                      </div>
                      <div className="flex items-center text-[#4b5563] text-sm">
                        <MapPin className="w-5 h-5 text-[#E31E24] mr-3" />
                        {pkg.category === "International" ? "Visa Assistance Provided" : "Pan India Flights Available"}
                      </div>
                    </div>

                    <a href="#enquiry-form" className="flex w-full items-center justify-center rounded-full bg-[#E31E24] text-white hover:bg-[#c9171d] hover:scale-[1.03] transition-all text-lg h-14 font-medium">
                      Enquire Now
                    </a>
                  </div>

                  {/* Enquiry Form inside sidebar */}
                  <div id="enquiry-form" className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-heading font-bold text-[#1a1f4e] mb-4">Request Callback</h3>
                    <p className="text-sm text-[#4b5563] mb-6">Want to customize this package? Drop your details below.</p>
                    <EnquiryForm />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        
        {/* Explore Other Places */}
        <PackagesSection maxItems={3} />
      </main>
      <Footer />
    </>
  )
}
