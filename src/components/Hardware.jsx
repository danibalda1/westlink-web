import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { BsCpu, BsPrinter, BsLayers, BsRulers, BsPlayCircle, BsImage, BsCloudArrowUp, BsShieldCheck, BsCpu as BsChip } from 'react-icons/bs'
import { HiOutlineCube, HiOutlineCheckCircle, HiOutlinePhotograph, HiOutlineFilm, HiOutlineLightningBolt } from 'react-icons/hi'

const tiers = [
  {
    name: 'Starter',
    subtitle: 'Autónomos y microempresas',
    price: '2.300',
    priceNote: 'instalación única',
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

export default function Hardware() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="hardware" className="py-20 md:py-28 relative overflow-hidden bg-white">
      {/* Decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-indigo-50/60 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -right-32 w-72 h-72 bg-violet-50/40 rounded-full blur-[100px]" />
        <div className="section-grid absolute inset-0 opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="section-badge">Hardware</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-5 mb-4 text-balance">
            Westlink Box — tu empleado digital necesita un hogar
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            No vendemos cajas estándar. Cada equipo se diseña, se imprime en 3D y se instala
            exactamente donde lo necesitas: tu oficina, tu almacén o tu bodega.
          </p>
        </motion.div>

        {/* ── Rack features ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid sm:grid-cols-3 gap-4 mb-16"
        >
          {[
            { icon: BsPrinter, title: 'Diseño propio', desc: 'Modelamos cada rack en 3D desde cero. Adaptado al espacio y a la estética de tu negocio.' },
            { icon: BsLayers, title: 'Impresión local', desc: 'Fabricamos en La Rioja con materiales resistentes. Nada de importar cajas chinas genéricas.' },
            { icon: BsRulers, title: 'A medida', desc: '¿Un hueco raro en la recepción? ¿Detrás de la barra? Lo medimos y diseñamos el rack para que encaje.' },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-premium shadow-premium-hover text-center transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-xl text-indigo-600 mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </motion.div>

        {/* ── VISUAL SHOWCASE ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-premium-lg">
            <div className="grid md:grid-cols-5">
              {/* 3D Rack animation */}
              <div className="md:col-span-2 relative min-h-[300px] bg-gradient-to-br from-indigo-50 via-white to-violet-50 flex items-center justify-center p-8">
                <div className="relative w-40 h-56">
                  {/* Rack base */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-36 h-2.5 bg-indigo-600/15 rounded-sm" />
                  {/* Printing layers */}
                  {[0, 1, 2, 3, 4, 5].map((layer) => (
                    <motion.div
                      key={layer}
                      className="absolute left-1/2 -translate-x-1/2 w-28 h-2 rounded-sm"
                      style={{
                        background: `linear-gradient(90deg, rgba(79,70,229,${0.25 + layer * 0.1}), rgba(124,58,237,${0.25 + layer * 0.1}))`,
                        bottom: `${2 + layer * 9}px`,
                      }}
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={isInView ? {
                        opacity: 1, scaleX: 1,
                        transition: { delay: 0.2 + layer * 0.1, duration: 0.4, ease: 'easeOut' },
                      } : {}}
                    />
                  ))}
                  {/* Nozzle animation */}
                  <motion.div
                    className="absolute w-3.5 h-3.5 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/30"
                    style={{ top: '12px', left: '50%', marginLeft: '-7px' }}
                    animate={isInView ? { y: [0, 150, 0], x: [0, 15, -15, 0] } : {}}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-0.5 h-2.5 bg-gradient-to-b from-indigo-400 to-transparent animate-pulse" />
                  </motion.div>
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-gray-400 font-medium uppercase tracking-wider whitespace-nowrap">
                    Impresión 3D
                  </span>
                </div>
              </div>

              {/* Gallery */}
              <div className="md:col-span-3 p-6 sm:p-8 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-500">
                      <HiOutlinePhotograph />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">Instalaciones reales</h3>
                      <p className="text-xs text-gray-400">Próximamente — fotos de racks instalados en clientes reales</p>
                    </div>
                  </div>

                  {/* Mock gallery grid */}
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-xl bg-gray-100 border border-dashed border-gray-200 flex items-center justify-center text-gray-300 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-300 transition-all duration-300 cursor-pointer group"
                      >
                        <BsImage className="text-lg group-hover:scale-110 transition-transform" />
                      </div>
                    ))}
                  </div>

                  {/* Video placeholder */}
                  <a
                    href="#contacto"
                    className="flex items-center gap-3 p-3 rounded-xl border border-dashed border-gray-200 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-10 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-300 group-hover:bg-indigo-100 group-hover:text-indigo-400 transition-all">
                      <BsPlayCircle className="text-base" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-600 transition-colors">
                        Ver demo de instalación
                      </span>
                      <span className="text-[11px] text-gray-400 block">Añade tu vídeo aquí</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── PRICING CARDS ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-5 items-start"
        >
          {tiers.map((tier, i) => {
            const Icon = tier.icon
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
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
        </motion.div>

        {/* ── HYBRID ALTERNATIVE ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 bg-white rounded-3xl border border-amber-100 overflow-hidden shadow-premium"
        >
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 px-6 sm:px-8 py-5 border-b border-amber-100">
            <div className="flex items-center gap-3">
              <BsCloudArrowUp className="text-amber-600 text-lg" />
              <div>
                <h3 className="font-bold text-gray-900 text-sm">¿No necesitas IA 100% privada?</h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  También ofrecemos modelos híbridos con APIs externas (OpenAI, Claude, Gemini).
                  Hardware más ligero, coste inicial menor, pero con recurrencia mensual en APIs.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Hybrid Starter */}
              <div className="rounded-2xl border border-amber-100 p-5">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-gray-900 text-sm">Hybrid Starter</h4>
                  <span className="text-lg font-bold text-gray-900">1.200€</span>
                </div>
                <p className="text-[11px] text-gray-400 mb-3">Instalación única + API</p>
                <ul className="space-y-1.5 mb-4">
                  {['Mini PC orquestador', '1 empleado digital vía API', 'Rack compacto impreso en 3D', 'Capa de ciberseguridad incluida'].map((f) => (
                    <li key={f} className="flex items-start gap-1.5 text-xs text-gray-600">
                      <HiOutlineCheckCircle className="text-amber-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 rounded-xl p-2.5 mb-4">
                  <p className="text-[11px] text-amber-800 font-medium flex items-center gap-1">
                    <BsShieldCheck className="shrink-0" />
                    Ciberseguridad: +300€/año
                  </p>
                </div>
                <a href="#contacto" className="block text-center py-2 rounded-xl font-semibold text-xs bg-amber-50 text-amber-800 hover:bg-amber-100 transition-all">
                  Consultar
                </a>
              </div>

              {/* Hybrid Business */}
              <div className="rounded-2xl border border-amber-100 p-5">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-gray-900 text-sm">Hybrid Business</h4>
                  <span className="text-lg font-bold text-gray-900">3.900€</span>
                </div>
                <p className="text-[11px] text-gray-400 mb-3">Instalación única + API</p>
                <ul className="space-y-1.5 mb-4">
                  {['Servidor orquestador ligero', 'Hasta 5 empleados vía API', 'Rack ventilado impreso en 3D', 'Monitorización de tráfico API', 'Capa de ciberseguridad incluida'].map((f) => (
                    <li key={f} className="flex items-start gap-1.5 text-xs text-gray-600">
                      <HiOutlineCheckCircle className="text-amber-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 rounded-xl p-2.5 mb-4">
                  <p className="text-[11px] text-amber-800 font-medium flex items-center gap-1">
                    <BsShieldCheck className="shrink-0" />
                    Ciberseguridad: +600€/año
                  </p>
                </div>
                <a href="#contacto" className="block text-center py-2 rounded-xl font-semibold text-xs bg-amber-50 text-amber-800 hover:bg-amber-100 transition-all">
                  Consultar
                </a>
              </div>

              {/* Hybrid Enterprise */}
              <div className="rounded-2xl border border-amber-100 p-5">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-gray-900 text-sm">Hybrid Enterprise</h4>
                  <span className="text-lg font-bold text-gray-900">7.900€</span>
                </div>
                <p className="text-[11px] text-gray-400 mb-3">Desde — instalación única + API</p>
                <ul className="space-y-1.5 mb-4">
                  {['Servidor multi-API + balanceo', 'Empleados digitales ilimitados', 'Rack profesional impreso en 3D', 'Firewall de APIs + logging', 'Capa completa de ciberseguridad', 'Auditoría de seguridad anual'].map((f) => (
                    <li key={f} className="flex items-start gap-1.5 text-xs text-gray-600">
                      <HiOutlineCheckCircle className="text-amber-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 rounded-xl p-2.5 mb-4">
                  <p className="text-[11px] text-amber-800 font-medium flex items-center gap-1">
                    <BsShieldCheck className="shrink-0" />
                    Ciberseguridad: +1.200€/año
                  </p>
                </div>
                <a href="#contacto" className="block text-center py-2 rounded-xl font-semibold text-xs bg-amber-50 text-amber-800 hover:bg-amber-100 transition-all">
                  Consultar
                </a>
              </div>
            </div>

            <div className="mt-5 flex items-start gap-3 bg-amber-50/50 rounded-xl p-4">
              <HiOutlineLightningBolt className="text-amber-600 text-base mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-medium text-gray-900">¿Por qué ciberseguridad adicional?</p>
                <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                  Al conectar APIs externas, tus datos viajan fuera de tu red. Implementamos
                  cifrado extremo a extremo, túneles VPN dedicados y logging de accesos.
                  El coste cubre implantación y mantenimiento anual.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-center text-xs text-gray-400 mt-8 leading-relaxed"
        >
          Todos los precios son orientativos. Cada instalación es única y requiere un análisis previo sin compromiso.<br />
          Visitas presenciales gratuitas en La Rioja, Álava, Navarra, Burgos, Soria y Zaragoza.
        </motion.p>
      </div>
    </section>
  )
}
