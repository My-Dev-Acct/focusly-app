"use client";

import { motion } from "framer-motion";

const companies = [
  { name: "Linear", logo: "Linear" },
  { name: "Vercel", logo: "▲ Vercel" },
  { name: "Notion", logo: "Notion" },
  { name: "Figma", logo: "Figma" },
  { name: "Webflow", logo: "Webflow" },
  { name: "Loom", logo: "Loom" },
];

export default function SocialProof() {
  return (
    <section className="py-12 border-y border-[#EAE5DF]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8"
        >
          <p className="text-[0.8125rem] uppercase tracking-[0.1em] text-[#6B6560] font-medium">
            Trusted by focused humans at
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {companies.map((company, i) => (
              <motion.span
                key={company.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="text-[1rem] font-semibold tracking-tight"
                style={{ color: "#C4BDB6" }}
              >
                {company.logo}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
