import Navigation from "@/components/Navigation"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function Development() {
  // Sample development services
  const developmentServices = [
    {
      id: 1,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to address your specific business challenges and requirements.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Web Application Development",
      description: "Responsive, scalable web applications built with modern frameworks and best practices.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "API Development & Integration",
      description: "Robust APIs that connect your systems and enable seamless data exchange between applications.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Cloud-Native Development",
      description: "Applications built specifically for cloud environments, leveraging microservices, containers, and serverless architectures.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "DevOps & CI/CD Implementation",
      description: "Streamlined development workflows with automated testing, deployment, and monitoring.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
  ];

  // Sample technologies
  const technologies = [
    { id: 1, name: "React", icon: "/tech/react.svg" },
    { id: 2, name: "Angular", icon: "/tech/angular.svg" },
    { id: 3, name: "Vue.js", icon: "/tech/vue.svg" },
    { id: 4, name: "Node.js", icon: "/tech/node.svg" },
    { id: 5, name: "Python", icon: "/tech/python.svg" },
    { id: 6, name: "Java", icon: "/tech/java.svg" },
    { id: 7, name: "AWS", icon: "/tech/aws.svg" },
    { id: 8, name: "Azure", icon: "/tech/azure.svg" },
    { id: 9, name: "Google Cloud", icon: "/tech/gcp.svg" },
    { id: 10, name: "Kubernetes", icon: "/tech/kubernetes.svg" },
    { id: 11, name: "Docker", icon: "/tech/docker.svg" },
    { id: 12, name: "MongoDB", icon: "/tech/mongodb.svg" },
  ];

  // Sample projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      client: "Retail Giant",
      description: "Developed a scalable e-commerce platform handling millions of transactions monthly with advanced search, personalization, and inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      image: "/bg1.jpg"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      client: "Medical Services Provider",
      description: "Built a comprehensive healthcare management system with patient records, appointment scheduling, and billing integration.",
      technologies: ["Angular", "Java", "PostgreSQL", "Azure"],
      image: "/bg2.jpg"
    },
    {
      id: 3,
      title: "Financial Services Mobile App",
      client: "Investment Firm",
      description: "Created a secure mobile application for investment management, portfolio tracking, and real-time market data.",
      technologies: ["React Native", "Node.js", "GraphQL", "AWS"],
      image: "/bg3.jpg"
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
            <Navigation />
          </div>
        </div>
      </header>

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
                  Custom Software Development
                </h1>
                <p className="text-xl text-slate-700">
                  Building innovative, scalable, and secure software solutions tailored to your business needs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/contactUs" 
                    className="rounded-lg bg-[oklch(0.55_0.18_255)] px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-[oklch(0.5_0.18_255)] transition-colors"
                  >
                    Start Your Project
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
                    src="/bg3.jpg" 
                    alt="Software Development" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 size-24 rounded-xl bg-[oklch(0.55_0.18_255)] p-4 shadow-lg">
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-2xl font-bold text-white">500+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process Section */}
        <section className="py-20 bg-white" id="process">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Development Process</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                A structured, collaborative approach that ensures quality, transparency, and successful outcomes.
              </p>
            </div>

            <div className="relative">
              {/* Process Timeline */}
              <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-slate-200 md:block hidden"></div>
              
              <div className="space-y-12 md:space-y-0">
                {/* Step 1 */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 relative">
                  <div className="md:text-right space-y-4">
                    <div className="inline-flex size-12 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)] text-white md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">Discovery & Planning</h3>
                    <p className="text-slate-700">
                      We begin by understanding your business objectives, user needs, and technical requirements through collaborative workshops and research.
                    </p>
                  </div>
                  <div className="md:block hidden"></div>
                </div>

                {/* Step 2 */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 relative">
                  <div className="md:block hidden"></div>
                  <div className="space-y-4">
                    <div className="inline-flex size-12 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)] text-white md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">Design & Architecture</h3>
                    <p className="text-slate-700">
                      Our team creates detailed designs and technical architecture that serve as the blueprint for development, ensuring scalability and maintainability.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 relative">
                  <div className="md:text-right space-y-4">
                    <div className="inline-flex size-12 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)] text-white md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">Agile Development</h3>
                    <p className="text-slate-700">
                      Using agile methodologies, we develop your solution in iterative sprints, providing regular demos and incorporating feedback throughout the process.
                    </p>
                  </div>
                  <div className="md:block hidden"></div>
                </div>

                {/* Step 4 */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 relative">
                  <div className="md:block hidden"></div>
                  <div className="space-y-4">
                    <div className="inline-flex size-12 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)] text-white md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0">
                      <span className="text-xl font-bold">4</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">Quality Assurance</h3>
                    <p className="text-slate-700">
                      Rigorous testing at every stage ensures your solution meets the highest standards of quality, security, and performance.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 relative">
                  <div className="md:text-right space-y-4">
                    <div className="inline-flex size-12 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)] text-white md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0">
                      <span className="text-xl font-bold">5</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">Deployment & Launch</h3>
                    <p className="text-slate-700">
                      We handle the deployment process, ensuring a smooth transition to production and minimizing any disruption to your business.
                    </p>
                  </div>
                  <div className="md:block hidden"></div>
                </div>

                {/* Step 6 */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 relative">
                  <div className="md:block hidden"></div>
                  <div className="space-y-4">
                    <div className="inline-flex size-12 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)] text-white md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0">
                      <span className="text-xl font-bold">6</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">Ongoing Support & Evolution</h3>
                    <p className="text-slate-700">
                      Our relationship continues after launch with ongoing maintenance, support, and continuous improvement to ensure your solution evolves with your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-[oklch(0.55_0.18_255)]/10 py-20" id="services">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Development Services</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive development services tailored to your specific needs and objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {developmentServices.map((service) => (
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

        {/* Technologies Section */}
        <section className="py-20 bg-white" id="technologies">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Technology Stack</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                We leverage the latest technologies and frameworks to build robust, scalable, and future-proof solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {technologies.map((tech) => (
                <div key={tech.id} className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-4 h-12 w-12">
                    <svg className="h-full w-full text-[oklch(0.55_0.18_255)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <span className="text-center font-medium text-slate-900">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="bg-[oklch(0.55_0.18_255)]/10 py-20" id="projects">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Featured Projects</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Explore some of our recent development projects and the results we've delivered for our clients.
              </p>
            </div>

            <div className="space-y-16">
              {projects.map((project, index) => (
                <div key={project.id} className={`grid grid-cols-1 gap-12 ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2 lg:flex-row-reverse'} lg:items-center`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      width={600} 
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="space-y-6">
                    <div className="inline-block rounded-full bg-[oklch(0.55_0.18_255)]/10 px-3 py-1 text-sm font-medium text-[oklch(0.55_0.18_255)]">
                      {project.client}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                    <p className="text-lg text-slate-700">{project.description}</p>
                    <div>
                      <h4 className="font-semibold text-slate-900">Technologies Used:</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="rounded-full bg-slate-200 px-3 py-1 text-sm font-medium text-slate-800">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link 
                      href="#" 
                      className="inline-flex items-center text-[oklch(0.55_0.18_255)] hover:text-[oklch(0.5_0.18_255)]"
                    >
                      View Case Study
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

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-2xl bg-[oklch(0.55_0.18_255)] p-8 md:p-12 shadow-xl">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white">Ready to Build Your Solution?</h2>
                  <p className="mt-4 text-lg text-white/80">
                    Let's discuss your project requirements and how our development expertise can help bring your vision to life.
                  </p>
                </div>
                <div className="flex justify-center md:justify-end">
                  <Link 
                    href="/contactUs" 
                    className="rounded-lg bg-white px-6 py-3 text-lg font-medium text-[oklch(0.55_0.18_255)] shadow-sm hover:bg-slate-50 transition-colors"
                  >
                    Start Your Project
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