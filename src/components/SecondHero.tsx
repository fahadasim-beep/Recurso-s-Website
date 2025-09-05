"use client"
import { useState } from "react"
import Image from "next/image" 

export default function SecondHero() {
  const [currentSection, setCurrentSection] = useState(0)

  return (
    <section className="relative isolate overflow-hidden bg-background py-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(60rem_60rem_at_50%_50%,oklch(0.35_0.1_260/_0.4),transparent)]" />
      
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Section - Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Grow Your Business With
              <br />
              <span className="text-blue-300">Innovative Ideas</span>
            </h2>
            
            <p className="text-lg text-slate-200/90 max-w-xl">
              At Recurso Labs, we transform your vision into reality with cutting-edge technology solutions. 
              Our expert team delivers innovative software that drives business growth and digital transformation.
            </p>
            
            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 text-white font-semibold rounded-lg bg-[oklch(0.55_0.18_255)] hover:bg-[oklch(0.5_0.18_255)] shadow-md transition-colors flex items-center gap-3">
                Explore More
                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Right Section - Circular Image Area */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main circular container */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-600/20 to-blue-800/20 border border-blue-500/30 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                {/* Placeholder for your image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-blue-700/10 rounded-full flex items-center justify-center">
                  <div className="text-center text-blue-200/60">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <p className="text-sm">Your Image Here</p>
                  </div>
                </div>
              </div>

              {/* Video thumbnail overlay */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-4 border-white shadow-lg flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left Navigation Dots */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col gap-4">
          {[0, 1, 2].map((section) => (
            <button
              key={section}
              onClick={() => setCurrentSection(section)}
              className={`w-3 h-3 rounded-full transition-all ${
                section === currentSection 
                  ? 'bg-blue-500 scale-125' 
                  : 'bg-white/30 border border-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right Scroll Indicator */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-xs font-medium tracking-wider rotate-90">SCROLL DOWN</span>
          <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
