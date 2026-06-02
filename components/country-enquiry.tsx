"use client"

import { useState } from "react"
import { Phone, Mail } from "lucide-react"

export function CountryEnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Enquiry submitted successfully!")
    }, 1500)
  }

  return (
    <section id="enquire" className="relative bg-[#f8f9fa] py-24 overflow-hidden border-t border-gray-200">
      {/* Abstract World Map Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 1000 500" className="w-full h-full object-cover">
          <path fill="currentColor" d="M141.5,142.9c-2.4-0.6-4.9,0.3-6,2.6c-0.3,0.7-0.4,1.4-0.3,2.2c0.2,1.3,0.9,2.5,2.1,3.2 c1.9,1.1,4.4,0.7,5.8-0.9c0.9-1,1.2-2.3,1-3.6C143.8,144.7,142.9,143.5,141.5,142.9z M211.5,134.4c-1.3-1.6-3.7-2.1-5.6-1.1 c-1.2,0.6-2.1,1.8-2.3,3.1c-0.1,0.9,0.1,1.9,0.6,2.7c1.4,2.2,4.4,2.7,6.4,1.1c0.9-0.7,1.5-1.7,1.6-2.9C212.4,136.2,212.1,135.2,211.5,134.4z M176.4,142.9c-2.4-0.6-4.9,0.3-6,2.6c-0.3,0.7-0.4,1.4-0.3,2.2c0.2,1.3,0.9,2.5,2.1,3.2c1.9,1.1,4.4,0.7,5.8-0.9 c0.9-1,1.2-2.3,1-3.6C178.7,144.7,177.8,143.5,176.4,142.9z M192.5,152.9c-2.4-0.6-4.9,0.3-6,2.6c-0.3,0.7-0.4,1.4-0.3,2.2 c0.2,1.3,0.9,2.5,2.1,3.2c1.9,1.1,4.4,0.7,5.8-0.9c0.9-1,1.2-2.3,1-3.6C194.8,154.7,193.9,153.5,192.5,152.9z M253.5,155.4 c-1.3-1.6-3.7-2.1-5.6-1.1c-1.2,0.6-2.1,1.8-2.3,3.1c-0.1,0.9,0.1,1.9,0.6,2.7c1.4,2.2,4.4,2.7,6.4,1.1c0.9-0.7,1.5-1.7,1.6-2.9 C254.4,157.2,254.1,156.2,253.5,155.4z M221.5,162.9c-2.4-0.6-4.9,0.3-6,2.6c-0.3,0.7-0.4,1.4-0.3,2.2c0.2,1.3,0.9,2.5,2.1,3.2 c1.9,1.1,4.4,0.7,5.8-0.9c0.9-1,1.2-2.3,1-3.6C223.8,164.7,222.9,163.5,221.5,162.9z M314.5,153.4c-1.3-1.6-3.7-2.1-5.6-1.1 c-1.2,0.6-2.1,1.8-2.3,3.1c-0.1,0.9,0.1,1.9,0.6,2.7c1.4,2.2,4.4,2.7,6.4,1.1c0.9-0.7,1.5-1.7,1.6-2.9C315.4,155.2,315.1,154.2,314.5,153.4z M287.5,163.4c-1.3-1.6-3.7-2.1-5.6-1.1c-1.2,0.6-2.1,1.8-2.3,3.1c-0.1,0.9,0.1,1.9,0.6,2.7c1.4,2.2,4.4,2.7,6.4,1.1 c0.9-0.7,1.5-1.7,1.6-2.9C288.4,165.2,288.1,164.2,287.5,163.4z M334.5,173.4c-1.3-1.6-3.7-2.1-5.6-1.1c-1.2,0.6-2.1,1.8-2.3,3.1 c-0.1,0.9,0.1,1.9,0.6,2.7c1.4,2.2,4.4,2.7,6.4,1.1c0.9-0.7,1.5-1.7,1.6-2.9C335.4,175.2,335.1,174.2,334.5,173.4z" />
          {/* Add more path data if needed to make a full map, but using a very subtle design pattern works too */}
          <circle cx="200" cy="200" r="100" fill="currentColor" />
          <circle cx="500" cy="250" r="150" fill="currentColor" />
          <circle cx="800" cy="200" r="120" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Contact Info */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#1a1f4e] mb-12">
              Stay Connected
            </h2>
            
            <div className="flex flex-col items-center lg:items-start space-y-10">
              <div className="flex flex-col items-center lg:items-start group">
                <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-[#1a1f4e]" />
                </div>
                <a href="tel:+919842334325" className="text-2xl font-serif text-gray-700 hover:text-[#E31E24] transition-colors">
                  +91 98423 34325
                </a>
              </div>

              <div className="flex flex-col items-center lg:items-start group">
                <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-[#1a1f4e]" />
                </div>
                <a href="mailto:info@rrholidays.net" className="text-xl font-serif text-gray-700 hover:text-[#E31E24] transition-colors">
                  info@rrholidays.net
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div>
            <h3 className="text-3xl md:text-4xl font-serif font-medium text-[#1a1f4e] mb-8 text-center lg:text-left">
              Book Your Dream Vacay Today!
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <input 
                  type="text" 
                  placeholder="Name *" 
                  required 
                  className="w-full px-5 py-4 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 bg-white"
                />
                
                <input 
                  type="text" 
                  placeholder="City of Residence *" 
                  required 
                  className="w-full px-5 py-4 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 bg-white"
                />
                
                <input 
                  type="email" 
                  placeholder="Email *" 
                  required 
                  className="w-full px-5 py-4 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 bg-white"
                />
                
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-500 font-medium">
                    🇮🇳 +91 |
                  </span>
                  <input 
                    type="tel" 
                    placeholder="Phone Number *" 
                    required 
                    className="w-full pl-24 pr-5 py-4 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 bg-white"
                  />
                </div>
                
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-500 font-medium">
                    🇮🇳 +91 |
                  </span>
                  <input 
                    type="tel" 
                    placeholder="WhatsApp" 
                    className="w-full pl-24 pr-5 py-4 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 bg-white"
                  />
                </div>
                
                <input 
                  type="text" 
                  placeholder="Travel Destination *" 
                  required 
                  className="w-full px-5 py-4 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 bg-white"
                />
                
                <input 
                  type="text" 
                  placeholder="Date of Travel (MM/YYYY) *" 
                  required 
                  className="w-full px-5 py-4 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 bg-white"
                />
                
                <input 
                  type="number" 
                  placeholder="No. of People *" 
                  min="1"
                  required 
                  className="w-full px-5 py-4 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 bg-white"
                />
                
                <select 
                  required 
                  className="w-full px-5 py-4 border border-gray-200 rounded-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 bg-white text-gray-500"
                >
                  <option value="" disabled selected>Vacation Type *</option>
                  <option value="family">Family Trip</option>
                  <option value="honeymoon">Honeymoon</option>
                  <option value="friends">Friends Group</option>
                  <option value="solo">Solo Travel</option>
                  <option value="corporate">Corporate Outing</option>
                </select>
              </div>

              <div className="pt-2 flex justify-end">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-[#ffcc00] hover:bg-[#e6b800] text-black font-bold py-4 px-10 uppercase tracking-wider text-sm transition-colors shadow-sm disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "ENQUIRE NOW"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
