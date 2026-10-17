'use client'

import { useState } from 'react'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { Terminal, TerminalDetail, TypingTerminalLine } from '@/components/ui/terminal'
import { ArrowDownToLine, ArrowUpRight, BriefcaseBusiness, Code2, Mail, Menu, X } from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'Jewellery RFID Solution',
    type: 'Production system · Irys Group',
    description: 'A microservices-based RFID platform for jewellery operations, with Nuxt.js on the frontend, Node.js services, and gRPC communication between systems.',
    tags: ['Nuxt.js', 'Node.js', 'gRPC', 'BullMQ', 'AWS', 'Jenkins', 'Docker'],
    accent: 'coral',
  },
  {
    number: '02',
    title: 'Gym Management Platform',
    type: 'Full-stack product · Avirait Technologies',
    description: 'An end-to-end platform for memberships, payments, communication, and media. Built with a performance-first architecture and a calm, accessible UI.',
    tags: ['Next.js', 'Golang', 'PostgreSQL', 'Razorpay'],
    accent: 'lime',
  },
  {
    number: '03',
    title: 'Wedding Service Marketplace',
    type: 'Marketplace · Avirait Technologies',
    description: 'A multi-role marketplace connecting clients, service partners, and admins through package discovery, bookings, and secure payments.',
    tags: ['Next.js', 'MongoDB', 'Razorpay', 'ShadCN UI'],
    accent: 'blue',
  },
  {
    number: '04',
    title: 'Task Management Portal',
    type: 'Junior Developer · PurpleZone Pvt. Ltd.',
    description: 'A task management portal built with React.js, Node.js, and MongoDB, integrating Google Calendar and Email APIs for automated scheduling and notifications. Firebase real-time push notifications improved task update responsiveness.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Google Calendar API', 'Email API', 'Firebase'],
    accent: 'purple',
  },
  {
    number: '05',
    title: 'Ecopass',
    type: 'Final year project · Smart transit',
    description: 'A smart ticketing system that enables card-based fare deduction by route, with dedicated experiences for admins, conductors, and passengers.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'RBAC'],
    accent: 'yellow',
  },
]

const skills = ['JavaScript', 'TypeScript', 'Golang', 'Next.js', 'Nuxt.js', 'Node.js', 'Express.js', 'Gin', 'gRPC', 'Docker', 'MongoDB', 'PostgreSQL', 'Redis', 'AWS', 'Jenkins', 'Git']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="site-shell">
      <header className="topbar">
        <a href="#top" className="wordmark" onClick={closeMenu}>JS<span>.</span></a>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Primary navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="https://drive.google.com/file/d/15Qqeewr3MRnlvLmSfC4PXV88KEIDkKMk/view?usp=sharing" target="_blank" rel="noreferrer" onClick={closeMenu}>Resume</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <div className="topbar-actions">
          <a className="availability" href="#contact"><span className="status-dot" /> Available for work</a>
          <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section id="top" className="hero section-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> <TextGenerateEffect words="Software Developer · Pune, India" duration={0.7} /></p>
          <h1>Building digital<br /><em>systems</em> that matter.</h1>
          <p className="hero-lede">I&apos;m Jayant — a full-stack developer who turns complex product requirements into fast, reliable, and thoughtful web experiences.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">See my work <ArrowUpRight /></a>
            <a className="button button-resume" href="https://drive.google.com/file/d/15Qqeewr3MRnlvLmSfC4PXV88KEIDkKMk/view?usp=sharing" target="_blank" rel="noreferrer">Resume <ArrowDownToLine /></a>
            <a className="text-button" href="mailto:jayantsawarkar4103@gmail.com"><Mail /> Get in touch</a>
          </div>
        </div>
        <div className="hero-terminal">
          <Terminal>
<TypingTerminalLine command="npx user@details" delay={250}>
  <div className="terminal-details">
    <TerminalDetail label="Name" value="Jayant Sawarkar" />
    <TerminalDetail label="Experience" value="02+ years" />
    <TerminalDetail label="Role" value="Full-stack developer" />
    <TerminalDetail label="Based in" value="Pune, India" />
    <TerminalDetail label="Currently" value="Building @ Irys Group" />
<TerminalDetail label="Mission" value="Ship reliable softwares" />
  <TerminalDetail label="Interests" value="System Design · Cloud Infrastructure · Automation" />
  <TerminalDetail label="Skills" value="Next.js · Nuxt.js · Node.js · Golang · AWS · Jenkins · Docker" />
  <TerminalDetail label="GitHub" value="github.com/jayant413" />
  <TerminalDetail label="Principles" value="Clean Code · SOLID · DRY" />
  
  </div>
</TypingTerminalLine>
          </Terminal>
        </div>
      </section>

      <section className="marquee" aria-label="Technologies"><div>REACT <span>✦</span> NEXT.JS <span>✦</span> GOLANG <span>✦</span> MICROSERVICES <span>✦</span> PRODUCT ENGINEERING <span>✦</span> REACT <span>✦</span> NEXT.JS <span>✦</span> GOLANG <span>✦</span></div></section>

      <section id="about" className="about section-grid section-pad">
        <div className="section-index">01 <span>/</span> ABOUT</div>
        <div className="about-content"><p className="display-text">I care about the space between a great idea and a product people can actually use.</p><div className="about-columns"><p>With 2+ years across e-commerce, fintech-style payments, marketplaces, and internal platforms, I work comfortably from UI to database to deployment.</p><p>My sweet spot is building the connective tissue: clean APIs, resilient services, clear interfaces, and the systems that make products feel effortless.</p></div><div className="stat-row"><div><strong>02+</strong><span>years experience</span></div><div><strong>04</strong><span>production products</span></div><div><strong>08+</strong><span>core technologies</span></div></div></div>
      </section>

      <section id="work" className="work section-pad">
        <div className="section-heading"><div className="section-index">02 <span>/</span> SELECTED WORK</div><h2>Things I&apos;ve<br /><em>shipped.</em></h2><p>Real systems, real constraints, and a lot of care in the details.</p></div>
        <div className="project-list">{projects.map((project) => <article className={`project-card ${project.accent}`} key={project.number}><div className="project-number">{project.number}</div><div className="project-main"><p className="project-type">{project.type}</p><h3><TextGenerateEffect words={project.title} duration={0.7} /></h3><p className="project-description">{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
      </section>

      <section id="skills" className="skills section-grid section-pad"><div className="section-index">03 <span>/</span> SKILLS</div><div className="skills-content"><h2>Tools for turning<br /><em>ideas into impact.</em></h2><p className="skills-label">CORE SKILLS</p><div className="skill-cloud">{skills.map((skill) => <span className={['TypeScript', 'AWS', 'Node.js', 'Next.js', 'Docker'].includes(skill) ? 'skill-featured' : ''} key={skill}>{skill}</span>)}</div><div className="stack-note"><span>01</span><p>Frontend, backend, infrastructure — I like understanding how the whole thing fits together.</p></div></div></section>

      <section id="contact" className="contact section-pad"><div className="contact-inner"><div className="section-index">04 <span>/</span> CONTACT</div><h2>Have a problem<br />worth <em>solving?</em></h2><p>Whether you&apos;re building from zero or making something better, I&apos;d love to hear what you&apos;re working on.</p><a className="contact-email" href="mailto:jayantsawarkar4103@gmail.com">jayantsawarkar4103@gmail.com</a></div></section>

      <footer className="footer"><div className="wordmark">JS<span>.</span></div><p>© 2026 Jayant Sawarkar. Built with curiosity.</p><div className="socials"><a href="https://github.com/jayant413" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 /></a><a href="https://www.linkedin.com/in/jayant-sawarkar-401-" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness /></a><a href="mailto:jayantsawarkar4103@gmail.com" aria-label="Email"><Mail /></a></div></footer>
    </main>
  )
}
