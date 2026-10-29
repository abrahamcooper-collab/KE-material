import Link from "next/link";
import { CITIES, ALL_CITIES_DISPLAY } from "@/app/lib/data";

export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#f97316]" />
              <span className="text-[#f97316] text-xs font-semibold tracking-[0.15em] uppercase">Service Area</span>
            </div>
            <h2 className="text-[#111827] font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight mb-4">
              Serving Businesses Across Dallas–Fort Worth
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-7">
              KE Material Handling Solutions proudly provides mobile forklift repair, preventive maintenance, and material handling equipment services throughout the Dallas–Fort Worth Metroplex and surrounding areas.
            </p>
            <div className="bg-[#f8f9fa] rounded-lg p-5 mb-4">
              <div className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#f97316" strokeWidth="2"/><circle cx="12" cy="10" r="3" stroke="#f97316" strokeWidth="2"/></svg>
                <div>
                  <span className="text-[#111827] font-bold text-xs tracking-[0.1em] uppercase">Business Address</span>
                  <p className="text-gray-600 text-sm mt-1">2301 N Collins ST, Arlington, TX 76011</p>
                </div>
              </div>
            </div>
            <div className="bg-[#f8f9fa] rounded-lg p-5">
              <div className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5"><circle cx="12" cy="12" r="10" stroke="#f97316" strokeWidth="2"/><path d="M12 8v4M12 16h.01" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/></svg>
                <p className="text-gray-500 text-sm leading-relaxed">Service availability may depend on equipment, location, and job requirements. Contact our team to confirm service for your area.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#f8f9fa] rounded-xl p-5 sm:p-6">
            <h3 className="text-[#111827] font-bold text-xs tracking-[0.1em] uppercase mb-5">Cities &amp; Communities We Serve</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3">
              {ALL_CITIES_DISPLAY.flat().map((city) => {
                const linked = CITIES.find((c) => c.name === city);
                return (
                  <div key={city} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full border-2 border-[#f97316] flex-shrink-0" />
                    {linked ? (
                      <Link href={`/service-area/${linked.slug}`} className="text-gray-700 text-sm hover:text-[#f97316] transition-colors truncate">
                        {city}
                      </Link>
                    ) : (
                      <span className="text-gray-700 text-sm truncate">{city}</span>
                    )}
                  </div>
                );
              })}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full border-2 border-[#f97316] flex-shrink-0" />
                <span className="text-gray-700 text-sm">+ surrounding areas</span>
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-5 pt-4 border-t border-gray-200">
              Service across these locations is provided from our Arlington address.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
