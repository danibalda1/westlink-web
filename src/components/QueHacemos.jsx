import { motion } from 'framer-motion'
import { BsCpu, BsRobot, BsShieldCheck, BsLightbulb } from 'react-icons/bs'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const items = [
  {
    icon: BsCpu,
    title: 'IA privada en tus instalaciones',
    desc: 'No enviamos tus datos a la nube de nadie. Todo corre en hardware local controlado por ti. Tus secretos comerciales, procesos y documentos nunca salen de tu red.',
    gradient: 'from-indigo-500 to-purple-600',
    light: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    icon: BsRobot,
    title: 'Un trabajador digital, no un chat',
    desc: 'No es un chatbot bonito. Es un empleado que ejecuta tareas reales: redacta informes, procesa facturas, gestiona inventarios, coordina pedidos. Aprendizaje continuo.',
    gradient: 'from-purple-500 to-pink-600',
    light: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: BsShieldCheck,
    title: 'Cumplimiento normativo garantizado',
    desc: 'RGPD, EU AI Act, Verifactu… tu empresa cumple sin esfuerzo. La IA opera dentro de tu perímetro de seguridad. Auditoría, trazabilidad y control total.',
    gradient: 'from-emerald-500 to-teal-600',
    light: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: BsLightbulb,
    title: 'A medida de tu negocio',
    desc: 'No hay dos PYMES iguales. Analizamos tus procesos, identificamos tareas automatizables y entrenamos a tu empleado digital para que encaje perfectamente en tu día a día.',
    gradient: 'from-amber-500 to-orange-600',
    light: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
]

export default function QueHacemos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="que-hacemos" className="py-20 md:py-28 relative overflow-hidden section-subtle">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-100/40 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-badge">Qué hacemos</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-5 mb-4 text-balance">
            Tu empleado digital, instalado y funcionando
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            En Westlink no te vendemos una suscripción. Te instalamos un sistema de inteligencia artificial
            que trabaja para ti, con tus datos, en tu red, sin depender de nadie más.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl p-7 border border-gray-100 shadow-premium shadow-premium-hover transition-all duration-300 overflow-hidden"
              >
                {/* Gradient accent line */}
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${item.gradient} rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-2xl ${item.light} flex items-center justify-center text-2xl ${item.iconColor} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 gradient-primary text-white px-7 py-3.5 rounded-2xl font-semibold text-sm hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
          >
            Quiero saber más sobre mi empleado digital
          </a>
        </motion.div>
      </div>
    </section>
  )
}
