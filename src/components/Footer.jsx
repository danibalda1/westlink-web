import { HiMail, HiPhone, HiLocationMarker, HiArrowRight } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer id="contacto" className="relative bg-gray-900 text-gray-300">
      {/* Top CTA section */}
      <div className="relative -mt-24 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl gradient-bg p-10 lg:p-16 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15)_0%,transparent_60%)]" />
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                ¿Listo para tu empleado digital?
              </h3>
              <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
                Solicita una demo sin compromiso. Te enseñamos cómo funciona en tu negocio.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-primary bg-white rounded-full hover:bg-gray-50 transition-all duration-200 shadow-xl"
              >
                Solicitar demostración
                <HiArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.jpg" alt="Westlink SL" className="h-8 w-auto rounded" />
              <span className="text-lg font-semibold text-white">Westlink</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empresa familiar riojana. Instalamos empleados de inteligencia artificial
              en PYMES españolas. Tecnología privada, datos seguros, resultados reales.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Secciones
            </h4>
            <ul className="space-y-3">
              {['Qué hacemos', 'Ventajas', 'Cómo funciona', 'Casos de uso', 'FAQ'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:daniel@westlinksl.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <HiMail className="w-4 h-4 text-primary-light" />
                  daniel@westlinksl.com
                </a>
              </li>
              <li>
                <a href="tel:+34648253217" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <HiPhone className="w-4 h-4 text-primary-light" />
                  +34 648 25 32 17
                </a>
              </li>
              <li>
                <a href="https://wa.me/34648253217" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                  <FaWhatsapp className="w-4 h-4 text-green-400" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <HiLocationMarker className="w-4 h-4 text-primary-light mt-0.5" />
                Villamediana de Iregua, La Rioja
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              ¿Hablamos?
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Cuéntanos tu caso y te decimos cómo podemos ayudarte.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white gradient-bg rounded-full hover:opacity-90 transition-all duration-200 shadow-lg"
            >
              Solicitar demo
              <HiArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Westlink SL. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="/aviso-legal" className="hover:text-gray-300 transition-colors">Aviso legal</a>
            <a href="/privacidad" className="hover:text-gray-300 transition-colors">Privacidad</a>
            <a href="/privacidad#cookies" className="hover:text-gray-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
