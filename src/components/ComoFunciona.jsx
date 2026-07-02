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
    gradient: 'from-indigo-500 to-purple-600',
    light: 'bg-indigo-50',
  },
  {
    icon: BsGear,
    step: '02',
    title: 'Configuramos tu IA privada',
    desc: 'Instalamos el hardware y el software en tus instalaciones. Entrenamos los modelos con tu documentación, tus procesos, tu forma de trabajar. Todo corre en local.',
    gradient: 'from-purple-500 to-pink-600',
    light: 'bg-purple-50',
  },
  {
    icon: BsRocket,
    step: '03',
    title: 'Formamos a tu equipo',
    desc: 'Enseñamos a tu gente a trabajar con su nuevo compañero digital. En días, no en meses. Sin jerga técnica. Cada persona sabe exactamente qué puede delegar.',
    gradient: 'from-amber-500 to-orange-600',
    light: 'bg-amber-50',
  },
  {
    icon: BsGraphUpArrow,
    step: '04',
    title: 'Resultados desde el día 1',
    desc: 'Tu empleado digital empieza a trabajar. Tareas que antes llevaban horas se hacen en segundos. Medimos y ajustamos. En tres meses, el ROI es evidente.',
    gradient: 'from-emerald-500 to-teal-600',
    light: 'bg-emerald-50',
  },
]

export default function ComoFunciona() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-indigo-50/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-purple-50/40 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-badge">Cómo funciona</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-5 mb-4 text-balance">
            De la visita a los resultados en 4 pasos
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Nosotros hacemos el trabajo pesado. Tu equipo solo tiene que aprender a usar
            a su nuevo compañero digital.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-indigo-200 via-purple-200 to-emerald-200 hidden sm:block" />

          <div className="space-y-0">
            {pasos.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative flex gap-6 pb-12 last:pb-0"
                >
                  {/* Step circle */}
                  <div className="relative z-10 shrink-0">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white shadow-lg`}>
                      <Icon className="text-xl" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-white rounded-2xl p-5 border border-gray-100 shadow-premium hover:shadow-premium-lg transition-all duration-300 group">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${p.light} ${p.gradient.includes('indigo') ? 'text-indigo-700' : p.gradient.includes('purple') ? 'text-purple-700' : p.gradient.includes('amber') ? 'text-amber-700' : 'text-emerald-700'}`}>
                        Paso {p.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 gradient-primary text-white px-7 py-3.5 rounded-2xl text-base font-semibold hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Empieza con una visita sin compromiso
          </a>
        </motion.div>
      </div>
    </section>
  )
}
