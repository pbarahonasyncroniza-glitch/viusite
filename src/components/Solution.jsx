import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiPlay, FiLayers, FiZap, FiSettings, FiBarChart2 } from 'react-icons/fi'

const features = [
  { icon: FiLayers,   title: 'Secuencia Real de Ejecución',  desc: 'Visualiza exactamente cómo se construirá tu proyecto, actividad por actividad, en el espacio y el tiempo.' },
  { icon: FiZap,      title: 'Detección de Interferencias',  desc: 'Identifica conflictos entre especialidades y solapamientos críticos antes de que lleguen a obra.' },
  { icon: FiSettings, title: 'Variables Operacionales',      desc: 'Incorpora logística, seguridad, restricciones de entorno y áreas protegidas en la simulación.' },
  { icon: FiBarChart2,title: 'Decisiones Informadas',        desc: 'Comunicación visual clara para todos los actores: equipo técnico, gerencias y clientes.' },
]

const VIDEO_URL = '/videos/carcel-antofagasta-4d.mp4'
const PROJECT_URL = 'https://preeminent-ganache-e0c8cc.netlify.app/'


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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
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

        {/* Video Placeholder */}
       {/* Video real */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.6 }}
  className="relative bg-vs-surface border border-white/5 rounded-2xl overflow-hidden hover:border-vs-orange/30 transition-all duration-300"
>
  <div className="relative aspect-video bg-black">
    <video
      className="w-full h-full object-cover"
      src={VIDEO_URL}
      autoPlay
      muted
      loop
      playsInline
      controls
    />
  </div>

  <div className="p-6 md:p-8 bg-gradient-to-br from-vs-navy/10 to-vs-orange/5">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-vs-orange mb-3">
          <FiPlay size={14} />
          Proyecto destacado
        </span>

        <h3 className="font-display font-bold text-2xl text-white mb-2">
          Cárcel Antofagasta — Simulación 4D
        </h3>

        <p className="text-gray-400 max-w-2xl">
          Visualización realista del avance constructivo, secuencias de obra y lectura espacial del proyecto
          para clientes, equipos técnicos y toma de decisiones.
        </p>
      </div>

      <a
        href={PROJECT_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-vs-orange px-5 py-3 text-sm font-semibold text-white transition hover:bg-vs-orange-light whitespace-nowrap"
      >
        Abrir visualización 3D
      </a>
    </div>
  </div>
</motion.div>

      </div>
    </section>
  )
}
