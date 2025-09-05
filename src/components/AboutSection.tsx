export default function AboutSection() {
  const features = [
    { title: "Innovative Solutions", desc: "We bring creative and forward-thinking solutions to tackle your business challenges." },
    { title: "Expert Development", desc: "Our team of experts delivers high-quality, reliable software development services." },
    { title: "Client Partnership", desc: "We work closely with our clients, building long-term partnerships based on trust and success." },
    { title: "Seamlessly Responsive", desc: "Our designs ensure a flawless user experience across all devices, from desktops to mobile phones." },
    { title: "Elegant Code", desc: "Our code is meticulously crafted to be both efficient and maintainable, ensuring long-term reliability and ease of use." },
    { title: "Effortlessly Customizable", desc: "Our flexible solutions allow seamless modifications and scalability to meet your evolving needs." },
  ]

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">Discover Our Story</h2>
        <p className="mt-4 text-sm sm:text-base text-slate-700">
          At Recurso Labs, we turn innovative ideas into impactful solutions. Our journey, fueled by a passion for excellence, has positioned us as a trusted global partner. We are dedicated to bringing your digital vision to life with performance-driven, high-quality software services. Whether it's developing custom applications or maintaining existing systems, we offer a comprehensive suite of solutions to meet all your digital needs.
        </p>
      </div>

      <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <article key={f.title} className="rounded-xl border border-slate-200 bg-white/80 backdrop-blur p-4 sm:p-5 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:bg-white">
            <h3 className="text-sm sm:text-base font-semibold text-slate-900">{f.title}</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-700">{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

