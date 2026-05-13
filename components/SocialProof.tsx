"use client";

const testimonials = [
  {
    quote: "The no-pause rule changed everything for me. First app I've used consistently for more than a week.",
    name: "Devon T.",
    role: "Software engineer",
  },
  {
    quote: "My client deliveries are 2x faster. I don't know how I worked before this.",
    name: "Maya R.",
    role: "Freelance illustrator",
  },
  {
    quote: "47,000 words added to my dissertation in 9 months. That's the real number.",
    name: "Priya S.",
    role: "PhD candidate",
  },
  {
    quote: "I've tried every productivity app. Focusly is the only one that actually costs something to quit.",
    name: "James K.",
    role: "Product designer",
  },
  {
    quote: "Turns out I needed a commitment, not a calendar. Who knew.",
    name: "Sasha M.",
    role: "Copywriter",
  },
  {
    quote: "The streak feature is quietly the most motivating thing I've added to my workday.",
    name: "Tom L.",
    role: "Indie developer",
  },
  {
    quote: "I used to think Pomodoro was for people who weren't busy enough. I was wrong.",
    name: "Ari W.",
    role: "Marketing lead",
  },
  {
    quote: "Three months in. Longest I've gone without opening Instagram during work. Ever.",
    name: "Clara B.",
    role: "UX researcher",
  },
];

const doubled = [...testimonials, ...testimonials];

export default function SocialProof() {
  return (
    <section className="py-12 border-y border-[#EAE5DF] overflow-hidden">
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          animation: ticker 40s linear infinite;
          width: max-content;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Edge fades */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #FAF8F5, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #FAF8F5, transparent)" }} />

        <div className="ticker-track flex items-stretch gap-4 px-2">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] bg-white rounded-2xl border border-[#EAE5DF] px-5 py-4 shadow-[0_1px_3px_rgba(26,26,26,0.05)] flex flex-col gap-3"
            >
              <p className="text-[0.875rem] text-[#3D3832] leading-[1.6]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-2.5 pt-1 border-t border-[#EAE5DF]">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[0.625rem] font-bold text-white flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #FF5C39, #E84B28)" }}
                >
                  {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div className="min-w-0">
                  <span className="text-[0.8125rem] font-semibold text-[#1A1A1A]">{t.name}</span>
                  <span className="text-[0.8125rem] text-[#6B6560]"> · {t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
