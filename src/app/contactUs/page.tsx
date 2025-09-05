import Navigation from "@/components/Navigation"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-slate-900 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,oklch(0.98_0.02_90/_0.1),transparent)]" />
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Let's Build Something Amazing Together
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Have a project in mind? We'd love to discuss how we can help bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Content */}
      <main className="flex-1 relative bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Left Column - Contact Form */}
            <div className="flex">
              <div className="w-full rounded-2xl border border-slate-200 bg-[oklch(0.55_0.18_255)]/10 p-8 shadow-lg flex flex-col justify-between">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
                </div>
                <form className="space-y-6 flex-1 flex flex-col">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-slate-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 shadow-sm focus:border-[oklch(0.55_0.18_255)] focus:ring-1 focus:ring-[oklch(0.55_0.18_255)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-slate-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 shadow-sm focus:border-[oklch(0.55_0.18_255)] focus:ring-1 focus:ring-[oklch(0.55_0.18_255)]"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 shadow-sm focus:border-[oklch(0.55_0.18_255)] focus:ring-1 focus:ring-[oklch(0.55_0.18_255)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 shadow-sm focus:border-[oklch(0.55_0.18_255)] focus:ring-1 focus:ring-[oklch(0.55_0.18_255)]"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full h-full rounded-lg border border-slate-300 px-3 py-2 shadow-sm focus:border-[oklch(0.55_0.18_255)] focus:ring-1 focus:ring-[oklch(0.55_0.18_255)]"
                    />
                  </div>
                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-[oklch(0.55_0.18_255)] px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-[oklch(0.5_0.18_255)] focus:ring-2 focus:ring-[oklch(0.55_0.18_255)] focus:ring-offset-2"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column - Info + Socials */}
            <div className="flex">
              <div className="w-full rounded-2xl border border-slate-200 bg-[oklch(0.55_0.18_255)]/10 p-8 shadow-lg flex flex-col justify-between">
                <div className="space-y-6">
                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[oklch(0.55_0.18_255)] flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-slate-800">Building 7, Block B, OPF, Lahore, Pakistan</p>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[oklch(0.55_0.18_255)] flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <p className="text-slate-800">+923008197977</p>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[oklch(0.55_0.18_255)] flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-slate-800">info@recursolabs.com</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Connect With Us</h3>
                  <div className="flex gap-3">
                    {/* Facebook */}
                    <a
                      href="#"
                      className="w-12 h-12 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 flex items-center justify-center"
                    >
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    {/* Twitter */}
                    <a
                      href="#"
                      className="w-12 h-12 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 flex items-center justify-center"
                    >
                      <svg className="w-6 h-6 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    {/* Instagram */}
                    <a
                      href="#"
                      className="w-12 h-12 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 flex items-center justify-center"
                    >
                      <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072..." />
                      </svg>
                    </a>
                    {/* LinkedIn */}
                    <a
                      href="#"
                      className="w-12 h-12 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 flex items-center justify-center"
                    >
                      <svg className="w-6 h-6 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328..." />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
