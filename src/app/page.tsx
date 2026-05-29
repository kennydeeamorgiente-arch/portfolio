import { CertificationGrid } from "@/components/sections/certification-grid";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { HeroSection } from "@/components/sections/hero-section";
import { SkillsSection } from "@/components/sections/skills-section";

export const revalidate = 60;

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProjects />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationGrid limit={3} />
      <ContactSection />
    </main>
  );
}
