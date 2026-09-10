import { motion } from 'framer-motion'
import { useRef } from 'react'
import { HiOutlineXCircle, HiOutlineCheckCircle } from 'react-icons/hi'

const noEs = [
  'No es un chat de IA generalista para preguntarle cosas de cualquier tema. Trabaja con tus documentos y con lo que tiene que ver con tu negocio.',
  'No es para empresas grandes que ya tienen departamento de informática, flujos montados y un ERP en condiciones.',
  'No es magia el primer día: la primera semana ajustamos juntos cómo clasifica tus documentos para que salga a tu manera.',
  'No es para quien no va a mandarle documentos nunca. Si no le das papeles, no tiene nada que ordenar.',
  'No es una migración total de tu empresa a la IA en siete días ni 20 integraciones a la vez. Empezamos por el papeleo y crecemos desde ahí.',
]

export default function Alcance() {
  const ref = useRef(null)
  /* Sin fades por scroll: el contenido tiene que verse siempre, también en
     capturas y para quien no ejecuta JS. El movimiento queda en el hover,
     en el acordeón del FAQ y en la entrada del hero. */
  const up = { opacity: 1, y: 0 }
  const show = { opacity: 1, y: 0 }

  return (
    <section id="no-es-para" className="sec border-t border-white/[0.06]">
      <div className="wrap" ref={ref}>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20">
          <motion.div initial={up} animate={show} transition={{ duration: 0.5 }}>
            <p className="eyebrow mb-5">Alcance</p>
            <h2 className="h2">No es para todo el mundo</h2>
            <p className="body-dim mt-6 text-[15px]">
              Prefiero decírtelo claro antes de que me llames. Esto es para PYMES de La Rioja
              que pierden horas con facturas, albaranes y documentos. Si te reconoces en
              cualquiera de estos cinco puntos, probablemente no soy tu opción.
            </p>
            <div className="mt-9 card p-7">
              <HiOutlineCheckCircle className="text-[#818CF8] text-[20px]" />
              <h3 className="h3 mt-4">Sí es para ti si…</h3>
              <p className="body-dim text-[14.5px] mt-3">
                llevas tú el papeleo de un negocio pequeño o mediano y quieres dejar de hacerlo a
                mano. Mira cómo queda en una{' '}
                <a href="/para/gestorias" className="link">asesoría</a>, en un{' '}
                <a href="/para/fontaneros" className="link">taller de fontanería</a> o en una{' '}
                <a href="/para/electricistas" className="link">empresa de instalaciones eléctricas</a>.
              </p>
            </div>
          </motion.div>

          <motion.ul
            initial={up}
            animate={show}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {noEs.map((t) => (
              <li key={t} className="card card-flat p-6 flex gap-4">
                <HiOutlineXCircle className="text-white/25 text-[18px] shrink-0 mt-0.5" />
                <span className="text-[15px] text-white/55 leading-relaxed">{t}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
