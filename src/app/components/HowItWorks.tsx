export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Tell Us About the Issue",
      desc: "Submit the quote form with your equipment type, location, and service needs.",
    },
    {
      num: "02",
      title: "Discuss Your Requirements",
      desc: "Our team can review the information and discuss the next steps with you.",
    },
    {
      num: "03",
      title: "Review the Service Needs",
      desc: "Identify the reported problem and determine the appropriate service requirements.",
    },
    {
      num: "04",
      title: "Move Toward a Solution",
      desc: "Proceed with the agreed service plan to help restore equipment performance and minimize downtime.",
    },
  ];

  return (
    <section className="bg-[#f8f9fa] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-[#f97316]" />
          <span className="text-[#f97316] text-xs font-semibold tracking-[0.15em] uppercase">
            How It Works
          </span>
          <div className="w-8 h-[2px] bg-[#f97316]" />
        </div>
        <h2 className="text-[#111827] font-extrabold text-3xl sm:text-4xl leading-tight tracking-tight mb-3">
          Getting Your Equipment Back on Track
        </h2>
        <p className="text-gray-500 text-base leading-relaxed mb-12 max-w-2xl mx-auto">
          A simple, straightforward process to help move your equipment from problem to solution.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {steps.map((step) => (
            <div key={step.num} className="bg-white rounded-lg border border-gray-200 p-6 text-left">
              <span className="text-[#f97316] font-extrabold text-2xl">{step.num}</span>
              <h3 className="text-[#111827] font-bold text-base mt-3 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-xs">
          Submitting the form does not automatically confirm a service appointment. Our team will follow up to discuss scheduling and availability.
        </p>
      </div>
    </section>
  );
}
