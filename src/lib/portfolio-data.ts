import { cache } from "react";
import { certifications } from "@/content/certifications";
import { projects } from "@/content/projects";
import type { Certification, Project } from "@/types/portfolio";

export const getProjects = cache(async (): Promise<Project[]> => {
  return projects;
});

export async function getFeaturedProjects() {
  const projects = await getProjects();
  return projects.filter((project) => project.featured);
}

export async function getProjectBySlug(slug: string) {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug);
}

export const getCertifications = cache(async (): Promise<Certification[]> => {
  return certifications;
});
