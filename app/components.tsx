import Link from "next/link";
import { links } from "./site-data";

export function ExternalArrow() {
  return (
    <span className="arrow" aria-hidden="true">
      ↗︎
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Lei Ge, home">
        <span className="wordmark-mark">LG</span>
        <span>
          Lei Ge
          <small>Scientific AI · Computational Fashion</small>
        </span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/publications">Publications</Link>
        <Link href="/cv">CV</Link>
      </nav>
      <a className="header-contact" href={links.email}>
        Email <ExternalArrow />
      </a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <div>
        <span>© 2026 Lei Ge</span>
        <span>London, UK</span>
      </div>
      <div className="footer-links">
        <a href={links.scholar} target="_blank" rel="noreferrer">
          Scholar <ExternalArrow />
        </a>
        <a href={links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn <ExternalArrow />
        </a>
        <a href={links.email}>
          Email <ExternalArrow />
        </a>
      </div>
    </footer>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <header className="page-intro">
      <p className="eyebrow-label">{eyebrow}</p>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        {action}
      </div>
    </header>
  );
}

export function SectionHeader({
  label,
  title,
  link,
}: {
  label: string;
  title: React.ReactNode;
  link?: { href: string; text: string };
}) {
  return (
    <div className="section-header">
      <span>{label}</span>
      <h2>{title}</h2>
      {link ? (
        <Link href={link.href}>
          {link.text} <span aria-hidden="true">→</span>
        </Link>
      ) : null}
    </div>
  );
}
