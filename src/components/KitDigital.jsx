import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { BsShieldCheck, BsRocketTakeoff, BsCurrencyEuro, BsClipboardCheck } from 'react-icons/bs'
import { FaHandshake } from 'react-icons/fa'

const pasos = [
  {
    step: '1',
    title: 'Tu cliente solicita el bono',
    desc: 'En acelerapyme.gob.es. Te ayudamos con el test de diagnóstico digital si lo necesitas.',
  },
  {
    step: '2',
    title: 'Te eligen como agente',
    desc: 'Westlink aparece en el Catálogo de Agentes Digitalizadores. Te contratan directamente.',
  },
  {
    step: '3',
    title: 'Implantamos la solución',
    desc: 'Instalamos el empleado digital, el rack 3D y formamos al equipo. Como siempre.',
  },
  {
    step: '4',
    title: 'Cobramos del bono',
    desc: 'Red.es nos paga directamente. El cliente no adelanta ni un euro.',
  },
]

const coberturas = [
  { bono: '2.000 - 3.000€', segmento: 'Autónomos (0-2 emp.)', cubre: 'Starter, Hybrid Starter ✅' },
  { bono: '6.000€', segmento: 'Pequeña empresa (3-9 emp.)', cubre: 'Hybrid Business ✅' },
  { bono: '12.000€', segmento: 'Mediana empresa (10-49 emp.)', cubre: 'Business ✅' },
  { bono: 'Hasta 29.000€', segmento: 'Empresas (50-249 emp.)', cubre: 'Enterprise (parcial) + Ciberseguridad' },
]

export default function KitDigital() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="kit-digital" className="py-20 md:py-28 relative overflow-hidden section-subtle">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-80 h-80 bg-emerald-100/50 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 right-1/4 w-72 h-72 bg-teal-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 text-[11px] px-3 py-1.5 rounded-full uppercase tracking-widest font-semibold">
            Subvenciones
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-5 mb-4 text-balance">
            Puedes pagarlo con el Kit Digital
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            El Gobierno subvenciona hasta 12.000€ por empresa para implantar inteligencia artificial.
            Westlink es Agente Digitalizador homologado — el cliente no adelanta ni un euro.
          </p>
        </motion.div>

        {/* Cobertura table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12 bg-white rounded-3xl border border-emerald-100 overflow-hidden shadow-premium-lg"
        >
          <div className="px-6 sm:px-8 py-5 border-b border-emerald-100 bg-gradient-to-r from-emerald-50 to-teal-50">
            <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
              <BsCurrencyEuro className="text-emerald-600" />
              ¿Cuánto cubre cada bono?
            </h3>
          </div>
          <div className="divide-y divide-emerald-100/60">
            {coberturas.map((c) => (
              <div key={c.bono} className="px-6 sm:px-8 py-3.5 flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-5 hover:bg-emerald-50/30 transition-colors">
                <span className="text-base font-bold text-emerald-700 shrink-0">{c.bono}</span>
                <span className="text-xs text-gray-500 flex-1">{c.segmento}</span>
                <span className="text-xs font-medium text-gray-800">{c.cubre}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <h3 className="text-lg font-bold text-gray-900 text-center mb-8">Cómo funciona</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {pasos.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                className="bg-white rounded-2xl p-5 border border-gray-100 text-center relative shadow-premium hover:shadow-premium-lg hover:border-emerald-100 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-full gradient-primary text-white text-xs font-bold flex items-center justify-center mx-auto mb-3">
                  {p.step}
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1.5">{p.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
                {i < 3 && (
                  <div className="hidden sm:block absolute -right-1.5 top-1/2 -translate-y-1/2 text-emerald-300 text-sm">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="grid sm:grid-cols-3 gap-3 max-w-4xl mx-auto mb-8"
        >
          {[
            { icon: BsRocketTakeoff, title: 'Sin inversión inicial', desc: 'El cliente no paga nada. El bono cubre la implantación.' },
            { icon: FaHandshake, title: 'Nosotros gestionamos', desc: 'Tramitamos el papeleo del Kit Digital. El cliente solo firma.' },
            { icon: BsShieldCheck, title: '100% legal y auditado', desc: 'Programa oficial de Red.es. Fondos Next Generation.' },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="bg-white rounded-2xl p-5 border border-gray-100 text-center shadow-premium shadow-premium-hover transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center text-base text-emerald-600 mx-auto mb-3">
                  <Icon />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 gradient-primary text-white px-7 py-3.5 rounded-2xl font-semibold text-sm hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <BsClipboardCheck />
            Solicita información sin compromiso
          </a>
          <p className="text-xs text-gray-400 mt-3">
            Te explicamos cómo funciona y si tu empresa cumple los requisitos. Sin compromiso.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
