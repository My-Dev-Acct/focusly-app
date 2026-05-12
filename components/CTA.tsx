"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 md:py-28 bg-[#FF5C39] relative overflow-hidden">
      {/* Background decorations */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%)",
          transform: "translate(20%, -40%)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,0,0,0.06) 0%, transparent 60%)",
          transform: "translate(-30%, 40%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-6 max-w-[640px] mx-auto"
        >
          <h2 className="text-[2.75rem] md:text-[3.5rem] font-bold text-white tracking-[-0.025em] leading-[1.1]">
            Your next 25 minutes could go better.
          </h2>
          <p className="text-[1.0625rem] text-white/75 max-w-[440px]">
            Start your first session free. No card, no signup gauntlet, no
            nonsense.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-[0.75rem] bg-white text-[#FF5C39] text-[1rem] font-semibold hover:bg-[#FAF8F5] transition-colors shadow-[0_4px_24px_rgba(0,0,0,0.15)]"
          >
            Get Focusly free
            <ArrowRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
