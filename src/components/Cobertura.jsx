import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'

const provincias = [
  { nombre: 'La Rioja', capital: 'Logroño', desc: 'Nuestra base. Bodegas, agroindustria, gestorías.', color: 'from-indigo-500 to-purple-600', prio: 'Sede principal' },
  { nombre: 'Álava', capital: 'Vitoria-Gasteiz', desc: 'Rioja Alavesa: bodegas de primer nivel.', color: 'from-purple-500 to-pink-600', prio: '65 km' },
  { nombre: 'Navarra', capital: 'Pamplona', desc: 'Potencia agroalimentaria y logística.', color: 'from-amber-500 to-orange-600', prio: '90 km' },
  { nombre: 'Burgos', capital: 'Burgos', desc: 'Nudo logístico e industrial clave.', color: 'from-emerald-500 to-teal-600', prio: '115 km' },
  { nombre: 'Soria', capital: 'Soria', desc: 'PYMES rurales con necesidad de digitalización.', color: 'from-blue-500 to-cyan-600', prio: '120 km' },
  { nombre: 'Zaragoza', capital: 'Zaragoza', desc: 'PLAZA: 4º hub logístico de Europa.', color: 'from-rose-500 to-red-600', prio: '175 km' },
]

export default function Cobertura() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="cobertura" className="py-20 md:py-28 relative overflow-hidden section-gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Cobertura</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Estamos aquí, a tu lado
          </h2>
          <p className="text-lg text-gray-600">
            Desde Logroño, llegamos a toda la zona norte. Te visitamos, evaluamos tu caso e
            implantamos sin que tengas que desplazarte.
          </p>
        </motion.div>

        {/* Provincias grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {provincias.map((p, i) => (
            <motion.div
              key={p.nombre}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white shadow-md`}>
                  <FaMapMarkerAlt />
                </div>
                <span className="text-xs font-semibold text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full">
                  {p.prio}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900">{p.nombre}</h3>
              <p className="text-sm text-gray-500 mt-0.5">{p.capital}</p>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
          >
            ¿Estás fuera de esta zona? Escríbenos igualmente
            <BsArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
