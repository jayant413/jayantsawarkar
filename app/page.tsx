import { About } from '@/components/sections/about'
import { Contact, ContactReveal } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'
import { Header } from '@/components/sections/header'
import { Hero } from '@/components/sections/hero'
import { Marquee } from '@/components/sections/marquee'
import { Skills } from '@/components/sections/skills'
import { Work } from '@/components/sections/work'
import { MaskContainer } from '@/components/ui/svg-mask-effect'

export default function Page() {
  return (
    <main className="site-shell">
      <Header />
      <MaskContainer reveal={<>From a great idea to a product which <span className="text-[#e8674c]">drives growth.</span></>}>
        <Hero />
      </MaskContainer>
      <Marquee />
      <About />
      <Work />
      <Skills />
      <MaskContainer raw reveal={<ContactReveal />}>
        <Contact />
      </MaskContainer>
      <Footer />
    </main>
  )
}
