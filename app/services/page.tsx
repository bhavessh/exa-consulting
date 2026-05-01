import type { Metadata } from "next";
import { ServicesHero } from "@/components/sections/services-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ProcessSection } from "@/components/sections/process";
import { CTASection } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive IT consulting services — cloud architecture, cybersecurity, digital transformation, AI/ML integration, and enterprise software engineering.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <CTASection />
    </>
  );
}
