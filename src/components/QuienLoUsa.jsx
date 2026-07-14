import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { FaWineBottle, FaBalanceScale, FaGavel, FaTruck, FaSeedling, FaTooth, FaHandshake, FaBolt } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineDocumentSearch, HiOutlineCurrencyEuro, HiOutlineDocumentText, HiOutlineSearch, HiOutlineClipboardList } from 'react-icons/hi'

const sectores = [
  { icon: FaWineBottle, title: 'Bodegas', subtitle: 'DOCa Rioja', color: 'text-rose-600', bg: 'bg-rose-50' },
  { icon: FaBalanceScale, title: 'Gestorías', subtitle: 'Fiscal · Laboral', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: FaBolt, title: 'Electricidad', subtitle: 'Instaladores', color: 'text-yellow-600', bg: 'bg-yellow-50' },
  { icon: FaGavel, title: 'Abogados', subtitle: 'Despachos', color: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: FaTruck, title: 'Logística', subtitle: 'Transporte', color: 'text-amber-600', bg: 'bg-amber-50' },
  { icon: FaSeedling, title: 'Agro', subtitle: 'Alimentación', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { icon: FaTooth, title: 'Clínicas', subtitle: 'Salud privada', color: 'text-cyan-600', bg: 'bg-cyan-50' },
  { icon: FaHandshake, title: 'Consultorías', subtitle: 'Arquitectura', color: 'text-slate-600', bg: 'bg-slate-50' },
]

const casos = [
  { icon: HiOutlineDocumentSearch, title: 'Busca contratos y facturas', desc: 'Encuentra cualquier documento en segundos. Sin carpetas.' },
  { icon: HiOutlineCurrencyEuro, title: 'Organiza facturas', desc: 'Las clasifica por cliente, fecha, importe. Automático.' },
  { icon: HiOutlineDocumentText, title: 'Crea presupuestos', desc: 'A partir de plantillas. En segundos, desde el móvil.' },
  { icon: HiOutlineClipboardList, title: 'Clasifica documentos', desc: 'Albaranes, certificados, informes. Todo etiquetado.' },
  { icon: HiOutlineMail, title: 'Responde dudas', desc: 'Sobre tus documentos, normas, clientes. Al instante.' },
  { icon: HiOutlineSearch, title: 'Busca en PDFs', desc: 'Lee montones de documentos y te responde.' },
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
            Da igual tu sector — esto sirve para todos
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Da igual que tengas una gestoría, una bodega, un taller de electricidad o un despacho.
            Si pierdes tiempo con papeles, esto te va a gustar.
          </p>
        </motion.div>

        {/* Sectores rápido */}
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

        {/* Lo que hace - 6 tarjetas compactas */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
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
