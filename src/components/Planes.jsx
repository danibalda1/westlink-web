import { motion } from 'framer-motion'
import { useRef } from 'react'
import { BsCheckLg } from 'react-icons/bs'
import { HiArrowRight, HiChevronDown } from 'react-icons/hi'

const WA = 'https://wa.me/34648253217?text=Hola%20Dani%2C%20quiero%20ver%20c%C3%B3mo%20funciona%20el%20empleado%20digital'

const planGo = [
  'Sin hardware y sin instalación: 100% digital',
  'Acceso por WhatsApp y panel web',
  'Extrae datos de facturas, albaranes y PDFs',
  'Organiza la documentación automáticamente',
  'Búsqueda instantánea en todos tus documentos',
  'Configuración contigo en 15 minutos',
  'Sin permanencia: cancelas cuando quieras',
]

const planesHardware = [
  {
    name: 'Start',
    price: '149',
    desc: 'Para autónomos y microempresas que quieren el sistema en su oficina.',
    features: [
      'Westlink Box en cesión',
      'IA mediante APIs externas',
      'Auto-configuración al encender',
      'Copias de seguridad',
      'Soporte por email',
    ],
  },
  {
    name: 'Private',
    price: '199',
    desc: 'Máxima privacidad: la IA corre en tu propia red.',
    features: [
      'Westlink Box en cesión',
      'Modelos locales (Ollama)',
      'Sin depender de APIs externas',
      'Todos los datos se quedan en tu oficina',
      'Soporte prioritario',
    ],
    highlight: true,
  },
  {
    name: 'Hybrid',
    price: '299',
    desc: 'Lo mejor de los dos mundos: local para lo delicado, nube para lo demás.',
    features: [
      'Westlink Box en cesión',
      'Modelos locales para la mayoría de tareas',
      'APIs solo cuando hace falta',
      'Selección automática del mejor modelo',
      'Soporte prioritario',
    ],
  },
]

const pagoUnico = [
  { name: 'Starter', price: '2.300€', desc: 'Autónomos y microempresas', features: 'Mini PC 256GB NVMe / 16GB RAM · 1 empleado digital · IA local + APIs · instalación y formación · soporte 30 días' },
  { name: 'Business', price: '7.900€', desc: 'PYMES de 3 a 25 empleados', features: 'Servidor 1TB NVMe / 32GB RAM · hasta 5 empleados digitales · modelos locales avanzados · instalación y formación · soporte 90 días' },
  { name: 'Enterprise', price: '15.900€', desc: 'Empresas grandes', features: 'Servidor multi-GPU · empleados digitales ilimitados · rack profesional · ampliación modular · soporte 12 meses' },
]

export default function Planes() {
  const ref = useRef(null)
  /* Sin fades por scroll: el contenido tiene que verse siempre, también en
     capturas y para quien no ejecuta JS. El movimiento queda en el hover,
     en el acordeón del FAQ y en la entrada del hero. */
  const up = { opacity: 1, y: 0 }
  const show = { opacity: 1, y: 0 }

  return (
    <section id="precios" className="sec border-t border-white/[0.06]">
      <div className="wrap" ref={ref}>
        <motion.div initial={up} animate={show} transition={{ duration: 0.5 }} className="max-w-2xl">
          <p className="eyebrow mb-5">Planes y precios</p>
          <h2 className="h2">Empieza con 49€ al mes. Sin permanencia</h2>
          <p className="lead mt-6">
            Elige cómo lo quieres: solo digital por WhatsApp, con hardware en tu oficina o
            pagando el sistema una sola vez. Todos los precios son sin IVA.
          </p>
        </motion.div>

        {/* ── Plan Go — plan dominante ── */}
        <motion.div
          initial={up}
          animate={show}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="card card-accent p-8 md:p-10 mt-14"
        >
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16">
            <div>
              <span className="pill">Plan Go · digital</span>
              <h3 className="h3 !text-[1.5rem] mt-5">Tu empleado digital por WhatsApp</h3>
              <p className="body-dim text-[15px] mt-3 max-w-xl">
                La forma más rápida de empezar: sin instalar nada, sin comprar nada y sin
                tocar la informática de tu negocio. Te lo configuro yo contigo.
              </p>
              <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {planGo.map((f) => (
                  <li key={f} className="flex gap-3">
                    <BsCheckLg className="text-[#818CF8] mt-1 shrink-0 text-[13px]" />
                    <span className="text-[14.5px] text-white/60 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:border-l lg:border-white/[0.08] lg:pl-10 flex flex-col justify-center">
              <p className="text-[13px] text-white/40">Desde</p>
              <p className="mt-2 flex items-baseline gap-1">
                <span className="text-[3.25rem] leading-none font-semibold text-white tracking-[-2px]">49€</span>
                <span className="text-[14px] text-white/40">/mes</span>
              </p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-7 w-full">
                Hablar con Dani
              </a>
              <p className="text-[12.5px] text-white/35 mt-4 leading-relaxed">
                Sin permanencia. Si un mes no te encaja, lo dejas.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Con hardware ── */}
        <motion.p
          initial={up}
          animate={show}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="eyebrow mt-20 mb-6"
        >
          Si prefieres el sistema dentro de tu oficina
        </motion.p>
        <div className="grid md:grid-cols-3 gap-4">
          {planesHardware.map((p, i) => (
            <motion.div
              key={p.name}
              initial={up}
              animate={show}
              transition={{ duration: 0.5, delay: 0.14 + i * 0.06 }}
              className={`card p-7 flex flex-col ${p.highlight ? 'card-accent' : ''}`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="h3">{p.name}</h3>
                {p.highlight && <span className="mono-label text-[#A5B4FC]">Recomendado</span>}
              </div>
              <p className="body-dim text-[14px] mt-3 min-h-[42px]">{p.desc}</p>
              <p className="mt-5 flex items-baseline gap-1">
                <span className="text-[2rem] leading-none font-semibold text-white tracking-[-1px]">{p.price}€</span>
                <span className="text-[13px] text-white/40">/mes</span>
              </p>
              <ul className="mt-6 space-y-2.5 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <BsCheckLg className="text-[#818CF8] mt-1 shrink-0 text-[12px]" />
                    <span className="text-[14px] text-white/55 leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[12px] text-white/30 mt-5">Hardware en cesión, recuperable al cancelar.</p>
            </motion.div>
          ))}
        </div>

        {/* ── Pago único + Business (contenido plegable, siempre en el HTML) ── */}
        <div className="grid lg:grid-cols-2 gap-4 mt-8">
          <details className="card p-6 group">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span>
                <span className="text-white text-[15px] font-medium block">¿Prefieres pagar una sola vez?</span>
                <span className="text-[13px] text-white/40 block mt-1">Desde 2.300€ y el sistema es tuyo.</span>
              </span>
              <HiChevronDown className="text-white/40 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="mt-6 space-y-5">
              {pagoUnico.map((t) => (
                <div key={t.name} className="border-t border-white/[0.06] pt-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-white text-[15px] font-medium">{t.name}</span>
                    <span className="text-white text-[15px]">{t.price}</span>
                  </div>
                  <p className="text-[12.5px] text-white/40 mt-1">{t.desc}</p>
                  <p className="text-[13px] text-white/55 mt-2 leading-relaxed">{t.features}</p>
                </div>
              ))}
            </div>
          </details>

          <details className="card p-6 group">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span>
                <span className="text-white text-[15px] font-medium block">¿Necesitas más potencia?</span>
                <span className="text-[13px] text-white/40 block mt-1">Business desde 499€/mes y Enterprise a medida.</span>
              </span>
              <HiChevronDown className="text-white/40 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="mt-6 space-y-4 text-[14px] text-white/55 leading-relaxed border-t border-white/[0.06] pt-5">
              <p>
                <strong className="text-white/90 font-medium">Business · 499€/mes</strong> — Westlink Box
                Pro en cesión, más RAM y almacenamiento, hasta 5 empleados digitales, modelos locales
                más grandes, integraciones empresariales y soporte 24/7.
              </p>
              <p>
                <strong className="text-white/90 font-medium">Enterprise</strong> — infraestructura
                dedicada, multi-GPU y presupuesto a medida. Cuéntame qué necesitas y lo vemos.
              </p>
              <p className="text-white/40 text-[13px]">
                Packs por sector con pago único: bodega 3.900€, gestoría 5.900€, logística 4.900€,
                abogados 4.900€. Si nada encaja, te preparo un presupuesto a medida.
              </p>
            </div>
          </details>
        </div>

        <p className="text-[13px] text-white/40 mt-8">
          Visitas sin coste en La Rioja, Álava, Navarra, Burgos, Soria y Zaragoza. ¿Dudas antes de
          decidir? Mira las <a href="#faq" className="link">preguntas frecuentes</a> o{' '}
          <a href="#contacto" className="link">escríbeme directamente</a>.
        </p>
      </div>
    </section>
  )
}
