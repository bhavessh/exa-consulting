"use client";

import { motion } from "framer-motion";

export function BlogHero() {
  return (
    <section className="pt-32 pb-16 md:pt-44 md:pb-20 px-6 md:px-8 lg:px-12 border-b border-border relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="max-w-7xl mx-auto relative">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-mono uppercase tracking-[0.3em] text-accent mb-6"
        >
          Insights & Perspectives
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl font-light leading-[1.05] max-w-4xl"
        >
          Thinking at the
          <br />
          <em className="not-italic gold-gradient">frontier</em> of enterprise technology.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 text-lg text-muted-foreground max-w-xl font-light"
        >
          Original research, technical deep-dives, and strategic perspectives
          from the Nexus Consulting team.
        </motion.p>
      </div>
    </section>
  );
}
