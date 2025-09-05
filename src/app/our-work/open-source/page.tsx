import HomeNav from "@/components/HomeNav"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function OpenSource() {
  // Sample open source projects data
  const projects = [
    {
      id: 1,
      name: "RecursoUI",
      description: "A comprehensive React component library with 50+ accessible, customizable UI components built with TypeScript and styled with Tailwind CSS.",
      stars: 2800,
      forks: 420,
      contributors: 48,
      image: "/bg1.jpg",
      tags: ["React", "TypeScript", "Tailwind CSS", "UI Library"],
      link: "https://github.com/recurso-labs/recurso-ui"
    },
    {
      id: 2,
      name: "DataFlowJS",
      description: "A lightweight, high-performance data processing library for JavaScript applications, optimized for handling large datasets with minimal memory footprint.",
      stars: 1650,
      forks: 310,
      contributors: 32,
      image: "/bg2.jpg",
      tags: ["JavaScript", "Data Processing", "Performance"],
      link: "https://github.com/recurso-labs/dataflow-js"
    },
    {
      id: 3,
      name: "ServerlessStack",
      description: "An open-source framework for building serverless applications on AWS with infrastructure as code, simplified deployment, and local development environment.",
      stars: 3200,
      forks: 580,
      contributors: 65,
      image: "/bg3.jpg",
      tags: ["Serverless", "AWS", "Infrastructure", "DevOps"],
      link: "https://github.com/recurso-labs/serverless-stack"
    },
    {
      id: 4,
      name: "APIForge",
      description: "A toolkit for rapidly building and documenting RESTful APIs with Node.js, featuring automatic validation, rate limiting, and OpenAPI documentation generation.",
      stars: 1250,
      forks: 230,
      contributors: 28,
      image: "/bg1.jpg",
      tags: ["Node.js", "API", "REST", "OpenAPI"],
      link: "https://github.com/recurso-labs/api-forge"
    },
    {
      id: 5,
      name: "ReactiveState",
      description: "A state management solution for React applications that combines the simplicity of React hooks with the power of reactive programming principles.",
      stars: 1850,
      forks: 340,
      contributors: 37,
      image: "/bg2.jpg",
      tags: ["React", "State Management", "Reactive Programming"],
      link: "https://github.com/recurso-labs/reactive-state"
    },
    {
      id: 6,
      name: "DevSecOps Toolkit",
      description: "A collection of tools and scripts for integrating security into the DevOps pipeline, including vulnerability scanning, secret detection, and compliance checks.",
      stars: 980,
      forks: 175,
      contributors: 22,
      image: "/bg3.jpg",
      tags: ["DevSecOps", "Security", "CI/CD", "Compliance"],
      link: "https://github.com/recurso-labs/devsecops-toolkit"
    },
  ];

  // Sample contributors data
  const contributors = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Principal Engineer",
      contributions: 342,
      image: "/bg1.jpg",
      github: "https://github.com/alexchen"
    },
    {
      id: 2,
      name: "Sophia Rodriguez",
      role: "Frontend Architect",
      contributions: 287,
      image: "/bg2.jpg",
      github: "https://github.com/sophiarodriguez"
    },
    {
      id: 3,
      name: "Marcus Johnson",
      role: "DevOps Engineer",
      contributions: 215,
      image: "/bg3.jpg",
      github: "https://github.com/marcusjohnson"
    },
    {
      id: 4,
      name: "Priya Patel",
      role: "Senior Developer",
      contributions: 198,
      image: "/bg1.jpg",
      github: "https://github.com/priyapatel"
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
                  Open Source
                </h1>
                <p className="text-xl text-slate-700">
                  We're committed to giving back to the developer community through open source contributions, sharing our expertise and tools to help build a better technology ecosystem.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="#projects" 
                    className="rounded-lg bg-[oklch(0.55_0.18_255)] px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-[oklch(0.5_0.18_255)] transition-colors"
                  >
                    Explore Our Projects
                  </Link>
                  <Link 
                    href="https://github.com/recurso-labs" 
                    target="_blank"
                    className="rounded-lg bg-white px-6 py-3 text-lg font-medium text-slate-900 shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    <span className="flex items-center">
                      <svg className="mr-2 size-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      GitHub
                    </span>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src="/bg1.jpg" 
                    alt="Open Source Collaboration" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Philosophy Section */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src="/bg2.jpg" 
                    alt="Open Source Collaboration" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-block rounded-full bg-[oklch(0.55_0.18_255)]/10 px-3 py-1 text-sm font-medium text-[oklch(0.55_0.18_255)]">
                  Our Philosophy
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Why We Contribute to Open Source
                </h2>
                <p className="text-lg text-slate-700">
                  At Recurso Labs, we believe that open source is the foundation of modern software development. By contributing to and maintaining open source projects, we:
                </p>
                <ul className="space-y-4 text-lg text-slate-700">
                  <li className="flex items-start">
                    <svg className="mr-3 mt-1 size-5 text-[oklch(0.55_0.18_255)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Give back to the community that has provided us with invaluable tools and resources</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="mr-3 mt-1 size-5 text-[oklch(0.55_0.18_255)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Improve the quality and security of the software ecosystem we all rely on</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="mr-3 mt-1 size-5 text-[oklch(0.55_0.18_255)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Foster innovation through collaboration and knowledge sharing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="mr-3 mt-1 size-5 text-[oklch(0.55_0.18_255)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Develop our team's skills and expertise by working with talented developers worldwide</span>
                  </li>
                </ul>
                <p className="text-lg text-slate-700">
                  We dedicate a portion of our team's time to maintaining our open source projects and contributing to other projects that we use and value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="bg-slate-50 py-20" id="projects">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <div className="inline-block rounded-full bg-[oklch(0.55_0.18_255)]/10 px-3 py-1 text-sm font-medium text-[oklch(0.55_0.18_255)]">
                Our Projects
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Featured Open Source Projects
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Explore the open source projects we've created and maintain, used by thousands of developers worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div key={project.id} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.name} 
                      width={400} 
                      height={200}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="absolute bottom-0 p-4">
                        <h3 className="text-xl font-bold text-white">{project.name}</h3>
                        <div className="mt-2 flex items-center space-x-4 text-white/80">
                          <div className="flex items-center">
                            <svg className="mr-1 size-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                            </svg>
                            <span>{project.stars.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="mr-1 size-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M5.559 8.855c.166 1.183.789 3.207 3.087 4.079-2.464.487-4.415-.343-5.399-2.267-1.4-2.733-.177-6.099 3.307-7.453 1.134-.436 2.469-.58 3.686-.508 1.47.088 2.912.58 4.352 1.128l-.305-2.192 5.449 3.624-5.449 3.624-.435-3.553c-.974-.58-2.237-1.401-3.709-1.69-1.885-.382-3.538.254-4.584 5.208zm15.97-1.36c-.478 2.833-2.219 4.726-6.204 5.746l-.628-2.091c2.975-.543 4.226-2.133 4.226-3.751 0-1.617-1.251-3.208-4.226-3.751l.628-2.091c3.985 1.02 5.726 2.913 6.204 5.746zm-5.726 7.746l-5.449-3.624 5.449-3.624.305 2.192c-1.44.548-2.882 1.04-4.353 1.128-1.217.072-2.552-.072-3.686-.508-3.484-1.354-4.707-4.72-3.307-7.453.985-1.924 2.935-2.754 5.399-2.267-2.298.872-2.921 2.896-3.087 4.079 1.047-4.954 2.7-5.59 4.585-5.208 1.472.289 2.734 1.11 3.708 1.69l.435-3.553 5.449 3.624-5.449 3.624-.305-2.192c-1.44.548-2.882 1.04-4.353 1.128-1.217.072-2.552-.072-3.686-.508-3.484-1.354-4.707-4.72-3.307-7.453.985-1.924 2.935-2.754 5.399-2.267-2.298.872-2.921 2.896-3.087 4.079 1.047-4.954 2.7-5.59 4.585-5.208 1.472.289 2.734 1.11 3.708 1.69l.435-3.553z" />
                            </svg>
                            <span>{project.forks.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="mr-1 size-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                            <span>{project.contributors}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-700">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <Link 
                        href={project.link} 
                        target="_blank"
                        className="inline-flex items-center text-[oklch(0.55_0.18_255)] hover:text-[oklch(0.5_0.18_255)] transition-colors"
                      >
                        <svg className="mr-2 size-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        View on GitHub
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link 
                href="https://github.com/recurso-labs" 
                target="_blank"
                className="inline-flex items-center rounded-lg bg-[oklch(0.55_0.18_255)] px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-[oklch(0.5_0.18_255)] transition-colors"
              >
                <span className="flex items-center">
                  <svg className="mr-2 size-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  View All Projects on GitHub
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Top Contributors Section */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <div className="inline-block rounded-full bg-[oklch(0.55_0.18_255)]/10 px-3 py-1 text-sm font-medium text-[oklch(0.55_0.18_255)]">
                Our Team
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Top Contributors
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Meet some of our team members who actively contribute to open source projects.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {contributors.map((contributor) => (
                <div key={contributor.id} className="group overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md text-center">
                  <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
                    <Image 
                      src={contributor.image} 
                      alt={contributor.name} 
                      width={96} 
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{contributor.name}</h3>
                  <p className="text-slate-600">{contributor.role}</p>
                  <div className="mt-2 flex items-center justify-center space-x-2 text-slate-700">
                    <svg className="size-5 text-[oklch(0.55_0.18_255)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
                    </svg>
                    <span>{contributor.contributions} contributions</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <Link 
                      href={contributor.github} 
                      target="_blank"
                      className="inline-flex items-center text-[oklch(0.55_0.18_255)] hover:text-[oklch(0.5_0.18_255)] transition-colors"
                    >
                      <svg className="mr-2 size-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      GitHub Profile
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Contribute Section */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-[oklch(0.55_0.18_255)]/10 px-3 py-1 text-sm font-medium text-[oklch(0.55_0.18_255)]">
                  Get Involved
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  How to Contribute
                </h2>
                <p className="text-lg text-slate-700">
                  We welcome contributions from developers of all skill levels. Here's how you can get involved:
                </p>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="mr-4 flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                      <span className="text-lg font-semibold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">Find a Project</h3>
                      <p className="mt-2 text-slate-700">Browse our GitHub repositories and find a project that interests you. Check the issues tab for good first issues or help wanted tags.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-4 flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                      <span className="text-lg font-semibold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">Fork and Clone</h3>
                      <p className="mt-2 text-slate-700">Fork the repository to your GitHub account and clone it to your local machine to start working on your contribution.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-4 flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                      <span className="text-lg font-semibold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">Make Changes</h3>
                      <p className="mt-2 text-slate-700">Implement your changes following the project's coding standards and guidelines. Add tests if applicable.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-4 flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                      <span className="text-lg font-semibold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">Submit a Pull Request</h3>
                      <p className="mt-2 text-slate-700">Push your changes to your fork and submit a pull request to the original repository. Our team will review your contribution.</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Link 
                    href="https://github.com/recurso-labs" 
                    target="_blank"
                    className="inline-flex items-center rounded-lg bg-[oklch(0.55_0.18_255)] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[oklch(0.5_0.18_255)] transition-colors"
                  >
                    Start Contributing
                    <svg className="ml-2 size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src="/bg3.jpg" 
                    alt="Open Source Contribution" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats Section */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <div className="inline-block rounded-full bg-[oklch(0.55_0.18_255)]/10 px-3 py-1 text-sm font-medium text-[oklch(0.55_0.18_255)]">
                Our Impact
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Open Source by the Numbers
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                The impact of our open source contributions on the developer community.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl bg-white p-6 shadow-sm text-center">
                <div className="text-4xl font-bold text-[oklch(0.55_0.18_255)]">15+</div>
                <p className="mt-2 text-lg font-medium text-slate-900">Active Projects</p>
                <p className="text-slate-600">Open source projects maintained by our team</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm text-center">
                <div className="text-4xl font-bold text-[oklch(0.55_0.18_255)]">12K+</div>
                <p className="mt-2 text-lg font-medium text-slate-900">GitHub Stars</p>
                <p className="text-slate-600">Across all our open source repositories</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm text-center">
                <div className="text-4xl font-bold text-[oklch(0.55_0.18_255)]">2.5K+</div>
                <p className="mt-2 text-lg font-medium text-slate-900">Forks</p>
                <p className="text-slate-600">Developers building on our projects</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm text-center">
                <div className="text-4xl font-bold text-[oklch(0.55_0.18_255)]">250+</div>
                <p className="mt-2 text-lg font-medium text-slate-900">Contributors</p>
                <p className="text-slate-600">Community members who've contributed code</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Join Our Open Source Community</h2>
            <p className="mt-4 text-xl text-slate-300">
              Whether you're a seasoned developer or just getting started, there's a place for you in our open source community.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link 
                href="https://github.com/recurso-labs" 
                target="_blank"
                className="rounded-lg bg-white px-6 py-3 text-lg font-medium text-slate-900 shadow-sm hover:bg-slate-100 transition-colors"
              >
                <span className="flex items-center">
                  <svg className="mr-2 size-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub
                </span>
              </Link>
              <Link 
                href="/contactUs" 
                className="rounded-lg bg-transparent px-6 py-3 text-lg font-medium text-white shadow-sm border border-white hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}