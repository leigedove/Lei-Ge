import type { Metadata } from "next";
import { PageIntro } from "../components";
import { research } from "../site-data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Research projects by Lei Ge across scientific language models, materials science, interpretability, and computational fashion.",
};

function ProjectGroup({
  label,
  title,
  projects,
  id,
}: {
  label: string;
  title: string;
  projects: typeof research;
  id?: string;
}) {
  return (
    <section className="project-group" id={id}>
      <header>
        <span>{label}</span>
        <h2>{title}</h2>
      </header>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-entry" key={project.number}>
            <div className="project-meta">
              <span>{project.number}</span>
              <time>{project.year}</time>
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <aside>
              <span>{project.institution}</span>
              <strong>Related: {project.output}</strong>
            </aside>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <main className="inner-page shell" id="main">
      <PageIntro
        eyebrow="Research"
        title="Projects"
        description="My work connects language models, scientific reasoning, and physical systems. It spans both current research in AI for science and an earlier body of work in computational fashion."
      />
      <ProjectGroup
        label="A"
        title="Scientific AI"
        projects={research.slice(0, 4)}
      />
      <ProjectGroup
        label="B"
        title="Computational fashion"
        projects={research.slice(4)}
        id="fashion"
      />
    </main>
  );
}
