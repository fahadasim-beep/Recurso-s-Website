import * as React from "react"

export default function ServicesGrid() {
  const services = [
    {
      title: "Dedicated Teams",
      desc:
        "We're committed to connecting you with top-tier talent, perfectly aligned to meet and exceed your business needs.",
      color:
        "from-emerald-500/15 via-emerald-500/10 to-emerald-500/5 border-emerald-400/30",
      icon: "users",
    },
    {
      title: "Web Development",
      desc:
        "We have deep expertise in the latest technologies to bring your web development projects to life.",
      color:
        "from-sky-500/15 via-sky-500/10 to-sky-500/5 border-sky-400/30",
      icon: "code",
    },
    {
      title: "Mobile Apps Development",
      desc:
        "We have a deep understanding of the latest technologies for your mobile app needs.",
      color:
        "from-fuchsia-500/15 via-fuchsia-500/10 to-fuchsia-500/5 border-fuchsia-400/30",
      icon: "smartphone",
    },
    {
      title: "UI/UX Designs",
      desc:
        "Our expert designers are dedicated to deliver exceptional user experiences tailored to your needs.",
      color:
        "from-amber-500/15 via-amber-500/10 to-amber-500/5 border-amber-400/30",
      icon: "palette",
    },
    {
      title: "Ecommerce Stores",
      desc:
        "We have experts of Shopify and WooCommerce to provide the best possible services in ecommerce.",
      color:
        "from-rose-500/15 via-rose-500/10 to-rose-500/5 border-rose-400/30",
      icon: "shopping-bag",
    },
    {
      title: "Discovery Workshops",
      desc:
        "Our two-week collaborative discovery sessions help you define your concept from a strategic business perspective.",
      color:
        "from-violet-500/15 via-violet-500/10 to-violet-500/5 border-violet-400/30",
      icon: "lightbulb",
    },
    {
      title: "SQL Annotation",
      desc:
        "We provide expert SQL annotation services to optimize your database queries and improve data management efficiency.",
      color:
        "from-teal-500/15 via-teal-500/10 to-teal-500/5 border-teal-400/30",
      icon: "database",
    },
  ]

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
      <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {services.map((s, i) => (
          <article
            key={s.title}
            className={
              "rounded-xl border border-slate-200 bg-white/80 backdrop-blur p-5 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:bg-white " +
              s.color +
              " " +
              // symmetrical mosaic sizing
              (i === 0
                ? "lg:col-span-2 lg:row-span-2"
                : i === 1
                ? "lg:col-span-2"
                : i === 2
                ? "lg:col-span-2"
                : i === 3
                ? "lg:col-span-2"
                : i === 4
                ? "lg:col-span-2"
                : i === 5
                ? "lg:col-span-2"
                : "lg:col-span-4")
            }
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <Icon name={s.icon as IconName} />
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-1 text-xs sm:text-sm leading-5 sm:leading-6 text-slate-700">{s.desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

type IconName = "users" | "code" | "smartphone" | "palette" | "shopping-bag" | "lightbulb" | "database"

function Icon({ name }: { name: IconName }) {
  const base = "mt-0.5 inline-flex size-9 items-center justify-center rounded-md border bg-white/70 text-slate-700 shadow-sm backdrop-blur"
  const map: Record<IconName, React.ReactNode> = {
    users: (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 14a4 4 0 1 0-8 0" />
        <circle cx="12" cy="8" r="3" />
        <path d="M20 21a6 6 0 0 0-16 0" />
      </svg>
    ),
    code: (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 16l-4-4l4-4" />
        <path d="M16 8l4 4l-4 4" />
      </svg>
    ),
    smartphone: (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </svg>
    ),
    palette: (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22a9 9 0 1 1 0-18h1a3 3 0 0 1 0 6h-1a3 3 0 0 0 0 6h1" />
        <circle cx="7.5" cy="10.5" r="1" />
        <circle cx="9.5" cy="7.5" r="1" />
        <circle cx="14.5" cy="7.5" r="1" />
        <circle cx="16.5" cy="10.5" r="1" />
      </svg>
    ),
    "shopping-bag": (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 7h12l-1 12H7L6 7z" />
        <path d="M9 7a3 3 0 0 1 6 0" />
      </svg>
    ),
    lightbulb: (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-4 12c1 1 1 2 1 3h6c0-1 0-2 1-3a7 7 0 0 0-4-12z" />
      </svg>
    ),
    database: (
      <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  }
  return map[name]
}

