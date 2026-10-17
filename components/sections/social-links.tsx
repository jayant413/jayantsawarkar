import { GithubIcon, GmailIcon, LinkedinIcon } from './icons'

export function SocialLinks() {
  return (
    <div className="socials">
      <a href="https://github.com/jayant413" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>
      <a href="https://www.linkedin.com/in/jayant-sawarkar-401-" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
      <a href="mailto:jayantsawarkar4103@gmail.com" aria-label="Gmail"><GmailIcon /></a>
    </div>
  )
}
