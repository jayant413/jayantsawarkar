import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'
import { Header } from '@/components/sections/header'
import { Hero } from '@/components/sections/hero'
import { Marquee } from '@/components/sections/marquee'
import { Skills } from '@/components/sections/skills'
import { Work } from '@/components/sections/work'

export default function Page() {
  return (
    <main className="site-shell">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
