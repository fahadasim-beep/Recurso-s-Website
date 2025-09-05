"use client"

import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="h-14 px-6 flex items-center">
        <Link href="/" className="flex items-center gap-2" aria-label="Recurso Labs home">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="#0066FF"/>
            <path d="M8 8H24V12H8V8Z" fill="white"/>
            <path d="M8 14H20V18H8V14Z" fill="white"/>
            <path d="M8 20H16V24H8V20Z" fill="white"/>
          </svg>
          <span className="font-semibold text-lg">Recurso</span>
        </Link>
        <div className="ml-auto flex items-center gap-6">
          <Link href="/" className="text-slate-600 hover:text-slate-900">Home</Link>
          <Link href="/services" className="text-slate-600 hover:text-slate-900">Services</Link>
          <Link href="/life-at-recurso" className="text-slate-600 hover:text-slate-900">Life at Recurso</Link>
          <Link href="/our-work" className="text-slate-600 hover:text-slate-900">Our Work</Link>
          <Link href="/about" className="text-slate-600 hover:text-slate-900">About</Link>
          <Link href="/blog" className="text-slate-600 hover:text-slate-900">Blog</Link>
          <Link href="/careers" className="text-slate-600 hover:text-slate-900">Careers</Link>
          <Link 
            href="/contactUs" 
            className="rounded-full px-4 py-1.5 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  )
}