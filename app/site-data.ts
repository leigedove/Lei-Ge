export const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const links = {
  email: "mailto:g.lei23@imperial.ac.uk",
  scholar:
    "https://scholar.google.com/citations?hl=en&user=JgnH-O8AAAAJ",
  linkedin: "https://www.linkedin.com/in/ge-lei",
  cv: `${siteBasePath}/Lei-Ge-CV.pdf`,
  imperial: "https://www.imperial.ac.uk/",
  polaron: "https://www.polaron.ai/",
  donghua: "https://english.dhu.edu.cn/",
  marangoni: "https://www.istitutomarangoni.com/en",
};

export const news = [
  {
    date: "29 Sep 2026",
    text: "I was invited to give a keynote at AIMET in Mechelen, Belgium.",
    href: "https://aimet.be/preliminary-programme/",
  },
  {
    date: "6 May 2026",
    text: "We released a new paper on how prompts and query protocols shape LLM surrogates when data are scarce.",
    href: "https://arxiv.org/abs/2605.04764",
  },
  {
    date: "14 Jan 2026",
    text: "We released a paper on using LLM agents to design fast-charging battery protocols.",
    href: "https://arxiv.org/abs/2601.09626",
  },
  {
    date: "7 Dec 2025",
    text: "I gave a spotlight presentation at the NeurIPS AI for Science Workshop in San Diego.",
    href: "https://ai4sciencecommunity.github.io/neurips25.html",
  },
  {
    date: "6 Nov 2025",
    text: "I co-organized Deep Matters: Foundations in London, a conference on foundation models for materials science.",
    href: "https://tldr-group.github.io/deep-matters/",
  },
  {
    date: "14 Oct 2025",
    text: "Our paper on how LLMs represent the periodic table was published in Digital Discovery.",
    href: "https://pubs.rsc.org/en/content/articlelanding/2025/dd/d5dd00374a",
  },
  {
    date: "Jun 2025",
    text: "I joined Polaron as a part-time LLM Machine Learning Engineer.",
    href: "https://www.polaron.ai/",
  },
];

export const research = [
  {
    number: "01",
    year: "2026",
    title: "LLM surrogate belief under sparse observations",
    description:
      "I study how language models behave as surrogate models in low-data optimization. The work shows that prompt design and query protocol are core components of surrogate specification, shaping uncertainty, belief updating, and downstream scientific decisions.",
    tags: ["LLM surrogates", "Bayesian optimization", "Reliability"],
    output: "P1",
    paperIds: ["P1"],
    image: `${siteBasePath}/projects/llm-surrogate.png`,
    imageAlt:
      "A probabilistic response surface emerging from sparse observations and an optimization path",
    institution: "Imperial College London",
  },
  {
    number: "02",
    year: "2025",
    title: "LLM-guided optimization for battery charging protocols",
    description:
      "I develop LLM agents for battery fast-charging optimization. The agents expand protocol search beyond fixed human parameterizations, incorporate natural-language safety constraints, and operate in expensive, slow-feedback scientific settings.",
    tags: ["Battery science", "Agents", "Optimization"],
    output: "P2",
    paperIds: ["P2"],
    image: `${siteBasePath}/projects/battery-agent.png`,
    imageAlt:
      "A battery cell, charging curve, and branching optimization protocols",
    institution: "Imperial College London",
  },
  {
    number: "03",
    year: "2024–25",
    title: "Knowledge representation in large language models",
    description:
      "I investigate how LLMs encode structured scientific knowledge. This work identifies a 3D spiral structure in hidden states that aligns with the conceptual organization of the periodic table.",
    tags: ["Interpretability", "Representations", "Chemistry"],
    output: "P3 · T2 · T4 · T6 · T8",
    paperIds: ["P3"],
    image: `${siteBasePath}/projects/llm-representations.png`,
    imageAlt:
      "Elemental nodes arranged as a three-dimensional spiral representation",
    institution: "Imperial College London",
  },
  {
    number: "04",
    year: "2023–24",
    title: "Automation and knowledge extraction for scientific data",
    description:
      "I build automated systems for extracting, structuring, and operationalizing scientific knowledge from literature and imaging workflows, including MicroGPT for 3D microstructure analysis.",
    tags: ["MicroGPT", "Knowledge extraction", "Automation"],
    output: "P4 · T5 · T7",
    paperIds: ["P4"],
    image: `${siteBasePath}/projects/scientific-automation.png`,
    imageAlt:
      "Scientific documents transformed into structured data and a porous 3D microstructure",
    institution: "Imperial College London",
  },
  {
    number: "05",
    year: "2020–22",
    title: "Vision-based 3D garment mapping and pattern development",
    description:
      "I developed computer-vision methods for mapping flexible garment surfaces and translating 3D shape information into structured representations for apparel development.",
    tags: ["Computer vision", "3D pattern-making", "Garments"],
    output: "P5 · P7",
    paperIds: ["P5", "P7"],
    image: `${siteBasePath}/projects/garment-mapping.png`,
    imageAlt:
      "A draped fabric surface mapped with computer vision points into flat garment patterns",
    institution: "Donghua University",
  },
  {
    number: "06",
    year: "2022–23",
    title: "AI-enabled personalized fashion design systems",
    description:
      "I explored how individual body features and user-specific design needs can be translated into intelligent made-to-measure and apparel development workflows.",
    tags: ["Personalization", "Computational design", "Apparel"],
    output: "P6",
    paperIds: ["P6"],
    image: `${siteBasePath}/projects/personalized-fashion.png`,
    imageAlt:
      "A digital body form connected to adaptable patterns and a finished garment",
    institution: "Donghua University",
  },
  {
    number: "07",
    year: "2019–22",
    title: "Zero-waste fashion pattern design",
    description:
      "I investigated computational approaches to garment pattern-making that reduce waste while preserving fit, function, manufacturability, and design intent.",
    tags: ["Zero waste", "Sustainability", "Pattern-making"],
    output: "P8",
    paperIds: ["P8"],
    image: `${siteBasePath}/projects/zero-waste-fashion.png`,
    imageAlt:
      "Interlocking zero-waste garment pattern pieces beside an assembled jacket",
    institution: "Donghua University",
  },
];

export const publications = [
  {
    id: "P1",
    year: "2026",
    title:
      "Elicitation Matters: How Prompts and Query Protocols Shape LLM Surrogates under Sparse Observations",
    authors: "Lei Ge, Samuel J. Cooper",
    venue: "arXiv:2605.04764",
    href: "https://arxiv.org/abs/2605.04764",
    type: "Preprint",
  },
  {
    id: "P2",
    year: "2026",
    title:
      "From Prompt to Protocol: Fast Charging Batteries with Large Language Models",
    authors: "Lei Ge, Ferran B. Planella, Stephen G. Baird, Samuel J. Cooper",
    venue: "arXiv:2601.09626",
    href: "https://arxiv.org/abs/2601.09626",
    type: "Preprint",
  },
  {
    id: "P3",
    year: "2025",
    title: "Do Llamas Understand the Periodic Table?",
    authors: "Lei Ge, Samuel J. Cooper",
    venue: "Digital Discovery, 4(12), 3455–3465",
    href: "https://pubs.rsc.org/en/content/articlelanding/2025/dd/d5dd00374a",
    type: "Journal article",
  },
  {
    id: "P4",
    year: "2024",
    title:
      "Materials Science in the Era of Large Language Models: A Perspective",
    authors: "Lei Ge, Ronan Docherty, Samuel J. Cooper",
    venue: "Digital Discovery, 3(7), 1257–1272",
    href: "https://pubs.rsc.org/en/content/articlelanding/2024/dd/d4dd00074a",
    type: "Perspective",
  },
  {
    id: "P5",
    year: "2023",
    title:
      "A Vision-Based Approach to Mapping Flexible Objects for Garment Development",
    authors: "Lei Ge, Xiaohui Li",
    venue: "Textile Research Journal, 93(15–16), 3381–3395",
    href: "https://journals.sagepub.com/doi/10.1177/00405175221149212",
    type: "Journal article",
  },
  {
    id: "P6",
    year: "2022",
    title:
      "A New Approach to 3D Pattern-Making for the Apparel Industry: Graphic Coding-Based Localization",
    authors: "Lei Ge, Xiaohui Li",
    venue: "Computers in Industry, 136, 103587",
    href: "https://www.sciencedirect.com/science/article/pii/S0166361521001949",
    type: "Journal article",
  },
  {
    id: "P7",
    year: "2022",
    title: "Review of Digital Pattern-Making Technology in Garment Production",
    authors: "Lei Ge, Xiaohui Li",
    venue: "Journal of Textile Research, 43(4), 203–209",
    href:
      "https://www.researchgate.net/publication/378395439_Review_of_digital_pattern-making_technology_in_garment_production",
    type: "Review",
  },
  {
    id: "P8",
    year: "2021",
    title: "A Pattern-Making Approach to Improving Zero-Waste Fashion Design",
    authors: "Lei Ge, Xiaohui Li",
    venue: "Fashion Practice, 13(3), 443–463",
    href: "https://www.tandfonline.com/doi/abs/10.1080/17569370.2021.1982503",
    type: "Journal article",
  },
];

export const talks = [
  {
    id: "T1",
    year: "2026",
    title:
      "From Trust to Action: Large Language Models for Scientific Discovery and Decision Support",
    event: "AI in Metallurgy (AIMET), Mechelen, Belgium",
    type: "Keynote",
  },
  {
    id: "T2",
    year: "2025",
    title:
      "Do Llamas See the Periodic Table in 3D? Geometry and Layerwise Representations",
    event: "NeurIPS AI for Science Workshop, San Diego, USA",
    type: "Spotlight",
  },
  {
    id: "T3",
    year: "2026",
    title:
      "From Prompt to Protocol: Fast Charging Batteries with Large Language Models",
    event: "AI4AM, Madrid, Spain",
    type: "Oral",
  },
  {
    id: "T4",
    year: "2025",
    title:
      "Unveiling 3D Geometries in LLMs: The Representation and Recall of Periodic Elements",
    event: "AI4AM, San Sebastian, Spain",
    type: "Oral",
  },
  {
    id: "T5",
    year: "2024",
    title: "Large Language Models in Materials Science",
    event: "L2M3, EPFL, Switzerland",
    type: "Oral",
  },
  {
    id: "T6",
    year: "2025",
    title:
      "LLMs Know Chemistry: Representation of the Periodic Table in Large Language Models",
    event: "Oxford Modelling Symposium, Oxford, UK",
    type: "Poster",
  },
  {
    id: "T7",
    year: "2024",
    title: "Battery GPT? Materials Science in the Era of Large Language Models",
    event: "Oxford Modelling Symposium, Oxford, UK",
    type: "Poster",
  },
  {
    id: "T8",
    year: "2025",
    title: "Do Llamas Understand Chemistry?",
    event: "AI for Materials Summer School, Karlsruhe, Germany",
    type: "Poster",
  },
];

export const appointments = [
  {
    date: "Aug 2023 – Sep 2026 (expected)",
    place: "Imperial College London · London, UK",
    href: links.imperial,
    role: "PhD Candidate in Design Engineering",
    details: [
      "Research on LLMs for materials science, interpretable AI, and agentic systems.",
      "Supervisor: Dr Samuel J. Cooper.",
    ],
  },
  {
    date: "Jun 2025 – Present",
    place: "Polaron · London, UK",
    href: links.polaron,
    role: "LLM Machine Learning Engineer · Part-time",
    details: [
      "Leading the development of an LLM agent platform that bridges research and real-world deployment.",
    ],
  },
];

export const education = [
  {
    date: "2023 – 2026 (expected)",
    place: "Imperial College London · London, UK",
    href: links.imperial,
    role: "PhD in Design Engineering",
    details: [
      "Research focus: LLMs for science, LLM agents, and AI interpretability.",
      "Lee Family Scholarship, a full scholarship awarded to 1–2 top Chinese candidates annually.",
    ],
  },
  {
    date: "2020 – 2023",
    place: "Donghua University · Shanghai, China",
    href: links.donghua,
    role: "MSc in Fashion Design and Engineering",
    details: [
      "GPA: 91/100; thesis grade: 92.6/100.",
      "Thesis: A Computer Vision-Based Graphic Coding Technique for Garment Development.",
      "Outstanding Master’s Thesis, China National Scholarship, Outstanding Student Award, and Shanghai Outstanding Graduate.",
    ],
  },
  {
    date: "2016 – 2020",
    place: "Donghua University · Shanghai, China",
    href: links.donghua,
    role: "BEng in Fashion Design and Engineering",
    details: [
      "GPA: 90.3/100.",
      "China National Scholarship (twice), Outstanding Student Award (twice), and Donghua Outstanding Graduate Award.",
    ],
  },
  {
    date: "2018 – 2019",
    place: "Istituto Marangoni · Milan, Italy",
    href: links.marangoni,
    role: "Exchange Student in Fashion Design",
    details: [
      "Developed seasonal fashion collections covering concept development, pattern-making, and garment construction.",
    ],
  },
];

export const industry = [
  {
    date: "Jun 2025 – Present",
    place: "Polaron · London, UK",
    href: links.polaron,
    role: "LLM Machine Learning Engineer · Part-time",
    details: [
      "Built a production-oriented LLM orchestration service with FastAPI, LangGraph, and AWS Bedrock for natural-language control of internal workflows.",
      "Designed multi-turn dialogue, streaming, tool execution loops, interruption and resume flows, and failure-recovery guardrails.",
      "Implemented typed tool contracts, approval-aware workflow actions, sandboxed code execution, artifact handling, and retrieval over product documentation.",
      "Added Redis, Postgres, and S3-backed persistence, checkpointing, audit logging, redacted tracing, readiness checks, and benchmark coverage.",
    ],
  },
  {
    date: "Dec 2022 – Mar 2023",
    place: "Target · Shanghai, China",
    role: "Management Trainee · Full-time",
    details: [
      "Completed rotations across Packaging, Color, Technical Design, Quality Assurance, and Sustainability.",
      "Contributed to a sustainability initiative transforming recycled plastic bottles into home textiles.",
    ],
  },
  {
    date: "Jun – Jul 2021",
    place: "Chenfeng Group · Changzhou, Wuxi & Suzhou, China",
    role: "Programme Intern",
    details: [
      "Rotated across fashion design, intelligent sewing, and textile inspection to gain cross-functional exposure to apparel manufacturing.",
    ],
  },
  {
    date: "Sep – Dec 2019",
    place: "H&M · Shanghai, China",
    role: "Merchandising Assistant Intern",
    details: [
      "Supported merchandising workflows, created product forms and color charts, and facilitated supplier communication.",
    ],
  },
  {
    date: "Jul – Aug 2019",
    place: "Target · Shanghai, China",
    role: "Product Design and Development Intern",
    details: [
      "Designed zero-waste childrenswear for LTO Back to School, integrating sustainability across materials, manufacturing, and retail.",
      "Supported own-brand development through market research, supplier visits, and certification feedback.",
    ],
  },
];

export const academicService = [
  {
    date: "2025",
    title: "Co-organizer & Speaker · Deep Matters: Foundations",
    place: "Google Cloud Startup Hub · London, UK",
    details: [
      "Co-organized an interdisciplinary conference on foundation models for materials science with approximately 100 attendees.",
      "Worked across programme development, speaker coordination, sponsorship, logistics, and event delivery.",
      "Secured sponsorship from Google and Polaron and coordinated invited speakers from NVIDIA, UCL, Orbital, CuspAI, and Imperial College London.",
    ],
    href: "https://tldr-group.github.io/deep-matters/",
  },
  {
    date: "2025",
    title: "Invited Lecturer · iCircular3 Marie Curie Doctoral Network",
    place: "MSCA Doctoral Network",
    details: [
      "Delivered “How LLMs Work? From Transformer to Reasoning” for doctoral researchers.",
    ],
  },
];

export const reviewVenues = [
  "Communications Materials",
  "npj Computational Materials",
  "Digital Discovery",
  "RSC Advances",
];
