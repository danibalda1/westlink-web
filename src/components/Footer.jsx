import { HiArrowRight } from 'react-icons/hi'

const WA = 'https://wa.me/34648253217?text=Hola%20Dani%2C%20quiero%20ver%20c%C3%B3mo%20funciona%20el%20empleado%20digital'

/* Fecha visible de última actualización. Actualizar al tocar contenidos
   (y también dateModified del JSON-LD en index.html). */
const ULTIMA_ACTUALIZACION = '10 de septiembre de 2026'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      {/* CTA final */}
      <div className="sec-tight">
        <div className="wrap">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="h2">¿Empezamos por tu papeleo?</h2>
              <p className="body-dim mt-5">
                Escríbeme y te enseño cómo funcionaría con tus facturas y tus documentos. Sin
                compromiso y sin comerciales de por medio: hablas conmigo.
              </p>
            </div>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-primary shrink-0">
              Hablar con Dani
              <HiArrowRight />
            </a>
          </div>
        </div>
      </div>

      {/* Enlaces */}
      <div className="border-t border-white/[0.06] py-14">
        <div className="wrap grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <img src="/logo-westlink.webp" alt="Westlink SL" className="w-8 h-8 rounded-[9px] object-cover" />
              <span className="text-white text-[15px] font-semibold">Westlink SL</span>
            </div>
            <p className="text-white/40 text-[13.5px] leading-relaxed mt-5">
              Empleados digitales de IA privada para PYMES. Organizamos facturas, albaranes y
              documentos por WhatsApp. Desde Villamediana de Iregua, La Rioja.
            </p>
            <p className="text-white/40 text-[13.5px] mt-4">
              <a href="tel:+34648253217" className="hover:text-white/70 transition-colors">648 25 32 17</a>
              <br />
              <a href="mailto:daniel@westlinksl.com" className="hover:text-white/70 transition-colors">
                daniel@westlinksl.com
              </a>
            </p>
          </div>

          <div>
            <p className="mono-label mb-5">En esta página</p>
            <ul className="space-y-3 text-[13.5px]">
              {[
                ['Cómo funciona', '#como-funciona'],
                ['Planes y precios', '#precios'],
                ['Sectores', '#sectores'],
                ['Opiniones', '#testimonios'],
                ['Preguntas frecuentes', '#faq'],
                ['No es para…', '#no-es-para'],
                ['Contacto', '#contacto'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-white/55 hover:text-white transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-label mb-5">Por sector</p>
            <ul className="space-y-3 text-[13.5px]">
              <li><a href="/para/electricistas" className="text-white/55 hover:text-white transition-colors">IA para electricistas</a></li>
              <li><a href="/para/gestorias" className="text-white/55 hover:text-white transition-colors">IA para gestorías</a></li>
              <li><a href="/para/fontaneros" className="text-white/55 hover:text-white transition-colors">IA para fontaneros</a></li>
              <li><a href="/demo.html" className="text-white/55 hover:text-white transition-colors">Demo del empleado digital</a></li>
              <li><a href="/apps.html" className="text-white/55 hover:text-white transition-colors">Nuestras apps (Fe Diaria y Luna Huerto)</a></li>
              <li><a href="/llms.txt" className="text-white/55 hover:text-white transition-colors">Información para asistentes de IA</a></li>
            </ul>
          </div>

          <div>
            <p className="mono-label mb-5">Legal</p>
            <ul className="space-y-3 text-[13.5px]">
              <li><a href="/aviso-legal.html" className="text-white/55 hover:text-white transition-colors">Aviso legal</a></li>
              <li><a href="/privacidad.html" className="text-white/55 hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="/privacidad-fe-diaria.html" className="text-white/55 hover:text-white transition-colors">Privacidad · Fe Diaria</a></li>
              <li><a href="/privacidad-luna-huerto.html" className="text-white/55 hover:text-white transition-colors">Privacidad · Luna Huerto</a></li>
            </ul>
            <p className="text-white/35 text-[13px] leading-relaxed mt-6">
              Zona de servicio: La Rioja, Álava, Navarra, Burgos, Soria y Zaragoza.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/[0.06] py-7">
        <div className="wrap flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-[12.5px]">
            © {new Date().getFullYear()} Westlink SL · Villamediana de Iregua (La Rioja)
          </p>
          <p className="text-white/35 text-[12.5px]">
            Última actualización: <time dateTime="2026-09-10">{ULTIMA_ACTUALIZACION}</time>
          </p>
        </div>
      </div>
    </footer>
  )
}
