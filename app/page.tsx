import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Destinations } from "@/components/sections/destinations"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { TravelersShowcase } from "@/components/sections/travelers-showcase"
import { EmiOffers } from "@/components/sections/emi-offers"
import { Packages } from "@/components/sections/packages"
import { Testimonials } from "@/components/sections/testimonials"
import { Contact } from "@/components/sections/contact"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[100px] min-h-screen">
        
        {/* SIMPLE FOCUSED HERO SECTION */}
        <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop"
            alt="Premium Travel Experiences"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="container relative z-10 mx-auto px-4 max-w-5xl text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-medium mb-6 drop-shadow-2xl leading-tight">
              Design Your Dream Vacay
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-10 max-w-2xl mx-auto drop-shadow-md">
              Experience the world with RR Holidays.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/packages" className="inline-flex items-center justify-center bg-[#E31E24] hover:bg-[#c21419] text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Explore Destinations
              </Link>
            </div>
          </div>
        </section>

        {/* RESTORED MODULAR SECTIONS */}
        <Destinations />
        <WhyChooseUs />
        <EmiOffers />
        <TravelersShowcase />
        <Packages maxItems={6} />
        <Testimonials />
        <Contact />

      </main>
      <Footer />
    </>
  )
}
