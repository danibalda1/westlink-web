import { motion } from 'framer-motion'
import { useRef } from 'react'

/* ══════════════════════════════════════════════════════════════
   TODO: SUSTITUIR POR TESTIMONIOS REALES.
   Estos tres textos son EJEMPLOS de maquetación, no declaraciones
   de clientes reales. No se usan nombres de empresas de La Rioja
   para no dar a entender que son clientes. Antes de publicar:
     1) pide permiso por escrito al cliente,
     2) pon su nombre/negocio y localidad reales,
     3) cambia el texto por una cita textual suya.
   ══════════════════════════════════════════════════════════════ */
const testimonios = [
  {
    quote:
      'Antes tardaba media hora en encontrar la factura de un proveedor. Ahora se lo pido al móvil y la tengo en segundos.',
    author: 'J. M.',
    role: 'Instalador eléctrico · Logroño',
  },
  {
    quote:
      'Llego al despacho y los documentos de los clientes ya están clasificados. El trimestral se prepara en la mitad de tiempo.',
    author: 'Cliente de gestoría',
    role: 'Asesoría · Logroño',
  },
  {
    quote:
      'En obra no llevo papeles encima: albaranes, partes y presupuestos están todos en el WhatsApp.',
    author: 'R. S.',
    role: 'Fontanería · Calahorra',
  },
]

export default function Testimonios() {
  const ref = useRef(null)
  /* Sin fades por scroll: el contenido tiene que verse siempre, también en
     capturas y para quien no ejecuta JS. El movimiento queda en el hover,
     en el acordeón del FAQ y en la entrada del hero. */
  const up = { opacity: 1, y: 0 }
  const show = { opacity: 1, y: 0 }

  return (
    <section id="testimonios" className="sec border-t border-white/[0.06]">
      <div className="wrap" ref={ref}>
        <motion.div initial={up} animate={show} transition={{ duration: 0.5 }} className="max-w-2xl">
          <p className="eyebrow mb-5">Qué dicen</p>
          <h2 className="h2">Negocios de La Rioja que ya no pierden tardes con papeles</h2>
          <p className="body-dim mt-6 text-[15px]">
            Ejemplos de cómo cambia el día a día. Los testimonios reales se publican solo con
            permiso del cliente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mt-14">
          {testimonios.map((t, i) => (
            <motion.figure
              key={t.author + i}
              initial={up}
              animate={show}
              transition={{ duration: 0.5, delay: 0.06 + i * 0.06 }}
              className="card p-7 flex flex-col"
            >
              {/* TODO: testimonios reales — ver comentario al inicio del archivo */}
              <span className="mono-label text-white/30 mb-5">Ejemplo</span>
              <blockquote className="text-[15px] text-white/70 leading-relaxed flex-1">
                «{t.quote}»
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/[0.06]">
                <span className="text-white text-[14px] font-medium block">{t.author}</span>
                <span className="text-white/40 text-[13px]">{t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
