import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { BsSend, BsCheckCircle, BsExclamationCircle } from 'react-icons/bs'
import { HiArrowRight } from 'react-icons/hi'

const WA = 'https://wa.me/34648253217?text=Hola%20Dani%2C%20quiero%20ver%20c%C3%B3mo%20funciona%20el%20empleado%20digital'

export default function Contacto() {
  const ref = useRef(null)
  const [form, setForm] = useState({ nombre: '', email: '', empresa: '', mensaje: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

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

  const field =
    'w-full rounded-xl bg-white/[0.03] border border-white/[0.1] px-4 py-3 text-[14.5px] text-white placeholder-white/25 outline-none focus:border-[#6366F1] focus:bg-white/[0.05] transition-colors'

  return (
    <section id="contacto" className="sec border-t border-white/[0.06]">
      <div className="wrap" ref={ref}>
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20">
          {/* Info */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="eyebrow mb-5">Contacto</p>
            <h2 className="h2">Hablamos y te lo enseño</h2>
            <p className="lead mt-6">
              Soy Dani, de Villamediana de Iregua. Te atiendo yo, sin comerciales ni bots. Si
              estás por La Rioja o alrededores, quedamos un día y lo ves funcionando con tus
              propios documentos.
            </p>

            <div className="mt-10 space-y-5">
              <div>
                <p className="mono-label mb-1.5">WhatsApp y teléfono</p>
                <a href="tel:+34648253217" className="text-white text-[16px] hover:text-[#A5B4FC] transition-colors">
                  648 25 32 17
                </a>
              </div>
              <div>
                <p className="mono-label mb-1.5">Email</p>
                <a
                  href="mailto:daniel@westlinksl.com"
                  className="text-white text-[16px] hover:text-[#A5B4FC] transition-colors"
                >
                  daniel@westlinksl.com
                </a>
              </div>
              <div>
                <p className="mono-label mb-1.5">Dónde estamos</p>
                <p className="text-white/60 text-[15px]">
                  Villamediana de Iregua, La Rioja
                  <br />
                  Visitas sin coste en La Rioja, Álava, Navarra, Burgos, Soria y Zaragoza.
                </p>
              </div>
            </div>

            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-9">
              Hablar con Dani
              <HiArrowRight />
            </a>
          </motion.div>

          {/* Formulario */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-7 md:p-9"
          >
            <p className="text-white text-[16px] font-medium">O déjame tus datos y te llamo yo</p>
            <p className="text-white/40 text-[13.5px] mt-2">
              Te contesto en el mismo día laborable.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-7">
              <label className="block">
                <span className="block text-[13px] text-white/50 mb-2">Nombre *</span>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className={field}
                />
              </label>
              <label className="block">
                <span className="block text-[13px] text-white/50 mb-2">Email *</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  className={field}
                />
              </label>
            </div>

            <label className="block mt-4">
              <span className="block text-[13px] text-white/50 mb-2">Empresa</span>
              <input
                type="text"
                name="empresa"
                value={form.empresa}
                onChange={handleChange}
                placeholder="Nombre de tu negocio (opcional)"
                className={field}
              />
            </label>

            <label className="block mt-4">
              <span className="block text-[13px] text-white/50 mb-2">¿Qué necesitas? *</span>
              <textarea
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Cuéntame: ¿en qué sector trabajas? ¿cuántos sois en el negocio? ¿qué es lo que más tiempo te quita?"
                className={`${field} resize-none`}
              />
            </label>

            <button type="submit" disabled={status === 'sending'} className="btn btn-primary w-full mt-6 disabled:opacity-60">
              {status === 'sending' ? 'Enviando…' : (<><BsSend /> Enviar mensaje</>)}
            </button>

            <p className="text-[12px] text-white/30 mt-4 leading-relaxed">
              Usamos tus datos solo para responderte. Nada de listas de correo ni de cesiones a
              terceros. Tienes el detalle en la{' '}
              <a href="/privacidad.html" className="link">política de privacidad</a>.
            </p>

            {status === 'success' && (
              <p className="flex items-center gap-2 text-[#A5B4FC] bg-[#4F46E5]/10 border border-[#4F46E5]/25 px-4 py-3 rounded-xl text-[14px] mt-5">
                <BsCheckCircle className="shrink-0" /> Mensaje enviado. Te contesto en el mismo día laborable.
              </p>
            )}
            {status === 'error' && (
              <p className="flex items-center gap-2 text-red-300 bg-red-500/10 border border-red-500/25 px-4 py-3 rounded-xl text-[14px] mt-5">
                <BsExclamationCircle className="shrink-0" /> No se ha podido enviar. Escríbeme a{' '}
                <a href="mailto:daniel@westlinksl.com" className="underline">daniel@westlinksl.com</a>
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
