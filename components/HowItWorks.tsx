"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Add a task.",
    description:
      "Type what you're working on. That's it. No tagging, no projects, no setup.",
    detail: "Write Q3 report",
    ui: "task-input",
  },
  {
    number: "02",
    title: "Pick a session length.",
    description: "25 minutes is default. Go longer if you're in flow.",
    detail: "25 / 5 min",
    ui: "session-picker",
  },
  {
    number: "03",
    title: "Don't touch your phone for 25 minutes.",
    description:
      "Focusly handles the rest — timer, blocker, ambient sound, break.",
    detail: "17:43",
    ui: "timer",
  },
];

function StepMockup({ step }: { step: (typeof steps)[0] }) {
  if (step.ui === "task-input") {
    return (
      <div className="bg-white rounded-2xl border border-[#EAE5DF] p-5 shadow-[0_2px_12px_rgba(26,26,26,0.07)]">
        <div className="text-[11px] uppercase tracking-[0.1em] text-[#6B6560] mb-2 font-medium">What are you working on?</div>
        <div className="flex items-center gap-3 bg-[#FAF8F5] rounded-xl px-4 py-3 border border-[#EAE5DF]">
          <span className="text-[15px] text-[#1A1A1A] font-medium flex-1">Write Q3 report</span>
          <span className="w-1 h-4 bg-[#FF5C39] rounded-full animate-pulse" />
        </div>
        <div className="mt-3 flex gap-2">
          {["Write Q3 report", "Deep work block", "Review PRs"].map((t, i) => (
            <span key={t} className={`text-[11px] px-2.5 py-1 rounded-full border ${i === 0 ? "bg-[#FFF0EC] border-[#FF5C39]/20 text-[#FF5C39]" : "bg-white border-[#EAE5DF] text-[#6B6560]"}`}>{t}</span>
          ))}
        </div>
      </div>
    );
  }

  if (step.ui === "session-picker") {
    return (
      <div className="bg-white rounded-2xl border border-[#EAE5DF] p-5 shadow-[0_2px_12px_rgba(26,26,26,0.07)]">
        <div className="text-[11px] uppercase tracking-[0.1em] text-[#6B6560] mb-3 font-medium">Session length</div>
        <div className="grid grid-cols-3 gap-2">
          {[["25 min", "5 min break", true], ["50 min", "10 min break", false], ["90 min", "15 min break", false]].map(([dur, brk, active]) => (
            <div
              key={String(dur)}
              className={`rounded-xl p-3 border text-center cursor-pointer ${active ? "border-[#FF5C39] bg-[#FFF0EC]" : "border-[#EAE5DF] bg-white"}`}
            >
              <div className={`text-[15px] font-bold ${active ? "text-[#FF5C39]" : "text-[#1A1A1A]"}`}>{dur}</div>
              <div className="text-[10px] text-[#6B6560] mt-0.5">{brk}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-[#EAE5DF] p-5 shadow-[0_2px_12px_rgba(26,26,26,0.07)]">
      <div className="flex flex-col items-center gap-3">
        <div className="text-[11px] uppercase tracking-[0.1em] text-[#6B6560] font-medium self-start">In session</div>
        <div className="relative flex items-center justify-center">
          <svg width="100" height="100" className="-rotate-90">
            <circle cx="50" cy="50" r="42" fill="none" stroke="#EAE5DF" strokeWidth="5" />
            <circle
              cx="50" cy="50" r="42"
              fill="none" stroke="#FF5C39" strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 42}
              strokeDashoffset={2 * Math.PI * 42 * 0.29}
            />
          </svg>
          <span className="absolute text-[1.375rem] font-bold text-[#1A1A1A] tracking-tight">17:43</span>
        </div>
        <div className="w-full bg-[#FFF0EC] rounded-lg px-3 py-2 text-center">
          <span className="text-[12px] text-[#FF5C39] font-medium">Twitter blocked · 3 apps silenced</span>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
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
            How it works
          </span>
          <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-[#1A1A1A] tracking-[-0.02em] leading-[1.1]">
            Three steps. Then you&apos;re focused.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-6"
            >
              {/* Step mockup */}
              <StepMockup step={step} />

              {/* Step copy */}
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline gap-3">
                  <span
                    className="text-[0.75rem] font-bold tracking-[0.08em]"
                    style={{ color: "#FF5C39" }}
                  >
                    {step.number}
                  </span>
                  <h3 className="text-[1.1875rem] font-semibold text-[#1A1A1A] tracking-[-0.01em]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[0.9375rem] text-[#6B6560] leading-[1.6] pl-7">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
