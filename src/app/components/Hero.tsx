import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#1a1a1a] relative overflow-hidden min-h-[480px] flex items-center">
      <div className="absolute right-0 top-0 bottom-0 w-[45%] hidden lg:block">
        <Image src="/hero-warehouse.png" alt="Warehouse with forklifts" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="max-w-full lg:max-w-[55%]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#f97316]" />
            <span className="text-[#f97316] text-xs font-semibold tracking-[0.15em] uppercase">Forklift Repair &amp; Material Handling Services</span>
          </div>
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight mb-5">
            Keep Your Equipment Moving.{" "}
            <span className="text-[#f97316]">Keep Your Business Running.</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
            Professional mobile forklift repair, preventive maintenance, and equipment diagnostics throughout the Dallas–Fort Worth Metroplex.
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <Link href="/#contact" className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-sm px-5 py-3 rounded-md transition-colors">
              Request a Service Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <a href="tel:9722777563" className="inline-flex items-center gap-2 border border-white/25 hover:border-white/50 text-white text-sm font-semibold px-5 py-3 rounded-md transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 2.98 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Call (972) 277-7563
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {["Mobile On-Site Service", "Preventive Maintenance", "Equipment Diagnostics"].map((b) => (
              <div key={b} className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/><path d="M22 4L12 14.01l-3-3" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-gray-400 text-xs font-medium">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
