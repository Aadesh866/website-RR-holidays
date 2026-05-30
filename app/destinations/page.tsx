import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { Destinations as DestinationsSection } from "@/components/sections/destinations"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Destinations - RR Holidays",
  description: "Explore 500+ trending domestic and international travel destinations. From beaches to mountains, find your perfect getaway.",
}

export default function DestinationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Our Destinations"
          subtitle="Discover handpicked destinations across India and the world — from tropical beaches to snow-capped mountains"
          image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80&auto=format&fit=crop"
        />
        <DestinationsSection />
      </main>
      <Footer />
    </>
  )
}
