import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-gray-200 rounded-lg px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-[#111827] font-bold text-lg mb-1">
              Ready to get your equipment serviced?
            </h3>
            <p className="text-gray-500 text-sm">
              Share a few details and our team can follow up to discuss the next steps for your forklift or material handling equipment.
            </p>
          </div>
          <Link
            href="/#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-sm px-5 py-3 rounded-md transition-colors"
          >
            Request a Quote
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
