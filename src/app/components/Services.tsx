import Link from "next/link";
import { SERVICES } from "@/app/lib/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  wrench: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  calendar: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="#f97316" strokeWidth="2"/><path d="M16 2v4M8 2v4M3 10h18" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/></svg>,
  droplet: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  zap: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  shield: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  battery: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="1" y="6" width="18" height="12" rx="2" stroke="#f97316" strokeWidth="2"/><path d="M23 13v-2" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/></svg>,
  bolt: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  thermometer: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  settings: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#f97316" strokeWidth="2"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="#f97316" strokeWidth="2"/></svg>,
  gear: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#f97316" strokeWidth="2"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/></svg>,
};

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#f97316]" />
            <span className="text-[#f97316] text-xs font-semibold tracking-[0.15em] uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-[#111827] font-extrabold text-3xl sm:text-4xl leading-tight tracking-tight mb-4">
            Complete Forklift Repair &amp; Maintenance Solutions
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            From routine maintenance to complex equipment issues, we provide practical service
            solutions designed to reduce downtime and keep your material handling equipment
            operating safely.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
            >
              <div className="w-11 h-11 bg-[#fff7ed] rounded-lg flex items-center justify-center mb-4">
                {ICON_MAP[service.icon] || ICON_MAP.wrench}
              </div>
              <h3 className="text-[#111827] font-bold text-base mb-2 group-hover:text-[#f97316] transition-colors">
                {service.shortTitle}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
