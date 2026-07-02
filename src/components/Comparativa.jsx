import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { HiOutlineCheckCircle, HiOutlineXCircle, HiOutlineMinusCircle } from 'react-icons/hi'
import { BsPerson, BsRobot } from 'react-icons/bs'

const comparativas = [
  {
    feature: 'Disponibilidad',
    tradicional: '8h/día · 22 días al mes',
    digital: '24h/7 · 365 días al año',
    score: 'digital',
  },
  {
    feature: 'Velocidad de aprendizaje',
    tradicional: '3-6 meses hasta ser productivo',
    digital: 'Horas. Lee toda tu documentación al instante',
    score: 'digital',
  },
  {
    feature: 'Procesamiento de documentos',
    tradicional: '30 min por factura manual',
    digital: '8 segundos por factura',
    score: 'digital',
  },
  {
    feature: 'Privacidad de datos',
    tradicional: 'Depende de la persona',
    digital: '100% local. Nunca salen de tu empresa',
    score: 'digital',
  },
  {
    feature: 'Coste mensual',
    tradicional: '2.000 - 4.000€ (sueldo + SS)',
    digital: '0€ (pago único de implantación)',
    score: 'digital',
  },
  {
    feature: 'Escalabilidad',
    tradicional: 'Contratar + formar a más personas',
    digital: 'Copiar configuración. Operativo en horas',
    score: 'digital',
  },
  {
    feature: 'Capacidad de análisis',
    tradicional: 'Limitada por tiempo y memoria',
    digital: 'Miles de documentos simultáneamente',
    score: 'digital',
  },
  {
    feature: 'Toma de decisiones humanas',
    tradicional: 'Sí. Aporta criterio y experiencia',
    digital: 'No. Ejecuta y asiste, no decide',
    score: 'tradicional',
  },
  {
    feature: 'Relaciones personales',
    tradicional: 'Sí. Clientes, proveedores, equipo',
    digital: 'No. Herramienta de apoyo interno',
    score: 'tradicional',
  },
  {
    feature: 'Creatividad y estrategia',
    tradicional: 'Sí. Aporta ideas y visión',
    digital: 'No. Optimiza procesos existentes',
    score: 'tradicional',
  },
]

export default function Comparativa() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="comparativa" className="py-20 md:py-28 relative overflow-hidden section-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-badge">Comparativa</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-5 mb-4">
            Empleado tradicional vs. Empleado digital
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            No se trata de sustituir personas. Se trata de que tu equipo pueda centrarse
            en lo que realmente importa mientras la máquina hace el trabajo pesado.
          </p>
        </motion.div>

        {/* Tabla comparativa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-5xl mx-auto"
        >
          {/* Cabeceras de columna */}
          <div className="hidden md:grid grid-cols-[1fr_1fr_1fr] gap-4 mb-4 px-4">
            <div />
            <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-amber-50 border border-amber-100">
              <BsPerson className="text-amber-600 text-lg shrink-0" />
              <span className="font-semibold text-gray-800 text-sm">Empleado tradicional</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-indigo-50 border border-indigo-100">
              <BsRobot className="text-indigo-600 text-lg shrink-0" />
              <span className="font-semibold text-gray-800 text-sm">Empleado digital Westlink</span>
            </div>
          </div>

          {/* Filas */}
          <div className="space-y-2">
            {comparativas.map((item, i) => {
              const isDigital = item.score === 'digital'
              const isTradicional = item.score === 'tradicional'
              return (
                <motion.div
                  key={item.feature}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.04 }}
                  className="grid md:grid-cols-[1fr_1fr_1fr] gap-2 md:gap-4 items-center px-3 py-3.5 md:px-4 md:py-4 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 transition-all duration-200"
                >
                  {/* Feature name */}
                  <div className="font-semibold text-gray-900 text-sm flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                      isDigital ? 'bg-indigo-500' : isTradicional ? 'bg-amber-500' : 'bg-gray-300'
                    }`} />
                    {item.feature}
                  </div>

                  {/* Tradicional */}
                  <div className={`text-sm px-4 py-2.5 md:py-2 rounded-xl flex items-center gap-2 ${
                    isTradicional
                      ? 'bg-emerald-50 text-emerald-700 font-medium'
                      : 'bg-gray-50 text-gray-500'
                  }`}>
                    {isTradicional ? (
                      <HiOutlineCheckCircle className="text-emerald-500 shrink-0" />
                    ) : isDigital ? (
                      <HiOutlineXCircle className="text-red-300 shrink-0" />
                    ) : (
                      <HiOutlineMinusCircle className="text-gray-300 shrink-0" />
                    )}
                    <span className="leading-relaxed">{item.tradicional}</span>
                  </div>

                  {/* Digital */}
                  <div className={`text-sm px-4 py-2.5 md:py-2 rounded-xl flex items-center gap-2 ${
                    isDigital
                      ? 'bg-emerald-50 text-emerald-700 font-medium'
                      : 'bg-gray-50 text-gray-500'
                  }`}>
                    {isDigital ? (
                      <HiOutlineCheckCircle className="text-emerald-500 shrink-0" />
                    ) : isTradicional ? (
                      <HiOutlineXCircle className="text-red-300 shrink-0" />
                    ) : (
                      <HiOutlineMinusCircle className="text-gray-300 shrink-0" />
                    )}
                    <span className="leading-relaxed">{item.digital}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Nota al pie */}
          <div className="mt-6 bg-indigo-50/50 rounded-2xl px-5 py-4 border border-indigo-100/50 text-center">
            <p className="text-sm text-gray-600 leading-relaxed">
              <span className="font-semibold text-indigo-700">No se trata de reemplazar personas.</span>{' '}
              Se trata de que tu equipo deje de perder el tiempo con tareas repetitivas
              y se dedique a lo que realmente aporta valor.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
