"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

type ParallaxLayer = {
  id: string
  depth: number
  className?: string
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handle)
    return () => window.removeEventListener("mousemove", handle)
  }, [])

  const layers: ParallaxLayer[] = [
    { id: "dots", depth: 0.02, className: "bg-[radial-gradient(circle_at_center,rgba(100,116,139,0.2)_1px,transparent_1px)] bg-[length:24px_24px]" },
    { id: "ring", depth: 0.05, className: "rounded-full border border-slate-300/50 size-[56vmin]" },
    { id: "ring2", depth: 0.08, className: "rounded-full border border-slate-300/30 size-[70vmin]" },
  ]

  return (
    <section className="relative isolate overflow-hidden min-h-screen bg-black">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/bg1.jpg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          loading="eager"
        />
      </div>
      <div ref={containerRef} className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 min-h-screen flex items-center">
        <div className="w-full">
          {/* Text content */}
          <div className="space-y-6 sm:space-y-8 h-full flex flex-col justify-center max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight tracking-tight text-left">
              EMPOWERING
              <br />
              <span className="text-[oklch(0.55_0.18_255)]">VISIONARIES</span>
              <br />
              WITH TECH
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-200 leading-relaxed max-w-2xl text-left">
              Transforming ideas into powerful digital solutions that drive innovation and growth.
            </p>
            <div>
              <Link
                href="/contactUs"
                className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-[oklch(0.55_0.18_255)] text-white font-bold rounded-lg hover:bg-[oklch(0.5_0.18_255)] transition-colors shadow-lg w-fit text-sm sm:text-base"
              >
                Schedule a Meeting
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

