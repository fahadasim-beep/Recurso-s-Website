import Image from "next/image"

export default function Testimonials() {
  // Sample testimonials data
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
    <section className="py-20 w-full">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Client Testimonials</h2>
          <p className="mt-4 text-slate-700 max-w-3xl mx-auto">
            Hear from organizations that have benefited from our expertise and services.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md border border-slate-200">
              <div className="mb-6 text-blue-600">
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
  )
}