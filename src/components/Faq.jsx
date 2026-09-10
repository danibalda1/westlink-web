import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { HiChevronDown } from 'react-icons/hi'

/* IMPORTANTE: estas 6 preguntas y respuestas están duplicadas en el
   schema FAQPage de index.html. Si cambias un texto aquí, cámbialo allí. */
const faqs = [
  {
    q: '¿Cuánto cuesta y qué incluye?',
    a: (
      <>
        Desde 49€/mes con el Plan Go (digital, por WhatsApp, sin hardware). Si prefieres el
        sistema en tu propia oficina, desde 149€/mes con la Westlink Box incluida. También hay
        opción de pago único desde 2.300€. Sin permanencia y sin sorpresas. Tienes el detalle en{' '}
        <a href="#precios" className="link">los planes y precios</a>.
      </>
    ),
  },
  {
    q: '¿Tengo que instalar algo?',
    a: (
      <>
        En el Plan Go no instalas nada: funciona por WhatsApp. Si contratas hardware, lo
        instalamos y lo configuramos nosotros. No necesitas saber de tecnología.
      </>
    ),
  },
  {
    q: '¿Y si no funciona para mi negocio?',
    a: (
      <>
        Lo probamos primero, con tus documentos reales. Si no te convence, no sigues: sin
        permanencia y cancelas cuando quieras. Te lo enseño en una visita sin coste.
      </>
    ),
  },
  {
    q: '¿Mis datos están seguros? ¿Por dónde se procesa la IA?',
    a: (
      <>
        En el Plan Go los documentos se procesan con DeepSeek, una IA externa que no almacena ni
        entrena con tus datos. Si trabajas con información muy sensible, elige un plan con
        hardware en tu oficina: ahí la IA corre en tu propia red y ni yo tengo acceso.
      </>
    ),
  },
  {
    q: '¿Vale para mi sector?',
    a: (
      <>
        Funciona en <a href="/para/electricistas" className="link">electricistas</a>,{' '}
        <a href="/para/gestorias" className="link">gestorías</a>,{' '}
        <a href="/para/fontaneros" className="link">fontaneros</a>, bodegas, abogados, clínicas,
        talleres y cualquier negocio con papeles que organizar. Si no estás seguro, pregúntame.
      </>
    ),
  },
  {
    q: '¿En qué zonas estáis?',
    a: (
      <>
        Estamos en Villamediana de Iregua (La Rioja) y hacemos visitas sin coste en La Rioja,
        Álava, Navarra, Burgos, Soria y Zaragoza. Si estás fuera de esa zona, escríbeme igualmente.
      </>
    ),
  },
]

export default function Faq() {
  const ref = useRef(null)
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="sec border-t border-white/[0.06]">
      <div className="wrap" ref={ref}>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="eyebrow mb-5">Preguntas frecuentes</p>
          <h2 className="h2">Lo que me preguntan antes de empezar</h2>
          <p className="lead mt-6">
            Si tu duda no está aquí,{' '}
            <a
              href="https://wa.me/34648253217?text=Hola%20Dani%2C%20tengo%20una%20duda%20sobre%20el%20empleado%20digital"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              escríbeme por WhatsApp
            </a>{' '}
            y te contesto yo.
          </p>
        </motion.div>

        <div className="mt-14 max-w-3xl">
          {faqs.map((faq, i) => {
            const open = openIndex === i
            return (
              <div key={faq.q} className="border-t border-white/[0.08]">
                <h3>
                  <button
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                  >
                    <span className="text-[16.5px] text-white font-medium tracking-[-0.3px] leading-snug">
                      {faq.q}
                    </span>
                    <HiChevronDown
                      className={`text-white/35 shrink-0 mt-1 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                    />
                  </button>
                </h3>
                {/* El texto se queda siempre en el HTML (grid-rows 0fr) para que
                    los rastreadores de IA puedan leerlo aunque esté plegado. */}
                <div
                  id={`faq-panel-${i}`}
                  className={`grid transition-all duration-300 ease-out ${
                    open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[15.5px] text-white/60 leading-relaxed pb-7 pr-10">{faq.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
          <hr className="hairline" />
        </div>
      </div>
    </section>
  )
}
