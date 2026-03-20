import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  { num: '01', title: 'Recepción & Revisión',            desc: 'Recibimos y analizamos todos los antecedentes del proyecto: modelo BIM, programa Gantt y documentación técnica relevante.' },
  { num: '02', title: 'Kick Off — Definición de Alcance',desc: 'Reunión de inicio para alinear objetivos, entregables, hitos del proceso y variables operacionales a incorporar.' },
  { num: '03', title: 'Sincronización Modelo–Gantt',     desc: 'Vinculamos el modelo BIM con el programa de obra para crear la base integrada de la simulación 4D.' },
  { num: '04', title: 'Variables Operacionales',         desc: 'Incorporamos logística, seguridad, restricciones de entorno, construcciones cercanas y áreas protegidas en la simulación.' },
  { num: '05', title: 'Simulación & Producción',         desc: 'Generamos la simulación completa con renderizados realistas que muestran el proyecto evolucionando en el tiempo.' },
  { num: '06', title: 'Validación & Entrega',            desc: 'Revisión con el equipo, ajustes finales y entrega del material en los formatos acordados.' },
]

export default function Methodology() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="metodologia" ref={ref} className="py-24 px-6 bg-vs-bg-light">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity:0, y:30 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ duration:0.6 }}
          className="text-center mb-16">
          <span className="text-vs-orange text-sm font-semibold uppercase tracking-widest">Proceso</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3">
            Cómo <span className="text-gradient">trabajamos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mt-4">
            Un proceso estructurado en 6 pasos para garantizar resultados de calidad y alineación con tu equipo.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 md:left-8 top-8 bottom-8 w-px bg-gradient-to-b from-vs-orange via-vs-navy to-transparent" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div key={i}
                initial={{ opacity:0, x:-30 }} animate={inView ? { opacity:1, x:0 } : {}} transition={{ duration:0.5, delay: 0.1 + i * 0.1 }}
                className="flex gap-6 md:gap-10 relative">
                {/* Number Circle */}
                <div className="absolute left-0 w-12 md:w-16 h-12 md:h-16 bg-vs-bg border-2 border-vs-orange rounded-full flex items-center justify-center shrink-0 z-10">
                  <span className="font-display font-black text-vs-orange text-xs md:text-sm">{step.num}</span>
                </div>
                {/* Content */}
                <div className="pl-14 md:pl-20 w-full">
                  <div className="bg-vs-surface border border-white/5 rounded-2xl p-6 hover:border-vs-orange/20 transition-colors">
                    <h3 className="font-display font-bold text-lg text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
