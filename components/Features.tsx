"use client";

import {
  Lock,
  ShieldOff,
  BrainCircuit,
  Flame,
  CalendarClock,
  Minimize2,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Lock,
    title: "Timer that actually traps you",
    description:
      "A focus session you can't pause without consequence. Quit early and your streak resets. Brutal, but it works.",
  },
  {
    icon: ShieldOff,
    title: "Distraction blocker built in",
    description:
      "Block apps, sites, and notifications during sessions. No willpower required.",
  },
  {
    icon: BrainCircuit,
    title: "Smart break suggestions",
    description:
      "Focusly learns when you focus best and suggests breaks before burnout, not after.",
  },
  {
    icon: Flame,
    title: "Streaks that compound",
    description:
      "Daily streaks, weekly stats, and monthly wins. Watch your deep work hours grow.",
  },
  {
    icon: CalendarClock,
    title: "Calendar-aware sessions",
    description:
      "Focusly sees your calendar and helps you defend the time before it disappears.",
  },
  {
    icon: Minimize2,
    title: "Beautiful, distraction-free",
    description:
      "No dashboards. No upsells. Just you, your task, and a 25-minute clock.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 md:py-32 section-gradient-warm texture-noise"
    >
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
            What Focusly does
          </span>
          <h2 className="text-[2.5rem] md:text-[3rem] font-bold text-[#1A1A1A] tracking-[-0.02em] max-w-[560px] leading-[1.1]">
            Built for the{" "}
            <em
              style={{
                fontFamily: "var(--font-instrument-serif), Georgia, serif",
                fontStyle: "italic",
                color: "#FF5C39",
              }}
            >
              easily distracted
            </em>
            .
          </h2>
        </motion.div>

        {/* 3×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group bg-white rounded-[1.25rem] p-7 border border-[#EAE5DF] shadow-[0_1px_3px_rgba(26,26,26,0.05),0_4px_16px_rgba(26,26,26,0.05)] hover:shadow-[0_2px_8px_rgba(26,26,26,0.07),0_8px_32px_rgba(26,26,26,0.09)] hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#FFF0EC] mb-5 group-hover:bg-[#FF5C39] transition-colors duration-300">
                  <Icon
                    size={18}
                    className="text-[#FF5C39] group-hover:text-white transition-colors duration-300"
                  />
                </div>

                <h3 className="text-[1.0625rem] font-semibold text-[#1A1A1A] mb-2 tracking-[-0.01em]">
                  {feat.title}
                </h3>
                <p className="text-[0.9375rem] text-[#6B6560] leading-[1.6]">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
