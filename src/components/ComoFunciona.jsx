import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { BsSearch, BsGear, BsRocket, BsGraphUpArrow } from 'react-icons/bs'

const pasos = [
  {
    icon: BsSearch,
    step: '01',
    title: 'Analizamos tu negocio',
    desc: 'Visitamos tu empresa. Observamos cómo trabajas, qué procesos se repiten, dónde pierdes tiempo. Identificamos las tareas que tu empleado digital va a asumir.',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    icon: BsGear,
    step: '02',
    title: 'Configuramos tu IA privada',
    desc: 'Instalamos el hardware y el software en tus instalaciones. Entrenamos los modelos con tu documentación, tus procesos, tu forma de trabajar. Todo corre en local.',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: BsRocket,
    step: '03',
    title: 'Formamos a tu equipo',
    desc: 'Enseñamos a tu gente a trabajar con su nuevo compañero digital. En días, no en meses. Sin jerga técnica. Cada persona sabe exactamente qué puede delegar.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: BsGraphUpArrow,
    step: '04',
    title: 'Resultados desde el día 1',
    desc: 'Tu empleado digital empieza a trabajar. Tareas que antes llevaban horas se hacen en segundos. Medimos y ajustamos. En tres meses, el ROI es evidente.',
    color: 'from-emerald-500 to-teal-600',
  },
]

export default function ComoFunciona() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Cómo funciona</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            De la visita a los resultados en 4 pasos
          </h2>
          <p className="text-lg text-gray-600">
            Nosotros hacemos el trabajo pesado. Tu equipo solo tiene que aprender a usar
            a su nuevo compañero digital.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {pasos.map((p, i) => {
            const Icon = p.icon
            const isLast = i === pasos.length - 1
            return (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-6 relative"
              >
                {/* Left column: step number + line */}
                <div className="flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white font-bold text-lg shadow-lg shrink-0`}>
                    {p.step}
                  </div>
                  {!isLast && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-gray-200 to-gray-100 my-2" />
                  )}
                </div>

                {/* Right column: content */}
                <div className={`pb-12 ${isLast ? 'pb-0' : ''}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-gray-400 text-sm font-medium">{p.step}</span>
                    <h3 className="text-xl font-bold text-gray-900">{p.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contacto"
            className="gradient-primary text-white px-8 py-4 rounded-2xl text-lg font-semibold inline-flex items-center gap-2 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
          >
            Empieza con una visita sin compromiso
          </a>
        </motion.div>
      </div>
    </section>
  )
}
