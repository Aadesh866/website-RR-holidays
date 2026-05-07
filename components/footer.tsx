import { Share2, Video, MessageCircle, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  { name: "Packages", href: "/packages" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const supportLinks = [
  { name: "FAQs", href: "#contact" },
  { name: "Cancellation Policy", href: "#contact" },
  { name: "Terms & Conditions", href: "#contact" },
  { name: "Privacy Policy", href: "#contact" },
  { name: "EMI Options", href: "#contact" },
  { name: "Travel Insurance", href: "#contact" },
]

const topDestinations = [
  { name: "Maldives", href: "/destinations" },
  { name: "Switzerland", href: "/destinations" },
  { name: "Bali", href: "/destinations" },
  { name: "Kashmir", href: "/destinations" },
  { name: "Dubai", href: "/destinations" },
  { name: "Thailand", href: "/destinations" },
  { name: "Ladakh", href: "/destinations" },
  { name: "Goa", href: "/destinations" },
]

const socialLinks = [
  { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/919842334325" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0d1130] text-white/80 pt-20 pb-10">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Column 1 - Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="RR Holidays"
                width={180}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed max-w-sm">
              Crafting extraordinary travel experiences across India and the world since 2010. Your journey, our expertise.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.name === "WhatsApp" ? "_blank" : undefined}
                    rel={social.name === "WhatsApp" ? "noopener noreferrer" : undefined}
                    className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E31E24] transition-all hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#E31E24] transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Top Destinations */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Top Destinations</h4>
            <ul className="space-y-3">
              {topDestinations.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#E31E24] transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-4 flex-shrink-0 mt-0.5 text-[#E31E24]" />
                <span>No. 213, First Floor, Chellapan Street, Kattoor, Coimbatore - 641 009</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-4 flex-shrink-0 text-[#E31E24]" />
                <a href="tel:+919842334325" className="hover:text-[#E31E24] transition-colors">
                  +91 98423 34325
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-4 flex-shrink-0 text-[#E31E24]" />
                <a href="mailto:info@rrholidays.net" className="hover:text-[#E31E24] transition-colors">
                  info@rrholidays.net
                </a>
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-4 flex-shrink-0 text-[#E31E24]" />
                <a
                  href="https://wa.me/919842334325"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E31E24] transition-colors"
                >
                  WhatsApp: +91 98423 34325
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © {currentYear} RR Holidays. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#contact" className="hover:text-white/80 transition-colors">Privacy Policy</a>
            <a href="#contact" className="hover:text-white/80 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
