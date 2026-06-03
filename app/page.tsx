import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getTopPackages } from "@/lib/packages"
import { MapPin, Clock, ArrowRight, Star, Shield, Award, Map } from "lucide-react"

export default function Home() {
  const topPackages = getTopPackages(6)

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        
        {/* HERO SECTION */}
        <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
            alt="Premium Travel Experiences"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f2b]/90 via-[#0a0f2b]/60 to-transparent" />
          
          <div className="container relative z-10 mx-auto px-4 max-w-7xl pt-20">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-[#E31E24] text-white text-sm font-bold tracking-wider uppercase rounded-full mb-6 shadow-lg border border-[#E31E24]/50">
                South India's No.1 Travel Brand
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-medium mb-6 drop-shadow-xl leading-tight">
                Design Your <br/><span className="italic font-light">Dream</span> Vacay.
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-light mb-10 max-w-2xl leading-relaxed">
                Experience the world with RR Holidays. From romantic European escapes to exotic Asian adventures, we curate bespoke journeys just for you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/packages" className="inline-flex items-center justify-center bg-[#E31E24] hover:bg-[#c21419] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-[0_0_20px_rgba(227,30,36,0.4)] hover:shadow-[0_0_30px_rgba(227,30,36,0.6)]">
                  Explore Destinations
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300">
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* STATS / AT A GLANCE */}
        <section className="bg-white py-16 border-b border-gray-100 relative z-20 -mt-10 rounded-t-[40px] shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
              <div className="px-4">
                <h3 className="text-4xl md:text-5xl font-serif text-[#1a1f4e] font-bold mb-2">15+</h3>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Years Experience</p>
              </div>
              <div className="px-4">
                <h3 className="text-4xl md:text-5xl font-serif text-[#1a1f4e] font-bold mb-2">70+</h3>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Countries Covered</p>
              </div>
              <div className="px-4">
                <h3 className="text-4xl md:text-5xl font-serif text-[#1a1f4e] font-bold mb-2">200+</h3>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Tour Packages</p>
              </div>
              <div className="px-4">
                <h3 className="text-4xl md:text-5xl font-serif text-[#1a1f4e] font-bold mb-2">50k+</h3>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Happy Travelers</p>
              </div>
            </div>
          </div>
        </section>

        {/* TOP DESTINATIONS */}
        <section className="py-24 bg-[#f8f9fc]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-[0.2em] text-[#E31E24] uppercase mb-3">Wanderlust Awaits</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-[#1a1f4e]">Trending Destinations</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Switzerland", slug: "switzerland", continent: "europe", img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop" },
                { name: "Japan", slug: "japan", continent: "asia", img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop" },
                { name: "Maldives", slug: "maldives", continent: "asia", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop" },
                { name: "South Africa", slug: "south-africa", continent: "africa", img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop" }
              ].map((dest) => (
                <Link href={`/packages/${dest.continent}/${dest.slug}`} key={dest.name} className="group relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <Image src={dest.img} alt={dest.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2b]/90 via-[#0a0f2b]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <h4 className="text-2xl font-serif text-white font-medium mb-1 group-hover:text-[#E31E24] transition-colors">{dest.name}</h4>
                    <span className="text-white/70 text-sm font-medium flex items-center">
                      Explore <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* TRENDING PACKAGES */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-sm font-bold tracking-[0.2em] text-[#E31E24] uppercase mb-3">Handpicked Journeys</h2>
                <h3 className="text-4xl md:text-5xl font-serif text-[#1a1f4e]">Featured Packages</h3>
              </div>
              <Link href="/packages" className="hidden md:flex items-center text-[#1a1f4e] font-bold uppercase tracking-wider text-sm hover:text-[#E31E24] transition-colors group">
                View All Packages <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topPackages.map(({ countryName, continentSlug, countrySlug, pkg }) => {
                const isIndia = continentSlug === 'india'
                const routeBase = isIndia ? `/india/${countrySlug}` : `/packages/${continentSlug}/${countrySlug}`

                return (
                  <Link 
                    href={`${routeBase}/${pkg.slug}`} 
                    key={pkg.slug}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100 h-full"
                  >
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={`https://source.unsplash.com/800x600/?${pkg.title.replace(/\s+/g, ',')},${countryName}`}
                        alt={pkg.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#1a1f4e] shadow-sm">
                        {pkg.duration}
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-serif text-[#1a1f4e] font-medium mb-3 group-hover:text-[#E31E24] transition-colors line-clamp-2">
                        {pkg.title}
                      </h3>
                      
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-2 text-[#E31E24]" />
                          <span className="truncate font-medium">{countryName}</span>
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
                )
              })}
            </div>
            
            <div className="mt-12 text-center md:hidden">
              <Link href="/packages" className="inline-flex items-center text-[#1a1f4e] font-bold uppercase tracking-wider text-sm hover:text-[#E31E24] transition-colors">
                View All Packages <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-24 bg-[#1a1f4e] text-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-[0.2em] text-[#E31E24] uppercase mb-3">The RR Holidays Promise</h2>
              <h3 className="text-4xl md:text-5xl font-serif">Why Travel With Us?</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="w-20 h-20 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6">
                  <Star className="w-10 h-10 text-[#E31E24]" />
                </div>
                <h4 className="text-xl font-bold mb-3">Premium Quality</h4>
                <p className="text-white/60 leading-relaxed text-sm">We strictly partner with top-tier hotels and service providers to ensure absolute luxury.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-20 h-20 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-10 h-10 text-[#E31E24]" />
                </div>
                <h4 className="text-xl font-bold mb-3">Safe & Secure</h4>
                <p className="text-white/60 leading-relaxed text-sm">Your safety is our priority. 24/7 on-ground support across all our international destinations.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-20 h-20 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-10 h-10 text-[#E31E24]" />
                </div>
                <h4 className="text-xl font-bold mb-3">Best Price Guarantee</h4>
                <p className="text-white/60 leading-relaxed text-sm">No hidden fees, no middle-men. We offer transparent pricing for premium experiences.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-20 h-20 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6">
                  <Map className="w-10 h-10 text-[#E31E24]" />
                </div>
                <h4 className="text-xl font-bold mb-3">Bespoke Itineraries</h4>
                <p className="text-white/60 leading-relaxed text-sm">Every traveler is unique. We craft personalized journeys tailored perfectly to your tastes.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
