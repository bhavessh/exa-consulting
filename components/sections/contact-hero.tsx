"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Mail } from "lucide-react";

export function ContactHero() {
  return (
    <section className="pt-32 pb-16 md:pt-44 md:pb-20 px-6 md:px-8 lg:px-12 border-b border-border relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs font-mono uppercase tracking-[0.3em] text-accent mb-6"
            >
              Get In Touch
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl font-light leading-[1.05]"
            >
              Let&apos;s start
              <br />
              a <em className="not-italic gold-gradient">conversation.</em>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {[
              {
                icon: MapPin,
                label: "Offices",
                value: "San Francisco · London · Singapore",
              },
              {
                icon: Clock,
                label: "Response time",
                value: "Within 24 business hours",
              },
              {
                icon: Mail,
                label: "Direct email",
                value: "hello@nexusconsulting.com",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-9 h-9 border border-border flex items-center justify-center shrink-0 mt-0.5">
                  <item.icon className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
