const links = {
  email: "mailto:g.lei23@imperial.ac.uk",
  scholar:
    "https://scholar.google.com/citations?hl=en&user=JgnH-O8AAAAJ",
  linkedin: "https://www.linkedin.com/in/ge-lei",
  cv: "/Lei-Ge-CV.pdf",
};

// Add the newest item first — this is the only list to edit for homepage updates.
const news = [
  {
    date: "2026.05",
    kind: "New paper",
    text: "Elicitation Matters: How Prompts and Query Protocols Shape LLM Surrogates under Sparse Observations.",
    href: "https://arxiv.org/abs/2605.04764",
  },
  {
    date: "2026.01",
    kind: "New paper",
    text: "From Prompt to Protocol: Fast Charging Batteries with Large Language Models.",
    href: "https://arxiv.org/abs/2601.09626",
  },
  {
    date: "2026",
    kind: "Keynote",
    text: "From Trust to Action: Large Language Models for Scientific Discovery and Decision Support at AIMET.",
  },
  {
    date: "2025.12",
    kind: "Publication",
    text: "Do Llamas Understand the Periodic Table? published in Digital Discovery.",
  },
  {
    date: "2025",
    kind: "Spotlight",
    text: "Do Llamas See the Periodic Table in 3D? at the NeurIPS AI for Science Workshop.",
  },
  {
    date: "2025.06",
    kind: "Now",
    text: "Joined Polaron as a part-time LLM Machine Learning Engineer.",
  },
];

const research = [
  {
    number: "01",
    year: "2026",
    title: "LLM surrogate belief under sparse observations",
    description:
      "Studying how prompt design and query protocols shape uncertainty, belief updating, and scientific decisions when observations are scarce.",
    tags: ["LLM surrogates", "Bayesian optimization", "Reliability"],
    output: "P1",
    accent: "lilac",
  },
  {
    number: "02",
    year: "2025",
    title: "LLM-guided battery charging optimization",
    description:
      "Developing agents that search beyond fixed human parameterizations, reason with natural-language safety constraints, and optimize in slow-feedback settings.",
    tags: ["Battery science", "Agents", "Optimization"],
    output: "P2",
    accent: "blue",
  },
  {
    number: "03",
    year: "2024—25",
    title: "Knowledge representation in language models",
    description:
      "Investigating the geometry of scientific concepts inside LLMs, including a 3D spiral structure aligned with the organization of the periodic table.",
    tags: ["Interpretability", "Representations", "Chemistry"],
    output: "P3 · T2 · T4 · T6 · T8",
    accent: "green",
  },
  {
    number: "04",
    year: "2023—24",
    title: "Automation & scientific knowledge extraction",
    description:
      "Building AI workflows for extracting, structuring, and operationalizing knowledge from scientific literature and microstructure images.",
    tags: ["MicroGPT", "Knowledge extraction", "Automation"],
    output: "P4 · T5 · T7",
    accent: "yellow",
  },
  {
    number: "05",
    year: "2020—22",
    title: "Vision-based 3D garment mapping",
    description:
      "Connecting coded visual localization, geometric reconstruction, and digital pattern development to map flexible garment surfaces.",
    tags: ["Computer vision", "3D pattern-making", "Garments"],
    output: "P5 · P7",
    accent: "rose",
  },
  {
    number: "06",
    year: "2022—23",
    title: "AI-enabled personalized fashion systems",
    description:
      "Translating individual body features and design needs into intelligent made-to-measure and apparel development workflows.",
    tags: ["Personalization", "Computational design", "Apparel"],
    output: "P6",
    accent: "peach",
  },
  {
    number: "07",
    year: "2019—22",
    title: "Zero-waste fashion pattern design",
    description:
      "Exploring pattern-making systems that preserve fit, function, and design intent while reducing manufacturing waste.",
    tags: ["Zero waste", "Sustainability", "Pattern-making"],
    output: "P8",
    accent: "mint",
  },
];

const publications = [
  {
    id: "P1",
    year: "2026",
    title:
      "Elicitation Matters: How Prompts and Query Protocols Shape LLM Surrogates under Sparse Observations",
    authors: "Lei Ge, Samuel J. Cooper",
    venue: "arXiv:2605.04764",
    href: "https://arxiv.org/abs/2605.04764",
    label: "preprint",
  },
  {
    id: "P2",
    year: "2026",
    title:
      "From Prompt to Protocol: Fast Charging Batteries with Large Language Models",
    authors: "Lei Ge, Ferran B. Planella, Stephen G. Baird, Samuel J. Cooper",
    venue: "arXiv:2601.09626",
    href: "https://arxiv.org/abs/2601.09626",
    label: "preprint",
  },
  {
    id: "P3",
    year: "2025",
    title: "Do Llamas Understand the Periodic Table?",
    authors: "Lei Ge, Samuel J. Cooper",
    venue: "Digital Discovery, 4(12), 3455–3465",
    label: "journal",
  },
  {
    id: "P4",
    year: "2024",
    title:
      "Materials Science in the Era of Large Language Models: A Perspective",
    authors: "Lei Ge, Ronan Docherty, Samuel J. Cooper",
    venue: "Digital Discovery, 3(7), 1257–1272",
    label: "perspective",
  },
  {
    id: "P5",
    year: "2023",
    title:
      "A Vision-Based Approach to Mapping Flexible Objects for Garment Development",
    authors: "Lei Ge, Xiaohui Li",
    venue: "Textile Research Journal, 93(15–16), 3381–3395",
    label: "journal",
  },
  {
    id: "P6",
    year: "2022",
    title:
      "A New Approach to 3D Pattern-Making for the Apparel Industry: Graphic Coding-Based Localization",
    authors: "Lei Ge, Xiaohui Li",
    venue: "Computers in Industry, 136, 103587",
    label: "journal",
  },
  {
    id: "P7",
    year: "2022",
    title: "Review of Digital Pattern-Making Technology in Garment Production",
    authors: "Lei Ge, Xiaohui Li",
    venue: "Journal of Textile Research, 43(4), 203–209",
    label: "review",
  },
  {
    id: "P8",
    year: "2021",
    title: "A Pattern-Making Approach to Improving Zero-Waste Fashion Design",
    authors: "Lei Ge, Xiaohui Li",
    venue: "Fashion Practice, 13(3), 443–463",
    label: "journal",
  },
];

const talks = [
  {
    year: "2026",
    title:
      "From Trust to Action: Large Language Models for Scientific Discovery and Decision Support",
    event: "AIMET · Mechelen",
    type: "Keynote",
  },
  {
    year: "2026",
    title:
      "From Prompt to Protocol: Fast Charging Batteries with Large Language Models",
    event: "AI4AM · Madrid",
    type: "Oral",
  },
  {
    year: "2025",
    title:
      "Do Llamas See the Periodic Table in 3D? Geometry and Layerwise Representations",
    event: "NeurIPS AI for Science · San Diego",
    type: "Spotlight",
  },
  {
    year: "2025",
    title:
      "Unveiling 3D Geometries in LLMs: The Representation and Recall of Periodic Elements",
    event: "AI4AM · San Sebastian",
    type: "Oral",
  },
  {
    year: "2025",
    title:
      "LLMs Know Chemistry: Representation of the Periodic Table in Large Language Models",
    event: "Oxford Modelling Symposium",
    type: "Poster",
  },
  {
    year: "2025",
    title: "Do Llamas Understand Chemistry?",
    event: "AI for Materials Summer School · Karlsruhe",
    type: "Poster",
  },
  {
    year: "2024",
    title: "Large Language Models in Materials Science",
    event: "L2M3 · EPFL",
    type: "Oral",
  },
  {
    year: "2024",
    title: "Battery GPT? Materials Science in the Era of Large Language Models",
    event: "Oxford Modelling Symposium",
    type: "Poster",
  },
];

const education = [
  {
    date: "2023—2026",
    place: "Imperial College London",
    role: "PhD · Design Engineering",
    detail:
      "LLMs for science, agentic systems, and AI interpretability · Lee Family Scholarship",
  },
  {
    date: "2020—2023",
    place: "Donghua University",
    role: "MSc · Fashion Design & Engineering",
    detail:
      "GPA 91/100 · Outstanding Master’s Thesis · National Scholarship",
  },
  {
    date: "2018—2019",
    place: "Istituto Marangoni",
    role: "Exchange · Fashion Design",
    detail:
      "Seasonal collections from concept development through pattern-making and construction",
  },
  {
    date: "2016—2020",
    place: "Donghua University",
    role: "BEng · Fashion Design & Engineering",
    detail:
      "GPA 90.3/100 · National Scholarship ×2 · Outstanding Student Award ×2",
  },
];

const experience = [
  {
    date: "2025—Now",
    place: "Polaron · London",
    role: "LLM Machine Learning Engineer · Part-time",
    detail:
      "Production LLM orchestration with FastAPI, LangGraph, AWS Bedrock, tool calling, retrieval, persistence, and safety-aware workflows.",
  },
  {
    date: "2022—2023",
    place: "Target · Shanghai",
    role: "Management Trainee",
    detail:
      "Rotations across Packaging, Color, Technical Design, QA, and Sustainability.",
  },
  {
    date: "2021",
    place: "Chenfeng Group · China",
    role: "Programme Intern",
    detail:
      "Fashion design, intelligent sewing, and textile inspection across three manufacturing sites.",
  },
  {
    date: "2019",
    place: "H&M · Shanghai",
    role: "Merchandising Assistant Intern",
    detail:
      "Product forms, color charts, merchandising workflows, and supplier communication.",
  },
  {
    date: "2019",
    place: "Target · Shanghai",
    role: "Product Design & Development Intern",
    detail:
      "Zero-waste childrenswear, market research, supplier visits, and own-brand development.",
  },
];

function ExternalArrow() {
  return (
    <span className="arrow" aria-hidden="true">
      ↗
    </span>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Lei Ge, home">
          <span className="wordmark-mark">LG</span>
          <span>Lei Ge</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#fashion">Fashion</a>
          <a href="#news">News</a>
        </nav>
        <a className="header-contact" href={links.email}>
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="main">
        <section className="hero shell" id="top">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              PhD candidate @ Imperial · London, UK
            </div>
            <h1>
              I make scientific AI{" "}
              <span className="scribble">legible</span>
              <br />
              and computational design{" "}
              <span className="scribble coral">wearable.</span>
            </h1>
            <p className="hero-intro">
              Hi, I&apos;m Lei 👋 I work across large language models,
              materials science, interpretability, and agentic systems—with a
              parallel practice in fashion design and engineering.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#research">
                Explore my work <span aria-hidden="true">↓</span>
              </a>
              <a className="button ghost" href={links.cv}>
                Download CV <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="social-row" aria-label="Profiles">
              <a href={links.scholar} target="_blank" rel="noreferrer">
                Google Scholar <ExternalArrow />
              </a>
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <ExternalArrow />
              </a>
              <a href={links.email}>Email <ExternalArrow /></a>
            </div>
          </div>

          <div className="portrait-wrap">
            <div className="portrait-backdrop" aria-hidden="true">
              <span>{"<think>"}</span>
              <span>{"  science × style"}</span>
              <span>{"</think>"}</span>
            </div>
            <div className="portrait-frame">
              <img
                src="/lei-ge.jpg"
                alt="Lei Ge standing outside at Imperial College London"
              />
              <div className="portrait-caption">
                <span>Currently</span>
                <strong>Researching how LLMs think about science 🧪</strong>
              </div>
            </div>
            <div className="floating-note note-one">AI for science</div>
            <div className="floating-note note-two">fashion, coded ✂️</div>
          </div>
        </section>

        <section className="signal-strip" aria-label="Research interests">
          <div className="signal-inner">
            <span>large language models</span>
            <i>✦</i>
            <span>materials science</span>
            <i>✦</i>
            <span>interpretable AI</span>
            <i>✦</i>
            <span>agentic systems</span>
            <i>✦</i>
            <span>computational fashion</span>
          </div>
        </section>

        <section className="news section shell" id="news">
          <div className="section-heading sticky-heading">
            <p className="section-kicker">
              <span aria-hidden="true">●</span> latest.log
            </p>
            <h2>News & notes</h2>
            <p>A running log of papers, talks, and new chapters.</p>
          </div>
          <div className="news-list">
            {news.map((item, index) => {
              const content = (
                <>
                  <span className="news-date">{item.date}</span>
                  <span className="news-kind">{item.kind}</span>
                  <span className="news-text">{item.text}</span>
                  <span className="news-arrow" aria-hidden="true">
                    {item.href ? "↗" : "·"}
                  </span>
                </>
              );
              return item.href ? (
                <a
                  className="news-item"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  key={item.text}
                >
                  {content}
                </a>
              ) : (
                <div className="news-item" key={item.text}>
                  {content}
                </div>
              );
            })}
          </div>
        </section>

        <section className="about section shell">
          <div className="about-lead">
            <p className="code-comment">{"// a little context"}</p>
            <h2>
              Two disciplines.
              <br />
              One way of thinking.
            </h2>
          </div>
          <div className="about-body">
            <p className="about-large">
              I&apos;m a researcher and engineer interested in what intelligent
              systems <em>know</em>, how they make decisions, and how we can
              make them useful in the physical world.
            </p>
            <div className="about-columns">
              <p>
                At Imperial College London, my PhD focuses on LLMs for science:
                from the geometry of chemical knowledge inside model
                representations to agents that optimize battery charging
                protocols under sparse observations.
              </p>
              <p>
                My first language was fashion. Training in design, pattern
                engineering, and apparel manufacturing taught me to move
                between systems and surfaces—between an abstract rule and the
                thing it becomes.
              </p>
            </div>
          </div>
          <div className="metric-card">
            <span className="metric-number">8</span>
            <span className="metric-label">publications across AI + fashion</span>
            <span className="metric-code">papers.length</span>
          </div>
        </section>

        <section className="research section shell" id="research">
          <div className="section-heading">
            <p className="section-kicker">01 · selected_work</p>
            <h2>Research</h2>
            <p>
              From model beliefs to material systems, and from 3D geometry to
              zero-waste patterns.
            </p>
          </div>
          <div className="research-grid">
            {research.map((project) => (
              <article
                className={`research-card accent-${project.accent}`}
                key={project.number}
              >
                <div className="card-meta">
                  <span>{project.number}</span>
                  <span>{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="card-output">
                  <span>associated.output</span>
                  <strong>{project.output}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="publications section shell" id="publications">
          <div className="section-heading sticky-heading">
            <p className="section-kicker">02 · output.json</p>
            <h2>Publications</h2>
            <p>
              Eight papers spanning scientific language models, computational
              design, and apparel engineering.
            </p>
            <a
              className="text-link"
              href={links.scholar}
              target="_blank"
              rel="noreferrer"
            >
              View Google Scholar <ExternalArrow />
            </a>
          </div>
          <ol className="publication-list">
            {publications.map((paper) => (
              <li key={paper.id}>
                <div className="publication-id">
                  <span>{paper.id}</span>
                  <span>{paper.year}</span>
                </div>
                <div className="publication-main">
                  <h3>{paper.title}</h3>
                  <p>{paper.authors}</p>
                  <div>
                    <em>{paper.venue}</em>
                    <span className="paper-label">{paper.label}</span>
                  </div>
                </div>
                {paper.href ? (
                  <a
                    className="paper-link"
                    href={paper.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${paper.title}`}
                  >
                    ↗
                  </a>
                ) : (
                  <span className="paper-dot" aria-hidden="true">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className="fashion section" id="fashion">
          <div className="fashion-shell shell">
            <div className="fashion-title">
              <p className="section-kicker">03 · the_other_thread</p>
              <h2>
                Fashion is not
                <br />
                my side note.
              </h2>
              <div className="fashion-stitch" aria-hidden="true">
                - - - - - - - - - - - -
              </div>
            </div>
            <div className="fashion-copy">
              <p className="fashion-intro">
                Before language models, I studied how fabric, bodies, and
                manufacturing systems speak to one another.
              </p>
              <p>
                My work in fashion moves between digital pattern-making,
                computer vision, personalization, and zero-waste design. It is
                where I learned that computation can be tactile—and that
                elegance often comes from a well-designed constraint.
              </p>
              <div className="fashion-tags">
                <span>pattern.make()</span>
                <span>zero_waste = true</span>
                <span>body → geometry</span>
              </div>
            </div>
            <div className="fashion-lookbook">
              <div className="lookbook-card card-a">
                <span className="lookbook-index">LOOK 01</span>
                <div className="pattern-shape shape-a" aria-hidden="true" />
                <strong>Graphic coding</strong>
                <p>Mapping flexible surfaces for 3D garment development.</p>
              </div>
              <div className="lookbook-card card-b">
                <span className="lookbook-index">LOOK 02</span>
                <div className="pattern-shape shape-b" aria-hidden="true" />
                <strong>Zero-waste systems</strong>
                <p>Designing pattern logic around material responsibility.</p>
              </div>
              <div className="lookbook-card card-c">
                <span className="lookbook-index">LOOK 03</span>
                <div className="pattern-shape shape-c" aria-hidden="true" />
                <strong>Made to measure</strong>
                <p>Connecting body features to personalized apparel.</p>
              </div>
            </div>
            <div className="fashion-footnote">
              <span>Trained at Donghua University + Istituto Marangoni</span>
              <span>Worked across Target · H&M · Chenfeng</span>
            </div>
          </div>
        </section>

        <section className="talks section shell" id="talks">
          <div className="section-heading">
            <p className="section-kicker">04 · speaking</p>
            <h2>Selected talks</h2>
            <p>
              Keynotes, spotlights, oral presentations, and posters across AI
              for science.
            </p>
          </div>
          <div className="talk-grid">
            {talks.map((talk) => (
              <article key={`${talk.year}-${talk.title}`}>
                <div>
                  <span className="talk-year">{talk.year}</span>
                  <span className="talk-type">{talk.type}</span>
                </div>
                <h3>{talk.title}</h3>
                <p>{talk.event}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="journey section shell" id="journey">
          <div className="section-heading">
            <p className="section-kicker">05 · timeline</p>
            <h2>Journey</h2>
            <p>
              Academic training and industry practice, from garments to
              generative systems.
            </p>
          </div>
          <div className="journey-grid">
            <div className="timeline-column">
              <h3>
                <span aria-hidden="true">⌘</span> Education
              </h3>
              {education.map((item) => (
                <article className="timeline-item" key={item.date + item.place}>
                  <span className="timeline-date">{item.date}</span>
                  <div>
                    <strong>{item.place}</strong>
                    <h4>{item.role}</h4>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="timeline-column">
              <h3>
                <span aria-hidden="true">↳</span> Industry
              </h3>
              {experience.map((item) => (
                <article className="timeline-item" key={item.date + item.place}>
                  <span className="timeline-date">{item.date}</span>
                  <div>
                    <strong>{item.place}</strong>
                    <h4>{item.role}</h4>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="service section shell">
          <div className="service-card service-main">
            <span className="service-index">SERVICE_01</span>
            <h2>Deep Matters: Foundations</h2>
            <p>
              Co-organized an interdisciplinary conference on foundation models
              for materials science for approximately 100 attendees—spanning
              programme, speakers, sponsorship, logistics, and delivery.
            </p>
            <div className="service-meta">
              <span>Google Cloud Startup Hub · 2025</span>
              <a
                href="https://tldr-group.github.io/deep-matters/"
                target="_blank"
                rel="noreferrer"
              >
                Visit conference <ExternalArrow />
              </a>
            </div>
          </div>
          <div className="service-stack">
            <article className="service-card">
              <span className="service-index">SERVICE_02</span>
              <h3>Invited Lecturer</h3>
              <p>
                “How LLMs Work? From Transformer to Reasoning” for the iCircular3
                Marie Curie Doctoral Network.
              </p>
            </article>
            <article className="service-card">
              <span className="service-index">REVIEWING</span>
              <h3>Journal Reviewer</h3>
              <p>
                Communications Materials · npj Computational Materials ·
                Digital Discovery · RSC Advances
              </p>
            </article>
          </div>
        </section>

        <section className="contact section shell" id="contact">
          <div className="contact-code" aria-hidden="true">
            <span>if (curious) {"{"}</span>
            <span>&nbsp;&nbsp;sayHello();</span>
            <span>{"}"}</span>
          </div>
          <div className="contact-copy">
            <p>Have a question, collaboration, or beautifully strange idea?</p>
            <h2>Let&apos;s make something thoughtful.</h2>
            <a href={links.email}>
              g.lei23@imperial.ac.uk <ExternalArrow />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer shell">
        <div>
          <span className="wordmark-mark">LG</span>
          <p>Scientific AI × Computational Fashion</p>
        </div>
        <div className="footer-links">
          <a href={links.scholar} target="_blank" rel="noreferrer">
            Scholar ↗
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={links.cv}>CV ↗</a>
        </div>
        <p className="footer-note">
          Designed with curiosity, clarity & a little code ✦
        </p>
      </footer>
    </>
  );
}
