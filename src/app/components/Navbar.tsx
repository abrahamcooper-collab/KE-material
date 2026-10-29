"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { SERVICES, CITIES } from "@/app/lib/data";

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="14" height="14" viewBox="0 0 24 24" fill="none"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Dropdown({ label, items }: { label: string; items: { name: string; slug: string; basePath: string }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-gray-300 hover:text-white text-sm transition-colors duration-150"
      >
        {label}
        <ChevronDown open={open} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-[#1e2433] border border-white/10 rounded-lg shadow-2xl z-50 py-2 max-h-[420px] overflow-y-auto">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/${item.basePath}/${item.slug}`}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  const serviceItems = SERVICES.map((s) => ({ name: s.shortTitle, slug: s.slug, basePath: "services" }));
  const cityItems = CITIES.map((c) => ({ name: `${c.name}, ${c.state}`, slug: c.slug, basePath: "service-area" }));

  return (
    <header className="bg-[#1a1a1a] sticky top-0 z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[58px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="w-9 h-9 bg-[#f97316] rounded-lg flex items-center justify-center">
            <ForkliftIcon />
          </div>
          <div className="leading-tight">
            <div className="text-white font-bold text-[13px] tracking-tight leading-none">KE Material Handling</div>
            <div className="text-gray-400 text-[9px] tracking-[0.15em] uppercase mt-0.5">Solutions</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-300 hover:text-white text-sm transition-colors">Home</Link>

          {/* Services Dropdown */}
          <Dropdown label="Services" items={serviceItems} />

          {/* Service Areas Dropdown */}
          <Dropdown label="Service Areas" items={cityItems} />

          <Link href="/#equipment" className="text-gray-300 hover:text-white text-sm transition-colors">Equipment</Link>
          <Link href="/#contact" className="text-gray-300 hover:text-white text-sm transition-colors">Contact</Link>
        </nav>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:9722777563"
            className="flex items-center gap-2 text-white text-sm font-medium hover:text-[#f97316] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#f97316]">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 2.98 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            (972) 277-7563
          </a>
          <Link
            href="/#contact"
            className="bg-[#f97316] hover:bg-[#ea580c] text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><line x1="18" y1="6" x2="6" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" /><line x1="6" y1="6" x2="18" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><line x1="3" y1="6" x2="21" y2="6" stroke="white" strokeWidth="2" strokeLinecap="round" /><line x1="3" y1="12" x2="21" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" /><line x1="3" y1="18" x2="21" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-white/10 px-4 py-4">
          <Link href="/" className="block text-gray-300 hover:text-white text-sm py-2" onClick={() => setMenuOpen(false)}>Home</Link>

          {/* Mobile Services */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full text-gray-300 hover:text-white text-sm py-2"
            >
              Services <ChevronDown open={servicesOpen} />
            </button>
            {servicesOpen && (
              <div className="pl-4 pb-2 space-y-1">
                {serviceItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="block text-gray-400 hover:text-white text-xs py-1.5"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Service Areas */}
          <div>
            <button
              onClick={() => setAreasOpen(!areasOpen)}
              className="flex items-center justify-between w-full text-gray-300 hover:text-white text-sm py-2"
            >
              Service Areas <ChevronDown open={areasOpen} />
            </button>
            {areasOpen && (
              <div className="pl-4 pb-2 space-y-1">
                {cityItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/service-area/${item.slug}`}
                    className="block text-gray-400 hover:text-white text-xs py-1.5"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/#equipment" className="block text-gray-300 hover:text-white text-sm py-2" onClick={() => setMenuOpen(false)}>Equipment</Link>
          <Link href="/#contact" className="block text-gray-300 hover:text-white text-sm py-2" onClick={() => setMenuOpen(false)}>Contact</Link>

          <div className="pt-3 border-t border-white/10 space-y-3 mt-2">
            <a href="tel:9722777563" className="flex items-center gap-2 text-white text-sm font-medium">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#f97316]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 2.98 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              (972) 277-7563
            </a>
            <Link
              href="/#contact"
              className="block text-center bg-[#f97316] text-white text-sm font-semibold px-4 py-2.5 rounded-md"
              onClick={() => setMenuOpen(false)}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
