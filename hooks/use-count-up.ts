"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function useCountUp(end: number, duration = 2) {
  const [count, setCount] = useState(0)
  const elementRef = useRef<HTMLElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element || hasAnimated.current) return

    const obj = { value: 0 }

    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      onEnter: () => {
        if (hasAnimated.current) return
        hasAnimated.current = true

        gsap.to(obj, {
          value: end,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            setCount(Math.floor(obj.value))
          },
        })
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [end, duration])

  return { count, elementRef }
}
