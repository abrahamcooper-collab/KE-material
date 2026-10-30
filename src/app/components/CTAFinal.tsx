import Link from "next/link";

export default function CTAFinal() {
  return (
    <section className="bg-[#111827] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-white font-extrabold text-3xl sm:text-4xl leading-tight tracking-tight mb-4">
            Equipment Problems Shouldn&apos;t Hold Your Business Back.
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            Tell us what your equipment needs. KE Material Handling Solutions is ready to
            help you explore the right repair and maintenance options.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors"
            >
              Request a Quote
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <a
              href="tel:9722777563"
              className="inline-flex items-center gap-2 border border-white/25 hover:border-white/50 text-white text-sm font-semibold px-6 py-3 rounded-md transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 2.98 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Call (972) 277-7563
            </a>
            <a
              href="tel:9723271619"
              className="inline-flex items-center gap-2 border border-white/25 hover:border-white/50 text-white text-sm font-semibold px-6 py-3 rounded-md transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 2.98 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Dispatch (972) 327-1619
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
