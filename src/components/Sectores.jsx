import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { FaWineBottle, FaBalanceScale, FaGavel, FaTruck, FaSeedling, FaTooth, FaHandshake, FaBolt } from 'react-icons/fa'

const sectores = [
  {
    icon: FaWineBottle,
    title: 'Bodegas y Viñedos',
    subtitle: 'DOCa Rioja',
    desc: 'Trazabilidad de uva, certificaciones DOP, gestión de pedidos internacionales, control de inventarios.',
    gradient: 'from-rose-500 to-amber-600',
    light: 'bg-rose-50',
    iconColor: 'text-rose-600',
    highlight: true,
  },
  {
    icon: FaBalanceScale,
    title: 'Gestorías y Asesorías',
    subtitle: 'Fiscal · Laboral · Contable',
    desc: 'Automatiza facturas (8 seg vs 30 min), modelos fiscales (5 min vs 2h), conciliaciones bancarias. Verifactu 2027.',
    gradient: 'from-blue-500 to-indigo-600',
    light: 'bg-blue-50',
    iconColor: 'text-blue-600',
    highlight: true,
  },
  {
    icon: FaGavel,
    title: 'Despachos de Abogados',
    subtitle: 'Cumplimiento EU AI Act',
    desc: 'Automatización documental, revisión de contratos, gestión de expedientes. Cumplimiento normativo garantizado.',
    gradient: 'from-purple-500 to-violet-600',
    light: 'bg-purple-50',
    iconColor: 'text-purple-600',
    highlight: true,
  },
  {
    icon: FaBolt,
    title: 'Electricidad y Fontanería',
    subtitle: 'Instaladores · Autónomos',
    desc: 'Presupuestos desde obra, certificados de instalación siempre a mano, facturas organizadas. Sin papeleo al llegar a casa.',
    gradient: 'from-yellow-500 to-amber-600',
    light: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
    highlight: true,
  },
  {
    icon: FaTruck,
    title: 'Logística y Transporte',
    subtitle: 'PLAZA Zaragoza · Burgos',
    desc: 'Gestión de albaranes, optimización de rutas, coordinación de almacenes. Datos protegidos con IA local.',
    gradient: 'from-amber-500 to-orange-600',
    light: 'bg-amber-50',
    iconColor: 'text-amber-600',
    highlight: true,
  },
  {
    icon: FaSeedling,
    title: 'Agroalimentario',
    subtitle: 'Navarra · La Rioja · Aragón',
    desc: 'Trazabilidad de lotes, etiquetado, control de calidad, gestión de exportaciones. Protegemos tus recetas.',
    gradient: 'from-emerald-500 to-green-600',
    light: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    highlight: true,
  },
  {
    icon: FaTooth,
    title: 'Clínicas y Salud',
    subtitle: 'Centros médicos privados',
    desc: 'Historias clínicas, informes, facturación a seguros. Datos sensibles que deben cumplir RGPD. Cero fugas.',
    gradient: 'from-cyan-500 to-teal-600',
    light: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    highlight: false,
  },
  {
    icon: FaHandshake,
    title: 'Consultorías y Despachos',
    subtitle: 'Arquitectura · Ingeniería',
    desc: 'Gestión de proyectos, documentación técnica, memorias. Automatiza lo administrativo, dedica tiempo a lo que importa.',
    gradient: 'from-slate-500 to-gray-600',
    light: 'bg-slate-50',
    iconColor: 'text-slate-600',
    highlight: false,
  },
]

export default function Sectores() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="sectores" className="py-20 md:py-28 relative overflow-hidden section-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* ── Imagen de fondo decorativa: bodega ── */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-15 pointer-events-none hidden lg:block">
          <img
            src="/images/bodega-ambiente.jpg"
            alt=""
            className="w-full h-full object-cover rounded-3xl"
            loading="lazy"
          />
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-badge">Sectores</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-5 mb-4 text-balance">
            ¿Tu sector necesita IA privada?
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Estamos enfocados en PYMES de toda la zona norte de España. Estos son los sectores donde
            más impacto podemos generar.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sectores.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`group relative bg-white rounded-2xl p-6 border transition-all duration-300 cursor-default shadow-premium shadow-premium-hover ${
                  s.highlight
                    ? 'border-indigo-100/60 hover:border-indigo-200'
                    : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                {s.highlight && (
                  <span className="absolute top-3 right-3 text-[10px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full uppercase tracking-wider">
                    Prioridad
                  </span>
                )}

                <div className={`w-12 h-12 rounded-2xl ${s.light} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={s.iconColor} />
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-0.5">{s.title}</h3>
                <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">{s.subtitle}</span>
                <p className="text-sm text-gray-500 mt-3 leading-relaxed">{s.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-gray-400">
            ¿No ves tu sector?{' '}
            <a href="#contacto" className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
              Háblanos igualmente
            </a>{' '}
            — casi seguro que podemos ayudarte.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
