"use client"

import { MessageSquare, FileText, ShieldCheck, Plane } from "lucide-react"
import { useStaggerAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    number: 1,
    icon: MessageSquare,
    title: "Share Your Dream",
    description: "Tell us where you want to go, your dates, and travel style.",
  },
  {
    number: 2,
    icon: FileText,
    title: "Get a Custom Plan",
    description: "Our experts craft a personalized itinerary within 24 hours.",
  },
  {
    number: 3,
    icon: ShieldCheck,
    title: "Book with Confidence",
    description: "Secure your trip with easy payment & EMI options.",
  },
  {
    number: 4,
    icon: Plane,
    title: "Travel Stress-Free",
    description: "We handle everything — flights, hotels, transfers, and 24/7 support.",
  },
]

export function HowItWorks() {
  const stepsRef = useStaggerAnimation(0.15)

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="text-[#E31E24] text-sm font-medium uppercase tracking-[0.25em] mb-5">
            Simple Process
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1a1f4e] leading-[1.2]">
            Plan Your Holiday in 4 Easy Steps
          </h2>
        </div>

        {/* Steps */}
        <div
          ref={stepsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 relative"
        >
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-[#e5e7eb]" style={{ width: "calc(100% - 8rem)", marginLeft: "4rem" }} />

          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative text-center">
                {/* Number Circle */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E31E24] text-white text-2xl font-bold font-heading mb-8 z-10">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-5">
                  <div className="w-14 h-14 rounded-full bg-[#2E3192]/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-[#2E3192]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-medium text-[#1a1f4e] mb-4">
                  {step.title}
                </h3>
                <p className="text-[#4b5563] leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
