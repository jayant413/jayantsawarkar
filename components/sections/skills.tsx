const skills = ['JavaScript', 'TypeScript', 'Golang', 'Next.js', 'Nuxt.js', 'Node.js', 'Express.js', 'Gin', 'gRPC', 'Docker', 'MongoDB', 'PostgreSQL', 'Redis', 'AWS', 'Jenkins', 'Git']
const featured = ['TypeScript', 'AWS', 'Node.js', 'Next.js', 'Docker']

export function Skills() {
  return (
    <section id="skills" className="skills section-grid section-pad"><div className="section-index">03 <span>/</span> SKILLS</div><div className="skills-content"><h2>Tools for turning<br /><em>ideas into impact.</em></h2><p className="skills-label">CORE SKILLS</p><div className="skill-cloud">{skills.map((skill) => <span className={featured.includes(skill) ? 'skill-featured' : ''} key={skill}>{skill}</span>)}</div><div className="stack-note"><p>Frontend, backend, infrastructure. I like understanding how the whole thing fits together.</p></div></div></section>
  )
}
