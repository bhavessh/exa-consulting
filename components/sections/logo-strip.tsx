"use client";

import { motion } from "framer-motion";

const companies = [
  "Meridian Financial",
  "Apex Healthcare",
  "Global Logistics",
  "Thornton Mfg.",
  "Vertex Capital",
  "Pacific Dynamics",
  "Orion Systems",
  "Summit Corp.",
];

export function LogoStrip() {
  return (
    <div className="border-y border-border py-10 bg-muted/30 overflow-hidden">
      <p className="text-center text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground mb-8">
        Trusted by industry leaders
      </p>
      <div className="flex gap-16 overflow-hidden">
        <motion.div
          className="flex gap-16 items-center shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[...companies, ...companies].map((company, i) => (
            <span
              key={i}
              className="font-display text-lg font-light text-muted-foreground/50 whitespace-nowrap hover:text-muted-foreground transition-colors"
            >
              {company}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
