"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="relative z-50">
          <Image
            src="/logo.png"
            alt="Recurso Labs"
            width={160}
            height={40}
            priority
            className="h-8 sm:h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link 
            href="/" 
            className="text-white hover:text-[oklch(0.55_0.18_255)] transition-colors font-medium"
          >
            Home
          </Link>
          
          <Link 
            href="/home/overview" 
            className="text-white hover:text-[oklch(0.55_0.18_255)] transition-colors font-medium"
          >
            About us
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-white hover:text-[oklch(0.55_0.18_255)] transition-colors font-medium flex items-center space-x-1"
            >
              <span>Services</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-sm rounded-md shadow-lg border border-white/10">
                <div className="py-2">
                  <Link 
                    href="/services/consulting" 
                    className="block px-4 py-2 text-white hover:text-[oklch(0.55_0.18_255)] hover:bg-white/10 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Consulting
                  </Link>
                  <Link 
                    href="/services/staff-augmentation" 
                    className="block px-4 py-2 text-white hover:text-[oklch(0.55_0.18_255)] hover:bg-white/10 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Staff Augmentation
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          <Link 
            href="/life-at-recurso/careers" 
            className="text-white hover:text-[oklch(0.55_0.18_255)] transition-colors font-medium"
          >
            Careers
          </Link>
          
          <Link 
            href="/contactUs" 
            className="text-white hover:text-[oklch(0.55_0.18_255)] transition-colors font-medium"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden relative z-50 bg-black/50 p-3 rounded-md transition-all duration-300 ease-in-out hover:bg-black/70"
          aria-label="Toggle Menu"
        >
          <div className="space-y-2">
            <div className={`w-8 h-0.5 bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <div className={`w-8 h-0.5 bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-8 h-0.5 bg-white transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-1/2 transition-transform duration-300 ease-in-out lg:hidden z-40 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="h-full w-full bg-black flex flex-col">
            {/* Large portion - Navigation links */}
            <div className="flex-1 bg-black flex flex-col justify-center px-4 py-6">
              <div className="mb-6">
                <h2 className="text-[oklch(0.55_0.18_255)] text-lg font-semibold tracking-wider mb-4">Navigation</h2>
              </div>
              
              <div className="text-left space-y-3 bg-black">
                <Link 
                  href="/" 
                  className="block text-base font-bold text-white hover:text-[oklch(0.55_0.18_255)] transition-colors bg-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/home/overview" 
                  className="block text-base font-bold text-white hover:text-[oklch(0.55_0.18_255)] transition-colors bg-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About us
                </Link>
                <Link 
                  href="/services/consulting" 
                  className="block text-base font-bold text-white hover:text-[oklch(0.55_0.18_255)] transition-colors bg-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Consulting
                </Link>
                <Link 
                  href="/services/staff-augmentation" 
                  className="block text-base font-bold text-white hover:text-[oklch(0.55_0.18_255)] transition-colors bg-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Staff Augmentation
                </Link>
                <Link 
                  href="/life-at-recurso/careers" 
                  className="block text-base font-bold text-white hover:text-[oklch(0.55_0.18_255)] transition-colors bg-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Careers
                </Link>
                <Link 
                  href="/contactUs" 
                  className="block text-base font-bold text-white hover:text-[oklch(0.55_0.18_255)] transition-colors bg-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Small portion - Footer content */}
            <div className="bg-black px-4 py-3 border-t border-gray-800">
              <div className="text-slate-400 text-xs bg-black mb-3">
                <p>Transforming ideas into powerful digital solutions that drive innovation and growth.</p>
              </div>

              <div className="flex gap-3 text-white bg-black">
                <a href="#" className="hover:text-[oklch(0.55_0.18_255)] transition-colors bg-black">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="hover:text-[oklch(0.55_0.18_255)] transition-colors bg-black">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="hover:text-[oklch(0.55_0.18_255)] transition-colors bg-black">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.891 18.886c-.241.512-.73.833-1.278.833-.245 0-.494-.058-.724-.175l-3.855-1.955c-.227-.115-.397-.33-.47-.58l-1.179-4.143c-.079-.276-.04-.572.106-.819.146-.247.386-.417.662-.467l4.006-.723c.275-.05.558.022.779.197.221.175.358.432.378.712l.526 4.73c.024.213-.016.427-.113.617zM12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25z"/></svg>
                </a>
                <a href="#" className="hover:text-[oklch(0.55_0.18_255)] transition-colors bg-black">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm8.198 9.317c-.347 1.583-1.452 6.698-2.053 8.88-.253.92-.825 1.228-1.353 1.257-.812.042-1.426-.533-2.21-1.045-.83-.547-1.296-.887-2.097-1.42-.928-.607-.327-1.04.202-1.643.138-.157 2.537-2.32 2.583-2.518.006-.024.012-.118-.045-.168-.057-.05-.138-.033-.197-.02-.084.02-1.423.9-4.016 2.643-.38.26-.724.387-1.032.377-.34-.012-1-.192-1.487-.35-.6-.2-1.08-.305-1.037-.644.022-.173.172-.354.517-.545 2.033-1.117 3.395-1.855 4.083-2.213 1.94-1.017 2.34-1.192 2.603-1.198.058-.002.186.008.27.05.205.102.246.366.19.58z"/></svg>
                </a>
                <a href="#" className="hover:text-[oklch(0.55_0.18_255)] transition-colors bg-black">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018 0-3.878 3.132-7.018 7-7.018s7 3.14 7 7.018c0 3.878-3.132 7.018-7 7.018zm.566-11.899v2.925h3.89l-.567 3.719h-3.323v8.123h-3.88v-8.123H4.51V10.044h3.316V6.642c0-3.037 1.775-4.74 4.508-4.74 1.32 0 2.551.107 2.551.107v2.86h-1.492c-1.474 0-1.937.925-1.937 1.874v2.316h3.295z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}