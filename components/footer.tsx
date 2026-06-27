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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16 border-b border-white/10 pb-16">
          
          {/* Col 1: Brand & About */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="RR Holidays"
                width={200}
                height={60}
                className="h-16 w-auto object-contain bg-white/90 p-2 rounded mb-6"
              />
            </Link>
            <p className="text-white/60 leading-relaxed text-sm mb-8">
              Crafting unforgettable travel experiences globally. As South India&apos;s premier travel brand, we specialize in curating bespoke journeys that turn your travel dreams into reality.
            </p>
            <div className="flex space-x-4">
              <a href="#facebook" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E31E24] hover:text-white transition-all text-white/70">Fb</a>
              <a href="#instagram" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E31E24] hover:text-white transition-all text-white/70">Ig</a>
              <a href="#linkedin" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E31E24] hover:text-white transition-all text-white/70">In</a>
            </div>
          </div>

          {/* Col 2: International */}
          <div>
            <h4 className="text-white font-serif font-medium text-lg mb-6 relative inline-block">
              International
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#E31E24]"></span>
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/packages/asia/maldives" className="hover:text-[#E31E24] transition-colors">Maldives</Link></li>
              <li><Link href="/packages/asia/thailand" className="hover:text-[#E31E24] transition-colors">Thailand</Link></li>
              <li><Link href="/packages/asia/singapore" className="hover:text-[#E31E24] transition-colors">Singapore & Malaysia</Link></li>
              <li><Link href="/packages/europe/switzerland" className="hover:text-[#E31E24] transition-colors">Europe</Link></li>
              <li><Link href="/packages/asia/uae-united-arab-emirates" className="hover:text-[#E31E24] transition-colors">Dubai & Abu Dhabi</Link></li>
              <li><Link href="/packages" className="hover:text-[#E31E24] transition-colors font-medium text-white/90">View All Destinations &rarr;</Link></li>
            </ul>
          </div>

          {/* Col 3: India */}
          <div>
            <h4 className="text-white font-serif font-medium text-lg mb-6 relative inline-block">
              Incredible India
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#E31E24]"></span>
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/india/south-india?state=kerala" className="hover:text-[#E31E24] transition-colors">Kerala</Link></li>
              <li><Link href="/india/west-india?state=rajasthan" className="hover:text-[#E31E24] transition-colors">Rajasthan</Link></li>
              <li><Link href="/india/north-india?state=jammu-and-kashmir" className="hover:text-[#E31E24] transition-colors">Kashmir</Link></li>
              <li><Link href="/india/west-india?state=goa" className="hover:text-[#E31E24] transition-colors">Goa</Link></li>
              <li><Link href="/india/north-india?state=himachal-pradesh" className="hover:text-[#E31E24] transition-colors">Himachal Pradesh</Link></li>
              <li><Link href="/india" className="hover:text-[#E31E24] transition-colors font-medium text-white/90">View All States &rarr;</Link></li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div>
            <h4 className="text-white font-serif font-medium text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#E31E24]"></span>
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-[#E31E24] transition-colors">About Company</Link></li>
              <li><Link href="/honeymoon" className="hover:text-[#E31E24] transition-colors">Honeymoon Specials</Link></li>
              <li><Link href="/educational" className="hover:text-[#E31E24] transition-colors">Educational Tours</Link></li>
              <li><Link href="/contact" className="hover:text-[#E31E24] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div>
            <h4 className="text-white font-serif font-medium text-lg mb-6 relative inline-block">
              Contact Details
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[#E31E24]"></span>
            </h4>
            <div className="space-y-4">
              <p className="leading-relaxed text-sm text-white/70 flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-[#E31E24]" />
                RR Holidays Pvt LTD, No. 213, First Floor, Chellapan Street, Kattoor, Coimbatore - 641009, TN, India.
              </p>
              <div className="pt-2">
                <span className="text-[10px] text-white/40 uppercase tracking-wider block mb-1">For Bookings</span>
                <a href="tel:+919842334325" className="text-lg font-serif text-white hover:text-[#E31E24] transition-colors flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-[#E31E24]" />
                  +91 98423 34325
                </a>
              </div>
              <div>
                <span className="text-[10px] text-white/40 uppercase tracking-wider block mb-1">Email Support</span>
                <a href="mailto:info@rrholidays.net" className="text-sm text-white/80 hover:text-[#E31E24] transition-colors flex items-center">
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
