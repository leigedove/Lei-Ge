import Link from "next/link";
import { ExternalArrow, SectionHeader } from "./components";
import {
  links,
  news,
  publications,
  research,
  siteBasePath,
} from "./site-data";

export default function Home() {
  return (
    <main id="main">
      <section className="profile-hero shell">
        <div className="profile-copy">
          <p className="eyebrow-label">Hello, I&apos;m</p>
          <h1>Lei Ge (雷鸽)</h1>
          <p className="profile-role">
            PhD Candidate in Design Engineering
            <br />
            Imperial College London
          </p>
          <p className="profile-summary">
            I am a PhD candidate at{" "}
            <a href={links.imperial} target="_blank" rel="noreferrer">
              Imperial College London
            </a>
            , expecting to graduate in 2026, and a part-time LLM Machine
            Learning Engineer at{" "}
            <a href={links.polaron} target="_blank" rel="noreferrer">
              Polaron
            </a>
            . My research focuses on <strong>LLM interpretability</strong> and{" "}
            <strong>agentic systems</strong>. Before my PhD, I studied fashion
            design and engineering and researched AI for garment structure
            design. That engineering background continues to shape how I think
            about computation, geometry, and the physical world.
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
            src={`${siteBasePath}/lei-ge.jpg`}
            alt="Lei Ge at Imperial College London"
          />
          <dl>
            <div>
              <dt>Current</dt>
              <dd>
                <a href={links.imperial} target="_blank" rel="noreferrer">
                  PhD Candidate, Imperial
                </a>
              </dd>
            </div>
            <div>
              <dt>Also</dt>
              <dd>
                <a href={links.polaron} target="_blank" rel="noreferrer">
                  LLM ML Engineer, Polaron
                </a>
              </dd>
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

      <section className="compact-section news-section shell">
        <SectionHeader
          label="01"
          title="News"
        />
        <div className="news-list" aria-label={`${news.length} recent updates`}>
          {news.map((item) => {
            const content = (
              <>
                <time>{item.date}</time>
                <span className="news-text">{item.text}</span>
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
          label="02"
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
              <figure className="highlight-visual">
                <img
                  src={project.image}
                  alt=""
                  width="1536"
                  height="1024"
                  loading={project.number === "01" ? "eager" : "lazy"}
                />
              </figure>
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
        <SectionHeader
          label="03"
          title="Selected publications"
          link={{ href: "/publications", text: "All publications" }}
        />
        <ol className="paper-list">
          {publications.slice(0, 4).map((paper) => (
            <li key={paper.id}>
              <span className="paper-id">{paper.id}</span>
              <div>
                <h3>
                  <a href={paper.href} target="_blank" rel="noreferrer">
                    {paper.title}
                  </a>
                </h3>
                <p>{paper.authors}</p>
                <em>{paper.venue}</em>
              </div>
              <time>{paper.year}</time>
            </li>
          ))}
        </ol>
      </section>

      <section className="fashion-note shell">
        <div>
          <span className="eyebrow-label">A parallel research thread</span>
          <h2>Computational fashion</h2>
        </div>
        <div className="fashion-note-copy">
          <p>
            Before my PhD, I worked across digital pattern-making, computer
            vision, personalized apparel, and zero-waste design. That training
            gives my AI research a distinct perspective: systems should be
            interpretable, materially grounded, and attentive to constraints.
          </p>
          <Link href="/projects#fashion">
            View fashion projects <span aria-hidden="true">→</span>
          </Link>
        </div>
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
