const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function SocialIcon({ name }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    className: "social-icon",
  };

  if (name === "LinkedIn") {
    return (
      <svg {...commonProps}>
        <path d="M7 9.5v7M7 6.5h.01M11.5 16.5v-4.1c0-1.4.9-2.4 2.2-2.4 1.3 0 2.3 1 2.3 2.4v4.1M4.5 4.5h15a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1Z" />
      </svg>
    );
  }

  if (name === "GitHub") {
    return (
      <svg {...commonProps}>
        <path d="M9 18.5c-4 1.2-4-2-5.5-2.4M15 21.5v-2.1c0-1.1.1-1.8-.5-2.6 2.1-.2 4.2-1 4.2-4.5 0-1-.4-1.9-1.1-2.7.1-.3.1-.8-.1-1.7-.9-.2-2 .2-3.1 1.1a9.1 9.1 0 0 0-5.1 0C7.1 7.9 5.9 7.5 5 7.7c-.2.9-.2 1.4-.1 1.7-.7.8-1.1 1.7-1.1 2.7 0 3.5 2.1 4.3 4.2 4.5-.6.8-.6 1.7-.6 2.6V21.5" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M4.5 7.5h15a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z" />
      <path d="m5.5 8.5 6.5 5 6.5-5" />
    </svg>
  );
}

const footerLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mdfah1m" },
  { label: "GitHub", href: "https://github.com/mefah1m" },
  { label: "Email", href: "mailto:fahimnz2005@gmail.com" },
];

const heroButtons = [
  { label: "Download CV", href: "/Fahim_CV_Stirling_Sports.pdf", primary: true },
  { label: "Contact", href: "#contact", primary: false },
];

const skillGroups = [
  {
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      // EDIT: add your frontend skills
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "REST APIs",
      "Database design",
      "Authentication",
      // EDIT: add your backend skills
    ],
  },
  {
    title: "AI / Tools",
    items: [
      "Prompt engineering",
      "AI-assisted development",
      "Git",
      "GitHub",
      // EDIT: add your AI/tools skills
    ],
  },
  {
    title: "Other",
    items: [
      "Problem solving",
      "UI/UX thinking",
      "Team collaboration",
      "Documentation",
      // EDIT: add other relevant skills
    ],
  },
];

const educationItems = [
  {
    school: "Bachelor of Information Technology",
    details: "Auckland Institute of Studies, Auckland, New Zealand",
    period: "May 2026 – Present",
  },
  {
    school: "BSc in Computer Science and Engineering",
    details: "Daffodil International University, Dhaka, Bangladesh",
    period: "Jan 2024 – Dec 2025",
  },
];

const projectItems = [
  {
    title: "Projects coming soon",
    description:
      "I am currently building my portfolio and will add my public projects here as soon as they are ready.",
    tech: ["Next.js", "React", "API", "AI"],
    github: "https://github.com/mefah1m",
    live: "#",
  },
];

const experienceItems = [
  {
    title: "Current learning focus",
    place: "Self-directed development and academic study",
    period: "2026 – Present",
    description:
      "Building practical web development skills, learning modern full stack workflows, and exploring AI integration in software projects.",
  },
];

const contactLinks = [
  { label: "Email", href: "mailto:fahimnz2005@gmail.com", value: "fahimnz2005@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mdfah1m", value: "LinkedIn" },
  { label: "GitHub", href: "https://github.com/mefah1m", value: "GitHub" },
];

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <nav className="topbar" aria-label="Main navigation">
          <a href="#home" className="brand" aria-label="Go to homepage">
            MD FAHIM
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <a href="#contact" className="nav-button">
            Contact
          </a>
        </nav>
      </header>

      <main id="home" className="page-shell">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">FULL STACK DEVELOPER</p>
            <h1 id="hero-title">
              Hi, I&apos;m <span>MD FAHIM</span>
            </h1>
            <p className="hero-summary">
              Bachelor of Information Technology student in Auckland, New Zealand,
              passionate about full stack development, user-focused web applications,
              and AI-powered product ideas.
            </p>

            <div className="hero-actions">
              {heroButtons.map((button) => (
                <a
                  key={button.label}
                  href={button.href}
                  className={button.primary ? "primary-button" : "secondary-button"}
                  target={button.primary ? undefined : undefined}
                  rel={button.primary ? undefined : undefined}
                  download={button.primary ? "cv.pdf" : undefined}
                >
                  {button.label}
                </a>
              ))}
            </div>

            <ul className="hero-meta" aria-label="Highlights">
              <li>Auckland, New Zealand</li>
              <li>Open to graduate and junior developer roles</li>
            </ul>
          </div>

          <aside className="hero-card" aria-label="Profile snapshot">
            <p className="card-label">Current focus</p>
            <h2>Full stack development</h2>
            <ul>
              <li>React.js & Next.js</li>
              <li>Node.js & API development</li>
              <li>AI-powered product ideas</li>
            </ul>
          </aside>
        </section>

        <section id="about" className="about" aria-labelledby="about-title">
          <div className="section-heading">
            <p className="eyebrow">ABOUT ME</p>
            <h2 id="about-title">Building practical solutions with a strong technical foundation.</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I am a Bachelor of Information Technology student in Auckland, New Zealand,
                with a strong interest in full stack web development and AI integration.
                I enjoy learning how digital products work end to end, from the user interface
                to the backend logic that supports real-world functionality.
              </p>
              <p>
                My goal is to contribute to teams that value practical problem-solving,
                continuous learning, and thoughtful design. I am especially interested in
                projects that combine modern web development with automation, data, and AI-driven
                experiences.
              </p>
            </div>

            <aside className="about-card" aria-label="Professional profile summary">
              <p className="card-label">Profile</p>
              <ul>
                <li>Full stack developer focus</li>
                <li>AI integration interest</li>
                <li>Strong attention to user experience</li>
                <li>Interested in graduate opportunities</li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="skills" className="skills" aria-labelledby="skills-title">
          <div className="section-heading">
            <p className="eyebrow">SKILLS</p>
            <h2 id="skills-title">Tools and technologies I’m developing for real-world work.</h2>
          </div>

          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article key={group.title} className="skill-card">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="education" aria-labelledby="education-title">
          <div className="section-heading">
            <p className="eyebrow">EDUCATION</p>
            <h2 id="education-title">Academic background and learning path.</h2>
          </div>

          <div className="timeline">
            {educationItems.map((item) => (
              <article key={item.school} className="timeline-item">
                <div className="timeline-year">{item.period}</div>
                <div className="timeline-content">
                  <h3>{item.school}</h3>
                  <p>{item.details}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="eyebrow">PROJECTS</p>
            <h2 id="projects-title">Selected work showing my technical range and problem-solving.</h2>
          </div>

          <div className="project-grid">
            {projectItems.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                </div>

                <p>{project.description}</p>

                <div className="project-tech" aria-label="Tech stack used">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <p className="eyebrow">EXPERIENCE</p>
            <h2 id="experience-title">Relevant roles and volunteer experience.</h2>
          </div>

          <div className="timeline experience-list">
            {experienceItems.map((item) => (
              <article key={item.title} className="timeline-item">
                <div className="timeline-year">{item.period}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p className="timeline-place">{item.place}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact" aria-labelledby="contact-title">
          <div className="section-heading">
            <p className="eyebrow">CONTACT</p>
            <h2 id="contact-title">Let’s connect.</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <p className="card-label">Get in touch</p>
              <ul className="contact-list">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <span>{link.label}</span>
                    <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
                      <SocialIcon name={link.label} />
                      <span>{link.value}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <form className="contact-form" action="mailto:your.email@example.com" method="post" encType="text/plain">
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" />
              </label>

              <label>
                Email
                <input type="email" name="email" placeholder="you@example.com" />
              </label>

              <label>
                Message
                <textarea name="message" rows="5" placeholder="Tell me about your opportunity" />
              </label>

              <button type="submit" className="primary-button">Send message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <p className="footer-label">MD FAHIM</p>
            <p className="footer-copy">
              Bachelor of Information Technology student in Auckland, New Zealand.
            </p>
          </div>

          <div className="footer-links" aria-label="Social links">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                <SocialIcon name={link.label} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>        </div>      </footer>
    </>
  );
}
