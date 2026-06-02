import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const branches = [
  "Mumbai", "Hyderabad", "Bangalore", "Chennai", 
  "Coimbatore", "Erode", "Madurai", "Trichy", 
  "Salem", "Kochi", "Vellore", "Pondicherry", 
  "Nagercoil", "Kanyakumari"
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1a1a1a] text-[#d1d1d1] pt-16 pb-0 relative">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-16 border-b border-white/10 pb-16">
          
          {/* Corporate Office */}
          <div>
            <h4 className="text-white font-serif font-medium text-2xl mb-6">Corporate Office</h4>
            <div className="space-y-4">
              <p className="font-semibold text-white/90">RR Holidays Pvt LTD,</p>
              <p className="leading-relaxed text-sm">
                Novel Tech Park,<br />
                Opposite to 1 MG Mall,<br />
                MG Road, Bangalore - 560042<br />
                Karnataka, India.
              </p>
            </div>
          </div>

          {/* Head Office */}
          <div>
            <h4 className="text-white font-serif font-medium text-2xl mb-6">Head Office</h4>
            <div className="space-y-4">
              <p className="font-semibold text-white/90">RR Holidays Pvt LTD,</p>
              <p className="leading-relaxed text-sm">
                No. 213, First Floor,<br />
                Chellapan Street, Kattoor,<br />
                Coimbatore - 641 009<br />
                Tamil Nadu, India.
              </p>
            </div>
          </div>

          {/* Our Branches */}
          <div>
            <h4 className="text-white font-serif font-medium text-2xl mb-6">Our Branches</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {branches.map((branch) => (
                <li key={branch}>
                  <Link href="#contact" className="hover:text-white transition-colors hover:underline">
                    {branch}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Call Us */}
          <div className="flex flex-col border-l-2 border-white/10 pl-6">
            <span className="text-sm text-white/60 mb-2">Call Us</span>
            <a href="tel:+919842334325" className="text-2xl font-serif text-white hover:text-[#E31E24] transition-colors">
              +91 98423 34325
            </a>
          </div>

          {/* Email Us */}
          <div className="flex flex-col border-l-2 border-white/10 pl-6">
            <span className="text-sm text-white/60 mb-2">Email Us</span>
            <a href="mailto:info@rrholidays.net" className="text-2xl font-serif text-white hover:text-[#E31E24] transition-colors">
              info@rrholidays.net
            </a>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col border-l-2 border-white/10 pl-6">
            <span className="text-sm text-white/60 mb-2">Follow Us</span>
            <div className="flex space-x-4 mt-2 font-serif text-sm">
              <a href="#facebook" className="text-white hover:text-[#E31E24] transition-colors">Facebook</a>
              <a href="#instagram" className="text-white hover:text-[#E31E24] transition-colors">Instagram</a>
              <a href="#linkedin" className="text-white hover:text-[#E31E24] transition-colors">LinkedIn</a>
              <a href="#youtube" className="text-white hover:text-[#E31E24] transition-colors">YouTube</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-white text-black py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium -mx-6 sm:-mx-8 lg:-mx-12">
          
          <div className="flex items-center space-x-4">
            <a href="https://wa.me/919842334325" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white p-2 rounded-full hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </a>
            <p className="text-gray-600">
              Copyright © {currentYear} by RR Holidays Pvt Ltd. All Rights Reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-500">
            <Link href="#privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="#terms" className="hover:text-black transition-colors">Terms & Conditions</Link>
            <span>|</span>
            <Link href="#cancellation" className="hover:text-black transition-colors">Cancellation & Refund Policy</Link>
            
            <a href="#enquire" className="ml-4 bg-[#ffcc00] hover:bg-[#e6b800] text-black font-bold py-3 px-8 uppercase tracking-wider text-sm transition-colors shadow-md">
              ENQUIRE NOW
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}
