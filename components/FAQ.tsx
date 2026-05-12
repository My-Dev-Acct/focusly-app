"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Is Focusly really free forever?",
    a: "Yes. The free plan has everything you need to build a daily focus habit. Pro is for power users who want calendar integration and advanced blocking.",
  },
  {
    q: "Does it work on my phone?",
    a: "iOS and Android, plus Mac, Windows, and a web app. They all sync if you're on Pro.",
  },
  {
    q: "What makes this different from every other Pomodoro app?",
    a: "The no-pause rule. Most Pomodoro apps let you pause whenever you want, which defeats the whole point. Focusly's session is a commitment — if you quit early, your streak resets. That's the entire trick, and it changes everything.",
  },
  {
    q: "Can I customize session lengths?",
    a: "Yes. 25/5 is default but you can run 50/10, 90/15, or whatever rhythm works for you. Pro lets you save custom presets.",
  },
  {
    q: "Do you sell my data?",
    a: "No. Focusly stores your task names locally on your device by default. We don't see them. We don't want to.",
  },
  {
    q: "Who built this?",
    a: "A small team of three who got tired of building things instead of finishing them.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border-b border-[#EAE5DF] last:border-0"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-[1rem] font-medium text-[#1A1A1A] group-hover:text-[#FF5C39] transition-colors">
          {q}
        </span>
        <span className="flex-shrink-0 w-6 h-6 rounded-full border border-[#EAE5DF] flex items-center justify-center bg-white text-[#6B6560] group-hover:border-[#FF5C39] group-hover:text-[#FF5C39] transition-colors">
          {open ? <Minus size={13} /> : <Plus size={13} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-[0.9375rem] text-[#6B6560] leading-[1.65] pb-5 pr-10">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 md:py-32 section-gradient-warm texture-noise">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          {/* Left — header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-4 lg:sticky lg:top-28"
          >
            <span className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-[#6B6560]">
              FAQ
            </span>
            <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-[#1A1A1A] tracking-[-0.02em] leading-[1.1]">
              Questions you&apos;re probably already typing into Google.
            </h2>
          </motion.div>

          {/* Right — accordion */}
          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
