import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/ui/reveal";
import { getProjectBySlug, getProjects } from "@/lib/portfolio-data";

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
    <main className="project-detail-page">
      <div className="section-inner section-pad">
        <Link className="btn-ghost" href="/projects">
          Back to projects
        </Link>

        <section className="project-detail-hero">
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
            <div className="proof-window project-detail-image">
              <Image
                src={project.image}
                alt={`${project.title} main screenshot`}
                width={960}
                height={640}
                className="case-card-image"
                priority
              />
            </div>
          </Reveal>
        </section>

        <section className="project-evidence-grid">
          {[
            ["Problem", project.problem],
            ["Solution", project.solution],
            ["Outcome", project.outcome],
          ].map(([title, copy], index) => (
            <Reveal delay={index * 90} key={title} variant="scale">
              <div className="evidence-card">
                <h2>{title}</h2>
                <p>{copy}</p>
              </div>
            </Reveal>
          ))}
        </section>

        <Reveal>
          <section className="project-stack-section">
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

        <section className="project-proof-section">
          <Reveal>
            <h2>Proof Images</h2>
          </Reveal>
          <div className="project-proof-grid">
            {project.proofImages.map((image, index) => (
              <Reveal delay={index * 100} key={image} variant="scale">
                <div className="proof-window">
                  <Image
                    src={image}
                    alt={`${project.title} proof image ${index + 1}`}
                    width={900}
                    height={620}
                    className="case-card-image"
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
