import { Reveal } from "@/components/ui/reveal";
import { education } from "@/content/education";

const awards = [
  "Graduated Cum Laude, Batch 2026",
  "Dean's Lister for consistent academic excellence from 2023 to 2026",
  "Special Recognition Award for excellence in the design and implementation of the FUSOMS platform",
  "Graduated With Honors in Senior High School",
];

export function EducationSection() {
  return (
    <section className="education-section" id="education">
      <div className="section-inner section-pad">
        <Reveal>
          <div className="section-header">
            <p className="eyebrow">Education</p>
            <h2 className="section-title">
              Academic
              <br />
              Background
            </h2>
            <p className="section-subtitle">
              Formal education and academic recognition, separated from work
              experience and project case studies.
            </p>
          </div>
        </Reveal>

        <div className="education-layout">
          <Reveal variant="slide-right">
            <aside className="awards-card">
              <h3>Awards & Recognition</h3>
              <div className="award-list">
                {awards.map((award, index) => (
                  <div className="award-item" key={award}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{award}</p>
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>

          <div className="education-card-list">
            {education.map((item, index) => (
              <Reveal delay={220 + index * 80} key={item.program}>
                <article className="education-card">
                  <p className="education-period">{item.period}</p>
                  <p className="education-school">{item.institution}</p>
                  <h3>{item.program}</h3>
                  <em>{item.focus}</em>
                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
