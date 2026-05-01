"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Accent orb */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-foreground/3 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-32">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="flex items-center gap-3 mb-10"
          >
            <div className="h-px w-12 bg-accent" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-accent">
              Enterprise IT Consulting
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.0] tracking-tight text-balance"
          >
            We architect
            <br />
            <em className="not-italic gold-gradient">digital futures</em>
            <br />
            for industry leaders.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.25}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light"
          >
            From cloud architecture to AI integration, Nexus delivers
            enterprise-grade technology strategy and execution for organizations
            that refuse to settle.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                Schedule a Consultation
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Our Services
              </Button>
            </Link>
          </motion.div>

          {/* Metrics strip */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.55}
            className="mt-20 grid grid-cols-3 gap-8 max-w-lg"
          >
            {[
              { n: "200+", label: "Enterprise Clients" },
              { n: "98%", label: "Satisfaction Rate" },
              { n: "15+", label: "Years of Excellence" },
            ].map((m) => (
              <div key={m.label}>
                <div className="font-display text-3xl md:text-4xl font-light gold-gradient">
                  {m.n}
                </div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-mono">
                  {m.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
