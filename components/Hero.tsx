"use client";

import { useState, useEffect, useRef } from "react";
import { Play, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function TimerDemo() {
  const TOTAL = 25 * 60;
  const [seconds, setSeconds] = useState(17 * 60 + 43);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => {
          if (s <= 0) {
            setRunning(false);
            return TOTAL;
          }
          return s - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running, TOTAL]);

  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  const progress = 1 - seconds / TOTAL;

  const r = 72;
  const circumference = 2 * Math.PI * r;
  const dash = circumference * (1 - progress);

  return (
    <div className="relative flex flex-col items-center gap-6">
      {/* Phone frame */}
      <div className="relative w-[280px] bg-white rounded-[2.5rem] shadow-[0_8px_40px_rgba(26,26,26,0.14),0_2px_8px_rgba(26,26,26,0.06)] border border-[#EAE5DF] overflow-hidden">
        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pt-4 pb-2">
          <span className="text-[11px] font-semibold text-[#1A1A1A]">9:41</span>
          <div className="flex gap-1.5 items-center">
            <span className="w-3.5 h-2.5 border border-[#1A1A1A] rounded-[2px] relative"><span className="absolute right-0 top-1/2 -translate-y-1/2 -mr-[3px] w-[3px] h-1.5 bg-[#1A1A1A] rounded-r-[2px]" /></span>
          </div>
        </div>

        {/* App content */}
        <div className="px-6 pb-8 flex flex-col items-center gap-5">
          {/* Task label */}
          <div className="self-stretch flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-[0.1em] text-[#6B6560] font-medium">Now focusing on</span>
            <span className="text-[15px] font-semibold text-[#1A1A1A] leading-snug">Write Q3 report</span>
          </div>

          {/* Timer circle */}
          <div className="relative flex items-center justify-center">
            <svg width="180" height="180" className="-rotate-90">
              <circle
                cx="90" cy="90" r={r}
                fill="none"
                stroke="#EAE5DF"
                strokeWidth="6"
              />
              <circle
                cx="90" cy="90" r={r}
                fill="none"
                stroke="#FF5C39"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={dash}
                style={{ transition: "stroke-dashoffset 0.8s ease" }}
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-[2.25rem] font-bold tracking-[-0.04em] text-[#1A1A1A]">{mins}:{secs}</span>
              <span className="text-[11px] text-[#6B6560] uppercase tracking-[0.08em]">remaining</span>
            </div>
          </div>

          {/* Control button */}
          <button
            onClick={() => setRunning((r) => !r)}
            className="w-full py-3 rounded-[0.875rem] text-white text-[15px] font-medium transition-all"
            style={{ background: running ? "#1A1A1A" : "#FF5C39" }}
          >
            {running ? "Pause — (streak resets)" : "Start session"}
          </button>

          {/* Session type pills */}
          <div className="flex gap-2 self-stretch">
            {["25 min", "50 min", "90 min"].map((t, i) => (
              <span
                key={t}
                className={`flex-1 text-center py-1.5 rounded-lg text-[12px] font-medium transition-colors ${
                  i === 0
                    ? "bg-[#FFF0EC] text-[#FF5C39]"
                    : "bg-[#FAF8F5] text-[#6B6560]"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating streak badge */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute -right-4 top-16 bg-white rounded-2xl shadow-[0_4px_20px_rgba(26,26,26,0.12)] px-3.5 py-2.5 flex items-center gap-2.5 border border-[#EAE5DF]"
      >
        <span className="text-xl">🔥</span>
        <div>
          <div className="text-[13px] font-bold text-[#1A1A1A] leading-none">14 day streak</div>
          <div className="text-[11px] text-[#6B6560] mt-0.5">Keep going!</div>
        </div>
      </motion.div>

      {/* Floating blocker badge */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
        className="absolute -left-6 bottom-20 bg-white rounded-2xl shadow-[0_4px_20px_rgba(26,26,26,0.12)] px-3.5 py-2.5 flex items-center gap-2.5 border border-[#EAE5DF]"
      >
        <span className="w-7 h-7 rounded-full bg-[#EEF5EC] flex items-center justify-center text-base">🚫</span>
        <div>
          <div className="text-[13px] font-bold text-[#1A1A1A] leading-none">Twitter blocked</div>
          <div className="text-[11px] text-[#6B6560] mt-0.5">During sessions</div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #FF5C39 0%, transparent 70%)",
          transform: "translate(25%, -35%)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.05] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #A8C99F 0%, transparent 70%)",
          transform: "translate(-35%, 40%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 max-w-[560px]"
          >
            {/* Eyebrow */}
            <span className="inline-flex text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-[#6B6560]">
              For people who can&apos;t stop checking their phone
            </span>

            {/* Headline */}
            <h1 className="text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] font-bold text-[#1A1A1A] leading-[1.05] tracking-[-0.025em]">
              Stop{" "}
              <em
                className="not-italic"
                style={{
                  fontFamily: "var(--font-instrument-serif), Georgia, serif",
                  fontStyle: "italic",
                  color: "#FF5C39",
                }}
              >
                drifting
              </em>
              .<br />
              Start{" "}
              <em
                className="not-italic"
                style={{
                  fontFamily: "var(--font-instrument-serif), Georgia, serif",
                  fontStyle: "italic",
                  color: "#FF5C39",
                }}
              >
                finishing
              </em>
              .
            </h1>

            {/* Subhead */}
            <p className="text-[1.1rem] md:text-[1.2rem] text-[#6B6560] leading-[1.65] max-w-[480px]">
              Focusly turns the science of Pomodoro into a focus app that actually
              keeps you off Twitter. Pick a task. Hit start. Lose yourself in 25
              minutes of deep work.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[0.625rem] bg-[#FF5C39] text-white text-[1rem] font-medium hover:bg-[#E84B28] transition-colors shadow-[0_2px_12px_rgba(255,92,57,0.35)]"
              >
                Get Focusly free
                <ArrowRight size={16} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2.5 text-[1rem] text-[#1A1A1A] font-medium hover:text-[#FF5C39] transition-colors group"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full border border-[#EAE5DF] bg-white shadow-[0_1px_4px_rgba(26,26,26,0.06)] group-hover:border-[#FF5C39] transition-colors">
                  <Play size={14} className="ml-0.5 text-[#1A1A1A] group-hover:text-[#FF5C39] transition-colors" />
                </span>
                Watch the 60-second tour
              </a>
            </div>

            {/* Trust line */}
            <p className="text-[0.85rem] text-[#6B6560]">
              Free forever. No credit card.{" "}
              <span className="text-[#1A1A1A] font-medium">
                Used by 14,000+ people
              </span>{" "}
              who&apos;d rather be focused than busy.
            </p>
          </motion.div>

          {/* Right column — product mockup */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex items-center justify-center relative"
          >
            <TimerDemo />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
