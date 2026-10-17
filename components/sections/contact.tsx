const EMAIL = 'jayantsawarkar4103@gmail.com'
const coral = '#e8674c'

/**
 * Mask-layer twin of <Contact />: same classes and structure so the email lands
 * exactly on top of the real one. The message is centred in the section; the
 * real text is kept (invisible) only to hold the layout.
 */
export function ContactReveal() {
  return (
    <section className="contact section-pad relative" style={{ background: '#171717', color: '#f4f1eb' }}>
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <div className="mx-auto max-w-4xl text-[clamp(28px,4vw,56px)] font-bold leading-[1.05] tracking-[-0.04em]">
          Let&apos;s build something <span style={{ color: coral }}>future-ready</span> together.
        </div>
      </div>
      <div className="contact-inner" style={{ animation: 'none' }}>
        <div className="section-index invisible">04 <span>/</span> CONTACT</div>
        <h2 className="invisible">Why settle for a website<br />when you can build a <em>growth engine?</em></h2>
        <p className="invisible">I build future-ready digital platforms that turn business ideas into powerful online experiences, going beyond aesthetics to blend technology, user experience, and strategic growth.</p>
        <span className="contact-email" style={{ color: '#fff', borderColor: '#fff' }}>{EMAIL}</span>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="contact section-pad"><div className="contact-inner"><div className="section-index">04 <span>/</span> CONTACT</div><h2>Why settle for a website<br />when you can build a <em>growth engine?</em></h2>
    <p>I build future-ready digital platforms that turn business ideas into powerful online experiences, going beyond aesthetics to blend technology, user experience, and strategic growth.</p>
    <a className="contact-email" href={`mailto:${EMAIL}`}>{EMAIL}</a></div></section>
  )
}
