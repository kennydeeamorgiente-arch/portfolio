"use client";

import { type CSSProperties, type MouseEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/portfolio";

type StaggeredProjectCarouselProps = {
  projects: Project[];
};

function getCircularOffset(index: number, activeIndex: number, total: number) {
  const direct = index - activeIndex;
  const wrappedForward = direct + total;
  const wrappedBackward = direct - total;

  return [direct, wrappedForward, wrappedBackward].reduce((closest, current) =>
    Math.abs(current) < Math.abs(closest) ? current : closest,
  );
}

export function StaggeredProjectCarousel({
  projects,
}: StaggeredProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = projects.length;

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + total) % total);
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % total);
  }

  function handleCardMove(event: MouseEvent<HTMLAnchorElement>) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    card.style.setProperty("--tilt-x", `${y * -8}deg`);
    card.style.setProperty("--tilt-y", `${x * 8}deg`);
  }

  function resetCardTilt(event: MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  }

  if (!projects.length) {
    return null;
  }

  return (
    <div className="staggered-project-carousel">
      <div className="component-tabs" aria-hidden="true">
        <span className="is-active">Project gallery</span>
        <span>Hover for details</span>
      </div>

      <div className="project-carousel-stage" aria-label="Featured project gallery">
        <div className="project-card-deck">
          {projects.map((project, index) => {
            const offset = getCircularOffset(index, activeIndex, total);
            const distance = Math.abs(offset);
            const isVisible = distance <= 2;
            const isActive = offset === 0;

            return (
              <Link
                aria-hidden={!isVisible}
                aria-label={`Open ${project.title} project details`}
                className={`staggered-project-card ${isActive ? "is-active" : ""}`}
                href={`/projects/${project.slug}`}
                key={project.slug}
                style={
                  {
                    "--card-x": `${offset * 17}rem`,
                    "--card-y": `${distance * 1.05}rem`,
                    "--card-rotate": `${offset * -4.5}deg`,
                    "--card-scale": isActive ? "1.08" : `${1 - distance * 0.08}`,
                    "--card-opacity": isVisible ? "1" : "0",
                    "--card-z": 20 - distance,
                    "--tilt-x": "0deg",
                    "--tilt-y": "0deg",
                    pointerEvents: isVisible ? "auto" : "none",
                  } as CSSProperties
                }
                onMouseLeave={resetCardTilt}
                onMouseMove={handleCardMove}
                tabIndex={isVisible ? 0 : -1}
              >
                <div className="project-showcase-image-wrap">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    width={720}
                    height={520}
                    className="project-showcase-image"
                  />
                </div>
                <div className="project-image-caption">
                  <span>{project.year}</span>
                  <strong>{project.title}</strong>
                </div>
                <div className="project-hover-detail">
                  <span>{project.role}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="project-hover-badges">
                    {project.stack.slice(0, 4).map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <small>
                    Open case study
                    <ArrowUpRight aria-hidden="true" size={15} />
                  </small>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="project-carousel-controls">
          <button
            aria-label="Show previous project"
            onClick={showPrevious}
            type="button"
          >
            <ArrowLeft aria-hidden="true" size={18} />
          </button>
          <button aria-label="Show next project" onClick={showNext} type="button">
            <ArrowRight aria-hidden="true" size={18} />
          </button>
        </div>
      </div>

      <div className="project-carousel-dots" aria-label="Project carousel pages">
        {projects.map((project, index) => (
          <button
            aria-label={`Show ${project.title}`}
            className={index === activeIndex ? "is-active" : ""}
            key={project.slug}
            onClick={() => setActiveIndex(index)}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
