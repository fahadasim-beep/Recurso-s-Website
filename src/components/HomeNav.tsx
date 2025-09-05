"use client"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu"

export default function HomeNav() {
  return (
    <div className="w-full bg-white/80 backdrop-blur-sm fixed top-0 z-50 border-b border-slate-200">
      <NavigationMenu className="max-w-screen-2xl mx-auto px-4 py-4 [&_[data-slot=navigation-menu-trigger]]:bg-transparent [&_[data-slot=navigation-menu-trigger]]:text-slate-800 [&_[data-slot=navigation-menu-trigger]]:hover:bg-slate-900/5 [&_[data-slot=navigation-menu-trigger]]:data-[state=open]:bg-slate-900/5 [&_[data-slot=navigation-menu-link]]:text-slate-800">
        <NavigationMenuList className="w-full justify-between items-center gap-8">
          <NavigationMenuItem className="mr-auto">
            <NavigationMenuLink href="/" className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#0066FF"/>
                <path d="M8 8H24V12H8V8Z" fill="white"/>
                <path d="M8 14H20V18H8V14Z" fill="white"/>
                <path d="M8 20H16V24H8V20Z" fill="white"/>
              </svg>
              <span className="font-semibold text-lg">Recurso</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white/80 backdrop-blur-sm text-slate-900 shadow-lg rounded-xl border border-slate-200">
            <div className="grid gap-2 p-2 md:w-[360px]">
              <NavigationMenuLink className="rounded p-2 hover:bg-slate-900/5" href="/home/overview">Overview</NavigationMenuLink>
              <NavigationMenuLink className="rounded p-2 hover:bg-slate-900/5" href="/home/news">News</NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Services */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white text-slate-900 shadow-lg">
            <div className="grid gap-2 p-2 md:w-[360px]">
              <NavigationMenuLink className="rounded p-2 hover:bg-slate-900/5" href="/services/consulting">Consulting</NavigationMenuLink>
              <NavigationMenuLink className="rounded p-2 hover:bg-slate-900/5" href="/services/development">Development</NavigationMenuLink>
              <NavigationMenuLink className="rounded p-2 hover:bg-slate-900/5" href="/services/staff-augmentation">Staff Augmentation</NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Products */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Life at Recurso</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white text-slate-900 shadow-lg">
            <div className="grid gap-2 p-2 md:w-[360px]">
              <NavigationMenuLink className="rounded p-2 hover:bg-slate-900/5" href="/life-at-recurso/culture">Culture</NavigationMenuLink>
              <NavigationMenuLink className="rounded p-2 hover:bg-slate-900/5" href="/life-at-recurso/careers">Careers</NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Our Work */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Our Work</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white text-slate-900 shadow-lg">
            <div className="grid gap-2 p-2 md:w-[360px]">
              <NavigationMenuLink className="rounded p-2 hover:bg-slate-900/5" href="/our-work/case-studies">Case Studies</NavigationMenuLink>
              <NavigationMenuLink className="rounded p-2 hover:bg-slate-900/5" href="/our-work/open-source">Open Source</NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* Contact Us */}
        <NavigationMenuItem>
        <NavigationMenuLink
          href="/contactUs"
          className="rounded-full px-6 py-2.5 bg-blue-600 !text-white hover:bg-blue-700 shadow-md transition-colors"
        >
          Contact Us
        </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  )
}

