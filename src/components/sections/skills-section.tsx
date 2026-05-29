import type { CSSProperties } from "react";
import { Reveal } from "@/components/ui/reveal";
import { skillGroups } from "@/content/skills";
import styles from "./skills-section.module.css";

const marqueeRows = [
  [
    "React",
    "JavaScript",
    "TypeScript",
    "jQuery",
    "AJAX",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Node.js",
    "PHP",
    "CodeIgniter4",
    "REST APIs",
    "OAuth 2.0",
    "MySQL",
    "PostgreSQL",
    "Supabase",
  ],
  [
    "Vector Embeddings",
    "Git",
    "CSV Export",
    "Codex",
    "ChatGPT",
    "Prompt Engineering",
    "System Design",
    "Figma",
    "WordPress",
    "API Integration",
    "WebSockets",
    "Ollama",
    "OpenAI",
    "Xendit",
    "GCash",
  ],
];

export function SkillsSection() {
  return (
    <section className={styles.skillsSection} id="skills">
      <div className="section-inner section-pad">
        <Reveal>
          <div className="section-header">
            <p className="eyebrow">Core Skills</p>
            <h2 className="section-title">
              Technical
              <br />
              Capabilities
            </h2>
            <p className="section-subtitle">
              A focused view of the stack I use across interface work, backend
              workflows, databases, delivery, and AI-assisted development.
            </p>
          </div>
        </Reveal>

        <div
          className={styles.marqueeFull}
          aria-label="Auto-scrolling technical skills"
        >
          {marqueeRows.map((row, rowIndex) => (
            <div
              className={[
                styles.marqueeRow,
                rowIndex === 1 ? styles.isReverse : "",
              ]
                .filter(Boolean)
                .join(" ")}
              key={row.join("-")}
            >
              <div className={styles.marqueeTrack}>
                {[...row, ...row].map((skill, index) => (
                  <span key={`${skill}-${index}`}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.categoryGrid}>
          {skillGroups.map((group, index) => (
            <Reveal
              className={styles.skillReveal}
              delay={index * 80}
              key={group.title}
              variant="scale"
            >
              <article className={styles.skillCat}>
                <div className={styles.skillBadge}>
                  <span>{group.signal}</span>
                  <small>{String(index + 1).padStart(2, "0")}</small>
                </div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className={styles.skillBar} aria-hidden="true">
                  <span
                    className={styles.skillBarFill}
                    style={
                      {
                        "--bar-width": `${group.barWidth}%`,
                      } as CSSProperties
                    }
                  />
                </div>
                <div className={styles.skillTagRow}>
                  {group.items.map((item) => (
                    <span className={styles.skillTag} key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
