import Navigation from "@/components/Navigation"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function Careers() {
  // Sample job openings
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Software Engineer",
      location: "Remote (US/Canada)",
      type: "Full-time",
      department: "Engineering",
      description: "We're looking for a Senior Software Engineer with expertise in React, Node.js, and cloud technologies to join our product development team.",
      requirements: [
        "5+ years of professional software development experience",
        "Strong proficiency in JavaScript/TypeScript, React, and Node.js",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Knowledge of database technologies (SQL and NoSQL)",
        "Excellent problem-solving and communication skills"
      ]
    },
    {
      id: 2,
      title: "UX/UI Designer",
      location: "Remote (Global)",
      type: "Full-time",
      department: "Design",
      description: "Join our design team to create intuitive, engaging user experiences for our clients' digital products and services.",
      requirements: [
        "3+ years of experience in UX/UI design for digital products",
        "Proficiency in design tools such as Figma, Sketch, or Adobe XD",
        "Strong portfolio demonstrating user-centered design process",
        "Experience with design systems and component libraries",
        "Excellent visual design skills and attention to detail"
      ]
    },
    {
      id: 3,
      title: "DevOps Engineer",
      location: "Remote (US/Canada)",
      type: "Full-time",
      department: "Engineering",
      description: "Help us build and maintain robust, scalable infrastructure and deployment pipelines for our client projects.",
      requirements: [
        "3+ years of experience in DevOps or Site Reliability Engineering",
        "Strong knowledge of cloud platforms (AWS, Azure, or GCP)",
        "Experience with containerization (Docker, Kubernetes)",
        "Proficiency in infrastructure as code (Terraform, CloudFormation)",
        "Experience with CI/CD pipelines and automation tools"
      ]
    },
    {
      id: 4,
      title: "Project Manager",
      location: "Remote (Global)",
      type: "Full-time",
      department: "Project Management",
      description: "Lead cross-functional teams to deliver successful technology projects for our clients, ensuring on-time and on-budget delivery.",
      requirements: [
        "5+ years of experience in project management, preferably in software development",
        "PMP, Scrum Master, or equivalent certification",
        "Strong leadership, communication, and organizational skills",
        "Experience with project management tools and methodologies",
        "Ability to manage multiple projects simultaneously"
      ]
    },
    {
      id: 5,
      title: "Data Scientist",
      location: "Remote (US/Canada)",
      type: "Full-time",
      department: "Data Science",
      description: "Join our data science team to develop machine learning models and data-driven solutions for our clients' business challenges.",
      requirements: [
        "3+ years of experience in data science or machine learning",
        "Strong proficiency in Python and data science libraries",
        "Experience with machine learning frameworks (TensorFlow, PyTorch)",
        "Knowledge of data visualization tools and techniques",
        "Excellent analytical and problem-solving skills"
      ]
    },
    {
      id: 6,
      title: "Marketing Specialist",
      location: "Remote (Global)",
      type: "Full-time",
      department: "Marketing",
      description: "Help us grow our brand presence and generate leads through digital marketing strategies and content creation.",
      requirements: [
        "3+ years of experience in digital marketing",
        "Proficiency in SEO, content marketing, and social media",
        "Experience with marketing automation tools",
        "Strong analytical skills and data-driven approach",
        "Excellent writing and communication skills"
      ]
    },
  ];

  // Sample hiring process steps
  const hiringSteps = [
    {
      id: 1,
      title: "Application Review",
      description: "Our recruitment team reviews your application and resume to assess your qualifications and experience.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Initial Interview",
      description: "A 30-45 minute conversation with our recruitment team to discuss your background, experience, and interest in the role.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Technical Assessment",
      description: "Depending on the role, you may be asked to complete a technical challenge, design exercise, or case study to demonstrate your skills.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Team Interviews",
      description: "Meet with potential team members and stakeholders to assess technical skills, cultural fit, and alignment with our values.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Final Interview",
      description: "A conversation with a senior leader to discuss your career goals, expectations, and answer any remaining questions.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Offer & Onboarding",
      description: "If selected, you'll receive an offer letter and begin our comprehensive onboarding process to set you up for success.",
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ];

  // Sample employee testimonials
  const testimonials = [
    {
      id: 1,
      quote: "Joining Recurso Labs was one of the best career decisions I've made. The collaborative environment, challenging projects, and opportunities for growth have helped me develop both professionally and personally.",
      author: "David Kim",
      position: "Senior Software Engineer",
      image: "/bg1.jpg"
    },
    {
      id: 2,
      quote: "What I appreciate most about working at Recurso Labs is the emphasis on work-life balance and the flexibility to work in a way that suits my lifestyle. It's refreshing to be part of a company that truly values its employees' wellbeing.",
      author: "Aisha Patel",
      position: "UX Designer",
      image: "/bg2.jpg"
    },
    {
      id: 3,
      quote: "The learning opportunities at Recurso Labs are incredible. From mentorship programs to conference stipends, the company invests in our growth and encourages us to expand our skills and knowledge.",
      author: "Carlos Rodriguez",
      position: "DevOps Engineer",
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
                  Life at Recurso
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Join Our Team
                </h1>
                <p className="text-xl text-slate-700">
                  Build your career at Recurso Labs and work on challenging projects with a team of talented, passionate professionals.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="#openings" 
                    className="rounded-lg bg-[oklch(0.55_0.18_255)] px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-[oklch(0.5_0.18_255)] transition-colors"
                  >
                    View Open Positions
                  </Link>
                  <Link 
                    href="/life-at-recurso/culture" 
                    className="rounded-lg bg-white px-6 py-3 text-lg font-medium text-slate-900 shadow-sm border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    Our Culture
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src="/bg1.jpg" 
                    alt="Recurso Labs Team" 
                    width={600} 
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Why Join Recurso Labs?</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Discover the benefits of building your career with us and why our team members love working here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Reason 1 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Challenging Projects</h3>
                <p className="mt-2 text-slate-700">
                  Work on diverse, innovative projects across industries that push your skills and creativity to new heights.
                </p>
              </div>

              {/* Reason 2 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Growth & Development</h3>
                <p className="mt-2 text-slate-700">
                  Access continuous learning opportunities, mentorship programs, and a clear career progression path.
                </p>
              </div>

              {/* Reason 3 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Collaborative Culture</h3>
                <p className="mt-2 text-slate-700">
                  Join a supportive team that values diverse perspectives, open communication, and collective success.
                </p>
              </div>

              {/* Reason 4 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Work-Life Balance</h3>
                <p className="mt-2 text-slate-700">
                  Enjoy flexible work arrangements, generous time off, and a culture that respects your personal life.
                </p>
              </div>

              {/* Reason 5 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Cutting-Edge Technology</h3>
                <p className="mt-2 text-slate-700">
                  Work with the latest tools, frameworks, and methodologies to solve complex problems and deliver innovative solutions.
                </p>
              </div>

              {/* Reason 6 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Global Opportunities</h3>
                <p className="mt-2 text-slate-700">
                  Be part of a diverse, global team with opportunities to work with clients and colleagues around the world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Openings Section */}
        <section className="bg-[oklch(0.55_0.18_255)]/10 py-20" id="openings">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Current Openings</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Explore our current job opportunities and find a role that matches your skills and career goals.
              </p>
            </div>

            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <div key={job.id} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{job.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800">
                          {job.location}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800">
                          {job.type}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800">
                          {job.department}
                        </span>
                      </div>
                      <p className="mt-3 text-slate-700">{job.description}</p>
                      <div className="mt-4">
                        <h4 className="font-medium text-slate-900">Requirements:</h4>
                        <ul className="mt-2 list-inside list-disc space-y-1 text-slate-700">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Link 
                        href="#apply" 
                        className="inline-flex items-center rounded-lg bg-[oklch(0.55_0.18_255)] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[oklch(0.5_0.18_255)] transition-colors"
                      >
                        Apply Now
                        <svg className="ml-2 size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-slate-700">
                Don't see a role that matches your skills? We're always looking for talented individuals to join our team.
              </p>
              <Link 
                href="#apply" 
                className="mt-4 inline-flex items-center text-[oklch(0.55_0.18_255)] hover:text-[oklch(0.5_0.18_255)] transition-colors"
              >
                Submit a general application
                <svg className="ml-2 size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Hiring Process Section */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Hiring Process</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                We've designed a transparent, efficient hiring process to help us find the right candidates and give you a great experience.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {hiringSteps.map((step) => (
                <div key={step.id} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-[oklch(0.55_0.18_255)]/10 text-[oklch(0.55_0.18_255)]">
                    {step.icon}
                    <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-[oklch(0.55_0.18_255)] text-xs font-medium text-white">
                      {step.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-slate-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Employee Testimonials Section */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">What Our Team Says</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Hear directly from our team members about their experiences working at Recurso Labs.
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

        {/* Application Form Section */}
        <section className="py-20" id="apply">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Apply Now</h2>
                <p className="text-lg text-slate-700">
                  Ready to take the next step in your career? Submit your application and join our team of talented professionals.
                </p>
                <div className="rounded-xl bg-slate-50 p-6">
                  <h3 className="text-xl font-semibold text-slate-900">What to Expect</h3>
                  <ul className="mt-4 space-y-3 text-slate-700">
                    <li className="flex items-start">
                      <svg className="mr-2 mt-1 size-5 text-[oklch(0.55_0.18_255)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>We review all applications within 1-2 weeks</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="mr-2 mt-1 size-5 text-[oklch(0.55_0.18_255)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Our hiring process typically takes 3-4 weeks from application to offer</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="mr-2 mt-1 size-5 text-[oklch(0.55_0.18_255)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>We provide feedback at each stage of the process</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="mr-2 mt-1 size-5 text-[oklch(0.55_0.18_255)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>We're happy to accommodate any accessibility needs during the interview process</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-slate-700">First Name</label>
                      <input 
                        type="text" 
                        id="first-name" 
                        className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-[oklch(0.55_0.18_255)] focus:ring-[oklch(0.55_0.18_255)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-slate-700">Last Name</label>
                      <input 
                        type="text" 
                        id="last-name" 
                        className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-[oklch(0.55_0.18_255)] focus:ring-[oklch(0.55_0.18_255)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-[oklch(0.55_0.18_255)] focus:ring-[oklch(0.55_0.18_255)]"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-[oklch(0.55_0.18_255)] focus:ring-[oklch(0.55_0.18_255)]"
                    />
                  </div>

                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-slate-700">Position You're Applying For</label>
                    <select 
                      id="position" 
                      className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-[oklch(0.55_0.18_255)] focus:ring-[oklch(0.55_0.18_255)]"
                    >
                      <option value="">Select a position</option>
                      {jobOpenings.map((job) => (
                        <option key={job.id} value={job.title}>{job.title}</option>
                      ))}
                      <option value="general">General Application</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-slate-700">Resume/CV</label>
                    <div className="mt-1 flex items-center justify-center rounded-md border-2 border-dashed border-slate-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg className="mx-auto h-12 w-12 text-slate-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="flex text-sm text-slate-600">
                          <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-medium text-[oklch(0.55_0.18_255)] focus-within:outline-none focus-within:ring-2 focus-within:ring-[oklch(0.55_0.18_255)] focus-within:ring-offset-2 hover:text-[oklch(0.5_0.18_255)]">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-slate-500">PDF, DOC, DOCX up to 10MB</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cover-letter" className="block text-sm font-medium text-slate-700">Cover Letter or Additional Information</label>
                    <textarea 
                      id="cover-letter" 
                      rows={4} 
                      className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-[oklch(0.55_0.18_255)] focus:ring-[oklch(0.55_0.18_255)]"
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input 
                        id="terms" 
                        type="checkbox" 
                        className="h-4 w-4 rounded border-slate-300 text-[oklch(0.55_0.18_255)] focus:ring-[oklch(0.55_0.18_255)]"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="font-medium text-slate-700">I agree to the privacy policy</label>
                      <p className="text-slate-500">Your information will only be used for recruitment purposes.</p>
                    </div>
                  </div>

                  <div>
                    <button 
                      type="submit" 
                      className="w-full rounded-lg bg-[oklch(0.55_0.18_255)] px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-[oklch(0.5_0.18_255)] transition-colors"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                Find answers to common questions about our hiring process and working at Recurso Labs.
              </p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {/* FAQ Item 1 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">What is the interview process like?</h3>
                <p className="mt-2 text-slate-700">
                  Our interview process typically includes an initial screening call, a technical assessment relevant to the role, and one or more interviews with team members and leadership. We aim to make the process thorough but efficient, usually completing all stages within 3-4 weeks.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">Do you offer remote work options?</h3>
                <p className="mt-2 text-slate-700">
                  Yes, we offer fully remote positions as well as hybrid options depending on the role and location. We have team members working across multiple time zones and countries, and we've built our culture and processes to support remote collaboration.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">What benefits do you offer?</h3>
                <p className="mt-2 text-slate-700">
                  Our benefits package includes competitive compensation, health insurance, retirement plans, generous paid time off, parental leave, professional development stipends, flexible work arrangements, and regular team events and retreats. Specific benefits may vary by location.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">How do you support professional growth?</h3>
                <p className="mt-2 text-slate-700">
                  We're committed to helping our team members grow professionally. This includes dedicated learning time, mentorship programs, conference and course stipends, internal knowledge sharing sessions, and clear career progression paths with regular feedback and performance reviews.
                </p>
              </div>

              {/* FAQ Item 5 */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">What technologies do you work with?</h3>
                <p className="mt-2 text-slate-700">
                  We work with a wide range of technologies depending on the project and client needs. Our tech stack includes modern JavaScript frameworks (React, Vue, Angular), backend technologies (Node.js, Python, Java), cloud platforms (AWS, Azure, GCP), and various database systems. We're always exploring new technologies and approaches.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}