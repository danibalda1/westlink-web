import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { FaWineBottle, FaBalanceScale, FaGavel, FaTruck, FaSeedling, FaTooth, FaHandshake, FaBolt, FaWrench, FaHammer, FaStore, FaTractor, FaHardHat, FaBreadSlice } from 'react-icons/fa'
import { HiOutlineDocumentSearch, HiOutlineCurrencyEuro, HiOutlineDocumentText, HiOutlineClipboardList, HiOutlineMail, HiOutlineSearch } from 'react-icons/hi'

const sectores = [
  { icon: FaWineBottle, title: 'Bodegas', subtitle: 'DOCa Rioja', color: 'text-rose-600', bg: 'bg-rose-50' },
  { icon: FaBalanceScale, title: 'Gestorías', subtitle: 'Fiscal · Contable', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: FaBolt, title: 'Electricidad', subtitle: 'Instaladores', color: 'text-yellow-600', bg: 'bg-yellow-50' },
  { icon: FaWrench, title: 'Fontanería', subtitle: 'Calefacción · Clima', color: 'text-cyan-600', bg: 'bg-cyan-50' },
  { icon: FaGavel, title: 'Abogados', subtitle: 'Despachos', color: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: FaTruck, title: 'Transporte', subtitle: 'Logística', color: 'text-amber-600', bg: 'bg-amber-50' },
  { icon: FaStore, title: 'Tiendas', subtitle: 'Comercio local', color: 'text-pink-600', bg: 'bg-pink-50' },
  { icon: FaSeedling, title: 'Agro', subtitle: 'Agricultura · Ganadería', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { icon: FaHardHat, title: 'Construcción', subtitle: 'Obra · Reformas', color: 'text-orange-600', bg: 'bg-orange-50' },
  { icon: FaBreadSlice, title: 'Panaderías', subtitle: 'Hostelería', color: 'text-amber-600', bg: 'bg-amber-50' },
  { icon: FaHammer, title: 'Talleres', subtitle: 'Mecánica · Vehículos', color: 'text-gray-600', bg: 'bg-gray-50' },
  { icon: FaTractor, title: 'Maquinaria', subtitle: 'Agrícola · Obra', color: 'text-green-600', bg: 'bg-green-50' },
  { icon: FaTooth, title: 'Clínicas', subtitle: 'Salud privada', color: 'text-cyan-600', bg: 'bg-cyan-50' },
  { icon: FaHandshake, title: 'Consultorías', subtitle: 'Arquitectura · Ing.', color: 'text-slate-600', bg: 'bg-slate-50' },
]

const antesDespues = {
  antes: '2h cada noche organizando facturas, buscando presupuestos, preparando informes para el gestor.',
  despues: 'Llegas a casa, cenas y te olvidas. Todo lo hace tu empleado digital por WhatsApp.',
}

const casos = [
  { icon: HiOutlineDocumentSearch, title: 'Busca contratos y facturas', desc: 'Encuentra cualquier documento en segundos.' },
  { icon: HiOutlineCurrencyEuro, title: 'Organiza facturas', desc: 'Las clasifica por cliente, fecha, importe.' },
  { icon: HiOutlineDocumentText, title: 'Crea presupuestos', desc: 'Desde plantillas, en segundos.' },
  { icon: HiOutlineClipboardList, title: 'Clasifica documentos', desc: 'Albaranes, certificados, informes.' },
  { icon: HiOutlineMail, title: 'Responde dudas', desc: 'Sobre documentos, normas, clientes.' },
  { icon: HiOutlineSearch, title: 'Busca en PDFs', desc: 'Lee documentos y te responde al momento.' },
]

export default function QuienLoUsa() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="para-quien" className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="section-badge">Para quién es</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-5 mb-4">
            Da igual tu sector — si tienes papeles, sirve
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Lo usan gestorías, bodegas, electricistas, talleres, panaderías, clínicas...
            Cualquier negocio que pierda tiempo con facturas, albaranes y documentos.
          </p>
        </motion.div>

        {/* Sectores — 14 tarjetas compactas */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {sectores.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={s.title} className={`flex items-center gap-2 px-3 py-2 rounded-xl ${s.bg} border border-gray-100`}>
                <Icon className={`${s.color} text-sm`} />
                <span className="text-xs font-medium text-gray-700">{s.title}</span>
              </div>
            )
          })}
        </motion.div>

        {/* Antes / Después */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="max-w-3xl mx-auto mb-14"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <span className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2 block">Antes</span>
              <p className="text-sm text-red-700 leading-relaxed">{antesDespues.antes}</p>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
              <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-2 block">Después</span>
              <p className="text-sm text-emerald-700 leading-relaxed">{antesDespues.despues}</p>
            </div>
          </div>
        </motion.div>

        {/* Lo que hace - 6 tarjetas */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto mb-12"
        >
          {casos.map((c, i) => {
            const Icon = c.icon
            return (
              <div key={c.title} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                  <Icon className="text-base" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{c.title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{c.desc}</p>
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a href="#contacto" className="inline-flex items-center gap-2 gradient-primary text-white px-7 py-3.5 rounded-2xl font-semibold text-sm hover:shadow-xl transition-all duration-300">
            ¿Hablamos de tu caso?
          </a>
        </motion.div>
      </div>
    </section>
  )
}
