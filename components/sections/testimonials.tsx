"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { testimonials } from "@/lib/data/team";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <Section className="bg-muted/20">
      <SectionHeader
        eyebrow="Client Voices"
        title="Results that speak."
      />

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <Quote className="w-12 h-12 text-accent/40 mb-8 mx-auto" />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 40 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-light leading-[1.3] text-balance mb-10 text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-px bg-accent mb-4" />
                <p className="font-sans text-sm font-medium">{t.author}</p>
                <p className="text-xs text-muted-foreground font-mono">
                  {t.role}, {t.company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-14">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`h-px transition-all duration-300 ${
                  i === current ? "w-10 bg-foreground" : "w-4 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => navigate(1)}
            className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Section>
  );
}
