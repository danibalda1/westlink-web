import { motion } from 'framer-motion'
import { HiClock, HiCurrencyDollar, HiAcademicCap, HiShieldCheck, HiServer, HiLockClosed, HiCog } from 'react-icons/hi'

const ventajas = [
  {
    icon: HiClock,
    title: 'Disponible 24/7',
    desc: 'Tu empleado IA nunca descansa. Atiende, procesa y trabaja a cualquier hora, todos los días del año.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: HiCurrencyDollar,
    title: 'Coste muy inferior',
    desc: 'Por una fracción del coste de un empleado tradicional, tienes a alguien trabajando tiempo completo sin sueldos, seguros ni cargas sociales.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: HiAcademicCap,
    title: 'Memoria infinita',
    desc: 'Nunca olvida un proceso, un procedimiento o una instrucción. Lo que aprende hoy, lo recuerda siempre. Sin necesidad de repetirle las cosas.',
    color: 'from-violet-500 to-violet-600',
  },
  {
    icon: HiCog,
    title: 'Aprende y mejora',
    desc: 'Cada interacción lo hace más útil. Se adapta a tu forma de trabajar, a tu vocabulario y a las necesidades específicas de tu negocio.',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: HiShieldCheck,
    title: 'Totalmente seguro',
    desc: 'Implementamos protocolos de seguridad, cifrado y control de acceso. Tu información está protegida en todo momento.',
    color: 'from-rose-500 to-rose-600',
  },
  {
    icon: HiServer,
    title: 'Instalado en tu empresa',
    desc: 'Todo corre en hardware que tú controlas. Nada de servidores externos, nada de depender de terceros. Tus datos, tu propiedad.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: HiLockClosed,
    title: 'Datos 100% privados',
    desc: 'Tu información nunca sale de tus instalaciones. Sin riesgos de filtración, sin cumplir con políticas de datos de terceros.',
    color: 'from-indigo-500 to-indigo-600',
  },
]

export default function Ventajas() {
  return (
    <section id="ventajas" className="relative py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      {/* Decorative background */}
      <div className="absolute inset-0 subtle-grid opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            ¿Por qué un empleado IA?
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Siete razones por las que tu empresa debería tener uno. Y ninguna implica
            despedir a nadie.
          </p>
        </div>

        {/* Ventajas grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ventajas.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white rounded-2xl p-8 card-shadow card-shadow-hover border border-gray-100 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
