import Link from "next/link";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Equipment", href: "/#equipment" },
  { label: "Service Area", href: "/#service-area" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1c1e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Main grid — 12-col layout matching reference exactly */}
        <div className="grid gap-10 lg:grid-cols-12">

          {/* Brand — col-span-5 */}
          <div className="lg:col-span-5">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 bg-[#f97316] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M2 20h8V10H2v10z" fill="white" />
                  <path d="M10 5v15" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M10 20h8" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M5 10V6" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="leading-tight">
                <div className="text-white font-bold text-[14px] tracking-tight leading-none">
                  KE Material Handling
                </div>
                <div className="text-white/40 text-[9px] tracking-[0.18em] uppercase mt-0.5">
                  Solutions
                </div>
              </div>
            </Link>

            {/* Tagline */}
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
              Professional mobile forklift repair, preventive maintenance,
              diagnostics, and material handling equipment services across the
              Dallas–Fort Worth Metroplex.
            </p>
          </div>

          {/* Contact — col-span-3 */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="tel:9722777563"
                  className="flex items-center gap-2.5 text-white/80 hover:text-[#f97316] transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#f97316] flex-shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 2.98 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  (972) 277-7563
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@kaballahenterprise.com"
                  className="flex items-center gap-2.5 break-all text-white/80 hover:text-[#f97316] transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#f97316] flex-shrink-0">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2.2" />
                    <path d="M22 7l-10 6L2 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  support@kaballahenterprise.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/80">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#f97316] flex-shrink-0 mt-0.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2.2" />
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2.2" />
                </svg>
                <span>2301 N Collins ST, Arlington, TX 76011</span>
              </li>
            </ul>
          </div>

          {/* Quick Links — col-span-4, 2-column grid */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              Quick Links
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 transition-colors hover:text-[#f97316]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#contact"
                  className="font-medium text-[#f97316] transition-colors hover:text-[#fb923c]"
                >
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} KE Material Handling Solutions. All rights reserved.</p>
          <p>Serving the Dallas–Fort Worth Metroplex, TX</p>
        </div>

      </div>
    </footer>
  );
}
