import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import {
  BsShieldCheck, BsHddNetwork, BsGearWideConnected,
  BsClockHistory, BsGraphUpArrow, BsPersonCheck, BsCashCoin
} from 'react-icons/bs'

const ventajas = [
  {
    icon: BsShieldCheck,
    title: 'Tus datos no salen de tu empresa',
    desc: 'Todo corre en hardware local. Sin nubes externas, sin APIs de terceros, sin riesgos de fuga.',
  },
  {
    icon: BsHddNetwork,
    title: 'Sin depender de APIs externas',
    desc: 'No pagas por token, no te cortan el servicio. Tu IA funciona aunque se caiga internet.',
  },
  {
    icon: BsGearWideConnected,
    title: 'A medida, no genérico',
    desc: 'Entrenamos el sistema para tu negocio, tu sector, tu forma de trabajar.',
  },
  {
    icon: BsClockHistory,
    title: 'Disponible 24/7 los 365 días',
    desc: 'Tu empleado digital nunca duerme, nunca se pone enfermo, nunca pide vacaciones.',
  },
  {
    icon: BsGraphUpArrow,
    title: 'ROI demostrable en 3-6 meses',
    desc: 'Cada hora invertida en implantación se multiplica por 10 en productividad.',
  },
  {
    icon: BsPersonCheck,
    title: 'Tu equipo trabaja mejor',
    desc: 'Libera a tu gente de tareas repetitivas. Que se dediquen a lo que importa.',
  },
  {
    icon: BsCashCoin,
    title: 'Sin cuotas mensuales abusivas',
    desc: 'Pago único por implantación. El sistema es tuyo para siempre.',
  },
]

export default function Ventajas() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="ventajas" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-badge">Ventajas</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-5 mb-4 text-balance">
            IA privada <span className="text-gray-300 font-normal">&gt;</span> IA en la nube
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Mientras otros te venden una suscripción a una IA en servidores ajenos,
            nosotros te instalamos un sistema que es 100% tuyo.
          </p>
        </motion.div>

        {/* ── IMAGEN: Westlink Box ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-14"
        >
          <div className="relative max-w-lg mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/8 via-purple-500/5 to-transparent rounded-3xl blur-[30px]" />
            <img
              src="/images/westlink-box.jpg"
              alt="Westlink Box — hardware de IA privada"
              className="relative w-full rounded-2xl border border-gray-100 shadow-premium-lg"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ventajas.map((v, i) => {
            const Icon = v.icon
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-premium shadow-premium-hover transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 text-lg mb-4 group-hover:bg-indigo-100 group-hover:scale-110 transition-all duration-300">
                  <Icon />
                </div>
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
