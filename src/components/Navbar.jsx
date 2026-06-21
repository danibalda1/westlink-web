import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  { label: 'Qué hacemos', href: '#que-hacemos' },
  { label: 'Ventajas', href: '#ventajas' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Casos de uso', href: '#casos-de-uso' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Westlink SL"
              className="h-8 w-auto lg:h-10 rounded"
            />
            <span className="text-lg font-semibold text-gray-900 tracking-tight">
              Westlink
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white gradient-bg rounded-full hover:opacity-90 transition-all duration-200 shadow-lg shadow-primary/20"
            >
              Solicitar demo
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menú"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden glass border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-gray-600 hover:text-primary py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="block text-center px-5 py-3 text-sm font-semibold text-white gradient-bg rounded-full"
            >
              Solicitar demo
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
