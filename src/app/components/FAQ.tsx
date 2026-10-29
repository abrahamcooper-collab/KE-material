"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What types of equipment do you service?",
    a: "We provide service for electric and propane forklifts, electric pallet jacks, stand-up forklifts, reach trucks, and other applicable material handling equipment.",
  },
  {
    q: "Do you offer on-site forklift repair?",
    a: "Yes. Our technicians travel to your facility with diagnostic tools and common replacement parts to perform repairs on-site, minimizing the need to transport equipment.",
  },
  {
    q: "What types of forklift problems can you address?",
    a: "We handle a wide range of issues including no-start conditions, hydraulic leaks, electrical faults, brake problems, overheating, mast and chain issues, transmission and engine problems, and more.",
  },
  {
    q: "Do you offer preventive maintenance?",
    a: "Yes. We offer scheduled preventive maintenance programs designed to help extend the life of your equipment and reduce unexpected breakdowns.",
  },
  {
    q: "Do you work with businesses operating multiple forklifts?",
    a: "Yes. We work with businesses of all sizes, from single-unit operations to multi-forklift fleets, and can set up maintenance plans to suit your needs.",
  },
  {
    q: "How do I request a quote?",
    a: "You can submit a quote request through the form on our website or call us directly at (972) 277-7563. We'll ask about your equipment, location, and service needs to provide an estimate.",
  },
  {
    q: "Do you handle urgent equipment breakdowns?",
    a: "We understand that equipment breakdowns can impact your operations. Contact us and we'll do our best to schedule service as quickly as possible based on availability.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve businesses throughout the Dallas-Fort Worth Metroplex including Arlington, Grand Prairie, Fort Worth, Dallas, Irving, Coppell, Grapevine, and surrounding communities.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#f97316]" />
            <span className="text-[#f97316] text-xs font-semibold tracking-[0.15em] uppercase">FAQ</span>
            <div className="w-8 h-[2px] bg-[#f97316]" />
          </div>
          <h2 className="text-[#111827] font-extrabold text-3xl sm:text-4xl leading-tight tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-base">
            Answers to common questions about our forklift repair and material handling services.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className={`border rounded-lg transition-colors ${isOpen ? "border-[#f97316]" : "border-gray-200"}`}>
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
                >
                  <span className={`font-semibold text-sm ${isOpen ? "text-[#111827]" : "text-gray-700"}`}>
                    {faq.q}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`flex-shrink-0 ml-3 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#f97316]" : "text-gray-400"}`}
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-5 pb-4">
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
