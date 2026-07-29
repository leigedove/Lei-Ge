import type { Metadata } from "next";
import { ExternalArrow, PageIntro } from "../components";
import { links, publications, talks } from "../site-data";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Publications and selected presentations by Lei Ge in AI for science, materials science, and computational fashion.",
};

export default function PublicationsPage() {
  return (
    <main className="inner-page shell" id="main">
      <PageIntro
        eyebrow="Research output"
        title="Publications"
        description="Peer-reviewed articles, perspectives, and current preprints across scientific language models, materials science, computer vision, and apparel engineering."
        action={
          <a
            className="inline-link"
            href={links.scholar}
            target="_blank"
            rel="noreferrer"
          >
            Google Scholar <ExternalArrow />
          </a>
        }
      />

      <section className="bibliography">
        <div className="bibliography-head">
          <span>Ref.</span>
          <span>Publication</span>
          <span>Year</span>
        </div>
        <ol className="paper-list paper-list-full">
          {publications.map((paper) => (
            <li id={paper.id.toLowerCase()} key={paper.id}>
              <span className="paper-id">{paper.id}</span>
              <div>
                <h2>{paper.title}</h2>
                <p>{paper.authors}</p>
                <em>{paper.venue}</em>
                <span className="paper-type">{paper.type}</span>
              </div>
              <time>{paper.year}</time>
              {paper.href ? (
                <a
                  href={paper.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${paper.title}`}
                >
                  ↗
                </a>
              ) : (
                <span aria-hidden="true">·</span>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="talks-section">
        <header>
          <span>Selected presentations</span>
          <h2>Talks & posters</h2>
        </header>
        <div className="talk-list">
          {talks.map((talk) => (
            <article key={talk.id}>
              <span>{talk.id}</span>
              <div>
                <h3>{talk.title}</h3>
                <p>{talk.event}</p>
              </div>
              <span className="talk-type">{talk.type}</span>
              <time>{talk.year}</time>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
