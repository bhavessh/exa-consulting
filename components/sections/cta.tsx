"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8 lg:px-12 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-accent mb-5">
              Ready to Begin?
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] text-balance">
              Let&apos;s build something
              <em className="not-italic"> extraordinary</em> together.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                Start a Conversation
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Services
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent origin-left"
        />
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
          <p className="text-xs font-mono text-muted-foreground">
            Response within 24 business hours
          </p>
          <p className="text-xs font-mono text-muted-foreground">
            San Francisco · London · Singapore
          </p>
        </div>
      </div>
    </section>
  );
}
