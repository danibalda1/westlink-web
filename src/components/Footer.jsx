import { HiOutlineMail, HiPhone } from 'react-icons/hi'
import { BsArrowRight } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-500">
      {/* Top CTA */}
      <div className="border-b border-gray-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-18">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              ¿Listo para que tu empresa trabaje sola?
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Un empleado digital que nunca duerme, nunca se equivoca y nunca pide aumento.
              Todo con tus datos seguros y en tus instalaciones.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 gradient-primary text-white px-7 py-3.5 rounded-2xl font-semibold text-sm hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Solicita tu visita sin compromiso
              <BsArrowRight />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Westlink SL"
              className="w-8 h-8 rounded-lg object-cover shadow-md"
            />
            <div>
              <span className="text-white font-semibold text-sm">Westlink SL</span>
              <span className="text-gray-600 text-[11px] block leading-tight mt-0.5">IA Privada para PYMES · La Rioja</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center flex-wrap justify-center gap-x-5 gap-y-2 text-xs">
            <a href="/aviso-legal.html" className="text-gray-500 hover:text-gray-300 transition-colors">Aviso Legal</a>
            <a href="/privacidad.html" className="text-gray-500 hover:text-gray-300 transition-colors">Privacidad</a>
            <a href="mailto:daniel@westlinksl.com" className="flex items-center gap-1.5 text-gray-500 hover:text-gray-300 transition-colors">
              <HiOutlineMail className="text-xs" />
              daniel@westlinksl.com
            </a>
            <a href="tel:+34648253217" className="flex items-center gap-1.5 text-gray-500 hover:text-gray-300 transition-colors">
              <HiPhone className="text-xs" />
              648 25 32 17
            </a>
          </div>

          {/* Coverage */}
          <div className="text-center md:text-left">
            <p className="text-[11px] text-gray-600">
              📍 Cubrimos: La Rioja · Álava · Navarra · Burgos · Soria · Zaragoza · Visitas gratuitas
            </p>
          </div>

          {/* Copyright */}
          <span className="text-[11px] text-gray-700">
            © {new Date().getFullYear()} Westlink SL · Villamediana de Iregua, La Rioja
          </span>
        </div>
      </div>
    </footer>
  )
}
