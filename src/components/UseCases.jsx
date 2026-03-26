import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiMonitor, FiFileText, FiTool, FiCheckSquare } from 'react-icons/fi'

const cases = [
  { icon: FiMonitor,     title: 'Presentaciones a Cliente y Gerencias', desc: 'Comunica el proyecto de forma visual e impactante a stakeholders técnicos y no técnicos.',   tag: 'Comunicación' },
  { icon: FiFileText,    title: 'Propuestas para Licitaciones',         desc: 'Robustece tu oferta técnica con simulaciones que demuestran dominio del proceso constructivo.', tag: 'Licitaciones' },
  { icon: FiTool,        title: 'Planificación Constructiva',           desc: 'Valida la secuencia constructiva al inicio del proyecto para un arranque de obra sólido.',      tag: 'Planificación' },
  { icon: FiCheckSquare, title: 'Validación Técnica de Procesos',       desc: 'Verifica logística, seguridad y cumplimiento de restricciones de entorno antes de ejecutar.',   tag: 'Validación' },
]

export default function UseCases() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="casos-de-uso" ref={ref} className="py-24 px-6 bg-vs-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity:0, y:30 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6 }}
          className="text-center mb-16">
          <span className="text-vs-orange text-sm font-semibold uppercase tracking-widest">Aplicaciones</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3">
            Casos de <span className="text-gradient">uso</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mt-4">
            ViuSite se adapta a múltiples momentos y necesidades del ciclo de vida del proyecto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.div key={i}
              initial={{ opacity:0, scale:0.95 }} animate={inView ? { opacity:1, scale:1 } : {}} transition={{ duration:0.5, delay: 0.1 + i * 0.12 }}
              className="bg-vs-surface border border-white/5 rounded-2xl p-8 card-hover group">
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 bg-vs-navy/30 border border-vs-navy/40 rounded-xl flex items-center justify-center group-hover:bg-vs-orange/20 group-hover:border-vs-orange/30 transition-all">
                  <c.icon className="text-vs-navy-light group-hover:text-vs-orange transition-colors" size={22} />
                </div>
                <span className="text-xs font-semibold text-vs-orange bg-vs-orange/10 border border-vs-orange/20 px-3 py-1 rounded-full">
                  {c.tag}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">{c.title}</h3>
              <p className="text-gray-400 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
