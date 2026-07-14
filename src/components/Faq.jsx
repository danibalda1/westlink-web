import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { HiChevronDown } from 'react-icons/hi'

const faqs = [
  {
    q: '¿Cuánto cuesta y qué incluye?',
    a: 'Desde 49€/mes para el Plan Go (digital, por WhatsApp, sin hardware). Si necesitas hardware local, desde 149€/mes con la Westlink Box incluida. También hay opción de pago único desde 2.300€. Sin permanencia. Sin sorpresas.',
  },
  {
    q: '¿Tengo que instalar algo?',
    a: 'En el Plan Go no instalas nada — funciona por WhatsApp. Si contratas hardware, nosotros lo instalamos y configuramos todo. No necesitas saber de tecnología.',
  },
  {
    q: '¿Y si no funciona para mi negocio?',
    a: 'Probamos primero. Te enseñamos cómo funciona con tus documentos reales. Si no te convence, no sigues. Sin permanencia, cancelas cuando quieras.',
  },
  {
    q: '¿Mis datos están seguros? ¿Y la IA por dónde los procesa?',
    a: 'En el Plan Go (49€/mes), los documentos se procesan a través de DeepSeek, una IA externa que no almacena ni entrena con tus datos. Es lo que usan miles de empresas hoy en día. Si trabajas con datos muy sensibles, elige un plan con hardware instalado en tu oficina — ahí la IA corre en tu propia red y ni yo tengo acceso.',
  },
  {
    q: '¿Vale para mi sector?',
    a: 'Funciona en bodegas, gestorías, electricistas, fontaneros, abogados, logística, clínicas, talleres… Si tienes papeles que organizar, sirve. Si no estás seguro, pregúntanos.',
  },
  {
    q: '¿En qué zonas estáis?',
    a: 'Estamos en La Rioja (Villamediana de Iregua) y hacemos visitas gratuitas en La Rioja, Álava, Navarra, Burgos, Soria y Zaragoza. Si estás fuera, escríbenos igualmente.',
  },
]

export default function Faq() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-badge">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-5 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Respuestas rápidas a lo que seguro te estás preguntando.
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="max-w-3xl mx-auto space-y-2.5">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className={`rounded-2xl border transition-all duration-300 cursor-pointer ${
                openIndex === i
                  ? 'border-indigo-100 bg-indigo-50/20 shadow-sm'
                  : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm'
              }`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5">
                <h3 className="font-semibold text-gray-900 pr-4 text-sm sm:text-[15px] leading-snug">{faq.q}</h3>
                <HiChevronDown
                  className={`text-gray-300 shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180 text-indigo-500' : ''
                  }`}
                  size={18}
                />
              </div>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 sm:px-6 pb-4 sm:pb-5 text-sm sm:text-[15px] text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
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
