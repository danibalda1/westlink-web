import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'

const faqs = [
  {
    q: '¿Qué diferencia hay entre un chatbot y vuestro empleado virtual?',
    a: 'Un chatbot responde preguntas con respuestas prefabricadas. Nuestro empleado virtual ejecuta tareas reales: redacta documentos, procesa facturas, gestiona inventarios, coordina pedidos. Es un trabajador digital, no un asistente de conversación.',
  },
  {
    q: '¿Mis datos están seguros?',
    a: 'Completamente. Todo el sistema se instala en hardware local dentro de tus instalaciones. No enviamos datos a ninguna nube externa. Tus secretos comerciales, procesos y datos de clientes nunca salen de tu red. Cumplimos RGPD y EU AI Act.',
  },
  {
    q: '¿Necesito internet para que funcione?',
    a: 'No. La IA corre en tu propio hardware. Si se cae internet, tu empleado digital sigue trabajando. Eres independiente de conexiones externas, APIs de terceros y servidores en la nube.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'No tenemos cuotas mensuales. Es una inversión única por implantación. El sistema es tuyo para siempre. El payback suele llegar en 3-6 meses. Te damos un presupuesto personalizado después de analizar tu caso.',
  },
  {
    q: '¿Cuánto tarda la implantación?',
    a: 'Depende del tamaño de tu empresa, pero la mayoría de los casos están operativos en 1-2 semanas. La primera semana visitamos tu empresa y analizamos procesos. La segunda instalamos y formamos a tu equipo.',
  },
  {
    q: '¿Vale para mi sector?',
    a: 'Nos enfocamos en bodegas, gestorías, despachos de abogados, logística, agroalimentario, clínicas y consultorías. Pero si tu sector no está en la lista, háblanos. Seguro que encontramos cómo ayudarte.',
  },
  {
    q: '¿Necesito conocimientos técnicos?',
    a: 'Ninguno. Nosotros instalamos todo y formamos a tu equipo. Tus empleados solo necesitan saber usar un ordenador. El resto lo hacemos nosotros.',
  },
  {
    q: '¿Y si no funciona como esperaba?',
    a: 'Hacemos un seguimiento continuo durante el primer mes. Ajustamos y mejoramos hasta que el sistema funcione exactamente como necesitas. No te dejamos tirado.',
  },
]

export default function Faq() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-gray-600">
            Las dudas más comunes cuando las PYMES descubren que pueden tener su propia IA privada.
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`rounded-2xl border transition-all duration-300 cursor-pointer ${
                openIndex === i
                  ? 'border-primary/20 bg-primary/[0.02] shadow-sm'
                  : 'border-gray-100 bg-white hover:border-gray-200'
              }`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex items-center justify-between px-6 py-5">
                <h3 className="font-semibold text-gray-900 pr-4 text-sm sm:text-base">{faq.q}</h3>
                <HiChevronDown
                  className={`text-gray-400 shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180 text-primary' : ''
                  }`}
                  size={20}
                />
              </div>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-gray-600 leading-relaxed text-sm sm:text-base border-t border-gray-100 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
