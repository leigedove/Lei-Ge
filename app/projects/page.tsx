import type { Metadata } from "next";
import Link from "next/link";
import { ExternalArrow, PageIntro } from "../components";
import { publications, research } from "../site-data";

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
            <figure className="project-visual">
              <img
                src={project.image}
                alt={project.imageAlt}
                width="1536"
                height="1024"
                loading={project.number === "01" ? "eager" : "lazy"}
              />
              <figcaption>
                <span>{project.number}</span>
                <time>{project.year}</time>
              </figcaption>
            </figure>
            <div className="project-body">
              <p className="project-institution">{project.institution}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <footer className="project-footer">
                <span>Research output</span>
                <div className="project-paper-links">
                  {project.paperIds.map((paperId) => {
                    const paper = publications.find(
                      (item) => item.id === paperId,
                    );
                    const label = paperIdsLabel(project.paperIds, paperId);

                    return paper?.href ? (
                      <a
                        href={paper.href}
                        target="_blank"
                        rel="noreferrer"
                        key={paperId}
                      >
                        {label} <ExternalArrow />
                      </a>
                    ) : (
                      <Link
                        href={`/publications#${paperId.toLowerCase()}`}
                        key={paperId}
                      >
                        {label} <span aria-hidden="true">→</span>
                      </Link>
                    );
                  })}
                </div>
              </footer>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function paperIdsLabel(paperIds: string[], paperId: string) {
  return paperIds.length > 1 ? `Paper ${paperId}` : "View paper";
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
