import Navigation from "@/components/Navigation"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function StaffAugmentation() {
  // Sample staff augmentation roles
  const roles = [
    {
      id: 1,
      title: "Software Engineers",
      description: "Experienced developers proficient in various programming languages and frameworks to strengthen your development team.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 2,
      title: "UI/UX Designers",
      description: "Creative designers who craft intuitive, engaging user experiences and visually appealing interfaces.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "DevOps Engineers",
      description: "Specialists in automation, CI/CD pipelines, and infrastructure management to streamline your development processes.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Project Managers",
      description: "Seasoned project managers who ensure efficient delivery, clear communication, and alignment with business objectives.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Data Scientists",
      description: "Experts in data analysis, machine learning, and AI to help you extract valuable insights from your data.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "QA Engineers",
      description: "Quality assurance professionals who ensure your products meet the highest standards through manual and automated testing.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ];

  // Sample benefits
  const benefits = [
    {
      id: 1,
      title: "Flexibility & Scalability",
      description: "Quickly scale your team up or down based on project demands and business needs.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Cost Efficiency",
      description: "Reduce overhead costs associated with full-time hiring, onboarding, and training.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Access to Specialized Skills",
      description: "Tap into a pool of experts with specialized skills that may be difficult to find or hire full-time.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Reduced Time-to-Market",
      description: "Accelerate project timelines by quickly adding skilled resources to your team.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Knowledge Transfer",
      description: "Our experts share best practices and knowledge with your internal team, enhancing their skills and capabilities.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Focus on Core Business",
      description: "Allow your internal team to focus on strategic initiatives while our experts handle specific technical needs.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
  ];

  // Sample testimonials
  const testimonials = [
    {
      id: 1,
      quote: "The developers from Recurso Labs seamlessly integrated with our team and made an immediate impact on our project. Their technical expertise and professionalism exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CTO, FinTech Innovations",
      image: "/bg1.jpg"
    },
    {
      id: 2,
      quote: "We needed to scale our development team quickly for a critical project. Recurso Labs provided top-tier talent that hit the ground running and helped us meet our tight deadlines.",
      author: "Michael Chen",
      position: "VP of Engineering, E-commerce Platform",
      image: "/bg2.jpg"
    },
    {
      id: 3,
      quote: "The UX designers from Recurso Labs transformed our product's user experience. Their creative approach and attention to detail resulted in a significant improvement in user engagement and satisfaction.",
      author: "Emily Rodriguez",
      position: "Product Manager, SaaS Company",
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
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-[oklch(0.55_0.18_255)]/10 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-[oklch(0.55_0.18_255)]/10 px-3 py-1 text-sm font-medium text-[oklch(0.55_0.18_255)]">
                  Services
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Staff Augmentation
                </h1>
                <p className="text-xl text-slate-700">
                  Enhance your team with skilled professionals who seamlessly integrate with your organization and deliver immediate value.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/contactUs" 
                    className="rounded-lg bg-[oklch(0.55_0.18_255)] px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-[oklch(0.5_0.18_255)] transition-colors"
                  >
                    Request Talent
                  </Link>
                  <Link 
                    href="#roles" 
                    className="rounded-lg bg-white px-6 py-3 text-lg font-medium text-slate-900 shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    Explore Roles
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src="/bg1.jpg" 
                    alt="Staff Augmentation" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 size-24 rounded-xl bg-[oklch(0.55_0.18_255)] p-4 shadow-lg">
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-2xl font-bold text-white">50+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white" id="how-it-works">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">How Our Staff Augmentation Works</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                A streamlined process designed to quickly provide you with the right talent for your specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {/* Step 1 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Requirements Analysis</h3>
                <p className="mt-2 text-slate-700">
                  We work with you to understand your specific needs, technical requirements, and team dynamics.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Talent Matching</h3>
                <p className="mt-2 text-slate-700">
                  We identify and present candidates with the right skills, experience, and cultural fit for your organization.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Seamless Integration</h3>
                <p className="mt-2 text-slate-700">
                  Our professionals quickly integrate with your team, adopting your processes, tools, and communication methods.
                </p>
              </div>

              {/* Step 4 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Ongoing Support</h3>
                <p className="mt-2 text-slate-700">
                  We provide continuous support and management to ensure our professionals meet your expectations and deliver results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Available Roles Section */}
        <section className="bg-[oklch(0.55_0.18_255)]/10 py-20" id="roles">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Available Roles</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                We offer a wide range of technical professionals to augment your team and accelerate your projects.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {roles.map((role) => (
                <div key={role.id} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                    {role.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{role.title}</h3>
                  <p className="mt-2 text-slate-700">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white" id="benefits">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Benefits of Staff Augmentation</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Discover how our staff augmentation services can provide strategic advantages for your business.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{benefit.title}</h3>
                  <p className="mt-2 text-slate-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-[oklch(0.55_0.18_255)]/10 py-20" id="testimonials">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Client Testimonials</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Hear from organizations that have benefited from our staff augmentation services.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-6 text-[oklch(0.55_0.18_255)]">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="mb-4 text-slate-700">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        width={48} 
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{testimonial.author}</h4>
                      <p className="text-sm text-slate-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white" id="faq">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Find answers to common questions about our staff augmentation services.
              </p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {/* FAQ Item 1 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">How quickly can you provide resources?</h3>
                <p className="mt-2 text-slate-700">
                  We typically can provide qualified candidates within 1-2 weeks, depending on the specificity of your requirements and the availability of talent with the required skills.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">What if the resource isn't a good fit?</h3>
                <p className="mt-2 text-slate-700">
                  We offer a replacement guarantee. If a resource isn't meeting your expectations, we'll work with you to find a suitable replacement as quickly as possible.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">How do you ensure quality of your resources?</h3>
                <p className="mt-2 text-slate-700">
                  All our professionals undergo a rigorous screening process that includes technical assessments, behavioral interviews, and reference checks to ensure they meet our high standards.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">What engagement models do you offer?</h3>
                <p className="mt-2 text-slate-700">
                  We offer flexible engagement models including hourly, part-time, full-time, and project-based arrangements to suit your specific needs and budget constraints.
                </p>
              </div>

              {/* FAQ Item 5 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">How do you handle intellectual property rights?</h3>
                <p className="mt-2 text-slate-700">
                  All intellectual property created by our professionals during their engagement with your organization belongs to you. We ensure this is clearly outlined in our contracts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-2xl bg-[oklch(0.55_0.18_255)] p-8 md:p-12 shadow-xl">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white">Ready to Enhance Your Team?</h2>
                  <p className="mt-4 text-lg text-white/80">
                    Let's discuss your staffing needs and how our professionals can help you achieve your business objectives.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end">
                  <Link 
                    href="/contactUs" 
                    className="rounded-lg bg-white px-6 py-3 text-lg font-medium text-[oklch(0.55_0.18_255)] shadow-sm hover:bg-slate-50 transition-colors"
                  >
                    Request Talent
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