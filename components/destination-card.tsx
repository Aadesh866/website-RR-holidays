"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Destination } from "@/data/destinations"

interface DestinationCardProps {
  destination: Destination
}

export function DestinationCard({ destination }: DestinationCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-lg shadow-gray-200/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image with zoom effect */}
      <div className="absolute inset-0">
        <motion.div
          className="w-full h-full"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={destination.image}
            alt={`${destination.name} travel destination`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

      {/* Category Badge */}
      <div className="absolute top-5 left-5">
        <Badge variant="glass" className="text-xs px-3 py-1">
          {destination.categories[0]}
        </Badge>
      </div>

      {/* Price Badge */}
      <div className="absolute top-5 right-5">
        <Badge variant="glass" className="text-xs font-semibold px-3 py-1">
          From ₹{destination.price.toLocaleString("en-IN")}
        </Badge>
      </div>

      {/* Destination Name */}
      <div className="absolute bottom-6 left-6 right-6">
        <p className="text-white/70 text-sm mb-1">{destination.tagline}</p>
        <h3 className="text-white text-2xl font-heading font-semibold">
          {destination.name}
        </h3>
      </div>

      {/* View Details Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-[#1a1f4e]/60 backdrop-blur-sm flex items-center justify-center"
      >
        <Link href="/packages">
          <Button
            variant="default"
            size="lg"
            rounded="full"
            className="shadow-xl"
          >
            View Packages
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  )
}
