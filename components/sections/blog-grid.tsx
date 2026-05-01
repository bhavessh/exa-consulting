"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { Section } from "@/components/ui/section";
import { blogPosts } from "@/lib/data/blog";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogGrid() {
  const [featured, ...rest] = blogPosts;

  return (
    <Section>
      {/* Featured post */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <Link href={`/blog/${featured.slug}`} className="group block">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-border overflow-hidden hover:border-foreground/20 transition-colors">
            <div className="relative aspect-video lg:aspect-auto overflow-hidden bg-muted">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-mono text-accent uppercase tracking-wider">
                    {featured.category}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {featured.readTime} read
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-light leading-[1.15] mb-4 group-hover:text-foreground/80 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {featured.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                <div>
                  <p className="text-sm font-medium">{featured.author.name}</p>
                  <p className="text-xs text-muted-foreground font-mono">
                    {featured.author.role}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest group/arrow">
                  Read article
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {rest.map((post, i) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
            className="bg-background"
          >
            <Link href={`/blog/${post.slug}`} className="block group h-full">
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-accent uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-display text-xl font-light leading-[1.2] mb-3 group-hover:text-foreground/80 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground font-mono flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {formatDate(post.publishedAt)}
                  </p>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
