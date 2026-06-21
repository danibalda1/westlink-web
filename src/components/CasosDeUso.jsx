import { HiDocumentText, HiOfficeBuilding, HiCalculator, HiHome, HiChip, HiHeart, HiTruck, HiBriefcase } from 'react-icons/hi'
import { motion } from 'framer-motion'

const casos = [
  { icon: HiOfficeBuilding, title: 'Administración', desc: 'Gestión documental, redacción de informes, organización de archivos y automatización de tareas repetitivas.' },
  { icon: HiDocumentText, title: 'Despachos profesionales', desc: 'Redacción de contratos, preparación de documentos legales, resumen de expedientes y gestión de citas.' },
  { icon: HiCalculator, title: 'Asesorías', desc: 'Preparación de informes, gestión de documentación fiscal, respuestas a consultas recurrentes.' },
  { icon: HiHome, title: 'Inmobiliarias', desc: 'Descripción de propiedades, respuestas automáticas a clientes, gestión de visitas y seguimiento de leads.' },
  { icon: HiBriefcase, title: 'Constructoras', desc: 'Gestión de presupuestos, seguimiento de proyectos, documentación técnica y comunicación con proveedores.' },
  { icon: HiHeart, title: 'Clínicas', desc: 'Gestión de historiales, recordatorios de citas, documentación clínica y atención al paciente.' },
  { icon: HiChip, title: 'Talleres', desc: 'Gestión de órdenes de trabajo, presupuestos de reparaciones, seguimiento de clientes y stock de piezas.' },
  { icon: HiTruck, title: 'Transporte', desc: 'Gestión de rutas, documentación de envíos, comunicación con conductores y seguimiento de flota.' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
}

export default function CasosDeUso() {
  return (
    <section id="casos-de-uso" className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 subtle-grid opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Para cualquier <span className="gradient-text">sector</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Da igual a qué te dediques. Si tu empresa genera documentos, responde emails
            o gestiona procesos, un empleado IA te sirve.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {casos.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group glass-card rounded-2xl p-6 card-shadow card-shadow-hover transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
