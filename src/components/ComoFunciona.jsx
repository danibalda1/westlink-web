import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { BsBoxSeam, BsLightningCharge, BsGearWideConnected, BsShieldCheck } from 'react-icons/bs'

const pasos = [
  {
    icon: BsBoxSeam,
    step: '01',
    title: 'Eliges tu plan y recibes el equipo',
    desc: 'Seleccionas el plan que mejor se adapte a tu negocio. Te enviamos un mini PC listo para usar, con nuestro logotipo grabado y configurado con tu plan. Solo tienes que conectarlo a la corriente y a internet.',
    gradient: 'from-indigo-500 to-purple-600',
    light: 'bg-indigo-50',
  },
  {
    icon: BsLightningCharge,
    step: '02',
    title: 'Se configura solo en segundos',
    desc: 'En cuanto el equipo arranca, se conecta automáticamente con nuestra plataforma, descarga la configuración de tu empresa y activa tu empleado digital. Sin técnicos, sin instalaciones, sin esperas.',
    gradient: 'from-purple-500 to-pink-600',
    light: 'bg-purple-50',
  },
  {
    icon: BsGearWideConnected,
    step: '03',
    title: 'Tu empleado digital empieza a trabajar',
    desc: 'Ya puedes delegar tareas: responder correos, buscar documentos, redactar informes, analizar datos. Habla con él como con un compañero de trabajo. Todo funciona en tu oficina, sin enviar datos a internet.',
    gradient: 'from-amber-500 to-orange-600',
    light: 'bg-amber-50',
  },
  {
    icon: BsShieldCheck,
    step: '04',
    title: 'Nosotros lo mantenemos, tú solo lo usas',
    desc: 'Nos encargamos de las actualizaciones, las copias de seguridad, la monitorización y el soporte. Tu empleado digital mejora solo con el tiempo. Si algo falla, lo recuperamos de forma automática.',
    gradient: 'from-emerald-500 to-teal-600',
    light: 'bg-emerald-50',
  },
]

export default function ComoFunciona() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-indigo-50/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-purple-50/40 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="section-badge">Cómo funciona</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-5 mb-4 text-balance">
            Lo enchufas y tu empleado digital empieza a trabajar
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Sin instalaciones complejas, sin esperar semanas, sin técnicos en tu oficina.
            Elige un plan, recibe el equipo y empieza a delegar tareas desde el primer día.
          </p>
        </motion.div>

        {/* ── CONTENIDO ── */}
        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Timeline: 3/5 */}
          <div className="lg:col-span-3 relative">
            {/* Vertical line */}
            <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-indigo-200 via-purple-200 to-emerald-200 hidden sm:block" />

            <div className="space-y-0">
              {pasos.map((p, i) => {
                const Icon = p.icon
                return (
                  <motion.div
                    key={p.step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="relative flex gap-6 pb-12 last:pb-0"
                  >
                    {/* Step circle */}
                    <div className="relative z-10 shrink-0">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white shadow-lg`}>
                        <Icon className="text-xl" />
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 bg-white rounded-2xl p-5 border border-gray-100 shadow-premium hover:shadow-premium-lg transition-all duration-300 group">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${p.light} ${
                          p.gradient.includes('indigo') ? 'text-indigo-700' :
                          p.gradient.includes('purple') ? 'text-purple-700' :
                          p.gradient.includes('amber') ? 'text-amber-700' :
                          'text-emerald-700'
                        }`}>
                          Paso {p.step}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Device showcase: 2/5 */}
          <div className="lg:col-span-2 lg:pt-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-24"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent rounded-3xl blur-[30px]" />
                <img
                  src="/images/westlink-box.jpg"
                  alt="Westlink Box — empleado digital"
                  className="relative w-full rounded-2xl border border-gray-100 shadow-premium-lg"
                  loading="lazy"
                />
              </div>
              <div className="mt-5 space-y-2 text-center">
                <p className="text-sm font-semibold text-gray-700">
                  Westlink Box — edición {new Date().getFullYear()}
                </p>
                <div className="flex flex-wrap justify-center gap-2 text-xs">
                  <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 font-medium rounded-full">Configuración automática</span>
                  <span className="px-2.5 py-1 bg-purple-50 text-purple-700 font-medium rounded-full">Actualizaciones OTA</span>
                  <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 font-medium rounded-full">Copias de seguridad</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Plan selector hint */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-3xl mx-auto mt-12 text-center"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
            <p className="text-gray-600 text-sm mb-4">
              <span className="font-semibold text-gray-900">¿Cuánto cuesta?</span> Desde 149 €/mes, hardware incluido.
              Sin permanencia. Sin sorpresas.
            </p>
            <a
              href="#hardware"
              className="inline-flex items-center gap-2 gradient-primary text-white px-7 py-3.5 rounded-2xl text-base font-semibold hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Ver planes disponibles
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
