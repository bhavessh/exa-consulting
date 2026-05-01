"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { services } from "@/lib/data/services";

export function ServicesGrid() {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
            className="bg-background p-10 group relative overflow-hidden"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />
            <div className="relative">
              <div className="mb-6 w-11 h-11 border border-border flex items-center justify-center group-hover:border-foreground/20 transition-colors">
                <service.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-light mb-2">
                {service.title}
              </h3>
              <p className="text-xs font-mono text-accent mb-4 uppercase tracking-wider">
                {service.tagline}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-xs text-muted-foreground font-mono">
                    <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
