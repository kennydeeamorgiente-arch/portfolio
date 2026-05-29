import type { CSSProperties } from "react";
import { Reveal } from "@/components/ui/reveal";
import { skillGroups } from "@/content/skills";

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
    <section className="skills-section" id="skills">
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

        <div className="skill-marquee-full" aria-label="Auto-scrolling technical skills">
          {marqueeRows.map((row, rowIndex) => (
            <div
              className={`skill-marquee-row ${rowIndex === 1 ? "is-reverse" : ""}`}
              key={row.join("-")}
            >
              <div className="skill-marquee-track">
                {[...row, ...row].map((skill, index) => (
                  <span key={`${skill}-${index}`}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skill-category-grid">
          {skillGroups.map((group, index) => (
            <Reveal delay={index * 80} key={group.title} variant="scale">
              <article className="skill-cat">
                <div className="skill-cat-badge">
                  <span>{group.signal}</span>
                  <small>{String(index + 1).padStart(2, "0")}</small>
                </div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="skill-bar" aria-hidden="true">
                  <span
                    className="skill-bar-fill"
                    style={
                      {
                        "--bar-width": `${group.barWidth}%`,
                      } as CSSProperties
                    }
                  />
                </div>
                <div className="skill-tag-row">
                  {group.items.map((item) => (
                    <span className="skill-tag" key={item}>
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
