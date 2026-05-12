"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    initials: "MR",
    color: "#E8D5F5",
    textColor: "#7C3ABD",
    name: "Maya R.",
    role: "Freelance illustrator",
    quote:
      "I genuinely don't know how I worked before this. The 'no pause' rule is the only thing that's ever made me stop opening Instagram mid-task. Three months in, my client deliveries are 2x faster.",
  },
  {
    initials: "DT",
    color: "#D5E8FF",
    textColor: "#2563EB",
    name: "Devon T.",
    role: "Software engineer, Series B startup",
    quote:
      "I'm one of those people who 'tried Pomodoro' five times and quit because the apps were all terrible. Focusly is the first one I've used for more than a week. The streak feature is genuinely addictive in a healthy way.",
  },
  {
    initials: "PS",
    color: "#D5F5E3",
    textColor: "#16A34A",
    name: "Priya S.",
    role: "PhD candidate",
    quote:
      "My dissertation has 47,000 more words because of this app. That's not a marketing line, that's the actual word count I added in 9 months of daily Focusly sessions.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 section-gradient-sage texture-noise">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="flex flex-col gap-4 mb-16"
        >
          <span className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-[#6B6560]">
            What people say
          </span>
          <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-[#1A1A1A] tracking-[-0.02em] leading-[1.1] max-w-[560px]">
            From people who used to open Twitter every 90 seconds.
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-[1.25rem] p-7 border border-[#EAE5DF] shadow-[0_1px_3px_rgba(26,26,26,0.05),0_4px_16px_rgba(26,26,26,0.05)] flex flex-col gap-5"
            >
              {/* Large opening quote mark */}
              <span
                className="text-[3.5rem] leading-none font-bold select-none"
                style={{ color: "#EAE5DF", lineHeight: "0.75" }}
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <p className="text-[0.9375rem] text-[#3D3832] leading-[1.7] flex-1">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-[#EAE5DF]">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[0.75rem] font-bold flex-shrink-0"
                  style={{ background: t.color, color: t.textColor }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[0.875rem] font-semibold text-[#1A1A1A] leading-snug">
                    {t.name}
                  </div>
                  <div className="text-[0.8125rem] text-[#6B6560]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
