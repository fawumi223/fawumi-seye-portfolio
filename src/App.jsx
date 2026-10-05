import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  Menu,
  ShieldCheck,
  X,
} from 'lucide-react'
import './App.css'

const projects = [
  {
    number: '01',
    name: 'VELTRIX',
    type: 'AI BUSINESS INTELLIGENCE',
    problem:
      'SMEs often have valuable sales, expense, inventory and transaction data but lack a practical system for turning that data into decisions.',
    solution:
      'VELTRIX is designed as an AI business analyst that transforms structured business data into health indicators, analytics and actionable insights.',
    architecture:
      'Data ingestion → normalization → analytics → business intelligence → AI-generated insights.',
    features: [
      'Excel / CSV business data ingestion',
      'Business health analysis',
      'Sales, expense and transaction analytics',
      'Inventory and payment intelligence',
      'AI-assisted business insights',
    ],
    stack: 'FastAPI · React · PostgreSQL · AI · Data Analytics',
  },
  {
    number: '02',
    name: 'MailSentry',
    type: 'AI EMAIL INTELLIGENCE',
    problem:
      'Important business emails can disappear inside crowded inboxes, making it difficult to identify urgent, confidential, financial and action-required messages.',
    solution:
      'MailSentry is an intelligent email monitoring dashboard that connects email accounts, synchronizes messages and classifies them according to business relevance.',
    architecture:
      'Gmail OAuth → email synchronization → PostgreSQL → classification engine → priority intelligence → dashboard.',
    features: [
      'Multi-account email monitoring',
      'Gmail OAuth integration',
      'Automatic email synchronization',
      'Priority and category classification',
      'Urgency and confidentiality detection',
      'Action-required identification',
    ],
    stack: 'FastAPI · PostgreSQL · Gmail API · OAuth · AI',
  },
  {
    number: '03',
    name: 'Spectrum Arena',
    type: 'MARKETPLACE & FINTECH PLATFORM',
    problem:
      'Clients, artisans and companies need a trusted digital environment for discovering services, managing transactions and eventually moving money through a unified platform.',
    solution:
      'Spectrum Arena is a Nigerian marketplace and fintech platform designed around client-artisan relationships, digital wallets and transaction workflows.',
    architecture:
      'Django REST API → authentication → role-based platform → marketplace → wallet/payment infrastructure.',
    features: [
      'Client, artisan and company roles',
      'JWT authentication',
      'Marketplace workflows',
      'Digital wallet architecture',
      'Naira-based financial workflows',
      'Payment integration planning',
      'Savings and escrow architecture',
    ],
    stack: 'Django · DRF · PostgreSQL · JWT · Paystack',
  },
  {
    number: '04',
    name: 'V.I.A',
    type: 'AI & SOFTWARE ENGINEERING',
    problem:
      'Modern software increasingly needs intelligent automation that can interpret information, assist users and support technology-driven workflows.',
    solution:
      'V.I.A. is an AI-focused software project exploring practical intelligent systems, automation and the integration of AI into useful application workflows.',
    architecture:
      'Application layer → AI integration → structured workflows → user-facing functionality.',
    features: [
      'AI-assisted workflows',
      'Automation concepts',
      'Application-level intelligence',
      'Practical AI integration',
      'Software engineering foundations',
    ],
    stack: 'Python · AI · APIs · Software Engineering',
  },
]

const expertise = [
  {
    icon: Code2,
    title: 'Full-Stack Engineering',
    text: 'Building production-minded web applications, APIs, dashboards and backend systems.',
    tags: ['Python', 'FastAPI', 'Django', 'React', 'Next.js'],
  },
  {
    icon: BrainCircuit,
    title: 'AI & Data',
    text: 'Integrating AI, automation and data-driven workflows into practical business software.',
    tags: ['AI', 'Analytics', 'Automation', 'APIs', 'Data'],
  },
  {
    icon: ShieldCheck,
    title: 'Security-Conscious Engineering',
    text: 'Designing applications with authentication, access control and secure engineering practices in mind.',
    tags: ['Auth', 'Security', 'APIs', 'Architecture'],
  },
  {
    icon: Database,
    title: 'Business Technology',
    text: 'Connecting technology, data and business requirements to build useful digital products.',
    tags: ['PostgreSQL', 'SQL', 'Payments', 'Systems'],
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="background-grid" />

      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">FS</span>
          <span className="brand-name">FAWUMI SEYE</span>
        </a>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#expertise" onClick={closeMenu}>
            Expertise
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#credentials" onClick={closeMenu}>
            Credentials
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              SOFTWARE ENGINEERING · AI · DIGITAL SYSTEMS
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Full-Stack
              <span>Software Engineer</span>
              <em>& AI Consultant.</em>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I build modern software systems that connect technology, data
              and business decisions.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a className="button primary" href="#projects">
                Explore my work
                <ArrowDown size={17} />
              </a>

              <a className="button secondary" href="#contact">
                Let's collaborate
                <ArrowUpRight size={17} />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="system-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="system-card-top">
              <span>ENGINEERING_PROFILE</span>
              <span className="status-dot">● AVAILABLE</span>
            </div>

            <div className="system-orbit">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />

              <div className="core">
                <img
                  src="/images/fawumi-avatar.png"
                  alt="Fawumi Seye Damilare"
                  className="profile-image"
                />
                <span className="core-initials">FS</span>
              </div>

              <span className="orbit-label label-python">PYTHON</span>
              <span className="orbit-label label-ai">AI</span>
              <span className="orbit-label label-react">REACT</span>
              <span className="orbit-label label-db">POSTGRES</span>
            </div>

            <div className="system-card-bottom">
              <span>BUILD</span>
              <span>ANALYZE</span>
              <span>SECURE</span>
              <span>DEPLOY</span>
            </div>
          </motion.div>
        </section>

        <section className="intro-strip">
          <span>01 / WHAT I DO</span>
          <p>
            Software systems that connect{' '}
            <strong>technology, data and business decisions.</strong>
          </p>
        </section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <span className="section-number">01</span>
            <div>
              <p className="eyebrow">ABOUT</p>
              <h2>Engineering with purpose.</h2>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-main">
              <p className="large-text">
                I am a software engineer focused on building reliable,
                scalable and practical digital products.
              </p>

              <p>
                My work sits at the intersection of full-stack development,
                artificial intelligence, data and business technology. I
                enjoy taking complex requirements and turning them into
                structured systems people can actually use.
              </p>

              <p>
                From backend architecture and APIs to responsive interfaces,
                databases, authentication and intelligent automation, I
                approach software as a complete system rather than isolated
                pieces of code.
              </p>
            </div>

            <div className="about-aside">
              <div className="stat-card">
                <span>FOCUS</span>
                <strong>Software + AI</strong>
              </div>

              <div className="stat-card">
                <span>APPROACH</span>
                <strong>Build · Analyze · Secure</strong>
              </div>

              <div className="stat-card">
                <span>LOCATION</span>
                <strong>Nigeria · Remote</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section expertise-section" id="expertise">
          <div className="section-heading">
            <span className="section-number">02</span>
            <div>
              <p className="eyebrow">EXPERTISE</p>
              <h2>Where engineering meets strategy.</h2>
            </div>
          </div>

          <div className="expertise-grid">
            {expertise.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.article
                  className="expertise-card"
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div className="card-icon">
                    <Icon size={22} />
                  </div>

                  <span className="card-number">
                    0{index + 1}
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>

                  <div className="tag-list">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </motion.article>
              )
            })}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <span className="section-number">03</span>
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>Systems built to solve real problems.</h2>
            </div>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <motion.article
                className="case-study"
                key={project.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <div className="case-study-header">
                  <span className="project-number">{project.number}</span>

                  <div className="case-study-title">
                    <span className="project-type">{project.type}</span>
                    <h3>{project.name}</h3>
                  </div>

                  <span className="case-study-stack">
                    {project.stack}
                  </span>
                </div>

                <div className="case-study-grid">
                  <div className="case-study-column">
                    <span className="case-label">THE PROBLEM</span>
                    <p>{project.problem}</p>
                  </div>

                  <div className="case-study-column">
                    <span className="case-label">THE SOLUTION</span>
                    <p>{project.solution}</p>
                  </div>

                  <div className="case-study-column architecture-column">
                    <span className="case-label">ARCHITECTURE</span>
                    <p>{project.architecture}</p>
                  </div>

                  <div className="case-study-column">
                    <span className="case-label">KEY FUNCTIONALITY</span>
                    <ul className="feature-list">
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="case-study-footer">
                  <span>CASE STUDY / {project.number}</span>

                  <a
                    href="#contact"
                    aria-label={`Discuss ${project.name}`}
                  >
                    Discuss project
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section credentials-section" id="credentials">
          <div className="section-heading">
            <span className="section-number">04</span>
            <div>
              <p className="eyebrow">CREDENTIALS</p>
              <h2>Continuous learning. Practical engineering.</h2>
            </div>
          </div>

          <div className="credentials-grid">
            <div className="credential-block">
              <span className="credential-label">EDUCATION</span>
              <h3>BSc Cybersecurity</h3>
              <p>Ongoing · Open University of Nigeria</p>
            </div>

            <div className="credential-block">
              <span className="credential-label">ENGINEERING</span>
              <h3>Frontend / Backend Engineering & Programming</h3>
              <p>New Horizons</p>
            </div>

            <div className="credential-block">
              <span className="credential-label">AI & MACHINE LEARNING</span>
              <h3>AI and Machine Learning</h3>
              <p>New Horizons</p>
            </div>

            <div className="credential-block">
              <span className="credential-label">CYBERSECURITY</span>
              <h3>Introduction to Cybersecurity</h3>
              <p>Coursera</p>
            </div>

            <div className="credential-block">
              <span className="credential-label">AI SECURITY</span>
              <h3>Introduction to AI Security</h3>
              <p>AIESEC</p>
            </div>

            <div className="credential-block experience-block">
              <span className="credential-label">EXPERIENCE</span>
              <h3>4 Years</h3>
              <p>Technology, software engineering & digital systems</p>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <div>
              <p className="eyebrow">OPEN TO COLLABORATION</p>
              <h2>
                Have a problem worth
                <span> solving?</span>
              </h2>
              <p>
                I am open to software engineering opportunities, AI projects,
                technology partnerships and products that create measurable
                value.
              </p>
            </div>

            <div className="contact-actions">
              <a
                className="button primary"
                href="mailto:fawumiseye223@gmail.com"
              >
                Start a conversation
                <ArrowUpRight size={17} />
              </a>

              <a
                className="social-link"
                href="https://github.com/fawumi223"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a className="social-link" href="#home">
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <span className="footer-name">FAWUMI SEYE DAMILARE</span>
          <span className="footer-role">
            FULL-STACK SOFTWARE ENGINEER · AI CONSULTANT
          </span>
        </div>

        <div className="footer-contact">
          <a href="mailto:fawumiseye223@gmail.com">
            <span>EMAIL</span>
            fawumiseye223@gmail.com
          </a>

          <a
            href="https://www.tiktok.com/@codenestacademy"
            target="_blank"
            rel="noreferrer"
          >
            <span>TIKTOK</span>
            @codenestacademy
          </a>

          <a
            href="https://github.com/fawumi223"
            target="_blank"
            rel="noreferrer"
          >
            <span>GITHUB</span>
            @fawumi223
          </a>
        </div>

        <span className="footer-copy">
          © {new Date().getFullYear()} Fawumi Seye Damilare
        </span>
      </footer>
    </div>
  )
}

export default App
