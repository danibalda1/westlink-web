import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { BsCpu, BsPrinter, BsLayers, BsRulers } from 'react-icons/bs'
import { HiOutlineCube, HiOutlineCheckCircle, HiOutlineChip } from 'react-icons/hi'
import { FaWrench } from 'react-icons/fa'

const tiers = [
  {
    name: 'Starter',
    subtitle: 'Autónomos y microempresas',
    price: '2.300',
    priceNote: 'instalación única',
    icon: HiOutlineChip,
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
    priceNote: 'instalación única',
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
    icon: BsCpu,
    features: [
      'Servidor multi-GPU en rack completo',
      'Empleados digitales ilimitados',
      'Rack profesional impreso en 3D en fases',
      'Ampliación modular según crezcas',
      'Instalación y formación completa',
      'Soporte prioritario 12 meses',
      'Mantenimiento preventivo incluido',
    ],
    highlight: false,
    badge: null,
  },
]

export default function Hardware() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="hardware" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-1/4 w-80 h-80 bg-indigo-100/60 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 w-72 h-72 bg-violet-100/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-indigo-600 font-semibold text-sm tracking-widest uppercase">Hardware</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Racks a medida diseñados e impresos en 3D
          </h2>
          <p className="text-lg text-gray-600">
            No vendemos cajas estándar. Cada equipo se diseña y se imprime para encajar
            exactamente donde lo necesitas: en tu oficina, tu almacén o tu bodega.
          </p>
        </motion.div>

        {/* Racks Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid sm:grid-cols-3 gap-4 mb-16"
        >
          {[
            { icon: BsPrinter, title: 'Diseño propio', desc: 'Modelamos cada rack en 3D desde cero. Adaptado al espacio disponible y a la estética de tu negocio.' },
            { icon: BsLayers, title: 'Impresión local', desc: 'Fabricamos en La Rioja con materiales resistentes. Nada de importar cajas chinas genéricas.' },
            { icon: BsRulers, title: 'A medida', desc: '¿Un hueco raro en la recepción? ¿Detrás de una barra de bar? Lo medimos y diseñamos el rack para que encaje.' },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 text-center hover:shadow-lg hover:border-indigo-100 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-xl text-indigo-600 mx-auto mb-4">
                  <Icon />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 items-start"
        >
          {tiers.map((tier, i) => {
            const Icon = tier.icon
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className={`relative rounded-2xl p-6 sm:p-8 border-2 transition-all duration-300 ${
                  tier.highlight
                    ? 'border-indigo-500 bg-white shadow-xl shadow-indigo-500/10 scale-[1.02]'
                    : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-lg'
                }`}
              >
                {/* Badge */}
                {tier.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    {tier.badge}
                  </span>
                )}

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 ${
                  tier.highlight ? 'bg-indigo-50 text-indigo-600' : 'bg-gray-50 text-gray-500'
                }`}>
                  <Icon />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1">{tier.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{tier.subtitle}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}€</span>
                  <span className="text-sm text-gray-500 block mt-1">{tier.priceNote}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <HiOutlineCheckCircle className="text-indigo-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className={`block text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    tier.highlight
                      ? 'gradient-primary text-white hover:shadow-lg hover:shadow-indigo-500/25'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Solicitar presupuesto
                </a>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-sm text-gray-400 mt-8"
        >
          Todos los precios son orientativos. Cada instalación es única y requiere un análisis previo sin compromiso.
          <br />
          Visitas presenciales gratuitas en La Rioja, Álava, Navarra, Burgos, Soria y Zaragoza.
        </motion.p>
      </div>
    </section>
  )
}
