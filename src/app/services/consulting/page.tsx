import Navigation from "@/components/Navigation"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function Consulting() {
  // Sample consulting services
  const consultingServices = [
    {
      id: 1,
      title: "Technology Strategy",
      description: "Develop a comprehensive technology roadmap aligned with your business goals and market trends.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Digital Transformation",
      description: "Transform your business processes and customer experiences through innovative digital solutions.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Cloud Migration",
      description: "Seamlessly migrate your infrastructure and applications to the cloud for improved scalability and cost efficiency.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Technology Assessment",
      description: "Evaluate your current technology stack and identify opportunities for optimization and innovation.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      id: 5,
      title: "IT Governance",
      description: "Establish robust IT governance frameworks to ensure compliance, security, and optimal resource allocation.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Process Optimization",
      description: "Streamline your business processes through technology enablement and automation.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
  ];

  // Sample case studies
  const caseStudies = [
    {
      id: 1,
      title: "Financial Services Digital Transformation",
      client: "Major Banking Institution",
      description: "Helped a leading bank modernize their legacy systems and implement a customer-centric digital strategy.",
      results: ["40% reduction in operational costs", "65% improvement in customer satisfaction", "Reduced time-to-market for new products by 70%"],
      image: "/bg1.jpg"
    },
    {
      id: 2,
      title: "Healthcare Technology Strategy",
      client: "Regional Healthcare Provider",
      description: "Developed a comprehensive technology roadmap to improve patient care and operational efficiency.",
      results: ["Implemented telemedicine platform serving 50,000+ patients", "Reduced administrative overhead by 35%", "Improved data security and compliance"],
      image: "/bg2.jpg"
    },
    {
      id: 3,
      title: "Retail Cloud Migration",
      client: "E-commerce Retailer",
      description: "Migrated on-premises infrastructure to cloud, enabling scalability during peak shopping seasons.",
      results: ["99.99% uptime during Black Friday sales", "50% reduction in infrastructure costs", "3x improvement in website load times"],
      image: "/bg3.jpg"
    },
  ];

  return (
    <div>
      {/* Header with navigation */}
      <div >   
        <Navigation />
      </div>

      {/* Main Content */}
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-[oklch(0.55_0.18_255)]/10 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-[oklch(0.55_0.18_255)]/10 px-3 py-1 text-sm font-medium text-[oklch(0.55_0.18_255)]">
                  Services
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Strategic Technology Consulting
                </h1>
                <p className="text-xl text-slate-700">
                  Expert guidance to navigate the complex technology landscape and drive business transformation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/contactUs" 
                    className="rounded-lg bg-[oklch(0.55_0.18_255)] px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-[oklch(0.5_0.18_255)] transition-colors"
                  >
                    Schedule a Consultation
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
                    alt="Consulting Services" 
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

        {/* Our Approach Section */}
        <section className="py-20 bg-white" id="approach">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Consulting Approach</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                We combine deep industry expertise with technical knowledge to deliver tailored solutions that drive measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Step 1 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Discovery & Assessment</h3>
                <p className="mt-2 text-slate-700">
                  We begin by understanding your business objectives, challenges, and current technology landscape through in-depth discovery sessions and assessments.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Strategy Development</h3>
                <p className="mt-2 text-slate-700">
                  Based on our findings, we develop a comprehensive strategy and roadmap tailored to your specific needs, priorities, and budget constraints.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Implementation & Optimization</h3>
                <p className="mt-2 text-slate-700">
                  We work alongside your team to implement the strategy, providing ongoing guidance, support, and optimization to ensure successful outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-[oklch(0.55_0.18_255)]/10 py-20" id="services">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Consulting Services</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive consulting services designed to address your most pressing technology challenges and opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {consultingServices.map((service) => (
                <div key={service.id} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-slate-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 bg-white" id="case-studies">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Case Studies</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Real-world examples of how our consulting services have helped organizations achieve their business objectives.
              </p>
            </div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div key={study.id} className={`grid grid-cols-1 gap-12 ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2 lg:flex-row-reverse'} lg:items-center`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <Image 
                      src={study.image} 
                      alt={study.title} 
                      width={600} 
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <div className="inline-block rounded-full bg-[oklch(0.55_0.18_255)]/10 px-3 py-1 text-sm font-medium text-[oklch(0.55_0.18_255)]">
                      {study.client}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{study.title}</h3>
                    <p className="text-lg text-slate-700">{study.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-900">Key Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="mr-2 h-5 w-5 flex-shrink-0 text-[oklch(0.55_0.18_255)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link 
                      href="#" 
                      className="inline-flex items-center text-[oklch(0.55_0.18_255)] hover:text-[oklch(0.5_0.18_255)]"
                    >
                      Read Full Case Study
                      <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-[oklch(0.55_0.18_255)]/10 py-20" id="team">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Consulting Team</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Meet our team of experienced consultants with deep industry and technical expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Team Member 1 */}
              <div className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 aspect-square w-full overflow-hidden rounded-xl">
                  <Image 
                    src="/bg1.jpg" 
                    alt="Sarah Johnson" 
                    width={300} 
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Sarah Johnson</h3>
                <p className="text-[oklch(0.55_0.18_255)]">Chief Strategy Officer</p>
                <p className="mt-2 text-slate-700">
                  With over 15 years of experience in technology strategy and digital transformation, Sarah has helped numerous Fortune 500 companies navigate complex technology challenges.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 aspect-square w-full overflow-hidden rounded-xl">
                  <Image 
                    src="/bg2.jpg" 
                    alt="Michael Chen" 
                    width={300} 
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Michael Chen</h3>
                <p className="text-[oklch(0.55_0.18_255)]">Technology Transformation Lead</p>
                <p className="mt-2 text-slate-700">
                  Michael specializes in cloud migration and infrastructure modernization, with a track record of successful large-scale transformation projects across multiple industries.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 aspect-square w-full overflow-hidden rounded-xl">
                  <Image 
                    src="/bg3.jpg" 
                    alt="Priya Patel" 
                    width={300} 
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Priya Patel</h3>
                <p className="text-[oklch(0.55_0.18_255)]">Digital Strategy Consultant</p>
                <p className="mt-2 text-slate-700">
                  Priya brings expertise in digital product strategy and customer experience design, helping organizations create innovative digital solutions that drive business growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-2xl bg-[oklch(0.55_0.18_255)] p-8 md:p-12 shadow-xl">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white">Ready to Transform Your Business?</h2>
                  <p className="mt-4 text-lg text-white/80">
                    Schedule a consultation with our team to discuss how our consulting services can help you achieve your business objectives.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end">
                  <Link 
                    href="/contactUs" 
                    className="rounded-lg bg-white px-6 py-3 text-lg font-medium text-[oklch(0.55_0.18_255)] shadow-sm hover:bg-slate-50 transition-colors"
                  >
                    Schedule a Consultation
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