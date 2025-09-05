import Navigation from "@/components/Navigation"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function Culture() {
  // Sample values
  const values = [
    {
      id: 1,
      title: "Innovation",
      description: "We embrace creative thinking and continuously seek new ways to solve complex problems.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Collaboration",
      description: "We believe in the power of teamwork and foster an environment where diverse perspectives thrive.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Excellence",
      description: "We are committed to delivering high-quality work and exceeding expectations in everything we do.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical principles that build trust with our clients and team members.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Growth Mindset",
      description: "We embrace challenges, persist in the face of setbacks, and view effort as the path to mastery.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Client Focus",
      description: "We prioritize understanding our clients' needs and delivering solutions that drive their success.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
  ];

  // Sample perks
  const perks = [
    {
      id: 1,
      title: "Flexible Work Arrangements",
      description: "Work from home, office, or hybrid options to suit your lifestyle and productivity preferences.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Continuous Learning",
      description: "Access to online courses, conferences, workshops, and a dedicated budget for professional development.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs to keep you at your best.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Competitive Compensation",
      description: "Salary packages that recognize your skills and experience, plus performance-based bonuses.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Work-Life Balance",
      description: "Generous paid time off, parental leave, and respect for your personal time to prevent burnout.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Team Building",
      description: "Regular social events, retreats, and activities that foster connections and build a strong team culture.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ];

  // Sample team members
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Software Engineer",
      quote: "Working at Recurso Labs has given me the opportunity to grow both technically and professionally in a supportive environment.",
      image: "/bg1.jpg"
    },
    {
      id: 2,
      name: "Sophia Chen",
      role: "UX Designer",
      quote: "I love the collaborative culture at Recurso Labs. Everyone's ideas are valued, and we're encouraged to innovate and push boundaries.",
      image: "/bg2.jpg"
    },
    {
      id: 3,
      name: "Marcus Williams",
      role: "Project Manager",
      quote: "The work-life balance and flexibility at Recurso Labs allow me to be my best self both at work and at home.",
      image: "/bg3.jpg"
    },
    {
      id: 4,
      name: "Priya Patel",
      role: "Data Scientist",
      quote: "The learning opportunities and mentorship I've received at Recurso Labs have accelerated my career growth tremendously.",
      image: "/bg1.jpg"
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
        <section className="relative bg-[oklch(0.55_0.18_255)]/10 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-[oklch(0.55_0.18_255)]/10 px-3 py-1 text-sm font-medium text-[oklch(0.55_0.18_255)]">
                  Life at Recurso
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Our Culture
                </h1>
                <p className="text-xl text-slate-700">
                  At Recurso Labs, we've built a culture that celebrates creativity, collaboration, and continuous growth. Discover what makes our workplace special.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/life-at-recurso/careers" 
                    className="rounded-lg bg-[oklch(0.55_0.18_255)] px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-[oklch(0.5_0.18_255)] transition-colors"
                  >
                    Join Our Team
                  </Link>
                  <Link 
                    href="#values" 
                    className="rounded-lg bg-white px-6 py-3 text-lg font-medium text-slate-900 shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    Our Values
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src="/bg1.jpg" 
                    alt="Recurso Labs Culture" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src="/bg2.jpg" 
                    alt="Our Story" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 size-24 rounded-xl bg-[oklch(0.55_0.18_255)] p-4 shadow-lg">
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-2xl font-bold text-white">10+</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Story</h2>
                <p className="text-lg text-slate-700">
                  Founded in 2013, Recurso Labs began with a simple mission: to create technology solutions that make a meaningful impact. What started as a small team of passionate developers has grown into a diverse community of innovators, problem-solvers, and creative thinkers.
                </p>
                <p className="text-lg text-slate-700">
                  Throughout our journey, we've remained committed to fostering a culture where people can do their best work in an environment that values collaboration, continuous learning, and work-life balance.
                </p>
                <p className="text-lg text-slate-700">
                  Today, our team spans multiple countries and time zones, but we're united by our shared values and dedication to excellence in everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-[oklch(0.55_0.18_255)]/10 py-20" id="values">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Values</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                These core principles guide our decisions, shape our culture, and define who we are as a company.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.id} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
                  <p className="mt-2 text-slate-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Culture Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Team Culture</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                We've built an environment where creativity flourishes, collaboration is celebrated, and everyone has the opportunity to make an impact.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Culture Aspect 1 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Diverse & Inclusive</h3>
                <p className="mt-2 text-slate-700">
                  We celebrate diversity in all forms and create an inclusive environment where everyone feels welcome and valued.
                </p>
              </div>

              {/* Culture Aspect 2 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Creative Freedom</h3>
                <p className="mt-2 text-slate-700">
                  We encourage experimentation, creative thinking, and the freedom to explore new ideas and approaches.
                </p>
              </div>

              {/* Culture Aspect 3 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Continuous Learning</h3>
                <p className="mt-2 text-slate-700">
                  We invest in our team's growth through mentorship, learning resources, and opportunities to develop new skills.
                </p>
              </div>

              {/* Culture Aspect 4 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Impact-Driven</h3>
                <p className="mt-2 text-slate-700">
                  We focus on creating meaningful impact through our work, both for our clients and the broader community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Perks & Benefits Section */}
        <section className="bg-[oklch(0.55_0.18_255)]/10 py-20" id="perks">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Perks & Benefits</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                We believe in taking care of our team with benefits that support your professional growth, personal well-being, and work-life balance.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {perks.map((perk) => (
                <div key={perk.id} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                    {perk.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{perk.title}</h3>
                  <p className="mt-2 text-slate-700">{perk.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Testimonials Section */}
        <section className="py-20" id="testimonials">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Meet Our Team</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Hear directly from our team members about their experiences working at Recurso Labs.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-4 h-24 w-24 mx-auto overflow-hidden rounded-full">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      width={96} 
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-slate-900">{member.name}</h3>
                    <p className="text-sm text-slate-500 mb-4">{member.role}</p>
                    <p className="text-slate-700 italic">
                      {member.quote}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Life at Recurso Gallery */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Life at Recurso</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Take a peek into our daily life, team events, and workspace.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image src="/bg1.jpg" alt="Team building event" width={300} height={300} className="h-full w-full object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image src="/bg2.jpg" alt="Office space" width={300} height={300} className="h-full w-full object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image src="/bg3.jpg" alt="Team lunch" width={300} height={300} className="h-full w-full object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image src="/bg1.jpg" alt="Hackathon" width={300} height={300} className="h-full w-full object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image src="/bg2.jpg" alt="Company retreat" width={300} height={300} className="h-full w-full object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image src="/bg3.jpg" alt="Award ceremony" width={300} height={300} className="h-full w-full object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image src="/bg1.jpg" alt="Team workshop" width={300} height={300} className="h-full w-full object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image src="/bg2.jpg" alt="Office celebration" width={300} height={300} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-2xl bg-[oklch(0.55_0.18_255)] p-12 text-center text-white">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Join Our Team</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg">
                Ready to be part of a culture that values innovation, collaboration, and growth? Explore our current openings and take the next step in your career.
              </p>
              <div className="mt-8">
                <Link 
                  href="/life-at-recurso/careers" 
                  className="rounded-lg bg-white px-6 py-3 text-lg font-medium text-[oklch(0.55_0.18_255)] shadow-sm hover:bg-slate-100 transition-colors"
                >
                  View Open Positions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}