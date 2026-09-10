import { motion } from 'framer-motion'
import { useRef } from 'react'
import {
  HiOutlineDocumentSearch, HiOutlineCurrencyEuro, HiOutlineDocumentText,
  HiOutlineClipboardList, HiOutlineMail, HiOutlineSearch, HiArrowRight,
} from 'react-icons/hi'

const sectores = [
  'Bodegas', 'Gestorías', 'Electricistas', 'Fontaneros', 'Abogados', 'Transporte',
  'Tiendas', 'Agro', 'Construcción', 'Panaderías', 'Talleres', 'Maquinaria agrícola',
  'Clínicas', 'Consultorías',
]

const capacidades = [
  { icon: HiOutlineCurrencyEuro, title: 'Organiza facturas', desc: 'Las clasifica por cliente, fecha, proveedor e importe. Sin carpetas a mano.' },
  { icon: HiOutlineDocumentSearch, title: 'Encuentra contratos y facturas', desc: 'Pídeselo en lenguaje normal y te devuelve el documento en segundos.' },
  { icon: HiOutlineDocumentText, title: 'Prepara presupuestos', desc: 'A partir de plantillas y de trabajos parecidos que ya has hecho.' },
  { icon: HiOutlineClipboardList, title: 'Clasifica albaranes y certificados', desc: 'Boletines, certificados de instalación, albaranes y contratos, en su sitio.' },
  { icon: HiOutlineSearch, title: 'Lee tus PDFs', desc: 'Entra en el contenido del documento y te responde con el dato concreto.' },
  { icon: HiOutlineMail, title: 'Responde dudas', desc: 'Sobre plazos, vencimientos, clientes o lo que tengas guardado.' },
]

export default function Sectores() {
  const ref = useRef(null)
  /* Sin fades por scroll: el contenido tiene que verse siempre, también en
     capturas y para quien no ejecuta JS. El movimiento queda en el hover,
     en el acordeón del FAQ y en la entrada del hero. */
  const up = { opacity: 1, y: 0 }
  const show = { opacity: 1, y: 0 }

  return (
    <section id="sectores" className="sec border-t border-white/[0.06]">
      <div className="wrap" ref={ref}>
        <motion.div initial={up} animate={show} transition={{ duration: 0.5 }} className="max-w-2xl">
          <p className="eyebrow mb-5">Para quién es</p>
          <h2 className="h2">Da igual tu sector: si tienes papeles, te sirve</h2>
          <p className="lead mt-6">
            Funciona en bodegas, gestorías, electricistas, fontaneros, abogados, transporte,
            clínicas, talleres, panaderías, comercio local, agro y construcción. Cualquier
            negocio de La Rioja que pierda tiempo con facturas, albaranes y documentos.
          </p>
        </motion.div>

        {/* Sectores */}
        <motion.div
          initial={up}
          animate={show}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-10 flex flex-wrap gap-2.5"
        >
          {sectores.map((s) => (
            <span key={s} className="pill">{s}</span>
          ))}
        </motion.div>

        {/* Páginas de sector (antes huérfanas — ahora enlazadas desde aquí y desde el FAQ) */}
        <div className="grid md:grid-cols-3 gap-4 mt-14">
          {[
            {
              href: '/para/electricistas',
              title: 'IA para electricistas',
              desc: 'Boletines, certificados de instalación, presupuestos de obra y facturas de material, buscados al momento.',
            },
            {
              href: '/para/gestorias',
              title: 'IA para gestorías',
              desc: 'Documentos de clientes clasificados, vencimientos controlados y modelos fiscales con la información a mano.',
            },
            {
              href: '/para/fontaneros',
              title: 'IA para fontaneros',
              desc: 'Avisos, albaranes y partes de trabajo ordenados, con las facturas de proveedor localizadas desde el móvil en obra.',
            },
          ].map((c, i) => (
            <motion.a
              key={c.href}
              href={c.href}
              initial={up}
              animate={show}
              transition={{ duration: 0.5, delay: 0.12 + i * 0.06 }}
              className="card card-hover p-7 group flex flex-col"
            >
              <h3 className="h3">{c.title}</h3>
              <p className="body-dim text-[14.5px] mt-3 flex-1">{c.desc}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-[14px] text-[#A5B4FC]">
                Ver el caso
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          ))}
        </div>

        {/* Antes / después */}
        <motion.div
          initial={up}
          animate={show}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-4 mt-20"
        >
          <div className="card-flat p-7">
            <span className="mono-label">Antes</span>
            <p className="mt-4 text-[15px] text-white/55 leading-relaxed">
              Dos horas cada noche organizando facturas, buscando un presupuesto concreto y
              montando el informe del trimestre para el gestor. Los viernes, media tarde en el papeleo.
            </p>
          </div>
          <div className="card p-7 card-accent">
            <span className="mono-label text-[#A5B4FC]">Después</span>
            <p className="mt-4 text-[15px] text-white/70 leading-relaxed">
              Cierras, mandas los papeles por WhatsApp y te olvidas. Lo que necesites te lo
              encuentra después en segundos, desde el móvil, sin abrir un solo archivador.
            </p>
          </div>
        </motion.div>

        {/* Capacidades */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
          {capacidades.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.div
                key={c.title}
                initial={up}
                animate={show}
                transition={{ duration: 0.5, delay: 0.06 + i * 0.04 }}
                className="card p-6"
              >
                <Icon className="text-[#818CF8] text-[20px]" />
                <h3 className="h3 mt-5">{c.title}</h3>
                <p className="body-dim text-[14px] mt-2.5">{c.desc}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row gap-3">
          <a
            href="https://wa.me/34648253217?text=Hola%20Dani%2C%20quiero%20ver%20c%C3%B3mo%20funciona%20el%20empleado%20digital"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Hablar con Dani
            <HiArrowRight />
          </a>
          <a href="#precios" className="btn btn-ghost">Ver planes y precios</a>
        </div>
      </div>
    </section>
  )
}
