import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Destinations } from "@/components/sections/destinations"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { TravelersShowcase } from "@/components/sections/travelers-showcase"
import { EmiOffers } from "@/components/sections/emi-offers"
import { Packages } from "@/components/sections/packages"
import { Testimonials } from "@/components/sections/testimonials"
import { Contact } from "@/components/sections/contact"
import { RotatingHero } from "@/components/sections/rotating-hero"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[100px] min-h-screen">
        
        {/* SIMPLE FOCUSED HERO SECTION */}
        <RotatingHero />

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
