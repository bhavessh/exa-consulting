"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { team } from "@/lib/data/team";

export function TeamSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="The Team"
        title="Led by practitioners, not theorists."
        subtitle="Our leadership team has built and scaled technology at the world's most demanding organizations."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, i) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="group"
          >
            {/* Avatar placeholder */}
            <div className="w-full aspect-square bg-gradient-to-br from-muted to-secondary mb-6 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-6xl font-light text-muted-foreground/30">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />

              {/* Social overlay */}
              <div className="absolute bottom-0 left-0 right-0 flex gap-2 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-foreground/10 to-transparent">
                <a
                  href={member.linkedin}
                  className="w-8 h-8 bg-background/90 flex items-center justify-center hover:bg-background transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href={member.twitter}
                  className="w-8 h-8 bg-background/90 flex items-center justify-center hover:bg-background transition-colors"
                >
                  <Twitter className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <h3 className="font-display text-xl font-light mb-0.5">
              {member.name}
            </h3>
            <p className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
              {member.role}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {member.bio}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {member.expertise.map((e) => (
                <span
                  key={e}
                  className="text-xs font-mono px-2 py-1 border border-border text-muted-foreground"
                >
                  {e}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
