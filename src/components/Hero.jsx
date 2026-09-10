import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight, HiPlay, HiPause } from 'react-icons/hi'

/* Mensajes de la demo del móvil — copy real del producto */
const demoMessages = [
  { role: 'user', text: 'Busca la factura de materiales de Salto del mes pasado' },
  { role: 'assistant', text: 'Aquí está. Factura nº F-2026-0842 de Salto Eléctrico — 1.842€ en material. La tengo clasificada en Proveedores/Salto.' },
  { role: 'user', text: 'Prepárame un presupuesto para cambiar el cuadro de luces en la calle Mayor' },
  { role: 'assistant', text: 'Listo. Basado en trabajos similares: 2.450€ materiales + 800€ mano de obra. ¿Lo envío al cliente?' },
  { role: 'user', text: '¿Tengo algún certificado de instalación pendiente de firmar?' },
  { role: 'assistant', text: 'Sí. El boletín de la reforma de García López (C/ Río 23) está pendiente de firma desde el 28/06. ¿Lo preparo?' },
  { role: 'user', text: '¿Cuánto facturé en obras este trimestre?' },
  { role: 'assistant', text: '28.430€ en Q2 2026. 12 obras facturadas. La más grande: reforma integral de Finca Miranda (8.200€).' },
]

const fade = (delay) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  const [demoStep, setDemoStep] = useState(0)
  const [demoPlaying, setDemoPlaying] = useState(true)
  /* La hora se fija en el cliente (evita desajustes al prerenderizar) */
  const [timeStr, setTimeStr] = useState('')

  const advanceDemo = useCallback(() => {
    setDemoStep((prev) => (prev >= demoMessages.length - 1 ? 0 : prev + 1))
  }, [])

  useEffect(() => {
    if (!demoPlaying) return
    const timer = setInterval(advanceDemo, 3500)
    return () => clearInterval(timer)
  }, [demoPlaying, advanceDemo])

  useEffect(() => {
    const now = new Date()
    setTimeStr(
      now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0'),
    )
  }, [])

  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28">
      {/* Fondo: casi-negro con un halo índigo muy leve */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[520px] rounded-full bg-[#4F46E5]/[0.07] blur-[140px]" />
      </div>

      <div className="wrap relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-20 items-center">
        {/* ── Texto ── */}
        <div>
          <motion.p {...fade(0)} className="pill mb-6">
            <span className="dot" />
            Villamediana de Iregua · La Rioja
          </motion.p>

          <motion.h1 {...fade(0.05)} className="h1">
            Hola, soy Dani.
            <span className="block mt-3 text-white/95">Menos papeleo.</span>
            <span className="block text-white/40">Más tiempo para tu negocio.</span>
          </motion.h1>

          <motion.p {...fade(0.12)} className="lead mt-7 max-w-xl">
            Monto <strong className="font-medium text-white/90">empleados digitales de IA</strong> para
            PYMES de La Rioja. Tu documentación —facturas, albaranes, presupuestos, certificados— se
            organiza sola y la encuentras por WhatsApp en segundos, sin instalar nada.
            Desde <strong className="font-medium text-white/90">49€/mes</strong>.
          </motion.p>

          <motion.div {...fade(0.18)} className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/34648253217?text=Hola%20Dani%2C%20quiero%20ver%20c%C3%B3mo%20funciona%20el%20empleado%20digital"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Hablar con Dani
              <HiArrowRight />
            </a>
            <a href="#como-funciona" className="btn btn-ghost">
              <HiPlay />
              Cómo funciona
            </a>
          </motion.div>

          <motion.dl {...fade(0.24)} className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { k: 'Desde 49€', v: 'al mes, sin permanencia' },
              { k: 'WhatsApp', v: 'sin instalar nada' },
              { k: 'En 15 min', v: 'configurado contigo' },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-white text-[15px] font-medium tracking-[-0.2px]">{s.k}</dt>
                <dd className="text-[12.5px] text-white/45 mt-1 leading-snug">{s.v}</dd>
              </div>
            ))}
          </motion.dl>

          <motion.p {...fade(0.3)} className="mt-9 text-[13.5px] text-white/40">
            Casos concretos:{' '}
            <a href="/para/electricistas" className="link">IA para electricistas</a>,{' '}
            <a href="/para/gestorias" className="link">IA para gestorías</a> y{' '}
            <a href="/para/fontaneros" className="link">IA para fontaneros</a> en La Rioja.
          </motion.p>
        </div>

        {/* ── Móvil con la demo ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[330px] mx-auto lg:mx-0 lg:ml-auto"
        >
          <div className="relative rounded-[36px] border border-white/[0.09] bg-[#101012] p-2.5">
            <div className="rounded-[28px] overflow-hidden bg-[#0A0A0A] border border-white/[0.06]">
              {/* Cabecera del chat */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.07]">
                <div className="w-8 h-8 rounded-full bg-[#4F46E5] flex items-center justify-center text-white text-[12px] font-medium shrink-0">
                  W
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-[13px] font-medium leading-tight">Empleado digital</p>
                  <p className="text-[11px] text-white/40 flex items-center gap-1.5 leading-tight mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                    en línea
                  </p>
                </div>
                <button
                  onClick={() => setDemoPlaying(!demoPlaying)}
                  className="text-white/30 hover:text-white/70 transition-colors"
                  aria-label={demoPlaying ? 'Pausar la demo' : 'Reanudar la demo'}
                >
                  {demoPlaying ? <HiPause size={15} /> : <HiPlay size={15} />}
                </button>
              </div>

              {/* Mensajes */}
              <div className="px-3.5 py-4 h-[400px] flex flex-col justify-end gap-2">
                {demoMessages.slice(0, demoStep + 1).map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[90%] rounded-2xl px-3.5 py-2.5 text-[12.5px] leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-[#4F46E5] text-white rounded-br-md'
                          : 'bg-white/[0.06] text-white/80 rounded-bl-md'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
                {demoStep === 0 && (
                  <div className="flex items-center justify-center h-24 text-white/25 text-[11px]">
                    <span className="animate-pulse">Iniciando conversación…</span>
                  </div>
                )}
              </div>

              {/* Pie de chat */}
              <div className="flex items-center gap-2 px-3.5 py-3 border-t border-white/[0.07]">
                <div className="flex-1 rounded-full bg-white/[0.04] px-3.5 py-2 text-[12px] text-white/25">
                  Escribe un mensaje…
                </div>
                <div className="w-8 h-8 rounded-full bg-[#4F46E5] flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-[12px] text-white/30">
            Demo ilustrativa con documentos de ejemplo.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
