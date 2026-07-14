import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight, HiShieldCheck, HiPlay, HiPause, HiPhone } from 'react-icons/hi'
import { BsDot } from 'react-icons/bs'

/* ── Demo messages que simulan una conversación real ── */
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
  const [demoVisible, setDemoVisible] = useState(false)
  const [demoPlaying, setDemoPlaying] = useState(true)

  const advanceDemo = useCallback(() => {
    setDemoStep((prev) => {
      if (prev >= demoMessages.length - 1) return 0
      return prev + 1
    })
  }, [])

  useEffect(() => {
    if (!demoPlaying) return
    const timer = setInterval(advanceDemo, 3800)
    return () => clearInterval(timer)
  }, [demoPlaying, advanceDemo])

  useEffect(() => {
    setDemoVisible(true)
  }, [])

  const currentMsg = demoMessages[demoStep]
  const isUser = currentMsg?.role === 'user'

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A1A]">
      {/* ── Fondo con gradiente y profundidad ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradiente principal */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A1A] via-[#0F0F2E] to-[#1A1040]" />

        {/* Orbes de luz */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] animate-float-subtle" />
        <div className="absolute bottom-1/3 -right-32 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[80px]" />

        {/* Product image flotante */}
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] pointer-events-none select-none hidden xl:block opacity-25 translate-x-1/4 -translate-y-1/4 rotate-12">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent rounded-full blur-[80px] scale-125" />
          <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl shadow-indigo-500/20 ring-1 ring-white/10 backdrop-blur-sm">
            <img
              src="/images/westlink-box.jpg"
              alt="Westlink Box - IA privada"
              className="w-full h-full object-contain mix-blend-screen opacity-80"
              loading="lazy"
            />
          </div>
        </div>

        {/* Grid sutil */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '256px 256px',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── LEFT: Content ── */}
          <div className="max-w-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/8 text-white/70 text-[11px] px-3 py-1.5 rounded-full mb-8 uppercase tracking-widest font-semibold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              IA privada para PYMES · La Rioja
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight"
            >
              Hola, soy Dani.
              <span className="block mt-2">
                <span className="gradient-text-warm">Te ayudo con el papeleo (con IA)</span>
              </span>
              <span className="block mt-2 text-white/90">Sin empresas, sin rodeos. Te echo una mano.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-400 mt-6 leading-relaxed max-w-lg"
            >
              Vivo en Villamediana y ayudo a negocios de La Rioja a dejar de perder
              horas con facturas, presupuestos y papeles. No es una persona — es una IA
              que trabaja por WhatsApp. Sin instalaciones raras, sin compromiso.
            </motion.p>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2 mt-6"
            >
              {[
                'Aprende tu negocio',
                'Automatiza tareas',
                'Responde dudas',
                'Busca documentos',
                'Datos 100% locales',
              ].map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center gap-1 text-xs text-gray-400 bg-white/4 border border-white/6 px-3 py-1.5 rounded-full"
                >
                  <BsDot className="text-emerald-400 shrink-0" />
                  {feature}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-start gap-4 mt-10"
            >
              <a
                href="#contacto"
                className="group relative inline-flex items-center gap-2.5 gradient-primary text-white px-7 py-3.5 rounded-2xl text-base font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Cuéntame qué te duele</span>
                <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+34648253217"
                className="inline-flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-3.5 rounded-2xl text-sm font-bold hover:bg-white/20 transition-all duration-300"
              >
                <HiPhone className="text-lg" />
                Mi móvil: 648 25 32 17
              </a>
              <a
                href="#hardware"
                className="inline-flex items-center gap-2 text-sm text-emerald-400/80 hover:text-emerald-300 px-5 py-3.5 rounded-2xl border border-white/8 hover:border-emerald-500/30 transition-all duration-300"
              >
                <HiArrowRight className="text-sm" />
                Empieza por 49€/mes · Plan Go
              </a>
              <a
                href="/demo.html"
                className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 px-5 py-3.5 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
              >
                <HiShieldCheck className="text-emerald-400/70" />
                ▶ Ver demo en acción
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-12 flex items-center gap-4 text-xs text-gray-500 flex-wrap"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                Desde 49€/mes · Sin tonterías
              </span>
              <span className="w-px h-3 bg-white/10" />
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                Ya ayudo a gente en La Rioja
              </span>
            </motion.div>
          </div>

          {/* ── RIGHT: Demo interactiva ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="block"
          >
            <div className="relative">
              {/* Glow detrás de la demo */}
              <div className="absolute -inset-8 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent rounded-3xl blur-[60px]" />

              {/* Card demo */}
              <div className="relative bg-[#13132B]/80 backdrop-blur-xl border border-white/8 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/5">
                {/* Demo header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/6">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                    </div>
                    <span className="text-xs text-white/30 font-medium">Empleado Digital · Westlink</span>
                  </div>
                  <button
                    onClick={() => setDemoPlaying(!demoPlaying)}
                    className="text-white/30 hover:text-white/60 transition-colors"
                    aria-label={demoPlaying ? 'Pausar demo' : 'Reanudar demo'}
                  >
                    {demoPlaying ? <HiPause size={14} /> : <HiPlay size={14} />}
                  </button>
                </div>

                {/* Demo messages */}
                <div className="p-4 sm:p-5 space-y-3 min-h-[200px] sm:min-h-[340px]">
                  {demoMessages.slice(0, demoStep + 1).map((msg, i) => {
                    const isLast = i === demoStep
                    return (
                      <motion.div
                        key={i}
                        initial={isLast ? { opacity: 0, y: 8, scale: 0.97 } : { opacity: 1 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[92%] sm:max-w-[85%] rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm leading-relaxed ${
                            msg.role === 'user'
                              ? 'bg-indigo-600/20 border border-indigo-500/15 text-indigo-200'
                              : 'bg-white/6 border border-white/6 text-gray-200'
                          }`}
                        >
                          {msg.text}
                          {isLast && msg.role === 'assistant' && (
                            <span className="inline-flex gap-0.5 ml-1">
                              <span className="w-1 h-1 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                              <span className="w-1 h-1 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                              <span className="w-1 h-1 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            </span>
                          )}
                        </div>
                      </motion.div>
                    )
                  })}

                  {/* Si no ha empezado, muestra placeholder */}
                  {demoStep === 0 && (
                    <div className="flex items-center justify-center h-48 text-white/15 text-sm">
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/40 animate-pulse" />
                        Demo iniciándose...
                      </span>
                    </div>
                  )}
                </div>

                {/* Demo footer - contador */}
                <div className="px-5 py-3 border-t border-white/6 flex items-center justify-between">
                  <span className="text-[10px] text-white/20 font-mono">
                    0{Math.min(demoStep + 1, 9)}/{demoMessages.length.toString().padStart(2, '0')}
                  </span>
                  <div className="flex gap-1">
                    {demoMessages.map((_, i) => (
                      <span
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          i <= demoStep
                            ? 'bg-indigo-400/70 w-3'
                            : 'bg-white/10'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Stats bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden mt-16 border border-white/5"
        >
          {[
            { value: '24/7', label: 'Disponibilidad' },
            { value: '100%', label: 'Datos privados' },
            { value: '3-6', label: 'Meses payback', suffix: 'meses' },
            { value: '+70h', label: 'Ahorro semanal', suffix: 'h/sem' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/[0.02] backdrop-blur-sm px-6 py-5 text-center hover:bg-white/[0.04] transition-colors"
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text-warm">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* ── Trust strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-center mt-8"
        >
          <p className="text-[11px] text-gray-500 flex items-center justify-center gap-4 flex-wrap">
            <span>🔒 IA externa (DeepSeek) no almacena tus datos</span>
            <span className="hidden sm:inline">·</span>
            <span>✅ Hardware local disponible para máxima privacidad</span>
            <span className="hidden sm:inline">·</span>
            <span>📍 Gestionado desde La Rioja</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
