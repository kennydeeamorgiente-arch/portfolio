import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/ui/reveal";
import { getProjectBySlug, getProjects } from "@/lib/portfolio-data";
import styles from "./project-detail.module.css";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.projectDetailPage}>
      <div className="section-inner section-pad">
        <Link className="btn-ghost" href="/projects">
          Back to projects
        </Link>

        <section className={styles.projectDetailHero}>
          <Reveal>
            <div>
              <p className="eyebrow">
                {project.year} / {project.role}
              </p>
              <h1>{project.title}</h1>
              <p>{project.summary}</p>
            </div>
          </Reveal>

          <Reveal delay={140} variant="slide-left">
            <div className={`${styles.proofWindow} ${styles.projectDetailImage}`}>
              <Image
                src={project.image}
                alt={`${project.title} main screenshot`}
                width={960}
                height={640}
                className={styles.caseCardImage}
                priority
              />
            </div>
          </Reveal>
        </section>

        <section className={styles.projectEvidenceGrid}>
          {[
            ["Problem", project.problem],
            ["Solution", project.solution],
            ["Outcome", project.outcome],
          ].map(([title, copy], index) => (
            <Reveal delay={index * 90} key={title} variant="scale">
              <div className={styles.evidenceCard}>
                <h2>{title}</h2>
                <p>{copy}</p>
              </div>
            </Reveal>
          ))}
        </section>

        <Reveal>
          <section className={styles.projectStackSection}>
            <h2>Technology Stack</h2>
            <div className="tag-row">
              {project.stack.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </section>
        </Reveal>

        <section className={styles.projectProofSection}>
          <Reveal>
            <h2>Proof Images</h2>
          </Reveal>
          <div className={styles.projectProofGrid}>
            {project.proofImages.map((image, index) => (
              <Reveal delay={index * 100} key={image} variant="scale">
                <div className={styles.proofWindow}>
                  <Image
                    src={image}
                    alt={`${project.title} proof image ${index + 1}`}
                    width={900}
                    height={620}
                    className={styles.caseCardImage}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
