"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { services } from "@/lib/data/services";

export function ServicesSection() {
  const featured = services.slice(0, 4);

  return (
    <Section className="bg-background">
      <SectionHeader
        eyebrow="Our Expertise"
        title="Technology solutions that scale with ambition."
        subtitle="We specialize in the disciplines that matter most to enterprise organizations building for the next decade."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {featured.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="bg-background p-10 md:p-12 group relative overflow-hidden"
          >
            {/* Hover gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            <div className="relative">
              <div className="mb-6 w-12 h-12 border border-border flex items-center justify-center group-hover:border-foreground/30 transition-colors">
                <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>

              <h3 className="font-display text-2xl font-light mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="grid grid-cols-2 gap-1.5 mb-8">
                {service.features.map((f) => (
                  <li key={f} className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent inline-block" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-foreground group/link"
              >
                Learn more
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group"
        >
          View all services
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </motion.div>
    </Section>
  );
}
