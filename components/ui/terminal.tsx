'use client'

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

export function Terminal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('terminal-window', className)}>
      <div className="terminal-bar">
        <div className="terminal-controls" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="terminal-title">Jayant-Macbook — bash</span>
      </div>
      <div className="terminal-content">{children}</div>
    </div>
  )
}

export function TerminalLine({ children }: { children: ReactNode }) {
  return <div className="terminal-line">{children}</div>
}

export function TypingTerminalLine({
  command,
  delay = 0,
  children,
}: {
  command: string
  delay?: number
  children: ReactNode
}) {
  const [visibleCharacters, setVisibleCharacters] = useState(0)

  useEffect(() => {
    setVisibleCharacters(0)
    let timer: number | undefined
    const start = window.setTimeout(() => {
      timer = window.setInterval(() => {
        setVisibleCharacters((current) => {
          if (current >= command.length) {
            if (timer) window.clearInterval(timer)
            return current
          }
          return current + 1
        })
      }, 32)
    }, delay)

    return () => {
      window.clearTimeout(start)
      if (timer) window.clearInterval(timer)
    }
  }, [command, delay])

  return (
    <>
      <TerminalLine>
        <span className="terminal-prompt">Jayant-Macbook:~$</span>{' '}
        <span className="terminal-key">{command.slice(0, visibleCharacters)}</span>
        {visibleCharacters > 0 && visibleCharacters < command.length ? <span className="terminal-cursor" aria-hidden="true" /> : null}
      </TerminalLine>
      {visibleCharacters >= command.length ? children : null}
    </>
  )
}

export function TerminalDetail({ label, value }: { label: string; value: string }) {
  return (
    <TerminalLine>
      <span className="terminal-check" aria-hidden="true">✓</span>{' '}
      <span className="terminal-label">{label}:</span>{' '}
      <span className="terminal-value">{value}</span>
    </TerminalLine>
  )
}
