import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const links = [
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Precios', href: '#precios' },
  { label: 'Sectores', href: '#sectores' },
  { label: 'Preguntas', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
]

const WA = 'https://wa.me/34648253217?text=Hola%20Dani%2C%20quiero%20ver%20c%C3%B3mo%20funciona%20el%20empleado%20digital'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/[0.08]'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="wrap flex items-center justify-between h-16 md:h-[72px]" aria-label="Navegación principal">
        {/* Marca */}
        <a href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Westlink SL — inicio">
          <img src="/logo-westlink.webp" alt="Westlink SL" className="w-8 h-8 rounded-[9px] object-cover" />
          <span className="text-[15px] font-semibold text-white tracking-[-0.3px]">Westlink</span>
        </a>

        {/* Navegación escritorio */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-[14px] text-white/60 hover:text-white rounded-lg transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+34648253217" className="text-[14px] text-white/60 hover:text-white transition-colors">
            648 25 32 17
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            Hablar con Dani
          </a>
        </div>

        {/* Móvil */}
        <div className="flex lg:hidden items-center gap-2">
          <a href="tel:+34648253217" className="text-[13px] text-white/60" aria-label="Llamar al 648 25 32 17">
            648 25 32 17
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <HiX size={20} /> : <HiMenu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-white/[0.08] bg-[#0A0A0A]/95 backdrop-blur-xl">
          <div className="wrap py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="px-3 py-3 rounded-lg text-[15px] text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="btn btn-primary mt-3"
            >
              Hablar con Dani
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
