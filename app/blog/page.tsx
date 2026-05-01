import type { Metadata } from "next";
import { BlogHero } from "@/components/sections/blog-hero";
import { BlogGrid } from "@/components/sections/blog-grid";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, perspectives, and technical deep-dives from the Nexus Consulting team on enterprise IT, cloud strategy, and digital transformation.",
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
    </>
  );
}
