import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/sections/hero"
import { Destinations } from "@/components/sections/destinations"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { TravelersShowcase } from "@/components/sections/travelers-showcase"
import { EmiOffers } from "@/components/sections/emi-offers"
import { Packages } from "@/components/sections/packages"
import { GroupTours } from "@/components/sections/group-tours"
import { Testimonials } from "@/components/sections/testimonials"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <WhyChooseUs />
        <EmiOffers />
        <TravelersShowcase />
        <Packages maxItems={6} />
        <GroupTours />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
