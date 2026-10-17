import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { Terminal, TerminalDetail, TypingTerminalLine } from '@/components/ui/terminal'
import { RESUME_URL } from '@/lib/links'
import { ArrowDownToLine, ArrowUpRight, Mail } from 'lucide-react'

const coral = '#e8674c'

/**
 * Mask-layer twin of <Hero />: same classes and structure so the white buttons
 * land exactly on top of the real ones. The message is centred in the section;
 * the real text is kept (invisible) only to hold the layout.
 */
export function HeroReveal() {
  return (
    <section className="hero section-grid relative" style={{ background: '#171717', color: '#f4f1eb' }}>
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <div className="mx-auto max-w-4xl text-[clamp(28px,4vw,56px)] font-bold leading-[1.05] tracking-[-0.04em]">
          From a great idea to a product which <span style={{ color: coral }}>drives growth.</span>
        </div>
      </div>
      <div className="hero-copy" style={{ animation: 'none' }}>
        <p className="eyebrow invisible"><span className="eyebrow-line" /> Software Developer · Pune, India</p>
        <h1 className="invisible">Building digital<br /><em>systems</em> that matter.</h1>
        <p className="hero-lede invisible">I&apos;m Jayant — a full-stack developer who turns complex product requirements into fast, reliable, and thoughtful web experiences.</p>
        <div className="hero-actions">
          <span className="button" data-twin="work" style={{ background: '#fff', color: '#171717' }}>See my work <ArrowUpRight /></span>
          <span className="button" data-twin="resume" style={{ border: '1px solid #fff', color: '#fff' }}>Resume <ArrowDownToLine /></span>
          <span className="text-button" data-twin="connect" style={{ color: '#fff' }}><Mail /> Connect now</span>
        </div>
      </div>
      <div className="hero-terminal" />
    </section>
  )
}

export function Hero() {
  return (
    <section id="top" className="hero section-grid">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> <TextGenerateEffect words="Software Developer · Pune, India" duration={0.7} /></p>
        <h1>Building digital<br /><em>systems</em> that matter.</h1>
        <p className="hero-lede">I&apos;m Jayant — a full-stack developer who turns complex product requirements into fast, reliable, and thoughtful web experiences.</p>
        <div className="hero-actions">
          <a className="button button-dark" data-hero-btn="work" href="#work">See my work <ArrowUpRight /></a>
          <a className="button button-resume" data-hero-btn="resume" href={RESUME_URL} target="_blank" rel="noreferrer">Resume <ArrowDownToLine /></a>
          <a className="text-button" data-hero-btn="connect" href="mailto:jayantsawarkar4103@gmail.com"><Mail /> Connect now</a>
        </div>
      </div>
      <div className="hero-terminal">
        <Terminal>
          <TypingTerminalLine command="npx user@details" delay={250}>
            <div className="terminal-details">
              <TerminalDetail label="Name" value="Jayant Sawarkar" />
              <TerminalDetail label="Experience" value="03+ years" />
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
  )
}
