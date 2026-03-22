import { motion } from 'framer-motion'
import { FiChevronDown, FiPlay, FiExternalLink } from 'react-icons/fi'

const LOGO_URL = '/logo-viusite.png'
const YOUTUBE_ID = 'cDwVH2caK-w'
const PROJECT_URL = 'https://preeminent-ganache-e0c8cc.netlify.app/'

export default function Hero() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay },
  })

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-vs-bg">
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080d1a]/40 via-transparent to-[#080d1a]" />

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 pt-28 pb-16">
        <div className="grid xl:grid-cols-[0.8fr_1.2fr] gap-10 xl:gap-14 items-center">

          {/* Columna izquierda */}
          <div className="max-w-xl">
            <motion.div {...fadeUp(0.1)} className="mb-6">
              <img
                src={LOGO_URL}
                alt="ViuSite"
                className="h-16 md:h-20 w-auto"
                style={{ filter: 'drop-shadow(0 0 25px rgba(232,98,26,0.45))' }}
              />
            </motion.div>

            <motion.div
              {...fadeUp(0.2)}
              className="inline-flex items-center gap-2 bg-vs-orange/10 border border-vs-orange/30 text-vs-orange-light text-sm font-medium px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-vs-orange-light animate-pulse" />
              Simulación 4D para Construcción
            </motion.div>

            <motion.h1
              {...fadeUp(0.35)}
              className="font-display font-extrabold text-5xl md:text-6xl xl:text-7xl leading-none mb-5"
            >
              <span className="text-gradient">See it</span>
              <br />
              <span className="text-white">before it's built</span>
            </motion.h1>

            <motion.p {...fadeUp(0.5)} className="text-xl md:text-2xl text-gray-300 font-light mb-4">
              Visualizamos tu proyecto{' '}
              <span className="text-white font-medium">antes de construirlo</span>
            </motion.p>

            <motion.p {...fadeUp(0.65)} className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed">
              Simulación 4D que integra tu BIM y tu Gantt para visualizar,
              anticipar y decidir antes de ejecutar. Muestra el desarrollo del
              proyecto de forma clara tanto para especialistas como para no especialistas.
            </motion.p>

            <motion.div {...fadeUp(0.8)} className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#contacto" className="bg-vs-orange hover:bg-vs-orange-light text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30 text-lg text-center">
                Solicitar Demo
              </a>
              <a href={PROJECT_URL} target="_blank" rel="noopener noreferrer" className="border border-white/20 hover:border-vs-orange/50 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:bg-white/5 text-lg inline-flex items-center justify-center gap-2">
                Ver visualización 3D
                <FiExternalLink size={18} />
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.95)} className="grid grid-cols-3 gap-6">
              {[
                { value: '4D',   label: 'Simulación integrada' },
                { value: '6',    label: 'Pasos metodología' },
                { value: '100%', label: 'BIM + Gantt integrado' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="font-display font-black text-3xl md:text-4xl text-gradient">{stat.value}</div>
                  <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Columna derecha - YouTube embed */}
          <motion.div {...fadeUp(0.45)} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-vs-navy/20 to-vs-orange/20 blur-3xl opacity-70 rounded-3xl" />

            <div className="relative bg-vs-surface/80 backdrop-blur-sm border border-white/10 rounded-3xl p-4 md:p-5 shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between mb-3 px-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-vs-orange bg-vs-orange/10 border border-vs-orange/20 px-3 py-1.5 rounded-full">
                  <FiPlay size={13} />
                  Simulación 4D destacada
                </div>
                <span className="text-xs text-gray-400 hidden sm:block">
                  Cárcel Antofagasta · Ingevec
                </span>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_ID}&controls=1&rel=0&modestbranding=1`}
                  title="Simulación 4D - Cárcel Antofagasta"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="pt-5 px-2">
                <h3 className="text-white font-display font-bold text-2xl md:text-3xl mb-2">
                  Proyecto destacado: Cárcel Antofagasta
                </h3>
                <p className="text-gray-400 text-sm md:text-base mb-4 leading-relaxed">
                  Visualización 4D realista para comunicar secuencia constructiva,
                  planificación y comprensión espacial del proyecto.
                </p>
                <a href={PROJECT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-vs-orange hover:text-vs-orange-light font-semibold transition-colors">
                  Abrir visualización 3D completa
                  <FiExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#problema" className="text-gray-400 hover:text-white transition-colors flex flex-col items-center gap-1">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <FiChevronDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
