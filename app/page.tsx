import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { StatsSection } from "@/components/sections/stats";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta";
import { LogoStrip } from "@/components/sections/logo-strip";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexus Consulting — Enterprise IT Strategy & Digital Transformation",
  description:
    "We partner with ambitious enterprises to architect their digital future. From cloud infrastructure to AI integration, we deliver measurable outcomes.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoStrip />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
