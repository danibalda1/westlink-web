import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const links = [
  { label: 'Qué hacemos', href: '#que-hacemos' },
  { label: 'Sectores', href: '#sectores' },
  { label: 'Ventajas', href: '#ventajas' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Hardware', href: '#hardware' },
  { label: 'Kit Digital', href: '#kit-digital' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-lg border-b border-gray-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/logo.jpg"
              alt="Westlink SL"
              className="w-10 h-10 rounded-xl object-cover shadow-lg group-hover:shadow-xl transition-shadow"
            />
            <div>
              <span className="text-lg font-bold text-gray-900">Westlink</span>
              <span className="text-xs text-gray-500 block leading-tight">IA Privada · La Rioja</span>
            </div>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contacto"
              className="gradient-primary text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              Solicita información
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-gray-200/50 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-primary/5 hover:text-primary transition-all"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={close}
                className="block gradient-primary text-white px-4 py-3 rounded-xl text-center font-semibold mt-3"
              >
                Solicita información
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
