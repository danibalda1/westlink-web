import { HiArrowRight } from 'react-icons/hi'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background subtle grid */}
      <div className="absolute inset-0 subtle-grid" />

      {/* Gradient decoration */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-accent/10 via-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-sm font-medium text-primary mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            🇪🇸 Empresa familiar riojana · IA privada para PYMES
          </div>

          {/* Main title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6 animate-fade-up">
            Tu empresa merece un{' '}
            <span className="gradient-text">empleado que nunca duerma</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            No vendemos software. Instalamos un trabajador digital en tu empresa.
            24/7. Sin sueldos. Sin vacaciones. Sin límites.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white gradient-bg rounded-full hover:opacity-90 transition-all duration-200 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30"
            >
              Solicitar demostración
              <HiArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-full hover:border-primary/30 hover:text-primary hover:shadow-lg transition-all duration-200"
            >
              Hablar con un especialista
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-400 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Sin enviar datos a la nube
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Instalación en 48h
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Datos 100% privados
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
