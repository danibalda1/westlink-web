import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { BsShieldCheck, BsRocketTakeoff, BsCurrencyEuro, BsClipboardCheck } from 'react-icons/bs'
import { HiOutlineCheckCircle, HiOutlineLightningBolt, HiOutlineGlobe } from 'react-icons/hi'
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
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="kit-digital" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-80 h-80 bg-emerald-100/60 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 w-72 h-72 bg-teal-100/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-emerald-600 font-semibold text-sm tracking-widest uppercase">Subvenciones</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Puedes pagarlo con el Kit Digital
          </h2>
          <p className="text-lg text-gray-600">
            El Gobierno subvenciona hasta 12.000€ por empresa para implantar inteligencia artificial.
            Westlink es Agente Digitalizador homologado — el cliente no adelanta ni un euro.
          </p>
        </motion.div>

        {/* Cobertura table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl border border-emerald-100 overflow-hidden"
        >
          <div className="px-6 sm:px-8 py-6 border-b border-emerald-100">
            <h3 className="font-bold text-gray-900 flex items-center gap-2">
              <BsCurrencyEuro className="text-emerald-600" />
              ¿Cuánto cubre cada bono?
            </h3>
          </div>
          <div className="divide-y divide-emerald-100">
            {coberturas.map((c) => (
              <div key={c.bono} className="px-6 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 hover:bg-emerald-50/50 transition-colors">
                <span className="text-lg font-bold text-emerald-700 shrink-0">{c.bono}</span>
                <span className="text-sm text-gray-600 flex-1">{c.segmento}</span>
                <span className="text-sm font-medium text-gray-800">{c.cubre}</span>
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
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">Cómo funciona</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pasos.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="bg-white rounded-2xl p-5 border border-gray-100 text-center relative hover:shadow-lg hover:border-emerald-100 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full gradient-primary text-white text-sm font-bold flex items-center justify-center mx-auto mb-4">
                  {p.step}
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-2">{p.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
                {i < 3 && (
                  <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 text-emerald-300 text-xl">
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
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8"
        >
          {[
            { icon: BsRocketTakeoff, title: 'Sin inversión inicial', desc: 'El cliente no paga nada. El bono cubre la implantación completa.' },
            { icon: FaHandshake, title: 'Nosotros gestionamos', desc: 'Tramitamos el papeleo del Kit Digital. El cliente solo firma.' },
            { icon: BsShieldCheck, title: '100% legal y auditado', desc: 'Programa oficial de Red.es. Fondos europeos Next Generation.' },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 text-center hover:shadow-lg hover:border-emerald-100 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-xl text-emerald-600 mx-auto mb-4">
                  <Icon />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 gradient-primary text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
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
