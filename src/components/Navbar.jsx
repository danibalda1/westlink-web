import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiPhone } from 'react-icons/hi'

const links = [
  { label: 'Qué hacemos', href: '#que-hacemos' },
  { label: 'Casos de uso', href: '#casos-de-uso' },
  { label: 'Comparativa', href: '#comparativa' },
  { label: 'Ventajas', href: '#ventajas' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Precios', href: '#hardware' },
  { label: 'Cobertura', href: '#cobertura' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-strong shadow-premium border-b border-gray-200/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/logo.jpg"
                alt="Westlink SL"
                className="w-9 h-9 md:w-10 md:h-10 rounded-xl object-cover shadow-lg group-hover:shadow-xl transition-all duration-300"
              />
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-sm" />
            </div>
            <div className="hidden sm:block">
              <span className="text-base font-bold text-gray-900 leading-none">Westlink</span>
              <span className="text-[10px] text-gray-400 block leading-tight mt-0.5 font-medium">IA Privada · La Rioja</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.slice(0, -1).map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 rounded-xl hover:bg-gray-50 transition-all duration-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+34648253217"
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 rounded-xl hover:bg-indigo-50 transition-all duration-200"
            >
              <HiPhone className="text-sm" />
              648 25 32 17
            </a>
            <a
              href="#contacto"
              className="ml-2 gradient-primary text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Solicita información
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <HiX size={22} /> : <HiMenu size={22} />}
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
            className="lg:hidden glass-strong border-t border-gray-200/40 overflow-hidden shadow-xl"
          >
            <div className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className="block px-4 py-3 rounded-xl text-gray-600 font-medium hover:bg-primary/5 hover:text-primary transition-all text-sm"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-2 space-y-2">
                <a
                  href="tel:+34648253217"
                  onClick={close}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-center font-semibold text-sm bg-indigo-50 text-indigo-700"
                >
                  <HiPhone />
                  648 25 32 17
                </a>
                <a
                  href="#contacto"
                  onClick={close}
                  className="block gradient-primary text-white px-4 py-3 rounded-xl text-center font-semibold text-sm"
                >
                  Solicita información
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
