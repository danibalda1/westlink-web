import { FaWineBottle } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Top CTA */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              ¿Listo para que tu empresa trabaje sola?
            </h2>
            <p className="text-gray-400 mb-8">
              Un empleado digital que nunca duerme, nunca se equivoca y nunca pide aumento.
              Todo con tus datos seguros y en tus instalaciones.
            </p>
            <a
              href="#contacto"
              className="gradient-primary text-white px-8 py-4 rounded-2xl font-semibold inline-flex items-center gap-2 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              Solicita tu visita sin compromiso
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-white text-xs">
              <FaWineBottle />
            </div>
            <div>
              <span className="text-white font-semibold text-sm">Westlink SL</span>
              <span className="text-gray-500 text-xs block">IA Privada para PYMES · La Rioja</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="/aviso-legal.html" className="hover:text-white transition-colors">Aviso Legal</a>
            <a href="/privacidad.html" className="hover:text-white transition-colors">Privacidad</a>
            <a href="mailto:daniel@westlinksl.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <HiOutlineMail />
              daniel@westlinksl.com
            </a>
          </div>

          {/* Copyright */}
          <span className="text-xs text-gray-600">
            © {new Date().getFullYear()} Westlink SL. Empresa familiar riojana.
          </span>
        </div>
      </div>
    </footer>
  )
}
