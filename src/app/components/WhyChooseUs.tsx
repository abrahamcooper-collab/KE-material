import Image from "next/image";
import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#111827] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="relative h-[280px] sm:h-[380px] lg:h-[480px] rounded-xl overflow-hidden">
            <Image src="/why-choose-mechanic.png" alt="Forklift technician repairing a forklift in a warehouse" fill className="object-cover" />
            <div className="absolute bottom-6 right-6 w-12 h-12 bg-[#f97316] rounded-full flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 3l14 9-14 9V3z" fill="white"/></svg>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#f97316]" />
              <span className="text-[#f97316] text-xs font-semibold tracking-[0.15em] uppercase">Why Choose Us</span>
            </div>
            <h2 className="text-white font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight mb-4">
              Reliable Service. Less Downtime. Better Operations.
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-7">
              We understand how important dependable material handling equipment is to your daily operations. Our focus is on helping businesses address equipment issues, maintain their fleets, and keep their workplaces operating efficiently.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
              {[
                { title: "Minimize Equipment Downtime", desc: "Identify and address equipment issues to help reduce unnecessary interruptions." },
                { title: "Convenient On-Site Service", desc: "Request service at your facility throughout the Dallas-Fort Worth Metroplex." },
                { title: "Maintenance-Focused Approach", desc: "Help identify potential problems through preventive maintenance and equipment inspections." },
                { title: "Practical, Professional Support", desc: "Get clear communication and service recommendations based on your equipment needs." },
              ].map((item) => (
                <div key={item.title} className="bg-[#1e293b] rounded-lg p-4">
                  <h4 className="text-white font-bold text-sm mb-1.5">{item.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link href="/#contact" className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors">
              Discuss Your Equipment Needs
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
