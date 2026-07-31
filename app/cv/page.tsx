import type { Metadata } from "next";
import { ExternalArrow, PageIntro } from "../components";
import {
  academicService,
  appointments,
  education,
  industry,
  links,
  publications,
  research,
  reviewVenues,
  talks,
} from "../site-data";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Curriculum vitae of Lei Ge, PhD candidate at Imperial College London.",
};

function CvSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="cv-section" id={id}>
      <header>
        <span>{number}</span>
        <h2>{title}</h2>
      </header>
      {children}
    </section>
  );
}

function TimelineEntries({
  entries,
}: {
  entries: {
    date: string;
    place: string;
    href?: string;
    role: string;
    details: string[];
  }[];
}) {
  return (
    <div className="cv-timeline">
      {entries.map((entry) => (
        <article key={entry.date + entry.place}>
          <time>{entry.date}</time>
          <div>
            {entry.href ? (
              <a
                className="cv-place-link"
                href={entry.href}
                target="_blank"
                rel="noreferrer"
              >
                {entry.place} <ExternalArrow />
              </a>
            ) : (
              <span>{entry.place}</span>
            )}
            <h3>{entry.role}</h3>
            <ul>
              {entry.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function CvPage() {
  return (
    <main className="inner-page shell" id="main">
      <PageIntro
        eyebrow="Curriculum vitae"
        title="Lei Ge (雷鸽)"
        description={
          <>
            PhD Candidate in Design Engineering at{" "}
            <a href={links.imperial} target="_blank" rel="noreferrer">
              Imperial College London
            </a>{" "}
            · LLM Machine Learning Engineer at{" "}
            <a href={links.polaron} target="_blank" rel="noreferrer">
              Polaron
            </a>{" "}
            · London, UK
          </>
        }
        action={
          <a className="download-link" href={links.cv}>
            Download PDF CV ↓
          </a>
        }
      />

      <div className="cv-layout">
        <aside className="cv-sidebar">
          <div>
            <span>Contact</span>
            <a href={links.email}>g.lei23@imperial.ac.uk</a>
            <a href={links.scholar} target="_blank" rel="noreferrer">
              Google Scholar <ExternalArrow />
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ExternalArrow />
            </a>
          </div>
          <nav aria-label="CV sections">
            <a href="#appointments">Appointments</a>
            <a href="#education">Education</a>
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
            <a href="#presentations">Presentations</a>
            <a href="#service">Service</a>
            <a href="#industry">Industry</a>
          </nav>
          <div>
            <span>Research interests</span>
            <p>
              Large language models · AI for materials science · LLM agents ·
              Interpretable AI · Computational fashion
            </p>
          </div>
        </aside>

        <div className="cv-content">
          <CvSection id="appointments" number="01" title="Current appointments">
            <TimelineEntries entries={appointments} />
          </CvSection>

          <CvSection id="education" number="02" title="Education">
            <TimelineEntries entries={education} />
          </CvSection>

          <CvSection id="research" number="03" title="Research experience">
            <div className="cv-research-list">
              {research.map((project) => (
                <article key={project.number}>
                  <time>{project.year}</time>
                  <div>
                    <span>{project.institution}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </CvSection>

          <CvSection id="publications" number="04" title="Publications">
            <ol className="cv-output-list">
              {publications.map((paper) => (
                <li key={paper.id}>
                  <span>{paper.id}</span>
                  <p>
                    <strong>{paper.authors}.</strong>{" "}
                    {paper.href ? (
                      <a
                        href={paper.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {paper.title} <ExternalArrow />
                      </a>
                    ) : (
                      paper.title
                    )}
                    .{" "}
                    <em>{paper.venue}</em>, {paper.year}.
                  </p>
                </li>
              ))}
            </ol>
          </CvSection>

          <CvSection id="presentations" number="05" title="Presentations">
            <ol className="cv-presentation-list">
              {talks.map((talk) => (
                <li key={talk.id}>
                  <span>{talk.id}</span>
                  <div>
                    <div className="cv-presentation-meta">
                      <span
                        className={`talk-type talk-type--${talk.type.toLowerCase()}`}
                      >
                        {talk.type}
                      </span>
                      <time>{talk.year}</time>
                    </div>
                    <h3>{talk.title}</h3>
                    <p>{talk.event}</p>
                  </div>
                </li>
              ))}
            </ol>
          </CvSection>

          <CvSection id="service" number="06" title="Academic service">
            <div className="cv-service-list">
              {academicService.map((item) => (
                <article key={item.title}>
                  <time>{item.date}</time>
                  <div>
                    <span>{item.place}</span>
                    <h3>{item.title}</h3>
                    <ul>
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer">
                        Website <ExternalArrow />
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
            <div className="cv-reviewer-block">
              <div>
                <span>Peer review</span>
                <h3>Journal reviewer</h3>
              </div>
              <p>
                Reviewer for {reviewVenues.slice(0, -1).join(", ")}, and{" "}
                {reviewVenues.at(-1)}.
              </p>
            </div>
          </CvSection>

          <CvSection id="industry" number="07" title="Industry experience">
            <TimelineEntries entries={industry} />
          </CvSection>
        </div>
      </div>
    </main>
  );
}
