import { motion } from 'framer-motion'
import { BsCpu, BsRobot, BsShieldCheck, BsLightbulb } from 'react-icons/bs'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const items = [
  {
    icon: BsCpu,
    title: 'IA privada en tus instalaciones',
    desc: 'No enviamos tus datos a la nube de nadie. Todo corre en hardware local controlado por ti. Tus secretos comerciales, procesos y documentos nunca salen de tu red.',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    icon: BsRobot,
    title: 'Un empleado virtual, no un chatbot',
    desc: 'No es un chat bonito. Es un trabajador digital que ejecuta tareas reales: redacta informes, procesa facturas, gestiona inventarios, coordina pedidos. Aprendizaje continuo.',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: BsShieldCheck,
    title: 'Cumplimiento normativo garantizado',
    desc: 'RGPD, EU AI Act, Verifactu… tu empresa cumple sin esfuerzo. La IA opera dentro de tu perímetro de seguridad. Auditoría, trazabilidad y control total.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: BsLightbulb,
    title: 'A medida de tu negocio',
    desc: 'No hay dos PYMES iguales. Analizamos tus procesos, identificamos tareas automatizables y entrenamos a tu empleado digital para que encaje perfectamente en tu día a día.',
    color: 'from-amber-500 to-orange-600',
  },
]

export default function QueHacemos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="que-hacemos" className="py-20 md:py-28 relative overflow-hidden section-gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Qué hacemos</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Tu empleado digital, instalado y funcionando
          </h2>
          <p className="text-lg text-gray-600">
            En Westlink no te vendemos una suscripción. Te instalamos un sistema de inteligencia artificial
            que trabaja para ti, con tus datos, en tu red, sin depender de nadie más.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 card-shadow card-shadow-hover transition-all duration-300 border border-gray-100"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-2xl mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>

                {/* Hover gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r ${item.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
