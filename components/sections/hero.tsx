import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { Terminal, TerminalDetail, TypingTerminalLine } from '@/components/ui/terminal'
import { RESUME_URL } from '@/lib/links'
import { ArrowDownToLine, ArrowUpRight, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="hero section-grid">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> <TextGenerateEffect words="Software Developer · Pune, India" duration={0.7} /></p>
        <h1>Building digital<br /><em>systems</em> that matter.</h1>
        <p className="hero-lede">I&apos;m Jayant — a full-stack developer who turns complex product requirements into fast, reliable, and thoughtful web experiences.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#work">See my work <ArrowUpRight /></a>
          <a className="button button-resume" href={RESUME_URL} target="_blank" rel="noreferrer">Resume <ArrowDownToLine /></a>
          <a className="text-button" href="mailto:jayantsawarkar4103@gmail.com"><Mail /> Get in touch</a>
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
