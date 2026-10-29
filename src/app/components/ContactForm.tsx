"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    businessName: "",
    phone: "",
    email: "",
    serviceLocation: "",
    equipmentMakeModel: "",
    equipmentType: "",
    serviceNeeded: "",
    preferredContact: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Service Quote Request");
    const body = encodeURIComponent(
      `Full Name: ${form.fullName}\nBusiness: ${form.businessName}\nPhone: ${form.phone}\nEmail: ${form.email}\nLocation/ZIP: ${form.serviceLocation}\nEquipment: ${form.equipmentMakeModel}\nType: ${form.equipmentType}\nService: ${form.serviceNeeded}\nPreferred Contact: ${form.preferredContact}\n\nDetails:\n${form.details}`
    );
    window.location.href = `mailto:support@kaballahenterprise.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-[#111827] font-extrabold text-3xl sm:text-4xl leading-tight tracking-tight mb-3">
            Request a Forklift Repair Quote
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto">
            Tell us about your equipment and service needs. Provide a few details, and our team can
            follow up to discuss the next steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={form.fullName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Business Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="businessName"
                  required
                  value={form.businessName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Service Location / ZIP Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="serviceLocation"
                  required
                  value={form.serviceLocation}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Equipment Make and Model
                </label>
                <input
                  type="text"
                  name="equipmentMakeModel"
                  value={form.equipmentMakeModel}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Equipment Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="equipmentType"
                  required
                  value={form.equipmentType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent"
                >
                  <option value="">Select equipment type...</option>
                  <option>Electric Forklift</option>
                  <option>Propane Forklift</option>
                  <option>Electric Pallet Jack</option>
                  <option>Stand-Up Forklift / Reach Truck</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Service Needed <span className="text-red-500">*</span>
                </label>
                <select
                  name="serviceNeeded"
                  required
                  value={form.serviceNeeded}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent"
                >
                  <option value="">Select service needed...</option>
                  <option>Preventive Maintenance</option>
                  <option>No-Start Diagnostics &amp; Repair</option>
                  <option>Hydraulic Leak &amp; Hose Repair</option>
                  <option>Electrical Troubleshooting</option>
                  <option>Brake System Repair</option>
                  <option>Battery &amp; Charging System</option>
                  <option>Starter &amp; Alternator</option>
                  <option>Cooling System &amp; Overheating</option>
                  <option>Mast, Chain &amp; Carriage</option>
                  <option>Transmission &amp; Engine</option>
                  <option>General Repair</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Preferred Contact Method
              </label>
              <select
                name="preferredContact"
                value={form.preferredContact}
                onChange={handleChange}
                className="w-full sm:w-1/2 border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent"
              >
                <option value="">No preference</option>
                <option>Phone</option>
                <option>Email</option>
                <option>Text</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Additional Details
              </label>
              <textarea
                name="details"
                rows={4}
                placeholder="Describe the equipment issue, symptoms, or maintenance needed..."
                value={form.details}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent resize-y"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 2L15 22l-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Submit Quote Request
              </button>
              <a
                href="tel:9722777563"
                className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 text-sm font-semibold px-6 py-3 rounded-md transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 2.98 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Call (972) 277-7563
              </a>
            </div>
          </form>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Why reach out */}
            <div className="bg-[#f97316] rounded-xl p-6 text-white">
              <h3 className="font-bold text-base mb-4">Why reach out to us?</h3>
              <ul className="space-y-3">
                {[
                  "Mobile on-site service throughout the Dallas-Fort Worth Metroplex.",
                  "Preventive maintenance to help reduce unexpected breakdowns.",
                  "Clear communication and practical service recommendations.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M22 4L12 14.01l-3-3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-[#f8f9fa] rounded-xl p-6">
              <h3 className="text-[#111827] font-bold text-base mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#f97316] flex-shrink-0 mt-0.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 2.98 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <div>
                    <span className="text-gray-400 text-[10px] tracking-[0.1em] uppercase font-semibold">Phone</span>
                    <p className="text-[#111827] text-sm font-medium">(972) 277-7563</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#f97316] flex-shrink-0 mt-0.5"><rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M22 7l-10 6L2 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <div>
                    <span className="text-gray-400 text-[10px] tracking-[0.1em] uppercase font-semibold">Email</span>
                    <p className="text-[#111827] text-sm font-medium">support@kaballahenterprise.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#f97316] flex-shrink-0 mt-0.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/></svg>
                  <div>
                    <span className="text-gray-400 text-[10px] tracking-[0.1em] uppercase font-semibold">Address</span>
                    <p className="text-[#111827] text-sm font-medium">2301 N Collins ST, Arlington, TX 76011</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#f97316] flex-shrink-0 mt-0.5"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/></svg>
                  <div>
                    <span className="text-gray-400 text-[10px] tracking-[0.1em] uppercase font-semibold">Service Area</span>
                    <p className="text-[#111827] text-sm font-medium">Dallas-Fort Worth Metroplex, TX</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-xs mt-5 pt-4 border-t border-gray-200 flex items-start gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                Submitting this form prepares an email draft — it does not send a message automatically or confirm a service appointment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
