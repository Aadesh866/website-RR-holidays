"use client"

import { useState, use } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Check, MapPin, Calendar, Sun, Coffee, Utensils, Moon, Sunset } from "lucide-react"
import { packages } from "@/data/packages"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Packages as PackagesSection } from "@/components/sections/packages"
import { Button } from "@/components/ui/button"
import { EnquiryForm } from "@/components/enquiry-form"
import { ImageLightbox } from "@/components/ui/image-lightbox"

// Time mappings for different activities
const getTimeForActivity = (type: string, dayNumber: number): string => {
  const times: Record<string, string> = {
    morning: "6:00 AM - 10:00 AM",
    lunch: "12:00 PM - 1:30 PM",
    afternoon: "2:00 PM - 6:00 PM",
    evening: "6:00 PM - 8:00 PM",
    dinner: "8:00 PM - 10:00 PM"
  }
  return times[type] || ""
}

export default function PackagePage({ params }: { params: Promise<{ slug: string }> }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  
  // Unwrap params using React.use()
  const { slug } = use(params)
  
  // Find the package
  const pkg = packages.find((p) => p.id === slug)

  if (!pkg) {
    notFound()
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      <ImageLightbox
        images={pkg.gallery || []}
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
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
                
                {/* Image Gallery */}
                {pkg.gallery && pkg.gallery.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button
                      onClick={() => openLightbox(0)}
                      className="col-span-2 md:col-span-2 row-span-2 relative rounded-2xl overflow-hidden h-[300px] md:h-[416px] cursor-pointer group"
                    >
                      <Image src={pkg.gallery[0]} alt="Gallery 1" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold text-lg">Click to view</span>
                      </div>
                    </button>
                    {pkg.gallery.slice(1, 5).map((img, i) => (
                      <button
                        key={i}
                        onClick={() => openLightbox(i + 1)}
                        className="relative rounded-2xl overflow-hidden h-[142px] md:h-[200px] cursor-pointer group"
                      >
                        <Image src={img} alt={`Gallery ${i + 2}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold text-sm">Click to view</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

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
                  <h2 className="text-2xl font-heading font-bold text-[#1a1f4e] mb-8">Detailed Itinerary</h2>
                  <div className="space-y-0 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                    {pkg.itinerary && pkg.itinerary.map((day, i) => (
                      <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12 last:mb-0">
                        {/* Timeline dot */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#E31E24] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                          D{day.day}
                        </div>
                        
                        {/* Timeline content */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white rounded-2xl border border-gray-100 p-6 shadow-lg shadow-gray-100/50 hover:border-[#E31E24]/30 hover:shadow-xl transition-all">
                          <h3 className="font-heading font-bold text-[#1a1f4e] text-xl mb-4">{day.title}</h3>
                          
                          <div className="space-y-4">
                            {day.morning && day.morning !== "N/A" && (
                              <div className="flex items-start gap-3">
                                <Sun className="w-4 h-4 text-[#E31E24] mt-0.5 shrink-0" />
                                <div className="flex-1">
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                    <strong className="text-gray-800">Morning ({getTimeForActivity('morning', day.day)}):</strong> {day.morning}
                                  </p>
                                </div>
                              </div>
                            )}
                            {day.lunch && day.lunch !== "N/A" && (
                              <div className="flex items-start gap-3">
                                <Utensils className="w-4 h-4 text-[#E31E24] mt-0.5 shrink-0" />
                                <div className="flex-1">
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                    <strong className="text-gray-800">Lunch ({getTimeForActivity('lunch', day.day)}):</strong> {day.lunch}
                                  </p>
                                </div>
                              </div>
                            )}
                            {day.afternoon && day.afternoon !== "N/A" && (
                              <div className="flex items-start gap-3">
                                <Coffee className="w-4 h-4 text-[#E31E24] mt-0.5 shrink-0" />
                                <div className="flex-1">
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                    <strong className="text-gray-800">Afternoon ({getTimeForActivity('afternoon', day.day)}):</strong> {day.afternoon}
                                  </p>
                                </div>
                              </div>
                            )}
                            {day.evening && day.evening !== "N/A" && (
                              <div className="flex items-start gap-3">
                                <Sunset className="w-4 h-4 text-[#E31E24] mt-0.5 shrink-0" />
                                <div className="flex-1">
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                    <strong className="text-gray-800">Evening ({getTimeForActivity('evening', day.day)}):</strong> {day.evening}
                                  </p>
                                </div>
                              </div>
                            )}
                            {day.dinner && day.dinner !== "N/A" && (
                              <div className="flex items-start gap-3">
                                <Moon className="w-4 h-4 text-[#E31E24] mt-0.5 shrink-0" />
                                <div className="flex-1">
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                    <strong className="text-gray-800">Dinner ({getTimeForActivity('dinner', day.day)}):</strong> {day.dinner}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
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
