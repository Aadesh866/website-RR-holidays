"use client"

import { EnquiryForm } from "@/components/enquiry-form"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Check } from "lucide-react"
import Image from "next/image"

const trustPoints = [
  "Free itinerary within 24 hours",
  "No booking fees",
  "Price match guarantee",
]

export function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2068&auto=format&fit=crop"
          alt="Contact RR Holidays"
          fill
          className="object-cover opacity-90"
          unoptimized
        />
        <div className="absolute inset-0 bg-[#0a0f2b]/85" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <div className="text-[#E31E24] text-sm font-medium uppercase tracking-[0.25em] mb-5">Start Your Journey</div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-[1.2]">Ready for Your Next Adventure?</h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">Get a free personalized itinerary and exclusive deals. No spam, ever.</p>
            <div className="space-y-4 mb-10">
              {trustPoints.map((point, i) => (
                <div key={i} className="flex items-center">
                  <Check className="w-5 h-5 text-[#10b981] mr-4 flex-shrink-0" />
                  <span className="text-white/90">{point}</span>
                </div>
              ))}
            </div>
            <div className="pt-10 border-t border-white/10">
              <p className="text-white/60 text-sm mb-5">Or reach us directly:</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="outline" size="lg" rounded="full" className="border-white text-white hover:bg-white hover:text-[#1a1f4e]">
                  <a href="tel:+919842334325" className="inline-flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />+91 98423 34325
                  </a>
                </Button>
                <Button asChild size="lg" rounded="full" className="bg-[#25D366] hover:bg-[#20BA5A] text-white">
                  <a href="https://wa.me/919842334325" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2">
                    <MessageCircle className="h-5 w-5" />WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-10 shadow-2xl">
            <EnquiryForm />
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <Button asChild size="icon" rounded="full" className="w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] shadow-2xl" aria-label="Chat on WhatsApp">
          <a href="https://wa.me/919842334325" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-6 w-6" />
          </a>
        </Button>
      </div>
    </section>
  )
}
