import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CITIES, SERVICES, BUSINESS } from "@/app/lib/data";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export function generateStaticParams() {
  return CITIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  props: PageProps<"/service-area/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const city = CITIES.find((c) => c.slug === slug);
  if (!city) return {};
  return { title: city.metaTitle, description: city.metaDescription };
}

export default async function ServiceAreaPage(props: PageProps<"/service-area/[slug]">) {
  const { slug } = await props.params;
  const city = CITIES.find((c) => c.slug === slug);
  if (!city) notFound();

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-[#111827] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#f97316]" />
            <span className="text-[#f97316] text-xs font-semibold tracking-[0.15em] uppercase">Service Area</span>
          </div>
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight mb-4">
            {city.heading}
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-6">
            {city.longDescription}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors"
            >
              Request Service in {city.name}
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

      {/* Highlights */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#111827] font-extrabold text-2xl sm:text-3xl tracking-tight mb-8">
            Why Choose Us in {city.name}, {city.state}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {city.highlights.map((h) => (
              <div key={h} className="flex items-start gap-3 bg-[#f8f9fa] rounded-lg p-5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="#f97316" strokeWidth="2" strokeLinecap="round"/><path d="M22 4L12 14.01l-3-3" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-gray-700 text-sm font-medium">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="bg-[#f8f9fa] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#f97316]" />
              <span className="text-[#f97316] text-xs font-semibold tracking-[0.15em] uppercase">Available Services</span>
              <div className="w-8 h-[2px] bg-[#f97316]" />
            </div>
            <h2 className="text-[#111827] font-extrabold text-2xl sm:text-3xl tracking-tight">
              Services We Offer in {city.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md hover:border-gray-300 transition-all"
              >
                <h3 className="text-[#111827] font-bold text-sm mb-1.5 hover:text-[#f97316] transition-colors">
                  {service.shortTitle}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">{service.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Service Areas */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#111827] font-extrabold text-2xl sm:text-3xl tracking-tight mb-8">
            Other Areas We Serve
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {CITIES.filter((c) => c.slug !== city.slug).map((c) => (
              <Link
                key={c.slug}
                href={`/service-area/${c.slug}`}
                className="flex items-center gap-2 bg-[#f8f9fa] rounded-lg px-4 py-3 hover:bg-[#fff7ed] transition-colors"
              >
                <div className="w-2 h-2 rounded-full border-2 border-[#f97316] flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{c.name}, {c.state}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111827] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl tracking-tight mb-4">
            Need Forklift Service in {city.name}?
          </h2>
          <p className="text-gray-400 text-base mb-6 max-w-xl mx-auto">
            Contact KE Material Handling DFW today for professional forklift repair and maintenance in {city.name}, {city.state}.
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
