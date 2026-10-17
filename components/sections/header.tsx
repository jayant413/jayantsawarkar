'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { SocialLinks } from './social-links'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="topbar">
      <a href="#top" className="wordmark" onClick={closeMenu}>JS<span>.</span></a>
      <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Primary navigation">
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="https://drive.google.com/file/d/1oXLRk9Lkb1IlqgxWRXh4M7KHkk6u9xNy/view" target="_blank" rel="noreferrer" onClick={closeMenu}>Resume</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
      <div className="topbar-actions">
        <SocialLinks />
        <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
