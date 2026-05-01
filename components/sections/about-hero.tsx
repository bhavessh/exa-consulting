"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-28 px-6 md:px-8 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-accent mb-6">
            Our Story
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.0] max-w-5xl"
        >
          Fifteen years at the
          <br />
          <em className="not-italic gold-gradient">intersection</em> of
          <br />
          technology and ambition.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl"
        >
          <p className="text-muted-foreground text-lg leading-relaxed font-light">
            Founded in 2009 in San Francisco, Nexus began as a small team of
            engineers who believed that technology consulting could be done
            differently — with rigor, honesty, and an obsessive focus on
            outcomes.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed font-light">
            Today, we are a global firm of 400+ technologists and strategists
            serving Fortune 500 companies across three continents. Our founding
            philosophy remains unchanged: technology exists to serve business,
            not the other way around.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
