import { motion } from 'framer-motion'
import { useRef } from 'react'
import { BsCheckLg } from 'react-icons/bs'
import { HiArrowRight } from 'react-icons/hi'

const pasos = [
  {
    n: '01',
    title: 'Me escribes por WhatsApp',
    desc: 'Te doy de alta tu empleado digital en 15 minutos por videollamada o en persona. No instalas nada: funciona desde el móvil que ya tienes.',
  },
  {
    n: '02',
    title: 'Le envías tus documentos',
    desc: 'Facturas, albaranes, presupuestos, contratos, certificados, PDFs. Los mandas como siempre los mandas: por WhatsApp o por correo.',
  },
  {
    n: '03',
    title: 'Lo tienes todo ordenado',
    desc: 'Extrae los datos, los clasifica por cliente, fecha e importe y te responde al momento: «la factura de marzo de Salto», «cuánto facturé este trimestre».',
  },
]

const consigues = [
  'Dejas de buscar facturas perdidas: todo está en un sitio y se encuentra en segundos',
  'Ahorras las 10-15 horas al mes que se van en papeles que no aportan nada',
  'Tu gestor recibe la documentación ordenada, así que hay menos errores y menos sustos',
  'Accedes desde el móvil, estés en la oficina, en obra o en casa',
  'Funciona con lo que ya usas: WhatsApp. Sin apps nuevas, sin informática',
  'Sin permanencia: si un mes no te encaja, lo dejas',
]

const comparativa = [
  { label: 'Precio', plan: '49€/mes', tu: '0€ en dinero, 10-15h al mes en tiempo' },
  { label: 'Buscar una factura', plan: 'Unos 5 segundos', tu: 'De 15 a 30 minutos' },
  { label: 'Clasificar documentos', plan: 'Automático', tu: 'Tú, una carpeta a mano' },
  { label: 'Informe para el gestor', plan: 'Se genera solo', tu: 'Lo montas tú cada trimestre' },
  { label: 'Disponible cuando no estás', plan: 'Sí, 24/7', tu: 'No' },
  { label: 'Documentos perdidos', plan: 'Ninguno', tu: 'Más de los que te gustaría' },
]

export default function ComoFunciona() {
  const ref = useRef(null)
  /* Sin fades por scroll: el contenido tiene que verse siempre, también en
     capturas y para quien no ejecuta JS. El movimiento queda en el hover,
     en el acordeón del FAQ y en la entrada del hero. */
  const up = { opacity: 1, y: 0 }
  const show = { opacity: 1, y: 0 }

  return (
    <section id="como-funciona" className="sec border-t border-white/[0.06]">
      <div className="wrap" ref={ref}>
        <motion.div
          initial={up}
          animate={show}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="eyebrow mb-5">Cómo funciona</p>
          <h2 className="h2">
            Tres pasos y dejas de perder las tardes con el papeleo
          </h2>
          <p className="lead mt-6">
            No hay que cambiar cómo trabajas. Tú sigues mandando tus documentos como hasta
            ahora; lo que cambia es que alguien los ordena, los guarda y te los encuentra.
          </p>
        </motion.div>

        {/* Pasos */}
        <div className="grid md:grid-cols-3 gap-4 mt-14">
          {pasos.map((p, i) => (
            <motion.div
              key={p.n}
              initial={up}
              animate={show}
              transition={{ duration: 0.5, delay: 0.05 + i * 0.06 }}
              className="card card-hover p-7"
            >
              <span className="mono-label">{p.n}</span>
              <h3 className="h3 mt-5">{p.title}</h3>
              <p className="body-dim text-[15px] mt-3">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Qué consigues + comparativa */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 mt-24 items-start">
          <motion.div initial={up} animate={show} transition={{ duration: 0.5, delay: 0.1 }}>
            <h3 className="h2 !text-[1.6rem] md:!text-[2rem]">Lo que cambia en tu día a día</h3>
            <ul className="mt-8 space-y-4">
              {consigues.map((c) => (
                <li key={c} className="flex gap-3.5">
                  <BsCheckLg className="text-[#818CF8] mt-1 shrink-0 text-[13px]" />
                  <span className="text-[15px] text-white/60 leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
            <p className="text-[14px] text-white/45 mt-8 leading-relaxed">
              ¿Trabajas en el taller y con las manos ocupadas? Mira cómo queda en{' '}
              <a href="/para/fontaneros" className="link">IA para fontaneros</a> y{' '}
              <a href="/para/electricistas" className="link">IA para electricistas</a>. ¿Llevas los
              papeles de tus clientes? Tienes el detalle en{' '}
              <a href="/para/gestorias" className="link">IA para gestorías</a>.
            </p>
          </motion.div>

          <motion.div initial={up} animate={show} transition={{ duration: 0.5, delay: 0.18 }}>
            <div className="card overflow-hidden">
              <div className="grid grid-cols-[1.1fr_0.95fr_0.95fr] text-[12px] border-b border-white/[0.08]">
                <div className="px-5 py-4" />
                <div className="px-4 py-4 text-center text-white font-medium border-x border-white/[0.08] bg-[#4F46E5]/[0.08]">
                  Empleado digital
                </div>
                <div className="px-4 py-4 text-center text-white/50">Hacerlo tú</div>
              </div>
              {comparativa.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[1.1fr_0.95fr_0.95fr] text-[13px] ${
                    i !== comparativa.length - 1 ? 'border-b border-white/[0.06]' : ''
                  }`}
                >
                  <div className="px-5 py-3.5 text-white/70">{row.label}</div>
                  <div className="px-4 py-3.5 text-center text-white border-x border-white/[0.06] bg-[#4F46E5]/[0.05]">
                    {row.plan}
                  </div>
                  <div className="px-4 py-3.5 text-center text-white/40">{row.tu}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/34648253217?text=Hola%20Dani%2C%20quiero%20ver%20c%C3%B3mo%20funciona%20el%20empleado%20digital"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Hablar con Dani
                <HiArrowRight />
              </a>
              <a href="#precios" className="btn btn-ghost">
                Ver precios
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
