import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { FaWineBottle, FaBalanceScale, FaGavel, FaTruck, FaSeedling, FaTooth, FaHandshake } from 'react-icons/fa'

const sectores = [
  {
    icon: FaWineBottle,
    title: 'Bodegas y Viñedos',
    subtitle: 'DOCa Rioja',
    desc: 'Trazabilidad de uva, certificaciones DOP, gestión de pedidos internacionales, control de inventarios. Hay más de 600 bodegas en La Rioja — todas ellas necesitan digitalizar sus procesos.',
    color: 'from-rose-600 to-amber-700',
    bgColor: 'bg-rose-50',
    highlight: true,
  },
  {
    icon: FaBalanceScale,
    title: 'Gestorías y Asesorías',
    subtitle: 'Fiscal · Laboral · Contable',
    desc: 'Automatiza facturas (8 seg vs 30 min), modelos fiscales (5 min vs 2h), conciliaciones bancarias. Libera hasta 70h/mes por técnico. Verifactu 2027 obligatorio.',
    color: 'from-blue-600 to-indigo-700',
    bgColor: 'bg-blue-50',
    highlight: true,
  },
  {
    icon: FaGavel,
    title: 'Despachos de Abogados',
    subtitle: 'Cumplimiento EU AI Act',
    desc: 'Automatización documental, revisión de contratos, gestión de expedientes. El EU AI Act (agosto 2026) exige transparencia algorítmica. Te ayudamos a cumplir.',
    color: 'from-purple-600 to-violet-700',
    bgColor: 'bg-purple-50',
    highlight: true,
  },
  {
    icon: FaTruck,
    title: 'Logística y Transporte',
    subtitle: 'PLAZA Zaragoza · Burgos',
    desc: 'Gestión de albaranes, optimización de rutas, coordinación de almacenes. Datos sensibles de clientes y rutas protegidos con IA privada local.',
    color: 'from-amber-600 to-orange-700',
    bgColor: 'bg-amber-50',
    highlight: true,
  },
  {
    icon: FaSeedling,
    title: 'Agroalimentario',
    subtitle: 'Navarra · La Rioja · Aragón',
    desc: 'Trazabilidad de lotes, etiquetado, control de calidad, gestión de exportaciones. Conservas, congelados, champiñón, pera conferencia — protegemos tus recetas.',
    color: 'from-emerald-600 to-green-700',
    bgColor: 'bg-emerald-50',
    highlight: true,
  },
  {
    icon: FaTooth,
    title: 'Clínicas y Salud',
    subtitle: 'Centros médicos privados',
    desc: 'Historias clínicas, informes, recetas, facturación a seguros. Datos sensibles que deben cumplir RGPD. IA privada = cero fugas de información.',
    color: 'from-cyan-600 to-teal-700',
    bgColor: 'bg-cyan-50',
    highlight: false,
  },
  {
    icon: FaHandshake,
    title: 'Consultorías y Despachos',
    subtitle: 'Arquitectura · Ingeniería · Consultoría',
    desc: 'Gestión de proyectos, documentación técnica, memorias, certificaciones. Automatiza la parte administrativa y dedica más tiempo a lo que importa.',
    color: 'from-slate-600 to-gray-700',
    bgColor: 'bg-slate-50',
    highlight: false,
  },
]

export default function Sectores() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="sectores" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Sectores</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            ¿Tu sector necesita IA privada?
          </h2>
          <p className="text-lg text-gray-600">
            Estamos enfocados en PYMES de toda la zona norte de España. Estos son los sectores donde
            más impacto podemos generar.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectores.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`group relative rounded-2xl p-6 sm:p-8 border transition-all duration-300 cursor-default ${
                  s.highlight
                    ? 'border-primary/10 bg-white hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5'
                    : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-lg'
                }`}
              >
                {/* Badge for priority */}
                {s.highlight && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold text-primary bg-primary/5 px-2 py-1 rounded-full uppercase tracking-wider">
                    Prioridad
                  </span>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${s.bgColor} flex items-center justify-center text-2xl mb-5 ${s.highlight ? 'group-hover:scale-110' : ''} transition-transform duration-300`}>
                  <Icon className={s.highlight ? 'text-gray-700' : 'text-gray-500'} />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1">{s.title}</h3>
                <span className="text-xs font-medium text-primary/70 uppercase tracking-wider">{s.subtitle}</span>
                <p className="text-sm text-gray-600 mt-4 leading-relaxed">{s.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            ¿No ves tu sector? <a href="#contacto" className="text-primary font-semibold hover:underline">Háblanos igualmente</a> — casi seguro que podemos ayudarte.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
