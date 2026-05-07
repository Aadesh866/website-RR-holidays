"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import type { Package } from "@/data/packages"

interface PackageCardProps {
  package: Package
}

export function PackageCard({ package: pkg }: PackageCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <motion.div
          className="w-full h-full relative"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={pkg.image}
            alt={`${pkg.name} tour package`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        </motion.div>
        
        {/* Duration Badge */}
        <div className="absolute top-5 left-5">
          <Badge variant="glass" className="text-xs font-semibold px-3 py-1">
            {pkg.duration}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-7 lg:p-8">
        <h3 className="text-xl font-heading font-medium text-[#1a1f4e] mb-3">
          {pkg.name}
        </h3>
        <p className="text-[#4b5563] text-sm line-clamp-2 mb-5 leading-relaxed">
          {pkg.description}
        </p>

        {/* Features */}
        <ul className="space-y-2.5 mb-6">
          {pkg.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-[#4b5563]">
              <Check className="w-4 h-4 text-[#10b981] mr-3 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Price Row */}
        <div className="flex items-center justify-between pt-5 border-t border-[#e5e7eb]">
          <div>
            <div className="text-[#1a1f4e] font-semibold text-lg">
              ₹{pkg.price.toLocaleString("en-IN")}
              <span className="text-sm font-normal text-[#4b5563] ml-1">per person</span>
            </div>
            <div className="text-[#9ca3af] text-sm line-through">
              ₹{pkg.originalPrice.toLocaleString("en-IN")}
            </div>
          </div>
          <Link 
            href={`/packages/${pkg.id}`}
            className={buttonVariants({ size: "sm", rounded: "full", variant: "default" })}
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
