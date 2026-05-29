import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { getProjects } from "@/lib/portfolio-data";
import styles from "./featured-projects.module.css";

export async function FeaturedProjects() {
  const projects = await getProjects();

  return (
    <section className={styles.projectsSection} id="projects">
      <div className="section-inner section-pad">
        <div className="section-header split">
          <Reveal>
            <div>
              <p className="eyebrow">Selected Work</p>
              <h2 className="section-title">
                Featured Project
                <br />
                Case Studies
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120} variant="slide-left">
            <Link className="btn-ghost" href="/projects">
              <span>Full archive</span>
              <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2.2} />
            </Link>
          </Reveal>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <Reveal delay={index * 80} key={project.slug} variant="scale">
              <Link
                className={styles.projectCard}
                href={`/projects/${project.slug}`}
              >
                <div className={styles.cardMedia} aria-hidden="true">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.hoverCaption} aria-hidden="true">
                  <span>{project.year}</span>
                  <strong>{project.title}</strong>
                  <small>View project</small>
                </div>
                <div className={styles.cardCopy}>
                  <span className={styles.yearBadge}>{project.year}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="tag-row">
                    {project.stack.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
