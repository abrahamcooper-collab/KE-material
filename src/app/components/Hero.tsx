import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#1a1a1a] relative overflow-hidden min-h-[520px] flex items-center">
      {/* Right-side warehouse image */}
      <div className="absolute right-0 top-0 bottom-0 w-[48%] hidden lg:block">
        <Image
          src="/hero-warehouse.png"
          alt="Warehouse with forklifts"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay: dark on left, transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent" />
        <div className="absolute inset-0 bg-[#1a1a1a]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-24">
        <div className="max-w-2xl lg:max-w-[55%]">

          {/* Label */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-[#f97316]" />
            <span className="text-[#f97316] text-xs font-semibold tracking-[0.15em] uppercase">
              Forklift Repair &amp; Material Handling Services
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl leading-[1.1] tracking-tight mb-6">
            Keep Your Equipment Moving.{" "}
            <span className="text-[#f97316]">Keep Your Business Running.</span>
          </h1>

          {/* Sub-text */}
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            Professional mobile forklift repair, preventive maintenance, and equipment
            diagnostics throughout the Dallas–Fort Worth Metroplex. We help businesses
            minimize downtime and keep their operations running smoothly.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors"
            >
              Request a Service Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <a
              href="tel:9722777563"
              className="inline-flex items-center gap-2 border border-white/25 hover:border-white/50 text-white text-sm font-semibold px-6 py-3 rounded-md transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 2.98 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Call (972) 277-7563
            </a>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-5">
            {[
              { label: "Mobile On-Site Service", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="1" y="3" width="15" height="13" rx="1" stroke="#f97316" strokeWidth="2" /><path d="M16 8h4l3 3v5h-7V8z" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="5.5" cy="18.5" r="2.5" stroke="#f97316" strokeWidth="2" /><circle cx="18.5" cy="18.5" r="2.5" stroke="#f97316" strokeWidth="2" /></svg> },
              { label: "Preventive Maintenance", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="#f97316" strokeWidth="2" /><path d="M16 2v4M8 2v4M3 10h18" stroke="#f97316" strokeWidth="2" strokeLinecap="round" /></svg> },
              { label: "Equipment Diagnostics", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#f97316" strokeWidth="2" /><path d="M12 8v4l3 3" stroke="#f97316" strokeWidth="2" strokeLinecap="round" /></svg> },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-2">
                {badge.icon}
                <span className="text-gray-400 text-xs font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
