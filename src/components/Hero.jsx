import { motion } from 'framer-motion'
import { HiArrowRight, HiShieldCheck } from 'react-icons/hi'
import { FaWineBottle } from 'react-icons/fa'
import { BsCpu } from 'react-icons/bs'

export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 text-white/90 text-sm px-4 py-2 rounded-full mb-8"
          >
            <FaWineBottle className="text-accent-light" />
            <span>Empresa familiar riojana</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <BsCpu className="text-primary-light" />
            <span>IA Privada para PYMES</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Tu empresa merece un
            <span className="block gradient-warm mt-2">empleado que nunca duerma</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            No vendemos software. Instalamos un trabajador digital en tu empresa.
            <span className="text-accent-light font-semibold"> 24/7. Sin sueldos. Sin vacaciones. Sin límites.</span>
            <br />
            <span className="text-gray-400 text-base">Datos privados, instalación local, cien por cien tuyo.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contacto"
              className="gradient-primary text-white px-8 py-4 rounded-2xl text-lg font-semibold flex items-center gap-2 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 animate-pulse-glow"
            >
              Quiero mi empleado IA
              <HiArrowRight className="text-xl" />
            </a>
            <a
              href="#que-hacemos"
              className="border border-white/20 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
            >
              <HiShieldCheck className="text-xl text-accent-light" />
              Cómo funciona
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto"
          >
            {[
              { value: '24/7', label: 'Disponibilidad total' },
              { value: '100%', label: 'Datos privados' },
              { value: '3-6', label: 'Meses payback' },
              { value: '+70h', label: 'Ahorro semanal' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5">
                <div className="text-2xl md:text-3xl font-bold gradient-warm">{stat.value}</div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
