import { HiServer, HiCog, HiAcademicCap, HiPlay } from 'react-icons/hi'

const steps = [
  {
    icon: HiServer,
    step: '01',
    title: 'Instalamos el servidor',
    desc: 'Montamos el hardware y el software en tu oficina. Mini PC, Mac Mini o tu propio equipo. En menos de 48 horas todo está listo y funcionando.',
  },
  {
    icon: HiCog,
    step: '02',
    title: 'Configuramos la IA',
    desc: 'Desplegamos los modelos de IA que mejor se adaptan a tu negocio. Ollama, Open WebUI, las herramientas que necesites. Todo en Docker, todo local.',
  },
  {
    icon: HiAcademicCap,
    step: '03',
    title: 'Aprende tu negocio',
    desc: 'Alimentamos la IA con tu documentación, tus procesos y tu conocimiento corporativo. Se entrena para hablar tu idioma y entender tu negocio.',
  },
  {
    icon: HiPlay,
    step: '04',
    title: 'Empieza a trabajar',
    desc: 'Desde el día uno tu empleado digital está operativo. Respondiendo emails, generando documentos, automatizando tareas. Y cada día lo hace mejor.',
  },
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Así de <span className="gradient-text">sencillo</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Cuatro pasos y tu empresa tiene un trabajador digital funcionando.
            Sin complicaciones, sin humo, sin esperar meses.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="relative text-center">
                  {/* Number + icon */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center shadow-xl shadow-primary/20 relative z-10">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Step number badge */}
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4">
                    {item.step}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
