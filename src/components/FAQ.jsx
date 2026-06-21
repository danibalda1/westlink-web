import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: '¿Necesito tener conocimientos técnicos para usar la IA?',
    a: 'No. Nosotros instalamos y configuramos todo. La IA se usa desde un chat similar al que ya conoces. Si sabes escribir, sabes usarla.',
  },
  {
    q: '¿Qué hardware necesito?',
    a: 'Muy poco. Un Mini PC de 300€, un Mac Mini o incluso un equipo reciclado sirve. Nosotros te asesoramos sobre la mejor opción según el tamaño de tu empresa.',
  },
  {
    q: '¿Mis datos están seguros?',
    a: 'Completamente. Todo corre en un servidor dentro de tu oficina. No enviamos nada a la nube, ni a OpenAI, ni a Google, ni a nadie. Tus datos son tuyos.',
  },
  {
    q: '¿Esto va a sustituir a mis empleados?',
    a: 'No, al contrario. Les quita el trabajo pesado y repetitivo para que puedan centrarse en lo que realmente importa. Es una herramienta, no un reemplazo.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'El coste depende del hardware y la configuración. Pero en términos de coste mensual, es drásticamente inferior al salario de un empleado a tiempo completo. Sin seguros, sin vacaciones, sin bajas.',
  },
  {
    q: '¿Qué tipo de tareas puede hacer?',
    a: 'Responder emails, redactar presupuestos, preparar documentos, buscar información, resumir reuniones, gestionar documentación, atención al cliente, automatizar procesos… y todo lo que se te ocurra.',
  },
  {
    q: '¿Cuánto tarda la instalación?',
    a: 'El servidor lo dejamos funcionando en menos de 48 horas. La IA empieza a trabajar desde el día uno, y se vuelve más útil a medida que aprende tu negocio.',
  },
  {
    q: '¿Puedo probarlo antes de comprar?',
    a: 'Sí. Solicita una demostración sin compromiso y te enseñamos cómo funciona en tu propio negocio. Sin humo, sin presión.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Preguntas <span className="gradient-text">frecuentes</span>
          </h2>
          <p className="text-lg text-gray-500">
            Las dudas más comunes que nos llegan. Si falta alguna, pregúntanos sin problema.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="rounded-2xl bg-white border border-gray-100 card-shadow overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 lg:p-6 text-left"
                >
                  <span className="text-base font-medium text-gray-900 pr-4">
                    {faq.q}
                  </span>
                  <HiChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 lg:px-6 pb-5 lg:pb-6 text-sm text-gray-500 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
