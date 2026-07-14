import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { BsCheckCircle, BsSend } from 'react-icons/bs'

/* ── Lead Magnet: Guía gratis "Cómo ahorrar 10h al mes en papeleo con IA" ── */

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
      if (res.ok) setEnviado(true)
      else alert('Error al enviar. Inténtalo de nuevo o escríbenos a daniel@westlinksl.com')
    } catch {
      alert('Error de conexión. Inténtalo de nuevo.')
    }
    setEnviando(false)
  }

  return (
    <section id="plan-go" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-white via-sky-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-[11px] px-3 py-1.5 rounded-full uppercase tracking-widest font-semibold">
            Plan Go — Digital
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-5 mb-4">
            Tu empleado digital por WhatsApp
            <span className="block text-sky-600">desde 49€/mes</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Sin hardware, sin instalación, sin permanencia. Tu documentación organizada al instante.
          </p>
        </motion.div>

        {/* CÓMO FUNCIONA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-10"
        >
          <h3 className="text-xs text-sky-600 font-semibold uppercase tracking-widest mb-8">CÓMO FUNCIONA</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { num: '1', title: 'Conéctate por WhatsApp', desc: 'Añades el número de tu empleado digital y empiezas a enviarle documentos directamente.' },
              { num: '2', title: 'Él los procesa al instante', desc: 'Extrae los datos, los clasifica, los organiza. Facturas, albaranes, contratos, lo que sea.' },
              { num: '3', title: 'Tú preguntas, él responde', desc: '"¿Cuánto facturamos en junio?" "Busca el contrato de García López". Respuesta en segundos.' },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 font-bold flex items-center justify-center mx-auto mb-4 text-lg">
                  {step.num}
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-2">{step.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* LO QUE CONSIGUES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-10"
        >
          <h3 className="text-xs text-sky-600 font-semibold uppercase tracking-widest mb-6">LO QUE CONSIGUES</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {[
              'Olvídate de buscar facturas perdidas — todo está organizado',
              'Dejas de perder 10h/mes en papeles que no aportan valor',
              'Tu gestor recibe la documentación ordenada → menos errores',
              'Accedes desde el móvil, estés donde estés',
              'Sin instalar nada — funciona por WhatsApp',
              'Sin permanencia — cancelas cuando quieras',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
                <BsCheckCircle className="text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs text-gray-600 text-left">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* TABLA COMPARATIVA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-12"
        >
          <h3 className="text-xs text-sky-600 font-semibold uppercase tracking-widest text-center mb-6">PLAN GO VS. HACERLO TÚ MISMO</h3>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 text-xs font-semibold border-b border-gray-100">
              <div className="px-4 py-3 text-gray-500" />
              <div className="px-4 py-3 text-sky-700 bg-sky-50 text-center">PLAN GO</div>
              <div className="px-4 py-3 text-gray-700 bg-gray-50 text-center">TÚ MISMO</div>
            </div>
            {[
              { label: 'Precio mensual', plan: '49€/mes', tu: '0€ (tu tiempo)' },
              { label: 'Horas perdidas en papeles', plan: '0h', tu: '10-15h/mes' },
              { label: 'Buscar una factura', plan: '5 segundos', tu: '15-30 minutos' },
              { label: 'Organización documentos', plan: 'Automática', tu: 'Tú mismo' },
              { label: 'Disponible cuando no estás', plan: 'Sí, 24/7', tu: 'No' },
              { label: 'Informe para el gestor', plan: 'Automático', tu: 'Lo haces tú' },
              { label: 'Pérdida de documentos', plan: '0%', tu: 'Frecuente' },
            ].map((row, i) => (
              <div key={row.label} className={`grid grid-cols-3 text-xs ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                <div className="px-4 py-2.5 text-gray-700 font-medium">{row.label}</div>
                <div className="px-4 py-2.5 text-sky-700 text-center font-semibold">{row.plan}</div>
                <div className="px-4 py-2.5 text-gray-500 text-center">{row.tu}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* LEAD MAGNET — formulario */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-lg mx-auto"
        >
          <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-white font-bold text-lg mb-2">¿Te duele el papeleo?</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Descarga gratis la guía <strong className="text-white">"Cómo ahorrar 10h al mes en papeleo con IA"</strong>
              {' '}y descubre cómo un negocio de La Rioja dejó de perder los viernes por la tarde organizando facturas, albaranes y certificados.
            </p>

            {enviado ? (
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
                <div className="text-4xl mb-3">🎉</div>
                <h4 className="text-white font-bold text-lg mb-2">¡Guía enviada!</h4>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  Revisa tu email (y la carpeta de spam por si acaso).
                  <br />
                  Si no te llega en 5 min, escríbenos a <strong>daniel@westlinksl.com</strong>
                </p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 bg-white text-sky-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-gray-100 transition-all"
                >
                  Quiero ver la demo gratuita →
                </a>
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
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
                    disabled={enviando}
                    className="w-full bg-white text-sky-700 font-bold px-6 py-3.5 rounded-xl text-sm hover:bg-gray-100 transition-all duration-300 hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    {enviando ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <BsSend />
                        Quiero la guía gratis → Empieza por 49€
                      </>
                    )}
                  </button>
                </form>
                <p className="text-[10px] text-white/50 mt-4">
                  Sin spam. Sin compromiso. IA externa (DeepSeek) sin almacenamiento de datos. 1 correo con la guía y ya.
                </p>
              </>
            )}
          </div>
        </motion.div>

        {/* CTAs finales */}
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
