import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { BsCpu, BsPrinter, BsLayers, BsRulers, BsPlayCircle, BsImage, BsCloudArrowUp, BsShieldCheck, BsCpu as BsChip, BsCalendarWeek, BsBox, BsRocket } from 'react-icons/bs'
import { HiOutlineCube, HiOutlineCheckCircle, HiOutlinePhotograph, HiOutlineLightningBolt, HiOutlineStar } from 'react-icons/hi'

const tiers = [
  {
    name: 'Starter',
    subtitle: 'Autónomos y microempresas',
    price: '2.300',
    priceNote: 'instalación única. El sistema es tuyo.',
    icon: HiOutlineCube,
    features: [
      'Mini PC IA-ready (64 GB RAM, 2 TB SSD)',
      '1 empleado digital operativo',
      'Rack compacto impreso en 3D',
      'Instalación y formación presencial',
      'Soporte remoto 30 días',
    ],
    highlight: false,
    badge: null,
  },
  {
    name: 'Business',
    subtitle: 'PYMES de 3-25 empleados',
    price: '7.900',
    priceNote: 'instalación única. El sistema es tuyo.',
    icon: HiOutlineCube,
    features: [
      'Servidor dedicado con GPU (128 GB RAM)',
      'Hasta 5 empleados digitales',
      'Rack ventilado impreso en 3D a medida',
      'Instalación y formación presencial',
      'Soporte remoto 90 días',
      'Diseño personalizado del rack',
    ],
    highlight: true,
    badge: 'Más popular',
  },
  {
    name: 'Enterprise',
    subtitle: 'Empresas y centros de trabajo',
    price: '15.900',
    priceNote: 'desde — instalación única',
    icon: BsChip,
    features: [
      'Servidor multi-GPU en rack completo',
      'Empleados digitales ilimitados',
      'Rack profesional impreso en 3D en fases',
      'Ampliación modular según crezcas',
      'Instalación y formación completa',
      'Soporte prioritario 12 meses',
    ],
    highlight: false,
    badge: null,
  },
]

const planesMensuales = [
  {
    name: 'Básico',
    price: '199',
    desc: 'Para autónomos que quieren empezar',
    features: ['1 empleado digital', 'Soporte por email', 'Actualizaciones incluidas', 'Sin permanencia'],
  },
  {
    name: 'Profesional',
    price: '399',
    desc: 'Para PYMES con más necesidades',
    features: ['Hasta 3 empleados digitales', 'Soporte prioritario', 'Actualizaciones incluidas', 'Sin permanencia', '1 hora de consultoría/mes'],
    highlight: true,
  },
  {
    name: 'Empresa',
    price: '799',
    desc: 'Para empresas que quieren escalar',
    features: ['Empleados ilimitados', 'Soporte 24/7', 'Actualizaciones incluidas', 'Sin permanencia', 'Consultoría ilimitada', 'Visitas presenciales'],
    highlight: false,
  },
]

const packsSector = [
  {
    sector: 'Pack Bodega',
    price: '3.900€',
    desc: 'Trazabilidad DOP, gestión de pedidos, control de inventario, certificaciones.',
    icon: '🍷',
  },
  {
    sector: 'Pack Gestoría',
    price: '5.900€',
    desc: 'Facturación automatizada, modelos fiscales, conciliación bancaria, Verifactu.',
    icon: '📊',
  },
  {
    sector: 'Pack Logística',
    price: '4.900€',
    desc: 'Gestión de albaranes, optimización de rutas, coordinación de almacenes.',
    icon: '🚚',
  },
  {
    sector: 'Pack Abogados',
    price: '4.900€',
    desc: 'Revisión de contratos, gestión de expedientes, automatización documental.',
    icon: '⚖️',
  },
]

export default function Hardware() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="hardware" className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-indigo-50/60 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -right-32 w-72 h-72 bg-violet-50/40 rounded-full blur-[100px]" />
        <div className="section-grid absolute inset-0 opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-badge">Planes y precios</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-5 mb-4 text-balance">
            Inversión única o suscripción mensual
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Tú eliges cómo pagar. Una sola inversión y el sistema es tuyo para siempre,
            o una suscripción mensual sin ataduras.
          </p>
        </motion.div>

        {/* ── RACK FEATURES ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-14"
        >
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: BsPrinter, title: 'Diseño propio', desc: 'Modelamos cada rack en 3D desde cero. Adaptado al espacio disponible y a la estética de tu negocio.' },
              { icon: BsLayers, title: 'Impresión local', desc: 'Fabricamos en La Rioja con materiales resistentes. Nada de importar cajas chinas genéricas.' },
              { icon: BsRulers, title: 'A medida', desc: '¿Un hueco raro en la recepción? ¿Detrás de la barra? Lo medimos y diseñamos el rack para que encaje.' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-premium shadow-premium-hover text-center transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-xl text-indigo-600 mx-auto mb-4">
                    <Icon />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* ── SUBCRIPCIÓN MENSUAL ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-6">
            <BsCalendarWeek className="text-indigo-600" />
            <h3 className="text-lg font-bold text-gray-900">Suscripción mensual</h3>
            <span className="text-[10px] text-gray-400 font-medium bg-gray-100 px-2 py-0.5 rounded-full">Sin permanencia</span>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {planesMensuales.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                className={`relative rounded-2xl p-6 border-2 transition-all duration-300 ${
                  plan.highlight
                    ? 'border-indigo-500 bg-white shadow-xl shadow-indigo-500/8 scale-[1.02]'
                    : 'border-gray-100 bg-white hover:border-gray-200 shadow-premium'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-white text-[11px] font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg shadow-indigo-500/20">
                    Recomendado
                  </span>
                )}
                <h3 className="font-bold text-gray-900 text-base mb-1">{plan.name}</h3>
                <p className="text-xs text-gray-400 mb-3">{plan.desc}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}€</span>
                  <span className="text-xs text-gray-400">/mes</span>
                </div>
                <ul className="space-y-2 mb-5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-1.5 text-xs text-gray-600">
                      <HiOutlineCheckCircle className="text-indigo-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className={`block text-center py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    plan.highlight
                      ? 'gradient-primary text-white hover:shadow-lg hover:shadow-indigo-500/25'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Lo quiero
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── INVERSIÓN ÚNICA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-6">
            <BsBox className="text-indigo-600" />
            <h3 className="text-lg font-bold text-gray-900">Inversión única</h3>
            <span className="text-[10px] text-gray-400 font-medium bg-gray-100 px-2 py-0.5 rounded-full">El sistema es tuyo para siempre</span>
          </div>

          <div className="grid md:grid-cols-3 gap-5 items-start">
            {tiers.map((tier, i) => {
              const Icon = tier.icon
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className={`relative rounded-2xl p-6 sm:p-7 border-2 transition-all duration-300 ${
                    tier.highlight
                      ? 'border-indigo-500 bg-white shadow-xl shadow-indigo-500/8 scale-[1.02]'
                      : 'border-gray-100 bg-white hover:border-gray-200 shadow-premium'
                  }`}
                >
                  {tier.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-white text-[11px] font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg shadow-indigo-500/20">
                      {tier.badge}
                    </span>
                  )}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 ${
                    tier.highlight ? 'bg-indigo-50 text-indigo-600' : 'bg-gray-50 text-gray-400'
                  }`}>
                    <Icon />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-0.5">{tier.name}</h3>
                  <p className="text-xs text-gray-400 mb-4">{tier.subtitle}</p>
                  <div className="mb-5">
                    <span className="text-3xl sm:text-4xl font-bold text-gray-900">{tier.price}€</span>
                    <span className="text-xs text-gray-400 block mt-0.5">{tier.priceNote}</span>
                  </div>
                  <ul className="space-y-2.5 mb-6">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                        <HiOutlineCheckCircle className="text-indigo-500 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contacto"
                    className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      tier.highlight
                        ? 'gradient-primary text-white hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-[1.02] active:scale-[0.98]'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Solicitar presupuesto
                  </a>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* ── PACKS POR SECTOR ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-6">
            <BsRocket className="text-indigo-600" />
            <h3 className="text-lg font-bold text-gray-900">Packs por sector</h3>
            <span className="text-[10px] text-gray-400 font-medium bg-gray-100 px-2 py-0.5 rounded-full">Inversión única</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {packsSector.map((pack, i) => (
              <motion.div
                key={pack.sector}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-premium shadow-premium-hover transition-all duration-300"
              >
                <span className="text-2xl block mb-3">{pack.icon}</span>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{pack.sector}</h3>
                <div className="text-lg font-bold text-gray-900 mb-2">{pack.price}</div>
                <p className="text-xs text-gray-500 leading-relaxed">{pack.desc}</p>
                <a href="#contacto" className="mt-4 inline-block text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
                  Más información →
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── PRECIO A MEDIDA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl border border-indigo-100 p-8 sm:p-10 text-center shadow-premium-lg">
            <HiOutlineStar className="text-3xl text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">¿Ningún plan se ajusta a ti?</h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-md mx-auto mb-6">
              Cuéntanos qué necesitas y te hacemos un presupuesto completamente a medida.
              Sin compromiso, sin letra pequeña.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 gradient-primary text-white px-7 py-3.5 rounded-2xl font-semibold text-sm hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Quiero un presupuesto a medida
            </a>
          </div>
        </motion.div>

        {/* ── NOTA FINAL ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xs text-gray-400 mt-8 leading-relaxed"
        >
          Todos los precios son orientativos. Cada instalación es única y requiere un análisis previo sin compromiso.
          <br />
          Visitas presenciales gratuitas en La Rioja, Álava, Navarra, Burgos, Soria y Zaragoza.
          <br />
          ¿Quieres pagar en varios meses?{' '}
          <a href="#contacto" className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
            Pregúntanos por la financiación
          </a>
        </motion.p>
      </div>
    </section>
  )
}
