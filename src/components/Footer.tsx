export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[oklch(0.55_0.18_255)]/10">
      <div className="max-w-6xl mx-auto px-6 py-10 text-slate-800">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-slate-100">
                <svg className="w-5 h-5 text-[oklch(0.55_0.18_255)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p>Building 7, Block B, OPF, Lahore, Pakistan</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-slate-100">
                <svg className="w-5 h-5 text-[oklch(0.55_0.18_255)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p>+923008197977</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-slate-100">
                <svg className="w-5 h-5 text-[oklch(0.55_0.18_255)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p>info@recursolabs.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="rounded-md border border-slate-200 bg-white p-2 shadow-sm hover:bg-slate-50">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Instagram" className="rounded-md border border-slate-200 bg-white p-2 shadow-sm hover:bg-slate-50">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="LinkedIn" className="rounded-md border border-slate-200 bg-white p-2 shadow-sm hover:bg-slate-50">
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-4 text-center text-sm text-slate-600">
          Recurso Labs © 2025 — All rights reserved
        </div>
      </div>
    </footer>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-slate-700">
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0 1 14 6h3v3h-3a1 1 0 0 0-1 1V12h4l-.5 3h-3.5v7A10 10 0 0 0 22 12z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-slate-700">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm6.5.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-slate-700">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5S1.12 1 2.5 1S4.98 2.12 4.98 3.5zM0 8h5v15H0zM9 8h4.8v2.1h.1c.7-1.3 2.3-2.7 4.7-2.7C22.6 7.4 24 10 24 14.1V23H19v-8c0-1.9-.7-3.1-2.5-3.1c-1.3 0-2.1.9-2.5 1.7c-.1.3-.1.7-.1 1.1V23H9z" />
    </svg>
  )
}


