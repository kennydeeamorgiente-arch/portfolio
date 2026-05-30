import { Contact } from "@/components/sections/Contact";
import { Certifications } from "@/components/sections/Certifications";
import { Education } from "@/components/sections/Education";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { BackToTopButton } from "@/components/ui/BackToTopButton";
import { FloatingNav } from "@/components/ui/FloatingNav";

export default function Home() {
  return (
    <main>
      <FloatingNav />
      <Hero />
      <TechStack />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <BackToTopButton />
    </main>
  );
}
