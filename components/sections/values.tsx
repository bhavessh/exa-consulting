"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";

const values = [
  {
    number: "01",
    title: "Outcomes over Activity",
    description:
      "We measure ourselves by your business results, not the hours we log or the slides we produce. Every engagement has clear, measurable success criteria defined upfront.",
  },
  {
    number: "02",
    title: "Radical Transparency",
    description:
      "We tell clients what they need to hear, not what they want to hear. Our reputation is built on honesty, including the uncomfortable kind.",
  },
  {
    number: "03",
    title: "Technical Excellence",
    description:
      "We hire the top 2% of technologists. Our standards are uncompromising because we work on systems where failure has real consequences.",
  },
  {
    number: "04",
    title: "Long-term Partnership",
    description:
      "We don't optimize for contract renewals. We optimize for becoming your most trusted technology partner — one that grows with your organization.",
  },
];

export function ValuesSection() {
  return (
    <Section className="bg-muted/20">
      <SectionHeader
        eyebrow="What We Stand For"
        title="Principles that guide every engagement."
        align="left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {values.map((value, i) => (
          <motion.div
            key={value.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="bg-background p-10 md:p-12"
          >
            <span className="font-mono text-xs text-accent tracking-widest">
              {value.number}
            </span>
            <h3 className="font-display text-2xl font-light mt-4 mb-4">
              {value.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
