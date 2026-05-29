import type { Metadata } from "next";
import { ProjectCard } from "@/components/ui/project-card";
import { Reveal } from "@/components/ui/reveal";
import { getProjects } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected portfolio projects with screenshots, proof images, stack, and outcomes.",
};

export const revalidate = 60;

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="archive-page">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <Reveal>
          <div className="archive-heading">
            <p>Selected work</p>
            <h1>Project archive with proof trails</h1>
            <span>
              Every file includes the problem, role, stack, outcome, and image
              evidence behind the build.
            </span>
          </div>
        </Reveal>
        <div className="archive-grid">
          {projects.map((project, index) => (
            <Reveal delay={index * 90} key={project.slug} variant="scale">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
