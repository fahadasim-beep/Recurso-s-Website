import Navigation from "@/components/Navigation"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function Overview() {
  return (
    <div>
      <Navigation />

      {/* Main Content */}
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-[oklch(0.55_0.18_255)]/10 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Transforming Ideas into Digital Reality
                </h1>
                <p className="text-xl text-slate-700">
                  Recurso Labs is a premier technology partner helping businesses innovate and grow through cutting-edge software solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/contactUs" 
                    className="rounded-lg bg-[oklch(0.55_0.18_255)] px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-[oklch(0.5_0.18_255)] transition-colors"
                  >
                    Get Started
                  </Link>
                  <Link 
                    href="#services" 
                    className="rounded-lg bg-white px-6 py-3 text-lg font-medium text-slate-900 shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src="/bg2.jpg" 
                    alt="Recurso Labs Team" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 size-24 rounded-xl bg-[oklch(0.55_0.18_255)] p-4 shadow-lg">
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-2xl font-bold text-white">10+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Why Choose Recurso Labs</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Proven Expertise</h3>
                <p className="mt-2 text-slate-700">
                  With over a decade of experience, our team has successfully delivered hundreds of projects across various industries.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Rapid Delivery</h3>
                <p className="mt-2 text-slate-700">
                  Our agile methodology ensures quick turnaround times without compromising on quality or performance.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Dedicated Teams</h3>
                <p className="mt-2 text-slate-700">
                  We assign specialized teams tailored to your project's specific requirements, ensuring optimal results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-[oklch(0.55_0.18_255)]/10 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-[oklch(0.55_0.18_255)]">200+</div>
                <div className="mt-2 text-slate-700">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[oklch(0.55_0.18_255)]">50+</div>
                <div className="mt-2 text-slate-700">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[oklch(0.55_0.18_255)]">10+</div>
                <div className="mt-2 text-slate-700">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[oklch(0.55_0.18_255)]">95%</div>
                <div className="mt-2 text-slate-700">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-2xl bg-[oklch(0.55_0.18_255)] p-8 md:p-12 shadow-xl">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white">Ready to Transform Your Business?</h2>
                  <p className="mt-4 text-lg text-white/80">
                    Let's discuss how Recurso Labs can help you achieve your digital transformation goals.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end">
                  <Link 
                    href="/contactUs" 
                    className="rounded-lg bg-white px-6 py-3 text-lg font-medium text-[oklch(0.55_0.18_255)] shadow-sm hover:bg-slate-50 transition-colors"
                  >
                    Contact Us Today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}