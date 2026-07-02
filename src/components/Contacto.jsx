import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { BsSend, BsCheckCircle, BsExclamationCircle } from 'react-icons/bs'
import { HiOutlineMail, HiOutlineUser, HiOutlineOfficeBuilding, HiOutlineChat, HiPhone } from 'react-icons/hi'
import { FaMapMarkerAlt } from 'react-icons/fa'

export default function Contacto() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ nombre: '', email: '', empresa: '', mensaje: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.nombre || !form.email || !form.mensaje) return

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Error al enviar')
      setStatus('success')
      setForm({ nombre: '', email: '', empresa: '', mensaje: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="py-20 md:py-28 relative overflow-hidden bg-[#0A0A1A]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A1A] via-[#0F0F2E] to-[#1A1040]" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] animate-float-subtle" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-600/8 rounded-full blur-[100px] animate-float-slow" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/8 text-indigo-300 text-[11px] px-3 py-1.5 rounded-full uppercase tracking-widest font-semibold">
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-5 mb-4">
              ¿Hablamos de tu empleado digital?
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Sin compromiso. Te visitamos, analizamos tu caso y te damos un presupuesto personalizado.
              <br />
              <span className="text-indigo-400/80">Visitas gratuitas en La Rioja y alrededores.</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6 items-start">
            {/* Info sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-2 space-y-4"
            >
              <div className="bg-white/[0.03] backdrop-blur-sm border border-white/6 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <HiOutlineMail />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Email</p>
                    <a href="mailto:daniel@westlinksl.com" className="text-sm text-white hover:text-indigo-300 transition-colors">
                      daniel@westlinksl.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.03] backdrop-blur-sm border border-white/6 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Zona de actuación</p>
                    <p className="text-sm text-gray-300">La Rioja, Álava, Navarra, Burgos, Soria y Zaragoza</p>
                  </div>
                </div>
                <p className="text-xs text-indigo-400/70 leading-relaxed pl-[52px]">
                  Visitas presenciales sin coste en toda la zona.
                </p>
              </div>

              <div className="bg-white/[0.03] backdrop-blur-sm border border-white/6 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <span className="text-sm font-bold">W</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Westlink SL</p>
                    <p className="text-xs text-gray-500">Empresa familiar riojana</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed pl-[52px]">
                  IA privada para PYMES. De La Rioja para España.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="md:col-span-3"
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl shadow-indigo-500/5 space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Nombre *</label>
                    <div className="relative">
                      <HiOutlineUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300" />
                      <input
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/10 transition-all outline-none text-sm text-gray-900"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email *</label>
                    <div className="relative">
                      <HiOutlineMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300" />
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@email.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/10 transition-all outline-none text-sm text-gray-900"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Empresa</label>
                  <div className="relative">
                    <HiOutlineOfficeBuilding className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300" />
                    <input
                      type="text"
                      name="empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Tu empresa (opcional)"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/10 transition-all outline-none text-sm text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">Mensaje *</label>
                  <div className="relative">
                    <HiOutlineChat className="absolute left-3.5 top-3 text-gray-300" />
                    <textarea
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Cuéntanos qué necesitas… ¿cuántos empleados tenéis? ¿en qué sector trabajáis?"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50/50 focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/10 transition-all outline-none text-sm text-gray-900 resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full gradient-primary text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 disabled:opacity-60 text-sm"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <BsSend />
                      Enviar mensaje
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 px-4 py-3 rounded-xl text-sm font-medium border border-emerald-100">
                    <BsCheckCircle className="text-lg shrink-0" />
                    Mensaje enviado correctamente. Te responderemos pronto.
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-700 bg-red-50 px-4 py-3 rounded-xl text-sm font-medium border border-red-100">
                    <BsExclamationCircle className="text-lg shrink-0" />
                    Error al enviar. Escríbenos a <a href="mailto:daniel@westlinksl.com" className="underline font-semibold">daniel@westlinksl.com</a>
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
