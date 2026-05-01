"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We spend time deeply understanding your business, existing technology landscape, team capabilities, and strategic goals before recommending anything.",
  },
  {
    number: "02",
    title: "Architecture",
    description: "Our senior architects design a solution tailored to your context — not a template. Every recommendation is justified with data and alternatives considered.",
  },
  {
    number: "03",
    title: "Execution",
    description: "We implement with your team, not alongside it. Knowledge transfer is built into every sprint so your engineers grow through the engagement.",
  },
  {
    number: "04",
    title: "Optimization",
    description: "Post-delivery, we monitor outcomes against the targets we defined in Discovery. Real accountability, not just handoffs.",
  },
];

export function ProcessSection() {
  return (
    <Section className="bg-muted/20">
      <SectionHeader
        eyebrow="How We Work"
        title="A process built for complex problems."
        subtitle="Our engagement model is designed to maximize knowledge transfer and minimize dependency on external consultants."
      />

      <div className="relative">
        {/* Connecting line */}
        <div className="absolute top-6 left-6 md:left-0 md:top-6 md:h-px md:w-full h-full w-px bg-border md:block hidden" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative md:px-8 first:pl-0 last:pr-0"
            >
              <div className="w-12 h-12 border border-border bg-background flex items-center justify-center mb-6 relative z-10">
                <span className="font-mono text-xs text-accent">{step.number}</span>
              </div>
              <h3 className="font-display text-xl font-light mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
