import Image from "next/image";
import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#111827] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative h-[400px] lg:h-[480px] rounded-xl overflow-hidden">
            <Image
              src="/why-choose-mechanic.png"
              alt="Forklift technician repairing a Hyster forklift in a warehouse"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-8 right-8 w-14 h-14 bg-[#f97316] rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 3l14 9-14 9V3z" fill="white"/>
              </svg>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#f97316]" />
              <span className="text-[#f97316] text-xs font-semibold tracking-[0.15em] uppercase">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-white font-extrabold text-3xl sm:text-4xl leading-tight tracking-tight mb-4">
              Reliable Service. Less Downtime. Better Operations.
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              We understand how important dependable material handling equipment is
              to your daily operations. Our focus is on helping businesses address
              equipment issues, maintain their fleets, and keep their workplaces
              operating efficiently.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  title: "Minimize Equipment Downtime",
                  desc: "Identify and address equipment issues to help reduce unnecessary interruptions.",
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#f97316" strokeWidth="2"/><path d="M12 6v6l4 2" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/></svg>,
                },
                {
                  title: "Convenient On-Site Service",
                  desc: "Request service at your facility throughout the Dallas-Fort Worth Metroplex.",
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#f97316" strokeWidth="2"/><circle cx="12" cy="10" r="3" stroke="#f97316" strokeWidth="2"/></svg>,
                },
                {
                  title: "Maintenance-Focused Approach",
                  desc: "Help identify potential problems through preventive maintenance and equipment inspections.",
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/><path d="M22 4L12 14.01l-3-3" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                },
                {
                  title: "Practical, Professional Support",
                  desc: "Get clear communication and service recommendations based on your equipment's needs.",
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                },
              ].map((item) => (
                <div key={item.title} className="bg-[#1e293b] rounded-lg p-5">
                  <div className="w-10 h-10 bg-[#111827] rounded-lg flex items-center justify-center mb-3">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1.5">{item.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors"
            >
              Discuss Your Equipment Needs
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
