import Link from "next/link";
import { X, Globe, ExternalLink } from "lucide-react";

const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog", "Download"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Help", "Privacy", "Terms", "Security"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#9E9590]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-12">
          {/* Brand column */}
          <div className="flex flex-col gap-4 max-w-[240px]">
            <div className="flex items-center gap-2">
              <span className="relative flex items-center justify-center w-6 h-6">
                <span className="absolute inset-0 rounded-full bg-[#FF5C39] opacity-25" />
                <span className="relative w-2.5 h-2.5 rounded-full bg-[#FF5C39]" />
              </span>
              <span className="text-[1.0625rem] font-semibold text-[#FF5C39]">
                Focusly
              </span>
            </div>
            <p className="text-[0.875rem] leading-[1.6] text-[#6B6560]">
              Focus you don&apos;t have to think about.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-[#252117] flex items-center justify-center hover:bg-[#2E2820] transition-colors"
                aria-label="X / Twitter"
              >
                <X size={13} className="text-[#6B6560]" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-[#252117] flex items-center justify-center hover:bg-[#2E2820] transition-colors"
                aria-label="Instagram"
              >
                <Globe size={13} className="text-[#6B6560]" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-[#252117] flex items-center justify-center hover:bg-[#2E2820] transition-colors"
                aria-label="LinkedIn"
              >
                <ExternalLink size={13} className="text-[#6B6560]" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h4 className="text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-[#F0EBE3]">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href={
                        link === "Blog"
                          ? "/blog"
                          : "#"
                      }
                      className="text-[0.9rem] text-[#6B6560] hover:text-[#F0EBE3] transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-14 pt-6 border-t border-[#2E2820] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[0.8125rem] text-[#4A4540]">
            © 2025 Focusly, Inc. All rights reserved.
          </p>
          <p className="text-[0.8125rem] text-[#4A4540]">
            Made by people who should&apos;ve been focused on something else.
          </p>
        </div>
      </div>
    </footer>
  );
}
