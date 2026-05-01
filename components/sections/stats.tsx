"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Section } from "@/components/ui/section";

const statsData = [
  { value: 200, suffix: "+", label: "Enterprise Clients Served", description: "Across 30+ countries and 12 industries" },
  { value: 98, suffix: "%", label: "Client Satisfaction Rate", description: "Based on post-engagement NPS surveys" },
  { value: 1.2, suffix: "B+", label: "In Managed Technology Assets", description: "Cloud infrastructure under our stewardship" },
  { value: 15, suffix: "+", label: "Years of Excellence", description: "Since our founding in San Francisco" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const isDecimal = value % 1 !== 0;
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => {
        setDisplay(isDecimal ? v.toFixed(1) : Math.round(v).toString());
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <Section className="bg-foreground text-background relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5 grid-pattern" />

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-background/10">
        {statsData.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="p-10 md:p-12"
          >
            <div className="font-display text-5xl md:text-6xl font-light mb-4 text-white/90">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="font-sans text-sm font-medium text-white/70 mb-2">
              {stat.label}
            </div>
            <div className="text-xs text-white/40 font-mono leading-relaxed">
              {stat.description}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
