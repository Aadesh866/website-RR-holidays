import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { AllPackagesSection } from "@/components/sections/all-packages-section"
import { GroupTours } from "@/components/sections/group-tours"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { getAllCountries } from "@/lib/packages"

export const metadata: Metadata = {
  title: "Tour Packages - RR Holidays",
  description: "Browse our curated domestic and international tour packages. Best prices, handcrafted itineraries, and zero EMI options.",
}

export default function PackagesPage() {
  const countries = getAllCountries()
  
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Tour Packages"
          subtitle="Handcrafted itineraries for every traveler — from budget-friendly getaways to luxury experiences"
          image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80&auto=format&fit=crop"
        />
        <AllPackagesSection countries={countries} />
        <GroupTours />
      </main>
      <Footer />
    </>
  )
}
