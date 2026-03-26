import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiExternalLink, FiBox, FiHome } from 'react-icons/fi'

const project = {
  title: 'Demo',
  company: 'ViuSite',
  url: 'https://preeminent-ganache-e0c8cc.netlify.app/',
  description:
    'Explora una visualización 3D realista del proyecto. Este apartado permite mostrar una experiencia inmersiva del avance y la espacialidad del proyecto, alineada con la propuesta de valor de ViuSite.',
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="proyectos" ref={ref} className="py-24 px-6 bg-vs-bg relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-vs-orange text-sm font-semibold uppercase tracking-widest">Portafolio</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3 mb-4">
            Proyectos <span className="text-gradient">destacados</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Muestra proyectos reales con acceso directo a visualizaciones inmersivas para clientes, gerencias y equipos técnicos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-vs-surface border border-white/5 rounded-3xl overflow-hidden shadow-2xl shadow-black/20"
        >
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-8 md:p-10 lg:p-12">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-vs-orange bg-vs-orange/10 border border-vs-orange/20 px-3 py-1.5 rounded-full">
                  <FiBox size={14} />
                  Visualización 3D
                </span>
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-vs-navy-light bg-vs-navy/20 border border-vs-navy/30 px-3 py-1.5 rounded-full">
                  <FiHome size={14} />
                  {project.company}
                </span>
              </div>

              <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">
                {project.title}
              </h3>
              <p className="text-vs-orange-light font-medium mb-5">{project.company}</p>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8">
                {project.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-vs-orange hover:bg-vs-orange-light text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30"
                >
                  Abrir visualización 3D
                  <FiExternalLink size={18} />
                </a>

                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center border border-white/15 hover:border-vs-orange/40 text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 hover:bg-white/5"
                >
                  Solicitar demo similar
                </a>
              </div>
            </div>

            <div className="relative min-h-[260px] lg:min-h-full bg-gradient-to-br from-vs-navy/30 via-vs-bg-light to-vs-orange/10 border-t lg:border-t-0 lg:border-l border-white/5 flex items-center justify-center p-8">
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div className="relative w-full max-w-sm">
                <div className="rounded-2xl border border-vs-orange/20 bg-black/20 backdrop-blur-sm p-6 shadow-lg shadow-orange-500/10">
                  <div className="aspect-[4/3] rounded-xl border border-white/10 bg-gradient-to-br from-vs-navy/40 to-vs-orange/20 flex items-center justify-center mb-5">
                    <div className="text-center px-4">
                      <FiBox className="mx-auto text-vs-orange mb-3" size={34} />
                      <p className="text-white font-semibold">Proyecto interactivo</p>
                      <p className="text-gray-400 text-sm mt-1">Acceso externo a la vista 3D</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    {/* <div className="flex items-center justify-between gap-3">
                      <span className="text-gray-500">Proyecto</span>
                      <span className="text-white font-medium text-right">Cárcel Antofagasta</span>
                    </div> */}
                    {/* <div className="flex items-center justify-between gap-3">
                      <span className="text-gray-500">Constructora</span>
                      <span className="text-white font-medium text-right">Ingevec</span>
                    </div> */}
                    {/* <div className="flex items-center justify-between gap-3">
                      <span className="text-gray-500">Tipo</span>
                      <span className="text-white font-medium text-right">Visualización 3D realista</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
