import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight, HiPlay, HiPause, HiPhone } from 'react-icons/hi'
import { BsDot } from 'react-icons/bs'

/* ── Demo messages ── */
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

export default function Hero() {
  const [demoStep, setDemoStep] = useState(0)
  const [demoPlaying, setDemoPlaying] = useState(true)

  const advanceDemo = useCallback(() => {
    setDemoStep((prev) => {
      if (prev >= demoMessages.length - 1) return 0
      return prev + 1
    })
  }, [])

  useEffect(() => {
    if (!demoPlaying) return
    const timer = setInterval(advanceDemo, 3500)
    return () => clearInterval(timer)
  }, [demoPlaying, advanceDemo])

  const currentMsg = demoMessages[demoStep]
  const isUser = currentMsg?.role === 'user'

  const now = new Date()
  const timeStr = now.getHours().toString().padStart(2,'0') + ':' + now.getMinutes().toString().padStart(2,'0')

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#1A0A0A] via-[#2D1810] to-[#1A1510] px-4 py-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0A0A] via-[#2D1810] to-[#1A1510]" />
        <div className="absolute top-0 -left-32 w-[600px] h-[600px] bg-amber-500/6 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '64px 64px' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* ── LEFT: Texto breve ── */}
        <div className="text-center lg:text-left lg:max-w-sm order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/10 text-amber-200/80 text-[10px] px-3 py-1 rounded-full mb-5 uppercase tracking-widest font-semibold"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            🌄 De La Rioja
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Hola, soy Dani.
            <span className="block mt-1 text-amber-300">Te ayudo con el papeleo (con IA)</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed max-w-sm mx-auto lg:mx-0"
          >
            Vivo en Villamediana, La Rioja. No es una persona — es una IA que trabaja por WhatsApp. Sin instalaciones raras, sin compromiso.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-3 mt-6"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Quiero que me ayudes</span>
              <HiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+34648253217"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white px-5 py-3 rounded-2xl text-sm font-medium border border-white/15 hover:border-white/30 transition-all duration-300"
            >
              <HiPhone className="text-base" />
              Mi móvil: 648 25 32 17
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4 text-[11px] text-gray-500 mt-6 justify-center lg:justify-start"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-400/60" />
              IA (DeepSeek) no almacena datos
            </span>
            <span className="w-px h-3 bg-white/10" />
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-400/60" />
              Ya ayudo a gente en La Rioja
            </span>
          </motion.div>
        </div>

        {/* ── RIGHT: MÓVIL GRANDE ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="order-1 lg:order-2 w-full max-w-sm lg:max-w-md"
        >
          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-br from-amber-500/15 via-orange-500/8 to-transparent rounded-[60px] blur-[80px]" />
            
            <div className="relative bg-[#111B28] rounded-[44px] p-3 shadow-2xl shadow-amber-500/5 border border-white/10">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#111B28] rounded-b-[10px] z-10">
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1E2D3D] rounded-full" />
              </div>

              {/* Screen */}
              <div className="bg-[#0B141A] rounded-[32px] overflow-hidden">
                {/* Header */}
                <div className="flex items-center gap-2.5 px-4 py-3 bg-[#1F2C38]">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-lg shadow-amber-500/20">W</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-sm font-semibold truncate">Empleado Digital</div>
                    <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      en línea
                    </div>
                  </div>
                  <button onClick={() => setDemoPlaying(!demoPlaying)} className="text-white/30 hover:text-white/60 transition-colors shrink-0" aria-label={demoPlaying ? 'Pausar' : 'Reanudar'}>
                    {demoPlaying ? <HiPause size={16} /> : <HiPlay size={16} />}
                  </button>
                </div>

                {/* Messages */}
                <div className="px-4 py-3 min-h-[340px] sm:min-h-[420px] flex flex-col justify-end gap-1"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
                >
                  {demoMessages.slice(0, demoStep + 1).map((msg, i) => {
                    const animDelay = i === demoStep ? (demoPlaying ? 0 : 0.3) : 0
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.4, delay: animDelay, ease: 'easeOut' }}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[88%] rounded-[10px] px-3.5 py-2.5 text-[14px] leading-relaxed shadow-sm ${
                            msg.role === 'user'
                              ? 'bg-[#005C4B] text-white rounded-br-sm'
                              : 'bg-[#1F2C38] text-gray-100 rounded-bl-sm'
                          }`}
                        >
                          {msg.text}
                          {i === demoStep && msg.role === 'assistant' && demoPlaying && (
                            <span className="inline-flex gap-0.5 ml-1">
                              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            </span>
                          )}
                          <div className="text-[9px] text-white/40 text-right mt-0.5">{timeStr}</div>
                        </div>
                      </motion.div>
                    )
                  })}
                  {demoStep === 0 && (
                    <div className="flex items-center justify-center h-32 text-white/15 text-xs">
                      <span className="animate-pulse">Iniciando...</span>
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="flex items-center gap-2 px-3 py-2.5 bg-[#1F2C38]">
                  <div className="flex-1 bg-[#2A3942] rounded-lg px-3.5 py-2 text-sm text-white/20">Escribe un mensaje...</div>
                  <div className="w-10 h-10 rounded-full bg-[#00A884] flex items-center justify-center shrink-0 shadow-md">
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
