"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Phone, MessageCircle, Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { SearchModal } from "@/components/search-modal"
import { MegaMenu } from "@/components/mega-menu"
import { IndiaMegaMenu } from "@/components/india-mega-menu"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Company", href: "/about" },
  { name: "Group Tours", href: "/group-tours" },
  { name: "Packages", href: "/packages" },
  { name: "India", href: "/india" },
  { name: "Honeymoon", href: "/honeymoon" },
  { name: "Wedding", href: "/wedding" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 h-[100px] bg-white border-b border-gray-100 shadow-sm transition-all duration-300"
      >
        <nav className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="RR Holidays"
              width={240}
              height={80}
              className="h-20 w-auto object-contain drop-shadow-sm"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 h-full">
            {navLinks.map((link) => {
              const isPackages = link.name === "Packages"
              const isIndia = link.name === "India"
              
              const linkContent = (
                <Link
                  href={link.href}
                  className={cn(
                    "text-[15px] font-bold tracking-wide transition-colors relative group py-8 uppercase",
                    "text-[#1a1f4e] hover:text-[#E31E24]",
                    pathname === link.href && "text-[#E31E24]"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-[#E31E24] transition-all",
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </Link>
              )

              if (isPackages) {
                return (
                  <div key={link.name} className="group/mega h-full flex items-center cursor-pointer">
                    {linkContent}
                    <MegaMenu />
                  </div>
                )
              }
              
              if (isIndia) {
                return (
                  <div key={link.name} className="group/mega h-full flex items-center cursor-pointer">
                    {linkContent}
                    <IndiaMegaMenu />
                  </div>
                )
              }

              return (
                <div key={link.name} className="h-full flex items-center">
                  {linkContent}
                </div>
              )
            })}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              rounded="full"
              className="text-[#1a1f4e] hover:bg-[#f0f1fa] hover:text-[#E31E24] transition-colors"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search packages"
            >
              <Search className="h-[22px] w-[22px]" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              rounded="full"
              className="text-[#1a1f4e] hover:bg-[#f0f1fa] hover:text-[#E31E24] transition-colors"
              onClick={() => window.open("tel:+919842334325", "_self")}
              aria-label="Call us"
            >
              <Phone className="h-[22px] w-[22px]" />
            </Button>
            <div className="h-8 w-[1px] bg-gray-200 mx-2" />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center py-3 px-8 bg-[#E31E24] text-white text-[15px] font-bold rounded-full hover:bg-[#c9171d] hover:scale-[1.03] shadow-md shadow-[#E31E24]/20 transition-all whitespace-nowrap"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center gap-2">
            <button
              className="p-2 text-[#1a1f4e]"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
            >
              <Search className="h-6 w-6" />
            </button>
            <button
              className="p-2 text-[#1a1f4e]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 20 }}
          className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl md:hidden"
        >
          <div className="flex flex-col h-full p-8">
            <div className="flex items-center justify-between mb-10">
              <Image
                src="/logo.png"
                alt="RR Holidays"
                width={140}
                height={45}
                className="h-10 w-auto object-contain"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-[#1a1f4e]" />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 mb-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors",
                      pathname === link.href ? "text-[#E31E24]" : "text-[#1a1f4e] hover:text-[#E31E24]"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto space-y-4">
              <Button
                variant="outline"
                size="lg"
                rounded="full"
                className="w-full"
                onClick={() => window.open("tel:+919842334325", "_self")}
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Us
              </Button>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  variant="default"
                  size="lg"
                  rounded="full"
                  className="w-full bg-[#E31E24] hover:bg-[#c9171d]"
                >
                  Enquire Now
                </Button>
              </Link>
              <Button
                variant="default"
                size="lg"
                rounded="full"
                className="w-full bg-[#25D366] hover:bg-[#20BA5A]"
                onClick={() => window.open("https://wa.me/919842334325?text=Hi,%20I'm%20interested%20in%20RR%20Holidays%20packages.%20Please%20share%20more%20details.", "_blank")}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
