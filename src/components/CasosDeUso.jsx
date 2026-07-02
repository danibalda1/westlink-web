import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import {
  HiOutlineMail, HiOutlineDocumentSearch, HiOutlineCurrencyEuro,
  HiOutlineDocumentText, HiOutlineSearch, HiOutlineBookOpen,
  HiOutlineClipboardList, HiOutlineCollection, HiOutlineChartBar,
  HiOutlineQuestionMarkCircle, HiOutlineFolderOpen, HiOutlineLightningBolt,
} from 'react-icons/hi'

const casos = [
  { icon: HiOutlineMail, title: 'Responder correos', desc: 'Redacta y responde emails comerciales con el tono de tu empresa. Ahorra horas de gestión diaria.' },
  { icon: HiOutlineDocumentSearch, title: 'Buscar contratos', desc: 'Encuentra cualquier contrato, cláusula o documento en segundos. Sin rebuscar entre carpetas.' },
  { icon: HiOutlineCurrencyEuro, title: 'Encontrar facturas', desc: 'Localiza cualquier factura por número, cliente, fecha o importe. Olvídate del ctrl+F interminable.' },
  { icon: HiOutlineDocumentText, title: 'Crear presupuestos', desc: 'Genera presupuestos profesionales a partir de plantillas y datos históricos. En segundos.' },
  { icon: HiOutlineBookOpen, title: 'Consultar manuales', desc: 'Responde preguntas sobre procedimientos internos, normativas o manuales de producto.' },
  { icon: HiOutlineSearch, title: 'Leer PDFs', desc: 'Extrae información de decenas de PDFs simultáneamente. Resúmenes, datos clave, comparativas.' },
  { icon: HiOutlineClipboardList, title: 'Clasificar archivos', desc: 'Organiza documentos automáticamente por cliente, proyecto, tipo y fecha. Sin esfuerzo manual.' },
  { icon: HiOutlineChartBar, title: 'Generar informes', desc: 'Prepara informes de ventas, producción o cualquier KPI. Con datos actualizados al minuto.' },
  { icon: HiOutlineQuestionMarkCircle, title: 'Responder dudas', desc: 'Tu equipo pregunta y el empleado digital responde al instante, basado en documentación real.' },
  { icon: HiOutlineCollection, title: 'Organizar documentación', desc: 'Mantiene toda tu documentación empresarial estructurada, etiquetada y siempre accesible.' },
  { icon: HiOutlineLightningBolt, title: 'Automatizar procesos', desc: 'Ejecuta flujos de trabajo repetitivos sin intervención humana. Facturas, alertas, recordatorios.' },
  { icon: HiOutlineFolderOpen, title: 'Preparar ofertas', desc: 'Compila documentación comercial, histórica y técnica para preparar ofertas complejas en minutos.' },
]

export default function CasosDeUso() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="casos-de-uso" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-50/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-badge">Qué puede hacer</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-5 mb-4">
            Un empleado digital puede hacer todo esto
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            No es un chat bonito. Es un trabajador que ejecuta tareas reales,
            aprende de tu documentación y trabaja mientras tú duermes.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {casos.map((caso, i) => {
            const Icon = caso.icon
            return (
              <motion.div
                key={caso.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group relative bg-white rounded-2xl p-5 border border-gray-100 hover:border-indigo-200/60 hover:bg-indigo-50/20 transition-all duration-300 cursor-default shadow-premium-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-3 group-hover:bg-indigo-100 group-hover:scale-110 transition-all duration-300">
                  <Icon className="text-lg" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{caso.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{caso.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
