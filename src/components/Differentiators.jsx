import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCpu, FiEye, FiActivity } from 'react-icons/fi'

const diffs = [
  {
    icon: FiActivity,
    title: 'Planificación Constructiva Real',
    desc: 'No es solo una animación visual. Es una herramienta de análisis que refleja la secuencia real de construcción, con sus dependencias, recursos y restricciones operacionales.',
  },
  {
    icon: FiEye,
    title: 'Exploración Interactiva del Proyecto',
    desc: 'Tu proyecto explorable desde cualquier ángulo y momento antes de ejecutarlo. Permite a gerentes, especialistas y clientes entender el proceso sin conocimientos técnicos previos.',
  },
  {
    icon: FiCpu,
    title: 'Información Asistida por IA',
    desc: 'Inteligencia artificial para procesar y validar los datos del proyecto, detectar inconsistencias y enriquecer la simulación con información contextual relevante.',
  },
]

export default function Differentiators() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 px-6 bg-vs-bg">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity:0, y:30 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6 }}
          className="text-center mb-16">
          <span className="text-vs-orange text-sm font-semibold uppercase tracking-widest">Por qué ViuSite</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3">
            Nuestros <span className="text-gradient">diferenciadores</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {diffs.map((d, i) => (
            <motion.div key={i}
              initial={{ opacity:0, x: i % 2 === 0 ? -30 : 30 }} animate={inView ? { opacity:1, x:0 } : {}} transition={{ duration:0.6, delay: 0.15 * i }}
              className="flex flex-col md:flex-row items-start gap-6 bg-vs-surface border border-white/5 rounded-2xl p-8 hover:border-vs-orange/20 transition-all group">
              <div className="w-14 h-14 bg-vs-orange/10 border border-vs-orange/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-vs-orange/20 transition-colors">
                <d.icon className="text-vs-orange" size={26} />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-white mb-3">{d.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
