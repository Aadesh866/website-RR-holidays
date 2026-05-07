"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, X, MapPin, Clock } from "lucide-react"
import { packages } from "@/data/packages"
import Link from "next/link"
import Image from "next/image"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("")

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const results = packages.filter((pkg) => {
    const searchStr = query.toLowerCase()
    return (
      (pkg.name?.toLowerCase() || "").includes(searchStr) ||
      (pkg.category?.toLowerCase() || "").includes(searchStr) ||
      (pkg.description?.toLowerCase() || "").includes(searchStr)
    )
  })

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[10%] z-[101] mx-auto w-full max-w-3xl px-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
              {/* Search Header */}
              <div className="p-4 border-b flex items-center relative">
                <Search className="w-6 h-6 text-gray-400 ml-2" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Where do you want to go?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full px-4 py-3 text-lg outline-none placeholder:text-gray-400 bg-transparent"
                />
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors absolute right-4"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Results */}
              <div className="overflow-y-auto p-4 flex-1 bg-gray-50/50">
                {query === "" ? (
                  <div className="text-center py-10 text-gray-500">
                    <p>Try searching for "Dubai", "Manali", or "Kerala"</p>
                  </div>
                ) : results.length > 0 ? (
                  <div className="grid gap-3">
                    {results.map((pkg) => (
                      <Link
                        href={`/packages/${pkg.id}`}
                        key={pkg.id}
                        onClick={onClose}
                        className="flex items-center p-3 bg-white rounded-xl border hover:border-[#E31E24] hover:shadow-md transition-all group"
                      >
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={pkg.image}
                            alt={pkg.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="ml-4 flex-1">
                          <h4 className="font-heading font-bold text-[#1a1f4e] text-lg group-hover:text-[#E31E24] transition-colors">
                            {pkg.name}
                          </h4>
                          <div className="flex items-center text-sm text-gray-500 mt-1 gap-4">
                            <span className="flex items-center">
                              <MapPin className="w-3.5 h-3.5 mr-1" />
                              {pkg.category}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-3.5 h-3.5 mr-1" />
                              {pkg.duration}
                            </span>
                          </div>
                        </div>
                        <div className="font-bold text-[#1a1f4e] pr-2">
                          ₹{pkg.price.toLocaleString("en-IN")}
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10 text-gray-500">
                    <p>No destinations found for "{query}"</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
