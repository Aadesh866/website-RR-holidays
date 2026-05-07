import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { Packages as PackagesSection } from "@/components/sections/packages"
import { GroupTours } from "@/components/sections/group-tours"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tour Packages - RR Holidays",
  description: "Browse our curated domestic and international tour packages. Best prices, handcrafted itineraries, and zero EMI options.",
}

export default function PackagesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Tour Packages"
          subtitle="Handcrafted itineraries for every traveler — from budget-friendly getaways to luxury experiences"
          image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80&auto=format&fit=crop"
        />
        <PackagesSection showAll />
        <GroupTours />
      </main>
      <Footer />
    </>
  )
}
