"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

const free = [
  "Unlimited focus sessions",
  "Daily streaks",
  "Basic distraction blocker",
];

const pro = [
  "Everything in free",
  "Advanced blocker (custom rules, scheduled blocks)",
  "Calendar integration",
  "Cross-device sync",
  "Ambient soundscapes",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col gap-4 mb-14"
        >
          <span className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-[#6B6560]">
            Pricing
          </span>
          <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-[#1A1A1A] tracking-[-0.02em] leading-[1.1]">
            Free forever. Pro when you&apos;re ready.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[780px]">
          {/* Free */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[1.25rem] p-8 border border-[#EAE5DF] shadow-[0_1px_3px_rgba(26,26,26,0.05),0_4px_16px_rgba(26,26,26,0.05)] flex flex-col gap-7"
          >
            <div>
              <div className="text-[0.875rem] font-semibold text-[#6B6560] uppercase tracking-[0.08em] mb-2">
                Free
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-[3rem] font-bold text-[#1A1A1A] tracking-[-0.03em]">
                  $0
                </span>
                <span className="text-[#6B6560] text-[0.9375rem]">/ forever</span>
              </div>
              <p className="text-[0.875rem] text-[#6B6560] mt-1.5">
                Everything you need to build a daily focus habit.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {free.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-4.5 h-4.5 rounded-full bg-[#FAF8F5] border border-[#EAE5DF] flex items-center justify-center">
                    <Check size={11} className="text-[#6B6560]" />
                  </span>
                  <span className="text-[0.9375rem] text-[#3D3832]">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-auto w-full inline-flex items-center justify-center py-3 rounded-[0.625rem] border-2 border-[#EAE5DF] text-[#1A1A1A] text-[0.9375rem] font-medium hover:border-[#1A1A1A] transition-colors"
            >
              Get started
            </a>
          </motion.div>

          {/* Pro */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative bg-[#1A1A1A] rounded-[1.25rem] p-8 shadow-[0_4px_24px_rgba(26,26,26,0.18)] flex flex-col gap-7 overflow-hidden"
          >
            {/* Subtle coral glow */}
            <div
              aria-hidden
              className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(255,92,57,0.2) 0%, transparent 70%)",
                transform: "translate(30%, -30%)",
              }}
            />

            <div className="relative">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[0.875rem] font-semibold text-[#F0EBE3] uppercase tracking-[0.08em]">
                  Pro
                </span>
                <span className="text-[0.6875rem] font-bold uppercase tracking-[0.06em] bg-[#FF5C39] text-white px-2 py-0.5 rounded-full">
                  Popular
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-[3rem] font-bold text-white tracking-[-0.03em]">
                  $6
                </span>
                <span className="text-[#9E9590] text-[0.9375rem]">/ month</span>
              </div>
              <p className="text-[0.875rem] text-[#9E9590] mt-1.5">
                Or{" "}
                <span className="text-white font-medium">$48/year</span>{" "}
                <span className="text-[#A8C99F]">— save 33%</span>
              </p>
            </div>

            <ul className="flex flex-col gap-3 relative">
              {pro.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-4.5 h-4.5 rounded-full bg-[#FF5C39]/20 flex items-center justify-center">
                    <Check size={11} className="text-[#FF5C39]" />
                  </span>
                  <span className="text-[0.9375rem] text-[#D6D0CA]">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="relative mt-auto w-full inline-flex items-center justify-center py-3 rounded-[0.625rem] bg-[#FF5C39] text-white text-[0.9375rem] font-medium hover:bg-[#E84B28] transition-colors shadow-[0_2px_12px_rgba(255,92,57,0.4)]"
            >
              Try Pro free for 14 days
            </a>
          </motion.div>
        </div>

        {/* Fine print */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-[0.875rem] text-[#6B6560] max-w-[480px]"
        >
          Cancel anytime. No questions. We hate dark patterns as much as you do.
        </motion.p>
      </div>
    </section>
  );
}
