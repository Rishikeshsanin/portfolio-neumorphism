const projects = [
  {
    name: "Skylark Command",
    eyebrow: "Agentic AI · Enterprise",
    description:
      "Decision-intelligence platform over live CRM and operational data, combining deterministic analytics with constrained AI planning, temporal PostgreSQL snapshots and evidence-backed workflows.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "GraphQL", "Gemini", "Supabase"],
    repo: "https://github.com/Rishikeshsanin/skylark-command",
    live: "https://skylark-command.vercel.app",
    preview:
      "https://raw.githubusercontent.com/Rishikeshsanin/skylark-command/main/Screenshots/Screenshot%20(57).png",
    featured: true,
  },
  {
    name: "Vibify",
    eyebrow: "Realtime · Music",
    description:
      "Shared-listening rooms that keep phones and laptops aligned to one authoritative YouTube playback timeline using Firebase server time, presence and versioned playback commands.",
    stack: ["Next.js", "TypeScript", "Firebase", "YouTube API", "React", "Vercel"],
    repo: "https://github.com/Rishikeshsanin/vibify",
    live: "https://vibify-mu.vercel.app",
    preview:
      "https://image.thum.io/get/width/1200/crop/720/noanimate/https://vibify-mu.vercel.app",
  },
  {
    name: "Imposter X",
    eyebrow: "Multiplayer · LiveKit",
    description:
      "Realtime social-deduction game with server-authoritative room state, voting, chat, reactions, timers and authenticated low-latency voice/video rooms.",
    stack: ["JavaScript", "Supabase", "PostgreSQL", "LiveKit", "WebRTC", "Vercel"],
    repo: "https://github.com/Rishikeshsanin/Imposter-X",
    live: "https://imposter-x.vercel.app",
    preview:
      "https://image.thum.io/get/width/1200/crop/720/noanimate/https://imposter-x.vercel.app",
  },
  {
    name: "NoCodeML",
    eyebrow: "ML Platform · Backend",
    description:
      "Guest-first AutoML workflow for validating datasets, training and comparing models, running predictions and exporting results with isolated temporary workspaces.",
    stack: ["React", "TypeScript", "FastAPI", "scikit-learn", "XGBoost", "LightGBM"],
    repo: "https://github.com/Rishikeshsanin/NoCodeML",
    preview:
      "https://raw.githubusercontent.com/Rishikeshsanin/NoCodeML/main/screenshots/landing-page.png",
  },
  {
    name: "Auralis",
    eyebrow: "Music · Multi-provider",
    description:
      "Multi-provider music product coordinating discovery, metadata and playback across providers with full-song playback, live radio, playlists and artwork-driven theming.",
    stack: ["JavaScript", "Vercel Functions", "YouTube API", "Audius", "Jamendo", "hls.js"],
    repo: "https://github.com/Rishikeshsanin/auralis-music",
    live: "https://auralis-music-lime.vercel.app",
    preview:
      "https://image.thum.io/get/width/1200/crop/720/noanimate/https://auralis-music-lime.vercel.app",
  },
  {
    name: "EchoType",
    eyebrow: "Offline AI · Desktop",
    description:
      "Privacy-first desktop dictation architecture built around local speech recognition, Indian-language support, push-to-talk, transcript cleanup and system-wide text injection.",
    stack: ["Python", "PySide6", "Qt", "Local ASR", "CUDA", "Desktop Services"],
    repo: "https://github.com/Rishikeshsanin/EchoType",
    visual: "ET",
  },
  {
    name: "Socio Drift",
    eyebrow: "Generative AI · Startup",
    description:
      "Prompt-conditioned generative music concept for jingles and sonic identities, presented through Mew Thetis as a Karnataka Elevate 2025 finalist.",
    stack: ["Python", "TensorFlow", "LSTM", "Transformers", "Gemini API"],
    repo: "https://github.com/Rishikeshsanin/SocioDrift",
    visual: "SD",
  },
];

const experience = [
  {
    period: "May 2026 — Jul 2026",
    role: "Assistant Teaching Faculty Intern",
    company: "RICON Technologies",
    description:
      "Supported C and Python theory/lab sessions, prepared programming exercises and mentored students through debugging and core programming concepts.",
  },
  {
    period: "2025",
    role: "Co-Founder",
    company: "Mew Thetis",
    description:
      "Presented Socio Drift, an AI-powered music-generation product concept, as a Karnataka Elevate 2025 finalist.",
  },
  {
    period: "Jun 2024 — Jul 2024",
    role: "Cybersecurity Intern",
    company: "Dhee Data Center",
    description:
      "Built a Python malware-detection workflow with preprocessing and feature engineering, then evaluated Random Forest, SVM and XGBoost models.",
  },
];

const skills = [
  {
    title: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Responsive UI", "Accessibility", "CSS"],
  },
  {
    title: "Backend & Data",
    items: ["REST APIs", "PostgreSQL", "Supabase", "Firebase", "FastAPI"],
  },
  {
    title: "AI / ML",
    items: ["LLMs", "scikit-learn", "TensorFlow", "XGBoost", "Applied AI"],
  },
  {
    title: "Engineering",
    items: ["Git", "GitHub", "Docker", "Vercel", "System Design"],
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d="M7 17 17 7M8 7h9v9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path
        fill="currentColor"
        d="M12 .7a11.3 11.3 0 0 0-3.6 22c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.5 4.3 18.5 4.6 18.5 4.6c.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.1v3.1c0 .3.2.7.8.6A11.3 11.3 0 0 0 12 .7Z"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header shell">
        <a href="#top" className="brand soft-button" aria-label="Rishikesh Munnaluri home">
          <span className="brand-mark">RM</span>
          <span className="brand-name">Rishikesh</span>
        </a>

        <nav className="nav soft-panel" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="soft-button compact" href="https://raw.githubusercontent.com/Rishikeshsanin/portfolio-main/main/public/rishi-resume.pdf" target="_blank" rel="noreferrer">
          Resume <ArrowIcon />
        </a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy" id="main-content">
          <div className="availability soft-pill">
            <span className="status-dot" /> Open to software engineering opportunities
          </div>
          <p className="eyebrow">Software Engineer · Full Stack & Applied AI</p>
          <h1>
            I build products that feel <span>simple</span> on the surface and stay solid underneath.
          </h1>
          <p className="hero-description">
            Final-year CSE (AI & ML) student at RV University building end-to-end software across realtime systems, backend platforms and applied AI—with product quality, reliability and clean UX in mind.
          </p>
          <div className="hero-actions">
            <a href="#work" className="primary-button">Explore my work <ArrowIcon /></a>
            <a href="mailto:rishikeshjonin@gmail.com" className="soft-button">Email me</a>
          </div>
          <div className="social-row" aria-label="Social links">
            <a href="https://github.com/Rishikeshsanin" target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
            <a href="https://www.linkedin.com/in/rishikesh-munnaluri-143b34293/" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
            <span>Bengaluru, India</span>
          </div>
        </div>

        <aside className="hero-visual" aria-label="Profile overview">
          <div className="portrait-shell soft-panel">
            <div className="portrait-ring">
              <img
                src="https://raw.githubusercontent.com/Rishikeshsanin/portfolio-main/main/src/app/assets/imgs/rishi.jpeg"
                alt="Rishikesh Munnaluri"
              />
            </div>
            <div className="profile-card inset-panel">
              <span>Currently focused on</span>
              <strong>Software Engineering</strong>
              <p>Backend systems · Product engineering · Applied AI</p>
            </div>
          </div>
          <div className="stat-grid">
            <div className="stat soft-panel"><strong>7</strong><span>Flagship projects</span></div>
            <div className="stat soft-panel"><strong>4</strong><span>Live tier-A builds</span></div>
            <div className="stat soft-panel"><strong>3</strong><span>Experience tracks</span></div>
            <div className="stat soft-panel"><strong>2027</strong><span>Graduation</span></div>
          </div>
        </aside>
      </section>

      <section className="section shell" id="about">
        <div className="section-heading">
          <p className="eyebrow">01 · About</p>
          <h2>Engineer first. Product-minded always.</h2>
          <p>
            I like taking ambitious ideas through the whole engineering cycle—from interface and API design to databases, realtime state, AI workflows, testing and deployment.
          </p>
        </div>

        <div className="about-grid">
          <article className="about-card soft-panel large-card">
            <span className="card-kicker">What I care about</span>
            <h3>Useful software, not portfolio theatre.</h3>
            <p>
              My strongest projects are products I can run, demo and defend technically. I care about reliable state, clear architecture, responsive UX and choosing AI only where it adds real value.
            </p>
            <div className="focus-cloud">
              {["Backend Systems", "Full Stack", "Realtime Apps", "Applied AI", "Product Engineering", "API Design"].map((item) => (
                <span key={item} className="soft-pill">{item}</span>
              ))}
            </div>
          </article>

          <article className="education-card inset-panel">
            <span className="card-kicker">Education</span>
            <h3>RV University</h3>
            <p>B.Tech (Hons) Computer Science & Engineering — AI & ML</p>
            <div className="education-meta">
              <span>2023 — 2027</span>
              <span>Bengaluru</span>
            </div>
          </article>

          <article className="achievement-card soft-panel">
            <span className="card-kicker">Selected achievement</span>
            <div className="achievement-icon">✦</div>
            <h3>Karnataka Elevate 2025 Finalist</h3>
            <p>Presented Socio Drift through Mew Thetis as an AI-powered music-generation startup project.</p>
          </article>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading row-heading">
          <div>
            <p className="eyebrow">02 · Selected work</p>
            <h2>Projects with real engineering depth.</h2>
          </div>
          <a className="soft-button compact" href="https://github.com/Rishikeshsanin?tab=repositories" target="_blank" rel="noreferrer">All repositories <ArrowIcon /></a>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className={`project-card soft-panel ${project.featured ? "project-featured" : ""}`} key={project.name}>
              <div className="project-visual inset-panel">
                {project.preview ? (
                  <img src={project.preview} alt={`${project.name} product preview`} loading={index > 1 ? "lazy" : "eager"} />
                ) : (
                  <div className="project-monogram" aria-hidden="true">{project.visual}</div>
                )}
              </div>
              <div className="project-content">
                <span className="card-kicker">{project.eyebrow}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                <div className="project-actions">
                  {project.live ? <a href={project.live} target="_blank" rel="noreferrer" className="primary-button small">Live site <ArrowIcon /></a> : null}
                  <a href={project.repo} target="_blank" rel="noreferrer" className="soft-button small"><GithubIcon /> Source</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="experience">
        <div className="section-heading">
          <p className="eyebrow">03 · Experience</p>
          <h2>Learning by shipping, teaching and building.</h2>
        </div>

        <div className="experience-layout">
          <div className="timeline soft-panel">
            {experience.map((item) => (
              <article className="timeline-item" key={`${item.company}-${item.period}`}>
                <div className="timeline-dot" />
                <span className="timeline-period">{item.period}</span>
                <h3>{item.role}</h3>
                <strong>{item.company}</strong>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <aside className="skill-stack">
            {skills.map((group) => (
              <article className="skill-card inset-panel" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tag-row">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </aside>
        </div>
      </section>

      <section className="section shell contact-section" id="contact">
        <div className="contact-card soft-panel">
          <div>
            <p className="eyebrow">04 · Contact</p>
            <h2>Have a role, internship or product problem worth solving?</h2>
            <p>
              I’m interested in software engineering, full-stack, backend and applied-AI opportunities where I can build meaningful products and grow with a strong engineering team.
            </p>
          </div>
          <div className="contact-actions">
            <a href="mailto:rishikeshjonin@gmail.com" className="primary-button">rishikeshjonin@gmail.com <ArrowIcon /></a>
            <a href="https://www.linkedin.com/in/rishikesh-munnaluri-143b34293/" target="_blank" rel="noreferrer" className="soft-button">LinkedIn <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <p>© 2026 Rishikesh Munnaluri</p>
        <p>Designed as a recruiter-first neumorphic portfolio.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
