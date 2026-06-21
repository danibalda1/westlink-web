import { motion } from 'framer-motion'

const techs = [
  { name: 'Docker', icon: '🐳' },
  { name: 'Linux', icon: '🐧' },
  { name: 'Ollama', icon: '🦙' },
  { name: 'Open WebUI', icon: '🌐' },
  { name: 'Qwen', icon: '🧠' },
  { name: 'DeepSeek', icon: '🔍' },
  { name: 'Llama', icon: '🦙' },
  { name: 'Gemma', icon: '💎' },
  { name: 'Tailscale', icon: '🔗' },
  { name: 'Cockpit', icon: '📊' },
  { name: 'OpenClaw', icon: '⚡' },
  { name: 'MCP', icon: '🔌' },
]

export default function Tecnologias() {
  return (
    <section id="tecnologias" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Tecnología <span className="gradient-text">de verdad</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            No usamos cajas negras ni soluciones mágicas. Stack abierto, transparente
            y auditable. Lo último en IA local, instalado en tus servidores.
          </p>
        </div>

        {/* Tech grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
        >
          {techs.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-gray-100 card-shadow hover:border-primary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="text-3xl">{tech.icon}</span>
              <span className="text-xs font-medium text-gray-600 text-center leading-tight">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
