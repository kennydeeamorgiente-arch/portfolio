import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/portfolio";
import styles from "./project-card.module.css";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link className={styles.archiveFile} href={`/projects/${project.slug}`}>
      <div className={styles.archiveThumb}>
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          width={900}
          height={620}
          className={styles.archiveImage}
        />
      </div>
      <div className={styles.archiveCopy}>
        <div className={styles.archiveMeta}>
          <span>{project.year}</span>
          <span>{project.role}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className={styles.archiveStack}>
          {project.stack.slice(0, 4).map((item) => (
            <span className={styles.stackChip} key={item}>
              {item}
            </span>
          ))}
        </div>
        <div className={styles.caseProgress} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </Link>
  );
}
