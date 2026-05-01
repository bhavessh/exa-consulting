import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about-hero";
import { TeamSection } from "@/components/sections/team";
import { ValuesSection } from "@/components/sections/values";
import { CTASection } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the team behind Nexus Consulting — seasoned technologists and strategists who've built and scaled digital infrastructure for the world's most demanding organizations.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ValuesSection />
      <TeamSection />
      <CTASection />
    </>
  );
}
