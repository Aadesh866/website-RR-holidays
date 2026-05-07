"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Globe, Users, Award, Heart, Plane, Shield, Star, TrendingUp } from "lucide-react"

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold font-heading text-[#E31E24] mb-2">
        {value}{suffix}
      </div>
      <div className="text-white/70 text-sm uppercase tracking-wider">{label}</div>
    </div>
  )
}

const milestones = [
  { year: "2010", title: "Founded in Coimbatore", description: "Started as a small family-run travel desk with a vision to make premium holidays accessible to every Indian family." },
  { year: "2014", title: "International Expansion", description: "Launched our first international packages covering Southeast Asia, Dubai, and Sri Lanka — with 500+ travelers that year alone." },
  { year: "2017", title: "1000+ Bookings Milestone", description: "Crossed 1,000 bookings in a single year. Expanded our team to 15 travel consultants and opened our second office." },
  { year: "2020", title: "Digital Transformation", description: "Pivoted to online consultations during COVID. Launched virtual travel planning that helped 300+ families plan future trips." },
  { year: "2023", title: "10,000 Happy Travelers", description: "Hit the 10,000 mark! Awarded 'Best Emerging Travel Agency' by South India Tourism Federation." },
  { year: "2025", title: "Pan-India Presence", description: "Now serving travelers from 25+ Indian cities with 500+ destinations worldwide and a growing team of 30+ travel experts." },
]

export function AboutContent() {
  return (
    <>
      {/* Our Story Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Collage */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1000&q=80&auto=format&fit=crop"
                      alt="Majestic mountains and lake"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 400px"
                    />
                  </div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1000&q=80&auto=format&fit=crop"
                      alt="Beautiful lush waterfall"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 400px"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1000&q=80&auto=format&fit=crop"
                      alt="Traveler looking at stunning view"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 400px"
                    />
                  </div>
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1000&q=80&auto=format&fit=crop"
                      alt="Pristine tropical beach"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 400px"
                    />
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#E31E24] text-white rounded-2xl p-6 shadow-xl z-10">
                <div className="text-3xl font-bold font-heading">15+</div>
                <div className="text-sm text-white/80">Years of Trust</div>
              </div>
            </motion.div>

            {/* Story Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-[#E31E24] text-sm font-medium uppercase tracking-[0.25em] mb-4">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1f4e] leading-[1.2] mb-6">
                From a Small Coimbatore Desk to India&apos;s Fastest-Growing Holiday Brand
              </h2>
              <div className="space-y-5 text-[#4b5563] leading-relaxed">
                <p>
                  What started in 2010 as a passion project by a group of travel enthusiasts in Coimbatore has now grown into one of South India&apos;s most trusted travel agencies. <strong className="text-[#1a1f4e]">RR Holidays</strong> was born from a simple belief: every family deserves a world-class vacation, without the world-class price tag.
                </p>
                <p>
                  Over the past 15 years, we&apos;ve handcrafted over <strong className="text-[#1a1f4e]">10,000+ holiday packages</strong> — from the misty hills of Kashmir to the glittering skyscrapers of Dubai, from the spiritual banks of Varanasi to the Northern Lights of Scandinavia. We don&apos;t just plan trips; we design memories.
                </p>
                <p>
                  Our team of <strong className="text-[#1a1f4e]">30+ dedicated travel experts</strong> works around the clock to ensure every itinerary is meticulously planned, every hotel is personally vetted, and every experience is nothing short of extraordinary. That&apos;s the RR Holidays promise.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-gray-200">
                <div>
                  <div className="text-2xl font-bold text-[#1a1f4e] font-heading">500+</div>
                  <div className="text-sm text-[#4b5563]">Destinations</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1a1f4e] font-heading">30+</div>
                  <div className="text-sm text-[#4b5563]">Travel Experts</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1a1f4e] font-heading">98%</div>
                  <div className="text-sm text-[#4b5563]">Satisfaction Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter Band */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80&auto=format&fit=crop"
            alt="Aerial view of beautiful landscape"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#1a1f4e]/85" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <AnimatedStat value={10000} suffix="+" label="Happy Travelers" />
            <AnimatedStat value={500} suffix="+" label="Destinations" />
            <AnimatedStat value={15} suffix="+" label="Years Experience" />
            <AnimatedStat value={98} suffix="%" label="Satisfaction Rate" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#f0f1fa] to-[#e8e9f5]">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-10 shadow-lg shadow-gray-200/50"
            >
              <div className="w-16 h-16 rounded-full bg-[#E31E24]/10 flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-[#E31E24]" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-[#1a1f4e] mb-4">
                Our Mission
              </h3>
              <p className="text-[#4b5563] leading-relaxed">
                To make premium travel accessible to every Indian family. We believe that the joy of exploring new places, cultures, and cuisines shouldn&apos;t be limited by budget constraints. Through smart planning, strong partnerships, and genuine care, we deliver five-star experiences at three-star prices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white rounded-2xl p-10 shadow-lg shadow-gray-200/50"
            >
              <div className="w-16 h-16 rounded-full bg-[#2E3192]/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-[#2E3192]" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-[#1a1f4e] mb-4">
                Our Vision
              </h3>
              <p className="text-[#4b5563] leading-relaxed">
                To become India&apos;s most loved travel brand by 2030. We&apos;re building a future where every trip booked with RR Holidays is a story worth telling — where technology meets human touch, and where every destination feels like home.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-[#E31E24] text-sm font-medium uppercase tracking-[0.25em] mb-5">
              Our Journey
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1a1f4e] leading-[1.2]">
              15 Years of Crafting Memories
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#e5e7eb] -translate-x-1/2" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Year badge */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#E31E24] text-white flex items-center justify-center font-bold text-sm z-10 shadow-lg">
                  {milestone.year}
                </div>

                {/* Content card */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  <h3 className="text-xl font-heading font-semibold text-[#1a1f4e] mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-[#4b5563] leading-relaxed text-sm">
                    {milestone.description}
                  </p>
                </div>

                {/* Spacer for other side */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#f0f1fa] to-[#e8e9f5]">
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="text-[#E31E24] text-sm font-medium uppercase tracking-[0.25em] mb-5">
              What Drives Us
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1a1f4e] leading-[1.2]">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Passion First", description: "We're travelers ourselves. Every package is designed with genuine excitement and insider knowledge." },
              { icon: Shield, title: "Trust & Transparency", description: "No hidden charges, no surprise costs. What we quote is what you pay — always." },
              { icon: Star, title: "Excellence", description: "We personally vet every hotel, airline, and activity. If it's not excellent, it's not on our list." },
              { icon: Users, title: "Family Values", description: "We treat every traveler like family. Your safety, comfort, and happiness are our top priorities." },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-[#2E3192]/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-7 h-7 text-[#2E3192]" />
                  </div>
                  <h3 className="text-xl font-heading font-medium text-[#1a1f4e] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#4b5563] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80&auto=format&fit=crop"
            alt="Beautiful sunset over ocean"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f4e]/90 to-[#2E3192]/70" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-[1.2]">
            Ready to Create Your Story?
          </h2>
          <p className="text-white/80 text-lg mb-10 leading-relaxed">
            Join 10,000+ happy travelers who chose RR Holidays for their dream vacations. Your next adventure is just a conversation away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center py-3.5 px-10 bg-[#E31E24] text-white font-medium rounded-full hover:bg-[#c9171d] hover:scale-[1.03] transition-all text-lg"
            >
              Start Planning →
            </a>
            <a
              href="tel:+919842334325"
              className="inline-flex items-center justify-center py-3.5 px-10 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-[#1a1f4e] transition-all text-lg"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
