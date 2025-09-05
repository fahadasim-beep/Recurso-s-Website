import HomeNav from "@/components/HomeNav"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function CaseStudies() {
  // Sample case studies data
  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      client: "Global Retail Inc.",
      industry: "Retail",
      image: "/bg1.jpg",
      challenge: "Global Retail Inc. was struggling with an outdated e-commerce platform that had poor mobile responsiveness, slow loading times, and a complicated checkout process, resulting in high cart abandonment rates and declining sales.",
      solution: "We redesigned their e-commerce platform from the ground up, implementing a responsive design, optimizing performance, simplifying the checkout process, and integrating advanced analytics to track user behavior.",
      results: [
        "53% increase in mobile conversions",
        "32% reduction in cart abandonment",
        "2.5x improvement in page load speed",
        "41% increase in overall revenue within 6 months"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe API"]
    },
    {
      id: 2,
      title: "Healthcare Patient Portal",
      client: "MediCare Solutions",
      industry: "Healthcare",
      image: "/bg2.jpg",
      challenge: "MediCare Solutions needed a secure, HIPAA-compliant patient portal that would allow patients to schedule appointments, access medical records, communicate with healthcare providers, and manage payments in one integrated platform.",
      solution: "We developed a comprehensive patient portal with end-to-end encryption, two-factor authentication, real-time messaging, appointment scheduling, document sharing, and payment processing capabilities.",
      results: [
        "87% patient adoption rate within 3 months",
        "68% reduction in administrative phone calls",
        "42% improvement in appointment attendance",
        "91% patient satisfaction rating"
      ],
      technologies: ["Angular", "Java Spring Boot", "PostgreSQL", "Azure", "Twilio API"]
    },
    {
      id: 3,
      title: "Financial Analytics Dashboard",
      client: "InvestSmart Financial",
      industry: "Finance",
      image: "/bg3.jpg",
      challenge: "InvestSmart Financial needed a sophisticated analytics dashboard that could process large volumes of financial data in real-time, visualize complex trends, and provide actionable insights for their investment advisors and clients.",
      solution: "We built a high-performance analytics platform with real-time data processing, interactive visualizations, customizable dashboards, automated reporting, and predictive analytics capabilities.",
      results: [
        "85% reduction in report generation time",
        "37% increase in client engagement",
        "28% improvement in investment decision speed",
        "$4.2M additional revenue attributed to platform insights"
      ],
      technologies: ["Vue.js", "Python", "TensorFlow", "PostgreSQL", "Google Cloud Platform"]
    },
    {
      id: 4,
      title: "Supply Chain Management System",
      client: "LogiTech Industries",
      industry: "Manufacturing & Logistics",
      image: "/bg1.jpg",
      challenge: "LogiTech Industries was struggling with supply chain inefficiencies, inventory management issues, and lack of visibility across their global operations, leading to increased costs and delivery delays.",
      solution: "We implemented an integrated supply chain management system with real-time tracking, predictive inventory management, supplier collaboration tools, and advanced analytics for optimization.",
      results: [
        "42% reduction in inventory holding costs",
        "27% improvement in on-time deliveries",
        "18% decrease in procurement costs",
        "63% better forecast accuracy"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "IoT Sensors", "Blockchain"]
    },
    {
      id: 5,
      title: "Mobile Banking Application",
      client: "First Digital Bank",
      industry: "Banking",
      image: "/bg2.jpg",
      challenge: "First Digital Bank needed to modernize their customer experience with a secure, feature-rich mobile banking application that would allow customers to perform all banking operations remotely while maintaining the highest security standards.",
      solution: "We developed a comprehensive mobile banking application with biometric authentication, real-time transaction processing, budgeting tools, investment management, and personalized financial insights.",
      results: [
        "76% increase in mobile banking adoption",
        "42% reduction in branch visits",
        "31% increase in customer satisfaction scores",
        "24% growth in new account openings"
      ],
      technologies: ["React Native", "Java", "Kotlin", "Oracle", "AWS", "Plaid API"]
    },
    {
      id: 6,
      title: "Smart City IoT Platform",
      client: "Metropolis Urban Development",
      industry: "Government & Infrastructure",
      image: "/bg3.jpg",
      challenge: "Metropolis Urban Development needed an integrated IoT platform to manage city infrastructure, including traffic systems, public lighting, waste management, and environmental monitoring to improve efficiency and sustainability.",
      solution: "We built a comprehensive IoT platform that collects and analyzes data from thousands of sensors across the city, providing real-time monitoring, predictive maintenance, automated responses to events, and a central dashboard for city managers.",
      results: [
        "35% reduction in energy consumption for public lighting",
        "28% improvement in traffic flow",
        "42% decrease in waste management costs",
        "67% faster response time to infrastructure issues"
      ],
      technologies: ["React", "Python", "TensorFlow", "MongoDB", "AWS IoT", "MQTT"]
    },
  ];

  return (
    <div>
      {/* Header with navigation */}
      <header className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-20 items-center justify-between text-slate-800">
            <Link href="/" className="flex items-center gap-2" aria-label="Recurso Labs home">
              <Image src="/logo.png" alt="Recurso Labs" width={160} height={40} priority className="h-10 w-auto object-contain" />
            </Link>
            <HomeNav />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-slate-50 to-white py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-[oklch(0.55_0.18_255)]/10 px-3 py-1 text-sm font-medium text-[oklch(0.55_0.18_255)]">
                  Our Work
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Case Studies
                </h1>
                <p className="text-xl text-slate-700">
                  Explore our portfolio of successful projects and discover how we've helped businesses across industries solve complex challenges and achieve their goals.
                </p>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src="/bg1.jpg" 
                    alt="Recurso Labs Projects" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Filter Section */}
        <section className="py-12">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-slate-900">Our Success Stories</h2>
                <p className="text-slate-600">Filter by industry or technology to find relevant case studies</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="rounded-full bg-[oklch(0.55_0.18_255)] px-4 py-2 text-sm font-medium text-white">
                  All Industries
                </button>
                <button className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200">
                  Retail
                </button>
                <button className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200">
                  Healthcare
                </button>
                <button className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200">
                  Finance
                </button>
                <button className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200">
                  Manufacturing
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-12">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <div key={study.id} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={study.image} 
                      alt={study.title} 
                      width={400} 
                      height={200}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="absolute bottom-0 p-4">
                        <div className="mb-2 inline-block rounded-full bg-[oklch(0.55_0.18_255)]/90 px-2 py-1 text-xs font-medium text-white">
                          {study.industry}
                        </div>
                        <h3 className="text-xl font-bold text-white">{study.title}</h3>
                        <p className="text-sm text-white/80">{study.client}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold uppercase text-slate-500">Challenge</h4>
                      <p className="mt-1 text-slate-700 line-clamp-2">{study.challenge}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold uppercase text-slate-500">Solution</h4>
                      <p className="mt-1 text-slate-700 line-clamp-2">{study.solution}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold uppercase text-slate-500">Key Results</h4>
                      <ul className="mt-1 list-inside list-disc space-y-1 text-slate-700">
                        {study.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="text-sm">{result}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800">
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 3 && (
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800">
                          +{study.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <Link 
                        href={`#case-study-${study.id}`} 
                        className="inline-flex items-center text-[oklch(0.55_0.18_255)] hover:text-[oklch(0.5_0.18_255)] transition-colors"
                      >
                        View Full Case Study
                        <svg className="ml-2 size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Study Section */}
        <section className="bg-slate-50 py-20" id="case-study-1">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <div className="inline-block rounded-full bg-[oklch(0.55_0.18_255)]/10 px-3 py-1 text-sm font-medium text-[oklch(0.55_0.18_255)]">
                Featured Case Study
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                E-Commerce Platform Redesign
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                How we helped Global Retail Inc. transform their online shopping experience and achieve significant growth in sales and customer satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <Image 
                    src="/bg1.jpg" 
                    alt="E-Commerce Platform Redesign" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <Image 
                      src="/bg2.jpg" 
                      alt="E-Commerce Mobile View" 
                      width={300} 
                      height={200}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <Image 
                      src="/bg3.jpg" 
                      alt="E-Commerce Dashboard" 
                      width={300} 
                      height={200}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Client</h3>
                  <p className="mt-2 text-slate-700">Global Retail Inc. - A multinational retail company with over 500 physical stores and a growing online presence.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Challenge</h3>
                  <p className="mt-2 text-slate-700">
                    Global Retail Inc. was struggling with an outdated e-commerce platform that had poor mobile responsiveness, slow loading times, and a complicated checkout process, resulting in high cart abandonment rates and declining sales. Their legacy system also made it difficult to implement new features and integrate with modern marketing tools.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Solution</h3>
                  <p className="mt-2 text-slate-700">
                    We redesigned their e-commerce platform from the ground up, implementing a responsive design, optimizing performance, simplifying the checkout process, and integrating advanced analytics to track user behavior. Key components of our solution included:
                  </p>
                  <ul className="mt-4 list-inside list-disc space-y-2 text-slate-700">
                    <li>Responsive, mobile-first design with intuitive navigation</li>
                    <li>Performance optimization reducing page load times by 60%</li>
                    <li>Streamlined one-page checkout with multiple payment options</li>
                    <li>Personalized product recommendations using AI</li>
                    <li>Advanced search functionality with filters and sorting</li>
                    <li>Integration with inventory management and CRM systems</li>
                    <li>Comprehensive analytics dashboard for business insights</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Results</h3>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-white p-4 shadow-sm">
                      <div className="text-3xl font-bold text-[oklch(0.55_0.18_255)]">53%</div>
                      <p className="text-slate-700">Increase in mobile conversions</p>
                    </div>
                    <div className="rounded-xl bg-white p-4 shadow-sm">
                      <div className="text-3xl font-bold text-[oklch(0.55_0.18_255)]">32%</div>
                      <p className="text-slate-700">Reduction in cart abandonment</p>
                    </div>
                    <div className="rounded-xl bg-white p-4 shadow-sm">
                      <div className="text-3xl font-bold text-[oklch(0.55_0.18_255)]">2.5x</div>
                      <p className="text-slate-700">Improvement in page load speed</p>
                    </div>
                    <div className="rounded-xl bg-white p-4 shadow-sm">
                      <div className="text-3xl font-bold text-[oklch(0.55_0.18_255)]">41%</div>
                      <p className="text-slate-700">Increase in overall revenue</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Technologies Used</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800">
                      React
                    </span>
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800">
                      Node.js
                    </span>
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800">
                      MongoDB
                    </span>
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800">
                      AWS
                    </span>
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800">
                      Stripe API
                    </span>
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800">
                      Redux
                    </span>
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-800">
                      Elasticsearch
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <Link 
                    href="/contactUs" 
                    className="inline-flex items-center rounded-lg bg-[oklch(0.55_0.18_255)] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[oklch(0.5_0.18_255)] transition-colors"
                  >
                    Discuss Your Project
                    <svg className="ml-2 size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-2xl bg-[oklch(0.55_0.18_255)]/5 p-8 md:p-12">
              <div className="mb-6 text-[oklch(0.55_0.18_255)]">
                <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <blockquote className="text-xl font-medium text-slate-900 md:text-2xl">
                "The team at Recurso Labs transformed our e-commerce platform beyond our expectations. Their technical expertise, attention to detail, and commitment to our success resulted in a solution that not only looks great but has significantly improved our business metrics. They were true partners throughout the entire process."
              </blockquote>
              <div className="mt-8 flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image 
                    src="/bg2.jpg" 
                    alt="Sarah Johnson" 
                    width={48} 
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Sarah Johnson</p>
                  <p className="text-sm text-slate-600">CTO, Global Retail Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to transform your business?</h2>
            <p className="mt-4 text-xl text-slate-300">
              Let's discuss how we can help you solve your most challenging problems and achieve your business goals.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link 
                href="/contactUs" 
                className="rounded-lg bg-white px-6 py-3 text-lg font-medium text-slate-900 shadow-sm hover:bg-slate-100 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                href="/services/consulting" 
                className="rounded-lg bg-transparent px-6 py-3 text-lg font-medium text-white shadow-sm border border-white hover:bg-white/10 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}