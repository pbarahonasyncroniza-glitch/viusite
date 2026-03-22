import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const pillars = [
  {
    num: '01',
    title: 'Anticipación',
    desc: 'Detecta interferencias y riesgos antes de que lleguen a obra.',
  },
  {
    num: '02',
    title: 'Coordinación',
    desc: 'Alinea a todo el equipo con una visión compartida del proyecto.',
  },
  {
    num: '03',
    title: 'Control Operacional',
    desc: 'Gestiona todos los factores que afectan la ejecución en terreno.',
  },
]

export default function Benefits() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="beneficios" ref={ref} className="py-24 px-6 bg-vs-bg-light">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity:0, y:30 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6 }}
          className="text-center mb-16">
          <span className="text-vs-orange text-sm font-semibold uppercase tracking-widest">Beneficios</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3">
            Tres pilares de <span className="text-gradient">impacto real</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:30 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6, delay: 0.2 + i * 0.15 }}
              className="relative bg-vs-surface border border-white/5 rounded-2xl p-8 overflow-hidden card-hover">
              <div className="absolute top-2 right-4 font-display font-black text-8xl text-vs-navy/25 select-none leading-none pointer-events-none">
                {p.num}
              </div>
              <div className="relative z-10">
                <div className="w-1 h-12 bg-gradient-to-b from-vs-orange to-vs-orange/20 rounded-full mb-6" />
                <h3 className="font-display font-bold text-2xl text-white mb-3">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
