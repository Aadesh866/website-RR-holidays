"use client"

import { useEffect } from "react"
import Script from "next/script"

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Wait for script to load
    let isInitialized = false
    let lenis: any = null
    let rafId: number

    const initLenis = () => {
      // @ts-ignore
      if (typeof window !== "undefined" && window.Lenis && !isInitialized) {
        isInitialized = true
        // @ts-ignore
        lenis = new window.Lenis({
          lerp: 0.08, // The "Premium" Sweet Spot (0.05 - 0.1)
          smoothWheel: true,
          wheelMultiplier: 1,
          smoothTouch: false, // Let native OS handle mobile touch
        })

        let rafId: number
        function raf(time: number) {
          lenis.raf(time)
          rafId = requestAnimationFrame(raf)
        }

        rafId = requestAnimationFrame(raf)

        return () => {
          if (lenis) {
            lenis.destroy()
            cancelAnimationFrame(rafId)
            isInitialized = false
          }
        }
      }
    }

    // Attempt initialization (in case script loaded before component mounted)
    initLenis()

    // Listen for script load
    window.addEventListener("lenis-loaded", initLenis)
    return () => window.removeEventListener("lenis-loaded", initLenis)
  }, [])

  return (
    <>
      <Script 
        src="https://unpkg.com/lenis@1.1.9/dist/lenis.min.js" 
        strategy="lazyOnload"
        onLoad={() => window.dispatchEvent(new Event("lenis-loaded"))}
      />
      {children}
    </>
  )
}
