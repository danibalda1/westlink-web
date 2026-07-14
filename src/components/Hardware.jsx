import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { BsCalendarWeek, BsBox, BsRocket, BsPiggyBank, BsShieldCheck, BsLightningCharge, BsCloud, BsCpu, BsWhatsapp, BsGlobe2 } from 'react-icons/bs'
import { HiOutlineCheckCircle, HiOutlineStar, HiChevronDown, HiOutlineSparkles } from 'react-icons/hi'

const planGo = {
  name: 'Go',
  price: '49',
  desc: 'El empleado digital de entrada',
  icon: BsWhatsapp,
  features: [
    'Sin hardware — 100% digital',
    'Acceso por WhatsApp + Web',
    'Extrae facturas, albaranes, PDFs',
    'Organiza documentos automáticamente',
    'Búsqueda instantánea en todos tus docs',
    'Panel web con tu información',
    'Configuración remota en 15 min',
    'Sin permanencia · Cancela cuando quieras',
  ],
  highlight: false,
}

const planesMensuales = [
  {
    name: 'Start',
    price: '149',
    desc: 'Autónomos y microempresas',
    icon: BsCloud,
    features: [
      'Westlink Box en cesión',
      'IA mediante APIs externas',
      'Auto-configuración al encender',
      'Soporte email',
      'Actualizaciones automáticas',
      'Copias de seguridad',
      'Sin permanencia',
    ],
    highlight: false,
  },
  {
    name: 'Private',
    price: '199',
    desc: 'Máxima privacidad',
    icon: BsShieldCheck,
    features: [
      'Westlink Box en cesión',
      'Modelos locales (Ollama)',
      'Sin depender de APIs externas',
      'Todos los datos en tu oficina',
      'Auto-configuración al encender',
      'Soporte prioritario',
      'Actualizaciones automáticas',
      'Copias de seguridad',
      'Sin permanencia',
    ],
    highlight: true,
  },
  {
    name: 'Hybrid',
    price: '299',
    desc: 'Lo mejor de ambos mundos',
    icon: BsLightningCharge,
    features: [
      'Westlink Box en cesión',
      'Modelos locales para mayoría tareas',
      'APIs solo cuando es necesario',
      'Selección automática del mejor modelo',
      'Auto-configuración al encender',
      'Soporte prioritario',
      'Actualizaciones automáticas',
      'Copias de seguridad',
      'Sin permanencia',
    ],
    highlight: false,
  },
]

const planesBusiness = [
  {
    name: 'Business',
    price: '499',
    desc: 'Hardware más potente',
    icon: BsCpu,
    features: [
      'Westlink Box Pro en cesión',
      'Más RAM y almacenamiento',
      'Hasta 5 empleados digitales',
      'Modelos locales más grandes',
      'Integraciones empresariales',
      'Soporte 24/7 prioritario',
      'Sin permanencia',
    ],
  },
]

const tiersUnico = [
  { name: 'Starter', price: '2.300', desc: 'Autónomos y microempresas', features: ['Mini PC 256GB NVMe / 16GB RAM', '1 empleado digital', 'IA local + APIs', 'Rack 3D compacto', 'Instalación + formación', 'Soporte 30 días'] },
  { name: 'Business', price: '7.900', desc: 'PYMES 3-25 empleados', features: ['Servidor 1TB NVMe / 32GB RAM', 'Hasta 5 empleados', 'Modelos locales avanzados', 'Rack 3D ventilado', 'Instalación + formación', 'Soporte 90 días', 'Diseño personalizado'], highlight: true },
  { name: 'Enterprise', price: '15.900', desc: 'Empresas grandes', features: ['Servidor multi-GPU', 'Empleados ilimitados', 'Rack profesional 3D', 'Ampliación modular', 'Soporte 12 meses'], highlight: false },
]

const packsSector = [
  { sector: '🍷 Bodega', price: '3.900€' },
  { sector: '📊 Gestoría', price: '5.900€' },
  { sector: '🚚 Logística', price: '4.900€' },
  { sector: '⚖️ Abogados', price: '4.900€' },
]

export default function Hardware() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [showUnico, setShowUnico] = useState(false)
  const [showBusiness, setShowBusiness] = useState(false)
  const [showGo, setShowGo] = useState(true)

  return (
    <section id="hardware" className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-indigo-50/60 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -right-32 w-72 h-72 bg-violet-50/40 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>

        {/* ── HEADER ── */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-badge">Planes y precios</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-5 mb-4 text-balance">
            Contrata un empleado digital desde <span className="gradient-text-warm">49€/mes</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Sin hardware. Sin instalación. Sin permanencia. O con hardware si lo prefieres.
          </p>
        </motion.div>

        {/* ── PLAN GO (DIGITAL) ── */}
        {showGo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="max-w-3xl mx-auto mb-8"
          >
            <div className="relative rounded-2xl p-6 border-2 border-sky-200 bg-gradient-to-br from-sky-50/80 to-white shadow-lg shadow-sky-500/5">
              <div className="absolute -top-3 left-6 bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-[11px] font-bold px-4 py-1 rounded-full shadow-lg shadow-sky-500/20 flex items-center gap-1.5">
                <HiOutlineSparkles className="text-xs" />
                NUEVO — Digital, sin hardware
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-6 mt-3">
                {/* Columna izquierda: info del plan */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <BsWhatsapp className="text-2xl text-sky-500" />
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Go</h3>
                      <p className="text-xs text-gray-400">{planGo.desc}</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className="text-4xl font-bold text-gray-900">{planGo.price}€</span>
                    <span className="text-xs text-gray-400">/mes</span>
                    <span className="ml-3 text-[11px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">Sin permanencia</span>
                  </div>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 mt-4">
                    {planGo.features.map(f => (
                      <li key={f} className="flex items-start gap-1.5 text-xs text-gray-600">
                        <HiOutlineCheckCircle className="text-sky-500 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Columna derecha: CTA */}
                <div className="flex flex-col items-center md:items-end justify-center md:min-w-[200px] gap-2">
                  <a
                    href="#contacto"
                    className="w-full text-center bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Empieza por 49€
                  </a>
                  <p className="text-[10px] text-gray-400 text-center">Configuración remota · Sin hardware</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── SUSCRIPCIÓN MENSUAL (CON HARDWARE) ── */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-5 justify-center">
            <BsCalendarWeek className="text-indigo-600" />
            <span className="font-semibold text-gray-900">Con hardware incluido</span>
            <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-medium">Sin permanencia</span>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {planesMensuales.map((plan, i) => {
              const Icon = plan.icon
              return (
                <motion.div key={plan.name} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                  className={`relative rounded-2xl p-6 border-2 transition-all duration-300 flex flex-col ${plan.highlight ? 'border-indigo-500 bg-white shadow-xl shadow-indigo-500/8 scale-[1.03] z-10' : 'border-gray-100 bg-white hover:border-gray-200 shadow-premium'}`}
                >
                  {plan.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-white text-[11px] font-bold px-4 py-1 rounded-full shadow-lg shadow-indigo-500/20">Recomendado</span>}
                  <Icon className={`text-xl mb-3 ${plan.name === 'Start' ? 'text-sky-500' : plan.name === 'Private' ? 'text-emerald-500' : 'text-amber-500'}`} />
                  <h3 className="font-bold text-gray-900 text-base mb-0.5">{plan.name}</h3>
                  <p className="text-xs text-gray-400 mb-3">{plan.desc}</p>
                  <div className="mb-4"><span className="text-3xl font-bold text-gray-900">{plan.price}€</span><span className="text-xs text-gray-400">/mes</span></div>
                  <p className="text-[11px] text-gray-400 mb-4">Hardware en cesión · Recuperable al cancelar</p>
                  <ul className="space-y-1.5 mb-5 flex-1">
                    {plan.features.map(f => <li key={f} className="flex items-start gap-1.5 text-xs text-gray-600"><HiOutlineCheckCircle className="text-indigo-500 mt-0.5 shrink-0" />{f}</li>)}
                  </ul>
                  <a href="#contacto" className={`block text-center py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${plan.highlight ? 'gradient-primary text-white hover:shadow-lg hover:shadow-indigo-500/25' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}>Lo quiero</a>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* ── BUSINESS (TOGGLE) ── */}
        <div className="max-w-5xl mx-auto mb-10">
          <button onClick={() => setShowBusiness(!showBusiness)} className="w-full flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-all group">
            <div className="flex items-center gap-3">
              <BsCpu className="text-violet-600 text-lg" />
              <div className="text-left">
                <span className="font-semibold text-gray-900 text-sm">¿Necesitas más potencia? Planes Business y Enterprise</span>
                <p className="text-xs text-gray-400 mt-0.5">Hardware superior, más RAM, más agentes, integraciones</p>
              </div>
            </div>
            <HiChevronDown className={`text-gray-400 transition-transform duration-300 ${showBusiness ? 'rotate-180' : ''}`} />
          </button>

          {showBusiness && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }} className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                {planesBusiness.map((plan, i) => {
                  const Icon = plan.icon
                  return (
                    <motion.div key={plan.name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="relative rounded-2xl p-6 border-2 border-violet-200 bg-white shadow-lg"
                    >
                      <Icon className="text-xl text-violet-500 mb-3" />
                      <h3 className="font-bold text-gray-900 text-base mb-0.5">{plan.name}</h3>
                      <p className="text-xs text-gray-400 mb-3">{plan.desc}</p>
                      <div className="mb-4"><span className="text-3xl font-bold text-gray-900">{plan.price}€</span><span className="text-xs text-gray-400">/mes</span></div>
                      <p className="text-[11px] text-gray-400 mb-4">Hardware en cesión</p>
                      <ul className="space-y-1.5 mb-5">
                        {plan.features.map(f => <li key={f} className="flex items-start gap-1.5 text-xs text-gray-600"><HiOutlineCheckCircle className="text-violet-500 mt-0.5 shrink-0" />{f}</li>)}
                      </ul>
                      <a href="#contacto" className="block text-center py-2.5 rounded-xl font-semibold text-sm bg-violet-500 text-white hover:bg-violet-600 transition-all">Lo quiero</a>
                    </motion.div>
                  )
                })}
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}
                  className="rounded-2xl p-6 border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center text-center"
                >
                  <HiOutlineStar className="text-2xl text-amber-400 mb-2" />
                  <h3 className="font-bold text-gray-900 text-base mb-1">Enterprise</h3>
                  <p className="text-xs text-gray-500 mb-3">Infraestructura dedicada, multi-GPU, personalizado</p>
                  <a href="#contacto" className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:underline">Solicitar presupuesto →</a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>

        {/* ── INVERSIÓN ÚNICA (TOGGLE) ── */}
        <div className="max-w-4xl mx-auto mb-10">
          <button onClick={() => setShowUnico(!showUnico)} className="w-full flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-all group">
            <div className="flex items-center gap-3">
              <BsPiggyBank className="text-amber-600 text-lg" />
              <div className="text-left">
                <span className="font-semibold text-gray-900 text-sm">¿Prefieres pago único? El sistema es tuyo para siempre</span>
                <p className="text-xs text-gray-400 mt-0.5">Desde 2.300€ · Sin cuotas mensuales</p>
              </div>
            </div>
            <HiChevronDown className={`text-gray-400 transition-transform duration-300 ${showUnico ? 'rotate-180' : ''}`} />
          </button>

          {showUnico && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }} className="overflow-hidden">
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                {tiersUnico.map((tier, i) => (
                  <motion.div key={tier.name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }}
                    className={`relative rounded-2xl p-6 border-2 transition-all duration-300 ${tier.highlight ? 'border-amber-500 bg-white shadow-lg shadow-amber-500/5 scale-[1.02]' : 'border-gray-100 bg-white hover:border-gray-200 shadow-premium'}`}
                  >
                    {tier.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[11px] font-bold px-4 py-1 rounded-full shadow-lg shadow-amber-500/20">Más popular</span>}
                    <h3 className="font-bold text-gray-900 text-base mb-0.5">{tier.name}</h3>
                    <p className="text-xs text-gray-400 mb-3">{tier.desc}</p>
                    <div className="mb-4"><span className="text-3xl font-bold text-gray-900">{tier.price}€</span><span className="text-xs text-gray-400 block mt-0.5">instalación única</span></div>
                    <ul className="space-y-1.5 mb-5">
                      {tier.features.map(f => <li key={f} className="flex items-start gap-1.5 text-xs text-gray-600"><HiOutlineCheckCircle className="text-amber-500 mt-0.5 shrink-0" />{f}</li>)}
                    </ul>
                    <a href="#contacto" className={`block text-center py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${tier.highlight ? 'bg-amber-500 text-white hover:bg-amber-600' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}>Solicitar presupuesto</a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* ── PACKS SECTOR (COMPACT) ── */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }} className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-2 mb-4 justify-center">
            <BsRocket className="text-indigo-600" />
            <span className="font-semibold text-gray-900 text-sm">Packs por sector</span>
            <span className="text-[10px] text-gray-400">· pago único</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {packsSector.map(pack => (
              <a key={pack.sector} href="#contacto" className="bg-white rounded-xl p-3.5 border border-gray-100 text-center hover:border-indigo-200 hover:shadow-sm transition-all duration-200 group">
                <div className="text-lg font-bold text-gray-900">{pack.price}</div>
                <div className="text-xs text-gray-500 mt-0.5 group-hover:text-indigo-600 transition-colors">{pack.sector}</div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── A MEDIDA ── */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }} className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl border border-indigo-100 p-7 shadow-premium-lg">
            <HiOutlineStar className="text-2xl text-indigo-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-gray-900 mb-2">¿Nada encaja exactamente?</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-5">Cuéntanos tu caso y te preparamos un presupuesto a medida. Sin compromiso.</p>
            <a href="#contacto" className="inline-flex items-center gap-2 gradient-primary text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300">Quiero un presupuesto a medida</a>
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.5 }} className="text-center text-xs text-gray-400 mt-6">
          Visitas gratuitas en La Rioja, Álava, Navarra, Burgos, Soria y Zaragoza · ¿Financiación? <a href="#contacto" className="text-indigo-600 font-semibold hover:underline">Pregúntanos</a>
        </motion.p>

        {/* ── DEMO CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="max-w-xl mx-auto mt-10 text-center"
        >
          <div className="bg-gradient-to-br from-sky-500 to-cyan-600 rounded-2xl p-6 shadow-xl">
            <h3 className="text-white font-bold text-lg mb-2">¿Prefieres verte una demo primero?</h3>
            <p className="text-white/80 text-sm mb-5">
              Dani te enseña en 10 minutos cómo funciona tu empleado digital. Sin compromiso.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-white text-sky-700 font-bold px-6 py-3 rounded-xl text-sm hover:bg-gray-100 transition-all shadow-lg"
            >
              Quiero ver la demo →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
