import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { AboutContent } from "@/components/sections/about-content"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Testimonials } from "@/components/sections/testimonials"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - RR Holidays",
  description: "Learn about RR Holidays — Coimbatore's most trusted travel agency since 2010. Handcrafted itineraries, 24/7 support, and 10,000+ happy travelers worldwide.",
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="About RR Holidays"
          subtitle="Crafting extraordinary travel experiences across India and the world since 2010"
          image="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=1920&q=80&auto=format&fit=crop"
        />
        <AboutContent />
        <WhyChooseUs />
        <HowItWorks />

      </main>
      <Footer />
    </>
  )
}
