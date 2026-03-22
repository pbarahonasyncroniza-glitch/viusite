import { motion } from 'framer-motion'
import { FiChevronDown, FiPlay, FiExternalLink } from 'react-icons/fi'

const YOUTUBE_ID = 'cDwVH2caK-w'
const PROJECT_URL = 'https://preeminent-ganache-e0c8cc.netlify.app/'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-vs-bg pt-24 pb-16 px-6">
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080d1a]/40 via-transparent to-[#080d1a]" />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-8">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-vs-orange/10 border border-vs-orange/30 text-vs-orange-light text-sm font-medium px-4 py-2 rounded-full"
        >
          <span className="w-2 h-2 rounded-full bg-vs-orange-light animate-pulse" />
          Simulación 4D para Construcción
        </motion.div>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display font-extrabold text-6xl md:text-7xl xl:text-8xl leading-none"
        >
          <span className="text-gradient">See it</span>
          <br />
          <span className="text-white">before it's built</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl"
        >
          Visualizamos tu proyecto <span className="text-white font-medium">antes de construirlo</span>
        </motion.p>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full"
        >
          <div className="relative bg-vs-surface/80 backdrop-blur-sm border border-white/10 rounded-3xl p-3 shadow-2xl shadow-black/40">
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
          </div>
        </motion.div>

        {/* Botones CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-center gap-4 w-full px-8 sm:px-20 md:px-32"
        >
          <a
            href="#contacto"
            style={{ backgroundColor: '#e8621a' }}
            className="text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:shadow-orange-500/30 text-center flex-1"
          >
            Solicitar Demo
          </a>
          <a
            href={PROJECT_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: '#1a2b8c' }}
            className="text-white font-semibold text-base px-8 py-3.5 rounded-xl transition-all duration-200 hover:opacity-90 hover:shadow-xl hover:shadow-blue-500/20 inline-flex items-center justify-center gap-2 flex-1"
          >
            Ingresa a Plataforma 4D
            <FiExternalLink size={16} />
          </a>
        </motion.div>

      </div>

      {/* Scroll indicator */}
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
