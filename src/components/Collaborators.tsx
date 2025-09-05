"use client"
import { useEffect, useRef, useState } from "react"

export default function Collaborators() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollX, setScrollX] = useState(0)
  const [autoScroll, setAutoScroll] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (autoScroll) {
      interval = setInterval(() => {
        setScrollPosition((prev) => (prev + 0.1) % 100)
      }, 50)
    }
    return () => clearInterval(interval)
  }, [autoScroll])

  const companies = [
    "Uber", "Monipoint", "Innroad", "Better Payroll",
    "Filler1", "Filler2", "Filler3", "Filler4",
    "Filler5", "Filler6", "Filler7", "Filler8",
    "Filler9", "Filler10"
  ]

  return (
    <section className="relative overflow-hidden bg-background py-16 border-y border-slate-300 w-full">
      {/* Subtle light vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(60rem_60rem_at_50%_50%,oklch(0.98_0.02_90/_0.4),transparent)]" />

      {/* Full-width flex row */}
      <div className="relative flex items-center justify-between w-full">
        
        {/* Left side - "Projects" text */}
        <div className="flex-shrink-0 z-10 pl-4 sm:pl-6 md:pl-12">
          <div className="text-xl sm:text-2xl font-bold text-slate-800 leading-tight">
            Projects
          </div>
        </div>

        {/* Right side - Edge-to-edge scrolling logos */}
        <div
          className="flex-1 relative overflow-hidden cursor-grab active:cursor-grabbing"
          ref={containerRef}
          onMouseDown={(e) => {
            setIsDragging(true)
            setAutoScroll(false)
            if (containerRef.current) {
              const rect = containerRef.current.getBoundingClientRect()
              setStartX(e.pageX - rect.left - scrollX)
            }
          }}
          onMouseMove={(e) => {
            if (!isDragging) return
            if (!containerRef.current) return
            const rect = containerRef.current.getBoundingClientRect()
            const x = e.pageX - rect.left - startX
            setScrollX(x)
            const containerWidth = containerRef.current?.offsetWidth || 1
            const scrollPercent = ((-x % containerWidth) / containerWidth) * 100
            setScrollPosition(scrollPercent < 0 ? scrollPercent + 100 : scrollPercent)
          }}
          onMouseUp={() => {
            setIsDragging(false)
            setTimeout(() => setAutoScroll(true), 1000)
          }}
          onMouseLeave={() => {
            setIsDragging(false)
            setTimeout(() => setAutoScroll(true), 1000)
          }}
        >
          <div
            className="flex items-center gap-8 whitespace-nowrap transition-transform duration-1000 ease-linear"
            style={{
              transform: `translateX(-${scrollPosition}%)`,
              width: "max-content",
              pointerEvents: isDragging ? "none" : "auto",
            }}
          >
            {companies.map((company, index) => (
              <div key={index} className="flex items-center">
                <div className="text-lg sm:text-xl font-semibold text-slate-700 hover:text-[oklch(0.5_0.18_255)] transition-colors">
                  {company}
                </div>
                {index < companies.length - 1 && (
                  <div className="mx-4 sm:mx-8 text-slate-400">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.39 7.34L22 9.5l-6 5.84L17.61 22L12 18.27L6.39 22L8 15.34L2 9.5l7.61-2.16L12 2z"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {companies.map((company, index) => (
              <div key={`duplicate-${index}`} className="flex items-center">
                <div className="text-lg sm:text-xl font-semibold text-slate-700 hover:text-[oklch(0.5_0.18_255)] transition-colors">
                  {company}
                </div>
                {index < companies.length - 1 && (
                  <div className="mx-4 sm:mx-8 text-slate-400">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.39 7.34L22 9.5l-6 5.84L17.61 22L12 18.27L6.39 22L8 15.34L2 9.5l7.61-2.16L12 2z"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
