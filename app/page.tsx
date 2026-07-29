import Link from "next/link";
import { ExternalArrow, SectionHeader } from "./components";
import { links, news, publications, research } from "./site-data";

export default function Home() {
  return (
    <main id="main">
      <section className="profile-hero shell">
        <div className="profile-copy">
          <p className="eyebrow-label">Hello, I&apos;m</p>
          <h1>Lei Ge</h1>
          <p className="profile-role">
            PhD Candidate in Design Engineering
            <br />
            Imperial College London
          </p>
          <p className="profile-summary">
            I research large language models for scientific discovery,
            focusing on materials science, interpretability, sparse-data
            optimization, and agentic systems. My earlier work in fashion
            design and engineering continues to shape how I think about
            computation, geometry, and the physical world.
          </p>
          <div className="profile-links">
            <a href={links.email}>Email <ExternalArrow /></a>
            <a href={links.scholar} target="_blank" rel="noreferrer">
              Google Scholar <ExternalArrow />
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ExternalArrow />
            </a>
            <a href={links.cv}>PDF CV ↓</a>
          </div>
        </div>
        <aside className="profile-aside">
          <img
            src="/lei-ge.jpg"
            alt="Lei Ge at Imperial College London"
          />
          <dl>
            <div>
              <dt>Current</dt>
              <dd>PhD Candidate, Imperial</dd>
            </div>
            <div>
              <dt>Also</dt>
              <dd>LLM ML Engineer, Polaron</dd>
            </div>
            <div>
              <dt>Research</dt>
              <dd>LLMs · AI for Science · Agents</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>London, UK</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="compact-section shell">
        <SectionHeader
          label="01"
          title="Research highlights"
          link={{ href: "/projects", text: "All projects" }}
        />
        <div className="highlight-list">
          {research.slice(0, 3).map((project) => (
            <Link
              className="highlight-row"
              href="/projects"
              key={project.number}
            >
              <span className="row-index">{project.number}</span>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <span className="row-meta">{project.year}</span>
              <span className="row-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="compact-section shell">
        <SectionHeader label="02" title="News" />
        <div className="news-list">
          {news.slice(0, 5).map((item) => {
            const content = (
              <>
                <time>{item.date}</time>
                <span className="news-kind">{item.kind}</span>
                <span>{item.text}</span>
                <span className="row-arrow" aria-hidden="true">
                  {item.href ? "↗" : "·"}
                </span>
              </>
            );
            return item.href ? (
              <a
                className="news-row"
                href={item.href}
                target="_blank"
                rel="noreferrer"
                key={item.text}
              >
                {content}
              </a>
            ) : (
              <div className="news-row" key={item.text}>
                {content}
              </div>
            );
          })}
        </div>
      </section>

      <section className="compact-section shell">
        <SectionHeader
          label="03"
          title="Selected publications"
          link={{ href: "/publications", text: "All publications" }}
        />
        <ol className="paper-list">
          {publications.slice(0, 3).map((paper) => (
            <li key={paper.id}>
              <span className="paper-id">{paper.id}</span>
              <div>
                <h3>{paper.title}</h3>
                <p>{paper.authors}</p>
                <em>{paper.venue}</em>
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
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      <section className="fashion-note shell">
        <div>
          <span className="eyebrow-label">A parallel research thread</span>
          <h2>Computational fashion</h2>
        </div>
        <p>
          Before my PhD, I worked across digital pattern-making, computer
          vision, personalized apparel, and zero-waste design. That training
          gives my AI research a distinct perspective: systems should be
          interpretable, materially grounded, and attentive to constraints.
        </p>
        <Link href="/projects#fashion">
          View fashion projects <span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="home-contact shell">
        <span className="eyebrow-label">Contact</span>
        <div>
          <h2>Research questions and collaborations are welcome.</h2>
          <a href={links.email}>
            g.lei23@imperial.ac.uk <ExternalArrow />
          </a>
        </div>
      </section>
    </main>
  );
}
