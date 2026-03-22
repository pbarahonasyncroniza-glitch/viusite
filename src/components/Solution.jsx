import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiLayers, FiZap, FiSettings, FiBarChart2 } from 'react-icons/fi'

const features = [
  { icon: FiLayers,    title: 'Secuencia Real de Ejecución', desc: 'Visualiza exactamente cómo se construirá tu proyecto, actividad por actividad, en el espacio y el tiempo.' },
  { icon: FiZap,       title: 'Detección de Interferencias', desc: 'Identifica conflictos entre especialidades y solapamientos críticos antes de que lleguen a obra.' },
  { icon: FiSettings,  title: 'Variables Operacionales',     desc: 'Incorpora logística, seguridad, restricciones de entorno y áreas protegidas en la simulación.' },
  { icon: FiBarChart2, title: 'Decisiones Informadas',       desc: 'Comunicación visual clara para todos los actores: equipo técnico, gerencias y clientes.' },
]

export default function Solution() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="solucion" ref={ref} className="py-24 px-6 bg-vs-bg relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div initial={{ opacity:0, y:30 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6 }}
          className="text-center mb-16">
          <span className="text-vs-orange text-sm font-semibold uppercase tracking-widest">La solución</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3 mb-4">
            Gantt + BIM = <span className="text-gradient">Simulación 4D</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Convertimos tus herramientas existentes en una simulación integrada que reduce riesgos y mejora la toma de decisiones.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:20 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.5, delay: 0.15 + i * 0.1 }}
              className="bg-vs-surface border border-white/5 rounded-2xl p-8 card-hover group">
              <div className="w-12 h-12 bg-vs-orange/10 border border-vs-orange/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-vs-orange/20 transition-colors">
                <f.icon className="text-vs-orange" size={24} />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
