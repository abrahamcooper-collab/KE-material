import Image from "next/image";
import Link from "next/link";

const EQUIPMENT = [
  { label: "Electric Forklifts", image: "/electric-forklifts.png" },
  { label: "Propane Forklifts", image: "/propane-forklifts.png" },
  { label: "Electric Pallet Jacks", image: "/electric-pallet-jack.png" },
  { label: "Stand-Up & Reach Trucks", image: "/standup-reach-truck.png" },
];

export default function Equipment() {
  return (
    <section id="equipment" className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#f97316]" />
            <span className="text-[#f97316] text-xs font-semibold tracking-[0.15em] uppercase">Equipment We Service</span>
          </div>
          <h2 className="text-[#111827] font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight mb-3">
            Service for the Equipment Your Business Depends On
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
            We work with a range of material handling equipment used across warehouses, distribution centers, and industrial facilities.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {EQUIPMENT.map((item) => (
            <div key={item.label} className="group relative rounded-xl overflow-hidden h-[150px] sm:h-[180px] lg:h-[200px]">
              <Image src={item.image} alt={item.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-white font-semibold text-xs sm:text-sm">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="border border-gray-200 rounded-lg px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">Not sure if we service your equipment? Contact our team with the make, model, and issue.</p>
          <Link href="/#contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-sm px-5 py-3 rounded-md transition-colors">
            Contact Our Team
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
