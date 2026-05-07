import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/sections/hero"
import { Destinations } from "@/components/sections/destinations"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { Packages } from "@/components/sections/packages"
import { GroupTours } from "@/components/sections/group-tours"
import { Testimonials } from "@/components/sections/testimonials"
import { Blog } from "@/components/sections/blog"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Destinations maxItems={8} />
        <WhyChooseUs />
        <Packages maxItems={6} />
        <GroupTours />
        <Testimonials />
        <Blog maxItems={3} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
