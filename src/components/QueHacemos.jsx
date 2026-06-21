import { HiChip, HiShieldCheck, HiClock, HiAcademicCap } from 'react-icons/hi'

const features = [
  {
    icon: HiChip,
    title: 'Tu IA, en tu casa',
    desc: 'Instalamos un servidor de inteligencia artificial dentro de tu empresa. En un Mini PC, un Mac Mini o el equipo que tengas. Todo corre localmente con Docker.',
  },
  {
    icon: HiShieldCheck,
    title: 'Datos que no se van',
    desc: 'Nada de enviar información a servidores externos. Tu documentación, tus clientes, tus procesos — todo se queda donde debe estar: en tu empresa.',
  },
  {
    icon: HiClock,
    title: 'Trabaja 24/7 sin descanso',
    desc: 'Mientras tu equipo duerme, la IA sigue. Respondiendo emails, redactando presupuestos, preparando documentos. Sin bajas, sin vacaciones, sin horarios.',
  },
  {
    icon: HiAcademicCap,
    title: 'Aprende tu negocio',
    desc: 'No es un ChatGPT genérico. La IA aprende tus procedimientos, tu forma de trabajar, tu vocabulario. Se adapta a ti, no al revés.',
  },
]

export default function QueHacemos() {
  return (
    <section id="que-hacemos" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Tu nuevo{' '}
            <span className="gradient-text">empleado digital</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            No te traemos un chatGPT de empresa. Te traemos un miembro del equipo
            que trabaja en silencio, no pide aumento y nunca olvida lo que aprendió.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="group glass-card rounded-2xl p-8 card-shadow card-shadow-hover transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
