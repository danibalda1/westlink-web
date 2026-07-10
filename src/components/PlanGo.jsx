import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useState } from 'react'
import { useInView } from 'framer-motion'
import { BsWhatsapp, BsSearch, BsLightningCharge } from 'react-icons/bs'
import { HiOutlineCheckCircle, HiOutlineSparkles, HiArrowRight } from 'react-icons/hi'

const steps = [
  { icon: BsWhatsapp, title: 'Conéctate por WhatsApp', desc: 'Añades el número de tu empleado digital y empiezas a enviarle documentos directamente.' },
  { icon: BsLightningCharge, title: 'Él los procesa al instante', desc: 'Extrae los datos, los clasifica, los organiza. Facturas, albaranes, contratos, lo que sea.' },
  { icon: BsSearch, title: 'Tú preguntas, él responde', desc: '"¿Cuánto facturamos en junio?" "Busca el contrato de García López". Respuesta en segundos.' },
]

const beneficios = [
  'Olvídate de buscar facturas perdidas — todo está organizado',
  'Dejas de perder 10h/mes en papeles que no aportan valor',
  'Tu gestor recibe la documentación ordenada → menos errores',
  'Accedes desde el móvil, estés donde estés',
  'Sin instalar nada — funciona por WhatsApp',
  'Sin permanencia — cancelas cuando quieras',
]

const comparativa = [
  { feature: 'Precio mensual', go: '49€/mes', trad: '0€ (tu tiempo)' },
  { feature: 'Horas perdidas en papeles', go: '0h', trad: '10-15h/mes' },
  { feature: 'Buscar una factura', go: '5 segundos', trad: '15-30 minutos' },
  { feature: 'Organización documentos', go: 'Automática', trad: 'Tú mismo' },
  { feature: 'Disponible cuando no estás', go: 'Sí, 24/7', trad: 'No' },
  { feature: 'Informe para el gestor', go: 'Automático', trad: 'Lo haces tú' },
  { feature: 'Pérdida de documentos', go: '0%', trad: 'Frecuente' },
]

export default function PlanGo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEnviando(true)
    const form = e.target
    const data = Object.fromEntries(new FormData(form))
    try {
      const res = await fetch('/api/contact.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setEnviado(true)
      } else {
        alert('Error al enviar. Inténtalo de nuevo o escríbenos a daniel@westlinksl.com')
      }
    } catch {
      alert('Error de conexión. Inténtalo de nuevo.')
    }
    setEnviando(false)
  }

  return (
    <section id="plan-go" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-white via-sky-50/30 to-white">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-sky-200/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -left-32 w-80 h-80 bg-cyan-200/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-[11px] font-bold px-4 py-1.5 rounded-full mb-6 shadow-lg shadow-sky-500/20">
            <BsWhatsapp className="text-xs" />
            Plan Go — Digital
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 text-balance leading-[1.1]">
            Tu empleado digital por WhatsApp
            <span className="block mt-2 gradient-text-warm">desde 49€/mes</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Sin hardware, sin instalación, sin permanencia. Tu documentación organizada al instante.
          </p>
        </motion.div>

        {/* ── CÓMO FUNCIONA (3 pasos) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-20"
        >
          <h3 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">Cómo funciona</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="relative text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 shadow-lg shadow-sky-500/20 flex items-center justify-center">
                    <Icon className="text-2xl text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 md:right-8 w-7 h-7 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-400">
                    {i + 1}
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>
          {/* Arrow connector between steps — disabled (layout issues on desktop) */}
          {/* <div className="hidden md:flex justify-center gap-0 -mt-52 mb-0 relative z-0 opacity-30 pointer-events-none">
            <BsArrowUpShort className="text-4xl text-sky-400 ml-[16.5%]" />
            <BsArrowUpShort className="text-4xl text-sky-400 ml-[33%]" />
          </div> */}
        </motion.div>

        {/* ── BENEFICIOS ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">Lo que consigues</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {beneficios.map((b) => (
              <div key={b} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:border-sky-200 transition-all duration-200">
                <HiOutlineCheckCircle className="text-sky-500 mt-0.5 shrink-0 text-lg" />
                <span className="text-sm text-gray-700">{b}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── COMPARATIVA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h3 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">Plan Go vs. Hacerlo tú mismo</h3>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-premium overflow-hidden">
            <div className="grid grid-cols-3 text-[11px] font-semibold uppercase tracking-wider px-6 py-3 bg-gray-50 border-b border-gray-100">
              <div className="text-gray-400"></div>
              <div className="text-sky-600 text-center">Plan Go</div>
              <div className="text-gray-400 text-center">Tú mismo</div>
            </div>
            {comparativa.map((row) => (
              <div key={row.feature} className="grid grid-cols-3 px-6 py-3.5 border-b border-gray-50 last:border-0 text-sm hover:bg-gray-50/50 transition-colors">
                <div className="text-gray-700 font-medium">{row.feature}</div>
                <div className="text-sky-600 font-semibold text-center">{row.go}</div>
                <div className="text-gray-400 text-center">{row.trad}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── LEAD MAGNET + CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-sky-500 to-cyan-600 rounded-3xl p-8 md:p-10 text-center shadow-2xl shadow-sky-500/20 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-[40px]" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-[40px]" />

            <HiOutlineSparkles className="text-3xl text-white/80 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">
              ¿Te duele el papeleo?
            </h3>
            <p className="text-white/80 text-sm leading-relaxed max-w-lg mx-auto mb-6">
              Descarga gratis la guía <strong>"Cómo ahorrar 10h al mes en papeleo con IA"</strong> y descubre
              cómo una bodega de La Rioja dejó de perder los viernes por la tarde organizando facturas.
            </p>

            {enviado ? (
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                <div className="text-4xl mb-3">🎉</div>
                <h4 className="text-white font-bold text-lg mb-2">¡Guía enviada!</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Revisa tu email (y la carpeta de spam por si acaso).<br/>
                  Si no te llega en 5 min, escríbenos a <strong>daniel@westlinksl.com</strong>
                </p>
              </div>
            ) : (
              <>
              <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto space-y-3"
            >
              <input type="hidden" name="origen" value="lead-magnet-plan-go" />
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                required
                className="w-full px-4 py-3 rounded-xl text-sm bg-white/95 text-gray-900 placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="tu@email.com"
                required
                className="w-full px-4 py-3 rounded-xl text-sm bg-white/95 text-gray-900 placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
              />
              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono (opcional)"
                className="w-full px-4 py-3 rounded-xl text-sm bg-white/95 text-gray-900 placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
              />
              <button
                type="submit"
                className="w-full bg-white text-sky-700 font-bold px-6 py-3.5 rounded-xl text-sm hover:bg-gray-100 transition-all duration-300 hover:shadow-lg active:scale-[0.98]"
              >
                {enviando ? 'Enviando...' : 'Quiero la guía gratis → Empieza por 49€'}
              </button>
            </form>
            <p className="text-[10px] text-white/50 mt-4">Sin spam. Sin compromiso. 1 correo con la guía y ya.</p>
            </>
            )}
          </div>
        </motion.div>

        {/* ── CTA FINAL ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-400 mb-4">¿Prefieres ir directo al grano?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#hardware"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-800 transition-all"
            >
              Ver todos los planes
              <HiArrowRight className="text-sm" />
            </a>
            <a
              href="tel:+34648253217"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 px-5 py-3 rounded-xl border border-gray-200 text-sm font-medium transition-all"
            >
              Llamar ahora: 648 25 32 17
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
