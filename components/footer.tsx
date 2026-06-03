import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0f2b] text-white pt-20 pb-0 relative border-t-[4px] border-[#E31E24]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-16 border-b border-white/10 pb-16">
          
          {/* Brand & About */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-serif font-medium text-2xl mb-6 flex items-center">
              RR <span className="text-[#E31E24] ml-2">Holidays</span>
            </h4>
            <p className="text-white/60 leading-relaxed text-sm mb-8">
              Crafting unforgettable travel experiences globally. As South India's premier travel brand, we specialize in curating bespoke journeys that turn your travel dreams into reality.
            </p>
            <div className="flex space-x-4">
              <a href="#facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E31E24] hover:text-white transition-all text-white/70">Fb</a>
              <a href="#instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E31E24] hover:text-white transition-all text-white/70">Ig</a>
              <a href="#linkedin" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E31E24] hover:text-white transition-all text-white/70">In</a>
            </div>
          </div>

          {/* Office Location */}
          <div>
            <h4 className="text-white font-serif font-medium text-xl mb-6 relative inline-block">
              Our Office
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#E31E24]"></span>
            </h4>
            <div className="space-y-4">
              <p className="font-semibold text-white/90">RR Holidays Pvt LTD,</p>
              <p className="leading-relaxed text-sm text-white/60 flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-[#E31E24]" />
                No. 213, First Floor, Chellapan Street, Kattoor, Coimbatore - 641 009, Tamil Nadu, India.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-white font-serif font-medium text-xl mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#E31E24]"></span>
            </h4>
            <div className="space-y-6">
              <div>
                <span className="text-xs text-white/40 uppercase tracking-wider block mb-1">For Bookings</span>
                <a href="tel:+919842334325" className="text-xl font-serif text-white hover:text-[#E31E24] transition-colors flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-[#E31E24]" />
                  +91 98423 34325
                </a>
              </div>
              <div>
                <span className="text-xs text-white/40 uppercase tracking-wider block mb-1">Email Support</span>
                <a href="mailto:info@rrholidays.net" className="text-lg text-white/80 hover:text-[#E31E24] transition-colors flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-[#E31E24]" />
                  info@rrholidays.net
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="bg-[#1a1f4e] text-white py-5 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium -mx-6 sm:-mx-8 lg:-mx-12">
          
          <div className="flex items-center space-x-4">
            <p className="text-white/60">
              Copyright © {currentYear} by RR Holidays Pvt Ltd. All Rights Reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-white/50">
            <Link href="#privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="#terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <span>|</span>
            <Link href="#cancellation" className="hover:text-white transition-colors">Cancellation & Refund Policy</Link>
            
            <a href="#enquire" className="ml-4 bg-[#E31E24] hover:bg-[#c4151a] text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider text-sm transition-colors shadow-md">
              Start Planning
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}
