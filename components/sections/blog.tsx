"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { blogPosts } from "@/data/blog"
import { useStaggerAnimation } from "@/hooks/use-scroll-animation"

interface BlogProps {
  maxItems?: number
}

export function Blog({ maxItems }: BlogProps) {
  const gridRef = useStaggerAnimation(0.1)
  const displayPosts = maxItems ? blogPosts.slice(0, maxItems) : blogPosts

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[#E31E24] text-sm font-medium uppercase tracking-[0.25em] mb-5">
            Our Blog
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1a1f4e] leading-[1.2]">
            Travel Inspiration
          </h2>
        </div>

        {/* Blog Grid */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {displayPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BlogCard({ post }: { post: typeof blogPosts[0] }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
        <motion.div
          className="w-full h-full"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* Category & Date */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs uppercase text-[#E31E24] font-semibold tracking-wider">
          {post.category}
        </span>
        <span className="w-1 h-1 rounded-full bg-[#9ca3af]" />
        <span className="text-sm text-[#9ca3af]">
          {post.date}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-heading font-medium text-[#1a1f4e] mb-3 group-hover:text-[#E31E24] transition-colors leading-snug">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-[#4b5563] text-sm line-clamp-3 mb-5 leading-relaxed">
        {post.excerpt}
      </p>

      {/* Read More Link */}
      <button className="flex items-center text-[#E31E24] font-medium text-sm group-hover:underline">
        Read More
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </article>
  )
}
