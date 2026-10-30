"use client";

import { useEffect } from "react";

// Next.js skips scrolling when a link's hash already matches the URL,
// so clicking "/#contact" a second time does nothing. Scroll manually instead.
export default function HashScrollFix() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest?.("a[href*='#']") as HTMLAnchorElement | null;
      if (!link) return;
      const url = new URL(link.href);
      if (url.pathname !== location.pathname || url.hash !== location.hash) return;
      const target = document.getElementById(url.hash.slice(1));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
