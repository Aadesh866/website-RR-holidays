import { Navbar } from "@/components/navbar"
import { PageHero } from "@/components/page-hero"
import { Contact as ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - RR Holidays",
  description: "Get in touch with RR Holidays. Free itinerary within 24 hours. Call +91 98423 34325 or visit our Coimbatore office.",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Get In Touch"
          subtitle="Ready for your next adventure? Let us help you plan the perfect trip"
          image="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1920&q=80&auto=format&fit=crop"
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
