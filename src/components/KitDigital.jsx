import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { BsClockHistory } from 'react-icons/bs'
import { HiOutlineLightningBolt } from 'react-icons/hi'

export default function KitDigital() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="kit-digital" className="py-20 md:py-28 relative overflow-hidden section-subtle">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-80 h-80 bg-amber-100/50 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 right-1/4 w-72 h-72 bg-orange-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 text-amber-700 text-[11px] px-3 py-1.5 rounded-full uppercase tracking-widest font-semibold">
            Próximamente
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-5 mb-4 text-balance">
            Kit Digital — subvenciones para tu PYME
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            El Gobierno subvenciona hasta 12.000€ por empresa para implantar inteligencia artificial.
            Estamos en proceso de homologación como Agentes Digitalizadores.
          </p>
        </motion.div>

        {/* Coming soon card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-3xl border border-amber-100 overflow-hidden shadow-premium-lg">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 px-6 sm:px-8 py-6 border-b border-amber-100 text-center">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center text-2xl text-amber-600 mx-auto mb-4">
                <BsClockHistory />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Aún no está disponible</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-md mx-auto">
                Estamos tramitando nuestra inscripción como Agentes Digitalizadores para
                poder acogernos al programa Kit Digital. Cuando esté listo, lo sabrás.
              </p>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-3 bg-amber-50/50 rounded-xl p-4">
                <HiOutlineLightningBolt className="text-amber-600 text-base mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">¿Qué significa esto para ti?</p>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Cuando seamos Agentes Digitalizadores, podrás usar tu bono del Kit Digital
                    para pagar la implantación de tu empleado digital. Sin adelantar ni un euro.
                    Mientras tanto, puedes contratar el servicio con nuestros precios directos
                    y cuando el bono esté disponible, hacemos los ajustes necesarios.
                  </p>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p className="text-xs text-gray-400">
                  ¿Quieres que te avisemos cuando esté disponible?{' '}
                  <a href="#contacto" className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
                    Déjanos tu contacto
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
