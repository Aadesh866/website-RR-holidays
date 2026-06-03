"use client"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"

export function CountryEnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Enquiry submitted successfully! Our travel expert will contact you shortly.")
    }, 1500)
  }

  return (
    <section id="enquire" className="relative py-24 2xl:py-32 overflow-hidden">
      {/* Dynamic Destination Background Image (Hardcoded to a beautiful landscape for now, could be dynamic later) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
      ></div>
      {/* Luxury Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0a0f2b]/95 via-[#0a0f2b]/80 to-[#1a1f4e]/60 backdrop-blur-[2px]"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          {/* Left Column: Story & Contact */}
          <div className="lg:col-span-2 text-white">
            <h2 className="text-sm font-bold tracking-[0.2em] text-[#E31E24] uppercase mb-4">
              Craft Your Journey
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-medium mb-8 leading-tight">
              Let's plan your <br />
              <span className="italic text-white/90">perfect escape</span>
            </h3>
            
            <p className="text-white/70 leading-relaxed mb-12 text-lg">
              Our travel experts are ready to curate a bespoke itinerary tailored exactly to your preferences. Fill out the details, and we'll craft an experience you'll never forget.
            </p>
            
            <div className="space-y-8 border-l-2 border-[#E31E24]/30 pl-6">
              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-6 group-hover:bg-[#E31E24] transition-colors border border-white/20">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Speak with an expert</p>
                  <a href="tel:+919842334325" className="text-xl font-serif hover:text-[#E31E24] transition-colors">
                    +91 98423 34325
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-6 group-hover:bg-[#E31E24] transition-colors border border-white/20">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Email us your requirements</p>
                  <a href="mailto:info@rrholidays.net" className="text-xl font-serif hover:text-[#E31E24] transition-colors">
                    info@rrholidays.net
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl">
              <h4 className="text-2xl font-serif text-white mb-8 text-center md:text-left">
                Start Planning
              </h4>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input 
                    type="text" 
                    placeholder="Full Name *" 
                    required 
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#E31E24] focus:bg-white/10 transition-colors"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address *" 
                    required 
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#E31E24] focus:bg-white/10 transition-colors"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number *" 
                    required 
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#E31E24] focus:bg-white/10 transition-colors"
                  />
                  <input 
                    type="text" 
                    placeholder="City of Residence *" 
                    required 
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#E31E24] focus:bg-white/10 transition-colors"
                  />
                  <input 
                    type="text" 
                    placeholder="Destination Country *" 
                    required 
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#E31E24] focus:bg-white/10 transition-colors"
                  />
                  <input 
                    type="text" 
                    placeholder="Tentative Travel Date *" 
                    required 
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#E31E24] focus:bg-white/10 transition-colors"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <select 
                    required 
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-lg text-white/70 focus:outline-none focus:border-[#E31E24] focus:bg-white/10 transition-colors appearance-none"
                  >
                    <option value="" disabled selected>Number of Travelers *</option>
                    <option value="1-2">1-2 People</option>
                    <option value="3-5">3-5 People</option>
                    <option value="6+">6+ People</option>
                    <option value="group">Large Group (10+)</option>
                  </select>
                  
                  <select 
                    required 
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-lg text-white/70 focus:outline-none focus:border-[#E31E24] focus:bg-white/10 transition-colors appearance-none"
                  >
                    <option value="" disabled selected>Type of Vacation *</option>
                    <option value="family">Family Trip</option>
                    <option value="honeymoon">Honeymoon</option>
                    <option value="adventure">Adventure</option>
                    <option value="leisure">Leisure & Relax</option>
                  </select>
                </div>

                <div className="pt-6">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#E31E24] hover:bg-[#c4151a] text-white font-bold py-5 px-8 rounded-lg uppercase tracking-[0.15em] text-sm transition-all duration-300 shadow-[0_0_20px_rgba(227,30,36,0.4)] hover:shadow-[0_0_30px_rgba(227,30,36,0.6)] disabled:opacity-70 flex items-center justify-center"
                  >
                    {isSubmitting ? "Sending Request..." : "Request a Quote"}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
