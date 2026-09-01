import { useState } from 'react'

const links = [
  { href: '#about', label: 'Über mich' },
  { href: '#projects', label: 'Projekte' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Kontakt' },
]

interface NavLinksProps {
  className: string
  onNavigate?: () => void
}

function NavLinks({ className, onNavigate }: NavLinksProps) {
  return (
    <>
      {links.map((link) => (
        <a key={link.href} href={link.href} onClick={onNavigate} className={className}>
          {link.label}
        </a>
      ))}
    </>
  )
}

const linkClassName =
  'text-sm md:text-base font-medium text-surface hover:opacity-80 focus-visible:outline-surface'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Reserves the nav's collapsed height in the normal document flow so
          the fixed bar below doesn't cover the content that follows it. */}
      <div aria-hidden="true" className="invisible">
        <div className="container-page flex items-center py-4 md:py-5">
          <div className="hidden md:flex md:flex-wrap md:items-center md:gap-x-6 md:gap-y-2">
            <NavLinks className={linkClassName} />
          </div>
          <span className="ml-auto flex flex-col gap-1.5 p-2 md:hidden">
            <span className="block h-0.5 w-6 bg-surface" />
            <span className="block h-0.5 w-6 bg-surface" />
            <span className="block h-0.5 w-6 bg-surface" />
          </span>
        </div>
      </div>

      <nav className="fixed inset-x-0 top-0 z-50 bg-accent">
        <div className="container-page flex items-center py-4 md:py-5">
          <div className="hidden md:flex md:flex-wrap md:items-center md:gap-x-6 md:gap-y-2">
            <NavLinks className={linkClassName} />
          </div>

          <button
            type="button"
            className="ml-auto flex flex-col gap-1.5 p-2 focus-visible:outline-surface md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="block h-0.5 w-6 bg-surface" />
            <span className="block h-0.5 w-6 bg-surface" />
            <span className="block h-0.5 w-6 bg-surface" />
          </button>
        </div>

        {isOpen && (
          <div
            id="mobile-menu"
            className="container-page flex flex-col gap-y-4 border-b border-border pb-6 md:hidden"
          >
            <NavLinks className={linkClassName} onNavigate={() => setIsOpen(false)} />
          </div>
        )}
      </nav>
    </>
  )
}
