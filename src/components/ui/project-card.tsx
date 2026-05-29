import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      className="archive-file group"
      href={`/projects/${project.slug}`}
    >
      <div className="archive-thumb proof-window">
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          width={900}
          height={620}
          className="case-card-image"
        />
      </div>
      <div className="archive-copy">
        <div className="archive-meta">
          <span>{project.year}</span>
          <span>{project.role}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="archive-stack">
          {project.stack.slice(0, 4).map((item) => (
            <span className="stack-chip" key={item}>
              {item}
            </span>
          ))}
        </div>
        <div className="case-progress" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </Link>
  );
}
