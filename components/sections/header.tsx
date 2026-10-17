'use client'

import { useState } from 'react'
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  NavItems,
  Navbar,
} from '@/components/ui/resizable-navbar'
import { SocialLinks } from './social-links'

const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Work', link: '#work' },
  { name: 'Skills', link: '#skills' },
  { name: 'Resume', link: 'https://drive.google.com/file/d/1oXLRk9Lkb1IlqgxWRXh4M7KHkk6u9xNy/view', external: true },
  { name: 'Contact', link: '#contact' },
]

const Wordmark = () => (
  <a href="#top" className="wordmark relative z-20 px-2">JS<span>.</span></a>
)

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <Navbar className="top-4">
      <NavBody>
        <Wordmark />
        <NavItems items={navItems} />
        <div className="relative z-20 flex items-center gap-5">
          <SocialLinks />
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <Wordmark />
          <MobileNavToggle isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
        </MobileNavHeader>
        <MobileNavMenu isOpen={menuOpen} onClose={closeMenu}>
          {navItems.map((item) => (
            <a key={item.name} href={item.link} onClick={closeMenu} {...(item.external && { target: '_blank', rel: 'noreferrer' })} className="text-sm font-bold uppercase tracking-[.12em]">{item.name}</a>
          ))}
          <SocialLinks />
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
