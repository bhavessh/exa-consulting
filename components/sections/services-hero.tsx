"use client";

import { motion } from "framer-motion";

export function ServicesHero() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-28 px-6 md:px-8 lg:px-12 relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="max-w-7xl mx-auto relative">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-mono uppercase tracking-[0.3em] text-accent mb-6"
        >
          What We Do
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl font-light leading-[1.05] max-w-4xl"
        >
          Every service built around
          <br />
          <em className="not-italic gold-gradient">your outcomes.</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 text-lg text-muted-foreground max-w-2xl font-light"
        >
          Our service portfolio spans the full enterprise technology stack — from
          architecture strategy to production implementation and ongoing
          optimization.
        </motion.p>
      </div>
    </section>
  );
}
