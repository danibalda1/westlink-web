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
    desc: 'Todo corre en hardware local. Sin nubes externas, sin APIs de terceros, sin riesgos de fuga. Tus secretos comerciales, recetas y datos de clientes están seguros.',
  },
  {
    icon: BsHddNetwork,
    title: 'Sin depender de APIs externas',
    desc: 'No pagas por token, no te cortan el servicio si cambian los precios, no dependes de internet para funcionar. Tu IA funciona aunque se caiga la nube.',
  },
  {
    icon: BsGearWideConnected,
    title: 'A medida, no genérico',
    desc: 'Entrenamos y configuramos el sistema para tu negocio, tu sector, tu forma de trabajar. No compras una herramienta estándar — construimos tu herramienta.',
  },
  {
    icon: BsClockHistory,
    title: 'Disponible 24/7 los 365 días',
    desc: 'Tu empleado digital nunca duerme, nunca se pone enfermo, nunca pide vacaciones. Procesa trabajo mientras tú descansas.',
  },
  {
    icon: BsGraphUpArrow,
    title: 'ROI demostrable',
    desc: '70h/semana recuperadas por técnico. Payback en 3-6 meses. Cada hora invertida en implantación se multiplica por 10 en productividad recuperada.',
  },
  {
    icon: BsPersonCheck,
    title: 'Tu equipo trabaja mejor',
    desc: 'Libera a tu gente de tareas repetitivas. Que se dediquen a lo que realmente aporta valor: atención al cliente, estrategia, creatividad.',
  },
  {
    icon: BsCashCoin,
    title: 'Sin cuotas mensuales abusivas',
    desc: 'Pago único por implantación. El sistema es tuyo. No pagas suscripción de por vida por algo que ya está instalado y funcionando.',
  },
]

export default function Ventajas() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="ventajas" className="py-20 md:py-28 relative overflow-hidden section-gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Ventajas</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            IA privada {'>'} IA en la nube
          </h2>
          <p className="text-lg text-gray-600">
            Mientras otros te venden una suscripción mensual a una IA que vive en servidores ajenos,
            nosotros te instalamos un sistema que es 100% tuyo.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ventajas.map((v, i) => {
            const Icon = v.icon
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 card-shadow border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary text-xl mb-4">
                  <Icon />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
