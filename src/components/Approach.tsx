"use client"
import Image from "next/image"

export default function Approach() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-[1fr_1fr] lg:items-stretch">
        {/* Left: Large image */}
        <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm h-64 sm:h-80 md:h-96 lg:h-130">
          <Image
            src="/bg4.png"
            alt="Team collaborating"
            width={1200}
            height={600}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        {/* Right: Heading and copy with small image badge */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">Our Approach</h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Unlock The Potential Of Your Business.
          </h3>
          <p className="text-sm sm:text-base text-slate-700">
            We deliver tailored solutions designed around your unique requirements. We take the time to
            understand your business and provide personalized services aligned with your goals.
          </p>

          {/* Divider with checkpoints */}
          <div className="pt-4">
            <div className="relative">
              <div className="h-0.5 w-full bg-slate-200" />
              <div className="absolute -top-1 left-1/3 size-3 rounded-full bg-[oklch(0.55_0.18_255)]" />
              <div className="absolute -top-1 left-2/3 size-3 rounded-full bg-[oklch(0.55_0.18_255)]" />
            </div>
            <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold text-slate-900">Customized Solutions</h3>
                <p className="text-sm text-slate-700">Services are personalized and aligned with your goals.</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">24/7 Support</h3>
                <p className="text-sm text-slate-700">We are always here to help you with your needs.</p>
              </div>
            </div>
          </div>

          {/* Experience badges */}
          <div className="grid grid-cols-2 lg:flex lg:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 pt-4 sm:pt-6 pb-4 mx-auto">
            <div className="flex h-24 w-24 sm:h-28 sm:w-28 lg:h-36 lg:w-36 flex-shrink-0 flex-col items-center justify-center rounded-full border border-slate-200 bg-white text-center shadow-sm">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">10+</div>
              <div className="text-xs sm:text-sm text-slate-600">Years</div>
            </div>
            <div className="flex h-24 w-24 sm:h-28 sm:w-28 lg:h-36 lg:w-36 flex-shrink-0 flex-col items-center justify-center rounded-full border border-slate-200 bg-white text-center shadow-sm">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">30+</div>
              <div className="text-xs text-slate-600 px-1 sm:px-2 text-center">Satisfied Clients</div>
            </div>
            <div className="flex h-24 w-24 sm:h-28 sm:w-28 lg:h-36 lg:w-36 flex-shrink-0 flex-col items-center justify-center rounded-full border border-slate-200 bg-white text-center shadow-sm">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">5+</div>
              <div className="text-xs text-slate-600 px-1 sm:px-2 text-center">Enterprise Projects</div>
            </div>
            <div className="flex h-24 w-24 sm:h-28 sm:w-28 lg:h-36 lg:w-36 flex-shrink-0 flex-col items-center justify-center rounded-full border border-slate-200 bg-white text-center shadow-sm">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">10+</div>
              <div className="text-xs text-slate-600 px-1 sm:px-2 text-center">Startup Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


