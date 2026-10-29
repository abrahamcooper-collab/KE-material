import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, BUSINESS } from "@/app/lib/data";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.metaTitle, description: service.metaDescription };
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-[#111827] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#f97316]" />
            <span className="text-[#f97316] text-xs font-semibold tracking-[0.15em] uppercase">Our Services</span>
          </div>
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight mb-4">
            {service.title}
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-6">
            {service.fullDescription}
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
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 border border-white/25 hover:border-white/50 text-white text-sm font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#111827] font-extrabold text-2xl sm:text-3xl tracking-tight mb-8">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 bg-[#f8f9fa] rounded-lg p-5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/><path d="M22 4L12 14.01l-3-3" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-gray-700 text-sm font-medium">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f8f9fa] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#f97316]" />
              <span className="text-[#f97316] text-xs font-semibold tracking-[0.15em] uppercase">Our Process</span>
              <div className="w-8 h-[2px] bg-[#f97316]" />
            </div>
            <h2 className="text-[#111827] font-extrabold text-2xl sm:text-3xl tracking-tight">
              How We Handle {service.shortTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.process.map((step) => (
              <div key={step.step} className="bg-white rounded-lg border border-gray-200 p-6">
                <span className="text-[#f97316] font-extrabold text-2xl">
                  {String(step.step).padStart(2, "0")}
                </span>
                <h3 className="text-[#111827] font-bold text-base mt-3 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111827] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl tracking-tight mb-4">
            Need {service.shortTitle} Service?
          </h2>
          <p className="text-gray-400 text-base mb-6 max-w-xl mx-auto">
            Contact KE Material Handling DFW today to discuss your {service.shortTitle.toLowerCase()} needs across the Dallas-Fort Worth area.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors"
            >
              Request a Quote
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 border border-white/25 hover:border-white/50 text-white text-sm font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
