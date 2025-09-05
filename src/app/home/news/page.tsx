import Navigation from "@/components/Navigation"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function News() {
  // Sample news data
  const newsItems = [
    {
      id: 1,
      title: "Recurso Labs Expands Operations to Europe",
      date: "June 15, 2023",
      excerpt: "We're excited to announce our expansion into the European market with a new office in Berlin, Germany.",
      image: "/bg2.jpg",
      category: "Company News"
    },
    {
      id: 2,
      title: "New Partnership with Leading Cloud Provider",
      date: "May 28, 2023",
      excerpt: "Recurso Labs has formed a strategic partnership with a leading cloud provider to enhance our service offerings.",
      image: "/bg1.jpg",
      category: "Partnerships"
    },
    {
      id: 3,
      title: "Recurso Labs Recognized as Top Tech Employer",
      date: "April 10, 2023",
      excerpt: "We're proud to be recognized as one of the top tech employers in the industry, highlighting our commitment to our team.",
      image: "/bg3.jpg",
      category: "Awards"
    },
    {
      id: 4,
      title: "Introducing Our New Data Analytics Service",
      date: "March 22, 2023",
      excerpt: "We're launching a comprehensive data analytics service to help businesses make data-driven decisions.",
      image: "/bg2.jpg",
      category: "Services"
    },
    {
      id: 5,
      title: "Recurso Labs Hosts Annual Developer Conference",
      date: "February 15, 2023",
      excerpt: "Our annual developer conference was a huge success, bringing together tech professionals from around the world.",
      image: "/bg1.jpg",
      category: "Events"
    },
    {
      id: 6,
      title: "New Client Success Story: FinTech Transformation",
      date: "January 30, 2023",
      excerpt: "Read about how we helped a leading FinTech company transform their digital infrastructure and improve performance.",
      image: "/bg3.jpg",
      category: "Case Studies"
    },
  ];

  return (
    <div>
      {/* Header with navigation */}
      <div className="mx-auto max-w-6xl px-4">
            <Navigation />
          </div>
        

      {/* Main Content */}
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-[oklch(0.55_0.18_255)]/10 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Latest News & Updates
              </h1>
              <p className="mt-4 text-xl text-slate-700 max-w-3xl mx-auto">
                Stay up to date with the latest happenings at Recurso Labs, from company announcements to industry insights.
              </p>
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image 
                  src="/bg1.jpg" 
                  alt="Recurso Labs Announces Series A Funding" 
                  width={800} 
                  height={500}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="mb-2 inline-block rounded-full bg-[oklch(0.55_0.18_255)] px-3 py-1 text-sm font-medium">
                    Featured
                  </div>
                  <h2 className="text-2xl font-bold sm:text-3xl">Recurso Labs Announces Series A Funding</h2>
                  <p className="mt-2 text-white/80">July 10, 2023</p>
                  <p className="mt-4 max-w-lg text-white/90">
                    We're thrilled to announce that Recurso Labs has secured $15 million in Series A funding to accelerate our growth and expand our service offerings.
                  </p>
                  <Link 
                    href="#" 
                    className="mt-6 inline-flex items-center text-white hover:text-[oklch(0.55_0.18_255)]"
                  >
                    Read Full Story
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">Recent Updates</h2>
                <div className="space-y-6">
                  {newsItems.slice(0, 3).map((item) => (
                    <div key={item.id} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                        <Image 
                          src={item.image} 
                          alt={item.title} 
                          width={100} 
                          height={100}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-1 text-sm font-medium text-[oklch(0.55_0.18_255)]">{item.category}</div>
                        <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                        <p className="mt-1 text-sm text-slate-500">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="bg-[oklch(0.55_0.18_255)]/10 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-8 text-2xl font-bold text-slate-900">All News</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {newsItems.map((item) => (
                <div key={item.id} className="overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      width={400} 
                      height={200}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 rounded-full bg-[oklch(0.55_0.18_255)] px-3 py-1 text-xs font-medium text-white">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-slate-500">{item.date}</p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-slate-700">{item.excerpt}</p>
                    <Link 
                      href="#" 
                      className="mt-4 inline-flex items-center text-[oklch(0.55_0.18_255)] hover:text-[oklch(0.5_0.18_255)]"
                    >
                      Read More
                      <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <button className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-lg font-medium text-slate-900 shadow-sm hover:bg-slate-50 transition-colors">
                Load More News
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-2xl bg-[oklch(0.55_0.18_255)] p-8 md:p-12 shadow-xl">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white">Subscribe to Our Newsletter</h2>
                  <p className="mt-4 text-lg text-white/80">
                    Stay updated with the latest news, insights, and announcements from Recurso Labs.
                  </p>
                </div>
                <div>
                  <form className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full rounded-lg border-0 px-4 py-3 text-slate-900 focus:ring-2 focus:ring-white/20"
                      required
                    />
                    <button 
                      type="submit" 
                      className="rounded-lg bg-white px-6 py-3 text-lg font-medium text-[oklch(0.55_0.18_255)] shadow-sm hover:bg-slate-50 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="mt-3 text-sm text-white/70">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
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