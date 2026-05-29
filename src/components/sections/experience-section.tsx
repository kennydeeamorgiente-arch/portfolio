import { Reveal } from "@/components/ui/reveal";
import { experiences } from "@/content/experience";
import styles from "./experience-section.module.css";

export function ExperienceSection() {
  return (
    <section className={styles.experienceSection} id="experience">
      <div className="section-inner section-pad">
        <Reveal>
          <div className="section-header">
            <p className="eyebrow">Experience</p>
            <h2 className="section-title">
              Applied Full-Stack
              <br />
              Work
            </h2>
            <p className="section-subtitle">
              Real systems from internship and part-time development work,
              separated from academic education so the resume structure is
              clearer.
            </p>
          </div>
        </Reveal>

        <div className={styles.experienceList}>
          {experiences.map((item, index) => (
            <Reveal delay={index * 120} key={`${item.company}-${item.role}`}>
              <article className={styles.experienceRecord}>
                <div className={styles.meta}>
                  <span>{item.period}</span>
                  <strong>{item.role}</strong>
                </div>
                <div className={styles.body}>
                  <p>{item.company}</p>
                  <h3>{item.summary}</h3>
                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  {item.stack ? (
                    <div className="tag-row">
                      {item.stack.map((stackItem) => (
                        <span className="tag" key={stackItem}>
                          {stackItem}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
