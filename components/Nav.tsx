"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EAE5DF] shadow-[0_1px_12px_rgba(26,26,26,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="relative flex items-center justify-center w-7 h-7">
            <span className="absolute inset-0 rounded-full bg-[#FF5C39] opacity-20 group-hover:opacity-30 transition-opacity" />
            <span className="relative w-3 h-3 rounded-full bg-[#FF5C39]" />
          </span>
          <span
            className="text-[1.125rem] font-semibold tracking-tight"
            style={{ color: "#FF5C39" }}
          >
            Focusly
          </span>
          {/* Decorative pulsing dot */}
          <span className="relative ml-1 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5C39] opacity-50" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5C39] opacity-80" />
          </span>
        </Link>

        {/* Center nav — desktop */}
        <div className="hidden md:flex items-center gap-8">
          {["Features", "How it works", "Pricing", "Blog"].map((item) => (
            <Link
              key={item}
              href={
                item === "Blog"
                  ? "/blog"
                  : `/#${item.toLowerCase().replace(/\s+/g, "-")}`
              }
              className="text-[0.9375rem] text-[#6B6560] hover:text-[#1A1A1A] transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right actions — desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#"
            className="text-[0.9375rem] text-[#6B6560] hover:text-[#1A1A1A] transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="#"
            className="inline-flex items-center px-4 py-2 rounded-[0.625rem] bg-[#FF5C39] text-white text-[0.9375rem] font-medium hover:bg-[#E84B28] transition-colors shadow-[0_1px_3px_rgba(255,92,57,0.3)]"
          >
            Get Focusly free
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-[#1A1A1A] transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#1A1A1A] transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#1A1A1A] transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE5DF] px-6 py-6 flex flex-col gap-5">
          {["Features", "How it works", "Pricing", "Blog"].map((item) => (
            <Link
              key={item}
              href={
                item === "Blog"
                  ? "/blog"
                  : `/#${item.toLowerCase().replace(/\s+/g, "-")}`
              }
              className="text-[1rem] text-[#1A1A1A]"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2 border-t border-[#EAE5DF]">
            <Link href="#" className="text-[1rem] text-[#6B6560]">
              Sign in
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-[0.625rem] bg-[#FF5C39] text-white text-[0.9375rem] font-medium"
            >
              Get Focusly free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
